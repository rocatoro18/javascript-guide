
const apiKey = '0XnvU7cslW7yH7UmBiaFd6vYfq1s6rsV';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

// PROMESAS EN CADENA
peticion.then(resp =>resp.json().then(({data})=>{
    const {url} = data.images.original;

    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);

    console.log(url)})).catch(console.warn);