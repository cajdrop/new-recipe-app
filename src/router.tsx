import { createBrowserRouter } from "react-router-dom";
import App from "./screens/LoginPage";
import Dashboard from "./screens/Dashboard";
import RecipeDetails from "./screens/RecipeDetails";

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