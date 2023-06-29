import Item from './Item'
import ItemList from './ItemList'
import {fetchTVShows} from './util/Api.js'
import {fetchTVGenres} from './util/Api.js'

function TVShows() {
  function itemsFunction(item, i){
    return <Item key={i} 
      title={item.name}
      image={item.poster_path}
      date={item.first_air_date}
      ranking={item.vote_average}
      id={item.id}
      detailUrl={'/tv/'}
    />
  }
  return (
    <ItemList 
      title="Movies" 
      fetchFunction={fetchTVShows}
      fetchGenres={fetchTVGenres}
      itemsFunction={itemsFunction}
    />
  )
}

export default TVShows;
