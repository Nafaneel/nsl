
function backClick() {
  const queryString = window.location.search;
  strNew = queryString.replace("?user=", "");
  
  formatBack = '../options.html?user=' + strNew;

  const element = document.getElementById('exitButton')
  element.classList.add('explodeExit');
  
  window.location.replace('../options.html?user=' + strNew);
}
function backClick2() {
  const queryString = window.location.search;
  strNew = queryString.replace("?user=", "");
  formatBack = '../options.html?user=' + strNew;
  window.location.replace('../../options.html?user=' + strNew);
}

