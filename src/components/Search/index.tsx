/* eslint-disable no-unused-vars */
import React from 'react'
import { TextField, Button } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { createStyles, makeStyles, } from '@material-ui/core/styles';

const useStyles = makeStyles(() => createStyles({
  root: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center'
  },
  input: {
    width: '50%',
  }
}))

interface Props{
  search: string;
  setSearch: (query: string) => void;
  buttonHandleOnSearch: React.MouseEventHandler<HTMLElement>;
}

const Search = ({ search, setSearch, buttonHandleOnSearch }: Props) => {
  const style = useStyles()
  return (
    <div className={style.root}>
      <TextField className={style.input} value={search} id="input-search" onChange={(e) => setSearch(e.target.value)} label="Search ..." type="search" color="primary" variant="filled" />
      <Button onClick={buttonHandleOnSearch}>
        {' '}
        <SearchIcon />
        {' '}
      </Button>
    </div>
  )
}

export default Search;
