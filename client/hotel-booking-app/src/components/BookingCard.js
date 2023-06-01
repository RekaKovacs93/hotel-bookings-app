import {deleteBooking, updateCheckIn} from "../BookingsServices"
import {Switch} from "antd"

const BookingCard = ({booking, removeBooking, updateBooking}) => {

    // const [checked, setChecked] = useState(false)

    
    const handleDelete = () => {
        deleteBooking(booking._id).then(() => {
            removeBooking(booking._id) 
        })
    }

    const handleCheckIn = () => {
        
        updateBooking({
            _id: booking._id,
            name: booking.name,
            email: booking.email,
            checkedIn: !booking.checkedIn
          })
        
    
        console.log(booking)
    }
    return (
        <>
            <h3>{booking.name}</h3>
            <p>{booking.email}</p>
            {/* <p>{booking.checkedIn ? "Checked In" : "Not"}</p> */}
            Check In: <Switch size="small" checked={booking.checkedIn}  onChange={handleCheckIn} />
            <button onClick={handleDelete}>X</button>
        </>
    )
}

export default BookingCard