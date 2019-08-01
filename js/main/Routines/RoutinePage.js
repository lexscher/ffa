class RoutinePage {
  constructor() {
    // Get the single routine page container
    this.singleRoutineShowPageContainer = document.querySelector(
      '.routine-show-page-container'
    );
    // Create our routine page divs (routine name w/ controller && workouts)
    this.routinePage = document.createElement('div');
    // Append page to the conainer
    this.singleRoutineShowPageContainer.append(this.routinePage);
    // give the page a class name
    this.routinePage.classList.add('routine-page');
  }

  changeInnerHTML(routine) {
    // make data into variables
    let { id } = routine.data;
    let { athlete, name, athlete_id, workouts } = routine.data.attributes;
    // debugger;
    // set the routine show card
    // debugger;
    this.routinePage.innerHTML = `
    <div class='routine-show-card' data-show-routine-id="${id}" >
      <h2>${name}</h2>
      <div class='routine-show-workout-list-container workout-cards-container'></div>
      <p data-show-routine-athlete-id="${athlete_id}">Curator: ${athlete}</p>
    </div>
    `;
    // iterate through the workouts
    for (const workout of workouts) {
      // debugger;
      // make data into variables
      let { id, name, exercises } = workout;
      // grab the workout cards container
      let workoutCardsContainer = document.querySelector(
        '.workout-cards-container'
      );
      // create a workout card
      let workoutCard = document.createElement('div');
      // append workout card to the container
      workoutCardsContainer.append(workoutCard);
      // add class name
      workoutCard.classList.add('workout-card');
      // add dataset
      workoutCard.dataset.workoutCard = id;
      // give inner HTML
      workoutCard.innerHTML = `
      <h2 class="workout-name">${name}</h2>
      <ul class='workout-exercise-list'></ul>
      `;
      // loop through your exercises
      for (const exercise of exercises) {
        // make data into variables
        let { id, name, reps, sets, workout_id } = exercise;

        // grab the ul that will hold our exercises
        let exerciseList = document.querySelector('.workout-exercise-list');

        // create our exercise list item
        let exerciseListItem = document.createElement('li');

        // append card to the list
        exerciseList.append(exerciseListItem);

        // give it a class name
        exerciseListItem.classList.add('exercise-list-item');

        // give it a datasets
        exerciseListItem.dataset.exerciseNumber = id;
        exerciseListItem.dataset.workoutId = workout_id;

        // give inner html with our data
        exerciseListItem.innerHTML = `
          <div class="exercise-card" data-exercise-card-id=${id}>
            <h4 class="exercise-title">${name}</h4>
            <p class="exercise-reps">${reps} Reps </p>
            <p class="exercise-sets">${sets} Sets </p>
          </div>
        `;
      }
    }
  }
}
