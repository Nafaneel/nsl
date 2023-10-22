const queryString = window.location.search;
strNew = queryString.replace("?user=", "");
userCheck()
if (queryString == "") {
  window.location.replace('error.html');
} else if (strNew == "Nafaneel") {
  //document.getElementById("found").innerHTML = "FOUND";
  window.location.replace('admin.html?user=' + strNew);

}
function getPerms() {
  fileVar = "../permissions/" + strNew + ".txt"
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", fileVar, false);
  rawFile.onreadystatechange = function() {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        var allText = rawFile.responseText;
        responseText = allText;
        let [ns, slt, ph2] = responseText.split(",");
        if (ns == "True") {
          document.getElementById("nsB").style.visibility = "visible";
        } else {
          document.getElementById("nsB").style.visibility = "hidden";
        }

        if (slt == "True") {
          document.getElementById("sltB").style.visibility = "visible";
        } else {
          document.getElementById("sltB").style.visibility = "hidden";
        }

        if (ph2 == "True") {
          document.getElementById("phB").style.visibility = "visible";
          document.getElementById("ph2B").style.visibility = "visible";
        } else {
          document.getElementById("phB").style.visibility = "hidden";
          document.getElementById("ph2B").style.visibility = "hidden";
        }



        return allText;
      }
    }
  }
  rawFile.send(null);
}
getPerms();

function pushed(name) {
  const element = document.getElementById(name)
  element.classList.add('pushed');
}

function ns() {
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
  window.location.replace('programs/switch.html?user=' + strNew)
}
function bye() {
  window.location.replace('programs/bye.html?user=' + strNew)
}