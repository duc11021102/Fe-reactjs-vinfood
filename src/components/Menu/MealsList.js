 import styles from './MealsList.module.css';
 import React from 'react';
 import Dish from './Dish';
function MealsList(props){
    return (
        <div className={`${styles['section-center']}`}>
          {props.meals.map((menuItem) => (
            <Dish
              key={menuItem.id}
              id={menuItem.id}
              img={menuItem.img}
              title={menuItem.title}
              price={menuItem.price}
            ></Dish>
          ))}
        </div>
      );
}
export default MealsList;