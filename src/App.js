import FriendsList from "./components/friend-list/FriendsList";
import AddFriend from "./components/form-add/AddFriend";
import Button from "./components/ui/button/Button";
import FormSplit from "./components/form-split/FormSplit";
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
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={initialFriends} />
        <AddFriend />
        <Button className="button">Add friend</Button>
      </div>
      <FormSplit />
    </div>
  );
}

export default App;
