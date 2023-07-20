import classes from "./Section4.module.css";
import NewsletterSignup from "../NewsLetter/NewsletterSignup";
const Section4 = () => {
  return (
    <section className={classes.container}>
      <div className={classes.sectionCenter}>
        <h1>Join our newsletter and get 20% off</h1>

        <div className={classes.centerContent}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum debitis consectetur reprehenderit non aliquam voluptates
            dolore aut vero consequuntur.
          </p>
          <div className={classes.contentSignup}>
            <NewsletterSignup></NewsletterSignup>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Section4;
