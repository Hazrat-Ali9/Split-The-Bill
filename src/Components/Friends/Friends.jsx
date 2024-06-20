import AddFriend from "../AddFriend/AddFriend.jsx";
import "./Friends.css";

export default function Friends({
  friends,
  setFriends,
  selected,
  setSelected,
}) {
  return (
    <div
      className="col-md-5 p-1 d-flex justify-content-center align-items-center"
      style={{
        margin: "auto",
        height: "50%",
      }}
    >
      {/* friends list  */}
      <div className="w-100">
        {friends?.map((friend) => {
          return (
            <div className="frndDiv mt-2 p-md-2 d-flex justify-content-between align-items-center w-100 ">
              <div className="d-flex justify-content-between align-items-center">
                <img
                  className="card-title m-0 frndImg "
                  src={friend.img}
                  style={{
                    borderRadius: "50%",
                    width: "50px",
                  }}
                />

                <div className="d-flex flex-column">
                  <h5
                    style={{ display: "block" }}
                    className="card-text ms-1 frndName"
                  >
                    {friend.name}
                  </h5>

                  <p
                    className="ms-1"
                    style={{
                      fontSize: "12px",
                      color:
                        friend?.whoPayed?.toLowerCase() === "you"
                          ? "green"
                          : "red",
                    }}
                  >
                    {friend?.whoPayed?.toLowerCase() === "you"
                      ? `${friend.name} has to pay ${friend.frndExpense}`
                      : friend?.whoPayed?.toLowerCase() === "friend"
                      ? `I have to pay ${friend.myExpense}`
                      : ""}
                  </p>
                </div>
              </div>

              {/* select button */}
              <div>
                <a
                  onClick={() => {
                    setSelected(friend.id);
                  }}
                  href="#"
                  className="btn btn-primary selectBtn"
                >
                  Select
                </a>
              </div>
            </div>
          );
        })}

        {/* add friend div */}

        <AddFriend friends={friends} setFriends={setFriends} />

        {/* add friend button */}
        <div className="mt-2 p-md-2 d-flex justify-content-center align-items-center w-100">
          <a
            href="#"
            onClick={() => {
              (document.querySelector(".addFrndDiv").style.display = "block")(
                (document.querySelector(".addFrend").style.display = "none")
              );
            }}
            className="btn btn-primary selectBtn addFrend "
          >
            Add Friend
          </a>
        </div>
      </div>
    </div>
  );
}
