import React from "react";

//class component
class ChildComponent extends React.Component {


    state = {
        showJobs: false,
        updateName: '',
        updateSalary: '',
        error: ''
    }
    handleShowJobs = () => {
        this.setState({
            showJobs: !this.state.showJobs,

        })

    }

    deleteJob = (id) => {
        this.props.deleteAJob(id)
        // console.log(id)
    }

    onChangeJob = (event) => {
        this.setState({
            updateName: event.target.value,
            // i: '1' another state can be set in setState method
        }
        )
    }
    onChangeSalary = (event) => {
        this.setState({
            updateSalary: event.target.value,
        }
        )
    }


    updateJob = (id) => {
        if (this.state.updateName && this.state.updateName) {
            console.log(this.state);
            this.props.updateAJob({ id: id, name: this.state.updateName, salary: this.state.updateSalary });
            this.setState({
                updateName: '',
                updateSalary: ''
            })

        } else {
            this.setState({
                error: 'Missing',
            })
        }

    }
    render() {
        let { jobs } = this.props; //object destructuring (object naof cx dc chứ ko chỉ mỗi props)
        let { showJobs } = this.state;
        return (
            <>
                <div>
                    <form>
                        <label htmlFor="Job">Job:</label>
                        <input type="text" id="Job" value={this.state.updateName} onChange={(event) => { this.onChangeJob(event) }}></input><br />

                        <label htmlFor="Salary">Salary:</label>
                        <input type="number" id="Salary" value={this.state.updateSalary} onChange={(event) => { this.onChangeSalary(event) }}></input><br />

                        {this.state.error}

                    </form>
                </div>
                {!showJobs ? <div><button onClick={() => { this.handleShowJobs() }}>Show</button></div>
                    :
                    <>
                        <div><button onClick={() => { this.handleShowJobs() }}>Hide</button></div>
                        <div className="list-jobs">
                            {jobs.map((item, index) => {
                                return (
                                    <div key={item.id}>
                                        {index}. {item.name}: ${item.salary}
                                        <span><button onClick={() => { this.deleteJob(item.id) }}>Delete</button></span>
                                        <span><button onClick={() => { this.updateJob(item.id) }}>Update</button></span>
                                    </div>
                                )
                            })}
                        </div>
                    </>
                }
            </>
        )
    }
}

// const ChildComponent = (props) => {
//     let {jobs} = props; //object destructuring (object naof cx dc chứ ko chỉ mỗi props)
//     return (
//         <>
//             <div className="list-jobs">

//                 {jobs.map((item, index) => {
//                     return (
//                         <div key={item.id}>
//                             {index + ' '}{item.name}
//                         </div>
//                     )
//                 })}
//             </div>

//         </>
//     )
// }


// componentDidMount hay để gọi api
// componentDidUpdate nên gọi khi cha đổi thì update thg con
export default ChildComponent;