import React, {useState,useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Recipe from './components/Recipes';
import Axios from 'axios';

function App() {
  const[search,setSearch]=useState("chicken");
  const [recipes,setRecipes]=useState([]);

const APP_ID="3794bd9b";
const APP_KEY="bfdb7af6d16cbcf750cdbe3fd433a4b2";

useEffect( () =>{
 getRecipes();
 
},[]);


 const getRecipes=async ()=>{
  const res= await Axios.get
  (`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
   
  
   setRecipes(res.data.hits);
  
 }
 //}


  const onInputChange= (e) =>{
    setSearch(e.target.value);
  }

  const onSearch=() =>{
    getRecipes();
  }
  return (
    <div className="App">
     
      <Header search={search} onInputChange={onInputChange} onSearch={onSearch} />
      <div className="container">
      <Recipe recipes={recipes}/>
      </div>
      
    </div>
  );
}

export default App;
