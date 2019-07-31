class RoutinesAdapter {
  // Get the url endpoint for routines
  static baseUrl() {
    return 'http://localhost:3000/routines/';
  }

  // set headers for requests
  static getHeaders() {
    return {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
  }

  static fetchConfig(httpVerb, bodyObject) {
    
  }
}
