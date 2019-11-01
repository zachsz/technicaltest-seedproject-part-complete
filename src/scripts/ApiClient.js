class ApiClient {
  getDeals() {
    return fetch("/deals")
      .then(response => response.json())
      .then(data => data);
  }
}

export default ApiClient;
