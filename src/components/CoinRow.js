import React, { useState } from "react";
import "./CoinRow.css";

const CoinRow = ({ coin, index }) => {
  // console.log({coin, index})

  const [show, setShow] = useState(false);

  const clicked = () => {
    setShow(!show);
  };

  return (
    <>
      <tr onClick={clicked}>
        <td>{index}</td>
        <td className="name-box-container">
          <img
            src={coin.image}
            alt={coin.name}
            className="img-fluid"
          />
          <span>{coin.name}</span>
        </td>
        <td>{coin.current_price.toLocaleString()}</td>
        <td
          className={
            coin.price_change_percentage_24h > 0
              ? "text-success"
              : "text-danger"
          }
        >
          {coin.price_change_percentage_24h}
        </td>
        <td
          className={
            coin.price_change_percentage_24h > 0
              ? "text-success"
              : "text-danger"
          }
        >
          {new Date(coin.last_updated).toLocaleString("es-ES", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            timeZoneName: "short",
          })}
        </td>
      </tr>
      {show && (
        <tr>
          <td className="extra-info-box"></td>
          <td className="extra-info-box">
          <span className="ms-3 text-muted text-u">{coin.symbol}</span>
          </td>
          <td className="extra-info-box">
            <span>
              <b> ⬇️ Low 24th:</b> {coin.low_24h.toLocaleString()}
            </span>
          </td>
          <td className="extra-info-box">
          <span style={{ color: 'green' }}>
              <b>⬆️ High 24th:</b> {coin.high_24h.toLocaleString()}
            </span>
          </td>
          <td className="extra-info-box"></td>
        </tr>
      )}
    </>
  );
};

export default CoinRow;
