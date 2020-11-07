import React from 'react';

const User = (props) => {

    return (
        <tr>
            <td>{props.data.email}</td>
            <td>{props.data.password}</td>
            <td>{props.data.name}</td>
            <td>{props.data.phone}</td>
            <td>{props.data.isAdmin ? 'yes': 'no'}</td>
            <td>{props.data.stripeId}</td>
            <td>{props.data.cars}</td>
            <td>{props.data.sessions}</td>
            <td>{props.data.parkings}</td>
        </tr>
    );

}

export default User;