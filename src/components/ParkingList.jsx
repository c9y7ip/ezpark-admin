import { React, Component } from 'react';
import '../styles/ParkingList.css'
import { Link } from "react-router-dom";
import { Button, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import EventService from "../services/EventService";
import ReactToPrint from 'react-to-print';

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

    handleDelete = (id) => {
        // delete parking lot from ui state
        this.props.deleteLot(id)
        // delete parking lot on backend
        EventService.apiClient.delete(
            `/parking/${id}`)
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
                                <th>Qr Code</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {allParkingArray.map(lot => <tr>
                                <td>{lot.number}</td>
                                <td>{lot.name}</td>
                                <td>{lot.rate}</td>
                                <td className="detailBut">
                                    <ReactToPrint
                                        trigger={() => {
                                            // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
                                            // to the root node of the returned component as it will be overwritten.
                                            return <Button type="button" className="btn"><FontAwesomeIcon icon={faDownload} /></Button>
                                        }}
                                        content={() => this.componentRef}
                                    />
                                    {/* hide qr image with boostrap class none */}
                                    <div className="d-none">
                                        <img src={lot.qrCodeUrl} alt="not loaded" height="100%" width="100%" ref={el => (this.componentRef = el)} />
                                    </div>
                                </td>
                                <td className="detailBut">
                                    <Link to={`/parking/${lot._id}`}>
                                        <Button variant="info">Detail</Button>
                                    </Link>
                                </td>
                                <td className="detailBut">
                                    <Button type="button" className="btn btn-danger" onClick={() => { this.handleDelete(lot._id) }}>Delete</Button>
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