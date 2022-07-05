import { HelmetProvider } from "react-helmet-async";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/home/Home";
import { GlobalStyled } from "./styles/globalStyle";

function App() {
  return (
    <HelmetProvider>
      <GlobalStyled />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
