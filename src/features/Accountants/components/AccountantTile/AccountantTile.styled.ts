import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #E4E6E8;
  background-color: #fff;
  border-radius: 16px;
  overflow: hidden;
  width: 300px;
  height: 376px;
  font-family: Roboto,sans-serif;
`;

export const CardHeader = styled.div`
  display: grid;
  grid-template-columns: 64px auto;
  align-items: center;
  padding: 24px;
`;

export const CardImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 8px;
  margin-right: 16px;
`;

export const TitlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;

export const CardTitle = styled.div`
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 4px;
  line-height: 24px;
  color: #54585C;
`;

export const CardSubTitle = styled.div`
  font-weight: bold;
  font-size: 24px;
  color: #000000;
`;

export const CardSmallerSubTitle = styled(CardSubTitle)`
  font-size: 20px;
`;

export const CardContent = styled.div`
  flex: 1;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
`;

export const CardText = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #54585C;
`;

export const CardItem = styled(CardText)`
  margin-top: 24px; 
`;

export const CardPhone = styled(CardText)`
  color: #000000;
`;

export const CardEmail = styled(CardPhone)`
  text-decoration: underline !important;
`;

export const CardButton = styled.button`
  margin: 24px;
  border-radius: 8px;
  width: 151px;
  height: 36px;
  border: none;
  color: #1E88E5;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  background-color: #E3F2FD;

  &:hover {
    background-color: #B3E0FF; 
    color: #005cbf; 
    cursor: pointer;
    transform: translateY(-1px);
  }
`;

export const CardPrice = styled.div`
  font-weight: bold;
`;