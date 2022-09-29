import styles from "./card.module.css";
import cls from "classnames";

export default function Card({ name, imgUrl, href }) {
  return (
    <a className={styles.cardLink} href={href}>
      <div className={cls("glass", styles.container)}>
        <div className={styles.cardHeaderWrapper}>
          <h2 className={styles.cardHeader}>{name}</h2>
        </div>
        <div className={styles.cardImageWrapper}>
          <img src={imgUrl} alt="Card" className={styles.cardImage} />
        </div>
      </div>
    </a>
  );
}
