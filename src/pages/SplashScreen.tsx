import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { IsLoaded } from "../types/interfaces";

export const SplashScreen = ({ isLoaded }: IsLoaded) => {
  const { t } = useTranslation();

  return (
    <>
      {isLoaded ? (
        <Card className="min-vh-50: (values (50: 50vh))">
          <Card.Body className="d-flex-row">
            <Card.Title className="text-center">
              {t("splash_welcome")}
            </Card.Title>
            <Card.Text className="text-center">
              {t("splash_before_test")}
            </Card.Text>
            <div className="d-flex justify-content-center ">
              <Link to="/quiz">
                <Button variant="primary" size="lg">
                  {t("start_test_button")}
                </Button>
              </Link>
            </div>
          </Card.Body>
        </Card>
      ) : (
        <Card>
          <Card.Body>
            <Card.Title className="text-center">
              {t("loading_questions")}
            </Card.Title>
          </Card.Body>
        </Card>
      )}
    </>
  );
};
