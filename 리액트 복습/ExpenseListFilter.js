import "./ExpenseListFilter.css";

const ExpenseListFilter = (props) => {
    const filterChangeHandler = (event) => {
        const selectedYear = event.target.value;

        props.onFilterChange(selectedYear);
    }

    return (
        <div className="expense_filter_box">
            <label for="select_list">연도별 지출리스트</label>
            <select onChange={filterChangeHandler} value={props.selectYear} name="list_box" id="select_list">
                <option value="2020">2020년</option>
                <option value="2021">2021년</option>
                <option value="2022">2022년</option>
                <option value="2023">2023년</option>
            </select>
        </div>
    );
}

export default ExpenseListFilter;