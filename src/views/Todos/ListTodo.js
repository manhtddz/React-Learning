import React from "react";
import Add from "./Add";


class TodoList extends React.Component {

    state = {
        listTodo: [
            { id: 1, title: 'Play' },
        ],
        editTodo: {

        }
    }

    addNew = (newElement) => {
        this.setState({
            listTodo: [...this.state.listTodo, newElement]
        })
    }

    delete = (todo) => {
        let currentList = this.state.listTodo;
        currentList = currentList.filter(item => item.id !== todo.id);
        this.setState({
            listTodo: currentList
        })
    }

    handleEdit = (todo) => {
        let { listTodo, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        if (isEmptyObj === false && editTodo.id === todo.id) {
            let copyOfListTodo = [...listTodo];
            let objIndex = copyOfListTodo.findIndex(item => item.id === todo.id)
            copyOfListTodo[objIndex].title = editTodo.title
            this.setState({
                listTodo: copyOfListTodo,
                editTodo: {}
            })
            return
        }
        this.setState({
            editTodo: todo
        });
    }

    handleEditOnchange = (event) => {
        let editTodoCopy = { ...this.state.editTodo }
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        });
    }
    render() {
        let { listTodo, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
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

                                    {isEmptyObj ?
                                        <span>{item.id} - {item.title}</span>
                                        :
                                        <>
                                            {editTodo.id === item.id
                                                ?
                                                <span>{item.id} - <input value={editTodo.title} onChange={(event) => { this.handleEditOnchange(event) }} /></span>
                                                :
                                                <span>{item.id} - {item.title}</span>
                                            }
                                        </>

                                    }
                                    <button onClick={() => this.handleEdit(item)}>
                                        {isEmptyObj
                                            ? 'Edit' : 'Save'}
                                    </button>
                                    <button onClick={() => { this.delete(item) }}>Delete</button>
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