export default async function handler(req, res) {
    if (req.method === "POST") {
        const body = req.body;
        const pokemon1 = body.pokemon1;
        const pokemon2 = body.pokemon2;
        
        if (!body | !pokemon1 | !pokemon2) {
            return res.status(400).json({ error: "insufficient information" });
        }

        const url = "https://pokeapi.co/api/v2/pokemon/";
        const url_pokemon1 = url + pokemon1;
        const url_pokemon2 = url + pokemon2;

        try {
            const response_pokemon1 = await fetch(url_pokemon1);
            const data_pokemon1 = await response_pokemon1.json();
            const pokemon1_basestat = data_pokemon1.stats[1].base_stat;
            
            
            const response_pokemon2 = await fetch(url_pokemon2);
            const data_pokemon2 = await response_pokemon2.json();
            const pokemon2_basestat = data_pokemon2.stats[1].base_stat;

            if (pokemon1_basestat > pokemon2_basestat) {
                res.status(200).json({result: data_pokemon1.name})
            } else if (pokemon1_basestat < pokemon2_basestat) {
                res.status(200).json({result: data_pokemon2.name})
            } else {
                res.status(200).json({result: "tie"})
            }
        } catch (e) {
            res.status(400).json({error: "pokemon not found"})
        }
    } else {
        return res.status(500).json({error: "cannot complete request"});
    }
}