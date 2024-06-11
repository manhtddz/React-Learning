import React from "react";
import ChildComponent from "./ChildComponent";
import FormComponent from "./FormComponent";

//class component
class Sthg extends React.Component {

    state = {
        jobs: [
            { id: 'j1', name: 'devOps', salary: '1000' },
            { id: 'j2', name: 'javaDev', salary: '1000' },
            { id: 'j3', name: 'manager', salary: '1000' },
        ]
    }

    addNewJob = (newJob) => {
        this.setState({
            jobs: [...this.state.jobs, newJob]
        })
    }

    deleteAJob = (id) => {
        let deletedList = this.state.jobs.filter(j => j.id !== id)
        this.setState({
            jobs: deletedList
        })
    }

    updateAJob = (job) => {
        this.state.jobs.find(j => j.id === job.id).name = job.name;
        this.state.jobs.find(j => j.id === job.id).salary = job.salary;

    }
    //re-render when state changed
    render() {

        return (
            <>
                <FormComponent
                    addNewJob={this.addNewJob}
                />
                <ChildComponent
                    jobs={this.state.jobs}
                    deleteAJob={this.deleteAJob}
                    updateAJob={this.updateAJob}
                />

            </>
        )
    }
}

export default Sthg;