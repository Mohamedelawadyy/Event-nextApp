'use client'

import React, { Fragment } from 'react'
import { getAllEvents } from '../../../dummy-data'
import EventList from '../components/EventList'
import EventsSearch from './eventsSearch'
import { useRouter } from 'next/navigation'

export default function AllEvents() {
  const router=useRouter()
  const events = getAllEvents()


  function findEventHandler(year,month){
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath)
  }
  return (
    <Fragment>
      <EventsSearch onSearch={findEventHandler}/>
      <EventList items={events}/>
    </Fragment>
  )
}
