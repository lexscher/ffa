class RoutinesAdapter {
  // Get the url endpoint for routines
  static url() {
    return 'http://localhost:3000/routines/';
  }

  // GET all routines
  static async getRoutines() {
    const res = await fetch(this.url());
    return await res.json();
  }

  // GET one routine
  static async getOneRoutine(id) {
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
