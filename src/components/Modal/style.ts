import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme: Theme) => createStyles({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    gap: '10px',
    borderRadius: '8px'
  },
}))
export default useStyle
