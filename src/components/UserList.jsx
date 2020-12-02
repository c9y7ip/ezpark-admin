import { React, Component } from 'react';
import {Table} from 'react-bootstrap';
import User from './User';
import EventService from "../services/EventService";


class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = { allUserList: '' };
        this.getLists = this.getLists.bind(this);
    }

    componentDidMount = () => {
        this.getLists();
    }

    getLists() {        
        EventService.apiClient.get(
            '/auth/users')
            .then((res) => {
                this.setState({ allUserList: res.data });
                // console.log(this.state.allUserList)
            })
            .catch(e => {
                console.log(e);
            });
    }
    


    render() {
        const allUserArray = Array.from(this.state.allUserList);
        const allUser = allUserArray.map(user => 
            <User key={user._id} data={user}/>)
        return (
            <section className="center90">
                <section className='userList'>
                    <h3>User List</h3>
                </section>

                <section>
                    <Table striped bordered hover>
                        <thead>
                            <tr> 
                                <th>Email</th>
                                <th>Name</th>
                                <th>Phone</th>
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