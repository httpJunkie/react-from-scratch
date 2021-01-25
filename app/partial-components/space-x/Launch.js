import React, { useState, useEffect} from 'react'
import PropTypes from 'prop-types'

const getSpaceXLaunchNext = () => {Launch.js
  return fetch('https://api.spacexdata.com/v3/launches/next')
    .then((res) => res.json())
}

const getSpaceXLaunch = (flight) => {
  return fetch(`https://api.spacexdata.com/v3/launches/${flight}`)
    .then((res) => res.json())
}

const Launch = ({next, flight}) => {
  const [launch, setLaunch] = useState(null)
  
  useEffect(() => {
    if (next) {
      getSpaceXLaunchNext()
        .then(setLaunch)
    } else {
      getSpaceXLaunch(flight)
        .then(setLaunch)
    }
  }, [flight, next])
  
  if (launch === null) {
    return <p>Loading launch...</p>
  }

  return (
    <div className='view-checklist'>
      <h2 className={'launch-name'}>{launch.mission_name}</h2>
      <p><strong>Flight Number</strong> {launch.flight_number}</p>
      <p><strong>Launch Site</strong> {launch.launch_site.site_name_long}</p>
    </div>
  )
}

export default Launch

Launch.propTypes = {
  flight: PropTypes.number,
  next: PropTypes.bool
}