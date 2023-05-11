import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const chartDataValues = props.chartData.map((dataValues) => dataValues.value);
    const maxValue = Math.max(...chartDataValues);

    return (
        <div className="main_expense_chart">
            {props.chartData.map((chartBarData) => <ChartBar key={chartBarData.id} value={chartBarData.value} label={chartBarData.label} max={maxValue} />)}
        </div>
    )
}

export default Chart;