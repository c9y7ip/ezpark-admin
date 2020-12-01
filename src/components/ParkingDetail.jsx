import { React, Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import EventService from "../services/EventService";


class ParkingDetail extends Component {
    constructor(props) {
        super(props);
        this.state = { number : props.match.params.num };
        this.getLot = this.getLot.bind(this)
    }

    componentDidMount = () => {
        this.getLot();
    }

    getLot() {
        const number = this.state.number;
        // console.log(number)
        EventService.getOneLot(
            {number}, (res)=> {
                const detail = res[0]
                console.log(detail)
                this.setState({
                    lotName: detail.name,
                    lotNumber: detail.number,
                    country: detail.address.country,
                    region: detail.address.region,
                    address: detail.address.street,
                    city: detail.address.city,
                    postalCode: detail.address.postalCode,
                    rate: detail.rate
                })
            }
        )
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
                            <section className="toRight ">
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
                                    <h5><b>Lot Name</b></h5>
                                    <p>{this.state.lotName}</p>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <h5><b>Lot Number</b></h5>
                                    <p>{this.state.lotNumber}</p>
                                </div>
                            </div>

                            <div className="mb-3">
                                <h5><b>Street Address</b></h5>
                                <p>{this.state.address ? this.state.address : '-'}</p>
                            </div>
                            <div className="row">
                                <div className="col mb-3">
                                    <h5><b>City</b></h5>
                                    <p>{this.state.city ? this.state.city : '-'}</p>
                                </div>
                                <div className="col-md-3 mb-3">
                                    <h5><b>Postal/Zip</b></h5>
                                    <p>{this.state.postalCode ? this.state.postalCode : '-'}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col mb-3">
                                    <h5><b>Country</b></h5>
                                    <p>{this.state.country ? this.state.country : '-'}</p>
                                    </div>
                                <div className="col mb-3">
                                    <h5><b>Region</b></h5>
                                    <p>{this.state.region ? this.state.region : '-'}</p>
                                </div>
                            </div>

                            <hr className="mb-4" />

                            <h4 className="mb-3">Payment Details</h4>

                            <div className="md-3 mb-3">
                                <div className="input-group mb-2">
                                    <h5><b>Rate ($/hr) : </b></h5>
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