export const getAllCollections = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/collections", {
      method: "GET",
      cache: "no-store",
    });

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
