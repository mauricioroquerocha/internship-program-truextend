import styles from "./Card.module.css";

type CardProps = {
  imageUrl: string;
  name: string;
  artistName: string;
  price: string;
};

export default function Card({ imageUrl, name, artistName, price }: CardProps) {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={name} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h6 className={styles.cardTitle}>{name}</h6>
        <p className={styles.cardArtist}>{artistName}</p>
        <p className={styles.cardPrice}>{price}</p>
      </div>
    </div>
  );
}
