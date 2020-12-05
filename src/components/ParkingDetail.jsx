import { React, Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class ParkingDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parkingLot: {}
        }
    }

    componentDidMount = () => {
        const parkingId = this.props.match.params.id
        const parkingLot = this.props.allParkingMap[parkingId]

        this.setState({
            parkingLot
        })
    }

    componentWillReceiveProps(nextProps) {
        const parkingId = this.props.match.params.id
        if (this.props !== nextProps) {
            this.setState({
                parkingLot: nextProps.allParkingMap[parkingId]
            });
        }
    }

    render() {
        if (this.state.parkingLot && this.state.parkingLot.name) {
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
                                <div className="row">
                                    <div className="col mb-3">
                                        <h5><b>Lot Name</b></h5>
                                        <p>{this.state.parkingLot.name}</p>
                                    </div>
                                    <div className="col mb-3">
                                        <h5><b>Lot Number</b></h5>
                                        <p>{this.state.parkingLot.number}</p>
                                    </div>
                                    <div className="col">
                                        <Link to={{ pathname: '/editor', state: { isEdit: true, parkingLot: this.state.parkingLot } }}>
                                            <Button className="float-right">Edit</Button>
                                        </Link>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <h5><b>Street Address</b></h5>
                                    <p>{this.state.parkingLot.address ? this.state.parkingLot.address.street : '-'}</p>
                                </div>
                                <div className="row">
                                    <div className="col mb-3">
                                        <h5><b>City</b></h5>
                                        <p>{this.state.parkingLot.address ? this.state.parkingLot.address.city : '-'}</p>
                                    </div>
                                    <div className="col mb-3 text-right">
                                        <h5><b>Postal/Zip</b></h5>
                                        <p>{this.state.parkingLot.address ? this.state.parkingLot.address.postalCode : '-'}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col mb-3">
                                        <h5><b>Country</b></h5>
                                        <p>{this.state.parkingLot.address ? this.state.parkingLot.address.country : '-'}</p>
                                    </div>
                                    <div className="col mb-3 text-right">
                                        <h5><b>Province/Region</b></h5>
                                        <p>{this.state.parkingLot.address ? this.state.parkingLot.address.province : '-'}</p>
                                    </div>
                                </div>

                                <hr className="mb-4" />

                                <h4 className="mb-3">Payment Details</h4>

                                <div className="md-3 mb-3">
                                    <div className="input-group mb-2">
                                        <h5><b>Rate ($/hr) : </b></h5>
                                        <p>{this.state.parkingLot.rate}</p>
                                    </div>
                                </div>

                                <div className="row text-center">
                                    <img src={this.state.parkingLot.qrCodeUrl} alt="loading" />

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
        } else {
            return <div className="bg-light">
                <div className="container">
                    <div className="py-5 text-center">
                        <h2>
                            Parking Lot Detail
                        </h2>
                    </div>
                </div>
            </div>
        }
    }
}

export default ParkingDetail