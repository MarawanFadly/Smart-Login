// ************************ Login Form and LOcal storage ***************************
var users=JSON.parse(localStorage.getItem('users'))|| [];
var counter=0;


// *************************** Sign In and Sign Up **************************
var w=document.getElementById('sign');
console.log(w)
var inputEmail=document.getElementById('Email');
var inputPassword=document.getElementById('Password');
var successtext=document.getElementById('success-text');
var SignInText=document.getElementById("sign");
var SignUpbtn=document.getElementById("loginText");

console.log(inputEmail);

w.addEventListener('click',function(){
var AddedInput='';
AddedInput=`<div class="mt-3 pt-2 mb-2 pb-2">
      <input type="password" id= "signPass" class="form-control border-0 rounded-2" placeholder="Enter Your Password">
    </div> `
document.getElementById('sign-in').innerHTML=AddedInput;
document.getElementById("loginText").textContent = "Sign Up";
document.getElementById("sign").textContent = "Signin";

var SignPass=document.getElementById('signPass');

inputEmail.placeholder="Enter Your Name";
inputEmail.type="text";  //assigning text to the first input{Strings only!}
inputPassword.placeholder="Enter Your Email";
inputPassword.type = "email";



// --------------------------Sign Up BUtton ------------------------

SignUpbtn.addEventListener('click',function(){

var UserRegisteration =
  {
    user: `${counter+1}`,
    Name: inputEmail.value,   
    Email: inputPassword.value,
    Password:SignPass.value,
  };

  users.push(UserRegisteration);

if (inputEmail.value==='' && inputPassword.value==='' && SignPass.value==='')
  {
     inputEmail.classList.add('is-invalid');
     inputPassword.classList.add('is-invalid');
     SignPass.classList.add('is-invalid');
     errortext.classList.remove('textShow');
  }

else if (inputEmail.value==='' || inputPassword.value==='' || SignPass.value==='')
  {
     inputEmail.classList.add('is-invalid');
     inputPassword.classList.add('is-invalid');
     SignPass.classList.add('is-invalid');
     errortext.classList.remove('textShow');
  }

 else if (inputEmail.value!=null && inputPassword.value!=null && SignPass.value!=null)
  {
    successtext.classList.remove('success-display');
    inputEmail.classList.add('is-valid');
    inputPassword.classList.add('is-valid');
    SignPass.classList.add('is-valid');
    

localStorage.setItem('users', JSON.stringify(users)) 
counter++;
  }

})

SignInText.addEventListener('click',function(){
AddedInput='';
document.getElementById('sign-in').innerHTML=AddedInput;
document.getElementById("loginText").textContent = "Login";
document.getElementById("sign").textContent = "SignUp";
inputEmail.placeholder="Enter Your Email";
inputPassword.placeholder="Enter Your Password";
})

})


//Login Button

var buttonLogin=document.getElementById('loginText');
var errortext=document.getElementById('error-text');
var SignPass=document.getElementById('signPass');


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

buttonLogin.addEventListener('click',function(){
  
  // /storing data if all inputs are successfully validated
  // ******************************************************//
  
console.log(users.length)   //returns the number of users saved in localstorage 
console.log(users);// all datas entered by the user 

// for(let i=0;i<users.length;i++){
//   console.log(users[i].Email);
// }
    

if (inputEmail.value==='' && inputPassword.value==='')
  {
     errortext.classList.remove('textShow');
     inputEmail.classList.add('is-invalid');
     inputPassword.classList.add('is-invalid');
     console.log('No data has provided, please enter email and password again')
  }
else if (inputEmail.value==='' || inputPassword.value==='')
  {
     errortext.classList.remove('textShow');
     inputEmail.classList.add('is-invalid');
     inputPassword.classList.add('is-invalid');
     console.log('Missing data')

    }

  else if (isValidEmailRegex(inputEmail.value) && isValidPassRegex(inputPassword.value)){
  
  for(let i=0; i<users.length;i++){
  
    if((inputEmail.value==users[i].Email) && (inputPassword.value==users[i].Password))
  
  {
  inputEmail.classList.add('is-valid');
  inputPassword.classList.add('is-valid');
  successtext.classList.remove('success-display');

  console.log('Email & Password are both correct in Regex Form')
  console.log('data are registered in the system ')

  const elem = document.getElementById('website'); 
  elem.href = "Daniels.html" 
  }

  else
  
  {
  console.log("Data are not registered in the system")
  inputEmail.classList.add('is-invalid');
  inputPassword.classList.add('is-invalid');

  }   
}
 
  // dataArr=JSON.parse(localStorage.setItem(inputEmail.value,inputPassword.value))
  
}

  else{
    inputEmail.classList.add('is-invalid');
    inputPassword.classList.add('is-invalid');
    console.log('There is a problem with the provided email/password');
  }
})



// //declaration of variables used in internet connection validation
// let title = document.querySelector('.title');
// let reload = document.querySelector('.reload');
// let circle = document.querySelector('.circle');

// //declaration of variables used in the bookmark assignment
// var BookmarkName = document.getElementById('BookmarkName');//object
// var BookmarkWebsite = document.getElementById('BookmarkWebsite');
// var addBtn = document.getElementById('addBtn')
// var websiteList;
// var currentIndex;

// if (localStorage.getItem('websiteList') !== null) {

//   websiteList = JSON.parse(localStorage.getItem('websiteList'))
//   display();
// } else {
//   websiteList = [];
// }

// isValidURLRegex(BookmarkWebsite);

// //URL validation

// function isValidURLRegex(BookmarkWebsite) {
//   const urlRegex = /(www\.)[a-zA-z0-9\!-_$]+\.[a-zA-z]{3}$/
//   return urlRegex.test(BookmarkWebsite);
// }

// isValidNameRegex(BookmarkName);

// // Bookmark Name validation

// function isValidNameRegex(BookmarkName) {
//   const P = /[a-z]$/;   //Strings
//   return P.test(BookmarkName);
// }


// // Add
// function addProduct() {
//   var bookmarksite = {
//     bookmarkName: BookmarkName.value,
//     bookmarkWebsite: BookmarkWebsite.value,
//   }

//   var square = '';

//   //Bookmark Website Validation
//   if (isValidURLRegex(BookmarkWebsite.value)) {

//     console.log('the website is valid')

//     validRegexURL();

//     function validRegexURL() {
//       var w = document.getElementById('BookmarkWebsite');
//       w.classList.add("is-valid");
//     }

//   }

//   else {

//     console.log('the website link is invalid')

//     bodyShadow();
//     function bodyShadow() {
//       var element = document.getElementById('brightness');
//       element.classList.add("brightness-alert");
//     }

//     InputShadow();
//     function InputShadow() {
//       var input_element = document.getElementById('BookmarkWebsite');
//       input_element.classList.add("brightness-input");
//       input_element.classList.add("is-invalid");
//     }

//     dataShadow();
//     function dataShadow() {
//       var data = document.getElementById('table-data');
//       data.classList.add("brightness-data");
//     }

//     //Alert Message 
//     square = `  <div class="container bg-white alert-site">
//     <div class=" m-4 pt-5 text-dark">
//       <div class="row p-1 gap-2 circles position-absolute">
//         <div class="circle_1"></div>
//         <div class="circle_2"></div>
//         <div class="circle_3"></div>
//       </div>

//       <div class="position-absolute close-sign">
//         <button onclick= "closebtn()" class="btn-alert"><i class="fa-solid fa-xmark fa-2xl"></i></button>
//       </div>
//       <div>
//         <h3 class="bree-serif-regular">Site Name or Url is not valid, Please follow the rules below :</h3>
//         <div class="pt-sans-caption lh-lg mt-4"><i class="fa-regular fa-circle-right p-2"></i>Site name must contain at
//           least 3 characters</div>
//         <div class="lh-lg pt-sans-caption"><i class="fa-regular fa-circle-right p-2"></i>Site URL must be a valid one</div>
//       </div>
//     </div>
//   </div>`


//     document.getElementById('alert-msg').innerHTML = square;
//     localStorage.setItem('websiteList', JSON.stringify(websiteList))
//     display();
//   }


//   if (isValidNameRegex(BookmarkName.value)) {
//     console.log('the website name is valid')
//     validRegexname();

//     function validRegexname() {
//       var validname = document.getElementById('BookmarkName');
//       validname.classList.add("is-valid");
//     }
//   }
//   else {
//     console.log('the website name is invalid')
//     InputNameShadow();

//     function InputNameShadow() {
//       var input_error = document.getElementById('BookmarkName');
//       input_error.classList.add("is-invalid");
//     }
//   }

//   if (isValidNameRegex(BookmarkName.value) && isValidURLRegex(BookmarkWebsite.value)) {
//     websiteList.push(bookmarksite)
//     localStorage.setItem('websiteList', JSON.stringify(websiteList))
//     display();
//   }
// }


// // close button
// function closebtn() {
//   var x = '';
//   document.getElementById('alert-msg').innerHTML = x;

//   bodyShadow();
//   function bodyShadow() {
//     var element = document.getElementById('brightness');
//     element.classList.remove("brightness-alert");
//   }

//   dataShadow();

//   function dataShadow() {
//     var data = document.getElementById('table-data');
//     data.classList.remove("brightness-data");
//   }

// }

// // JSON.PARSE STRING  JSON
// // JSON>STRINGIFY JSON - STRING

// // display
// function display() {
//   var cartoona = '';

//   for (var i = 0; i < websiteList.length; i++) {

//     cartoona += `
//     <tr>
//       <td class="text-black pt-sans-caption-regular">${i + 1}</td>
//       <td class="text-black text-capitalize pt-sans-caption-regular ">${websiteList[i].bookmarkName}</td>
      
//       <td class="text-black"><a href="https://${websiteList[i].bookmarkWebsite}" target="_blank"><button onClick="Visit (${i})" class="btn btn-visit text-capitalize"><i
//       class="fa-solid fa-eye me-2"></i>visit </button></a></td>
//       <td class="text-black"><button onClick="deleteProduct(${i})" class="btn btn-danger text-capitalize"> <i class="fa-solid fa-trash me-2"></i> delete</td>
//     </tr> `
//   }

//   document.getElementById('table-data').innerHTML = cartoona;
//   console.log(websiteList)
// }


// // Delete
// function deleteProduct(index) {

//   const swalWithBootstrapButtons = Swal.mixin({
//     customClass: {
//       confirmButton: "btn btn-success",
//       cancelButton: "btn btn-danger"
//     },
//     buttonsStyling: false
//   });
//   swalWithBootstrapButtons.fire({
//     title: "Are you sure?",
//     text: "You won't be able to revert this!",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonText: "Yes, delete it!",
//     cancelButtonText: "No, cancel!",
//     reverseButtons: true
//   }).then((result) => {
//     if (result.isConfirmed) {

//       console.log("the file has been deleted!");

//       swalWithBootstrapButtons.fire({
//         title: "Deleted!",
//         text: "Your file has been deleted.",
//         icon: "success"
//       });


//       //Updating the localstorage and array with new values
//       websiteList.splice(index, 1)
//       localStorage.setItem('websiteList', JSON.stringify(websiteList))
//       display()

//     } else if (

//       result.dismiss === Swal.DismissReason.cancel
//     ) {
//       console.log("the file hasn't been deleted!");
//       swalWithBootstrapButtons.fire({
//         title: "Cancelled",
//         text: "Your imaginary file is safe :)",
//         icon: "error"
//       });
//     }
//   });

//   // websiteList.splice(index, 1)
//   // localStorage.setItem('websiteList', JSON.stringify(websiteList))
//   // display()
// }

// // Visit
// function Visit(index) {
//   console.log('the website is valid')
// }


// window.onload = function () {
//   if (window.navigator.onLine) {
//     online();
//   }
//   else {
//     offline();
//   }
// }

// window.addEventListener("online", function () {
//   online();
// });
// window.addEventListener("offline", function () {
//   offline();
// });

// reload.onclick = function () {
//   window.location.reload();
// }

// //احنا هنعمل دالتين واحدة للاونلاين وواحدة للاوفلاين

// function online() {
//   title.innerHTML = 'Online now';
//   title.style.color = 'green';
//   circle.classList.add('circle-online');
//   circle.classList.remove('circle-offline');


// }
// function offline() {
//   title.innerHTML = 'Offline now';
//   title.style.color = '#666';
//   circle.classList.add('circle-offline');
//   circle.classList.remove('circle-online');
// }



