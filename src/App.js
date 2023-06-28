import Header from './Header'
import Footer from './Footer'
import Movies from './Movies'
import TVShows from './TVShows'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <h1>index</h1> },
    { path: "movie", element: <Movies/> },
    { path: "movie/:id", 
      element: <h1>Movie</h1>,
      loader: async ({ params }) => {
        return params.id
      },
    },
    { path: "tv", element: <TVShows/> },
    { path: "tv/:id", 
      element: <h1>TV Show</h1>,
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
