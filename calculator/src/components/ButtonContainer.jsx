import styles from "./ButtonContainer.module.css";

const ButtonsContainer = () => {
  const buttonNames = [
    "c",
    "%",
    "<-",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "00",
    "0",
    ".",
    "=",
  ];

  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((items) => (
        <button className={styles.button}>{items}</button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
