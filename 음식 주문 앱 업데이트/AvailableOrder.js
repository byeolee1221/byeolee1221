import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableOrder.module.css";

const AvailableOrder = () => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchMeals = async () => {
          
          const response = await fetch('https://react-http-d54e9-default-rtdb.firebaseio.com/DUMMY_MEALS');
          
          if (!response.ok) {
            throw new Error('Something went wrong!');
          };
          
          const responseData = await response.json();
          
          const loadedMeals = [];
          
          for (const key in responseData) {
            loadedMeals.push({
              id: key,
              name: responseData[key].name,
              description: responseData[key].description,
              price: responseData[key].price
            });
          }
          
          setMeals(loadedMeals);
          setIsLoading(false);
        }
      
        fetchMeals().catch((error) => {
          setIsLoading(false);
          setError(error.message);
        });
    }, []);

    let content = <p>Found no menu.</p>;

    if (meals) {
      content = meals.map((meal) => <MealItem id={meal.id} key={meal.id} name={meal.name} description={meal.description} price={meal.price} />);
    }

    if (error) {
      content = <p>{error}</p>;
    }

    if (isLoading) {
      content = <p>Loading...</p>;
    }
    
    return (
        <div className={classes.main_availableOrder}>
            <Card>
                <ul>
                    {content}
                </ul>
            </Card>
        </div>
    );
}

export default AvailableOrder;