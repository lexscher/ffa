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
    currentPage.innerText = pageName;
  }
}
