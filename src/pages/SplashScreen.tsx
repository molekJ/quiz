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
        <Card className="splash-screen ">
          <Card.Body>
            <Card.Title>{t("splash_welcome")}</Card.Title>
            <Card.Text>{t("splash_before_test")}</Card.Text>
            <Link to="/quiz">
              <Button variant="primary" size="lg">
                {t("start_test_button")}{" "}
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
