import React from 'react';
import { Link } from "react-router-dom";
import { Button, Table } from 'react-bootstrap';

import lotData from '../testlot.json';
import ParkingLot from './ParkingLot';

const ParkingList = () => {

    const allParking = lotData.map(lots =>
        <ParkingLot key={lots._id.$oid} data={lots} />)

    return (
        <section>
            <section className='parkingList'>
                <h3>Parking List</h3>
                <Link to='/'>
                    <Button className="pull-right" >
                        Edit Lot
                    </Button>
                </Link>
            </section>


            <section>
                <Table bordered hover >
                    <thead>
                        <tr>
                            <th rowspan="2" colspan="1">Number</th>
                            <th rowspan="2" colspan="1">Name</th>
                            <th rowspan="2" colspan="1">Created By</th>
                            <th rowspan="1" colspan="5">Address</th>
                            <th rowspan="2" colspan="1">Rate</th>
                            <th rowspan="2" colspan="1">Sessions</th>
                            <th rowspan="2" colspan="1">QrCode Url</th>
                        </tr>
                        <tr>
                            <th>Street</th>
                            <th>City</th>
                            <th>Province</th>
                            <th>Country</th>
                            <th>Postal Code</th>
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
};

export default ParkingList;