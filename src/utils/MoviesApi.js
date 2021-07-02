export const BASE_URL = "https://api.nomoreparties.co/beatfilm-movies";

const checkResponse = (res) =>
  res.ok ? res.json() : Promise.reject(res);


export const getMovies = () => {
  return fetch(`${BASE_URL}`, {
    headers: {
      "Content-Type": "application/json",
    },
    
  }).then(checkResponse);
}

