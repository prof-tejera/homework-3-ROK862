import { Component } from 'react';
import Panel from 'components/Panel/Panel';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import swal from 'sweetalert';

import './LoginForm.css';

class LoginForm extends Component {
  render() {
    const btnClass = 'login-button';
    let usrname = "", passw = "";
    const getInput = ({ onChange, text, type }) => {
      return <Input text={text} type={type} onChange={e => onChange(e.target.value)} />
    }

    const loginDemo = () => {
      if (usrname !== "" && passw !== "") {
        swal("Good job!", "Well, let's pretend for a minute that you have been logged in!", "success");
      } else {
        swal({
          title: "Invalid Login",
          text: "Please complete the login form and try again.",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            swal("Please try again!", {
              icon: "success",
            });
          } else {
            swal("Thanks!");
          }
        });
      }
    }

    const username = getInput({onChange: (v)=>{
      usrname = v;
    }, text:"username", type:"text"});

    const password = getInput({onChange: (v)=>{
      passw = v;
    }, text:"password", type:"password"});
    
    return (
      <Panel backgroundColor="blue">
        {username}
        {password}
        <Button text="Login" type='button' className={btnClass} onClick={() => {loginDemo()}} color="green" size="large" />
      </Panel>
    );
  }
}

export default LoginForm;
