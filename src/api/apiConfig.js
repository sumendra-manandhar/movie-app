const apiConfig = {
  baseUrl: "https://api/themoviedb.org/3/",
  apiKey: "0fe1ced818dd55a4e2bbcf0bc5f47a5e",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
