import connectDB from "../index.js";
import Ticket from "../models/Ticket.js";
import User from "../models/User.js";

export default async function readTicket(data) {

    try {
        await connectDB();
        const identifier = data;
        if (await User.findById(identifier) === null) {
            throw new Error("User Not Found")
        }
        return await Ticket.find({userId: identifier});
    } catch (e) {
        throw new Error(e)
    }
    
}