import axios from 'axios'
import './App.css';
import {useEffect, useState} from 'react';
import TableCoins from './components/TableCoins';

function App() {

  const [coins, setCoins] = useState([]);
  const [search , setSearch] = useState([]);


  const getData = async ()=>{
    const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&")
    console.log(res.data)
    setCoins(res.data);
  }
  
  useEffect (()=> {
    getData();
  },[])

  return (
    <div className="container">
      <div className="row">
        <input type="text" placeholder="search a coin" className='form-control bg-dark text-light border-0 mt-4 text-center' 
        onChange={e => setSearch(e.target.value)}/>
        
        <div>{coins.map}</div>
        <TableCoins coins={coins} search={search}/>
      </div>
    </div>
  );
}

export default App;

