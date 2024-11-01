import style from "./Header.module.scss";

export function Header() {
  return (
    <>
      <header className={style.headerStyle}>
        <div className={style.h1Style}>
          <h1>
            We Love Coffee
            <br />
            And all the people who make it
          </h1>
        </div>
        <img src="src/assets/Header.png" alt="hero image" />
      </header>
    </>
  );
}
