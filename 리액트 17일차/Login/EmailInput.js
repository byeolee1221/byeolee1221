const EmailInput = (props) => {
    return (
            <input
            type="email"
            id="email"
            value={props.onEmailState.value}
            onChange={props.onEmailChange}
            onBlur={props.onValidateEmail}
          />
    );
}

export default EmailInput;