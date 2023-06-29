const key = 'e03c9290bb3b8e9ce64eb0074847b13d'
const base = 'https://api.themoviedb.org/3/'

export async function fetchMovies({page, genres, sort_by}){
  const response = await fetch(
    `${base}discover/movie?page=${page}&sort_by=${sort_by}&with_genres=${genres}&api_key=${key}`)
  return (await response.json()).results
}

export async function fetchMovie(id){
  const response = await fetch(
    `${base}movie/${id}?append_to_response=images&api_key=${key}`)
  return (await response.json())
}

export async function fetchTVShows({page, genres, sort_by}){
  const response = await fetch(
    `${base}discover/tv?page=${page}&sort_by=${sort_by}&with_genres=${genres}&api_key=${key}`)
  return (await response.json()).results
}

export async function fetchTVGenres(){
  const response = await fetch(
    `${base}genre/tv/list?api_key=${key}`)
  return (await response.json()).genres
}

export async function fetchGenres(){
  const response = await fetch(
    `${base}genre/movie/list?api_key=${key}`)
  return (await response.json()).genres
}
