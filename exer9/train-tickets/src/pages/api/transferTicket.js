import updateTicketByUser from '../../../server/mongodb/actions/updateTicketByUser';

export default async function handler(req, res) {
    if (req.method === "PATCH") {
        try {
            await updateTicketByUser(req.body);
            return res.status(200).send("Success");
        } catch (e) {
            if (e.message.toString().includes("Ticket Not Found")) {
                return res.status(400).send("Ticket Not Found")
            } else if (e.message.toString().includes("User Not Found")) {
                return res.status(400).send("User Not Found")
            }
            return res.status(500).send("Failed");
        }
    }
}