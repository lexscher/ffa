class RoutinesController {
  constructor() {
    // Grab the container for this routines controller
    this.routinesControllerContainer = document.querySelector(
      '.routines-controller-container'
    );

    // create the elements we need (3 filter buttons, 1 create routine button)
    this.removeFiltersButton = document.createElement('button');
    this.showFriendsRoutinesButton = document.createElement('button');
    this.showUserRoutinesButton = document.createElement('button');
    this.createNewRoutineButton = document.createElement('button');

    // Append them to our routines controller container
    this.routinesControllerContainer.append(this.removeFiltersButton);
    this.routinesControllerContainer.append(this.showFriendsRoutinesButton);
    this.routinesControllerContainer.append(this.showUserRoutinesButton);
    this.routinesControllerContainer.append(this.createNewRoutineButton);

    // Give them class names
    this.removeFiltersButton.classList.add('btn__remove-filters');
    this.showFriendsRoutinesButton.classList.add(
      'btn__routines-filter__friends-routines'
    );
    this.showUserRoutinesButton.classList.add(
      'btn__routines-filter__user-routines'
    );
    this.createNewRoutineButton.classList.add('btn__create-new-routine');

    // Give them some inner text
    this.removeFiltersButton.innerText = 'All';
    this.showFriendsRoutinesButton.innerText = "Friend's Routines";
    this.showUserRoutinesButton.innerText = 'My Routines';
    this.createNewRoutineButton.innerText = 'Create a new Routine';
  }
}
