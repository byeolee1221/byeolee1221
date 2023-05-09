import React, {useState} from "react";
import "./ExpenseUserForm.css";

const ExpenseUserForm = (props) => {
    const [itemNameChange, setItemNameChange] = useState('');
    const [priceChange, setPriceChange] = useState('');
    const [dateChange, setDateChange] = useState('');

    const itemNameChangeHandler = (event) => {
        setItemNameChange(event.target.value);
    }

    const priceChangeHandler = (event) => {
        setPriceChange(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setDateChange(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const userFormData = {
            itemName: itemNameChange,
            price: priceChange,
            date: new Date(dateChange)
        };

        props.onUserFormData(userFormData);

        setItemNameChange('');
        setPriceChange('');
        setDateChange('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="user_form">
                <label for="user_expense_itemName">구입한 물품명</label>
                <input onChange={itemNameChangeHandler} type="text" name="itemName" id="user_expense_itemName" value={itemNameChange} required />
                <label for="user_item_price">물품가격</label>
                <input onChange={priceChangeHandler} type="number" name="price" id="user_item_price" min="100" step="100" value={priceChange} required />
                <label for="user_expense_date">구입날짜</label>
                <input onChange={dateChangeHandler} type="date" name="expenseDate" id="user_expense_date" min="2020-01-01" max="2023-12-31" value={dateChange} required />
                <button id="form_btn" type="submit">리스트에 추가하기</button>
            </div>
        </form>
    );
}

export default ExpenseUserForm;