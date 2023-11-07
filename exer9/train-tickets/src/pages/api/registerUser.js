import createUser from '../../../server/mongodb/actions/createUser';

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            await createUser(req.body);
            return res.status(200).send("Success")
        } catch (e) {
            return res.status(500).send("Failed")
        }
    }
}