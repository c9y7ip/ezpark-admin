import React from 'react';
import {Tabs, Tab} from 'react-bootstrap';

import NavBar from '../components/Navbar'
import ParkingList from '../components/ParkingList'
import UserList from '../components/UserList'

const MainPage = () => {
    return (
        <section>
            <NavBar isLogin={true}/>
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


export default MainPage;