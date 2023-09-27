import { Link } from "react-router-dom";
import { StyledFormBox, StyledHeader, Button } from "./FormBox.styled";

function FormBox() {
  return (
    <StyledFormBox>
        <StyledHeader>
          Masz firmę?
          <br />
          <u>Pora na księgowość</u>
        </StyledHeader>
        <Link to="/ksiegowi">
          <Button>Sprawdź ofertę</Button>
        </Link>
    </StyledFormBox>
  );
}

export default FormBox;