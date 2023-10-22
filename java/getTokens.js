const queryString = window.location.search;
strNew = queryString.replace("?user=", "");
document.getElementById('getTokens').src = "https://data.nafaneel.uk/tokens/tokensGet.html?user=" + strNew;
