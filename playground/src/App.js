import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../src/pages/Home/Home';
import NorCal from "./pages/playgrounds/NorCal/NorCal";
import SoCal from "./pages/playgrounds/SoCal/SoCal";
import OutOfState from "./pages/playgrounds/OutOfState/OutOfState";
import International from "./pages/playgrounds/International/International";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/norcal" exact element={<NorCal />} />
          <Route path="/socal" exact element={<SoCal />} />
          <Route path="/oos" exact element={<OutOfState />} />
          <Route path="/international" exact element={<International />} />
        </Routes>
      </Router>
  );
}

export default App;
