import useBasicForm from "../hooks/use-basicForm";

const isNotEmpty = (value) => value.trim() !== '';

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isTouched: firstNameIsTouched,
    hasError: firstNameIsError,
    enteredValueHandler: firstNameChangeHandler,
    errorHandler: firstNameErrorHandler,
    reset: firstNameInputError 
  } = useBasicForm(isNotEmpty);

  const {
    value: enteredLastName,
    isTouched: lastNameIsTouched,
    hasError: lastNameIsError,
    enteredValueHandler: lastNameChangeHandler,
    errorHandler: lastNameErrorHandler,
    reset: lastNameInputError 
  } = useBasicForm(isNotEmpty);

  const {
    value: enteredEmail,
    isTouched: emailIsTouched,
    hasError: emailIsError,
    enteredValueHandler: emailChangeHandler,
    errorHandler: emailErrorHandler,
    reset: emailInputError 
  } = useBasicForm((value) => value.trim().includes('@'));

  let formIsValid = false;

  if (firstNameIsTouched && lastNameIsTouched && emailIsTouched) {
    formIsValid = true;
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

   console.log(enteredFirstName);
   console.log(enteredLastName);
   console.log(enteredEmail);

   firstNameInputError();
   lastNameInputError();
   emailInputError();
  }

  const firstNameValidClasses = firstNameIsError ? 'form-control invalid' : 'form-control';
  const lastNameValidClasses = lastNameIsError ? 'form-control invalid' : 'form-control';
  const emailValidClasses = emailIsError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={firstNameValidClasses}>
          <label htmlFor='name'>First Name</label>
          <input onChange={firstNameChangeHandler} type='text' id='name' value={enteredFirstName} onBlur={firstNameErrorHandler}/>
          {firstNameIsError && <p className="error-text">Check your first name!</p>}
        </div>
        <div className={lastNameValidClasses}>
          <label htmlFor='name'>Last Name</label>
          <input onChange={lastNameChangeHandler} type='text' id='name' value={enteredLastName} onBlur={lastNameErrorHandler}/>
          {lastNameIsError && <p className="error-text">Check your last name!</p>}
        </div>
      </div>
      <div className={emailValidClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input onChange={emailChangeHandler} type='text' id='name' value={enteredEmail} onBlur={emailErrorHandler}/>
        {emailIsError && <p className="error-text">Check your email!</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
