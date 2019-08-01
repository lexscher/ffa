class Routine {
  constructor(routineData) {
    // grab the list from the dom
    this.id = routineData.id;
    this.name = routineData.attributes.name;
    this.athleteId = routineData.attributes.athlete_id;
    this.athleteName = routineData.attributes.athlete;
  }
}
