import { Container } from "react-bootstrap";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { NavbarInterface } from "../types/interfaces";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Navbar({ clearAllStates, timer }: NavbarInterface) {
  let nav = useNavigate();

  useEffect(() => {
    if (timer === 300) {
      clearAllStates();
      nav("/");
    }
  }, [timer]);
  return (
    <Container>
      <h1>Quizzy</h1>
      <Link
        to="/"
        onClick={() => {
          clearAllStates();
        }}
      >
        <AiFillHome size={30} />
      </Link>
      <p>{timer}</p>
    </Container>
  );
}
