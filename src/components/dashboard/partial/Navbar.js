import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from '../../auth/login/Login'
import Main from  '../../dashboard/Main'
import CreatePost from  '../../dashboard/CreatePost'
const Navbar = () => {
 
  const logout = () =>{
    localStorage.removeItem("token");
    window.location.href = '/'
   
  }
  const checkAuth = () =>{
    const token = localStorage.getItem("token");
    if(token) {
      return true
    }else{
      return false
    }
  }
  return (
    <Router>
      <>
        <nav className="bg-white px-6 py-4 shadow">
          <div className="flex flex-col container mx-auto md:flex-row md:items-center md:justify-between">
            <div className="flex justify-between items-center">
              <ul>
                <li className="text-gray-800 text-xl font-bold md:text-2xl">
                  Simple <span class="text-blue-500">Blog</span>
                </li>
              </ul>
              <div></div>
            </div>

            <ul className="flex flex-col md:flex-row md:-mx-4">
              <li className="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0">
                <Link to="/home">Home</Link>
              </li>
              {/* <li className="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0">
                <Link to="/create/post"></Link>
              </li> */}
              <li className="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0">
                {checkAuth() && (
                  <button onClick={() => logout()}>Logout</button>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </>
      <Switch>
        <Route path="/home">
          <Main />
        </Route>
        <Route path="/create/post">
          <CreatePost />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};

export default Navbar;
