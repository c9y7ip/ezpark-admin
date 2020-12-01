import { React, Component } from 'react';
import { Link } from "react-router-dom";
import { Button, Table } from 'react-bootstrap';
import EventService from "../services/EventService";

import ParkingLot from './ParkingLot';


class ParkingList extends Component {

    constructor(props) {
        super(props);
        this.state = { allParkingList: '' };
        this.getLists = this.getLists.bind(this);
    }

    componentDidMount = () => {
        this.getLists();
    }

    getLists() {        
        EventService.apiClient.get(
            '/parking/allLots')
            .then((res) => {
                this.setState({ allParkingList: res.data });
                // console.log(this.state.allParkingList)
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        const allParkingArray = Array.from(this.state.allParkingList);
        // console.log(allParkingArray)
        const allParking = allParkingArray.map(lots =>
            <ParkingLot key={lots._id} data={lots} />)
        return (
            <section className="center90">
                <section className='parkingList'>
                    <h3>Parking List</h3>
                </section>
    
    
                <section>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Number</th>
                                <th>Name</th>
                                <th>Rate ($/hr)</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {allParking}
                        </tbody>
                    </Table>
                </section>
    
                <section>
                    <Link to='/editor'>
                        <Button>
                            create a new Parking Lot
                        </Button>
                    </Link>
                </section>
            </section>
        );
    }
    
};

export default ParkingList;