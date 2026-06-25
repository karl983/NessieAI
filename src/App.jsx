import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Inverness from "./pages/Inverness";
import LochNess from "./pages/LochNess";
import Skye from "./pages/Skye";
import NC500 from "./pages/NC500";
import Transport from "./pages/Transport";
import TransportDetail from "./pages/TransportDetail";
import Planner from "./pages/Planner";
import Partners from "./pages/Partners";
import FAQ from "./pages/FAQ";
import Search from "./pages/Search";
import Tomorrow from "./pages/Tomorrow";
import HowItWorks from "./pages/HowItWorks";
import WhyNessie from "./pages/WhyNessie";
import PlaceDetail from "./pages/PlaceDetail";

function Layout({ children }) {
  return (
    <div className="app-shell">
      <header className="nav-bar">
        <Link className="logo" to="/">
          <span className="logo-mark"><img src="/images/nessie-mascot.png" alt="Nessie AI" /></span>
          <span><strong>Nessie AI</strong><small>Highlands Concierge</small></span>
        </Link>

        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/inverness">Inverness</NavLink>
          <NavLink to="/loch-ness">Loch Ness</NavLink>
          <NavLink to="/skye">Skye</NavLink>
          <NavLink to="/nc500">NC500</NavLink>
          <NavLink to="/transport">Transport</NavLink>
          <NavLink className="nav-cta" to="/planner">Plan Trip</NavLink>
        </nav>
      </header>

      {children}

      <div className="mobile-sticky-cta">
        <Link to="/planner">Plan Trip</Link>
        <Link to="/transport">Transport</Link>
      </div>

      <footer className="footer">
        <div>
          <strong>Nessie AI</strong>
          <p>Your AI travel concierge for Inverness and the Scottish Highlands.</p>
        </div>
        <div>
          <Link to="/how-it-works">How It Works</Link>
          <Link to="/why-nessie">Why Nessie</Link>
          <Link to="/partners">Partners</Link>
          <Link to="/faq">FAQ</Link>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inverness" element={<Inverness />} />
          <Route path="/loch-ness" element={<LochNess />} />
          <Route path="/skye" element={<Skye />} />
          <Route path="/nc500" element={<NC500 />} />
          <Route path="/transport" element={<Transport />} />
          <Route path="/transport/:slug" element={<TransportDetail />} />
          <Route path="/planner" element={<Planner />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/search" element={<Search />} />
          <Route path="/tomorrow" element={<Tomorrow />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/why-nessie" element={<WhyNessie />} />
          <Route path="/place/:slug" element={<PlaceDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
