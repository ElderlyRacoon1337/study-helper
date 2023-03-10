import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.root}>
      <div className="container">
        <div className={styles.headerFlex}>
          <a href="/">
            <h1>
              <span>S</span>tudy <span>H</span>elper
            </h1>
          </a>
          <div className="rightSide">
            <button className="buttonText">Hello world</button>
            <button className="buttonOutlined">About us</button>
            <button className="buttonOutlined">Features</button>
            <button className="button">Join us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
