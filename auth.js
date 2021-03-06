// console.log("auth.js loaded");
var pword = "coffee";

function setCookie(cname, cvalue, exdays) {
  // console.log("Setting cookie " + cname + " to " + cvalue + " for " + exdays + " days.");
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  // document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  document.cookie = cname + "=" + cvalue + ";" + expires + ";SameSite=None";
}

function getCookie (cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie (cname) {
  var cookieVal = getCookie(cname);
  if (cookieVal != "") {
    return 0;
  } else {
    return 1;
  }
}

function setAuthState (newState) {
  // document.cookie = "authState=" + newState + ";";
  setCookie ("authState", newState, 3);
}

function toggleAuthState () {
  if (!checkCookie ("authState")) return false;
  var temp = getCookie ("authState");
  if (temp = "false") {
    // document.cookie = "authState=true;";
    setAuthState (true);
  } else {
    // document.cookie = "authState=false;";
    setAuthState (false);
  }
}

function getAuthState () {
  if (!checkCookie ("authState")) return false;
  var temp = getCookie ("authState");
  if (temp = "true") {
    return true;
  } else {
    return false;
  }
}

function checkPWord (userEntry) {
  // console.log("checking " + userEntry + " against " + pword);
  if (userEntry.localeCompare(pword)==0) {
    console.log("password correct");
    return true;
  } else {
    console.log("password incorrect");
    return false;
  }
}

// run on password page

// BUG
// Submitting the correct password does not change page
// Regardless of authState cookie state, user can enter gated page after returning to home and trying again

function authCheck (destURL, userEntry) {
  if (!destURL) destURL = "index.html";
  // console.log(destURL + " " + userEntry);
  if (checkCookie("authState") == "false" || checkCookie("authState") == 0) {
    if (userEntry != "") {
      if (checkPWord (userEntry)) {
        // redirect to destURL
        console.log("password correct");
        setCookie ("authState", "true", 1);
        window.location.href = destURL;
        return true;
      } else {
        console.log("password false");
        return false;
      }
    } else {
      console.log("password blank");
      return false;
    }
  } else if (checkCookie("authState") == "true" || checkCookie("authState") == 1) {
    window.location.href = destURL;
    // return true;
    return true;
  } else {
    console.log("something went wrong; authstate=" + checkCookie("authState"));
    return false;
    // on page, clear form entry and display text "Password Incorrect"
  }
}

// run on gate page

function authGate (destURL) {
  console.log("Auth state="+getCookie("authState")+"; Dest URL=" + destURL);
  if (!destURL) destURL = "index.html";
  if (checkCookie("authState") == "true" || checkCookie("authState") == 1) {
      console.log("redirecting");
      window.location.href = destURL;
  } else {
    // redirect to password page
    setCookie ("authState", "false", 1);
    setCookie ("destURL", destURL, 1);
    window.location.href = "password.html";
  }
}
