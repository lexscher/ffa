class AthletesList {
  constructor() {
    // Grab the container for the athletes list
    this.athletesListContainer = document.querySelector(
      '.athletes-list-container'
    );
    // Create our list of routines
    this.athletesList = document.createElement('ul');
    // append list to the container
    this.athletesListContainer.append(this.athletesList);
    // add class names
    this.athletesList.classList.add('athletes-list');

    AthletesAdapter.getAthletes()
      .then(this.slapAthletesOnDom.bind(this))
      .catch(err => console.log(err));
  }

  slapAthletesOnDom = athletes => {
    athletes.data.forEach(this.slapOneAthleteOnDom);
  };

  slapOneAthleteOnDom = athlete => {
    console.log(athlete);
    // Create our list item element for athletes
    this.athletesListItem = document.createElement('li');
    // Append li element to the athletes list container
    this.athletesList.append(this.athletesListItem);
    // add dataset
    this.athletesListItem.dataset.athleteListItem = athlete.id;
    // Add class name
    this.athletesListItem.classList.add('athlete-list-item');
    // Create div container for buttons
    this.athleteActionButtons = document.createElement('div');
    // Append container to the athletes container
    this.athletesListItem.append(this.athleteActionButtons);
    // Add class name
    this.athleteActionButtons.classList.add('athlete-action-buttons');

    // View Profile button creation
    this.buttonViewProfile = document.createElement('button');
    this.athleteActionButtons.append(this.buttonViewProfile);
    this.buttonViewProfile.classList.add('btn-view-profile');
    this.buttonViewProfile.innerText = 'View Profile';
    this.buttonViewProfile.dataset.athleteId = athlete.id;

    // Add Friend button creation
    this.buttonAddFriend = document.createElement('button');
    this.athleteActionButtons.append(this.buttonAddFriend);
    this.buttonAddFriend.classList.add('btn-add-friend');
    this.buttonAddFriend.innerText = 'Add Friend';
    this.buttonAddFriend.dataset.athleteId = athlete.id;

    // Remove Friend button creation
    this.buttonRemoveFriend = document.createElement('button');
    this.athleteActionButtons.append(this.buttonRemoveFriend);
    this.buttonRemoveFriend.classList.add('btn-remove-friend');
    // Add hidden class
    this.buttonRemoveFriend.classList.add('btn--hidden');
    this.buttonRemoveFriend.innerText = 'Remove Friend';
    this.buttonRemoveFriend.dataset.athleteId = athlete.id;

    // Create info card for athletes
    this.athleteInfoCard = document.createElement('div');
    this.athletesListItem.append(this.athleteInfoCard);
    this.athleteInfoCard.classList.add('athlete-info-card');
    this.athleteInfoCard.innerHTML = `
            <p>${athlete.attributes.name}</p>
            <img src="">
        `;
    // console.log(`created ${this.athleteInfoCard}`)
  };

  // toggle for add/remove friend button
  toggleAddOrRemoveFriendsButton() {
    // check each athlete list item
    let listOfAthletes = document.querySelectorAll('.athlete-list-item');
    listOfAthletes.forEach(athleteLi => {
      // grab the id of the athlete via li dataset
      let athleteID = athleteLi.dataset.athleteListItem;
      // grab the buttons
      let addButton = athleteLi.firstChild.querySelector('.btn-add-friend');
      let removeButton = athleteLi.firstChild.querySelector(
        '.btn-remove-friend'
      );

      // if the list item is the logged in user
      if (athleteID === currentUser.id) {
        //  hide 'em
        athleteLi.classList.add('li--hidden');
        // debugger;
      } else {
        // go through the current user's friend list
        let friendsList = currentUser.attributes.friends;
        friendsList.forEach(friend => {
          //    reset the buttons (hide them all)
          if (!addButton.classList.contains('btn--hidden'))
            addButton.classList.add('btn--hidden');
          if (!removeButton.classList.contains('btn--hidden'))
            removeButton.classList.add('btn--hidden');

          // If the current user's friend's id is the same as the athlete
          if (parseInt(athleteID) === friend.id) {
            //  show the remove friend button
            removeButton.classList.remove('btn--hidden');
          } else {
            addButton.classList.remove('btn--hidden');
          }
        });
      }
    });
  }
}
