class AthletesPage {
  constructor() {
    // Set current page
    this.currentPage = document.querySelector('.athletes');
    this.state = 'index';
    // Create controller for athletes (This will hold the filter and "Create Routine" button)
    this.athletesListContainer = document.createElement('div');
    // Create the container for the list of athletes
    this.athletes = document.createElement('div');
    // single athlete show page
    this.athleteShowPageContainer = document.createElement('div');
    this.currentPage.append(this.athleteShowPageContainer);
    this.athleteShowPageContainer.classList.add('athlete-show-page-container')
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
    this.athletePage = new AthletePage()
  }

  emptyAthleteContainer() {
    this.athletesListContainer.classList.add('div--hidden')
    this.athleteShowPageContainer.classList.add('div--hidden')
  }

  swapState(state, data) {
    this.state = state;
    this.emptyAthleteContainer();

    if (this.state === 'index') {
      this.athletesListContainer.classList.remove('div--hidden');
    } else if (this.state === 'show') {
      this.athletePage.changeInnerHTML(data)
      this.athleteShowPageContainer.classList.remove('div--hidden');
    }
  }
}

