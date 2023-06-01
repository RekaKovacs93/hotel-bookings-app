import BookingCard from "./BookingCard"

const BookingsGrid = function ({bookings, removeBooking, checked, updateCheckIn}) {
    const bookingsList = bookings.map((booking) => {
        return <BookingCard
            booking={booking}
            key ={booking._id}
            removeBooking={removeBooking}
            checked={booking.checkedIn}
            updateCheckIn={updateCheckIn}
            />
    })
    return (
<>
{bookingsList}
</>
    )
}

export default BookingsGrid

            