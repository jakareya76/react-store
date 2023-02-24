import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home";
import SignIn from "./routes/Sign-In/SignIn";
import Shop from "./routes/Shop/Shop";
import Navigation from "./routes/navigation/Navigation";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
