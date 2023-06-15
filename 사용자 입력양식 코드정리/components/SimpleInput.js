import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  // const nameInputRef = useRef();
  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: enteredNameHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetNameInput
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: enteredEmailHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput
  } = useInput((valueEmail) => valueEmail.trim().includes('@'));

  let formIsValid = false;

  if (nameIsValid && emailIsValid) {
      formIsValid = true;
    };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!nameIsValid || !emailIsValid) {
      return;
    }

    console.log(enteredName);
    console.log(enteredEmail);

    resetNameInput();
    resetEmailInput();
    // const nameSubmit = nameInputRef.current.value;

    // console.log(nameSubmit);

    // nameInputRef.current.value = ''; -> 지양해야 하는 방법. 리액트가 아닌 방법으로 DOM 직접 조작하기 때문
  }

  const nameValidClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
  const emailValidClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameValidClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={enteredNameHandler} onBlur={nameInputBlurHandler} value={enteredName} />
        {nameInputHasError && <p className="error-text">Check your name!</p>}
      </div>
      <div className={emailValidClasses}>
        <label htmlFor='email'>Your E-mail</label>
        <input type='email' id='email' onChange={enteredEmailHandler} onBlur={emailInputBlurHandler} value={enteredEmail} />
        {emailInputHasError && <p className="error-text">Check your E-mail!</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
