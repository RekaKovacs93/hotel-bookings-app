import BookingCard from "./BookingCard"

const BookingsGrid = function ({bookings, removeBooking,  updateBooking}) {
    const bookingsList = bookings.map((booking) => {
        return <BookingCard
            booking={booking}
            key ={booking._id}
            removeBooking={removeBooking}
            checked={booking.checkedIn}
            updateBooking={updateBooking}
            />
    })
    return (
<>
{bookingsList}
</>
    )
}

export default BookingsGrid

            