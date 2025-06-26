// ************************ Login Form and LOcal storage ***************************
var users = JSON.parse(localStorage.getItem('users')) || [];
var counter = 0;


// *************************** Sign In and Sign Up **************************
var w = document.getElementById('sign');
var inputEmail = document.getElementById('Email');
var inputPassword = document.getElementById('Password');
var successtext = document.getElementById('success-text');
var SignInText = document.getElementById("sign");
var SignUpbtn = document.getElementById("loginText");
var buttonLogin = document.getElementById('loginText');
var errortext = document.getElementById('error-text');
var textUser = document.querySelector('#userdata');
const elem = document.getElementById('website');



w.addEventListener('click', function () {

  var AddedInput = '';
  AddedInput = `<div class="mt-3 pt-2 mb-2 pb-2">
      <input type="password" id= "signPass" class="form-control border-0 rounded-2" placeholder="Enter Your Password">
    </div> `
  document.getElementById('sign-in').innerHTML = AddedInput;
  document.getElementById("loginText").textContent = "Sign Up";
  document.getElementById("sign").textContent = "Signin";

  inputEmail.placeholder = "Enter Your Name";
  inputEmail.type = "text";  //assigning text to the first input{Strings only!}
  inputPassword.placeholder = "Enter Your Email";
  inputPassword.type = "email";

  var SignPass = document.getElementById('signPass');


  // --------------------------Sign Up BUtton ------------------------

  SignUpbtn.addEventListener('click', function () {

    var UserRegisteration =
    {
      user: `${counter + 1}`,
      Name: inputEmail.value,
      Email: inputPassword.value,
      Password: SignPass.value,
    };



    // Name, Email & Password Validation

    //Name validation

    function ValidNameRegex(inputEmail) {
      const nameRegex = /[a-zA-z0-9\!-_$]$/;
      return nameRegex.test(inputEmail);
    }

    // //Email validation

    function ValidMailRegex(inputPassword) {
      const mailRegex = /[a-zA-z0-9\!-_$]+\@[a-zA-z]+\.[a-zA-z]{3}$/
      return mailRegex.test(inputPassword);
    }

    // //Password validation


    function ValidPassRegex(SignPass) {
      const PassRegex = /[a-zA-z0-9\!-_$]$/;
      return PassRegex.test(SignPass);
    }

    ValidNameRegex(inputEmail);
    ValidMailRegex(inputPassword);
    ValidPassRegex(SignPass);



    if (inputEmail.value === '' && inputPassword.value === '' && SignPass.value === '') {
      inputEmail.classList.add('is-invalid');
      inputPassword.classList.add('is-invalid');
      SignPass.classList.add('is-invalid');
      errortext.classList.remove('textShow');

    }

    else if (inputEmail.value === '' || inputPassword.value === '' || SignPass.value === '') {
      inputEmail.classList.add('is-invalid');
      inputPassword.classList.add('is-invalid');
      SignPass.classList.add('is-invalid');
      errortext.classList.remove('textShow');

    }

    else if (ValidNameRegex(inputEmail.value) && ValidMailRegex(inputPassword.value) && ValidPassRegex(SignPass.value)) {
      successtext.classList.remove('success-display');
      inputEmail.classList.add('is-valid');
      inputPassword.classList.add('is-valid');
      SignPass.classList.add('is-valid');
      users.push(UserRegisteration);
      localStorage.setItem('users', JSON.stringify(users))
      counter++;
    }

  })

  SignInText.addEventListener('click', function () {
    AddedInput = '';
    document.getElementById('sign-in').innerHTML = AddedInput;
    document.getElementById("loginText").textContent = "Login";
    document.getElementById("sign").textContent = "SignUp";
    inputEmail.placeholder = "Enter Your Email";
    inputPassword.placeholder = "Enter Your Password";
  })


})

/********************************Login Button/************************************/

// Email & Password Validation

//Email validation

function isValidEmailRegex(inputEmail) {
  const urlRegex = /[a-zA-z0-9\!-_$]+\@[a-zA-z]+\.[a-zA-z]{3}$/
  return urlRegex.test(inputEmail);
}

// //Password validation

function isValidPassRegex(inputPassword) {
  const P = /[a-zA-z0-9\!-_$]$/;   //Strings
  return P.test(inputPassword);
}

buttonLogin.addEventListener('click', function () {


  // /storing data if all inputs are successfully validated
  // ******************************************************//

  console.log(users.length)   //returns the number of users saved in localstorage 
  console.log(users)


  if (inputEmail.value === '' && inputPassword.value === '') {
    errortext.classList.remove('textShow');
    inputEmail.classList.add('is-invalid');
    inputPassword.classList.add('is-invalid');
    console.log('No data has provided, please enter email and password again')
  }
  else if (inputEmail.value === '' || inputPassword.value === '') {
    errortext.classList.remove('textShow');
    inputEmail.classList.add('is-invalid');
    inputPassword.classList.add('is-invalid');
    console.log('Missing data')

  }

  else if (isValidEmailRegex(inputEmail.value) && isValidPassRegex(inputPassword.value)) {

    for (let i = 0; i < users.length; i++) {

      if ((inputEmail.value == users[i].Email) && (inputPassword.value == users[i].Password)) {

        let Username = users[i].Name;
        console.log(Username);

        inputEmail.classList.add('is-valid');
        inputPassword.classList.add('is-valid');
        successtext.classList.remove('success-display');
        console.log('Email & Password are both correct in Regex Form')
        console.log('data are registered in the system ')
        elem.href = "Daniels.html"
        let textDaniels = ''
        textDaniels = `<div>${users[i].Name}</div>`
        textUser.innerHTML = textDaniels;
        break;
      }

      else {
        console.log("Data is not registered in the system")
        inputEmail.classList.add('is-invalid');
        inputPassword.classList.add('is-invalid');
      }
    }

  }

  else {
    inputEmail.classList.add('is-invalid');
    inputPassword.classList.add('is-invalid');
  }

})
