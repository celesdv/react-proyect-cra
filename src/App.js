import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Users from "./components/Users"
import Characters from "./components/Characters"
import ContactUs from "./components/ContactUs"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Section />}
        />
        <Route
          path="/users"
          element={<Users />}
        />
        <Route
          path="/characters"
          element={<Characters />}
        />
        <Route
          path="/contactUs"
          element={<ContactUs />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
