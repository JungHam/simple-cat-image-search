const API_ENDPOINT = "https://api.thecatapi.com/v1";

const request = (url) => {
  return fetch(url).then(res => res.json());
}

const api = {
  searchCats: keyword => {
    return request(`${API_ENDPOINT}/breeds/search?q=${keyword}`)
            .then(breeds => {
              const imageReqs = breeds.map(breed => breed.id).map(id => {
                return request(`${API_ENDPOINT}/images/search?limit=20&breed_ids=${id}`)
              })

              return Promise.all(imageReqs)
                            .then(res => res.reduce((list, item)=> {return list.concat(item)},[]))
            })
  }
};

export  {api};
