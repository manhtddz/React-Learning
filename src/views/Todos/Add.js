import React from "react";


class Add extends React.Component {

    state = {
        title: ''
    }

    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleClickAdd = () => {
        if (!this.state.title) {
            return;
        }

        let element = {
            id: Math.floor(Math.random() * 10000),
            title: this.state.title
        }

        this.props.addNew(element);
        this.setState({
            title: ''
        })
    }
    render() {

        let { title } = this.state
        return (
            <div className="add-todo">

                <input value={title} onChange={(event) => this.handleOnChangeTitle(event)} />
                <button onClick={() => this.handleClickAdd()}>Add</button>
            </div>

        )
    }
}

export default Add;