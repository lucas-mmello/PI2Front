import styles from "./styles.module.scss";

export default function Carousel(props) {
  return (
    <div
      id="Carousel"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="8000">
          <div className={`${styles.imgWrapper} ${styles.active}`}>
            <img
              src={props.image1}
              className={`d-block ${styles.img}`}
              alt={props.alt}
            />
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="8000">
          <div className={styles.imgWrapper}>
            <img
              src={props.image2}
              className={`d-block ${styles.img} ${styles.filtro}`}
              alt={props.alt}
            />
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="8000">
          <div className={styles.imgWrapper}>
            <img
              src={props.image3}
              className={`d-block ${styles.img}`}
              alt={props.alt}
            />
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#Carousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#Carousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
