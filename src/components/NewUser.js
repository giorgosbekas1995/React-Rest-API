import React from "react";

export default function NewUser({ createPost }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    createPost(e.target.name.value, e.target.email.value);
    e.target.name.value = "";
    e.target.email.value = "";
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label></label>
        <input name="name" placeholder="Full Name" />
        <label></label>
        <input name="email" placeholder="Email" />
        <button>AddUser</button>
      </form>
    </div>
  );
}
