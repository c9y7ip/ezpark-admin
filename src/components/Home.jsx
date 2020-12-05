import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import ParkingList from './ParkingList'
import UserList from './UserList'
import ValidateLicense from './ValidateLicense'
import EventService from "../services/EventService";


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { allParkingMap: {}, allLicenses: [] }
        console.log(this.props.allParkingMap)
    }

    componentDidMount = () => {
        this.getLicenses()
        console.log(this.props.allParkingMap)
        this.setState({
            allParkingMap: this.props.allParkingMap
        })
    }

    getLicenses = () => {
        EventService.apiClient.get(
            '/car/all-licenses')
            .then((res) => {
                this.setState({ allLicenses: res.data });
                console.log(this.state.allLicenses)
            })
            .catch(e => {
                console.log(e);
            });
    }

    componentWillReceiveProps(nextProps) {
        if (this.props !== nextProps) {
            this.setState({
                allParkingMap: nextProps.allParkingMap
            });
            console.log(nextProps.allParkingMap)
        }
    }
    render() {
        return (
            <section className="center98">
                <section><h4 className="my-3 mx-3">Welcome, Admin !</h4></section>
                <section className="center96">
                    <Tabs defaultActiveKey="parking-lot">
                        <Tab eventKey="validate-license" title="Validate License">
                            <ValidateLicense allLicenses={this.state.allLicenses} />
                        </Tab>
                        <Tab eventKey="parking-lot" title="Parking Lots" >
                            <ParkingList allParkingMap={this.props.allParkingMap} deleteLot={this.props.deleteLot} />
                        </Tab>
                        <Tab eventKey="user" title="Profiles">
                            <UserList />
                        </Tab>
                    </Tabs>
                </section>
            </section>
        );
    }
}

export default Home;