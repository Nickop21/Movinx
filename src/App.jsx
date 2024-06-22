import { useEffect } from 'react'
import './App.css'
import { fetchDataFromApi } from './utils/api'
import { useDispatch, useSelector } from 'react-redux'
import { getApiConfigration } from './store/homeslice';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Details from './pages/details/details';
import SearchResult from './pages/searchResult/searchResult';
import Explore from './pages/explore/explore';
import Pagenotfound from './pages/404/Pagenotfound';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';


function App() {
const dispatch =useDispatch();
const  {url}=useSelector((state)=>   //to use store val by desturing
  state.home       //store jis name se he
)

  useEffect(()=>{
   fetchApiConfig()
  },[])


  const fetchApiConfig = () => {
   
   fetchDataFromApi("/configuration").then((res) => {
        const url = { //storing data in home store 
            backdrop: res.images.secure_base_url + "original",
            poster: res.images.secure_base_url + "original",
            profile: res.images.secure_base_url + "original",
        };

        dispatch(getApiConfigration(url));
    }
    ).catch((err)=> console.log(err))
};


  return (
   <BrowserRouter>
  
    <Header/>
   <Routes>
    <Route path='/' Component={Home}/>
    <Route path='/:mediaType/:id' element={<Details/>} />
    <Route path='/search/:query' element={<SearchResult/>} />
    <Route path='/explore/:mediaType' element={<Explore/>} />
    <Route path='*' Component={Pagenotfound}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
  )
}

export default App
