
/*
const getImagenPromesa = () => 
    new Promise(resolve=>resolve('https://dsfsdfsd.com'))

getImagenPromesa().then(console.log);
*/

// Para trabajar con los awaits estos tienen que estar
// dentro de una funcion async
const getImagen = async () => {

    try{
        const apiKey = '0XnvU7cslW7yH7UmBiaFd6vYfq1s6rsV';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        const {data} = await resp.json();
        const {url} = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
        console.log(data);
    }catch(err){
        // Manejo del error
        console.warn(err);
    }

}
getImagen();
