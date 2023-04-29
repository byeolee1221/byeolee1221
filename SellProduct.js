import SellItems from "./SellItems"

function SellProduct(props) {
    return (
        <div className="sell_product">
            <SellItems date={props.items[0].date} category={props.items[0].category} name={props.items[0].name} price={props.items[0].price}></SellItems>
            <SellItems date={props.items[1].date} category={props.items[1].category} name={props.items[1].name} price={props.items[1].price}></SellItems>
            <SellItems date={props.items[2].date} category={props.items[2].category} name={props.items[2].name} price={props.items[2].price}></SellItems>
        </div>
    )
}

export default SellProduct;