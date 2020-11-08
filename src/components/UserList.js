import React from 'react';
import {Table} from 'react-bootstrap';

import userData from '../testuser.json';
import User from './User';

const UserList = () => {

    const allUser = userData.map(user => 
        <User key={user._id.$oid} data={user}/>)

    return (
        <section>
            <section className='userList'>
                <h3>User List</h3>
            </section>

            <section>
                <Table bordered hover>
                    <thead>
                        <tr> 
                            <th>Email</th>
                            <th>Password</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>IsAdmin</th>
                            <th>Stripe Id</th>
                            <th>Cars</th>
                            <th>Sessions</th>
                            <th>Parkings</th>
                        </tr>
                    </thead>
                        <tbody>
                            {allUser}
                        </tbody>
                </Table>
            </section>
        </section>
    );
};

export default UserList;