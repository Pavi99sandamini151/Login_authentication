import React, {useState} from 'react';
import './App.css';
// @ts-ignore
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Login from './components/login';
import Home from './components/home';
import Signup from "./components/signup";
import Firstpage from "./components/first_page";
import Order from "./components/order";
import Menu from "./components/menu";

const App = () => {
    const [user,setLoginUser] = useState({});

    return (
        <BrowserRouter>
            <Switch>
                <Route  exact path='/'><Firstpage/></Route>
                <Route  path='/home' >
                    {/*{*/}
                    {/*    user && user._id ? <Home/>:<Login setLoginUser={setLoginUser}/>*/}
                    {/*}*/}
                    <Home/>
                </Route>
                <Route  path='/login'><Login setLoginUser={setLoginUser}/></Route>
                <Route  path='/signup'><Signup/></Route>
                <Route  path='/order'><Order/></Route>
                <Route  path='/menu'><Menu/></Route>
            </Switch>
        </BrowserRouter>
  );
}

export default App;
