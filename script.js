
async function iegutDarglietasNoApi()
{
    let datiNoApi = await fetch('https://fakestoreapi.com/products/category/jewelery')
    let datiJson = await datiNoApi.json();
    return datiJson;
}

async function iegutApgerbiNoApi()
{
    let datiNoApi = await fetch('https://fakestoreapi.com/products/category/men%20clothing')
    let datiJson = await datiNoApi.json();
    return datiJson;
}