import React, {useState, useRef} from "react";
import Overlay from "./Overlay";
import "./MainForm.css";

const MainForm = (props) => {
    const nameRef = useRef();
    const ageRef = useRef();

    // const [userName, setUserName] = useState('');
    // const [userAge, setUserAge] = useState('');
    const [errorDisplay, setErrorDisplay] = useState();

    // const userNameHandler = (event) => {
    //     setUserName(event.target.value);
    // }

    // const userAgeHandler = (event) => {
    //     setUserAge(event.target.value);
    // }

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredName = nameRef.current.value;
        const enteredAge = ageRef.current.value;

        const userInfo = {
            name: enteredName,
            age: enteredAge,
            id: Math.random().toString()
        };

        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setErrorDisplay({
                msg: '이름이나 나이를 다시 확인해주세요!'
            })
            return;
        } else if (+enteredAge < 1) {
            setErrorDisplay({
                msg: '나이는 1살 이상이어야 합니다.'
            })
            return;
        }

        props.onAddData(userInfo);

        nameRef.current.value = '';
        ageRef.current.value = '';

        // setUserName('');
        // setUserAge('');
        setErrorDisplay();
    }

    return (
        <div className="main_form">
            {errorDisplay && <Overlay onErrorDisplay={errorDisplay} />}
            <form onSubmit={submitHandler}>
                <label htmlFor="user_name">이름</label>
                <input type="text" name="user_name" id="user_name" ref={nameRef} />
                <label htmlFor="user_age">나이</label>
                <input type="number" name="user_age" id="user_age" max="100" ref={ageRef} />
                <button type="submit">내 정보 추가하기</button>
            </form>
        </div>
    );
}

export default MainForm;