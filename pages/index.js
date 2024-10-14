import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";

import styles from "../styles/home.module.css";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [roomId, setRoomId] = useState("");

  const createAndJoin = () => {
    const roomId = uuidv4();
    router.push(`/${roomId}`);
  };

  const joinRoom = () => {
    if (roomId) {
      router.push(`/${roomId}`);
    } else {
      alert("Please enter a valid room ID");
    }
  };

  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.homeTitle}>Video Call App</h1>
      <div className={styles.enterRoomContainer}>
        <input
          className={styles.enterRoomInput}
          type="text"
          placeholder="Enter Room ID"
          value={roomId}
          onChange={(e) => setRoomId(e?.target?.value)}
        />
        <button className={styles.enterButton} onClick={joinRoom}>
          Join Room
        </button>
      </div>
      <span className={styles.separatorText}>
        ---------------- OR ----------------
      </span>
      <button className={styles.enterButton} onClick={createAndJoin}>
        Create a new Room
      </button>
    </div>
  );
}
