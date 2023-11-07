import deleteTicket from '../../../server/mongodb/actions/deleteTicket';

export default async function handler(req, res) {
    if (req.method === "DELETE") {
        try {
            await deleteTicket(req.query.ticketId);
            return res.status(200).send("Success")
        } catch (e) {
            if (e.message.toString().includes("Ticket Not Found")) {
                return res.status(400).send("Ticket Not Found")
            }
            return res.status(500).send("Failed")
        }
    }
}