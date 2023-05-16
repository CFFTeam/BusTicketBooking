import mongoose from 'mongoose';

const ticketHistorySchema = new mongoose.Schema({
  ticket_id: String,
  date: String,
  time: String,
  departure_city: String,
  arrival_city: String,
  time_start: String,
  date_start: Date,
  depot_address: String,
  payment_method: String,
  number_of_seats: Number,
  chosen_seats: [String],
  total_price: Number,
  stage: String,
  guestInfo: {
    name: String,
    phoneNumber: String,
    email: String,
    age: String,
    city: String
  }
}, { toJSON: { virtuals: true } })

ticketHistorySchema.virtual('truncatedDate').get(function () {
  return new Date(this.date.split('/').reverse().join('-')).toISOString().substring(0, 10);
})

const TicketHistory = mongoose.model('ticket-histories', ticketHistorySchema);

export default TicketHistory;