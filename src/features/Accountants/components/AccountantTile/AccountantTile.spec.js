import "@testing-library/jest-dom/extend-expect"; 
import { render } from "@testing-library/react";
import AccountantTile from "./AccountantTile";

const mockUser = {
  name: {
    first: "John",
    last: "Doe",
  },
  email: "johndoe@example.com",
  phone: "123-456-7890",
  picture: {
    thumbnail: "avatar.jpg",
  },
  gender: "male",
};

/* I just wanted to make a presentational version of unit tests :) */

describe("AccountantTile", () => {
  it("renders the component with male greeting", () => {
    const { getByText, getByAltText } = render(
      <AccountantTile accountDetails={mockUser} />
    );

    const greeting = getByText("Twój księgowy");
    const fullName = getByText("John Doe");
    const email = getByText("E-mail");
    const phone = getByText("Telefon");
    const price = getByText("350,00 PLN");
    const moreInfoButton = getByText("Dowiedz się więcej");
    const avatar = getByAltText("John Doe");

    expect(greeting).toBeInTheDocument();
    expect(fullName).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(phone).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(moreInfoButton).toBeInTheDocument();
    expect(avatar).toBeInTheDocument();
  });

  it("renders the component with female greeting", () => {
    const femaleUser = { ...mockUser, gender: "female" };
    const { getByText } = render(
      <AccountantTile accountDetails={femaleUser} />
    );

    const greeting = getByText("Twoja Księgowa");

    expect(greeting).toBeInTheDocument();
  });

  it("renders a shorter name if full name is too long", () => {
    const longNameUser = {
      ...mockUser,
      name: { first: "Very", last: "LongName" },
    };
    const { getByText } = render(
      <AccountantTile accountDetails={longNameUser} />
    );

    const shorterName = getByText("Very LongName");

    expect(shorterName).toBeInTheDocument();
  });

  it("renders the full or shorter name based on the length of the name", () => {
    const longNameUser = {
      ...mockUser,
      name: { first: "VeryLongName", last: "VeryLongName" },
    };
    const { queryByText } = render(
      <AccountantTile accountDetails={longNameUser} />
    );
  
    const fullNameElement = queryByText("VeryLongName VeryLongName");
    const shorterNameElement = queryByText("ShortName");
  
    expect(fullNameElement || shorterNameElement).toBeInTheDocument();
  });
});