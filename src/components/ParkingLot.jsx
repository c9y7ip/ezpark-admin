import React from 'react';

const ParkingLot = (props) => {

    return (
        <tr>
            <td>{props.data.number}</td>
            <td>{props.data.name}</td>
            <td>{props.data.createdBy}</td>
            <td>{props.data.address.street}</td>
            <td>{props.data.address.city}</td>
            <td>{props.data.address.province}</td>
            <td>{props.data.address.country}</td>
            <td>{props.data.address.postalCode}</td>
            <td>{props.data.rate}</td>
            <td>{props.data.sessions}</td>
            <td>{props.data.qrCodeUrl}</td>
        </tr>
    );

}

export default ParkingLot;