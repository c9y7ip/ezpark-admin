import React from 'react';
import {Link} from "react-router-dom";
import {Button} from 'react-bootstrap';


const ParkingList = () => {
    return (
        <section>
            <section className='parkingList'>
                <h3>Parking List</h3>
                <Link >
                    <Button className="pull-right" >
                        Edit Lot
                    </Button>
                </Link>
            </section>

            <section>
                <table>
                    <caption>
                        Lot List
                    </caption>
                    <thead>
                        <tr>
                            <th>lot ID</th>
                            <th>lot location</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>abc</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>abc</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        
            <section>
                <Link >
                    <Button>
                        create a new Parking Lot
                    </Button>
                </Link>
            </section>
        </section>
    );
};

export default ParkingList;