import React, { useCallback, useState } from "react";

import Search from "./../components/Search";

const allUsers = ["john", "alex", "george", "simon", "james"];

interface DemoProps {}

export default function Demo({}: DemoProps) {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };

  const [users, setUsers] = useState(allUsers);
  //functions are different on every render.
  //so even though search is wrapped in memo and should only rerender when the props have changed
  //the search component will rerender since handleSearch changes on every render
  //so we can wrqap our function in useCallback so that it is memorised and only changes when the dependency array changes
  //this way unless the dependency array changes e.g [users], the function will not change and so the prop doesnt change which means the search component doesn't rerender. It helps with performance

  //useCallback freexzez the function in time. Unless you specify a dependency in the depemndency array, the function would not change or rerender
  const handleSearch = useCallback(
    (text: string) => {
      console.log("users[0]: " + users[0]);

      const filteredUsers = allUsers.filter((user) => user.includes(text));
      setUsers(filteredUsers);
    },
    [users]
  );

  return (
    <div className="tutorial">
      <div className="align-center mb-2 flex">
        <button onClick={() => increaseCount()}>Shuffle</button>

        <Search onChange={handleSearch} />
      </div>
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
      {count}
    </div>
  );
}
