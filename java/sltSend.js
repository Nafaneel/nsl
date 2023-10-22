var clicks = 0;
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
  alert("Request For Sound Sent! \n- This Has Deducted 1 Token from Your Balance. \n- Used Tokens: "+clicks)
  document.getElementById("tokensUsed").innerHTML = "Tokens Used: "+clicks;
  document.getElementById('getTokens').src = document.getElementById('getTokens').src
}
  




getTokens();
function checkLogin() {
  const queryString = window.location.search;
  console.log(queryString);
  strNew = queryString.replace("?user=", "");
  if(queryString=="") {
    window.location.replace('error.html');
  } else if(queryString=="Andrew_mc") {
    alert("You do not have access to this site just yet!");
    window.location.replace('options.html?user='+strNew);
  } 
  document.getElementById("welcome").innerHTML = "Hello, "+strNew;
}
checkLogin();
function test() {
  
  var e = document.getElementById("sounds");
  var value = e.value;
  var text = e.options[e.selectedIndex].text;
  var delay = document.getElementById("testTest").value;
  //alert("~"+text+" "+delay)
  sendMessage("/webRemoval " + strNew +" "+ text +" "+ delay)
  //sendDis()
  getTokens();
}
  
function getTokens() {
  const queryString = window.location.search;
  console.log(queryString);
  strNew = queryString.replace("?user=", "");

  fileVar = "../tokens/"+strNew+".txt"
  
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", fileVar, false);
  rawFile.onreadystatechange = function ()
  {
      if(rawFile.readyState === 4)
      {
          if(rawFile.status === 200 || rawFile.status == 0)
          {
              var allText = rawFile.responseText;
              responseText = strNew +" You have "+allText+" Tokens remaining!";
              //alert(responseText);
              
              document.getElementById("tokensRemainingButton").innerHTML = "Tokens Remaining: "+allText;
            return allText;
          }
      }
  }
  rawFile.send(null);
}  
