export default async function handler(req, res) {
    if (req.method === "GET") {
        const url = "https://pokeapi.co/api/v2/pokemon-species/";
        const name = req.query.name;
        const full_url = url + name;
        
        try {
            const response = await fetch(full_url);
            const data = await response.json();

            const evolution_url = data.evolution_chain.url;
            const response_evolution = await fetch(evolution_url);
            const data_evolution = await response_evolution.json();
            let evolution_chain = data_evolution.chain;
            if (evolution_chain.evolves_to.length === 0) {
                res.status(200).json({"next_evolution_step": null, "current_evolution_step": name});
            }

            while (evolution_chain.species.name !== name & evolution_chain.evolves_to[0].length > 0) {
                evolution_chain = evolution_chain.evolves_to[0];
            }

            if (evolution_chain.species.name === name) {
                res.status(200).json({"next_evolution_step": evolution_chain.evolves_to[0].species.name, "current_evolution_step": name});
            } else {
                res.status(200).json({"next_evolution_step": null, "current_evolution_step": name});
            }
        } catch (e) {
            res.status(400).json({error: "pokemon not found"})
        }
    } else {
        return res.status(500).json({error: "cannot complete request"});
    }
    
}