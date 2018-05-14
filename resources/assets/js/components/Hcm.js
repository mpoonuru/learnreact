
import React, { Component } from "react";
import "datatables.net";
import "datatables.net-bs4";
import "datatables.net-buttons-bs4";
import "datatables.net-buttons";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.html5.js";

import Header from './Header';
export default class Hcm extends Component {
    constructor(props){
        super(props);
        this.state={
            product: 'HCM',   
            details: []        
        }
        console.log(this.state.path);
        
        this.handleSubmithc = this.handleSubmithc.bind(this);
        this.handleSubmittdp = this.handleSubmittdp.bind(this);
        this.renderDetails = this.renderDetails.bind(this);
    }

    handleSubmithc(e){
       
        console.log(this.input.value);      
        e.preventDefault();
            axios.post('/hc', {
                product: this.state.product
            }).then(response => {
                console.log('From Handle', response.data);
                this.setState({
                    details: [response.data, ...this.state.details ] //Spread details with ... denotion.
                });
                console.log(this.state.details);
            });
            
    }

    
    handleSubmittdp(e) {

        console.log(this.input1.value);
        e.preventDefault();
        axios.post('/tdp', {
            product: this.state.product
        }).then(response => {
            console.log('From Handle', response);
        });

    }


    renderDetails() {        
        return this.state.details.map((detail,index) => (
            <div key={index} className="media mt-5" id="removerender">
                <div className="media-body">
                    <table className="table" id="tdp">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">state</th>                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">{detail.id}</th>
                                <td>{detail.name}</td>
                                <td>{detail.state}</td>                                
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        ));       

    }

componentDidMount(){
  
}

componentWillUpdate(){
    if (document.getElementById("removerender") == null) {
    } else {
        var elem = document.getElementById("removerender");
        elem.parentNode.removeChild(elem);
    }
}

componentDidUpdate(){  
    if ($.fn.DataTable.isDataTable(".table")) {
        $('.table').DataTable().clear().destroy();
    }
    $(".table").DataTable({
        dom: "Bfrtip",
        buttons: ["colvis", "copy", "csv", "excel"]
    });

    // this.setState({
    //     details: []
    // });
}

render (){
    return (
        <div>
            <Header name="HCM"/>
        <div className="card">
            <div className="card-header ">Activities</div>
            <div className="card-body">
                <div className="row flex justify-content-between align-items-center">
                    <div className="col-md-5">
                        <form onSubmit={this.handleSubmithc}>
                            <input type="hidden" name="product" className="form-control" id="product" defaultValue="health" ref={input => (this.input = input)} aria-describedby="hcm" />
                            <div id="hccard" className="card text-center pt-2">
                                <h5>
                                    <button id="hc" type="submit" className="btn btn-primary  btn-circle btn-xl my-2 my-sm-0">
                                        <i className="fas fa-medkit" />
                                    </button>
                                </h5>
                                <h6>Health Check SQLs</h6>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-5">
                    <form onSubmit={this.handleSubmittdp}>
                        <input type="hidden" name="product" className="form-control" id="product" defaultValue="tdp" ref={input1 => (this.input1 = input1) }aria-describedby="hcm" />
                            <div id="tdpcard" className="card text-center pt-2">
                                <h6>
                                    <button id="tdp" type="submit" className="btn btn-warning btn-circle btn-xl my-2 my-sm-0">
                                        <i className="fas fa-wrench" />
                                    </button>
                                </h6>
                                <h6>Tools Dependency Mismatch</h6>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <hr />
                    {this.renderDetails()}
        </div>
    );
}

}
