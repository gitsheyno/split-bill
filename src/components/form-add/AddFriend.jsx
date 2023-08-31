import React from "react";
import Button from "../ui/button/Button";
import From from "../ui/form/Form";
const AddFriend = () => {
  return (
    <From className="form-add-friend">
      <label>👯‍♀️Friend name</label>
      <input type="text" />

      <label>🌄Image URL</label>
      <input type="text" />

      <Button className="button">Add</Button>
    </From>
  );
};

export default AddFriend;
