// ME entra para se cadastrar => coloca seus dados => verifica-se a presenca dela no SICAF => caso nao, direciona para realizar cadastro

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
});


export default api;