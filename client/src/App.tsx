import React, { useEffect } from "react";
import styled from "styled-components";
import io from "socket.io-client";
import { Button } from "Button";
import { party } from "scripts";

import gitGubIcon from "./gitGubIcon.svg";

let socket: SocketIOClient.Socket;

const ENDPOINT = "https://react-party.herokuapp.com/";

const App: React.FC = () => {
  useEffect(() => {
    socket = io(ENDPOINT);
    socket.on("party", actionNumber => party(actionNumber));
    return () => socket.off("party");
  }, []);

  const startParty = () => socket.emit("party", party());

  return (
    <>
      <Link href="https://github.com/snelsi/react-party" target="_blank" rel="noopener">
        <img src={gitGubIcon} alt="gitHub" />
      </Link>
      <PartyButton onClick={startParty}>
        <span role="img" aria-label="Let`s party!">
          🎉
        </span>
      </PartyButton>
    </>
  );
};

const PartyButton = styled(Button)`
  position: fixed;
  bottom: 12vh;
  margin: 0 auto;
  left: 0;
  right: 0;
  & > span {
    user-select: none;
  }
`;

const Link = styled.a`
  --size: 24px;
  border-radius: 50%;
  position: fixed;
  height: var(--size);
  width: var(--size);
  top: var(--size);
  right: var(--size);
  opacity: 0.3;
  outline: none;

  transition: all 0.15s ease;

  &:hover,
  &:focus {
    opacity: 1;
    transform: scale(1.05);
  }

  &:focus {
    box-shadow: 0 0 1px 2px #4589ff;
  }
  &:active {
    opacity: 0.6;
    transform: scale(0.95);
  }
  & > img {
    display: block;
    height: 100%;
    width: 100%;
  }
`;
export default App;
