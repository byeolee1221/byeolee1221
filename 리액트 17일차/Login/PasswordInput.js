const PasswordInput = (props) => {
    return (
            <input
            type="password"
            id="password"
            value={props.onPasswordState.value}
            onChange={props.onPasswordChange}
            onBlur={props.onValidatePassword}
          />
    );
}

export default PasswordInput;