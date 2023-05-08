import ExpenseUserForm from "./ExpenseUserForm";
import "./ExpenseUser.css";

const ExpenseUser = () => {
    return (
        <div className="main_userdata">
            <h2>지출 추가하기</h2>
            <ExpenseUserForm />
        </div>
    );
}

export default ExpenseUser;