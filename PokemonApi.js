async function pokemon(){
    const resultado = await fetch("https://pokeapi.co/api/v2/pokemon/")
    if(!resultado.ok){
        console.log("Algo salio mal, codigo:",resultado.status);
        return;
    }
    const pokemons = await resultado.json();
    console.log(pokemons)
}
pokemon();


