import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 2,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(2),
  },
  root: {
    flexGrow: 2,
  },
}));
