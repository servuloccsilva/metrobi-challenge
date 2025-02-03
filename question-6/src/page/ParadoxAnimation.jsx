import { PawPrint, PersonSimpleRun } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import * as S from "./styled";

// 6) Write the code that animates “Zeno's Paradox of Achilles and the Tortoise” on an
// interface(we would like to see the paradox demonstrated).

const ParadoxAnimation = () => {
  const [achillesPosition, setAchillesPosition] = useState(0);
  const [tortoisePosition, setTortoisePosition] = useState(200);
  const [isRunning, setIsRunning] = useState(false);
  const achillesSpeed = 5;
  const tortoiseSpeed = 3;
  const maxDistance = 900;

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setAchillesPosition((prev) =>
        Math.min(prev + achillesSpeed, maxDistance)
      );
      setTortoisePosition((prev) =>
        Math.min(prev + tortoiseSpeed, maxDistance)
      );
    }, 30);

    return () => clearInterval(interval);
  }, [isRunning]);

  const startExperiment = () => {
    setAchillesPosition(0);
    setTortoisePosition(200);
    setIsRunning(true);
  };

  const isFinished =
    achillesPosition >= maxDistance && tortoisePosition >= maxDistance;

  return (
    <S.Wrapper>
      <S.MainContainer>
        <S.Character
          style={{
            left: `${achillesPosition}px`,
          }}
        >
          <PersonSimpleRun size={32} />
        </S.Character>
        <S.Character
          style={{
            left: `${tortoisePosition}px`,
          }}
        >
          <PawPrint size={32} />
        </S.Character>
      </S.MainContainer>
      <S.ButtonContainer>
        <S.Button onClick={startExperiment} disabled={isRunning && !isFinished}>
          {isFinished ? "Restart" : "Start Experiment"}
        </S.Button>
      </S.ButtonContainer>
    </S.Wrapper>
  );
};

export default ParadoxAnimation;
