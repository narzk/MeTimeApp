import styled from "styled-components";
import { Container } from "./StartPage";
import angry from "../../assets/angry.png";
import happy from "../../assets/happy.png";
import lonely from "../../assets/lonely.png";
import nervous from "../../assets/nervous.png";
import sad from "../../assets/sad.png";
import tired from "../../assets/tired.png";
import { useNavigate } from "react-router-dom";

const MoodRow = styled.div`
  display: flex;
`;

const MoodBox = styled.div`
  display: flex;
  max-width: 158px;
  max-height: 161px;
  background: ${(props) => props.color};
  border-radius: 24px;
  padding: 32px;
  box-sizing: border-box;
  margin-bottom: 24px;
  & + & {
    margin-left: 24px;
  }
`;
const Img = styled.img`
  max-width: 50px;
  max-height: 50px;
`;
export const Title = styled.div`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 23px;
  text-align: center;
`;
const CategoryPage = ({ name }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <Title>
        {` Hi ${name}!`}
        <br />
        How do you feel today?
      </Title>
      <MoodRow>
        <MoodBox color="#ffefd6" onClick={() => navigate("/category/angry")}>
          <Img src={angry} />
        </MoodBox>
        <MoodBox color="#FFCCB4" onClick={() => navigate("/category/happy")}>
          <Img src={happy} />
        </MoodBox>
      </MoodRow>
      <MoodRow>
        <MoodBox color="#D5D7FF" onClick={() => navigate("/category/lonely")}>
          <Img src={lonely} />
        </MoodBox>
        <MoodBox color="#FFEFD6" onClick={() => navigate("/category/nervous")}>
          <Img src={nervous} />
        </MoodBox>
      </MoodRow>
      <MoodRow>
        <MoodBox color="#FFEFD6" onClick={() => navigate("/category/sad")}>
          <Img src={sad} />
        </MoodBox>
        <MoodBox color="#FAE4E5" onClick={() => navigate("/category/tired")}>
          <Img src={tired} />
        </MoodBox>
      </MoodRow>
    </Container>
  );
};
export default CategoryPage;
