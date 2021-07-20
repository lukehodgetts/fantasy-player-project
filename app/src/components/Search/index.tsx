import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

interface Props {
  playerData: any;
  setSelectedPlayer: (player: any) => void;
  selectedPlayer: any;
}

const Search: React.FC<Props> = ({
  playerData,
  setSelectedPlayer,
  selectedPlayer,
}) => {
  return (
    <Autocomplete
      options={playerData}
      getOptionLabel={(playerData: any) =>
        `${playerData.firstName} ${playerData.lastName}`
      }
      renderInput={(params) => <TextField {...params} />}
      onChange={(event, value) => setSelectedPlayer(value)}
      value={selectedPlayer}
    />
  );
};

export default Search;
