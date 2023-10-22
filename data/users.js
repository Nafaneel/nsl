
const dict = {
  "Andrew_mc": "nexus123",
  "Nafaneel": "nexusnaf",
  "Nafaneel2": "nexus1",
  "Lewis": "nexus",
  "Adrian": "nexus"
}


function loginPass() {
  var user = document.getElementById("username").value;
  //var user = document.getElementById("username").value;
  let pass = dict[user];
  //alert('LOGIN');
  return pass;
}

function optionPass(user) {

  if (user in dict) {
    var found = "True";
    //alert('OPTIONS');
  } else {
    window.location.replace('../error.html');
  }


}

function userCheck() {
  const queryString = window.location.search;
  userName = queryString.replace("?user=", "");
  if (userName in dict) {
    var found = "True";
  } else {
    window.location.replace('../error.html');
  }
}


