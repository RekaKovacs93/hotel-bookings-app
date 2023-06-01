import React, { useEffect, useState } from "react"
import BookingsForm from "../components/BookingsForm"
import BookingsGrid from "../components/BookingsGrid"
import { getBookings, updateCheckIn } from "../BookingsServices"

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

  const updateBooking = (updatedBooking) => {
    // req to server to update booking in DB
    updateCheckIn(updatedBooking);

    // update locally
    const updatedBookingIndex = bookings.findIndex(booking => booking._id === updatedBooking._id);
    const updatedBookings = [...bookings];
    updatedBookings[updatedBookingIndex] = updatedBooking;
    setBookings(updatedBookings);
    console.log(updatedBooking)
  };

    // const updatedBooking = bookings.filter((booking) => booking._id === id)[0]
    // console.log(updatedBooking)
    // // data = !updatedBooking.checkedIn
    // // const updatedBookingList = bookings.filter(booking => booking._id !== id)
    // // setBookings([...updatedBookingList, updatedBooking])
  
    return (
    <>
    <BookingsForm addBooking={addBooking} />
    <BookingsGrid bookings={bookings} removeBooking={removeBooking} updateBooking={updateBooking} />
  </>
    )
}

export default Container