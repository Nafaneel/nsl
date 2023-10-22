function login() {
  document.getElementById("buttonText").innerHTML = "<i><b>FETCHING DATA ⇌</b></i>";
  userName1 = document.getElementById("username").value;
  userPass1 = document.getElementById("password").value;
  if (userPass1 == loginPass()) {
    //fadeInAn
    //const element = document.getElementById('fadeInAn')
    //element.classList.add('fadeIn');
    window.location.replace('options.html?user=' + userName1);
  } else {
    document.getElementById("status").innerHTML = "<b style='color: #bd5a53;'><i>Password or Username Wrong!</i></b>";
  }
}