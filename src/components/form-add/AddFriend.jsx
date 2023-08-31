import React, { useState } from "react";
import Button from "../ui/button/Button";
import From from "../ui/form/Form";
const AddFriend = ({ onAddFriend }) => {
  const [name, setName] = useState("");
  const [img, setImg] = useState("https://i.pravatar.cc/48");

  const handlerNameChange = (e) => {
    setName(e.target.value);
  };
  const handlerImageChange = (e) => {
    setImg(e.target.value);
  };

  const resetForm = () => {
    setName("");
    setImg("https://i.pravatar.cc/48");
  };
  const handlerSubmit = (e) => {
    e.preventDefault();

    if (!name || !img) return;

    const id = crypto.randomUUID();

    onAddFriend({
      id,
      name,
      image: `${img}/${id}`,
      balance: 0,
    });
    console.log(`${img}/${id}`);
    resetForm();
  };
  return (
    <From className="form-add-friend" onSubmit={handlerSubmit}>
      <label>👯‍♀️Friend name</label>
      <input type="text" value={name} onChange={handlerNameChange} />

      <label>🌄Image URL</label>
      <input type="text" value={img} onChange={handlerImageChange} />

      <Button className="button">Add</Button>
    </From>
  );
};

export default AddFriend;
