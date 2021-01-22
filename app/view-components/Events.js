import React, { useEffect, useState } from 'react'
import { Column, Row } from 'simple-flexbox'

import EventList from '../partial-components/space-x/EventList'
import EventDetails from '../partial-components/space-x/EventDetails'

import { useEventData } from '../partial-components/space-x/events-data'

const Events = ({match}) => {
  const event_id = match.params.event_id

  const { events, isLoading, error } = useEventData()

  useEffect(() => {
    document.title = 'SpaceX Historical Events'
  })

  if (!events && isLoading) {
    return <p>Loading Events Posts...</p>
  } else if (error) {
    return <p>{error.message}</p>
  }

  const event = events.find(event => {
    return event.id === Number(event_id)
  })

  return (
    <div className='view-events'>
      <Row horizontal='spaced'>
        <Column flexGrow={1} style={{width:'45%', padding: 5}}>
          <EventList eventData={events}/>
        </Column>
        <Column flexGrow={1} style={{width:'55%', padding: 5}}>
          <EventDetails eventData={event} />
        </Column>
      </Row>
    </div>
  )
}

export default Events