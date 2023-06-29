import Item from './Item'
import ItemList from './ItemList'
import {fetchMovies} from './util/Api.js'
import {fetchGenres} from './util/Api.js'

function Movies() {
  function itemsFunction(item, i){
    return <Item key={i} 
      title={item.title}
      image={item.poster_path}
      date={item.release_date}
      ranking={item.vote_average}
      id={item.id}
      detailUrl={'/movie/'}
    />
  }
  return (
    <ItemList 
      title="Movies" 
      fetchFunction={fetchMovies}
      fetchGenres={fetchGenres}
      itemsFunction={itemsFunction}
    />
  )
}

export default Movies;
