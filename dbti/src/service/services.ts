import { Profissional } from "../interface/Profissional";

export function consultar(url: string, query?: string): Promise<Profissional[]> {
    if (query) {
      url += `?${query}`;
    }
  
    return fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro na requisição");
      }
      return response.json();
    });
  }
  