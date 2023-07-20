import classes from "./Section3.module.css";

const Section3 = () => {
  return (
    <section className={classes.container}>
      <div className={classes.sectionCenter}>
        <div className={classes.centerContent}>
          <h1>
            Custom Furniture <br />
            Built Only For You
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum debitis consectetur reprehenderit non aliquam voluptates
            dolore aut vero consequuntur.
          </p>
        </div>
        <div className={classes.centerService}>
          <article className={classes.service}>
            <h4>Mission</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum debitis consectetur reprehenderit non aliquam voluptates
            dolore aut vero consequuntur.</p>
          </article>
          <article className={classes.service}>
            <h4>Vision</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum debitis consectetur reprehenderit non aliquam voluptates
            dolore aut vero consequuntur.</p>
          </article>
          <article className={classes.service}>
            <h4>History</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum debitis consectetur reprehenderit non aliquam voluptates
            dolore aut vero consequuntur.</p>
          </article>
        </div>
      </div>
    </section>
  );
};
export default Section3;
