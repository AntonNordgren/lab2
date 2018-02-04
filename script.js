
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBiqFIEeH5MSju3SVAtaYrbpH-LBaJiT9s",
    authDomain: "lab2-64546.firebaseapp.com",
    databaseURL: "https://lab2-64546.firebaseio.com",
    projectId: "lab2-64546",
    storageBucket: "",
    messagingSenderId: "619044572090"
};
firebase.initializeApp(config);

const db = firebase.database();

let content = document.getElementById("loggedInContent");
let avatar = document.getElementById("avatar");

//avatar.src = "https://avatars3.githubusercontent.com/u/32438821?v=4";

let provider = new firebase.auth.GithubAuthProvider();
provider.setCustomParameters({
    'allow_signup' : 'true'
});

document.getElementById("githubButton").addEventListener("click", function(){
    firebase.auth().signInWithPopup(provider).then(function(result) {
        console.log(result);
        //content.innerHTML = "Username: " + result.additionalUserInfo.username + "<br>";
        //avatar.src = result.additionalUserInfo.profile.avatar_url;
    }).catch(function(error) {
        console.log("Popup result, error: " + error.message);
    });
});

