import React from 'react';
import { AppBar } from '@material-ui/core'
import { styles } from './style'

function Navbar() {
    return (
        <div>
            <AppBar elevation={1} style={styles.navbar} >
               <h1>My utility bills</h1>
            </AppBar>
        </div>
    );
}

export default Navbar;