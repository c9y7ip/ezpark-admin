import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const User = (props) => {

    return (
        <tr>
            <td>{props.data.email}</td>
            <td>{props.data.name}</td>
            <td>{props.data.phone}</td>
            <td className="detailBut">
                <Link to={ `/users/${props.data.email}`}>
                    <Button variant="info">Detail</Button>
                </Link>
            </td>
        </tr>
    );

}

export default User;