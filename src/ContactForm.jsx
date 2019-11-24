import React from 'react'

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {            
          age: 30,
          name: "",
          email: "",
          parentName: "",
          phoneNumber: "",
          isAdult: true
        };
        this.ageChanged = this.ageChanged.bind(this);
        this.dataChanged = this.dataChanged.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    ageChanged(event){
        const isAdult = event.target.value >= 18
        this.setState({age: event.target.value, isAdult: isAdult});
    }

    dataChanged(event) {
        const name = event.target.name;
        const val = event.target.value;
        this.setState({[name]: val});
    }

    handleSubmit() {
        alert("Submit clicked!");
    }


    render(){
        const isAdult = this.state.isAdult;
        return(            
            <form onSubmit={this.handleSubmit}>
                <h3>Form:</h3>
                <label>
                Age: <input type="number" value={this.state.age} onChange={this.ageChanged}/>
                </label>
                <br />
                {isAdult ? 
                <div>
                    <label>
                        Name: <input type="text" value={this.state.name} name="name" onChange={this.dataChanged}/>
                    </label>
                    <br />
                    <label>
                        Email: <input type="text" value={this.state.email} name="email" onChange={this.dataChanged}/>
                    </label>
                </div> 
                : 
                <div>
                    <label>
                        Parent Name: <input type="text" value={this.state.parentName} name="parentName" onChange={this.dataChanged}/>
                    </label>
                    <br />
                    <label>
                        Parent Phone No: <input type="text" value={this.state.phoneNumber} name="phoneNumber" onChange={this.dataChanged}/>
                    </label>
                </div> 
                }
                <input type="submit" value="Submit" />
            </form>
        );
    }

    

}
export default ContactForm