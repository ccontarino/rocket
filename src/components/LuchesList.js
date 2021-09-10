import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, Typography } from '@material-ui/core';

const useStyle = () => makeStyles({
    rocketContainer: {
        backgroundColor: 'white',
    },
    rocketTitle: {
        padding: 10,
    },
});
function LaunchesList(props) {
    const classes = useStyle();

    return (
        <div className={classes.rocketContainer}>
            <div className={classes.rocketTitle}>
                <Typography>Launches #3</Typography>
                <Typography>description</Typography>
            </div>
        </div>
    )
}

LaunchesList.propTypes = {
    rocketList: PropTypes.array
}

export default LaunchesList
