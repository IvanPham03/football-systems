import Login from "../../auth/Login";
import Main from "../layouts/Main";
import Null from "../layouts/Null";
import { Routes, Route } from "react-router-dom";
import {Home, Team, Tournament} from '../../../pages'
const routes = [
  {
    path: "/login",
    component: Login,
    layout: undefined
  },
  {
    path: "/",
    component: Home,
    layout: Main
  },
  {
    path: "/team",
    component: Team,
    layout: Main
  },
  {
    path: "/tournament",
    component: Tournament,
    layout: Main
  },
];

const Index = () => {
  return (
    <Routes>
      {routes.map((route) => {
        const Page = route.component
        let Layout = Main
        if(route.layout){
          Layout = route.layout
        }else if(route.layout === undefined){
          Layout = Null
        }
        
        return (
          <Route key={route.path} path={route.path} element={<Layout page={Page}/>} />
        );
      })}
    </Routes>
  );
};

export default Index;
