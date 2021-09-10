import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { getLaunchesService } from '../services/launchesService'
import { getRocketsService } from '../services/rocketService';
import { convertArrayToObject } from '../utils/utils'
import LaunchesList from '../components/LuchesList';
function Launches(props) {

    const [launches, setLaunches] = useState(null)
    const [rocket, setRockets] = useState(null);


    const getLaunches = async () => {
        const launchesResponse = await getLaunchesService();
        // console.log(launchesResponse);
        setLaunches(launchesResponse);

    }
    const getRockets = async () => {
        const rocketsResponse = await getRocketsService();
        const ID = 'rocket_id';
        const rocketObject = convertArrayToObject(rocketsResponse, ID);
        setRockets(rocketObject)
    }

    const buildLaunchesWithAllDetails = (launches) => {
        return launches.map((launch) => {

            return {
                ...launch, rocket: { ...launch.rocket, ...rocket[launch.rocket_id] }

            }
        })
    }
    useEffect(() => {
        getLaunches();
        getRockets();
    }, [])


    return (
        launches && rocket && <LaunchesList launches={buildLaunchesWithAllDetails(launches)} />
    )
}

// Launches.propTypes = propTypes

export default Launches
