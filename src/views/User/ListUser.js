import axios from "axios";
import React from "react";
import withRouter from "../../utils/WithRouter";

class ListUser extends React.Component {
    state = {
        listUser: []
    }

    async componentDidMount() {
        let res = await axios.get("https://reqres.in/api/users?page=2");
        this.setState({
            listUser: res && res.data && res.data.data ? res.data.data : []
        })
    }

    handleViewUser = (item) => {
        const history = this.props.router.navigate;
        history('/user/' + item.id);
    }
    render() {
        let { listUser } = this.state;
        return (
            <div className="list-user-container">
                <div className="title">
                    List User
                </div>
                <div className="list-user-content">

                    {listUser && listUser.length > 0 &&
                        listUser.map((item) => {
                            return (
                                <div className="child">
                                    <div className="child-content" key={item.id} onClick={() => this.handleViewUser(item)}>
                                        {item.id} - {item.first_name + ' ' + item.last_name} -{item.email}

                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        )
    }
}
export default withRouter(ListUser);