import React, { useEffect } from "react";
import styled from "styled-components";
import io from "socket.io-client";
import { Button } from "Button";
import { party } from "scripts";

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
    <PartyButton onClick={startParty}>
      <span role="img" aria-label="Let`s party!">
        🎉
      </span>
    </PartyButton>
  );
};

const PartyButton = styled(Button)`
  position: fixed;
  bottom: 12vh;
  margin: 0 auto;
  left: 0;
  right: 0;
`;

export default App;
