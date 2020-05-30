export function storeDataToSessionStorage() {
  
  fetch('http://127.0.0.1:8000/api/title/')
    .then(
      (response) => {
        response.json().then((data) => {
          sessionStorage.setItem('titles', JSON.stringify(data));
          sessionStorage.setItem('url', '/');

        });
      },
    )
    .catch((err) => {
      console.log('Failed loading Article data.Fetch Error :-S', err);
    });

    fetch('http://127.0.0.1:8000/api/user/')
    .then(
      (response) => {
        response.json().then((data) => {
          sessionStorage.setItem('users', JSON.stringify(data));
        });
      },
    )
    .catch((err) => {
      console.log('Failed loading Article data.Fetch Error :-S', err);
    });
}
