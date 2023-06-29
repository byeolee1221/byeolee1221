import ProductItem from './ProductItem';
import classes from './Products.module.css';

const dummy_product = [
  {id: 'k1', title: 'My first book', price: 6, description: 'This is my first book I ever wrote'},
  {id: 'k2', title: 'My second book', price: 5, description: 'This is my second book I ever wrote'}
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummy_product.map((data) => 
          <ProductItem
            key={data.id}
            id={data.id}
            title={data.title}
            price={data.price}
            description={data.description}
          />
        )}
      </ul>
    </section>
  );
};

export default Products;
