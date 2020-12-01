import { React, Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import EventService from "../services/EventService";


class UserDetail extends Component {
    constructor(props) {
        super(props);
        this.state = { email : props.match.params.email };
        this.getUser = this.getUser.bind(this);
    }

    componentDidMount = () => {
        this.getUser();
    }

    getUser() {
        const email = this.state.email;
        EventService.getOneUser(
            {email}, (res)=> {
                const detail = res[0]
                this.setState({
                    name: detail.name,
                    email: detail.email,
                    isAdmin: detail.isAdmin,
                    password: detail.password,
                    phone: detail.phone,
                    parkingId : detail.parkings[0],
                    carId: detail.cars[0],
                    stripeId: detail.stripeId
                })
            }
        )
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
            <section className="center90">
                <h3>User Detail</h3>
                <section className="center80">
                    <Table bordered>
                        <tbody>
                            <tr>
                                <td className="col-wd-20">Name : </td>
                                <td>{this.state.name}</td>
                            </tr>
                            <tr>
                                <td className="col-wd-20">E-Mail : </td>
                                <td>{this.state.email}</td>
                            </tr>
                            <tr>
                                <td className="col-wd-20">Phone No. : </td>
                                <td>{this.state.phone}</td>
                            </tr>
                            <tr>
                                <td className="col-wd-20">Admin : </td>
                                <td>{this.state.isAdmin ? 'Yes' : 'No'}</td>
                            </tr>
                        </tbody>
                    </Table>

                    <DrawLine className="black" />
                    <h5 className="left-mar-5">Payment method </h5>
                    <Table bordered>
                        <tbody>
                            <tr>
                                <td className="col-wd-20">Stripe Id :</td>
                                <td>{this.state.sId ? this.state.sId : 'None'}</td>
                            </tr>
                        </tbody>
                    </Table>

                    <DrawLine color="black" />
                    <h5 className="left-mar-5">Car Info </h5>
                    <Table bordered>
                        <tbody>
                            <tr>
                                <td className="col-wd-20">Car ID : </td>
                                <td>{this.state.carId ? this.state.carId : 'None'}</td>
                            </tr>
                        </tbody>
                    </Table>

                    <DrawLine color="black" />
                    <h5 className="left-mar-5">Parking </h5>
                    <Table bordered>
                        <tbody>
                            <tr>
                              <td className="col-wd-20">Parking ID : </td>
                              <td>{this.state.parkingId ? this.state.parkingId : 'None' }</td>
                            </tr>
                        </tbody>
                    </Table>
                </section>
                <section className="text-center">
                    <Link to="/">
                        <Button>Back</Button>
                    </Link>
                </section>
            </section>
        )
    }
}


export default UserDetail