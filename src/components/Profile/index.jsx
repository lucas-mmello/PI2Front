import styles from "./styles.module.scss";

export default function Profile({ studioInfo }) {
  return (
    <div className={styles.header}>
      <div className={styles.studioInfo}>
        <h2>{studioInfo.name}</h2>
        <p>{studioInfo.address}</p>
        <p>
          {studioInfo.city}, {studioInfo.state}
        </p>
        <p>CNPJ: {studioInfo.cnpj}</p>
      </div>
      <div className={styles.contactInfo}>
        <p>Telefone: {studioInfo.phone}</p>
        <p>Celular: {studioInfo.cellphone}</p>
      </div>
    </div>
  );
}
