function getAllCharacters(callback) {
    fetch(`${API_URL}/character`)
      .then((res) => res.json())
      .then((json) => callback(json))
      .catch((err) => console.log(err));
  }
  