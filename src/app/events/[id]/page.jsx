"use client"
import React, { Fragment } from 'react'
import { getEventById } from '../../../../dummy-data';
import { useParams } from 'next/navigation';
import EventSummary from '@/app/components/event-detail/event-summary';
import EventLogistics from '@/app/components/event-detail/event-logistics';
import EventContent from '@/app/components/event-detail/event-content';
import ErrorAlert from '@/app/components/ui/ErrorAlert';

export default function EventDetailPage() {
  const param= useParams()
  
  const eventId=param.id
  const event=getEventById(eventId)
  if (!event) {
    return <ErrorAlert><p>No Event Found</p></ErrorAlert>
  }
  return (
    <Fragment>
      <EventSummary title={event.title}/>
      <EventLogistics date={ event.date} address={event.location} image={event.image} imageAlt={event.title}/>
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  )
}
