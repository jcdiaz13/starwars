import { i } from "./api";

export const getCharacters = async () => {
  const response = await i.get("/people");
  console.log('1111111111', response.data);
  return response.data.results; // Array de personajes
};

export const getIdFromUrl = (url) => url.substring(url.lastIndexOf('/', url.lastIndexOf('/') - 1) + 1, url.lastIndexOf('/'));

export const getCharacterById = (id) => i.get(`/people/${id}/`);