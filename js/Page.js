class Page {
  constructor() {
    /* ------------ NAV ---------- */
    // Grab the main nav
    this.nav = document.querySelector('#nav-bar');

    // Create the two nav divs
    this.landingPageNav = document.createElement('div');
    this.appPageNav = document.createElement('div');

    // append them to the nav bar
    this.nav.append(this.landingPageNav);
    this.nav.append(this.appPageNav);

    // give them class names
    this.landingPageNav.id = 'landing-page-nav-container';
    this.appPageNav.id = 'app-page-nav-container';
    /* ------------ MAIN ---------- */
    // Grab main div
    this.main = document.querySelector('#main');

    // create two main divs
    this.landingPageContainer = document.createElement('div');
    this.appPageContainer = document.createElement('div');

    // Append them to our main div
    this.main.append(this.landingPageContainer);
    this.main.append(this.appPageContainer);

    // give them class names
    this.landingPageContainer.id = 'landing-page-container';
    this.appPageContainer.id = 'app-page-container';

    /*--------------------------------*/
    // set the state to either 'landing' or 'app'
    this.state = 'landing';

    // Create the nav bars (landing page, and app)
    this.nav = {
      landing: new LandingPageNav(),
      app: new LoggedInNav()
    };
    // Create the main pages (landing page, and app)
    this.main = {
      landing: new LandingPage(),
      app: new App()
    };

    // Load up the landing app
    this.nav.landing.logInOrRegister();
    this.main.landing.toggleLandingPageState('login-page');
    // Load up the main app
    this.nav.app.renderNavBarButtons();
    this.main.app.toggleAppState('home');
  }
  // Hide all the pages & nav bars
  hideAllPages() {
    this.landingPageNav.classList.add('div--hidden');
    this.appPageNav.classList.add('div--hidden');
    this.landingPageContainer.classList.add('div--hidden');
    this.appPageContainer.classList.add('div--hidden');

    // debugger;
  }

  togglePageState() {
    // hide everyting
    this.hideAllPages();
    // if we're in the landing page state
    if (this.state === 'landing') {
      // hide show the landing page, nav and all
      this.landingPageNav.classList.remove('div--hidden');
      this.landingPageContainer.classList.remove('div--hidden');
    } else if (this.state === 'app') {
      // Else show the app page, nav and all
      this.appPageNav.classList.remove('div--hidden');
      this.appPageContainer.classList.remove('div--hidden');
    }
  }
}
