import { useState } from "react";
import "./App.css";
import Friends from "./Components/Friends/Friends.jsx";
import SplitABill from "./Components/SplitABill/SplitABill.jsx";

function App() {
  const [ selected, setSelected ] = useState(false)
  const [friends, setFriends] = useState([
    {
      name: "Ali",
      img: "  https://picsum.photos/200",
      totalExpense: "",
      frndExpense: "",
      myExpense: "",
      id: Date.now(),
    },
  ]);
  return (
    <div className="container">
      <div className="row " style={{ height: "100vh" }}>
        <Friends friends={friends} setFriends={setFriends} selected={selected} setSelected={setSelected} />
        <SplitABill friends={friends} setFriends={setFriends} selected={selected} setSelected={setSelected} />
      </div>
      {/* <AddFriend /> */}
    </div>
  );
}

export default App;

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={a1da7024b3993a3549bb57305e9e57ca}
