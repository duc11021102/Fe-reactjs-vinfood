import classes from "./Section2.module.css";
import ListProd from "./ListProd";
import Button from "../UI/Button";
import { Link } from "react-router-dom";
// import { useRouteLoaderData } from "react-router-dom";

const Section2 = (props) => {
  // const token = useRouteLoaderData("root");
  return (
    <section className={classes.container}>
      <div className={classes.sectionTitle}>
        <h2>Featured Meals</h2>
        <div className={classes.underline}></div>
      </div>

      <div className={classes.sectionProd}>
        <ListProd meals={props.meals}></ListProd>
      </div>

      <div className={classes.sectionBtn}>
        <Link to='/menu'>
          <Button>All Meals</Button>
        </Link>
      </div>
    </section>
  );
};
export default Section2;
