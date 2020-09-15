import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '60%',
        height: '100%',
        margin: '0 auto',
        '@media (max-width: 375px)': {
            width: '90%',
            },
    },
    media: {
        height: 0,
        paddingTop: '80%',
        backgroundSize: 'contain',
    }
}))