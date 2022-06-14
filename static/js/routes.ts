import { RouteProps } from "react-router-dom";

// Pages
import MainPage from "./pages/Main";
import ExploreAllPage from "./pages/ExploreAll";
import AboutPage from "./pages/About";
import MyCollectionPage from "./pages/MyCollection";
import PepePage from "./pages/Pepe";
import NotFound from "./pages/NotFound";
import Challenges from "./pages/Challenges";
import Updates from "./pages/Updates";

const routes: RouteProps[] = [
  {
    path: "/",
    component: MainPage,
    exact: true,
  },
  {
    path: "/explore-all",
    component: ExploreAllPage,
  },
  {
    path: "/about",
    component: AboutPage,
  },
  {
    path: "/my-collection",
    component: MyCollectionPage,
  },
  {
    path: "/pepe/:pepeIndex",
    component: PepePage,
  },
  {
    path: "/challenges",
    component: Challenges,
  },
  {
    path: "/updates",
    component: Updates,
  },
  {
    path: "*",
    component: NotFound,
  },
];

export default routes;
