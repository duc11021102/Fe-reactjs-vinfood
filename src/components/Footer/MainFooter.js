import classes from "./MainFooter.module.css";
const MainFooter = () => {
  return (
    <footer className={classes.container}>
      <h5>
        © 2023<span> VinFood </span>
      </h5>
      <p> All rights reserved</p>
    </footer>
  );
};
export default MainFooter;
