import React, {Component} from 'react';
import Box from '@material-ui/core/Box';

import './Header.css'

class Header extends Component {
    render() {
        return <Box display="flex"  margin="0 auto" justifyContent="center" width='65%'  border={1}>
        <h1>Bacharelado em Ciência da Computação - 3200 horas</h1>
    </Box>
    }
}

export default Header;