import Home from "./pages";
import "./styles.scss";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}
