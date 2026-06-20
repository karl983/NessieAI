import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Inverness from "./pages/Inverness";
import LochNess from "./pages/LochNess";
import Skye from "./pages/Skye";
import NC500 from "./pages/NC500";
import Transport from "./pages/Transport";
import Planner from "./pages/Planner";

function Layout({ children }) {
  return (
    <div className="app-shell">
      <header className="nav-bar">
        <Link className="logo" to="/">
          <span className="logo-mark">N</span>
          <span>
            <strong>Nessie AI</strong>
            <small>Highlands Concierge</small>
          </span>
        </Link>

        <nav>
          <NavLink to="/inverness">Inverness</NavLink>
          <NavLink to="/loch-ness">Loch Ness</NavLink>
          <NavLink to="/skye">Skye</NavLink>
          <NavLink to="/nc500">NC500</NavLink>
          <NavLink to="/transport">Transport</NavLink>
          <NavLink className="nav-cta" to="/planner">Plan Trip</NavLink>
        </nav>
      </header>

      {children}

      <footer className="footer">
        <div>
          <strong>Nessie AI</strong>
          <p>Your AI travel concierge for Inverness and the Scottish Highlands.</p>
        </div>
        <div>
          <Link to="/transport">Transport</Link>
          <Link to="/planner">Planner</Link>
          <a href="mailto:hello@nessieai.co.uk">Partner</a>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inverness" element={<Inverness />} />
          <Route path="/loch-ness" element={<LochNess />} />
          <Route path="/skye" element={<Skye />} />
          <Route path="/nc500" element={<NC500 />} />
          <Route path="/transport" element={<Transport />} />
          <Route path="/planner" element={<Planner />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
