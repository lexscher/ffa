class LandingPage {
  constructor() {
    // Grab main div
    this.main = document.querySelector('#main');

    // set the state
    this.state = 'login-page';

    // create divs to login or register
    this.loginPage = document.createElement('div');
    this.registrationPage = document.createElement('div');

    // append both divs to #main
    this.main.append(this.loginPage);
    this.main.append(this.registrationPage);

    // add classes to these pages
    this.loginPage.classList.add('login-page');
    this.registrationPage.classList.add('registration-page');

    this.logInForm = new LoginForm()
    console.log(this.logInForm)
    this.registrationForm = new RegistrationForm()
    console.log(this.registrationForm)
  }

  // toggle our state
  toggleLandingPageState(pageName) {
    // if the person is trying to log in
    if (pageName.toLowerCase() === 'login-page') {
      this.state = 'login-page';
    } else if (pageName.toLowerCase() === 'registration-page') {
      this.state = 'registration-page';
    }
    // render the appropriate page
    this.renderPage(this.state);
  }

  // hide all the pages
  hideAllLandingPages() {
    // add the hidden classes to both
    this.loginPage.classList.add('div--hidden');
    this.registrationPage.classList.add('div--hidden');
  }

  renderPage(pageName) {
    this.hideAllLandingPages();
    let currentPage = document.querySelector(`.${pageName}`);
    currentPage.classList.remove('div--hidden');
    
  }
}

class LoginForm {
  constructor() {
    this.currentPage = document.querySelector('.login-page');
    this.loginFormContainer = document.createElement('div');
    this.currentPage.append(this.loginFormContainer);
    this.loginFormContainer.classList.add('login-form-container');
    this.loginFormContainer.innerHTML = 
    `
    <form class="login-form" method="get">
      Username: <input type="text" name="username"><br>
      Password: <input type="text" name="password"><br>
      <input type="submit" value="Submit">
    </form>
    `
    this.loginForm = document.querySelector('.login-form')
    this.loginForm.addEventListener('submit', event => {
      event.preventDefault()
      alert('Logging in')
    })
  
  }
}

class RegistrationForm {
  constructor() {
  this.currentPage = document.querySelector('.registration-page');
  this.registrationFormContainer = document.createElement('div');
  this.currentPage.append(this.registrationFormContainer);
  this.registrationFormContainer.classList.add('registration-form-container');
  this.registrationFormContainer.innerHTML = 
  `
  <form class="registration-form" method="get">
    Username: <input type="text" name="username"><br>
    Password: <input type="text" name="password"><br>
    Email: <input type="text" name="Email"><br>
    Password: <input type="text" name="Email"><br>
    Confirm Password: <input type="text" name="Email"><br>
    <input type="submit" value="Submit">
  </form>
  `
  this.registrationForm = document.querySelector('.registration-form')
  this.registrationForm.addEventListener('submit', event => {
    event.preventDefault()
    alert('registering now')
  })
  }
}