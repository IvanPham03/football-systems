
import Login from "../../auth/Login";
import Main from "../layouts/main";
import Null from "../layouts/Null";
import Admin from '../../admin'
import { Routes, Route } from "react-router-dom";
import { Home, Team, Tournament, Login, SignUp } from "../../../pages";

const routes = [
  {
    path: "/login",
    component: Login,
    layout: undefined,
  },
  {
    path: "/signup",
    component: SignUp,
    layout: undefined,
  },
  {
    path: "/",
    component: Home,
    layout: Main,
  },
  {
    path: "/team",
    component: Team,
    layout: Main,
  },
  {
    path: "/tournament",
    component: Tournament,
    layout: Main,
  },
  { path: "/admin", layout: undefined, component: Admin },
];

const Index = () => {
  return (
    <Routes>
      {routes.map((route, index) => {
        const Page = route.component;
        let Layout = Main;
        if (route.layout) {
          Layout = route.layout;
        } else if (route.layout === undefined) {
          Layout = Null;
        }

        return (
          <Route
            key={index}
            path={route.path}
            element={<Layout page={Page} />}
          />
        );
      })}
    </Routes>
  );
};

export default Index;
