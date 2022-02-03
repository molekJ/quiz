import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//przneisc do index.tsx
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface IsLoaded {
  isLoaded: boolean;
}

export const SplashScreen = ({ isLoaded }: IsLoaded) => {
  const { t } = useTranslation();

  return (
    <>
      {isLoaded ? (
        <Card className="min-vh-50: (values (50: 50vh))">
          <Card.Body className="d-flex-row">
            <Card.Title className="text-center">Welcome to the test</Card.Title>
            <Card.Text className="text-center">
              There are many difficult questions ahead of you
            </Card.Text>
            <div className="d-flex justify-content-center ">
              <Link to="/questions">
                <Button variant="primary" size="lg">
                  Start
                </Button>
              </Link>
            </div>
          </Card.Body>
        </Card>
      ) : (
        <Card>
          <Card.Body>
            <Card.Title className="text-center">
              Loading questions...
            </Card.Title>
          </Card.Body>
        </Card>
      )}
    </>
  );
};
