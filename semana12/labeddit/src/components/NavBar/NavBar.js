import React from 'react';
import { AppBar, Button, Toolbar } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { goToFeed } from '../../routes/Coordinator';
import { LogoImg } from './styled'
import SharkLogo from '../../assets/shark.png'

const NavBar = () => {
    const history = useHistory()

    return ( 
        <AppBar>
            <Toolbar>
                <LogoImg src={SharkLogo}/>
                <Button onClick={() => goToFeed(history)}>LabEddit</Button>
            </Toolbar>
        </AppBar>
     );
}
 
export default NavBar;