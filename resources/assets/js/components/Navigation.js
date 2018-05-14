import React, { Component } from "react";
import { NavLink} from 'react-router-dom';

import Dashboard from "./Dashboard";
import Hcm from './Hcm';
import Elm from "./Elm"; import Crm from './Crm'; import Ih from './Ih';
export default class Navigation extends Component {

    render(){
        return (
            <nav className="nav flex-column nav-pills nav-fill justify-content-between">
                <NavLink className="nav-link" to="/dash"> <span className="icon"><i className="fas fa-home fa-fw"></i></span> HOME</NavLink>
                <NavLink className="nav-link" to="/hcm"><span className="icon"><i className="fas fa-users fa-fw"></i></span> HCM</NavLink>
                <NavLink className="nav-link" to="/elm"><span className="icon"><i className="fas fa-graduation-cap fa-fw"></i></span> ELM</NavLink>
                <NavLink className="nav-link" to="/crm"><span className="icon"><i className="fas fa-handshake fa-fw"></i></span> CRM</NavLink>
                <NavLink className="nav-link" to="/ih"><span className="icon"><i className="fas fa-project-diagram"></i></span> IH</NavLink>
                <NavLink className="nav-link disabled" to="#">disabled</NavLink>
            </nav>   
        );
    }


}