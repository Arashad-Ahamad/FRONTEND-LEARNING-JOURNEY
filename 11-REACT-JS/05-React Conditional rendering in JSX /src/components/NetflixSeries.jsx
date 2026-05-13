function NetflixSeries() {
    const name = 'Frankenstein'
    const rating = '9.5'
    const summary = "Oscar winner Guillermo del Toro reimagines Mary Shelley's classic tale of a brilliant scientist and the creature his monstrous ambition brings to life."
    function genre() {
        return 'RomCom'
    }
    const age = 18
    function canWatch() {
        if(age >= 18) {
            return 'Watch Now'
        } else {
            return 'Not Available'
        }
    }
    return(
        <>
        {/* <button style={{position: 'absolute'}}>{age >= 18 ? 'Watch Now': 'Not Available'}</button> */}
        { <button style={{position: 'absolute'}}>{canWatch()}</button>}
        <img src="https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQQfcwj8SPW3JygtknsMm1KaHtodxWF_752QmVjHuIyW479QK_RIPKB3O6r-dcZaLgZ6H3yHgFzQ1e3KE2j8Kl-P0MU0rM08ZBlTQmViPOG6d2tTKUGBcy6tAe85VV1uqyszTwLnHf-sRWl14FspQ.jpg?r=3da" alt="" width='40%'/>
      <h2>Name: {name} </h2>
      <h3>Rating: {rating}</h3>
      <p>Summary: {summary}</p>
      <p>Genre: {genre()}</p>
        </>
    )
}

export default NetflixSeries