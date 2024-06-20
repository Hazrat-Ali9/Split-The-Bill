import { useState } from "react";
import "./SplitABill.css";

export default function SplitABill({
  friends,
  setFriends,
  selected,
  setSelected,
}) {
  const [totalExpense, setTotalExpense] = useState("");
  const [frndExpense, setFrndExpense] = useState("");
  const [myExpense, setMyExpense] = useState("");
  const [whoPayed, setWhoPayed] = useState("you");

  console.log(selected);
  {
    let friend = friends.find((friend) => friend.id === selected);
    console.log(friend);
    return (
      <div
        className="col-md-6 d-flex justify-content-center align-items-center"
        style={{
          height: "50%",
          margin: "auto",
          borderRadius: "10px",
        }}
      >
        <div
          className="container-fluid splitABillDiv "
          style={{
            backgroundColor: "#fbf3e0",
            height: "100%",
            display: selected === false ? "none" : "block",
          }}
        >
          <div className="row ">
            {/* heading */}
            <div className="col-12 " style={{ padding: "2.2rem" }}>
              <h1 className="text-center">Split A Bill With {friend?.name}</h1>
            </div>

            {/* bill value */}
            <div className="col-12 d-flex justify-content-between align-items-center p-1">
              <p className="ms-2">Bill Value</p>
              <input
                id="billValue"
                placeholder={
                  friend?.totalExpense ? friend?.totalExpense : "total bill"
                }
                className="frndInput"
                onChange={(e) => setTotalExpense(e.target.value)}
                type="number"
              />
            </div>

            {/* your expense */}
            <div className="col-12 d-flex justify-content-between align-items-center p-1">
              <p className="ms-2">Your Expense</p>
              <input
                id="yourExpense"
                placeholder={
                  friend?.myExpense ? friend?.myExpense : "My Expense"
                }
                className="frndInput"
                onChange={(e) => setMyExpense(e.target.value)}
                type="number"
              />
            </div>

            {/* Friend expense */}
            <div className="col-12 d-flex justify-content-between align-items-center p-1">
              <p className="ms-2">{friend?.name} Expense</p>
              <input
                id="friendExpense"
                placeholder={
                  friend?.frndExpense ? friend?.frndExpense : "Friend Expense"
                }
                className="frndInput"
                onChange={(e) => setFrndExpense(e.target.value)}
                type="number"
              />
            </div>

            {/* who payed the bill */}
            <div className="col-12 d-flex justify-content-between align-items-center p-1">
              <p className="ms-2">Who is paying the bill?</p>
              <select
                className="form-select frndInput"
                name=""
                id=""
                onChange={(e) => setWhoPayed(e.target.value)}
              >
                <option value="you">you</option>
                <option value="friend">friend</option>
              </select>
            </div>

            {/* split button */}
            <div className="col-12 d-flex justify-content-center align-items-center mt-2">
              <a
                onClick={() => {
                  let myFriends = [...friends];

                  // finding selected friend
                  let selectedFriend = myFriends.find(
                    (friend) => friend.id === selected
                  );
                  // updating selected friend
                  selectedFriend.totalExpense = totalExpense;
                  selectedFriend.frndExpense = frndExpense;
                  selectedFriend.myExpense = myExpense;
                  selectedFriend.whoPayed = whoPayed;

                  // updating friends list
                  setFriends(myFriends);

                  // changing selected state
                  setSelected(false);

                  // clearing input
                  document.getElementById("billValue").value = "";
                  document.getElementById("yourExpense").value = "";
                  document.getElementById("friendExpense").value = "";
                }}
                href="#"
                className="btn btn-primary splitBtn m-0 "
              >
                Split Bill
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
