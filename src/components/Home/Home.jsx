import React from "react";
import "./style.css";

export default function Home() {
  return (
    <form className="form-container">
      <div class="col-md-6">
        <label for="inputCity" class="form-label">Nome</label>
        <input
          type="text"
          class="form-control"
          id="inputCity"
          placeholder="Digite seu nome"
          required
        />
      </div>

      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          id="inputEmail4"
          placeholder="Digite seu email"
          required
        />
      </div>

      <div class="col-md-6">
        <label for="inputPassword4" class="form-label">WhatsApp</label>
        <input
          type="password"
          class="form-control"
          id="inputPassword4"
          placeholder="Digite seu WhatsApp"
          required
        />
      </div>

      <div className="btn" class="col-12">
        <button type="submit" class="btn btn-primary">Acessar Conteúdo</button>
      </div>
    </form>
  )
};