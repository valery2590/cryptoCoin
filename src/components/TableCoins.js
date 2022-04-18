import React from 'react';
import CoinRow from './CoinRow';

const titles = ['#', 'coin', 'Price', 'Price Change']

const TableCoins = ({coins, search}) => {

   const filteredCoins = coins.filter((coin)=> coin.name.toLowerCase().includes(search))

    return (
        <table className="table table-dark mt-4 table-hover">
        <thead>
           <tr>{titles.map((title, index)=>(
               <td key={title}>{title}</td>
           ))}</tr>
        </thead>
        <tbody>
        {filteredCoins.map((coin, index) => (
         <CoinRow coin={coin} key={coin.id} index={index+ 1}/>
        ))}
        </tbody>
    </table>
    );
};

export default TableCoins;