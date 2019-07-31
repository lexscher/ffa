class RoutinesList {
  constructor() {
    // Grab the container for the routines list
    this.routinesListContainer = document.querySelector(
      '.routines-list-container'
    );
    // Create our list of routines
    this.routinesList = document.createElement('ul');

    // Append list to the container
    this.routinesListContainer.append(this.routinesList);

    // add class names
    this.routinesList.classList.add('routines-list');

    RoutinesAdapter.getRoutines()
      .then(this.slapRoutinesOnDom.bind(this))
      .catch(err => console.log(err));
    // Add content
    // this.routinesList.innerHTML = `
    // <li>routine 1</li>
    // <li>routine 2</li>
    // <li>routine 3</li>
    // `;
  }

  slapRoutinesOnDom = routines => {
    routines.data.forEach(this.slapOneRoutineOnDom);
  };

  slapOneRoutineOnDom = routine => {
    console.log(routine);
  };
}
