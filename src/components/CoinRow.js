import React from 'react';
import "./CoinRow.css"

const CoinRow = ({coin,index}) => {
    console.log({coin, index})
    return (
    <tr>
          <td>{index}</td>
          <td>
              <img src={coin.image} alt={coin.name} style={{width:'3%'}} className='img-fluid me-4'/>
              <span>{coin.name}</span>
              <span className='ms-3 text-muted text-u'>{coin.symbol}</span>
          </td>
          <td>{coin.current_price.toLocaleString()}</td>
          <td className={coin.price_change_percentage_24h > 0 ? 'text-success':'text-danger'}>
              {coin.price_change_percentage_24h}</td>
         
          </tr>
    );
};

export default CoinRow;