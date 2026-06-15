import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Books from "./pages/Books.jsx";
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";
import Profile from "./pages/Profile.jsx";
import { Provider } from "react-redux";
import magazin from "./redux/store.js";
import CakeContainer from "./components/Cakes/CakeContainer.jsx";

function App() {
  return (
    <Provider store={magazin}>
      <Navbar />
      <CakeContainer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books' element={<Books />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />

        <Route
          path='/profile'
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Provider>
  );
}

export default App;
