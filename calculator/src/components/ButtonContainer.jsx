import styles from "./ButtonContainer.module.css";

const ButtonsContainer = ({ onButtonClicked }) => {
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
        <button className={styles.button} onClick={()=>onButtonClicked(items)}>
          {items}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
