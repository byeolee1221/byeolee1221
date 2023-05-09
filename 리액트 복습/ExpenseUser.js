import ExpenseUserForm from "./ExpenseUserForm";
import "./ExpenseUser.css";

const ExpenseUser = (props) => {
    const userFormDataHandler = (formData) => {
        const userFormData = {
            ...formData, 
            id: Math.random().toString()
        };
        props.onAddList(userFormData);
    }

    return (
        <div className="main_userdata">
            <h2>지출 추가하기</h2>
            <ExpenseUserForm onUserFormData={userFormDataHandler} />
        </div>
    );
}

export default ExpenseUser;