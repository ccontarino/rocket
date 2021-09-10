import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, Typography } from '@material-ui/core';


const styles = {
    rocketContainer: {
        margin: 20,
        cursor: 'pointer',
        border: 'double',
        maxWidth: 800,
    },
    rocketTitle: {
        padding: 10,
    },
    launcheDetail: {
        width: 500
    }
}
function LaunchesList({ launches }) {
    const onClick =(launch)=>{
    window.location.href=`/${launch.flight_number}/launch-details`
    }
    return (launches.map((launch) =>
        <div onClick={onClick(launch)} style={styles.rocketContainer} key={launches.id}>
            <div style={styles.rocketTitle} >
                <Typography variant='h5'>{launch.mission_name}</Typography>
                <div style={styles.launcheDetail}>
                    <Typography >{launch.details}</Typography>
                </div>
            </div>
        </div>)
    )
}

LaunchesList.propTypes = {
    launches: PropTypes.array,
}

export default LaunchesList
