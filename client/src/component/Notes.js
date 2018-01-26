import React, { Component } from "react";
import { Paper, FlatButton } from 'material-ui';
import { connect } from 'react-redux';
import * as actions from '../actions';



const style = {
    cards: {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gridGap: '8px'
    },

    card: {
        width: '250px',
        padding: '15px'
    },

    textArea: {
        width: '210px',
        border: 'none',
        outline: 'none',
        overflow: 'hidden',
        fontFamily: 'Roboto',
        fontSize: '1.2em',
        fontWeigth: '300'
    }
}

class Note extends Component {
    render() {
        console.log(this.props.value);
        return (
            <div style={style.cards}>
                <Paper style={style.card} zDepth={1}>
                <textarea 
                value={this.props.value}
                style={style.textArea}
                onChange={(event) => {
                    this.props.currentValue(event.target.value);
                    console.log(this.props.value);
                }} 
                />
                <FlatButton label="Edit" 
                />
                <FlatButton label="Delete"  />
                </Paper>
            </div>
        )
    }
}

function mapStateToProps({ currentValue }) {
    return { currentValue };
}

export default connect(mapStateToProps, actions)(Note);