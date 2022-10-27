useEffect(() => {
    const PokegotchiSelect = async () => {
        try {
            const res = await axios.put('/controllers/pokegotchi', {
                data: {
                    // doesnt like . ???
                    id: {pokedex}
                }
            });

            console.log(data);
        } catch (err) {
            if (err.response.status === 404) {
                console.log('Resource could not be found!');
            } else {
                console.log(err.message);
            }
        }
    }
    PokegotchiSelect()
}, [])


// const userId = JSON.parse(sessionStorage.getItem('userId')) // get userId item from session storage
// loadUserDetail(userId)
// getEditUser(userId)
// , []):





