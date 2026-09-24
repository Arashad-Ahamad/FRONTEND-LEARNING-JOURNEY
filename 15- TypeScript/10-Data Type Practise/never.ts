function errorMessage():never {
    throw new Error("Something went wrong")
}

function infiniteLoop():never {
    while(true) {
        console.log('Running...');
    }
}