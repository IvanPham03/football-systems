import React from "react";
import {useSelector} from 'react-redux'
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from './layouts/dashboard'
const Index = () => {
  const view = useSelector(state => state.uiAdmin.view)
  const login = useSelector(state => state.session.isAuthenticated)
  console.log(login);
  return (
    <div>
      <Navbar />
      <Sidebar />

      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
        {
          view === 'dashboard' && <Dashboard />
        }
        </div>
      </div>  
    </div>
  );
};

export default Index;
