import SellDate from "./SellDate";

function SellItems(props) {
    return (
        <div className="box_structure">
            <SellDate date={props.date}></SellDate>
            <div className="box_description">
                <h3>{props.category}</h3>
                <p>{props.name}</p>
            </div>
            <div className="box_price">{props.price}</div>
        </div>
    );
}

export default SellItems;