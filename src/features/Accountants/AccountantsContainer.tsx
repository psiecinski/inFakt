import { useState } from "react";
import { useGetRandomUser } from "../../api";
import { User } from "../../api/types/useGetRandomUserTypes";
import { LoadingContainer, LoadMoreButton, Modal} from "../Shared";
import {
  Container,
  CardsContainer,
  ButtonContainer,
} from "./AccountantsContainer.styled";
import { AccountantTile } from "./components";

export default function AccountantsContainer() {
  const resultsSize = 4;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, isLoading, fetchMore } = useGetRandomUser({ resultsSize });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (isLoading) {
    return <LoadingContainer size={data.length + resultsSize} />;
  }

  const users = data.map((user: User) => (
    <AccountantTile key={user.id} accountDetails={user} openModal={openModal} />
  ));

  return (
    <Container>
      <CardsContainer>{users}</CardsContainer>
      <ButtonContainer>
        <LoadMoreButton fetchMore={fetchMore} isLoading={isLoading} />
      </ButtonContainer>
      <Modal isOpen={isModalOpen} onClose={closeModal}/>
    </Container>
  );
}
