console.log('running');
// grab the body
let body = document.querySelector('body');
// User log in state - now Current User
// let currentUser = null;
let currentUser = {
  id: '3',
  type: 'athlete',
  attributes: {
    name: 'Jimmy Neutron',
    username: 'jim',
    email: 'gotta@blast.com',
    password_digest: 'abc123',
    friends: [
      {
        id: 2,
        name: 'Timmy Turner',
        username: 'tim',
        email: 'I@wish.com',
        password_digest: 'abc123'
      }
    ]
  }
};

// master controller for the nav and main-body
let page;

// // Navigation bar
// let nav;
// // main body
// let main;

// // Make a navigation bar based on the user log in state
// // If user is logged in
// if (currentUser) {
//   // show logged in nav and main body
//   nav = new LoggedInNav();
//   main = new App();
// } else {
//   nav = new LandingPageNav();
//   main = new LandingPage();
// }

document.addEventListener('DOMContentLoaded', event => {
  page = new Page();
  page.togglePageState();
  // add event listenrs
  body.addEventListener('click', event => {
    navClickEventListener(event);
    homeClickEventListener(event);
    athleteClickEventListener(event);
  });
});

// Handle Nav Bar 'click' Event Listeners
function navClickEventListener(event) {
  // landing & app variables
  let [navLanding, mainLanding, navApp, mainApp] = [
    page.nav.landing,
    page.main.landing,
    page.nav.app,
    page.main.app
  ];
  // debugger
  /******** APP NAV EVENT HANDLERS ***********/
  // if our target is the home button
  if (event.target === navApp.homeButton) {
    // Home Button
    // set app state
    let appState = event.target.innerText;
    // toggle the state of our main component
    mainApp.toggleAppState(appState);
    // toggle the state of the home page
    mainApp.homePage.swapState('index', '');
  } else if (event.target === navApp.profileButton) {
    // Profile Button
    let appState = event.target.innerText;
    mainApp.toggleAppState(appState);
  } else if (event.target === navApp.athleteButton) {
    // Athletes Button
    let appState = event.target.innerText;
    mainApp.toggleAppState(appState);
    mainApp.athletesPage.swapState('index', '');
  } else if (event.target === navApp.logOutButton) {
    // set the user to falsey value, null
    currentUser = null;
    // change the state of the page
    page.state = 'landing';
    // trigger the page toggler
    page.togglePageState();
    /******** LANDING NAV EVENT HANDLERS ***********/
  } else if (event.target === navLanding.linkToRegisterButton) {
    // Link to Register Page Button
    // set app state
    let appState = 'registration-page';
    // toggle the state of the landing page
    mainLanding.toggleLandingPageState(appState);
    // change the state of the landing page's nav bar
    navLanding.isLoggingIn = false;
    // call the logInOrRegister
    navLanding.logInOrRegister();
  } else if (event.target === navLanding.linkToLogInButton) {
    // Link to Log In Page Button
    // set app state
    let appState = 'login-page';
    // change the state of the main page
    mainLanding.toggleLandingPageState(appState);
    // change the state of the landing page's nav bar
    navLanding.isLoggingIn = true;
    // call logInOrRegister
    navLanding.logInOrRegister();
  }
}

// Handle Home Page 'click' Event Listenrs
function homeClickEventListener(event) {
  // landing & app variables
  let [navApp, mainApp] = [page.nav.app, page.main.app];
  // if the event.target's class name is 'routine-list-element'
  if (event.target.classList.contains('routine-list-element')) {
    // get the routine's id from the dataset
    let routineId = event.target.dataset['routineId'];
    // fetch that routine
    RoutinesAdapter.getOneRoutine(routineId).then(data => {
      // Use main to get into your home page, and use it's swapState method
      // pass it the 'show' state
      mainApp.homePage.swapState('show', data);
    });

    console.log('yes');
  }
}

function athleteClickEventListener(event) {
  let [navApp, mainApp] = [page.nav.app, page.main.app];
  if (event.target.classList.contains('btn-view-profile')) {
    let athleteId = event.target.dataset.athleteId;
    AthletesAdapter.getOneAthlete(athleteId).then(data => {
      mainApp.athletesPage.swapState('show', data);
    });
  }
}
