import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import Loading from "./components/Loading";
import NewUser from "./components/NewUser";
import User from "./components/User";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  function createPost(name, email) {
    try {
      const newPost = { name, email };
      // setUsers([...users, newPost]);

      axios
        .post("https://jsonplaceholder.typicode.com/users", newPost)
        .then((res) => setUsers([...users, res.data]));
    } catch (err) {
      console.log(err);
    }
  }

  function deletePost(id) {
    try {
      axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`).then(
        (res) => console.log(res),
        setUsers(
          users.filter((user) => {
            return user.id !== id;
          })
        )
      );
    } catch (err) {
      console.log(err);
    }
  }

  function updatePost(id) {
    const data = {
      name: "Updated",
      email: "Updated Email",
    };

    try {
      axios
        .put(`https://jsonplaceholder.typicode.com/users/${id}`, data)
        .then(() => {
          for (let i = 0; i < users.length; i++) {
            console.log(users[i]);
            if (users[i].id === id) {
              users[i].name = "Updated";
              users[i].email = "Updated Email";
              console.log(users[i]);
            }
          }
          setUsers([...users]);
        });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="App">
      <h1>REACT REST API - CONSUME FAKE API</h1>
      <NewUser createPost={createPost} />
      {users ? (
        users.map((user) => (
          <User
            user={user}
            key={user.id}
            deletePost={deletePost}
            updatePost={updatePost}
          />
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default App;
