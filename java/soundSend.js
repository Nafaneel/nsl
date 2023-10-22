var clicks = 0;
document.getElementById("welcome").innerHTML = "Hello, " + strNew;

const reloadUser = window.location.search;
strNew2 = reloadUser.replace("?user=", "");

function sendMessage(testSend) {

  const request = new XMLHttpRequest();
  request.open("POST", "https://discord.com/api/webhooks/1062394405690036236/zcrdBWSJt3wpCsNbn2BGaEIrFL_ggOVTrWGa39CUz41CEXEkJeW4OkbIuo8pQYOKcesk");

  request.setRequestHeader('Content-type', 'application/json');

  const params = {
    username: "NexusSnarl - Webhook POST",
    content: "++" + testSend,
  }

  request.send(JSON.stringify(params));
  clicks += 1;
  alert("Request For Sound Sent! \n- This Has Deducted 1 Token from Your Balance. \n- Used Tokens: " + clicks)
  document.getElementById("tokensUsed").innerHTML = "<i>Tokens Used: " + clicks + "</i>";

  document.getElementById('getTokens').src = "https://data.nafaneel.uk/tokens/tokensGet.html?user=" + strNew2;
}

getTokens();
const queryString = window.location.search;
console.log(queryString);
strNew = queryString.replace("?user=", "");
if (queryString == "") {
  window.location.replace('error.html');
}


function startSend() {
  const queryString = window.location.search;
  console.log(queryString);
  strNew = queryString.replace("?user=", "");
  //alert("hello")
  var e = document.getElementById("sounds");
  var value = e.value;
  var text = e.options[e.selectedIndex].text;
  var delay = document.getElementById("testTest").value;
  //alert("~"+text+" "+delay)
  sendMessage("/webActivate " + strNew + " " + text + " " + delay)

  //sendDis()
  getTokens()
}

function getTokens() {
  const queryString = window.location.search;
  console.log(queryString);
  strNew = queryString.replace("?user=", "");

  fileVar = "../tokens/" + strNew + ".txt"

  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", fileVar, false);
  rawFile.onreadystatechange = function() {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        var allText = rawFile.responseText;
        responseText = strNew + " You have " + allText + " Tokens remaining!";
        //alert(responseText);

        document.getElementById("tokensRemainingButton").innerHTML = "Tokens Remaining: " + allText;
        return allText;
      }
    }
  }
  rawFile.send(null);
}
