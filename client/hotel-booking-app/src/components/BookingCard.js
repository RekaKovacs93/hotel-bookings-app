import {deleteBooking} from "../BookingsServices"
import {Switch} from "antd"

const BookingCard = ({booking, removeBooking, updateCheckIn, checked}) => {

    const handleDelete = () => {
        deleteBooking(booking._id).then(() => {
            removeBooking(booking._id)
        })
    }
    return (
        <>
            <h3>{booking.name}</h3>
            <p>{booking.email}</p>
            {/* <p>{booking.checkedIn ? "Checked In" : "Not"}</p> */}
            Check In: <Switch size="small"  onChange={updateCheckIn} checked={checked} />
            <button onClick={handleDelete}>X</button>
        </>
    )
}

export default BookingCard