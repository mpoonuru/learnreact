import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from "react-router";
// import Navigation from './Navigation';
 
export default class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            hcmqueue: '',
            elmqueue: '',
            crmqueue: '',
            ihqueue: '',
            inqueueuow: '',
            reluow: '',
            downIcon:'',
            downCircle:''

        };
    }

    componentWillMount(){
        let $this = this;
        axios.get('/api/status').then(response => {
            // console.log(response.data);
            $this.setState({
                hcmqueue: response.data.hcmqueue,
                elmqueue: response.data.elmqueue,
                crmqueue: response.data.crmqueue,
                ihqueue: response.data.ihqueue,
                inqueueuow: response.data.inqueueuow,
                reluow: response.data.reluow
            })

        }).catch(error => {
            console.log(error);
        })
    }

    componentDidMount() {
       
        this.timerID = setInterval(
            () => this.fetchMe(),
            15000
        );

       
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    fetchMe() {
        let $this = this;
            axios.get('/api/status').then(response => {
            // console.log(response.data);
            $this.setState({
                hcmqueue: response.data.hcmqueue,
                elmqueue: response.data.elmqueue,
                crmqueue: response.data.crmqueue,
                ihqueue: response.data.ihqueue,
                inqueueuow: response.data.inqueueuow,
                reluow: response.data.reluow
            })
            
        }).catch(error => {
            console.log(error);
        })

    }


    render() {
        return (
        <div>
            <div className="row ml-1 mr-0  d-flex justify-content-between">
                    <div id="qstatus" className="col-sm-3 my-3 p-3 bg-white rounded box-shadow">
                        <h6 className="border-bottom border-gray pb-1 mb-0 text-primary">BASS2 Queue</h6>
                        <div className="media text-muted ">
                            <div className="media-body pb-1 mb-0  ">
                                <strong className="d-inline-flex justify-content-spacce-between align-items-baseline text-gray-dark is-small font-weight-bold">
                                    <i className="fas fa-arrow-circle-up bulma-text-success social mr-1 "></i> HCM
                                </strong>
                            </div>
                                <div className="loaders-pulsing"></div>
                        </div>
                        <div className="media text-muted ">
                            <div className="media-body pb-1 mb-0  ">
                                <strong className="d-inline-flex justify-content-spacce-between align-items-baseline text-gray-dark is-small font-weight-bold">
                                    <i className="fas fa-arrow-circle-up bulma-text-success social mr-1 "></i> ELM
                            </strong>
                            </div>
                            <div className="loaders-pulsing"></div>
                        </div>
                        <div className="media text-muted ">
                            <div className="media-body pb-1 mb-0  ">
                                <strong className="d-inline-flex justify-content-spacce-between align-items-baseline text-gray-dark is-small font-weight-bold">
                                    <i className="fas fa-arrow-circle-up bulma-text-success social mr-1 "></i> CRM
                            </strong>
                            </div>
                            <div className="loaders-pulsing"></div>
                        </div>
                        <div className="media text-muted ">
                            <div className="media-body pb-1 mb-0  ">
                                <strong className="d-inline-flex justify-content-spacce-between align-items-baseline text-gray-dark is-small font-weight-bold">
                                     <i className={"fas fa-arrow-circle" +(this.state.ihqueue === 'CLSE'? '-down sociala bulma-text-danger': '-up social bulma-text-success')+"  mr-1 "}></i>  IH
                            </strong>
                            </div>
                            <div className={"loaders-pulsing" + (this.state.ihqueue==='CLSE'? '-red':'')}></div>
                        </div>
                    </div>


                    <div id="qstatus1" className="col-sm-3 my-3 p-3 ml-2 bg-white rounded box-shadow">
                        <h6 className="border-bottom border-gray pb-1 mb-0 text-primary d-flex align-items-center"> UOW In Queue</h6>
                        <div className="media text-muted ">
                            <div className="media-body pb-1 mb-0  ">
                                <strong className="d-flex justify-content-start  align-items-sm-center text-gray-dark font-weight-normal">
                                    <i className="fas fa-arrow-circle-right bulma-text-link fa-fw"></i>   In Queue:
                                <div className="text-info  font-weight-normal is-small float-right">{this.state.inqueueuow}</div>
                                </strong>
                            </div>
                        </div>
                        <div className="media text-muted ">
                            <div className="media-body pb-1 mb-0  ">
                                <strong className="d-flex d-block justify-content-start align-items-sm-center text-gray-dark font-weight-normal "><i className="fas fa-registered bulma-text-danger fa-fw"></i> Release:
                                <div className="text-primary d-block d-flex justify-content-end align-items-sm-end text-gray-dark font-weight-normal ">{this.state.reluow}</div>
                                </strong>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div className="card mt-3">
                        <div className="card-header bg-faded">Example React Component</div>

                        <div className="card-body">
                            I'm an example React component!
                        </div>
                    </div>
        </div>
   );
    }
}


