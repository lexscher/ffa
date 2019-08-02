class RoutineController {
  constructor() {
    // Get the single routine page
    this.singleRoutineShowPageContainer = document.querySelector(
      '.routine-show-page-container'
    );
    // Create the controller
    this.routineController = document.createElement('div');
    // append to the container
    this.singleRoutineShowPageContainer.append(this.routineController);
    // Give a class name
    this.routineController.classList.add('routine-controller');

    // Inner HTML for testing
    this.routineController.innerText =
      'Routine Controller Edit & Delete button';
  }
}
