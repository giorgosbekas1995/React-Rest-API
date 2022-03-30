import React from "react";
import "./user.css";

const User = ({ user, deletePost, updatePost }) => {
  const handleDelete = () => {
    deletePost(user.id);
  };
  const handleUpdate = () => {
    updatePost(user.id);
  };

  return (
    <ul>
      <li className="list">
        <span> {user.name}</span>
        <span> {user.email}</span>
        <div>
          <button onClick={handleUpdate}>Update</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </li>
    </ul>
  );
};

export default User;
