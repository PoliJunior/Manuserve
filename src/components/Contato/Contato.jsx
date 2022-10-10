import React, { useState } from "react";
import ChamadaParalax from "../ChamadaParalax/ChamadaParalax";
import style from "./Contato.module.css";
import backgroundContato from "../../images/banner-contato.jpg";
import ReactInputMask from "react-input-mask";

const Contato = () => {
  const [checked, setChecked] = useState(false)

  function clickCheckbox() {
    setChecked(!checked)
  }

  const check = checked ? "Confirmada" : "Não foi confirmada";

  const [dadas, setDadas] = useState({
    tipoContato: "",
    nome: "",
    email: "",
    telefone: "",
    estado: "",
    mensagem: "",
    reuniao_meet: check
  });

  return (
    <div id="contato">
      <ChamadaParalax img={backgroundContato} title="Contato" />
      <div className={style.contato}>
        <form
          action="https://formsubmit.co/contato@manuservnordeste.com"
          method="POST"
        >
          <div className={style.input}>
            <select
              name="Tipo_contato"
              id="tipo_contato"
              required
              value={dadas.tipoContato}
              onChange={(e) =>
                setDadas({ ...dadas, tipoContato: e.target.value })
              }
            >
              <option value="" disabled>
                Tipo de contato
              </option>
              <option value="Orçamento">Orçamento</option>
              <option value="Dúvidas">Dúvidas</option>
              <option value="Manutenção">Manutenção</option>
              <option value="Outros">Outros</option>
            </select>
          </div>

          <div className={style.input}>
            <input
              type="text"
              name="Nome"
              required
              placeholder="Nome"
              value={dadas.nome}
              onChange={(e) => setDadas({ ...dadas, nome: e.target.value })}
            />
          </div>

          <div className={style.input}>
            <input
              type="email"
              name="Email"
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
              name="Telefone"
              placeholder="Telefone para contato"
              value={dadas.telefone}
              onChange={(e) => setDadas({ ...dadas, telefone: e.target.value })}
            />
          </div>

          <div className={style.input}>
            <input
              type="text"
              name="Estado"
              required
              placeholder="Estado"
              value={dadas.estado}
              onChange={(e) => setDadas({ ...dadas, estado: e.target.value })}
            />
          </div>

          <div className={style.input}>
            <textarea
              name="Mensagem"
              cols="30"
              rows="4"
              placeholder="Mensagem"
              value={dadas.mensagem}
              onChange={(e) => setDadas({ ...dadas, mensagem: e.target.value })}
            ></textarea>
          </div>
          <div className={style.div_checkbox}>
              <input 
              type="checkbox" 
              name="Checkbox_meet" 
              id="Checkbox_meet" 
              className={style.checkbox}
              onClick={clickCheckbox}
              />
              <label className={style.label_checkbox} for="Checkbox_meet">Quero uma reunião pelo meet!</label>
          </div>

          <div className={style.div_reuniaomeet}>
            <input 
            type="text"
            name="Reuniao_meet" 
            id="Reuniao_meet" 
            value={check}
            onChange={(e) => setDadas({ ...dadas, reuniao_meet: e.target.value })}
            />
          </div>

          <input
            type="hidden"
            name="_next"
            value="http://manuservnordeste.com/"
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
