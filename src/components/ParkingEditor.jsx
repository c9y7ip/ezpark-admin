import * as React from 'react';
import {
    Link
} from 'react-router-dom';
import axios from 'axios';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import EventService from "../services/EventService";

class ParkingEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lotName: '',
            lotNumber: '',
            country: 'Canada',
            region: '',
            address: '',
            city: '',
            postalCode: '',
            rate: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        EventService.apiClient.post(
            '/parking/create-parking',
            {
                name: this.state.lotName,
                number: this.state.lotNumber,
                rate: this.state.rate,
                address: {
                    street: this.state.address,
                    city: this.state.city,
                    province: this.state.province,
                    country: this.state.country,
                    postalCode: this.state.postalCode
                }
            })
        this.props.history.push('/')
    }

    selectCountry(val) {
        this.setState({ country: val });
    }

    selectRegion(val) {
        this.setState({ region: val });
    }

    render() {
        return (
            <div className="bg-light">
                <div className="container">
                    <div className="py-5 text-center">
                        <h2>Create New Parking Lot</h2>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-8 order-md-1">
                            <h4 className="mb-3">Parking Lot Info</h4>
                            <form className="needs-validation" onSubmit={this.handleSubmit} novalidate>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label for="lotName">Lot Name</label>
                                        <input type="text" className="form-control" name="lotName" placeholder="" value={this.state.lotName} onChange={this.handleInputChange} required />
                                        <div className="invalid-feedback">
                                            Valid first name is required.
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label for="lotNumber">Lot Number</label>
                                        <input type="number" className="form-control" name="lotNumber" placeholder="" value={this.state.lotNumber} onChange={this.handleInputChange} required />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label for="address">Street Address</label>
                                    <input type="text" className="form-control" name="address" placeholder="1234 Main St" value={this.state.address} onChange={this.handleInputChange} required />
                                    <div className="invalid-feedback">
                                        Please enter your shipping address.
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col mb-3">
                                        <label for="city">City</label>
                                        <input type="text" className="form-control" name="city" placeholder="" value={this.state.city} onChange={this.handleInputChange} required />
                                        <div className="invalid-feedback">
                                            Zip code required.
                                        </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label for="postalCode">Postal/Zip</label>
                                        <input type="text" className="form-control" name="postalCode" placeholder="" value={this.state.postalCode} onChange={this.handleInputChange} required />
                                        <div className="invalid-feedback">
                                            Zip code required.
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col mb-3">
                                        <label for="country">Country</label>
                                        <CountryDropdown
                                            id={"country"}
                                            value={this.state.country}
                                            classes={"form-control"}
                                            onChange={(val) => this.selectCountry(val)} />
                                    </div>
                                    <div className="col mb-3">
                                        <label for="region">Region</label>
                                        <RegionDropdown
                                            id={"region"}
                                            country={this.state.country}
                                            value={this.state.region}
                                            classes={"form-control"}
                                            onChange={(val) => this.selectRegion(val)} />
                                    </div>
                                </div>

                                <hr className="mb-4" />

                                <h4 className="mb-3">Payment Details</h4>

                                <div className="md-3 mb-3">
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">$/hr</div>
                                        </div>
                                        <input type="number" className="form-control" min="0" name="rate" placeholder="Hourly Rate" value={this.state.rate} onChange={this.handleInputChange} />
                                    </div>
                                </div>

                                <div className="row">


                                </div>
                                <hr className="mb-4" />
                                <div className="btn-toolbar mb-5 right">
                                    <div className="btn-group mr-2">
                                        <button className="btn btn-primary btn-md" type="submit">Save</button>
                                    </div>
                                    <div className="btn-group">
                                        <Link to="/">
                                            <button id="cancel" name="cancel" class="btn btn-outline-danger btn-md">Cancel</button>
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ParkingEditor