
const obtenerPokemon = async()=>{
    try{
        const res= await fetch('https://pokeapi.co/api/v2/pokemon?limit=155&offset=493.');
        const data= await res.json();
        document.write("<h3> Pokemon de la 5ta generacion </h3>")
        data.results.forEach(element=>{
            console.log(element.url);
            document.write("<li>"+element.name+"</li>")
        })
        
        console.log(data.results);

    } catch(error){
        console.log(error);
    }
}

obtenerPokemon();