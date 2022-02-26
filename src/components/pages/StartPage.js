import styled from "styled-components";
import StartGirl from "../svgIcons/StartGirl";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  margin: auto;
`;
export const Text = styled.div`
  font-weight: normal;
  font-size: 24px;
  text-align: center;
  margin-bottom: 46px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const Input = styled.input`
  border: none;
  border-bottom: 1px solid #000000;
  text-align: center;
  margin-bottom: 41px;
  &:focus {
    outline: none;
    border-bottom: 1px solid blue;
  }
`;
const Button = styled.button`
  text-align: center;
  width: 182px;
  background-color: ${(props) => (props.active ? "#6a6c96" : "#d6d7f0")};
  color: #fff;
  border: none;
  border-radius: 14px;
  padding: 7px 48px;
  margin-top: 70px;
`;
const StartPage = ({ handleName }) => {
  const navigate = useNavigate();
  const [active, setIsActive] = useState(false);
  return (
    <Container>
      <Text>
        Enough Work!
        <br />
        Let’s have a me time!
      </Text>
      <Input
        placeholder="Enter Your Name"
        onChange={(e) => handleName(e.target.value)}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
      />
      <StartGirl height="364px" width="198px" />
      <Button active={active} onClick={() => navigate("/category")}>
        Let's Go
      </Button>
    </Container>
  );
};
export default StartPage;
