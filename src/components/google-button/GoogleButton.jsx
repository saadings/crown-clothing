import { useEffect } from "react"
import jwt_decode from "jwt-decode";

const handleCredentialResponse = (response) =>{
    console.log(response.credential);
    const responsePayload = jwt_decode(response.credential);

     console.log("ID: " + responsePayload.sub);
     console.log('Full Name: ' + responsePayload.name);
     console.log('Given Name: ' + responsePayload.given_name);
     console.log('Family Name: ' + responsePayload.family_name);
     console.log("Image URL: " + responsePayload.picture);
     console.log("Email: " + responsePayload.email);
}

const GoogleButton = () => {
    useEffect(() => {

      window.google.accounts.id.initialize({
      client_id: '1017316511062-i211usc0pnt71uakp9a149huqp85b4od.apps.googleusercontent.com',
      callback: handleCredentialResponse
    });
    
    window.google.accounts.id.renderButton (
        document.getElementById("googleSignIn"),
        {theme: 'filled_black', size: 'large', width: '250', text:"continue_with"}
    )

    }, [])
    
    return (<>
    <div id="googleSignIn">

    </div>

    </>);
}

export default GoogleButton;