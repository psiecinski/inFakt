import { User } from "../../../../api/types/useGetRandomUserTypes";
import {
  CardContainer,
  CardHeader,
  CardImage,
  TitlesContainer,
  CardTitle,
  CardSubTitle,
  CardSmallerSubTitle,
  CardContent,
  CardPhone,
  CardEmail,
  CardPrice,
  CardButton,
  CardItem,
  CardText,
} from "./AccountantTile.styled";

type AccountantTileProps = {
  accountDetails: User;
  openModal: () => void;
};

export default function AccountantTile({ accountDetails, openModal }: AccountantTileProps) {
  const { name, email, cell, picture, gender } = accountDetails;

  const fullName = `${name.first} ${name.last}`;
  const greeting = gender === "female" ? "Twoja Księgowa" : "Twój księgowy";

  const cardFullName =
    fullName.length < 15 ? (
      <CardSubTitle>{fullName}</CardSubTitle>
    ) : (
      <CardSmallerSubTitle>{fullName}</CardSmallerSubTitle>
    );

  return (
    <CardContainer>
      <CardHeader>
        <CardImage src={picture.thumbnail} alt={fullName} />
        <TitlesContainer>
          <CardTitle>{greeting}</CardTitle>
          {cardFullName}
        </TitlesContainer>
      </CardHeader>
      <CardContent>
        <CardText>E-mail</CardText>
        <CardEmail>
          {email}
        </CardEmail>
        <CardItem>Telefon</CardItem>
        <CardPhone>{cell}</CardPhone>
        <CardItem>Średnia cena netto usługi / m-c</CardItem>
        <CardPrice>350,00 PLN</CardPrice>
      </CardContent>
      <CardButton onClick={openModal}>Dowiedz się więcej</CardButton>
    </CardContainer>
  );
}


