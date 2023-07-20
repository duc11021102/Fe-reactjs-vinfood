import classes from "./Section1.module.css";
import Button from "../UI/Button";
// import ImgContent from './content.jpg';
import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <section className={classes.container}>
      <div className={classes.hero}>
        <div className={classes.docs}>
          <div className={classes.docs1}>
            <h1>Awesome App for Your Modern LifeStyle</h1>
            <p>
              Our landing page template works on all devices, so you only have
              to set it up once, and get beautiful results forever.
            </p>
            <div>
              <Link to='/menu'>
                <Button>ORDER NOW</Button>
              </Link>
            </div>
          </div>
          <div className={classes.docs2}>
            <svg
              className="placeholder"
              width="528"
              height="396"
              viewBox="0 0 528 396"
            >
              <rect width="528" height="396" stroke="yellow" fill="white" ></rect> 
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Section1;
