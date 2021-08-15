/* eslint-disable import/extensions */
import React from 'react'
import {
  Modal, Backdrop, Fade, Button, TextField
} from '@material-ui/core';
import useStyle from './style';
import { ModalProps } from './interface';

const ModalBox = ({
  handleOnSubmit, postOnPlaylist, setOnPlaylist
}: ModalProps) => {
  const classes = useStyle();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    setOnPlaylist({ ...postOnPlaylist, [name]: value })
  }
  return (
    <div>
      <Button color="default" onClick={handleOpen}>
        Create Playlist
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <TextField
              label="Title"
              placeholder="Input Title"
              multiline
              variant="outlined"
              name="name"
              value={postOnPlaylist.name}
              onChange={handleOnChange}
            />
            <TextField
              label="Description"
              placeholder="Input Desc"
              multiline
              rows={4}
              name="description"
              variant="outlined"
              value={postOnPlaylist.description}
              onChange={handleOnChange}
            />
            <Button onClick={handleOnSubmit} color="primary" variant="contained">Create</Button>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}

export default ModalBox;
