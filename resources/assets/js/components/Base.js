import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Dashboard from "./Dashboard";
import Navigation from "./Navigation";
import Header from "./Header";
import Hcm from "./Hcm"; import Elm from "./Elm"; import Crm from './Crm'; import Ih from './Ih';


export default class Base extends Component {

    render() {
        return <BrowserRouter>
                <div>
                  
                    <div id="reactHeader" className="col-md-12 content-justify-center text-center bg-faded header-hero ">
                        <Header name="Welcome to HCM Release Engineering"/>
                    </div>

                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active" aria-current="page">
                                <i className="fas fa-home fa-fw" /> Home
                            </li>
                        </ol>  
                    </nav>
                    <div className="row">
                        <div className="col col-3">
                            <Navigation />
                        </div>
                        <div id="base" className="col col-9">
                            {/* {this.props.children}                         */}
                            <Switch>
                                <Route exact path="/dash" component={Dashboard} />
                                <Route path="/hcm" component={Hcm} />
                                <Route path="/elm" component={Elm} />
                                <Route path="/crm" component={Crm} />
                                <Route path="/ih" component={Ih} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </BrowserRouter>;
    }


}

if (document.getElementById("reactme")) {
    ReactDOM.render(<Base />, document.getElementById("reactme"));
}