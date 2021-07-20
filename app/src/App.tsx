import React, { useState } from "react";
import useAxios from "axios-hooks";

import { Wrapper, Header, Body } from "./app.styles";
import Player from "./components/Player";
import Search from "./components/Search";

function App() {
  const [{ data, loading, error }] = useAxios({
    url: `http://localhost:3002/players`,
  });

  const [selectedPlayer, setSelectedPlayer] = useState({
    firstName: "",
    lastName: "",
  });

  const players = data || [];
  console.log(players);
  console.log(data);

  if (loading) return <h1>...</h1>;

  return (
    <Wrapper>
      <Header>
        <Search
          playerData={players}
          setSelectedPlayer={(player: any) => {
            setSelectedPlayer(player);
          }}
          selectedPlayer={selectedPlayer}
        />
      </Header>
      <Body>
        {/* <Player
          firstName={data.firstName}
          lastName={data.lastName}
          webName={data.webName}
          totalPoints={data.totalPoints}
          lastMatchPoints={data.lastMatchPoints}
          cost={data.cost}
          photo={data.photo}
          team={data.team.name}
        /> */}
      </Body>
    </Wrapper>
  );
}

export default App;
