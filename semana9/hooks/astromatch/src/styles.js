import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
    card: {
      boxSizing: 'border-box',
      padding: '20px',
      '@media (max-width: 375px)': {
        padding: '10px 0px',
        },
    },
    box: {
      margin: '0 auto',
      width: '60%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative',
      padding: '10px 10px',
      flexShrink: 0,
      '@media (max-width: 375px)': {
        width: '80%',
        margin: '0px auto',
        padding: '10px 0px',
        },
    },
    typography: {
      height: '100%',
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      '@media (max-width: 400px)': {
        fontSize: '1.75rem'
        }
    }
}));

