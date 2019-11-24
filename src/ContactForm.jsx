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
          isAdult: true,
          notValidPhoneNumber: false,
          notValidEmail: false,
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

    handleSubmit(event) {
        event.preventDefault();
        if(this.state.isAdult) {
            const email = this.state.email;
            const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
            if(!email.match(emailRegex)) {
                this.setState({notValidEmail: true});
                return;
            }
            else this.setState({notValidEmail: false});
        }
        else {
            const phoneNumber = this.state.phoneNumber;
            const numberRegex = /^[0-9]{9}$/g;
            if(!phoneNumber.match(numberRegex)){
                this.setState({notValidPhoneNumber: true});
                return;
            }
            else this.setState({notValidPhoneNumber: false});          
        }
        
        
    }


    render(){
        const isAdult = this.state.isAdult;
        return(            
            <form onSubmit={this.handleSubmit} >
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
                        {this.state.notValidEmail && <label style={{color: "red"}}>Not valid email address!</label>}
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
                        {this.state.notValidPhoneNumber && <label style={{color: "red"}}>Not valid phone number!</label>}
                    </label>
                </div> 
                }
                <input type="submit" value="Submit"/>
            </form>
        );
    }

    

}
export default ContactForm