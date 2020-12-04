import { React, Component } from 'react';
import { Link } from "react-router-dom";
import { Button, Table } from 'react-bootstrap';
import EventService from "../services/EventService";
import ParkingLot from './ParkingLot';


class ParkingList extends Component {

    constructor(props) {
        super(props);
        this.state = { allParkingMap: {} };
    }

    componentDidMount = () => {
        this.setState({ allParkingMap: this.props.allParkingMap });
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
        // get array of parkinglot objects for parking lot map
        const allParkingArray = Object.values(this.state.allParkingMap);
        console.log(allParkingArray)
        return (
            <section className="mx-5 my-3">
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
                            {allParkingArray.map(lot => <tr>
                                <td>{lot.number}</td>
                                <td>{lot.name}</td>
                                <td>{lot.rate}</td>
                                <td className="detailBut">
                                    <Link to={`/parking/${lot._id}`}>
                                        <Button variant="info">Detail</Button>
                                    </Link>
                                </td>
                            </tr>)
                            }
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