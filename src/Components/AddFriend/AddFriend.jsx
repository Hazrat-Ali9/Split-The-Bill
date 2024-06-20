import { useState } from "react";
import "./AddFriend.css";

export default function AddFriend({ friends, setFriends }) {
  const [FriendName, setFriendName] = useState("");
  const [FriendImg, setFriendImg] = useState("");

  // add firend function
  const addFriend = () => {
    let myFriends = [...friends];
    console.log(myFriends);
    if (!FriendName || !FriendImg) {
      // alert
      alert("Please Enter Friend Name and Image!");
    } else {
      // add friend obj in array
      myFriends.push({
        name: FriendName,
        img: FriendImg || "https:picsum.photos/200",
        totalExpense: "",
        frndExpense: "",
        myExpense: "",
        whoPayed: "",
        id: Date.now(),
      });

      // addFriend in to the list
      setFriends(myFriends);

      // clear input field
      document.getElementById("nameInput").value = "";
      document.getElementById("imgInput").value = "";
    }
  };
  return (
    <div className="addFrndDiv" style={{ display: "none" }}>
      <div
        style={{
          padding: "10px 15px",
          backgroundColor: "#fbf3e0",
          marginTop: "15px",
        }}
      >
        {/* friend name */}
        <div className="input-group mb-3 w-100">
          <label
            className="d-flex align-items-center align-items-center me-2"
            style={{
              fontWeight: "500",
              fontSize: "18px",
            }}
          >
            Friend Name
          </label>
          {/* friend name input */}
          <input
            onChange={(e) => setFriendName(e.target.value)}
            type="text"
            className="form-control frndInput"
            id="nameInput"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>

        {/* friend image */}
        <div className="input-group mb-3 w-100">
          <label
            className="d-flex align-items-center align-items-center me-2"
            style={{
              fontWeight: "500",
              fontSize: "18px",
            }}
          >
            Friend Image
          </label>
          {/* friend image input */}
          <input
            onChange={(e) => setFriendImg(e.target.value)}
            type="text"
            className="form-control frndInput"
            id="imgInput"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>

        {/* buttons divs */}
        <div className="mt-2  d-flex justify-content-around align-items-center w-100">
          <a
            onClick={() => {
              // calling addFriend function
              addFriend();

              // changing display
              document.querySelector(".addFrndDiv").style.display = "none";
              document.querySelector(".addFrend").style.display = "block";
            }}
            href="#"
            className="btn btn-primary selectBtn mx-auto"
            style={{
              padding: "5px 30px",
            }}
          >
            {/* add button */}
            Add
          </a>

          {/* close button */}
          <a
            href="#"
            className="btn btn-primary closeBtn mx-auto"
            style={{
              padding: "5px 30px",
            }}
            onClick={() => {
              (document.querySelector(".addFrndDiv").style.display = "none")(
                (document.querySelector(".addFrend").style.display = "block")
              );
            }}
          >
            Close
          </a>
        </div>
      </div>
    </div>
  );
}
