import {useState} from "react";
import {postBooking} from "../BookingsServices"


const BookingsForm = ({addBooking}) => {

    const [formData, setFormData] = useState ({
        name: "",
        email: "",
        checkedIn: false
    })

    const onChange = (event) => {
        const newData = Object.assign({}, formData)
        newData[event.target.name] =event.target.value
        setFormData(newData)
    }
    const onSubmit = (event) => {
        event.preventDefault()
        postBooking(formData).then((data) => {
            addBooking(data)
        })
        setFormData({
            name: "",
            email: "",
            checkedIn: false
        })
    }
    return (
        <form onSubmit={onSubmit} id="bookings-form">
            <h2>Add a Booking</h2>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                onChange={onChange}
                type="text"
                id="name"
                name="name"
                value={formData.name}
                required
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                onChange={onChange}
                type="text"
                id="email"
                name="email"
                value={formData.email}
                />                
            </div>

            <input type="submit" value="Save" id="save"/>
        </form>
    )
}

export default BookingsForm

