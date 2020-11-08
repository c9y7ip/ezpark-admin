import React from 'react';
import {Tabs, Tab} from 'react-bootstrap';

import NavBar from './Navbar'
import ParkingList from './ParkingList'
import UserList from './UserList'
import EventService from "../services/EventService";


const Home = () => {
    return (
        <section>
            <NavBar isLogin={EventService.auth.isLogin()}/>
            <section><h4>Welcome , Admin !</h4></section>
            <Tabs defaultActiveKey="parking-lot" id="uncontrolled-tab-example">
                <Tab eventKey="parking-lot" title="Parking Lot" >
                    <ParkingList />
                </Tab>
                <Tab eventKey="user" title="Profile">
                    <UserList />
                </Tab>
                <Tab eventKey="nothing yet" title="Nothing yet" disabled>
        
                </Tab>
            </Tabs>
        </section>
    );
};


export default Home;