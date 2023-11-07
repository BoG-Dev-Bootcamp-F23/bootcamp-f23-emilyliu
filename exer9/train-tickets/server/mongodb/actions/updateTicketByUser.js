import connectDB from "../index.js";
import Ticket from "../models/Ticket.js";
import User from "../models/User.js"

export default async function updateTicket(data) {

    try {
        await connectDB();
        const { ticketId, userId } = data;
        const validUser = await User.findById(userId);
        if (validUser === null) {
            throw new Error("User Not Found")
        }
        const dbResponse = await Ticket.findByIdAndUpdate(ticketId, { userId: userId })
        if (dbResponse === null) {
            throw new Error("Ticket Not Found")
        }
        return true;
    } catch (e) {
        throw new Error(e)
    }
}