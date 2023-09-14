export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': 'e09e5d97a5msh384afaaa346a7b3p1a36b4jsn217a7181e693',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
        }

        const response = await fetch( 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',{
            headers: headers,
        });

    const result = await response.json();

    return result;
}