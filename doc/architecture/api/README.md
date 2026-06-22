# Contratos da API — CMS ONG CERAC

Este documento descreve os contratos HTTP expostos pelo back-end (CMS).
Cada endpoint corresponde a um caso de uso da camada de aplicação.

> ⚠️ **Documento de design (contrato).** Ele descreve o comportamento
> esperado da API. Quando um endpoint for implementado, confirme que a
> resposta real (status codes, mensagens de erro) bate com o que está
> aqui — documentação que diverge do código perde o valor.

---

## Convenções gerais

- **Base URL:** `/api` _(em planejamento)_
- **Formato:** todo corpo de requisição e resposta é `application/json`.
- **Datas:** formato ISO 8601 (`2026-06-22T14:30:00.000Z`).
- **IDs:** UUID/CUID (string).
- **Autenticação:** via token `Bearer` no header `Authorization`.

```http
Authorization: Bearer <token>
```

### Papéis (roles)

| Papel       | Descrição                                                       |
| ----------- | --------------------------------------------------------------- |
| _(público)_ | Visitante não autenticado. Só lê conteúdo.                      |
| `EDITOR`    | Colaborador. Cria conteúdo e remove/edita o conteúdo que criou. |
| `ADMIN`     | Administrador. Pode tudo, incluindo gerenciar usuários.         |

### Matriz de permissões

| Ação                   | Público |      EDITOR       | ADMIN |
| ---------------------- | :-----: | :---------------: | :---: |
| Listar conteúdos       |   ✅    |        ✅         |  ✅   |
| Buscar conteúdo por ID |   ✅    |        ✅         |  ✅   |
| Registrar conteúdo     |   ❌    |        ✅         |  ✅   |
| Atualizar conteúdo     |   ❌    | ✅ _(só o autor)_ |  ✅   |
| Remover conteúdo       |   ❌    | ✅ _(só o autor)_ |  ✅   |
| Registrar usuário      |   ❌    |        ❌         |  ✅   |
| Remover usuário        |   ❌    |        ❌         |  ✅   |
| Login / Logout         |    —    |        ✅         |  ✅   |

### Erros padrão

Toda resposta de erro segue o formato:

```json
{
  "error": "MENSAGEM_LEGIVEL",
  "code": "IDENTIFICADOR_DO_ERRO"
}
```

| Status | Quando ocorre                                               |
| ------ | ----------------------------------------------------------- |
| `400`  | Corpo/parâmetros inválidos (falha de validação de domínio). |
| `401`  | Sem token, token inválido ou expirado.                      |
| `403`  | Autenticado, mas sem permissão para a ação.                 |
| `404`  | Recurso não encontrado.                                     |
| `409`  | Conflito (ex.: e-mail já cadastrado).                       |
| `500`  | Erro interno (ex.: falha de conexão com o banco).           |

---

## Módulo: Autenticação

### `POST /auth/sign-up` — Registrar administrador/editor

> Caso de uso: **sign-up** · Acesso: **ADMIN** · RN07, RN08, RN09

Cria um novo usuário com acesso ao CMS.

**Requisição**

```json
{
  "name": "Maria Souza",
  "email": "maria@cerac.org",
  "password": "senhaSegura123",
  "role": "EDITOR"
}
```

| Campo      | Tipo   | Regras                                                  |
| ---------- | ------ | ------------------------------------------------------- |
| `name`     | string | Obrigatório. Mínimo 3 caracteres (RN09).                |
| `email`    | string | Obrigatório. Formato válido e único no sistema (RN07).  |
| `password` | string | Obrigatório. Mínimo 6 caracteres (RN08). Será hasheada. |
| `role`     | string | Obrigatório. `ADMIN` ou `EDITOR`.                       |

**Resposta `201 Created`**

```json
{
  "id": "a1b2c3d4-...",
  "name": "Maria Souza",
  "email": "maria@cerac.org",
  "role": "EDITOR",
  "createdAt": "2026-06-22T14:30:00.000Z"
}
```

> A senha (`passwordHash`) **nunca** é retornada.

**Erros**

| Status | Causa                                  |
| ------ | -------------------------------------- |
| `400`  | Nome, e-mail, senha ou role inválidos. |
| `401`  | Requisição sem token válido.           |
| `403`  | Usuário autenticado não é `ADMIN`.     |
| `409`  | E-mail já cadastrado.                  |

---

### `POST /auth/sign-in` — Login

> Caso de uso: **sign-in** · Acesso: **público** (qualquer colaborador)

Autentica um colaborador e devolve o token de acesso.

**Requisição**

```json
{
  "email": "maria@cerac.org",
  "password": "senhaSegura123"
}
```

**Resposta `200 OK`**

```json
{
  "accessToken": "eyJhbGciOiJ...",
  "user": {
    "id": "a1b2c3d4-...",
    "name": "Maria Souza",
    "role": "EDITOR"
  }
}
```

**Erros**

| Status | Causa                                 |
| ------ | ------------------------------------- |
| `400`  | E-mail ou senha ausentes/malformados. |
| `401`  | Credenciais inválidas.                |

---

### `POST /auth/sign-out` — Logout

> Caso de uso: **sign-out** · Acesso: **autenticado** (EDITOR ou ADMIN)

Invalida a sessão/token atual.

**Requisição:** sem corpo. Token no header `Authorization`.

**Resposta `204 No Content`** — sem corpo.

**Erros**

| Status | Causa                      |
| ------ | -------------------------- |
| `401`  | Token ausente ou inválido. |

---

## Módulo: Usuários

### `DELETE /users/:id` — Remover usuário

> Caso de uso: **remove-user** · Acesso: **ADMIN**

Remove um usuário do sistema.

**Parâmetros de rota**

| Parâmetro | Tipo   | Descrição                     |
| --------- | ------ | ----------------------------- |
| `id`      | string | ID do usuário a ser removido. |

**Resposta `204 No Content`** — sem corpo.

**Erros**

| Status | Causa                              |
| ------ | ---------------------------------- |
| `401`  | Sem token válido.                  |
| `403`  | Usuário autenticado não é `ADMIN`. |
| `404`  | Usuário não encontrado.            |

---

## Módulo: Conteúdo (Ações)

### `GET /contents` — Listar conteúdos

> Caso de uso: **list-contents** · Acesso: **público**

Retorna as ações em ordem cronológica reversa, paginadas.

**Query params**

| Parâmetro | Tipo   | Default | Descrição           |
| --------- | ------ | ------- | ------------------- |
| `page`    | number | `1`     | Página atual (≥ 1). |
| `limit`   | number | `10`    | Itens por página.   |

**Resposta `200 OK`**

```json
{
  "data": [
    {
      "id": "c1...",
      "title": "Mutirão de doação de agasalhos",
      "detailedDescription": "Texto completo da ação...",
      "actionDate": "2026-05-10T00:00:00.000Z",
      "images": ["https://storage/.../1.jpg"],
      "status": "published",
      "createdAt": "2026-05-11T09:00:00.000Z"
    }
  ],
  "page": 1,
  "limit": 10,
  "total": 42
}
```

**Erros**

| Status | Causa                              |
| ------ | ---------------------------------- |
| `400`  | Parâmetros de paginação inválidos. |

---

### `GET /contents/:id` — Buscar conteúdo por ID

> Caso de uso: **get-content-by-id** · Acesso: **público**

Retorna os detalhes de uma ação específica.

**Parâmetros de rota**

| Parâmetro | Tipo   | Descrição   |
| --------- | ------ | ----------- |
| `id`      | string | ID da ação. |

**Resposta `200 OK`**

```json
{
  "id": "c1...",
  "title": "Mutirão de doação de agasalhos",
  "detailedDescription": "Texto completo da ação...",
  "actionDate": "2026-05-10T00:00:00.000Z",
  "images": ["https://storage/.../1.jpg", "https://storage/.../2.jpg"],
  "status": "published",
  "createdAt": "2026-05-11T09:00:00.000Z",
  "updatedAt": "2026-05-11T09:00:00.000Z"
}
```

**Erros**

| Status | Causa                    |
| ------ | ------------------------ |
| `404`  | Conteúdo não encontrado. |

---

### `POST /contents` — Registrar conteúdo

> Caso de uso: **register-content** · Acesso: **EDITOR** ou **ADMIN**
> RN01, RN02, RN03, RN04, RN05, RN06

Cadastra uma nova ação.

**Requisição**

```json
{
  "title": "Mutirão de doação de agasalhos",
  "detailedDescription": "Texto completo da ação...",
  "actionDate": "2026-05-10T00:00:00.000Z",
  "images": ["https://storage/.../1.jpg", "https://storage/.../2.jpg"],
  "status": "published"
}
```

| Campo                 | Tipo     | Regras                                                 |
| --------------------- | -------- | ------------------------------------------------------ |
| `title`               | string   | Obrigatório. Mínimo 5 caracteres úteis (RN01).         |
| `detailedDescription` | string   | Obrigatório. Não pode ser vazio/só espaços (RN02).     |
| `actionDate`          | string   | Obrigatório. Data válida, não futura (RN03).           |
| `images`              | string[] | Obrigatório. Entre 1 e 6 URLs (RN04, RN05).            |
| `status`              | string   | Opcional. `published` ou `draft` (RN06). Default: TBD. |

**Resposta `201 Created`** — retorna o conteúdo criado (mesmo formato do `GET /contents/:id`).

**Erros**

| Status | Causa                                              |
| ------ | -------------------------------------------------- |
| `400`  | Qualquer violação de RN01–RN06.                    |
| `401`  | Sem token válido.                                  |
| `403`  | Usuário autenticado sem papel `EDITOR` ou `ADMIN`. |

---

### `PUT /contents/:id` — Atualizar conteúdo

> Caso de uso: **update-content** · Acesso: **ADMIN** ou o **EDITOR** que publicou
> _(permissão assumida — ver nota na matriz)_ · RN01–RN06

Modifica os dados de uma ação existente. Mesmas validações do registro.

**Parâmetros de rota**

| Parâmetro | Tipo   | Descrição   |
| --------- | ------ | ----------- |
| `id`      | string | ID da ação. |

**Requisição:** mesmo corpo do `POST /contents` (campos atualizáveis).

**Resposta `200 OK`** — retorna o conteúdo atualizado.

**Erros**

| Status | Causa                                             |
| ------ | ------------------------------------------------- |
| `400`  | Violação de RN01–RN06.                            |
| `401`  | Sem token válido.                                 |
| `403`  | EDITOR tentando editar conteúdo que não publicou. |
| `404`  | Conteúdo não encontrado.                          |

---

### `DELETE /contents/:id` — Remover conteúdo

> Caso de uso: **remove-content** · Acesso: **ADMIN** ou o **EDITOR** que publicou

Remove (ou arquiva) uma ação da vitrine pública.

**Parâmetros de rota**

| Parâmetro | Tipo   | Descrição   |
| --------- | ------ | ----------- |
| `id`      | string | ID da ação. |

**Resposta `204 No Content`** — sem corpo.

**Erros**

| Status | Causa                                              |
| ------ | -------------------------------------------------- |
| `401`  | Sem token válido.                                  |
| `403`  | EDITOR tentando remover conteúdo que não publicou. |
| `404`  | Conteúdo não encontrado.                           |

---

## Resumo das rotas

| Método   | Rota             | Caso de uso       | Acesso                  |
| -------- | ---------------- | ----------------- | ----------------------- |
| `POST`   | `/auth/sign-up`  | sign-up           | ADMIN                   |
| `POST`   | `/auth/sign-in`  | sign-in           | público                 |
| `POST`   | `/auth/sign-out` | sign-out          | autenticado             |
| `DELETE` | `/users/:id`     | remove-user       | ADMIN                   |
| `GET`    | `/contents`      | list-contents     | público                 |
| `GET`    | `/contents/:id`  | get-content-by-id | público                 |
| `POST`   | `/contents`      | register-content  | EDITOR ou ADMIN         |
| `PUT`    | `/contents/:id`  | update-content    | ADMIN ou EDITOR (autor) |
| `DELETE` | `/contents/:id`  | remove-content    | ADMIN ou EDITOR (autor) |
