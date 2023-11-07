import readTicketsByUser from '../../../server/mongodb/actions/readTicketsByUser';

export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const returnJSON = await readTicketsByUser(req.query.userId);
            return res.status(200).send(returnJSON);
        } catch (e) {
            if (e.message.toString().includes("User Not Found")) {
                return res.status(400).send("User Not Found")
            }
            return res.status(500).send("Failed");
        }
    }
}