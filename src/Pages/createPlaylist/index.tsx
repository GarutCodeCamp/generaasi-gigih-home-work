/* eslint-disable import/extensions */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { CircularProgress, Container } from '@material-ui/core';
import MenuAppBar from '../../components/Appbar';
import Search from '../../components/Search';
import { RootState } from '../../Redux/store';
import { getSearchTracks, storeTracksToNewPlaylist, createNewPlaylist } from '../../utils/Spotify';
import { setTracks } from '../../Redux/playlists';
import ListingPlayList from './ListingItem';
import './index.css'
import ModalBox from '../../components/Modal';

const CreatePlaylist = () => {
  const [search, setSearch] = useState('')
  const [isLoading, setIsloading] = useState(false)
  const [selectedTracks, setSelectedTracks] = useState([]);
  const token = useSelector((token: RootState) => token.auth.accessToken);
  const userId = useSelector((userId: RootState) => userId.auth.user?.id);
  const traks = useSelector((traks: RootState) => traks.playlist.tracks);

  const [postPlaylist, setPosplaylist] = useState({
    name: '',
    description: ''
  });

  const dispatch = useDispatch()
  const handleButtonSearch = () => {
    setIsloading(true)
    if (search === '') {
      toast.error("Search Field Can't Empty")
    } else {
      getSearchTracks(search, token).then((data) => {
        dispatch(setTracks(data.tracks.items))
        setIsloading(false)
      });
      setSearch('')
    }
  }

  const handleOnSubmit = () => {
    if (selectedTracks.length <= 0) {
      toast.error('Choice Song')
    } else {
      createNewPlaylist(userId, token, postPlaylist)
        .then((newPlaylist) => storeTracksToNewPlaylist(newPlaylist.id, token, selectedTracks))
      toast.success('Create PlayList SuccessFully');
      setPosplaylist({
        name: '',
        description: ''
      });
      setSelectedTracks([])
    }
  }
  return (
    <>
      <MenuAppBar
        search={(
          <Search
            search={search}
            setSearch={setSearch}
            buttonHandleOnSearch={handleButtonSearch}
          />
      )}
        modal={(
          <ModalBox
            handleOnSubmit={handleOnSubmit}
            postOnPlaylist={postPlaylist}
            setOnPlaylist={setPosplaylist}
          />
)}
      >
        {isLoading ? (<CircularProgress className="loading" color="inherit" />) : (
          <Container className="grid">
            <ListingPlayList
              tracks={traks}
              selectedTracks={selectedTracks}
              setSelectedTracks={setSelectedTracks}
            />
          </Container>
        )}
      </MenuAppBar>
    </>
  );
}

export default CreatePlaylist;
