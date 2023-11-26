import ListCars from "./Components/pages/ListCars";
import LoginPage from "./Components/pages/LoginPage";
import RegisterPage from "./Components/pages/RegisterPage";
import AdCars from "./Components/pages/AdCars";
import ProfilePage from "./Components/pages/ProfilePage";
import PostForm from "./Components/pages/PostForm";
import CarsbyMakePage from "./Components/pages/CarsbyMakePage";
import ModelCarsPage from "./Components/pages/ModelCarsPage";
import FindCarsAdvancedPage from "./Components/pages/FindCarsAdvancedPage";
import ReviewPage from "./Components/pages/ReviewPage";
import HomePage from "./Components/pages/HomePage";


function App() {
  return (
    <div className="App">
      {/* Pagina de Formulario para publicar*/}
      <ListCars />
      <LoginPage />
      <RegisterPage />
      <AdCars />
      <ProfilePage />
      <PostForm />
      <CarsbyMakePage />
      <ModelCarsPage />
      <FindCarsAdvancedPage />
      <ReviewPage />
      <HomePage />
    </div>
  );
}

export default App;
