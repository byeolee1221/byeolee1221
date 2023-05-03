import './ExpenseFilter.css';

const ExpenseFilter = (props) => {
    const dropdownChangeHandler = (event) => {
        props.onFilterChange(event.target.value);
    }

    return (
    <div className="expenses-filter ">
        <div className="expenses-filter__control">
            <label for="user_filter">Filter by year</label>
            <select value={props.selected} name="filter" id="user_filter" onChange={dropdownChangeHandler}>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
            </select>
        </div>
    </div>
    );
}

export default ExpenseFilter;