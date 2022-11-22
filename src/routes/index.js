import React, { lazy, Suspense } from "react";
import {
  BrowserRouter,
  Routes as BrowserRoutes,
  Route,
} from "react-router-dom";
import RequireAuth from "./RequireAuth";
import HomeScreen from "../pages/components/HomeScreen"
import Header from "pages/Header/Header";
import OurMenu from "pages/ourMenu/OurMenu";
import Gallery from "pages/gallery/Gallery";
import Contact from "pages/contact/Contact";
import OrderDetails from "shared/OrderDetails";
import ViewOrder from "pages/admin/ViewOrder";
import RegisterProduct from "pages/admin/RegisterProduct";
import SignPage from "pages/SignPage"


export const PublicPaths = {
  PUBLIC: "/public",
};

export const PrivatePaths = {
  PRIVATE: "/private",
  INTEGRATION_EXAMPLE: "/integration-example"
};

const publicRoutes = [
  /* Add paths for unauthorized users */
  { path: PublicPaths.PUBLIC, exact: true, element: lazy(() => import('pages/PublicPage'))},
];

const privateRoutes = [
  /* Add paths for authorized users */
  { path: PrivatePaths.PRIVATE, element: lazy(() => import('pages/PrivatePage')) },
  
];

const Routes = () => (
  <Suspense fallback={<span>Loading...</span>}>
  <BrowserRouter>
  <Header/>
    <BrowserRoutes>
      {publicRoutes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={<route.element/>}
        />
      ))}
      {privateRoutes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={
            <RequireAuth>
            <route.element/>
            </RequireAuth>
          }
        />
      ))}
       <Route path="*" element={<HomeScreen/>} />
       <Route path="/menu" element={<OurMenu/>} />
       <Route path="/gallery" element={<Gallery/>} />
       <Route path="/contact" element={<Contact/>} />
       <Route path="/order" element={<OrderDetails/>} />
       <Route path="/view" element={<ViewOrder/>} />
       <Route path="/sign" element={<SignPage/>} />
       <Route path="/register" element={<RegisterProduct/>} />
       
    </BrowserRoutes>
  </BrowserRouter>
  </Suspense>
);

export default Routes;
