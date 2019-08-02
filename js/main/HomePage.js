class HomePage {
  constructor() {
    // Set current page
    this.currentPage = document.querySelector('.home');

    // Set state to swap from routines list to single routine ('index', or 'show')
    this.state = 'index';

    // Create controller for routines (This will hold the filter and "Create Routine" button)
    this.routinesControllerContainer = document.createElement('div');

    // Create the container for the list of routines
    this.routineListContainer = document.createElement('div');

    // Create the container for One Routine's Information
    this.routineShowPageContainer = document.createElement('div');

    // Append them to our main div
    this.currentPage.append(this.routinesControllerContainer);
    this.currentPage.append(this.routineListContainer);
    this.currentPage.append(this.routineShowPageContainer);

    // add class names to the divs
    this.routinesControllerContainer.classList.add(
      'routines-controller-container'
    );
    this.routineListContainer.classList.add('routines-list-container');
    this.routineShowPageContainer.classList.add('routine-show-page-container');

    // Many Routines
    this.routinesController = new RoutinesController();
    this.routinesList = new RoutinesList();
    // Single Routine
    this.routineController = new RoutineController();
    this.routinePage = new RoutinePage();
  }

  // empty the container
  emptyRoutineContainer() {
    this.routinesControllerContainer.classList.add('div--hidden')
    this.routineListContainer.classList.add('div--hidden');
    this.routineShowPageContainer.classList.add('div--hidden');
  }

  swapState(state, data) {
    // change the state of the home page
    this.state = state;
    // Reset the container
    // debugger;
    this.emptyRoutineContainer();

    // If the state of the home page is for the index
    if (this.state === 'index') {
      // show the index page
      this.routinesControllerContainer.classList.remove('div--hidden')
      this.routineListContainer.classList.remove('div--hidden');
    } else if (this.state === 'show') {
      // Else
      // Repopulate the show page with the current data
      this.routinePage.changeInnerHTML(data);
      // Show the 'show' page
    this.routineShowPageContainer.classList.remove('div--hidden');
    }
  }
}
