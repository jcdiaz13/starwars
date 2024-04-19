import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import AppStarwars from "../pages/starwars-home/AppStarwars";
import Profile from "../pages/Profile/Profile";

const Router = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/starwars" element={<AppStarwars />} />
        <Route path="/starwars/profile/:id" element={<Profile />} />

        {/* Es muy recomendable añadir esta ruta para obtener un mensaje de error en el caso de que la ruta no exista. De lo contrario, si la ruta no existe llegaremos a una página en blanco */}
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default Router;
