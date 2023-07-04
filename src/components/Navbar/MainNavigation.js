import { NavLink, Form, useRouteLoaderData } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import NavbarButton from "./NavbarButton";

function MainNavigation() {
  const token = useRouteLoaderData("root");

  return (
    <header className={classes.header}>
      <NavLink to="/" className={classes.title}>
        VinFood
      </NavLink>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/newsletter"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              News
            </NavLink>
          </li>
          {!token && (
            <li>
              <NavLink
                to="/auth?mode=signup"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Authentication
              </NavLink>
            </li>
          )}
          {token && (
            <li>
              <Form action="/logout" method="post">
                <button className={classes.btnLogout}>Logout</button>
              </Form>
            </li>
          )}
          {token && (
            <li>
              <NavLink to="/cart">
                <NavbarButton></NavbarButton>
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
