import React from "react";
import Button from "../ui/button/Button";

const Friend = ({
  image,
  name,
  id,
  balance,
  onSelectFriend,
  selectedFreind,
}) => {
  const handlerSelect = () => {
    onSelectFriend({ id, name, image, balance });
  };

  return (
    <li>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      {balance < 0 && (
        <p className="red">
          You owe {name} {Math.abs(balance)} €
        </p>
      )}
      {balance === 0 && <p>You and {name} are even</p>}
      {balance > 0 && (
        <p className="green">
          {name} owes you {balance} €
        </p>
      )}
      <Button className="button" onClick={handlerSelect}>
        {selectedFreind
          ? selectedFreind.id === id
            ? "Close"
            : "Select"
          : "Select"}
      </Button>
    </li>
  );
};

export default Friend;
