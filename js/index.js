console.log('running');
// grab the body
let body = document.querySelector('body');
// User log in state
let userLoggedIn = true;
// Navigation bar
let nav;
// main body
let main;

// Make a navigation bar based on the user log in state
// If user is logged in
if (userLoggedIn) {
  // show logged in nav and main body
  nav = new LoggedInNav();
  main = new App();
} else {
  nav = new LandingPageNav();
  main = new LandingPage();
}

document.addEventListener('DOMContentLoaded', event => {
  nav.imHere();
  // if we are logged in, render the nav bar buttons and run app
  if (userLoggedIn) {
    nav.renderNavBarButtons();
    main.toggleAppState('home');
  } else {
    // ELSE render our login/register nav, and show the landing page
    nav.logInOrRegister();
    main.toggleLandingPageState('login-page');
  }
  // add event listenrs
  navClickEventListener();
});

function navClickEventListener() {
  // Delegated Event Listenrs
  body.addEventListener('click', event => {
    // if our target is the home button
    // debugger;
    if (event.target === nav.homeButton) {
      // Home Button
      // set app state
      let appState = event.target.innerText;
      // toggle the state of our main component
      main.toggleAppState(appState);
    } else if (event.target === nav.profileButton) {
      // Profile Button
      let appState = event.target.innerText;
      main.toggleAppState(appState);
    } else if (event.target === nav.athleteButton) {
      // Athletes Button
      let appState = event.target.innerText;
      main.toggleAppState(appState);
    } else if (event.target === nav.linkToRegisterButton) {
      // Link to Register Page Button
      // set app state
      let appState = 'registration-page';
      // toggle the state of the landing page
      main.toggleLandingPageState(appState);
      // change the state of the landing page's nav bar
      nav.isLoggingIn = false;
      // call the logInOrRegister
      nav.logInOrRegister();
    } else if (event.target === nav.linkToLogInButton) {
      // Link to Log In Page Button
      // set app state
      let appState = 'login-page';
      // change the state of the main page
      main.toggleLandingPageState(appState);
      // change the state of the landing page's nav bar
      nav.isLoggingIn = true;
      // call logInOrRegister
      nav.logInOrRegister();
    }
  });
}
