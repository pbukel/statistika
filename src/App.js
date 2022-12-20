import "./App.css";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  background-image: url("http://osp.stat.gov.lt//image/journal/article?img_id=10376511&t=1666179659281");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    height: 100%;
    padding-bottom: 40px;
  }
`;

const Wrapper = styled.div`
  height: 80%;
  width: 90%;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Meet = styled.div`
  color: #a99a9a;
  font-size: 40px;
  font-weight: 600;
  padding: 40px;
  padding-bottom: 0;
`;

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  @media (max-width: 768px) {
    padding-bottom: 20px;
    padding-top: 20px;
  }
`;
const Name = styled.div`
  color: white;
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 10px;
`;
const Info = styled.div`
  color: white;
  font-size: 18px;
`;
const Right = styled.div`
  height: 500px;
  flex: 1;
  background-color: #ffffffab;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Registration = styled.div`
  color: white;
  font-size: 30px;
  font-weight: 600;
  margin-top: 40px;
`;
const Form = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  width: 80%;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  border-style: none;
`;
const Button = styled.button`
  width: 30%;
  padding: 15px;
  cursor: pointer;
  margin-bottom: 30px;
`;
const Label = styled.label`
  width: 80%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: 20px;
`;

function App() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Meet>Atvirų duomenų klubas 2-asis susitikimas</Meet>
          <DataContainer>
            <Name>DATA IR LAIKAS</Name>
            <Info>
              Ketvirtadienis, Spalio 20, 2022 10:00 - 12:00 Trukmė: 2 val.
            </Info>
          </DataContainer>
          <DataContainer>
            <Name>VIETA</Name>
            <Info>Vilnius Gedimino pr. 29 Didžioji posėdžių salė (2a)</Info>
          </DataContainer>
          <DataContainer>
            <Name>KONTAKTAI</Name>
            <Info>tel. +370 689 76 725 info@stat.gov.lt</Info>
          </DataContainer>
        </Left>
        <Right>
          <Registration>Registracija:</Registration>
          <Form>
            <Input placeholder="Vardas:"></Input>
            <Input placeholder="Pavarde:"></Input>
            <Input placeholder="El-paštas:"></Input>
            <Input placeholder="Telefonas:"></Input>
            <Input placeholder="Miestas:"></Input>
            <Label>
              Aš sutinku su paslaugų tiekimo sąligomis:
              <input type="checkbox" placeholder="Miestas:" />
            </Label>

            <Button>Registruotis</Button>
          </Form>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default App;
