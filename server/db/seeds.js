use guests
db.dropDatabase()

db.bookings.insertMany(
    [
        {
          "name": "John Doe",
          "email": "johndoe@example.com",
          "checkedIn": true
        },
        {
          "name": "Jane Smith",
          "email": "janesmith@example.com",
          "checkedIn": false
        },
        {
          "name": "Alex Johnson",
          "email": "alexjohnson@example.com",
          "checkedIn": true
        },
        {
          "name": "Sarah Williams",
          "email": "sarahwilliams@example.com",
          "checkedIn": true
        },
        {
          "name": "Michael Brown",
          "email": "michaelbrown@example.com",
          "checkedIn": false
        }
      ]      
)