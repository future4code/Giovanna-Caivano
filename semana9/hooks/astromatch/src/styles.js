import { makeStyles, createMuiTheme, responsiveFontSizes } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
    container: {
      padding: '0',
    },
    card: {
      boxSizing: 'border-box',
      padding: '20px',
      '@media (max-width: 375px)': {
        padding: '10px 0px',
        },
    },
    box: {
      margin: '0 auto',
      width: '50%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative',
      padding: '10px 10px',
      flexShrink: 0,
      '@media (max-width: 375px)': {
        width: '90%',
        margin: '0px auto',
        padding: '10px 0px',
        },
    },
    button: {
      padding: '0',
    }
}));

export let theme = createMuiTheme();

theme = responsiveFontSizes(theme);

