import React, {useState} from "react";
import "./ExpenseUserForm.css";

const ExpenseUserForm = () => {
    const [itemNameChange, setItemNameChange] = useState('');
    const [priceChange, setPriceChange] = useState('');
    const [dateChange, setDateChange] = useState('');

    const itemNameChangeHandler = (event) => {
        setItemNameChange(event.target.value);
        console.log(itemNameChange);
    }

    const priceChangeHandler = (event) => {
        setPriceChange(event.target.value);
        console.log(priceChange);
    }

    const dateChangeHandler = (event) => {
        setDateChange(event.target.value);
        console.log(dateChange);
    }

    return (
        <form>
            <div className="user_form">
                <label for="user_expense_itemName">구입한 물품명</label>
                <input onChange={itemNameChangeHandler} type="text" name="itemName" id="user_expense_itemName" required />
                <label for="user_item_price">물품가격</label>
                <input onChange={priceChangeHandler} type="number" name="price" id="user_item_price" min="100" step="100" required />
                <label for="user_expense_date">구입날짜</label>
                <input onChange={dateChangeHandler} type="date" name="expenseDate" id="user_expense_date" min="2020-01-01" max="2023-12-31" required />
                <button id="form_btn" type="submit">리스트에 추가하기</button>
            </div>
        </form>
    );
}

export default ExpenseUserForm;