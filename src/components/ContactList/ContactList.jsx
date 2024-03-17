import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ contacts, deleteContact }) {
  return (
    <ul className={css.list}>
      {contacts.map((contact) => {
        return (
          <li className={css.listItem} key={contact.id}>
            <Contact data={contact} deleteContact={deleteContact}></Contact>
          </li>
        );
      })}
    </ul>
  );
}
