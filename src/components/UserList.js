import React from 'react';

const UserList = () => {
    return (
        <section>
            <section className='userList'>
                <h3>User List</h3>
            </section>

            <section>
                <table>
                    <caption>
                        User
                    </caption>
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>John</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Bob</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </section>
    );
};

export default UserList;