import React, { useMemo } from "react";
import TabPanel from "../components/TabPanel";
import { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import useFetch from "../hooks/useFetch";

export default function Home() {
  const url = "https://api.punkapi.com/v2/beers?page=1&per_page=80";
  const [value, setValue] = useState(0);
  const [allProducts, setAllProducts] = useState([]);
  const { data, loading, error } = useFetch(url);
  console.log("rendered");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setAllProducts(data.sort((a, b) => a.name.localeCompare(b.name)));
  }, [data]);

  const getFilteredProducts = (key) =>
    data.filter((product) => {
      return product.food_pairing.join("").includes(key);
    });

  const additionalProducts = useMemo(
    () => ({
      pizza: getFilteredProducts("pizza"),
      steak: getFilteredProducts("steak"),
    }),
    [data]
  );

  const steakData = data?.filter((product) =>
    product.food_pairing.join("").includes("steak")
  );

  return (
    <div>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="all available beers" />
        <Tab label="pair with pizza" />
        <Tab label="pair with steak" />
      </Tabs>
      <TabPanel value={value} data={{ data, loading, error }} index={0} />
      <TabPanel
        value={value}
        data={{ data: additionalProducts.pizza, loading, error }}
        index={1}
      />
      <TabPanel
        value={value}
        data={{ data: additionalProducts.steak, loading, error }}
        index={2}
      />
    </div>
  );
}
