import axios from "axios";

export const getPokemonId = async (id: number) => {
    try {
        const response = await axios.get(
            `http://127.0.0.1:8000/pt_pokemons/pokemon/api/pokemon/${id}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        return response.data;
    } catch (error) {
        // Manejo de errores
        console.error('Error:', error);
        throw error;
    }
};

