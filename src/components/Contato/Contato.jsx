import React, { useState } from "react";
import ChamadaParalax from "../ChamadaParalax/ChamadaParalax";
import style from "./Contato.module.css";
import backgroundContato from "../../images/banner-produtos.png";
import ReactInputMask from "react-input-mask";

const Contato = () => {
  const [dadas, setDadas] = useState({
    tipoContato: "",
    nome: "",
    email: "",
    telefone: "",
    estado: "",
    mensagem: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dadas);
  };

  return (
    <div id="contato">
      <ChamadaParalax img={backgroundContato} title="Contato" />
      <div className={style.contato}>
        <form
          // onSubmit={handleSubmit}
          action="https://formsubmit.co/henriqueteste802011@gmail.com"
          method="POST"
        >
          <div className={style.input}>
            <select
              name="tipo-contato"
              id="tipo-contato"
              required
              value={dadas.tipoContato}
              onChange={(e) =>
                setDadas({ ...dadas, tipoContato: e.target.value })
              }
            >
              <option value="" disabled>
                Tipo de contato
              </option>
              <option value="Orcamento">Orçamento</option>
              <option value="Dúvidas">Dúvidas</option>
              <option value="Manutencao">Manutenção</option>
              <option value="Outros">Outros</option>
            </select>
          </div>

          <div className={style.input}>
            <input
              type="text"
              name="nome"
              required
              placeholder="Nome"
              value={dadas.nome}
              onChange={(e) => setDadas({ ...dadas, nome: e.target.value })}
            />
          </div>

          <div className={style.input}>
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              value={dadas.email}
              onChange={(e) => setDadas({ ...dadas, email: e.target.value })}
            />
          </div>

          <div className={style.input}>
            <ReactInputMask
              mask="(99)99999-9999"
              required
              name="telefone"
              placeholder="Telefone para contato"
              value={dadas.telefone}
              onChange={(e) => setDadas({ ...dadas, telefone: e.target.value })}
            />
          </div>

          <div className={style.input}>
            <input
              type="text"
              name="estado"
              required
              placeholder="Estado"
              value={dadas.estado}
              onChange={(e) => setDadas({ ...dadas, estado: e.target.value })}
            />
          </div>

          <div className={style.input}>
            <textarea
              name="mensagem"
              cols="30"
              rows="4"
              placeholder="Mensagem"
              value={dadas.mensagem}
              onChange={(e) => setDadas({ ...dadas, mensagem: e.target.value })}
            ></textarea>
          </div>
          <input
            type="hidden"
            name="_next"
            value="http://localhost:3000/home"
          />
          <input type="hidden" name="_captcha" value="false"></input>
          <input type="hidden" name="_template" value="table"></input>
          <button type="submit" className={style.btn}>
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contato;
