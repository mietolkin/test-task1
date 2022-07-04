import Box from "@mui/material/Box";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import "./tabPanel.css";

export default function TabPanel(props) {
  const value = props.value;
  const index = props.index;
  const { data, loading, error } = props.data;
  const [filteredData, setFilteredData] = useState();
  const filterOption = useRef(null);

  //   console.log(props);
  const filterData = (e) => {
    const arr = [...data];

    switch (e.target.value) {
      case "a-z":
        arr.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "z-a":
        arr.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "low-high":
        arr.sort((a, b) => a.abv - b.abv);
        break;
      case "high-low":
        arr.sort((a, b) => b.abv - a.abv);
        break;
      default:
        break;
    }
    setFilteredData(arr);
  };

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  useEffect(() => {
    data && filterData({ target: { value: filterOption.current.value } });
  }, [value]);

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      //   {...other}
    >
      <select
        style={{ position: "sticky", top: "0", zIndex: "1" }}
        onChange={filterData}
        ref={filterOption}
      >
        <option value="a-z">A-Z</option>
        <option value="z-a">Z-A</option>
        <option value="low-high">ABV Low-High</option>
        <option value="high-low">ABV High-Low</option>
      </select>

      {value === index && (
        <Box sx={{ p: 3 }}>
          <div className="products-container">
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {filteredData &&
              filteredData.map((product) => (
                <Link to={`/product/${product.id}`} key={product.id}>
                  <Product product={product} />
                </Link>
              ))}
          </div>
        </Box>
      )}
    </div>
  );
}
