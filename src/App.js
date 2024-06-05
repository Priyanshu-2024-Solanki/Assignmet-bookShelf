import Bookshelf from './components/Bookshelf';
import MainPage from './components/MainPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage/>
    },
    {
      path: "/bookshelf",
      element: <Bookshelf/>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
