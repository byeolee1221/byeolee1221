function SellDate(props) {
    const year = props.date.getFullYear();
    const month = props.date.toLocaleString('ko-KR', {month: 'long'});
    const day = props.date.toLocaleString('ko-KR', {day: '2-digit'});

    return (
        <div className="sell_date">
            <div className="date_year">{year}년</div>
            <div className="date_month">{month}</div>
            <div className="date_day">{day}</div>
        </div>
    )
}

export default SellDate;