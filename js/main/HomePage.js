class HomePage {
  constructor() {
    // Set current page
    this.currentPage = document.querySelector('.home');

    // Create controller for routines (This will hold the filter and "Create Routine" button)
    this.routinesControllerContainer = document.createElement('div');

    // Create the container for the list of routines
    this.routineListContainer = document.createElement('div');

    // Append them to our main div
    this.currentPage.append(this.routinesControllerContainer);
    this.currentPage.append(this.routineListContainer);

    // add class names to the divs
    this.routinesControllerContainer.classList.add(
      'routines-controller-container'
    );
    this.routineListContainer.classList.add('routine-list-container');

    // Add the inner HTML
    // this.routinesControllerContainer.innerHTML = '<p>Filter</p>';
    this.routinesController = new RoutinesController();
    this.routineListContainer.innerHTML = '<p>Routines List</p>';
  }
}
