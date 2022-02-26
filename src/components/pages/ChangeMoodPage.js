import Angry from "../svgIcons/Angry";
import Happy from "../svgIcons/Happy";
import Lonely from "../svgIcons/Lonely";
import Sad from "../svgIcons/Sad";
import Tired from "../svgIcons/Tired";
import styled from "styled-components";

import { useParams } from "react-router-dom";
import Nervous from "../svgIcons/Nervous";
import { Title } from "./CategoryPage";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const categoryObject = [
  {
    name: "angry",
    value: <Angry width="198px" height="364px" />,
    text: "Accept and embrace all experiences!",
    url: " https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3",
  },
  {
    name: "happy",
    value: <Happy width="198px" height="364px" />,
    text: "Think big, live simply!",
    url: " https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3",
  },
  {
    name: "lonely",
    value: <Lonely width="198px" height="364px" />,
    text: "Because You Can!",
    url: " https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3",
  },
  {
    name: "nervous",
    value: <Nervous width="198px" height="364px" />,
    text: "Continuous improvement is better than delayed perfection!",
    url: " https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3",
  },
  {
    name: "sad",
    value: <Sad width="198px" height="364px" />,
    text: "It always seems impossible until it's done!",
    url: " https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3",
  },
  {
    name: "tired",
    value: <Tired width="198px" height="364px" />,
    text: "Run Your Own Race!",
    url: " https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3",
  },
];
const ContainerBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  margin: auto;
  border-top: 57px solid #ffccb4;
  border-bottom: 62px solid #4f3d74;
  box-sizing: border-box;
`;
const PhotoContainer = styled.div`
  background: rgba(196, 196, 196, 0.5);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 35%;
  text-align: center;
  border-radius: 100%;
  padding: 30px;
`;
const PlayButton = styled.button`
  background: #ffccb4;
  width: 70px;
  height: 70px;
  border-radius: 100%;
  border: none;
  margin-top: 45px;
  position: relative;
`;
const Play = styled.div`
  height: 0px;
  width: 0px;
  position: absolute;

  border: 12px solid #4f3d74;
  border-color: transparent transparent transparent black;
  left: 30px;
  top: 25px;
`;
const Pause = styled.div`
  position: absolute;
  left: 28px;
  top: 20px;
  font-size: 24px;
  color: #4f3d74;
`;
const Back = styled.div`
  position: absolute;
  top: 15px;
  left: 30px;
  width: 25px;
  height: 25px;
  border-left: 2px solid black;
  border-bottom: 2px solid black;

  transform: rotate(45deg);
`;
function ButtonSong({ url }) {
  const [start, setStart] = useState(false);
  const audio = new Audio(url);

  const handleSound = () => {
    setStart(!start);
    start ? audio.play() : audio.pause();
  };

  return (
    <div>
      <PlayButton onClick={() => handleSound()}>
        {!start ? <Play /> : <Pause>||</Pause>}
      </PlayButton>
    </div>
  );
}
const ChangeMoodPage = () => {
  const { mood } = useParams();
  const navigate = useNavigate();
  return categoryObject.find((item) => item.name === mood) ? (
    <ContainerBox>
      <Back onClick={() => navigate(-1)} />
      <Title>{categoryObject.find((item) => item.name === mood).text}</Title>
      <PhotoContainer>
        {categoryObject.find((item) => item.name === mood).value}
      </PhotoContainer>
      <ButtonSong url={categoryObject.find((item) => item.name === mood).url} />
    </ContainerBox>
  ) : (
    "404"
  );
};
export default ChangeMoodPage;
