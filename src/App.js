import "./App.css";
import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import TabPanel from "@mui/material/TabPanel";

//import material-ui search bar
// import Button from "@mui/material/Button";
// import Autocomplete from "@material-ui/lab/Autocomplete";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<SingleProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
