import FriendsList from "./components/friend-list/FriendsList";
import AddFriend from "./components/form-add/AddFriend";
import Button from "./components/ui/button/Button";
import FormSplit from "./components/form-split/FormSplit";
import { useState } from "react";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friend, setFreind] = useState(initialFriends);
  const [selectedFreind, setSelectFriend] = useState(null);
  const handlerShowFormAddFriend = () => {
    setShowAddFriend(!showAddFriend);
  };

  const handlerAddFriend = (newFriend) => {
    setFreind((prevState) => [...prevState, newFriend]);
    handlerShowFormAddFriend();
  };
  const handlerSelectedFriend = (friend) => {
    setSelectFriend((prevFriend) =>
      prevFriend?.id === friend.id ? null : friend
    );

    if (showAddFriend) setShowAddFriend(!showAddFriend);
  };
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friend}
          onSelectFriend={handlerSelectedFriend}
          selectedFreind={selectedFreind}
        />
        {showAddFriend && <AddFriend onAddFriend={handlerAddFriend} />}
        <Button className="button" onClick={handlerShowFormAddFriend}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>
      {selectedFreind && <FormSplit selectedFreind={selectedFreind} />}
    </div>
  );
}

export default App;
