interface Props {
    url: string
}

export default async function getData(url: string) {

    
    const response = await fetch(`${url}`) 
    .then(res => res.json())
    
    return response

}


// Mis endpoints:
// - api/main/grid
// - api/main/carousel
