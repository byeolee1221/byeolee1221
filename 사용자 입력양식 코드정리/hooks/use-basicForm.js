import { useState } from "react";

const useBasicForm = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const enteredValueHandler = (event) => {
        setEnteredValue(event.target.value);
    }

    const errorHandler = (event) => {
        setIsTouched(true);
    }

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    }

    return {
        value: enteredValue,
        isTouched: valueIsValid,
        hasError,
        enteredValueHandler,
        errorHandler,
        reset
    }
}

export default useBasicForm;