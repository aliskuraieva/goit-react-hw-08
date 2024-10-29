import styles from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        <FaUser className={styles.icon} />
        {contact.name}
      </p>
      <p className={styles.text}>
        <FaPhoneAlt className={styles.icon} />
        {contact.number}
      </p>
      <button
        className={styles.btn}
        type="button"
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
