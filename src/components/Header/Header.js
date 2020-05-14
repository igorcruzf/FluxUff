import React, {Component} from 'react';
import Box from '@material-ui/core/Box';

class Header extends Component {
    constructor(props){
        super(props)
        this.state = props
    }

    render() {
        return <Box display="flex" margin="0 auto" justifyContent="center" width='65%' border={1}>
        <h1>{this.state.classProgram} - {this.state.workload}</h1>
    </Box>
    }
}

export default Header;