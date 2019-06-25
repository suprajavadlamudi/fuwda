var semail,sname,sphn,sdob,sgender,userid;
 var users,Uid;
 firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
  	users = firebase.auth().currentUser;
  	Uid=users.uid;
    window.location = "./home.html";

  } else {
  	
  }
}); 
  function signin(){
  	var email = document.getElementById('email').value;
  	var password = document.getElementById('password').value;

  	firebase.auth().signInWithEmailAndPassword(email,password).catch(function(error){
  		var errorCode = error.code;
  		var errorMessage = error.message;
  		window.alert("Error:"+errorMessage);
  	});

 }
function signup(){
  	semail = document.getElementById('semail').value;
  	spassword = document.getElementById('spassword').value;
  	sname = document.getElementById('sname').value;
  	sphn = String(document.getElementById('sphn').value);
  	sdob = String(document.getElementById('sdob').value);
    sgender = "";
  	
  	if (document.getElementById('sgender1').checked) {
  	sgender = "Male";
	}
	if (document.getElementById('sgender2').checked) {
  	sgender = "Female";
	}
	if (document.getElementById('sgender3').checked) {
  	sgender = "";
	}

  	firebase.auth().createUserWithEmailAndPassword(semail,spassword).catch(function(error){
  		var errorCode = error.code;
  		var errorMessage = error.message;
  		window.alert("Error:"+errorMessage);
      window.location="./index.html"
  	});
  	firebase.database().ref('users/').push({
	    username: sname,
	    email: semail,
	    phn: sphn,
	    dob : sdob,
	    sex : sgender
  });
}