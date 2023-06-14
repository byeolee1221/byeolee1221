import { useState } from 'react';

const SimpleInput = (props) => {
  // const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [nameTouched, setNameTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);

  const nameIsValid = enteredName.trim() !== '';
  const enteredNameInvalid = !nameIsValid && nameTouched;
  const emailIsValid = enteredEmail.trim().includes('@');
  const enteredEmailInvalid = !emailIsValid && emailTouched;

  let formIsValid = false;

  if (nameIsValid && emailIsValid) {
      formIsValid = true;
    };

  const enteredNameHandler = (event) => {
    setEnteredName(event.target.value);
  }

  const enteredEmailHandler = (event) => {
    setEnteredEmail(event.target.value);
  }

  const nameInputBlurHandler = (event) => {
    setNameTouched(true);
  }

  const emailInputBlurHandler = (event) => {
    setEmailTouched(true);
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    setNameTouched(true);
    setEmailTouched(true);

    if (!nameIsValid || !emailIsValid) {
      return;
    }

    console.log(enteredName);
    console.log(enteredEmail);

    // const nameSubmit = nameInputRef.current.value;

    // console.log(nameSubmit);

    // nameInputRef.current.value = ''; -> 지양해야 하는 방법. 리액트가 아닌 방법으로 DOM 직접 조작하기 때문
    setEnteredName('');
    setNameTouched(false);
    setEnteredEmail('');
    setEmailTouched(false);
  }

  const nameValidClasses = enteredNameInvalid ? 'form-control invalid' : 'form-control';
  const emailValidClasses = enteredEmailInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameValidClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={enteredNameHandler} onBlur={nameInputBlurHandler} value={enteredName} />
        {enteredNameInvalid && <p className="error-text">Check your name!</p>}
      </div>
      <div className={emailValidClasses}>
        <label htmlFor='email'>Your E-mail</label>
        <input type='email' id='email' onChange={enteredEmailHandler} onBlur={emailInputBlurHandler} value={enteredEmail} />
        {enteredEmailInvalid && <p className="error-text">Check your E-mail!</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
