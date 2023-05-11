import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./routes/home/home.component.jsx";
import Navigation from "./routes/navigation/navigation.component.jsx";
import Authentication from "./routes/authentication/authentication.component.jsx";

function Shop() {
  return <h1>This is a shop page</h1>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index path="home" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
