import React, { Component } from 'react';
import { TextField, RaisedButton } from 'material-ui';

const style = {
    textField: {
        margin: '0 auto',
        textAlign: 'center'
    },

    button: {
        width: '100px',
        margin: '0 auto'
    }
}


class CreateNote extends Component {
    render() {
        return (
            <div style={{ display: 'grid'}}>
              <TextField 
              style={style.textField}
                hintText="The the story of your life starts here"
                multiLine={true}
                rows={2}
                rowsMax={5}
              />
              <RaisedButton
              style={style.button}
              label="Save Me" />   
            </div>
        )
    }
}

export default CreateNote;