import React        from 'react';
import $            from 'jquery';
import firebase     from 'firebase';
import './LoginPage.scss';

class LoginPage extends React.Component{

  constructor(props){
    super(props);
    
    this.googleSignin       = this.googleSignin.bind(this);
    firebase.auth().getRedirectResult().then(function(result) {
        console.log('~~~~~~~~~~~~~~~~~~~ >>> LoginPage <---> constructor <<< ~~~~~~~~~~~~~~~~~~~');
        if(result.credential){
            var token = result.credential.accessToken;
            var user = result.user;
            console.log(token);
            console.log(user);
            props.checkLoginSession(result);
        }
        return result;
    }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error.code)
        console.log(error.message);
    });
    
  }
  
  googleSignin(){
    //var provider = new firebase.auth.GoogleAuthProvider();
    //firebase.auth().signInWithRedirect(provider);
    let params = {"user":{"uid":"CDEPKAd7Xhh9YKYf7xG4VUK539I3","displayName":"Veera Reddy Obulareddy","photoURL":"https://lh3.googleusercontent.com/-aJ-hOprtUpo/AAAAAAAAAAI/AAAAAAAAKmk/xVZUzFBCxRw/photo.jpg","email":"veerareddy.obula@gmail.com","emailVerified":true,"phoneNumber":null,"isAnonymous":false,"providerData":[{"uid":"111068320586336381399","displayName":"Veera Reddy Obulareddy","photoURL":"https://lh3.googleusercontent.com/-aJ-hOprtUpo/AAAAAAAAAAI/AAAAAAAAKmk/xVZUzFBCxRw/photo.jpg","email":"veerareddy.obula@gmail.com","phoneNumber":null,"providerId":"google.com"}],"apiKey":"AIzaSyACxS-iEmmpVuBwKWi89b8QKu-xKwXSado","appName":"[DEFAULT]","authDomain":"probudget-fb997.firebaseapp.com","stsTokenManager":{"apiKey":"AIzaSyACxS-iEmmpVuBwKWi89b8QKu-xKwXSado","refreshToken":"AEoYo8u38BcAfvpIifdi2SwG7XQh5s6XhFQnTm9nPyjj-Dzf7JyZW9WGkTb5xBvF1HiyAeRRg6YrR3Hlm3EEPPmfxCBQ6SYcrDMNuTJhaAREyoNoTVzJ232ciyN9vgKdb6UF4NQHT4KoSQEmKz054g59F9kwvDEXZ96HvpVsowR4AThokGSCjAK64n1489w8MruhqJ08IOuX7qeB1VwPBAV-2GGP4wMJaT0Dp4CtNJGEoSDeaiu_78wXui_xz7Vx_ovXVaqtSuJaoyiX3kozU-iMBUPNaV17XNhyl8a2mnriS7WN_11xGJzyZ0YMbXhD7OMtL1O8q8wWDxN2qg4NEDl4WMz4kjmC_NwLfha9uUO4wkarNzDfD1jzxClvz9ZMb5D6Uxe3jdA2","accessToken":"eyJhbGciOiJSUzI1NiIsImtpZCI6ImFhZjVlZjU4MTUyY2ViYzEzM2U2MTgzNzQ1NGFkYTUyZmU5MzZmM2EifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcHJvYnVkZ2V0LWZiOTk3IiwibmFtZSI6IlZlZXJhIFJlZGR5IE9idWxhcmVkZHkiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy1hSi1oT3BydFVwby9BQUFBQUFBQUFBSS9BQUFBQUFBQUttay94VlpVekZCQ3hSdy9waG90by5qcGciLCJhdWQiOiJwcm9idWRnZXQtZmI5OTciLCJhdXRoX3RpbWUiOjE1MTgzNTcwNDAsInVzZXJfaWQiOiJDREVQS0FkN1hoaDlZS1lmN3hHNFZVSzUzOUkzIiwic3ViIjoiQ0RFUEtBZDdYaGg5WUtZZjd4RzRWVUs1MzlJMyIsImlhdCI6MTUxODM1NzA0MCwiZXhwIjoxNTE4MzYwNjQwLCJlbWFpbCI6InZlZXJhcmVkZHkub2J1bGFAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMTEwNjgzMjA1ODYzMzYzODEzOTkiXSwiZW1haWwiOlsidmVlcmFyZWRkeS5vYnVsYUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.RURv91kcznycwyIqP8-b9gAGJ8iPZCvhf6PmWbQR5IJnOZN65gEK3xPsuCA8M3-II8y6yeKLoAc9HHVehLUZbNPrXnxTIG_xOdNLB6t6kGsldwntTDBy5FYpHr5daf8c1jGd89FNc4dRSN4iQTY4jDdiJ7vubLPGaCWxrs-UlPNzv2zdjsBd9lIRpaRWt4NPyEa8FilOk9ofpxbTNci8CpuodNM3gAq0cmDTBYT8UT03ap2vF46MpzBGp-aFxI297S6_5qpsQQJGVrk-8_0zh4Iwl-u727O67ooS3Pcz2Fflb-lA1O7Xchg-0U3YEGiyP9GdbJLcPTeVhUXD7fN4Cw","expirationTime":1518360640936},"redirectEventId":null,"lastLoginAt":"1518357040000","createdAt":"1517560058000"},"credential":{"idToken":"eyJhbGciOiJSUzI1NiIsImtpZCI6ImUyNzY3MWQ3M2EyNjA1Y2NkNDU0NDEzYzRjOTRlMjViM2Y2NmNkZWEifQ.eyJhenAiOiI5NzI0OTYyNzAxNjMtZDRpZnVwaTRzMDdjaThvMGJrMGxhajlzdGw1aTZscGouYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI5NzI0OTYyNzAxNjMtZDRpZnVwaTRzMDdjaThvMGJrMGxhajlzdGw1aTZscGouYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTEwNjgzMjA1ODYzMzYzODEzOTkiLCJlbWFpbCI6InZlZXJhcmVkZHkub2J1bGFAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiItS1dGcEhOdXZEeE0xaWVlNjdwbXJ3IiwiZXhwIjoxNTE4MzYwNjQwLCJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiaWF0IjoxNTE4MzU3MDQwfQ.piMN0_ADGefTagIGFo4LkGuu0H60T1lyNGrFZ0r5JloKXzlQKnoKo3VNgeAZrXeqaxlJDw1Qpv5B9NNeTFERctxZQclaFPZQZ4rnGnHyq9TGB_8j9yLap4fdFdTumotpSspRanMzEj2lS0NATLSjSvLp9rdmloQP3k8btq9fwT56OfapGqINzRyetAp2teA_gVkQVVkizIvVLKzMV2J7w9FUtjE7MZaMrS4UPEneQOBShDTaIPn70rOMGYxOc0KVzmWCzyCDANoThvdFzn5KwfoK1xiqVQBtgEMhM1AxDd5xTXhxktS2vjxR4xOIAl12Cvq8vzJ4DLzmfoxK70h5Tg","accessToken":"ya29.GlxfBd6cTwuYmfiNzjUXeZJ-fcrQsSO0jlb1CNa6QE-2eU8wML3ILWnwa7yqHinJbyFN5u4pnyp362URJ8U1YDc_p10ru70iwy0NbdIV8e7GsjGhiQncQNeApxCYFg","providerId":"google.com"},"additionalUserInfo":{"providerId":"google.com","isNewUser":false,"profile":{"gender":"male","name":"Veera Reddy Obulareddy","link":"https://plus.google.com/111068320586336381399","id":"111068320586336381399","verified_email":true,"given_name":"Veera Reddy","locale":"en","family_name":"Obulareddy","email":"veerareddy.obula@gmail.com","picture":"https://lh3.googleusercontent.com/-aJ-hOprtUpo/AAAAAAAAAAI/AAAAAAAAKmk/xVZUzFBCxRw/photo.jpg"}},"operationType":"signIn"};
    this.props.checkLoginSession(params);

  }
  
  componentWillReceiveProps(nextProps){
    console.log('~~~~~~~~~~~~~~~~~~~ >>> LoginPage <---> componentWillReceiveProps <<< ~~~~~~~~~~~~~~~~~~~', nextProps);
    if(nextProps.authLoginLinkBean.user){
      this.props.history.push('/probudget/home/dashboard');
    }
  }
  
  render(){
    return(
      <div className="app flex-row align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4" style={{padding:'0px'}}>
              <div className="card card-body">
                <div className="d-flex flex-column">
                <h1 className="text-center">Pro-Budget</h1>
                <div className="about-pro-budget"></div>
                <div className="d-flex flex-column justify-content-end">
                  <button type="button" className="btn btn-googleplus btn-lg" onClick={this.googleSignin}><i className="fa fa-google-plus fa-fw"></i> Google+</button>
                </div>
                <p className="text-muted">Sign In to your account via google</p>
                </div>
              </div>
            </div>
            <div className="col-md-4" style={{padding:'0px'}}>
              <div className="card card-body text-center text-white bg-primary" style={{backgroundColor:'transparent', minHeight: '100%'}}>
                <div>
                  <p>Pro-Budget  personal finance software is the perfect solution for managing your finances. You can organize your cash flow, expenses and bank accounts in one place. And easy to understand charts and graphs enable you to visualize how you’re spending your money month-to-month. This enables you to track your progress, discover where you can make savings and improve how you manage your money.</p>
                <div className="row pull-right">
                  <div className="col-6">
                    <button type="button" className="btn btn-warning"><i className="fa fa-info-circle"></i> More info!!</button>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;