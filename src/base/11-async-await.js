const api_key = "b8cdOh6NtzUd44Zn7UTJT630qubZ6Gr6";

export const getImage = async (apiKey) => {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=&rating=g`
    );
    const { data } = await response.json();
    const { url } = data.images.original;
    return url;
  } catch (error) {
    return 'La imagen no existe';
  }
};


