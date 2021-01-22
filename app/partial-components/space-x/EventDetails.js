import React from 'react'
import PropTypes from 'prop-types'

import './EventDetails.scss'

const EventDetails = (props) => {
  const event = props.eventData
  return (event
    ? <>
      <h3>{event.title}</h3>
      <div className={`flight-number ${!event.flight_number && 'none'}`}>
        {event.flight_number 
          ? <>Flight Number: {event.flight_number}</>
          : <>No Flight Number</>
        }
      </div>
      <p className={'event-details'}>{event.details}</p>
      <ul className={'event-links'}>
        <li>
          <a className={'text_link'} href={event.links.article}>SpaceX Article</a>
        </li>
        <li>
          <a className={'text_link'} href={event.links.wikipedia}>Wiki Article</a>
        </li>
      </ul>
    </>
    : <h3>.. select and event!</h3>
  )
}

export default EventDetails

EventDetails.propTypes = {
  eventData: PropTypes.object
}