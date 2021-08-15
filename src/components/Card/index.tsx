/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import { makeStyles, } from '@material-ui/core/styles';
import {
  Card, CardActionArea, CardActions, CardContent, Button, CardMedia, Typography
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
})

interface Props {
    track: {
        album: {
            images: {
                [index: number]: {
                    url: string;
                }
            };
            release_date: string;
        };
        name: string;
        artists: {
            [index: number]: {
                name: string;
            };
        };
        duration_ms: number;
        uri: string;
    }
    id: string;
    selectedTracks: Array<string>;
    setSelectedTracks: (query: string[])=> void
}

const RowPlaylist = ({
  track, id, selectedTracks, setSelectedTracks
}: Props) => {
  const style = useStyles()
  const handleButtonOnSelect = (id: string) : void => {
    const uri : string = id;
    if (selectedTracks.includes(uri)) {
      const newPlayList: string[] = selectedTracks.filter((track) => track !== uri)
      setSelectedTracks(newPlayList);
    } else {
      setSelectedTracks([...selectedTracks, uri]);
    }
  }
  return (
    <Card className={style.root}>
      <CardActionArea>
        <CardMedia
          className={style.media}
          image={track.album.images[0]?.url}
          title={track.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {track.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {track.artists[0]?.name}
            {' '}
            {track.album.release_date}
            {' '}

          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => handleButtonOnSelect(track?.uri)} size="small" color="primary">
            {selectedTracks.includes(track.uri) ? 'Unselect' : 'Select'}
          </Button>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}

export default RowPlaylist;
