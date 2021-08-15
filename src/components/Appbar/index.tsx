/* eslint-disable react/require-default-props */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import React, { useState } from 'react'
import clsx from 'clsx'
import {
  AppBar,
  CssBaseline,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
  Divider,
  ListItem,
  ListItemText,
  ListItemIcon,
  List
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HomeIcon from '@material-ui/icons/Home';
import MusicIcon from '@material-ui/icons/MusicNote';
import CreateIcon from '@material-ui/icons/Create';
import { Link, } from 'react-router-dom';
import useStyles from './style';
import Profiler from '../Avatar';

type Props = {
  modal?: JSX.Element | JSX.Element | string | string[];
  search?: JSX.Element | JSX.Element | string | string[];
  children?: JSX.Element | JSX.Element | string | string[];
}
const MenuAppBar = ({ children, search, modal }: Props) => {
  const style = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const itemList = [
    {
      id: 1,
      text: 'Home',
      icon: <HomeIcon />,
      link: '/home'
    },
    {
      id: 2,
      text: 'Top release',
      icon: <MusicIcon />,
      link: '/top-release'
    },
    {
      id: 3,
      text: 'Create Playlist',
      icon: <CreateIcon />,
      link: '/create-playlist'
    }
  ]
  return (
    <div className={style.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(style.appBar, {
          [style.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(style.menuButton, open && style.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Spotify Web API
          </Typography>
          {search}
          {modal}
          <Profiler />
        </Toolbar>
      </AppBar>
      <Drawer
        className={style.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: style.drawerPaper
        }}
      >
        <div className={style.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {itemList.map((text) => (
            <ListItem button key={text.id}>
              <Link className={style.itemList} to={text.link}>
                <ListItemIcon>{text.icon}</ListItemIcon>
                <ListItemText primary={text.text} />
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(style.content, {
          [style.contentShift]: open,
        })}
      >
        <div className={style.drawerHeader} />
        {children}
      </main>
    </div>
  );
};

export default MenuAppBar;
