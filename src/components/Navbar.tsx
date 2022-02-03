import {
  Container,
  DropdownButton,
  Dropdown,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { NavbarInterface } from "../types/interfaces";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";
import { BsGlobe } from "react-icons/bs";
import i18next from "i18next";
import cookies from "js-cookie";

const languages = [
  { code: "en", name: "English", country_code: "gb" },
  { code: "pl", name: "Polski", country_code: "pl" },
];

export default function Navbar({ clearAllStates, timer }: NavbarInterface) {
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find(
    (language) => language.code === currentLanguageCode
  );
  const { t } = useTranslation();
  let nav = useNavigate();

  useEffect(() => {
    if (timer === 30) {
      clearAllStates();
      nav("/");
    }
  }, [timer]);

  // useEffect(() => {
  //   document.title = t("app_title");
  // }, [currentLanguage, t]);

  return (
    <Container>
      <Row>
        <Col xs={2} className="d-flex align-items-center">
          <Link
            to="/"
            onClick={() => {
              clearAllStates();
            }}
          >
            <AiFillHome size={30} />
          </Link>
        </Col>
        <Col xs={8}>
          <h1 className="text-center">Quiz</h1>
        </Col>
        <Col
          xs={2}
          className="text-end  d-flex justify-content-end align-items-center"
        >
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              <BsGlobe />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <li>
                <span className="dropdown-item-text">Language</span>
              </li>
              {languages.map(({ code, name, country_code }) => {
                return (
                  <Button
                    className="dropdown-item"
                    key={country_code}
                    onClick={() => {
                      i18next.changeLanguage(code);
                    }}
                    disabled={code === currentLanguageCode}
                  >
                    <ReactCountryFlag countryCode={country_code} />
                    {name}
                  </Button>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </Container>
  );
}
