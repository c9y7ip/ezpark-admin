import * as React from 'react';
import EventService from "../services/EventService";

class ValidateLicense extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            license: '',
            validatedLicense: '',
            isExpired: false,
            session: null,
            suggestions: []
        }

        this.validateLicense = this.validateLicense.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this);
        this.renderSession = this.renderSession.bind(this)
    }

    validateLicense() {
        console.log(this.state.license)
        console.log()
        EventService.apiClient.get('/session/sessionbylicense/' + this.state.license)
            .then(response => {
                console.log(response)
                this.setState({
                    isExpired: response.data.isExpired,
                    validatedLicense: this.state.license,
                    session: response.data.session
                })
            })
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    renderSession(session, isExpired) {
        return (<table className="table">
            <thead>
                <tr className={isExpired ? 'table-danger' : 'table-success'}>
                    <th>sessionId</th>
                    <th>license</th>
                    <th>car</th>
                    <th>startTime</th>
                    <th>endTime</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{session._id}</td>
                    <td>{session.license}</td>
                    <td>{session.car}</td>
                    <td>{session.startTime}</td>
                    <td>{session.endTime}</td>
                </tr>
            </tbody>
        </table>)
    }

    render() {

        const session = this.state.session
        const validatedLicense = this.state.validatedLicense
        // default is to show nothing if no license has been validated yet
        var checkedSession = ""
        if (validatedLicense !== "") {
            const isExpired = this.state.isExpired
            // a session was returned
            if (!isExpired) {
                checkedSession = <div>
                    <div className="row mb-2">
                        <div className="col">
                            <p className="text-success">License {validatedLicense} has valid parking</p>
                        </div>
                    </div>
                    {this.renderSession(session, isExpired)}
                </div>
            } else {
                // no session found for license, its defintely not valid
                checkedSession =
                    [<div className="row mb-2">
                        <div className="col">
                            <p className="text-danger">License {validatedLicense} does not have valid parking</p>
                        </div>
                    </div>]

                // if expired session history was returned for the checked license, display it
                if (session) {
                    checkedSession.push(
                        this.renderSession(session, isExpired)
                    )
                }
            }
        }

        return (
            <div>
                <div className="form-row mt-3 mb-3">
                    <div className="col d-inline-block p-0 m-0">
                        <input className="form-control" name="license" type="text" onChange={this.handleInputChange} placeholder="Lookup license plate..." aria-label="Search" />
                    </div>
                    <div className="col">
                        <button className="btn btn-primary" onClick={this.validateLicense}>Validate</button>
                    </div>
                </div>
                {checkedSession}
            </div>
        );
    }
}

export default ValidateLicense;