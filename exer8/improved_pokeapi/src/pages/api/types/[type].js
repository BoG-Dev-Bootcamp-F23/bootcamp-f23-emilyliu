export default async function handler(req, res) {
    if (req.method === "GET") {
        const url = "https://pokeapi.co/api/v2/type/";
        const type = req.query.type;
        const full_url = url + type;
    
        try {
            const response = await fetch(full_url);
            const data = await response.json();
            let typeArr = [];
            data.pokemon.forEach((pokemon) => {
                console.log(pokemon);
                typeArr.push(pokemon.pokemon.name);
            })
            return res.status(400).json(typeArr);
        } catch (e) {
            return res.status(400).json({ error: "type not found" })
        }
    } else {
        return res.status(500).json({error: "cannot complete request"});
    }
}