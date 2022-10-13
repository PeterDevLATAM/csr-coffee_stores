import styles from "./text.module.css";
export default function Text({ item }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.heading}>Title {item}</h3>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptate
        voluptas iure cupiditate unde tempora vero nostrum similique facilis,
        alias tenetur. Quaerat vero veritatis quasi eos! Deleniti numquam
        nostrum debitis.
      </p>
    </div>
  );
}
