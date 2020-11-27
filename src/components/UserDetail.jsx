import { React, Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';



class UserDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return(
            <section>
                <h3>User Detail</h3>



                <Link to="/">
                    <Button>Back</Button>
                </Link>
            </section>
        )
    }
}


export default UserDetail