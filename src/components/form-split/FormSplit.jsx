import React, { useState, useEffect } from "react";
import Button from "../ui/button/Button";
import From from "../ui/form/Form";
const FormSplit = ({ selectedFreind, handlerBalance }) => {
  const { name, id } = selectedFreind;
  const [bill, setBill] = useState("");
  const [ownerExpense, setOwnerExpense] = useState("");
  const [whoPays, setWhoPays] = useState("User");

  const friendExpense = bill && ownerExpense && bill - ownerExpense;
  const resetInputs = () => {
    setBill("");
    setWhoPays("User");
    setOwnerExpense("");
  };

  useEffect(() => {
    console.log("mounted");

    return () => {
      console.log("unMount");
      resetInputs();
    };
  }, [selectedFreind]);

  const handlerBill = (e) => {
    setBill(+e.target.value);
  };
  const handlerOwnerBill = (e) => {
    const value = Number(e.target.value);
    if (value > bill) return;
    setOwnerExpense(+e.target.value);
  };

  const handerWhoPays = (e) => {
    setWhoPays(e.target.value);
  };

  const handlerSubmitForm = (e) => {
    e.preventDefault();
    handlerBalance(whoPays === "User" ? -friendExpense : friendExpense, id);
  };
  return (
    <From className="form-split-bill" onSubmit={handlerSubmitForm}>
      <h2>Split a bill with {name}</h2>

      <label>💰 Bill value</label>
      <input type="text" value={bill} onChange={handlerBill} />

      <label>🧍🏼‍♂️ Your expense</label>
      <input type="text" value={ownerExpense} onChange={handlerOwnerBill} />

      <label>🕺🏼 {name} expense</label>
      <input type="text" disabled value={friendExpense} />

      <label>🤑 who is paying the bill</label>
      <select value={whoPays} onChange={handerWhoPays}>
        <option value="user">you</option>
        <option value={name}>{name}</option>
      </select>

      <Button className="button">Split bill</Button>
    </From>
  );
};

export default FormSplit;
