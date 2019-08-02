class FriendsAdapter {
  // Get the url endpoint for friends
  static url() {
    return 'http://localhost:3000/friends/';
  }

  // GET all Friends
  static async getFriends() {
    const res = await fetch(this.url());
    return await res.json();
  }

  // GET one friend
  static async getOneFriend(id) {
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
