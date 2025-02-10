import styles from "./header.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={"/TrelloLogo.png"} alt="TrelloLogo" />
        <div className={styles.title}>
          <h1> Welcome to Tom's Trello Clone</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
