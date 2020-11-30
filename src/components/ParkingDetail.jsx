import { React, Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class ParkingDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lotName: 'Tname',
            lotNumber: 'Tlot no',
            country: 'Canada',
            region: 're',
            address: 'add',
            city: 'ci',
            postalCode: 'poc ode',
            rate: '23'
        };
        // this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div className="bg-light">
                <div className="container">
                    <div className="py-5 text-center">
                        <h2>
                            Parking Lot Detail

                        </h2>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-8 order-md-1">
                            <section class="toRight ">
                                {/* <Link to="/"> */}
                                    <Button>Edit</Button>
                                {/* </Link> */}
                            </section>
                            <div className="btn-toolbar mb-5 right">
                                <div className="btn-group">

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label for="lotName"><b>Lot Name</b></label>
                                    <p>{this.state.lotName}</p>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="lotNumber"><b>Lot Number</b></label>
                                    <p>{this.state.lotNumber}</p>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label for="address"><b>Street Address</b></label>
                                <p>{this.state.address}</p>
                            </div>
                            <div className="row">
                                <div className="col mb-3">
                                    <label for="city"><b>City</b></label>
                                    <p>{this.state.city}</p>
                                </div>
                                <div className="col-md-3 mb-3">
                                    <label for="postalCode"><b>Postal/Zip</b></label>
                                    <p>{this.state.postalCode}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col mb-3">
                                    <label for="country"><b>Country</b></label>
                                    <p>{this.state.country}</p>
                                    </div>
                                <div className="col mb-3">
                                    <label for="region"><b>Region</b></label>
                                    <p>{this.state.region}</p>
                                </div>
                            </div>

                            <hr className="mb-4" />

                            <h4 className="mb-3">Payment Details</h4>

                            <div className="md-3 mb-3">
                                <div className="input-group mb-2">
                                    <label for="region"><b>Rate ($/hr) : </b></label>
                                    <p>{this.state.rate}</p>
                                </div>
                            </div>

                            <div className="row">


                            </div>
                            <hr className="mb-4" />
                            <div className="btn-toolbar mb-5 right">
                                <div className="btn-group">
                                    <Link to="/">
                                        <Button>Back</Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ParkingDetail