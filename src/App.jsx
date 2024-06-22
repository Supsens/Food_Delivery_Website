import About from "./Components/About/About"
import Contact from "./Components/About/Contact"
import Error from "./Components/About/Error"
import Body from "./Components/Body/Body"
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import { createHashRouter, Outlet, RouterProvider } from "react-router-dom"
import RestaurentMenu from "./Components/RestaurentMenu/RestaurentMenu"

function App() {
  return (
    <div className="app">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export const appRouter = createHashRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurentMenu/>
      }
    ]
  },
  {
    path: "*",
    element: <Error/>
  }
])

export default App