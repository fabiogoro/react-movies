import Header from './Header'
import Footer from './Footer'
import Movies from './Movies'
import Movie from './Movie'
import TVShows from './TVShows'
import TVShow from './TVShow'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Movies/> },
    { path: "movie", element: <Movies/> },
    { path: "movie/:id", 
      element: <Movie/>,
      loader: async ({ params }) => {
        return params.id
      },
    },
    { path: "tv", element: <TVShows/> },
    { path: "tv/:id", 
      element: <TVShow/>,
      loader: async ({ params }) => {
        return params.id
      },
    },
  ]);

  return (
    <div>
      <Header></Header>
      <RouterProvider router={router}/>
      <Footer></Footer>
    </div>
  );
}

export default App;
