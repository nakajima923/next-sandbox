import styles from "./Card.module.css";

type CardProps = {
    title: string;
    description: string;
};


export default function Card({ title, description }: CardProps)  {
  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.cardDescription}>
        {description}
      </p>
      <button className={styles.cardButton}>詳細を見る</button>
    </div>
  );
}
