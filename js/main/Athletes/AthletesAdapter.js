class AthletesAdapter {
  // Get the url endpoint for athletes
  static url() {
    return 'http://localhost:3000/athletes/';
  }

  // GET all athletes
  static async getAthletes() {
    const res = await fetch(this.url());
    return await res.json();
  }

  // GET one athlete
  static async getOneAthlete(id) {
    const res = await fetch(this.url() + id);
    return await res.json();
  }

  // set headers for requests
  static getHeaders() {
    return {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    };
  }

  static fetchConfig(httpVerb, bodyObject) {
    return {
      method: httpVerb,
      headers: this.getHeaders(),
      body: JSON.stringify(bodyObject)
    };
  }
}
