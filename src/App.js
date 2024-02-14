import './App.css';
import { useState } from "react";
import { useEffect } from "react";
import DishGrid from './DishGrid';
import NewSidebar from './NewSidebar';
import Loading from './loading';
import { SearchBar } from './SearchBarr';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login_m from './login_m';
import Login from './login';
import PrivateComponent from './PrivateComponent';
import MyRecipes from './MyRecipes';
import Contact from './Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>

      <BrowserRouter>
        <NewSidebar />
        
        

        <Routes>
        <Route path='' element={<DishGrid/>}/>
          <Route element={<PrivateComponent/>}>

          <Route path='find_recipes' element={<SearchBar />}></Route>
          <Route path='myrecipes' element={<MyRecipes/>}></Route>
          
          
          </Route>
          <Route path='contact' element={<Contact/>}></Route>
          <Route path='signup' element={<Login/>}></Route>
          <Route path='login' element={<Login_m/>}></Route>
        </Routes>

      </BrowserRouter>


    </>
  );
}

export default App;
