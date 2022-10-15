import { createBrowserRouter } from "react-router-dom";
import { HomeComponent } from "./home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeComponent></HomeComponent>
  }
]);
