import React, {useState} from "react";
import ExpenseUserForm from "./ExpenseUserForm";
import "./ExpenseUser.css";

const ExpenseUser = (props) => {
    const [expenseDisplay, setExpenseDisplay] = useState(false);

    const userFormDataHandler = (formData) => {
        const userFormData = {
            ...formData, 
            id: Math.random().toString()
        };
        props.onAddList(userFormData);
    }

    const expenseDisplayHandler = () => {
        setExpenseDisplay(true);
    }

    const formCancelHandler = () => {
        setExpenseDisplay(false);
    }

    return (
        <div className="main_userdata">
            <h2>지출 추가하기</h2>
            {!expenseDisplay && <button onClick={expenseDisplayHandler} type="button">지출을 추가하려면 여기를 클릭하세요</button>}
            {expenseDisplay && <ExpenseUserForm onUserFormData={userFormDataHandler} onCancel={formCancelHandler} />}
        </div>
    );
}

export default ExpenseUser;