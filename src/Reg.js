// Registration Page
import React,{Component} from 'react';
import Logo from './diet.svg';
import './App.css';
import FormFields from './formfields';
import {Link} from 'react-router-dom';







class Signup extends Component{

    state = {

        formData:{
            name:{
                element:'input',
                value:'',
                config:{
                    name:'name_input',
                    type:'text',
                    placeholder:'Name '
                },
                validation:{
                    required:true,
                    minLen:5
                },
                valid:false,
                touched:false,
                validationMessage:''
            },

            username :{
                element:'input',
                value:'',
                config:{
                    name:'username_input',
                    type:'text',
                    placeholder:'Username'
                },
                validation:{
                    required:true
                },
                valid:false,
                touched:false,
                validationMessage:''
                // have to check for uniqueness 
            },
            emailid:{
                element:'input',
                value:'',
                config:{
                    name:'emailid_input',
                    type:'email',
                    placeholder:'Email id'
                },
                validation:{
                    required:true
                },
                valid:false,
                touched:false,
                validationMessage:''
            },
            contactnumber:{
                element:'input',
                value:'',
                config:{
                    name:'contact_input',
                    type:'number',
                    placeholder:'Contact Number'
                },
                validation:{
                    required:true
                },
                valid:false,
                touched:false,
                validationMessage:''
            },
            
            password:{
                element:'input',
                value:'',
                config:{
                    name:'password',
                    type:'password',
                    placeholder:'Password'
                },
                validation:{
                    required:true
                },
                valid:false,
                touched:false,
                validationMessage:''
            }


        
    }}

    updateForm = (newState) => {
        this.setState({
            formData:newState
        })
    }


submitForm = (event) => {
        event.preventDefault();
        let dataToSubmit = {};
        let formIsValid = true;

        for(let key in this.state.formData){
            dataToSubmit[key] = this.state.formData[key].value;
        }

        for(let key in this.state.formData){
            formIsValid = this.state.formData[key].valid && formIsValid;
        }

        if(formIsValid){
         //   firebaseDB.ref('users').push(dataToSubmit)
        //  .then(()=>{
               console.log('new user added') 
          //  }).catch( e =>{
     //           console.log(e)
   //         })
        }
    
    }


 

    render(){
        return(


<div className="App">
        <div >
        <Logo/>

<div className = "">
<form onSubmit={this.submitForm}>


<FormFields
        formData={this.state.formData}
        onblur={(newState) => this.updateForm(newState)}
        change={(newState) => this.updateForm(newState)}
    />

    <button type="submit">submit</button>

</form>
</div>

        </div>
        </div>
        )
    }

}

export default Signup;

function Reg()
{
    return(
        <div>
            
        </div>
    );
}

//export default Reg;