import React from "react";
import Friend from "../friend/Friend";
const FriendsList = ({ friends, onSelectFriend, selectedFreind }) => {
  return (
    <ul>
      {friends.map((friend) => {
        const { name, id, image, balance } = friend;
        return (
          <Friend
            onSelectFriend={onSelectFriend}
            selectedFreind={selectedFreind}
            key={friend.id}
            name={name}
            image={image}
            id={id}
            balance={balance}
          />
        );
      })}
    </ul>
  );
};

export default FriendsList;
