import React from "react";
import withRouter from "../../utils/WithRouter";
import axios from "axios";
class UserDetail extends React.Component {

    state = {
        user: {}
    }
    async componentDidMount() {
        if (this.props.router && this.props.router.params) {
            let id = this.props.router.params.id;
            let res = await axios.get('https://reqres.in/api/users/' + id);
            this.setState({
                user: res && res.data.data ? res.data.data : {}
            })
        }
    }
    render() {
        let { user } = this.state;
        let isEmptyObj = Object.keys(user).length === 0;

        return (
            <>
                {isEmptyObj == false &&
                    <>
                        <div>{user.first_name}</div>
                    </>
                }

            </>
        )
    }
}

export default withRouter(UserDetail);