class AthletesPage {
  constructor() {
    // Set current page
    this.currentPage = document.querySelector('.athletes');
    // Create controller for athletes (This will hold the filter and "Create Routine" button)
    this.athletesListContainer = document.createElement('div');
    // Create the container for the list of athletes
    this.athletes = document.createElement('div');
    // Append them to our main div
    this.currentPage.append(this.athletesListContainer);
    this.athletesListContainer.classList.add('athletes-list-container')
    this.currentPage.append(this.athletes);
    // Add the inner HTML
    // this.athletesListContainer.innerHTML = '<p>Athletes List Container</p>';
    this.athletes.innerHTML = '<p>Message Box</p>';
    // athleteslistfilter here
    this.athletesList = new AthletesList()
    this.athletesFilter = new AthletesListFilter()
  }
}

