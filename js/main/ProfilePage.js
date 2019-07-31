class ProfilePage {
  constructor() {
    // Set current page
    this.currentPage = document.querySelector('.profile');
    // Create controller for routines (This will hold the filter and "Create Routine" button)
    this.routinesController = document.createElement('div');
    // Create the container for the list of routines
    this.routines = document.createElement('div');
    // Append them to our main div
    this.currentPage.append(this.routinesController);
    this.currentPage.append(this.routines);
    // Add the inner HTML
    this.routinesController.innerHTML = '<p>Athlete Profile Info Box</p>';
    this.routines.innerHTML = "<p>Athlete's Routines List Container</p>";
  }
}
