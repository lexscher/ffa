// Overall Nav Bar
class Nav {
  constructor() {
    this.navBar = document.querySelector('#nav-bar');
  }

  imHere() {
    console.log("I'm here");
  }
}

// Landing Nav Bar
class LandingPageNav extends Nav {
  constructor(navBar) {
    super(navBar);
    // log in status
    this.isLoggingIn = true;
    // create elements
    this.header = document.createElement('h1');
    this.linkToLogInButton = document.createElement('button');
    this.linkToRegisterButton = document.createElement('button');

    // append elements to nav bar
    this.navBar.append(this.header);
    this.navBar.append(this.linkToLogInButton);
    this.navBar.append(this.linkToRegisterButton);

    // add class names to buttons

    // inner text for elements
    this.header.innerText = 'Fitness For All';
    this.linkToLogInButton.innerText = 'Already got an account? Log In Here!';
    this.linkToRegisterButton.innerText =
      "Don't have an account? Register Here!";

    // give the buttons a value
    this.linkToLogInButton.value = '';
  }

  // hide all buttons
  // hideNavButtons() {
  //   this.linkToRegisterButton.classList.add('btn--hidden');
  //   this.linkToLogInButton.classList.add('btn--hidden');
  // }

  logInOrRegister() {
    // if the user is logging in
    if (this.isLoggingIn) {
      // display the log in form
      console.log(this.navBar);
      // hide the button that that says 'Already got an account? Log In Here!'
      this.linkToLogInButton.classList.add('btn--hidden');
      this.linkToRegisterButton.classList.remove('btn--hidden');
    } else {
      console.log(this.navBar);
      // display the Registration form
      console.log('Register Here');
      this.linkToRegisterButton.classList.add('btn--hidden');
      this.linkToLogInButton.classList.remove('btn--hidden');
    }
  }
}

// Logged In Nav Bar
class LoggedInNav extends Nav {
  constructor(navBar) {
    super(navBar);
    // create button elements
    this.homeButton = document.createElement('button');
    this.profileButton = document.createElement('button');
    this.athleteButton = document.createElement('button');
    this.loginButton = document.createElement('button');
    // append elements to nav bar
    this.navBar.append(this.athleteButton);
    this.navBar.append(this.homeButton);
    this.navBar.append(this.profileButton);
    this.navBar.append(this.loginButton);
  }

  renderNavBarButtons() {
    this.homeButton.classList.add('btn');
    this.homeButton.innerText = 'Home';
    this.profileButton.classList.add('btn');
    this.profileButton.innerText = 'Profile';
    this.athleteButton.classList.add('btn');
    this.athleteButton.innerText = 'Athletes';
    this.loginButton.classList.add('btn');
    this.loginButton.innerText = 'Log Out';
    console.log(this.navBar);
    console.log('render nav bar buttons');
  }
}
