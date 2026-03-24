export async function getRates(currency) {
  try {
    const response = await fetch(
      `https://api.exchangerate-api.com/v4/latest/${currency}`
    );

    if (!response.ok) {
      throw new Error("Erro na API");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar taxas:", error);
    throw error;
  }
}