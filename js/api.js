async function getAllCharacters(callback) {
  awaitfetch(`${API_URL}/character`)
      .then((res) => res.json())
      .then((json) => callback(json))
      .catch((err) => console.log(err));
  }
  