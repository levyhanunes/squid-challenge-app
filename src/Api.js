export const API_URL = 'https://dogsapi.origamid.dev/json';
export const API = "https://us-central1-squid-apis.cloudfunctions.net/test-front-basic"

export function PEGAR_FOTOS() {
  return {
    url: API,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}

export function PEGA_FOTOS() {
  return {
    url: API,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}