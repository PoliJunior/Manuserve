import curva from "../images/porta-curva.jpg";
import central from "../images/porta-central-correr.jpg";
import lateral from "../images/porta-lateral-correr.jpg";
import hermetica from "../images/porta-hermetica.jpg";
import telescopica from "../images/porta-telescopica-correr.jpg";
import chumbo from "../images/porta-chumbo.jpg";
import antipanico_aberta from "../images/porta-antipanico-aberta.jpg";
import antipanico_fechada from "../images/porta-antipanico-fechada.jpg";


const produtos = [
  {
    id:0,
    title: "Portas automáticas curvas",
    description:
      "Portas especiais com diferentes raios de curvatura, imprime modernidade e imponência.",
    image: curva,
  },
  {
    id:1,
    title: "Portas automáticas centrais de correr",
    description:
      "Nosso produto de entrada, são populares e encaixam na maioria das necessidades.",
    image: central,
  },
  {
    id:2,
    title: "Portas automáticas laterais de correr",
    description:
      "Nosso produto mais singelo, permite acesso aos ambientes com abertura lateral a direita ou a esquerda.",
    image: lateral,
  },
  {
    id:3,
    title: "Portas herméticas automáticas",
    description:
      "São utilizadas em ambientes controlados, super limpos, com alto nível de exigências sanitárias.",
    image: hermetica,
  },
  {
    id:4,
    title: "Portas automáticas antipânico",
    description:
      "Desenvolvidas para rotas de fuga.",
    image: antipanico_aberta,
    image2: antipanico_fechada,
  },
  {
    id:5,
    title: "Portas automáticas de chumbo deslizante",
    description:
      "São portas utilizadas em ambiente radiológico, ajudam no controle da radiação.",
    image: chumbo,
  },
  {
    id:6,
    title: "Portas automáticas telescópicas de correr",
    description:
      "Ideais para acessos com limitações de espaços porque aumentam a amplitude da passagem.",
    image: telescopica,
  },
];

export default produtos;
