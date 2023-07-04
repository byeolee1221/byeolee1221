import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home";
import Products from "./components/Products";
import Root from "./components/Root";
import Error from "./components/Error";

const router = createBrowserRouter([
  { path: '/', 
    element: <Root />, 
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/products', element: <Products /> }
    ]}
])

// const router = createBrowserRouter([
//   { path: "/", element: <Home /> },
//   { path: "/products", element: <Products /> }
// ]);

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home />} />
//     <Route path="/products" element={<Products />} />
//   </Route>
// );

// const router = createBrowserRouter(routeDefinitions);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
