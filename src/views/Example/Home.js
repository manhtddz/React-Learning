import React from "react";
import Color from "../HOC/Color";
import { connect } from "react-redux";
// HOC higher order component
class Home extends React.Component {


    render() {
        return (
            <div>Hello</div>
        )
    }
}

const mapStateToProps = (state) => {
    return { dataRedux: state.users }
}
// export default withRouter(Home);
export default connect(mapStateToProps)(Color(Home));