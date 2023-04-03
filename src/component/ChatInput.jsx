import React, { useState } from "react";
import "../css/ChatInput.css";
import db from "../firebase";
import { useStateValue } from "../StateProvider";
import { Button } from "@mui/material";
import firebase from "firebase/compat/app";

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState("");
  const [{ user }] = useStateValue();
  const sendMessage = (e) => {
    e.preventDefault();

    if (channelId) {
      db.collection("Channels").doc(channelId).collection("message").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userImage: user.photoURL,
      });
    }
    setInput("");
  };

  return (
    <div className="chatInput">
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName?.toLowerCase()}`}
        />
        <Button type="submit" onClick={sendMessage}>
          {" "}
          SEND
        </Button>
      </form>
    </div>
  );
}

export default ChatInput;
