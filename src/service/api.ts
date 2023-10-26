const api = (query: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
      .then(response => {
        if (!response.ok) {
          reject({
            status: response.status,
            statusText: response.statusText
          });
        } else return response.json();
      })
      .then(data => resolve(data.results))
      .catch(err => reject(err));
  });
};

export default api