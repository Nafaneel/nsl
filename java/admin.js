

const queryString = window.location.search;
console.log(queryString);
strNew = queryString.replace("?user=", "");
if (queryString == "") {
  window.location.replace('error.html');
}



if (strNew == "Nafaneel") {
  //document.getElementById("found").innerHTML = "FOUND";
  document.getElementById("text").innerHTML = "Hello, " + strNew;
} else if (strNew == "Andrew_mc") {
  document.getElementById("text").innerHTML = "Hello, " + strNew;
} else if (strNew == "Nafaneel2") {
  document.getElementById("text").innerHTML = "Hello, " + strNew;
} else if (strNew == "Zoey") {
  document.getElementById("text").innerHTML = "Hello, " + strNew;
}
else {
  window.location.replace('error.html');
}

function pushed(name) {
  const element = document.getElementById(name)
  element.classList.add('pushed');
}


function ns() {
  //window.location.replace('https://ns.nafaneel.repl.co/programs/ns.html?user='+strNew);
  pushed("nsB");
  window.location.replace('programs/ns.html?user=' + strNew);
}
function slt() {
  pushed("sltB");
  window.location.replace('programs/slt.html?user=' + strNew);
}
function copycat() {
  pushed("phB");
  window.location.replace('programs/c0pycat.html?user=' + strNew);
}
function copycat_lib() {
  pushed("ph2B");
  window.location.replace('programs/c0pycat_library.html?user=' + strNew);
}
function festive() {
  window.location.replace('programs/festive.html?user=' + strNew);
}
function tokensPage() {
  window.location.replace('user/profile.html?user=' + strNew)
}
function nexusSwitch() {
  window.location.replace('programs/switch_admin.html?user=' + strNew)
}
function tokenAdmin() {
  window.location.replace('admin/admin_tokens.html?user=' + strNew)
}
function bye() {
  window.location.replace('programs/bye.html?user=' + strNew);
}