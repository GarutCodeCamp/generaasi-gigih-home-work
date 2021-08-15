/* eslint-disable import/extensions */
import React from 'react'
import { Avatar } from '@material-ui/core'
import { createStyles, makeStyles, } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { RootState } from '../../Redux/store';

const useStyles = makeStyles(() => createStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flex: 0.1
  },
}))

const Profiler = () => {
  const style = useStyles();
  const profile = useSelector((state: RootState) => state.auth.user);

  return (
    <Link to="/profile" className={style.root}>
      <Avatar src={profile?.images[0].url} alt={profile?.country} />
    </Link>
  )
}

export default Profiler
