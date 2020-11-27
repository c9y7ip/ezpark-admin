import { React, Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';



class UserDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {

        const DrawLine = ({ color, height }) => (
            <hr style={{
                color: color,
                backgroundColor: color,
                height: height,
                margin: "20px 0px"    
            }} />
        );

        return (
            <section class="center90">
                <h3>User Detail</h3>
                <section class="center80">
                    <Table bordered>
                        <tr>
                            <td class="col-wd-20">Name : </td> <td>test_name</td>
                        </tr>
                        <tr>
                            <td class="col-wd-20">E-Mail : </td> <td>test_mail</td>
                        </tr>
                        <tr>
                            <td class="col-wd-20">Password : </td> <td>test_pw</td>
                        </tr>
                        <tr>
                            <td class="col-wd-20">Phone No. : </td> <td>test_phone</td>
                        </tr>
                        <tr>
                            <td class="col-wd-20">Admin : </td> <td>No</td>
                        </tr>
                    </Table>

                    <DrawLine color="black" />
                    <h5 class="left-mar-5">Payment method </h5>
                    <Table bordered>
                        <tr>
                            <td class="col-wd-20">Stripe Id : </td> <td>test_sid</td>
                        </tr>
                    </Table>

                    <DrawLine color="black" />
                    <h5 class="left-mar-5">Car Info </h5>
                    <Table bordered>
                        <tr>
                            <td class="col-wd-20">Car : </td> <td>test_car</td>
                        </tr>
                    </Table>

                    <DrawLine color="black" />
                    <h5 class="left-mar-5">Parking </h5>
                    <Table bordered>
                        <tr>
                            <td class="col-wd-20">Parking : </td> <td>None</td>
                        </tr>
                    </Table>
                </section>
                <section class="text-center">
                    <Link to="/">
                        <Button>Back</Button>
                    </Link>
                </section>
            </section>
        )
    }
}


export default UserDetail