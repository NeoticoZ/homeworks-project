import { useState } from "react";
import { Container, HamburgerIcon, MoonIcon, SunIcon, Wrapper } from "./styles";

interface IHeaderProps {
  toggleTheme: () => void;
}

export const Header = ({ toggleTheme }: IHeaderProps) => {
  const [inputChecked, setInputChecked] = useState(false);

  return (
    <Container>
      <Wrapper>
        <button className="button">
          <HamburgerIcon />
        </button>

        <span className="text">Seja bem-vindo, Fulano!</span>

        <div className="dark">
          <label className="dark__label" htmlFor="toggleDark">
            Dark Mode
          </label>

          <input
            onChange={() => setInputChecked(!inputChecked)}
            className="dark__input"
            id="toggleDark"
            type="checkbox"
            checked={inputChecked}
            onClick={toggleTheme}
          />

          <label className="toggle-label" htmlFor="toggleDark">
            <MoonIcon />
            <div
              className={`toggle-label__ball ${
                inputChecked ? "toggle-label__ball--checked" : ""
              }`}
            ></div>
            <SunIcon />
          </label>
        </div>
      </Wrapper>
    </Container>
  );
};
