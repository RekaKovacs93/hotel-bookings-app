import React, { useEffect, useState } from "react"
import BookingsForm from "../components/BookingsForm"
import BookingsGrid from "../components/BookingsGrid"
import { getBookings } from "../BookingsServices"

const Container = function() {

  const [bookings, setBookings] = useState([])
  // const [checked, setChecked] = useState(false)

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

  const updateCheckIn = (id) => {
    const updatedBooking = bookings.filter((booking) => booking._id === id)[0]
    console.log(updatedBooking)
    // data = !updatedBooking.checkedIn
    // const updatedBookingList = bookings.filter(booking => booking._id !== id)
    // setBookings([...updatedBookingList, updatedBooking])
  }
    return (
    <>
    <BookingsForm addBooking={addBooking} />
    <BookingsGrid bookings={bookings} removeBooking={removeBooking} updateCheckIn={updateCheckIn} />
  </>
    )
}

export default Container