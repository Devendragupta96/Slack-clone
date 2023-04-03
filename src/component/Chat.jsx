import React, { useEffect, useState } from "react";
import "../css/Chat.css";
import { useParams } from "react-router-dom";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import db from "../firebase";
import Messages from "./Messages";
import ChatInput from "./ChatInput";

function Chat() {
  const { channelId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState(null);
  useEffect(() => {
    if (channelId) {
      db.collection("Channels")
        .doc(channelId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
    }

    db.collection("Channels")
      .doc(channelId)
      .collection("message")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setRoomMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [channelId]);
  console.log(roomDetails);
  console.log(roomMessages);
  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong>#{roomDetails?.name}</strong>
            <StarBorderOutlinedIcon />
          </h4>
        </div>
        <div className="chat__headerRight">
          <p>
            <InfoOutlinedIcon />
            Details
          </p>
        </div>
      </div>
      <div className="chat__messages">
        {roomMessages?.map(({ message, timestamp, user, userImage }) => (
          <Messages
            message={message}
            timestamp={timestamp}
            user={user}
            userImage={userImage}
          />
        ))}
      </div>
      <ChatInput channelName={roomDetails?.name} channelId={channelId} />
    </div>
  );
}

export default Chat;
