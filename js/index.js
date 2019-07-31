console.log('running');
// grab the body
let body = document.querySelector('body');
// User log in state
let userLoggedIn = true;
// Navigation bar
let navigationBar;
// main body
let main;

// Make a navigation bar based on the user log in state
// If user is logged in
if (userLoggedIn) {
  // show logged in nav and main body
  navigationBar = new LoggedInNav();
  main = new App();
} else {
  navigationBar = new LandingPageNav();
  main = new LandingPage();
}

document.addEventListener('DOMContentLoaded', event => {
  navigationBar.imHere();
  // if we are logged in, render the nav bar buttons and run app
  if (userLoggedIn) {
    navigationBar.renderNavBarButtons();
    main.toggleAppState('home');
  } else {
    // ELSE render our login/register nav, and show the landing page
    navigationBar.logInOrRegister();
  }
  // add event listenrs
  navClickEventListener();
});

function navClickEventListener() {
  // Delegated Event Listenrs
  body.addEventListener('click', event => {
    // if our target is the home button
    if (event.target === navigationBar.homeButton) {
      let appState = event.target.innerText;
      main.toggleAppState(appState);
    } else if (event.target === navigationBar.profileButton) {
      let appState = event.target.innerText;
      main.toggleAppState(appState);
    } else if (event.target === navigationBar.athleteButton) {
      let appState = event.target.innerText;
      main.toggleAppState(appState);
    }
  });
}
