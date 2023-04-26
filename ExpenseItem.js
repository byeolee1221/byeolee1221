import './ExpenseItem.css';

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>April 26th 2023</div>
            <div className="expense-item__description">
                <h2>생필품</h2>
                <div className="expense-item__price">24,400원</div>
            </div>
        </div>
        )
}

export default ExpenseItem;