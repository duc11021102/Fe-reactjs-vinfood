import { Suspense } from "react";
import { Await, json, defer, useLoaderData } from "react-router-dom";
import MealsList from "../components/Menu/MealsList";
import PageContent from "../components/PageContent/PageContent";

function MenuPage() {
  const { meals } = useLoaderData();
  return (
      <PageContent title="Today's Menu!">
        <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={meals}>
          {(loadedMeals) => <MealsList meals={loadedMeals}></MealsList>}
        </Await>
      </Suspense>
      </PageContent>
  );
}
export default MenuPage;

async function loadMeals() {
  const response = await fetch(
    "https://menu-a0a06-default-rtdb.firebaseio.com/dishs.json"
  );
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
