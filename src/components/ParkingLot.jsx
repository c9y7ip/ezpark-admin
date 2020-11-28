import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';



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
            <td class="detailBut">
                <Link to={ `/parking/${props.data.number}`}>
                    <Button variant="info">Detail</Button>
                </Link>
            </td>
        </tr>
    );

}


export default ParkingLot;