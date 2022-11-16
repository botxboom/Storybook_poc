import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { theme } from "../theme/defaultTheme";

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  align-items: center;
  width: ${(props) => props.dotSize * 5 + props.dotSize / 2}px;
  height: ${(props) => props.dotSize}px;

  .text {
    margin-top: ${(props) => props.dotSize}px;
    font-family: "Public Sans", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 17px;
    font-weight: 700;
  }

  .dot {
    position: absolute;
    width: ${(props) => props.dotSize}px;
    height: ${(props) => props.dotSize}px;
    border-radius: 50%;
    background: ${(props) => props.color};
    animation-timing-function: cubic-bezier(0, 1, 1, 0);

    :nth-child(1) {
      left: ${(props) => props.leftOneTwo}px;
      animation: lds-ellipsis1 0.6s infinite;
    }
    :nth-child(2) {
      left: ${(props) => props.leftOneTwo}px;
      animation: lds-ellipsis-${(props) => props.size}-2 0.6s infinite;
    }
    :nth-child(3) {
      left: ${(props) => props.leftThird}px;
      animation: lds-ellipsis-${(props) => props.size}-2 0.6s infinite;
    }
    :nth-child(4) {
      left: ${(props) => props.leftForth}px;
      animation: lds-ellipsis3 0.6s infinite;
    }
  }

  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }

  @keyframes lds-ellipsis-big-2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(48px, 0);
    }
  }
  @keyframes lds-ellipsis-large-2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(32px, 0);
    }
  }
  @keyframes lds-ellipsis-normal-2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }

  @keyframes lds-ellipsis-small-2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(16px, 0);
    }
  }
  @keyframes lds-ellipsis-xsmall-2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(8px, 0);
    }
  }
`;

Wrapper.defaultProps = { theme };

function SpinnerDot(props) {
  let dotSize = 12;
  let leftOneTwo = 6;
  let leftThird = 24;
  let leftForth = 36;
  let color =
    props.color !== "" && typeof props.color !== "undefined"
      ? props.color
      : theme.alertsColors.light.color;

  switch (props.size) {
    case "big":
      dotSize = 24;
      leftOneTwo = 12;
      leftThird = 48;
      leftForth = 96;
      break;
    case "large":
      dotSize = 16;
      leftOneTwo = 8;
      leftThird = 32;
      leftForth = 64;
      break;
    case "normal":
      // Use default values
      break;
    case "small":
      dotSize = 8;
      leftOneTwo = 4;
      leftThird = 16;
      leftForth = 32;
      break;
    case "xsmall":
      dotSize = 4;
      leftOneTwo = 2;
      leftThird = 8;
      leftForth = 16;
      break;
    default:
      // Use default values
      break;
  }
  return (
    <Wrapper
      dotSize={dotSize}
      leftOneTwo={leftOneTwo}
      leftThird={leftThird}
      leftForth={leftForth}
      color={color}
      size={props.size}
    >
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
      <div className="dot" />
      {props.text !== "" && typeof props.text !== "undefined" && (
        <div className="text">{props.text}</div>
      )}
    </Wrapper>
  );
}

export default SpinnerDot;
SpinnerDot.propTypes = {
  size: PropTypes.oneOf(["big", "large", "normal", "small", "xsmall"]),
  text: PropTypes.string,
  color: PropTypes.string,
};
