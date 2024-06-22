import React from "react";
import Color from "../HOC/Color";
import { connect } from "react-redux";
import { type } from "@testing-library/user-event/dist/type";
// HOC higher order component
class Home extends React.Component {


    handleDeleteUser = (user) => {
        console.log(user.name);
        this.props.deleteUserRedux(user);
    }

    handleAddUser = () => {
        this.props.addUserRedux();
    }
    render() {
        let listUsers = this.props.dataRedux;
        return (
            <>
                <div>
                </div>
                <div>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                // <>
                                <div key={item.id}>
                                    {item.id} - {item.name}
                                    <span>   </span>
                                    <span onClick={() => this.handleDeleteUser(item)}>X</span>
                                </div>
                                // </>
                            )
                        })
                    }
                </div>
                <div onClick={() => this.handleAddUser()}>Add New
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return { dataRedux: state.users }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => {
            dispatch({
                type: 'Delete User',
                payload: userDelete
            })
        },

        addUserRedux: () => {
            dispatch({
                type: 'Create User'
            })
        }
    }
}
// export default withRouter(Home);
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));