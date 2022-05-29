import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { DropNavigation } from "../DropNavigation";
import { Container, HamburgerIcon, MoonIcon, SunIcon, Wrapper } from "./styles";

interface IHeaderProps {
  toggleTheme: () => void;
  theme: string;
}

export const Header = ({ toggleTheme, theme }: IHeaderProps) => {
  const [inputChecked, setInputChecked] = useState(false);
  const [showNavigation, setShowNavigation] = useState(false);

  const { user } = useAuth();

  useEffect(() => {
    if (theme === "dark") {
      setInputChecked(true);
    } else {
      setInputChecked(false);
    }
  }, [theme]);

  const handleShowDropNavigation = () => {
    setShowNavigation(!showNavigation);
  };

  return (
    <Container>
      <Wrapper>
        <button onClick={handleShowDropNavigation} className="button">
          <HamburgerIcon />
        </button>

        <span className="text">
          {user.id ? `Seja bem-vindo, ${user.name}!` : ""}
        </span>

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

        <DropNavigation
          isOpen={showNavigation}
          setIsOpen={handleShowDropNavigation}
        />
      </Wrapper>
    </Container>
  );
};
