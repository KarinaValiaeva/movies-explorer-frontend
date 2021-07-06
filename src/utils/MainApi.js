export const BASE_URL = "https://api.movies-explorer.nomoredomains.monster";

const checkResponse = (res) => (res.ok ? res.json() : Promise.reject(res));

export const register = ({ email, password, name }) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name }),
  }).then(checkResponse);
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);
};

export const getUserInfo = () => {
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then(checkResponse);
};

export const updateUserProfile = (name, email) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify({ name: name, email: email }),
  }).then(checkResponse);
};

export const getToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};

export const saveMovie = (movie) => {
  return fetch(`${BASE_URL}/movies`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify({
      country: movie.country || "Нет данных",
      director: movie.director || "Нет данных",
      duration: movie.duration || "Нет данных",
      year: movie.year || "Нет данных",
      description: movie.description || "Нет данных",
      image: movie.image || "Нет данных",
      trailer: movie.trailer || "Нет данных",
      thumbnail: movie.thumbnail || "Нет данных",
      nameRU: movie.nameRU || "Нет данных",
      nameEN: movie.nameEN || "Нет данных",
      movieId: movie.movieId || "Нет данных",
    }),
  }).then(checkResponse);
};

export const getUserMovies = () => {
  return fetch(`${BASE_URL}/movies`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then(checkResponse);
};

export const deleteMovie = (id) => {
  return fetch(`${BASE_URL}/movies/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then(checkResponse);
};
