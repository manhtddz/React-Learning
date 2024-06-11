import React from "react";
import Add from "./Add";


class TodoList extends React.Component {

    state = {
        listTodo: [
            { id: 1, title: 'Play' },
        ]
    }

    addNew = (newElement) => {
        this.setState({
            listTodo: [...this.state.listTodo, newElement]
        })
    }
    render() {
        let { listTodo } = this.state;
        return (
            <div className="list-todo-container">
                <Add
                    addNew={this.addNew}
                />
                <div className="todo-list-content">
                    {listTodo && listTodo.length > 0 &&
                        listTodo.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    <span>{item.id} - {item.title}</span>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        )
    }
}
export default TodoList;