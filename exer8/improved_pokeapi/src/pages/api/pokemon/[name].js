export default async function handler(req, res) {
    if (req.method === "GET") {
        const url = "https://pokeapi.co/api/v2/pokemon/";
        const name = req.query.name;
        const full_url = url + name;
    
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
            res.status(400).json({error: "pokemon not found"})
        } 
    } else {
        return res.status(500).json({error: "cannot complete request"});
    }
}