import css from "./SearchBox.module.css";
import { useId } from "react";

export default function SearchBox({ value, onFilter }) {
  const id = useId();
  return (
    <div className={css.container}>
      <label htmlFor={id}>Find contacts by name</label>
      <input
        value={value}
        onChange={(evt) => onFilter(evt.target.value)}
        id={id}
        className={css.input}
      ></input>
    </div>
  );
}
