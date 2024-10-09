import axios from "axios";

export const baseApi = axios.create({
  baseURL: "https://api.themoviedb.org",
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYmE5ZjMwMWUzYjAyNmVmZjhiYjE2OGJkYzlhNWM0NiIsIm5iZiI6MTcyNzk0ODA0Mi4xOTgwMzUsInN1YiI6IjY2ZmU1MGE0ZmEzZTY5ZTBlZjdjN2RiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.obIjOZgfdw53Bz4HO1orS9RYrOvqZ1ueCozH7ag7Nrg'
  }
})