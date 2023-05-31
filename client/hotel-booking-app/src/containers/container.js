import React, { useEffect, useState } from "react"
import BookingsForm from "../components/BookingsForm"
import BookingsGrid from "../components/BookingsGrid"
import { getBookings } from "../BookingsServices"

const Container = function() {

  const [bookings, setBookings] = useState([])

  useEffect (() => {
    getBookings().then((allBookings) => {
      setBookings(allBookings)
    })
  }, [])

  const addBooking = (booking) => {
    setBookings([...bookings, booking])
  }

  const removeBooking = (id) => {
    const bookingsToKeep = bookings.filter(booking => booking._id !== id)
    setBookings(bookingsToKeep)
  }
    return (
    <>
    <BookingsForm addBooking={addBooking} />
    <BookingsGrid bookings={bookings} removeBooking={removeBooking} />
  </>
    )
}

export default Container