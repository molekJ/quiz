import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
interface IsLoaded {
  isLoaded: boolean;
}

export const SplashScreen = ({ isLoaded }: IsLoaded) => {
  return (
    <>
      {isLoaded ? (
        <Card className="splash-screen ">
          <Card.Body>
            <Card.Title>Witamy w teście!</Card.Title>
            <Card.Text>Przed Tobą wiele trudnych pytań</Card.Text>
            <Link to="/quiz">
              <Button variant="primary" size="lg">
                Rozpocznij test{" "}
              </Button>
            </Link>
          </Card.Body>
        </Card>
      ) : (
        <p>Ładujemy pytania</p>
      )}
    </>
  );
};
