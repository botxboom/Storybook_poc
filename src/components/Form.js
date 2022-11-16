import React, { useState } from "react";
import PropTypes from "prop-types";
// import "../form.css";

/**
 * A login form to handle user credentials */
function Form({ userName, password, onChange }) {
  const [showAlert, setShowAlert] = useState(false);
  const successAlert = "Logged In Successfully";

  const onFormSubmit = (e) => {
    e.preventDefault();

    setShowAlert(!showAlert);
  };

  const form = (
    <div class="wrapper fadeInDown">
      <div id="formContent">
        <h2 class="active"> Sign In </h2>

        <form onSubmit={onFormSubmit}>
          <input
            type="text"
            id="login"
            class="fadeIn second"
            name="login"
            placeholder="email"
            value={userName}
            onChange={onChange}
          />
          <input
            type="password"
            id="password"
            class="fadeIn third"
            name="login"
            placeholder="password"
            value={password}
            onChange={onChange}
          />
          <button class="fadeIn fourth">LOG IN</button>
          <h3 className="alert">{showAlert && successAlert}</h3>
        </form>

        <div id="formFooter">
          <a class="underlineHover">Forgot Password?</a>
        </div>
      </div>
    </div>
  );

  //   const oldForm = (
  //     <FormWrapper>
  //       <div className="form-header">
  //         <h1>Login Form</h1>
  //       </div>

  //       <label htmlFor="email">email</label>
  //       <InputWrapper
  //         type="email"
  //         id="email"
  //         value={userName}
  //         onChange={onChange}
  //       />
  //       <label htmlFor="password">password</label>
  //       <InputWrapper
  //         type="password"
  //         id="password"
  //         value={password}
  //         onChange={onChange}
  //       />
  //       <Button
  //         type="primary"
  //         onClick={() => {
  //           setSuccessAlert("Logged In Successfully");
  //         }}
  //       >
  //         Log In
  //       </Button>
  //       <h1 className="alert">{successAlert}</h1>
  //     </FormWrapper>
  //   );

  return form;
}

export default Form;

Form.propTypes = {
  /**
   * userName of the user
   */
  userName: PropTypes.string,
  /**
   * password of the user
   */
  //password of the user
  password: PropTypes.string,
  /**
   * on input field change callback
   */
  onChange: PropTypes.func,
};
