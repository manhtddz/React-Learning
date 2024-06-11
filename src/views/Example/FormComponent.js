import React from "react";

//class component
class FormComponent extends React.Component {

    state = {
        Job: '',
        Salary: '',
        Error: '',
    }

    onChangeJob = (event) => {
        this.setState({
            Job: event.target.value,
            // i: '1' another state can be set in setState method
        }
        )
    }
    onChangeSalary = (event) => {
        this.setState({
            Salary: event.target.value,
        }
        )
    }


    onClickButton = (event) => {
        event.preventDefault();
        if (this.state.Job && this.state.Salary) {
            console.log(this.state);
            this.props.addNewJob({ id: 'j4', name: this.state.Job, salary: this.state.Salary });
            this.setState({
                Job: '',
                Salary: ''
            })

        } else {
            this.setState({
                Error: 'Missing',
            })
        }

    }

    //re-render when state changed
    render() {

        return (
            <>
                <form>
                    <label htmlFor="Job">Job:</label>
                    <input type="text" id="Job" value={this.state.Job} onChange={(event) => { this.onChangeJob(event) }}></input><br />

                    <label htmlFor="Salary">Salary:</label>
                    <input type="number" id="Salary" value={this.state.Salary} onChange={(event) => { this.onChangeSalary(event) }}></input><br />

                    <input type="submit" onClick={(event) => { this.onClickButton(event) }} value="Submit"></input>
                    <div>{this.state.Error}</div>

                </form>
            </>
        )
    }
}

export default FormComponent;