import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import ContentEditable from "react-contenteditable";
//import { makeStyles } from '@material-ui/core/styles';

/*const useStyles = makeStyles({
    box: {
      display: 'flex',
      margin: '0 auto',
      justifyContent: 'center',
      width: '65%'
    }
  });*/

const titulo = {
  margin: "0 10px 0 10px",
  width: "100%",
};

function Header(props) {
  let [text, setText] = useState(props.classProgram + " - " + props.workload);

  function handleChange(evt) {
    setText(evt.target.value);
  }

  return (
    <div>
      <Box
        border={1}
        display="flex"
        marginBottom="60px"
        margin="0 auto"
        justifyContent="center"
        maxWidth="fit-content"
        minWidth="20%"
      >
        <div style={titulo}>
          <ContentEditable
            tagName="h1"
            html={text} // innerHTML of the editable div
            disabled={false} // use true to disable edition
            onChange={handleChange} // handle innerHTML
          />
        </div>
      </Box>
    </div>
  );
}

export default Header;
