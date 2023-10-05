import { Profissional } from "../interface/Profissional";

export function consultar(url: string, query?: string) {
  if (query) {
    url += `${query}`;
  }

  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Erro na requisição");
    }
    return response.json();
  });
}

export function excluir(id: string) {
  fetch(`http://localhost:8080/profissional/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function alterar(id: number, profissional: Profissional) {
  const data = {
    id,
    ...profissional,
  };

  fetch(`http://localhost:8080/profissional`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
