import "./ChartBar.css";

const ChartBar = (props) => {
    let chartBarHeight = '0%';

    if (props.max > 0) {
        chartBarHeight = Math.round((props.value / props.max) * 100) + '%';
    }

    return (
        <div className="main_expense_chartBar">
            <div className="chartBar_inner">
                <div className="chartBar_inner_fill" style={{height: chartBarHeight}}></div>
            </div>
            <div className="chartBar_label">
                {props.label}
            </div>
        </div>
    );
}

export default ChartBar;