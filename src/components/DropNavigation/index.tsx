import Link from "next/link";
import { parseCookies } from "nookies";
import { useAuth } from "../../hooks/useAuth";
import { Container, HamburgerIcon, Overlay, Wrapper } from "./styles";

interface IDropNavigationsProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

export function DropNavigation({ isOpen, setIsOpen }: IDropNavigationsProps) {
  const { user, signOut } = useAuth();

  const handleSignOut = () => {
    signOut();

    setIsOpen();
  };

  return (
    <>
      <Container className={isOpen ? "show" : ""}>
        <Wrapper>
          <Link href="/dashboard">
            <a onClick={setIsOpen} className="link">
              Home
            </a>
          </Link>

          <Link href="/notifications">
            <a onClick={setIsOpen} className="link">
              Avisos
            </a>
          </Link>

          {user.admin && (
            <Link href="/manage">
              <a onClick={setIsOpen} className="link">
                Gerenciar
              </a>
            </Link>
          )}

          <button onClick={setIsOpen} className="close-button">
            <HamburgerIcon />
          </button>

          {user.id && (
            <button onClick={handleSignOut} className="logout-button">
              Sair
            </button>
          )}
        </Wrapper>
      </Container>

      <Overlay onClick={setIsOpen} className={isOpen ? "show" : ""} />
    </>
  );
}
