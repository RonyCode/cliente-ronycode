export const API_URL = "http://localhost/api-ronycode/public";

export function POST_LOGIN(body) {
  return {
    url: API_URL + "/login",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: body,
    },
  };
}

export function GET_USER(body) {
  return {
    url: API_URL + "/usuario",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
      data: body,
    },
  };
}

export function POST_CREATE_LOGIN(body) {
  return {
    url: API_URL + "/login/cadastrar",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: body,
    },
  };
}

export function POST_RECOVER_LOGIN(body) {
  return {
    url: API_URL + "/login/recuperar",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: body,
    },
  };
}

export function POST_RESET_LOGIN(body) {
  return {
    url: API_URL + "/login/resetar",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: body,
    },
  };
}

export function POST_ADD_STD(body) {
  return {
    url: API_URL + "/aluno/salvar",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
      data: body,
    },
  };
}

export function PHOTO_USER(body) {
  return {
    url: API_URL + `/usuario/foto/adicionar`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
      data: body,
    },
  };
}

export function GET_ALL_STD() {
  return {
    url: API_URL + "/aluno",
    options: {
      method: "get",
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
    },
  };
}

export function GET_ALL_DAY_STD() {
  return {
    url: API_URL + "/aluno/grade",
    options: {
      method: "get",
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
    },
  };
}

export function SELECT_STD(id) {
  return {
    url: API_URL + `/aluno/id/${id}`,
    options: {
      method: "get",
      headers: {
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
    },
  };
}
export function DELETE_STD(body) {
  return {
    url: API_URL + `/aluno/deletar`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
      data: body,
    },
  };
}

export function UPDATE_STD(body) {
  return {
    url: API_URL + `/aluno/salvar`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
      data: body,
    },
  };
}
