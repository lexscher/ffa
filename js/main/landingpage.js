class LandingPage {
  constructor() {
    this.state = 'login';
  }

  toggleLandingPageState() {
    if (this.state === 'login') {
      this.state = 'register'
    } else {
      this.state = 'login'
    }
  }
}
