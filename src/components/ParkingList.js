import React from 'react';
import {Button} from 'react-bootstrap';



const ParkingList = () => {
    return (
        <section>
            <section className='parkingList'>
                <h3>Parking List</h3>
                <Button className="pull-right" >
                    Edit Lot
                </Button>
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
        </section>
    );
};

export default ParkingList;