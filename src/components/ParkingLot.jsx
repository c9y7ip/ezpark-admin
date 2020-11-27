import React from 'react';
import { Button } from 'react-bootstrap';


const ParkingLot = (props) => {

    return (
        <tr>
            <td>{props.data.number}</td>
            <td>{props.data.name}</td>
            {/* <td>{props.data.createdBy}</td> */}
            {/* <td>{props.data.address.street}</td>
            <td>{props.data.address.city}</td>
            <td>{props.data.address.province}</td>
            <td>{props.data.address.country}</td>
            <td>{props.data.address.postalCode}</td> */}
            <td>{props.data.rate}</td>
            {/* <td>{props.data.sessions}</td> */}
            <td>{props.data.qrCodeUrl}</td>
            <td class="detailBut"><Button variant="info">Detail</Button></td>
        </tr>
    );

}

export default ParkingLot;