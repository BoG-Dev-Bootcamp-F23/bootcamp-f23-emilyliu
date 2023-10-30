export default async function handler(req, res) {
    if (req.method === "GET") {
        const url = "https://pokeapi.co/api/v2/pokemon/";
        const id = Math.floor(Math.random() * 1292) + 1;
        const full_url = url + id;

        try {
            const response = await fetch(full_url);
            const data = await response.json();
            let types = []
            data.types.forEach((type) => types.push(type.type.name))
            const jsonObj = {
                name: data.name,
                sprite: data.sprites.front_default,
                types: types
            }
            res.status(200).json(jsonObj);
        } catch (e) {
            return res.status(500).json({error: "cannot complete request"});
        }
    } else {
        return res.status(500).json({error: "cannot complete request"});
    }
}