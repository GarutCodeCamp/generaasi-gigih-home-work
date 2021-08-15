/* eslint-disable import/extensions */
/* eslint-disable quotes */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import RowPlaylist from "../../components/Card";

const ListingPlayList = ({ tracks, selectedTracks, setSelectedTracks }) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  tracks.map((track, id) => (
    <RowPlaylist
      key={track.id}
      track={track}
      id={id}
      selectedTracks={selectedTracks}
      setSelectedTracks={setSelectedTracks}
    />
  ));

export default ListingPlayList;
