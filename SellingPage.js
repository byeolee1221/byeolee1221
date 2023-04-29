import SellProduct from "./components/SellProduct";
import './components/sellProduct(global).css'
import './components/sellProduct(main).css'

function App() {
  const sellProduct = [
    {category: '와인', name: 'Chateau Mouton Rothschild', price: '1,600,000원', date: new Date(2023, 3, 29)},
    {category: '책', name: '돈의 속성', price: '17,800원', date: new Date(2023, 4, 1)},
    {category: '과자', name: '예감 치즈맛', price: '1,600원', date: new Date(2023, 4, 3)},
  ];

  return (
    <div className="main_sellingInfo">
      <SellProduct items={sellProduct}></SellProduct>
    </div>
  );
}

export default App;
