import { useState } from "react";
import styles from "./DarkTheme.module.css";

export default function DarkTheme() {
  const [light, setLight] = useState(false);

  return (
    <div className={light ? styles.tema : styles.light}>
      <h1>React - Dark Theme</h1>
      <button
        onClick={() => {
          setLight(!light);
        }}
      >
        Change Theme
      </button>
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos atque neque
        quia non, dolorum excepturi totam placeat, numquam a cum deleniti quam
        suscipit mollitia doloribus voluptatem beatae vitae voluptate
        praesentium.
      </p>
    </div>
  );
}
