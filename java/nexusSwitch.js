const queryString = window.location.search;
console.log(queryString);
strNew = queryString.replace("?user=", "");

nameGET();
function nameGET() {
  const queryString = window.location.search;
  console.log(queryString);
  strNew = queryString.replace("?user=", "");
  if (queryString == "") {
    window.location.replace('error.html');
  }
  document.getElementById("welcome").innerHTML = "Hello, " + strNew;
}

function sendRaw(command) {
  const request = new XMLHttpRequest();
  request.open("POST", "https://discord.com/api/webhooks/1062394405690036236/zcrdBWSJt3wpCsNbn2BGaEIrFL_ggOVTrWGa39CUz41CEXEkJeW4OkbIuo8pQYOKcesk");

  request.setRequestHeader('Content-type', 'application/json');

  const params = {
    username: "NexusSnarl - Webhook",
    content: "++" + command,
  }

  request.send(JSON.stringify(params));
  alert("Request Sent! \nThis will take a couple of seconds to load the selected programs!")
}

function timeStart() {
  sendRaw("~~timeSpeak")
}
function timeStop() {
  sendRaw("~~timeSpeak_close")
}

function ns() {
  sendRaw("~~ns")
}

function randStart() {
  sendRaw("~~randomizer2")
}

function seqStart() {
  sendRaw("~~sequencer")
}

function endAll() {
  sendRaw("~~close")
}

function seqStop() {
  sendRaw("~~seqStop")
}

function seqView() {
  window.location.replace('sequencer/sequencer_view.html?user=' + strNew);
}
function seqAdmin() {
  window.location.replace('sequencer/sequencer_edit.html?user=' + strNew);
}