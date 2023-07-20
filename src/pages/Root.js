import { useEffect } from "react";
import { Outlet, useLoaderData, useSubmit } from "react-router-dom";
import CartProvider from "../store/CartProvider";
// import MainFooter from "../components/Footer/MainFooter";
import MainNavigation from "../components/Navbar/MainNavigation";
import { getTokenDuration } from "../util/auth";

function RootLayout() {
  const token = useLoaderData();
  const submit = useSubmit();
  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === "EXPIRED") {
      submit(null, { action: "/logout", method: "post" });
      return;
    }

    const tokenDuration = getTokenDuration();
    console.log(tokenDuration);

    setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
    }, tokenDuration);
  }, [token, submit]);

  return (
    <>
      <CartProvider>
        <MainNavigation />
        <main>
          <Outlet />
        </main>
      </CartProvider>
    </>
  );
}

export default RootLayout;
