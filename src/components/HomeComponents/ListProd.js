import classes from "./ListProd.module.css";
// import Button from "../UI/Button";
import { useRouteLoaderData } from "react-router-dom";

const ListProd = (props) => {
  const sectionProd = props.meals.slice(0, 3);
  const token = useRouteLoaderData("root");

  return (
    <div className={classes.sectionCenter}>
      {sectionProd.map((meal) => (
        <article className={classes.article}>
          <div className={classes.container}>
            <img
              src={meal.img}
              alt={meal.title}
              className={classes.photo}
            ></img>
            {token && <button className={classes.btn}>DETAIL</button>}
          </div>
          <footer className={classes.footer}>
            <h5>{meal.title}</h5>
            <p>${meal.price}</p>
          </footer>
        </article>
      ))}
    </div>
  );
};
export default ListProd;
