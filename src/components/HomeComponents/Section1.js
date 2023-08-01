import classes from "./Section1.module.css";
import Button from "../UI/Button";
// import ImgContent from './content.jpg';
import { Link } from "react-router-dom";
import title from '../../asset/meal-title.jpg';


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
            <img src={title} alt="title">
            </img>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Section1;
