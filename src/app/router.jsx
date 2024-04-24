import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import AppStarwars from "../pages/starwars-home/AppStarwars";
import Profile from "../pages/Profile/Profile";
import Falacias from "../pages/Falacias/Falacias";
import Firebase from "../pages/Firebase/Firebase";

const Router = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/starwars" element={<AppStarwars />} />
        <Route path="/starwars/profile/:id" element={<Profile />} />
        <Route path="/falacias" element={<Falacias />} />
        <Route path="/firebase" element={<Firebase />} />

        {/* Es muy recomendable añadir esta ruta para obtener un mensaje de error en el caso de que la ruta no exista. De lo contrario, si la ruta no existe llegaremos a una página en blanco */}
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default Router;
