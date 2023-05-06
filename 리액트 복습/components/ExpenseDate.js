import "./ExpenseDate.css";

const ExpenseDate = (props) => {
    const year = props.date.getFullYear();
    const month = props.date.toLocaleString('ko-KR', {month: 'long'});
    const day = props.date.toLocaleString('ko-KR', {day: '2-digit'});

    return (
        <div className="expenseItem_box_datebox">
            <div className="datebox_year">{year}년</div>
            <div className="datebox_month_day">{month} {day}</div>
        </div>
    )
}

export default ExpenseDate;