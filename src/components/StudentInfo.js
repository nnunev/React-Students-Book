import React from 'react'

function LabelText(props) {
    return (
        <div className="form-row">
            <label htmlFor={props.name}>{props.label}:</label>
            <input type="text" id={props.name}/>
        </div>
    );
   }
   

export class StudentInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {firstName: "", lastName: "", year: "" };
        this.saveClicked = this.saveClicked.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    
    saveClicked = (e) => {
        e.preventDefault();
        console.log(this.state);
        }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <LabelText label="First name" name="firstName"/>
                <LabelText label="Last name" name="lastName" />
                <LabelText label="Year" name="year" />
                
                <button onClick={this.saveClicked}>
                    Save
                </button>

                <button>Clear</button>
            </form>
        );
    }

}
export default StudentInfo

/*
import React from 'react'

function LabelText(props) {
    return (
        <div className="form-row">
            <label htmlFor={props.name}>{props.label}:</label>
            <input type="text" id={props.name}/>
        </div>
    );
   }
   

export const StudentInfo = class StudentInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {firstName: "", lastName: "", year: "" };
    }
    
    
    render() {
        return (
            <form>
                <LabelText label="First name" name="firstName"/>
                <LabelText label="Last name" name="lastName" />
                <LabelText label="Year" name="year" />
                
                <button>Save</button>
                <button>Clear</button>
            </form>
        );
    }

}


*/