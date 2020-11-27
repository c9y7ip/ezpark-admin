import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const User = (props) => {

    return (
        <tr>
            <td>{props.data.email}</td>
            {/* <td>{props.data.password}</td> */}
            <td>{props.data.name}</td>
            <td>{props.data.phone}</td>
            {/* <td>{props.data.isAdmin ? 'yes': 'no'}</td> */}
            {/* <td>{props.data.stripeId}</td>
            <td>{props.data.cars}</td>
            <td>{props.data.sessions}</td>
            <td>{props.data.parkings}</td> */}
            <td class="detailBut">
                {/* <Link to={{     
                    pathname: `/users/${props.data.name}`,
                    state:props.data
                    }}> */}
                    <Button variant="info">Detail</Button>
                {/* </Link> */}
            </td>
        </tr>
    );

}

export default User;