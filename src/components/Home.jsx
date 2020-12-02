import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import ParkingList from './ParkingList'
import UserList from './UserList'
import ValidateLicense from './ValidateLicense'


const Home = () => {
    return (
        <section className="center98">
            <section><h4>Welcome , Admin !</h4></section>
            <section className="center96">
                <Tabs>
                    <Tab eventKey="validate-license" title="Validate License">
                        <ValidateLicense />
                    </Tab>
                    <Tab eventKey="parking-lot" title="Parking Lots" >
                        <ParkingList />
                    </Tab>
                    <Tab eventKey="user" title="Profiles">
                        <UserList />
                    </Tab>
                </Tabs>
            </section>
        </section>
    );
};


export default Home;