import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ParkingLot = (props) => {
    return (
        <tr>
            <td>{props.data.number}</td>
            <td>{props.data.name}</td>
            <td>{props.data.rate}</td>
            <td className="detailBut">
                <Link to={ `/parking/${props.data.number}`}>
                    <Button variant="info">Detail</Button>
                </Link>
            </td>
        </tr>
    );

}


export default ParkingLot;