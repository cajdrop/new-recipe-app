import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Dashboard from "./routes/Dashboard";
import RecipeDetails from "./routes/RecipeDetails";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <App />
    },
    {
      path: '/dashboard',
      element: <Dashboard />
    },
    {
      path: '/recipe-details',
      element: <RecipeDetails />
    }
  ])