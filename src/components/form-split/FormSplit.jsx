import React from "react";
import Button from "../ui/button/Button";
const FormSplit = () => {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with friend name</h2>

      <label>💰 Bill value</label>
      <input type="text" />

      <label>🧍🏼‍♂️ Your expense</label>
      <input type="text" />

      <label>🕺🏼 X's expense</label>
      <input type="text" disabled />

      <label>🤑 who is paying the bill</label>
      <select>
        <option value="user">you</option>
        <option value="friend">friend</option>
      </select>

      <Button className="button">Split bill</Button>
    </form>
  );
};

export default FormSplit;