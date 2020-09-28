import React from 'react';
import { Button, Card, CardActions, CardContent, IconButton, makeStyles, Typography } from '@material-ui/core';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import AddBoxIcon from '@material-ui/icons/AddBox';

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: '10px',
    },
    action: {
        display: 'flex',
        justifyContent: 'space-between',
    },
}))

const PostCard = (props) => {
    const classes = useStyles();

    return ( 
        <Card className={classes.root}>
            <CardContent>
                <Typography color="secondary" gutterBottom>
                    props-nome do usuário
                </Typography>
                <Typography>
                    props-título do post
                </Typography>
                <Typography variant="body2" component="p">
                    props-texto do post
                </Typography>
            </CardContent>
            <CardActions className={classes.action}>
                <div>
                    <IconButton aria-label="voto positivo">
                        <AddBoxIcon/>
                    </IconButton>
                    <IconButton aria-label="voto negativo">
                        <IndeterminateCheckBoxIcon/>
                    </IconButton>
                </div>
                <Button>comentários</Button>
            </CardActions>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    props-comentário
                </Typography>
            </CardContent>
        </Card>
     );
}
 
export default PostCard;