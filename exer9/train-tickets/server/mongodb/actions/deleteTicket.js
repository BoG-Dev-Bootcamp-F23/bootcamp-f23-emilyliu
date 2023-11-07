import connectDB from "../index.js";
import Ticket from "../models/Ticket.js";

export default async function deleteTicket(data) {

    try {
        await connectDB();
        const identifier = data;
        const deleteJob = await Ticket.findByIdAndDelete(identifier);
        if (deleteJob === null) {
            throw new Error("Ticket Not Found")
        }
        return true;
    } catch (e) {
        throw new Error(e)
    }
}