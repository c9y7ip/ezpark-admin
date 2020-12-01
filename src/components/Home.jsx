import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import ParkingList from './ParkingList'
import UserList from './UserList'


const Home = () => {
    return (
        <section className="center98">
            <section><h4>Welcome , Admin !</h4></section>
            <section className="center96">
                <Tabs defaultActiveKey="parking-lot" id="uncontrolled-tab-example">
                    <Tab eventKey="parking-lot" title="Parking Lot" >
                        <ParkingList />
                    </Tab>
                    <Tab eventKey="user" title="Profile">
                        <UserList />
                    </Tab>
                </Tabs>
            </section>
        </section>
    );
};


export default Home;