import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import classes from './Login.module.css';

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return {value: action.val, isValid: action.val.includes('@')};
  }

  if (action.type === 'INPUT_BLUR') {
    return {value: state.value, isValid: state.value.includes('@')};
  }

  return {value: '', isValid: false};
}

const passwordReducer = (state, action) => {
  if (action.type === 'USER_PASSWORD') {
    return {value: action.val, isValid: action.val.trim().length > 6};
  }

  if (action.type === 'INPUT_PASS_BLUR') {
    return {value: state.value, isValid: state.value.trim().length > 6};
  }

  return {value: '', isValid: false};
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, dispatchEmail] = useReducer(emailReducer, {value: '', isValid: null})
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value: '', isValid: null})

  const {isValid: emailIsValid} = emailState;
  const {isValid: passwordIsValid} = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('checking');
      setFormIsValid(
        emailIsValid && passwordIsValid
        );
    }, 500)

    return () => {
      console.log('clean');
      clearTimeout(identifier);
    }
  }, [emailIsValid, passwordIsValid])

  const emailChangeHandler = (event) => {
    dispatchEmail({type: 'USER_INPUT', val: event.target.value})

    // setFormIsValid(
    //   event.target.value.includes('@') && passwordState.value.trim().length > 6
    //   );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type: 'USER_PASSWORD', val: event.target.value})
    // setEnteredPassword(event.target.value);

    // setFormIsValid(
    //   emailState.isValid && passwordState.isValid);
  };

  const validateEmailHandler = () => {
    dispatchEmail({type: 'INPUT_BLUR'})
    // setEmailIsValid(emailState.isValid.includes('@'));
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type: 'INPUT_PASS_BLUR'})
    // setPasswordIsValid(passwordState.isValid.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <EmailInput onEmailChange={emailChangeHandler} onValidateEmail={validateEmailHandler} onEmailState={emailState} />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <PasswordInput onPasswordChange={passwordChangeHandler} onValidatePassword={validatePasswordHandler} onPasswordState={passwordState} />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
