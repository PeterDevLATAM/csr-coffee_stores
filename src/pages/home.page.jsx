import styles from "./home.module.css";

import Banner from "../components/banner";
import Card from "../components/card";
import { useEffect } from "react";
import { fetchCoffeeStores } from "../lib/coffee-stores";
import { useDispatch } from "react-redux";
import { setCoffeeStores } from "../store/coffee_stores/coffee_stores.actions";
import { useSelector } from "react-redux";
import { selectCoffeeStoresReducer } from "../store/coffee_stores/coffee_stores.selector";
import Text from "../components/text.component";

export default function Home() {
  const dispatch = useDispatch();
  const coffeeStores = useSelector(selectCoffeeStoresReducer);
  useEffect(() => {
    fetchCoffeeStores().then((response) => {
      dispatch(setCoffeeStores(response));
    });
  }, [dispatch]);

  const handleOnBannerClick = (e) => {
    console.log("CLICK");
  };

  const createElements = (ammount) => {
    const elements = [];
    for (let i = 0; i < ammount; i++) {
      elements.push(<Text item={i} key={i} />);
    }
    return elements;
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Banner
          buttonText={"View stories nearby"}
          handleOnClick={handleOnBannerClick}
        />
        {!coffeeStores.length && <p>Loading...</p>}
        {coffeeStores.length && (
          <>
            <h2 className={styles.heading2}>Carolina Stores</h2>
            <div className={styles.cardLayout}>
              {coffeeStores.map((coffeeStore) => {
                return (
                  <Card
                    name={coffeeStore.name}
                    imgUrl={
                      coffeeStore.imgUrl ||
                      "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                    }
                    href={`/coffee-store/${coffeeStore.fsq_id}`}
                    key={coffeeStore.fsq_id}
                    className={styles.card}
                  />
                );
              })}
            </div>
            <div className={styles.texts}>{createElements(1000)}</div>
          </>
        )}
      </main>
    </div>
  );
}
