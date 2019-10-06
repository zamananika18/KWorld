const signupForm = document.querySelector('#signup-form');
signupF.addEventListener('submit',(e)=>{
	e.preventDefault();
	const email = signupForm['inputEmail'].value;
	const password = signupForm['inputPassword'].value;
	
	auth.createUserWithEmailAndPassword(email,password).then(cred => {
		console.log(cred.user)
		
	})
	
	
})