import React from "react";
import Button from "../ui/button/Button";
const AddFriend = () => {
  return (
    <form className="form-add-friend">
      <label>👯‍♀️Friend name</label>
      <input type="text" />

      <label>🌄Image URL</label>
      <input type="text" />
      <Button className="button">Add</Button>
    </form>
  );
};

export default AddFriend;
