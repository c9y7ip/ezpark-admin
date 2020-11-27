import { React, Component } from 'react';
import {Table} from 'react-bootstrap';

import userData from '../testuser.json';
import User from './User';
import EventService from "../services/EventService";



class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = { allUserList: '' };
        // this.getLists = this.getLists.bind(this);
    }

    // componentDidMount = () => {
    //     this.getLists();
    // }

    // getLists() {
    //     EventService.read.getUserList(res => {
    //         this.setState({
    //             allUserList: res
    //         });
    //         console.log(res);
    //     });
    // }
    


    render() {
        const allUser = userData.map(user => 
            <User key={user._id.$oid} data={user}/>)
        return (
            <section class="center90">
                <section className='userList'>
                    <h3>User List</h3>
                </section>

                <section>
                    <Table bordered hover>
                        <thead>
                            <tr> 
                                <th>Email</th>
                                {/* <th>Password</th> */}
                                <th>Name</th>
                                <th>Phone</th>
                                {/* <th>IsAdmin</th> */}
                                {/* <th>Stripe Id</th>
                                <th>Cars</th>
                                <th>Sessions</th>
                                <th>Parkings</th> */}
                                <th></th>
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
};

export default UserList;