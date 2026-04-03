import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Root.jsx'
import Settings from './Settings.jsx'
import Users from './Users.jsx'
import Users2 from './Users2.jsx'

const usersPromise = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json());

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: App },
      { path: "/settings", Component: Settings },
      {
        path: "users",
        element: (
          <Suspense fallback={<span>users loading...</span>}>
            <Users usersPromise={usersPromise}></Users>
          </Suspense>
        ),
      },
      {
        path: "users2",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users2
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
