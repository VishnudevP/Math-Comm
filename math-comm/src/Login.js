import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import "./Login.css"
import { auth , provider} from "./firebase";
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
  const [ state , dispatch] = useStateValue();

   const SignIn = () => {
   
    auth.signInWithPopup(provider).then(result => {

      dispatch({
        type : actionTypes.SET_USER ,
        user : result.user
      })

      console.log(result)
    }).catch((error) => alert(error.message));
   }

   const StyledButton = withStyles({
        root: {
          background: 'linear-gradient(270deg, rgba(0,6,101,1) 0%, rgba(0,241,255,1) 100%)',
          borderRadius: 3,
          border: 0,
          color: 'white',
          height: 48,
          padding: '0 30px',
          boxShadow: '0 3px 5px 2px rgba(255, 255, 255, .4)',
        },
        label: {
          textTransform: 'capitalize',
        },
      })(Button);

    return <div className="login">
             <div className="login__logo">
             <img className="etLogo" src="https://www.flaticon.com/svg/static/icons/svg/1274/1274926.svg" 
                alt="facebook logo" height="75px" width="100"
                />

               <StyledButton onClick={ SignIn} > Log In </StyledButton>
             </div>
           
        </div>
}

export default Login
