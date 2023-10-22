const queryString = window.location.search;

  strNew = queryString.replace("?user=", "");

  if(queryString=="") {
    window.location.replace('error.html');
  }

