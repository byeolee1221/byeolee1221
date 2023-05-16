import React, {useState} from "react";
import Overlay from "./Overlay";
import "./MainForm.css";

const MainForm = (props) => {
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');
    const [errorDisplay, setErrorDisplay] = useState();

    const userNameHandler = (event) => {
        setUserName(event.target.value);
    }

    const userAgeHandler = (event) => {
        setUserAge(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const userInfo = {
            name: userName,
            age: userAge,
            id: Math.random().toString()
        };

        if (userName.trim().length === 0 || userAge.trim().length === 0) {
            setErrorDisplay({
                msg: '이름이나 나이를 다시 확인해주세요!'
            })
            return;
        } else if (+userAge < 1) {
            setErrorDisplay({
                msg: '나이는 1살 이상이어야 합니다.'
            })
            return;
        }

        props.onAddData(userInfo);

        setUserName('');
        setUserAge('');
        setErrorDisplay();
    }

    return (
        <div className="main_form">
            {errorDisplay && <Overlay onErrorDisplay={errorDisplay} />}
            <form onSubmit={submitHandler}>
                <label htmlFor="user_name">이름</label>
                <input type="text" name="user_name" id="user_name" onChange={userNameHandler} value={userName} />
                <label htmlFor="user_age">나이</label>
                <input type="number" name="user_age" id="user_age" max="100" onChange={userAgeHandler} value={userAge} />
                <button type="submit">내 정보 추가하기</button>
            </form>
        </div>
    );
}

export default MainForm;