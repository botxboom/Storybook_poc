import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { theme } from "../theme/defaultTheme";
import SpinnerDot from "./SpinnerDot";

const ButtonWrapper = styled.button.attrs(({ type, theme }) => {
  let backgroundColor;
  let textColor;
  let borderColor;
  let hoverColor;
  let hoverbg;
  let hoverborder;

  switch (type) {
    case "primary":
      textColor = theme.buttons.primaryText;
      backgroundColor = theme.buttons.primary;
      hoverColor = theme.buttons.primaryText;
      borderColor = theme.buttons.primaryBorder;
      hoverbg = theme.buttons.primaryHover;
      break;
    case "trinary":
      hoverColor = theme.buttons.primaryHover;
      borderColor = "transparent";
      textColor = theme.buttons.secondaryText;
      backgroundColor = "transparent";
      break;
    case "secondary":
      textColor = theme.buttons.secondaryText;
      backgroundColor = "transparent";
      borderColor = theme.buttons.secondaryBorder;
      hoverborder = theme.buttons.primary;
      break;
    default:
      return;
  }

  return {
    textColor,
    backgroundColor,
    hoverColor,
    borderColor,
    hoverbg,
    hoverborder,
  };
})`
  font-family: "Public Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 500;
  font-size: 14px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ textColor }) => textColor};
  border: 2px solid ${({ borderColor }) => borderColor};
  border-radius: 6px;
  padding: 0.6rem 1.5rem;
  min-width: 100px;
  transition-duration: 0.4s;
  letter-spacing: 0.6px;

  :focus,
  :hover {
    color: ${({ hoverColor }) => hoverColor};
    background-color: ${({ hoverbg }) => hoverbg};
    border-color: ${({ hoverborder }) => hoverborder};
    cursor: pointer;
  }

  :active {
    background-color: ${({ theme }) => theme.grays.gray20};
    border: 2px solid ${({ theme }) => theme.grays.gray20};
  }

  &[disabled] {
    opacity: 0.8;
    cursor: not-allowed;
  }
`;

ButtonWrapper.defaultProps = { theme };

/**
 * A Button Component With multiple states
 */
function Button(props) {
  let text = "";
  let showLoading = props.loading === "true" || props.loading === true;
  if (showLoading && props.showDotSpinner) {
    text = <SpinnerDot size="small" color={"white"} />;
  } else if (showLoading && props.loadingText) {
    text = props.loadingText;
  } else if (showLoading) {
    text = "Loading...";
  } else {
    text = props.children;
  }
  const disabled =
    props.disabled === true || props.disabled === "disabled" || showLoading
      ? true
      : false;

  return (
    <ButtonWrapper
      type={props.type}
      data-testid={props.testid}
      disabled={disabled}
      className={props.className}
      onClick={props.onClick}
      loading={props.loading ? "true" : "false"}
    >
      {text}
    </ButtonWrapper>
  );
}

export default Button;

Button.defaultProps = {
  testid: "btn",
  type: "primary",
};

Button.propTypes = {
  /**
   * type of button
   */
  type: PropTypes.oneOf(["primary", "secondary", "trinary"]),
  /**
   * used for unit testing
   */
  testid: PropTypes.string,
  /**
   * label for button
   */
  children: PropTypes.node.isRequired,
  /**
   * callback button for onClick
   */
  onClick: PropTypes.func,
  /**
   * a boolean for show loading
   */
  loading: PropTypes.bool,
  /**
   * set loading text as label for button
   */
  loadingText: PropTypes.string,
  /**
   * a boolean to make button disabled
   */
  disabled: PropTypes.bool,
  /**
   * a boolean to show dot spinner as button label
   */
  showDotSpinner: PropTypes.bool,
};
