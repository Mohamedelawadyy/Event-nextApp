import Image from 'next/image'
import React from 'react'
import classes from "./event-items.module.css"
import Button from './ui/Button'
import DateIcon from './icons/DateIcon'
import AddressIcon from './icons/AddressIcon'
import ArrowRightIcon from './icons/ArrowRightIcon'

export default function EventItem(props) {
  const {title,image,date,location,id}=props

const humanReadableDate=new Date(date).toLocaleDateString('en-US',{
  day:'numeric',month: "long",year:"numeric"  })
const formattedAddress=location.replace(', ','\n')

const exploreLink=`/events/${id}`

  return (
    <li className={classes.item}>
      <Image src={'/'+ image} alt={title} width={300} height={300}/>
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon/>
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon/>
            <address>
              {formattedAddress}
            </address>
          </div>
        </div>
      <div className={classes.actions}>
        <Button link={exploreLink}>
            <span>
              Explore event
            </span>
            <span className={classes.icon}><ArrowRightIcon/></span>
          </Button>
      </div>
      </div>
    </li>
  )
}
