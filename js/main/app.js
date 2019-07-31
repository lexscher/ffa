// This controlls the main div when we are logged in, else we'll be using the landing page
class App {
  constructor() {
    // Grab main div
    this.main = document.querySelector('#main');

    // make default state, home
    this.state = 'home';

    // create elements, we'll hide them immediately
    this.home = document.createElement('div');
    this.profile = document.createElement('div');
    this.athletes = document.createElement('div');

    // append elements to the main div
    this.main.append(this.home);
    this.main.append(this.profile);
    this.main.append(this.athletes);

    // add class lists
    this.home.classList.add('home');
    this.profile.classList.add('profile');
    this.athletes.classList.add('athletes');

    // Create our pages
    this.homePage = new HomePage()
    this.athletesPage = new AthletesPage()
    this.profilePage = new ProfilePage()
  }

  // toggle for the state of the app
  // when we 'click' on a nav button, it will pass the value to this method
  toggleAppState(pageName) {
    // switch statement to get the state
    // debugger;
    switch (pageName.toLowerCase()) {
      case 'home':
        this.state = 'home';
        break;
      case 'profile':
        this.state = 'profile';
        break;
      case 'athletes':
        this.state = 'athletes';
        break;
      case 'logout':
        this.state = 'logout';
        break;

      default:
        'home';
        break;
    }
    // call the render page function on the state
    this.renderPage(this.state);
  }

  // This will hide All the children, meant to be used every time we toggle
  hideMainDivChildren() {
    this.home.classList.add('div--hidden');
    this.profile.classList.add('div--hidden');
    this.athletes.classList.add('div--hidden');
  }

  // Slap current page on the dom, while removing the other pages from the dom
  renderPage(pageName) {
    console.log(pageName);
    this.hideMainDivChildren();
    let currentPage = document.querySelector(`.${pageName}`);
    currentPage.classList.remove('div--hidden');
    // currentPage.innerText = pageName;
    if (currentPage === 'home') {
      // use the Home Page
      let homePage = new HomePage(currentPage);
    } else if (currentPage === 'athletes') {
      // use the athletes page class
    } else if (currentPage === 'profile') {
      // use the profile page class
    } else if (currentPage === 'logout') {
      // delete the current user, switch to landing page class
    }
  }
}
