import {deleteBooking} from "../BookingsServices"

const BookingCard = ({booking, removeBooking}) => {
    const handleDelete = () => {
        deleteBooking(booking._id).then(() => {
            removeBooking(booking._id)
        })
    }
    return (
        <>
            <h3>{booking.name}</h3>
            <p>{booking.email}</p>
            <p>{booking.checkedIn ? "Checked In" : "Not"}</p>
            <button onClick={handleDelete}>X</button>
        </>
    )
}

export default BookingCard