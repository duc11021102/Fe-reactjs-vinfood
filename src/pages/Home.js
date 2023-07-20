import { json } from "react-router-dom";
import Section1 from "../components/HomeComponents/Section1";
import Section2 from "../components/HomeComponents/Section2";
import { Fragment } from "react";
import { defer } from "react-router-dom";
import { Suspense } from "react";
import { Await } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import Section3 from "../components/HomeComponents/Section3";
import Section4 from "../components/HomeComponents/Section4";
import MainFooter from "../components/Footer/MainFooter";

function HomePage() {
  const { meals } = useLoaderData();
  // console.log(meals);
  return (
    // <PageContent title="Welcome!">
    // </PageContent>
    <Fragment>
      <Section1></Section1>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={meals}>
          {(loadedMeals) => <Section2 meals={loadedMeals}></Section2>}
        </Await>
      </Suspense>
      <Section3></Section3>
      <Section4></Section4>
      <MainFooter/>
    </Fragment>
  );
}

export default HomePage;

async function loadMeals() {
  const response = await fetch("https://menu-a0a06-default-rtdb.firebaseio.com/dishs.json");
  if (!response.ok) {
    throw json(
      { message: "Could not fetch events." },
      {
        status: 500,
      }
    );
  } else {
    const responseData = await response.json();
    const loadDishs = [];
    for (const key in responseData) {
      loadDishs.push({
        id: key,
        title: responseData[key].title,
        img: responseData[key].img,
        category: responseData[key].category,
        price: responseData[key].price,
      });
    }
    return loadDishs;
  }
}

export function loader() {
  return defer({
    meals: loadMeals(),
  });
}
