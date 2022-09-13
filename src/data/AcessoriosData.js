import controle from '../images/controle-remoto.jpg'
import openlinx from '../images/openlinx.jpg'
import radar from '../images/radar-hibrido.jpg'
import seletor_func from '../images/seletor-funcoes.jpg'
import sensor_foto from '../images/sensor-fotocelula.jpg'
import sensor_radar from '../images/sensor-radar.jpg'
import trinco from '../images/trinco-eletromag.jpg'

const acessorios = [
    {
      id:0,
      title: "Controle remoto",
      description:
        "Permite controlar remotamente as funções da porta.",
      image: controle,
    },
    {
      id:1,
      title: "Openlinx",
      description:
        "Permite controle total do funcionamento da porta. Com ele é possível controlar as funções, a programação, a manutenção e o agendamento operacional em ambiente Windows.",
      image: openlinx,
    },
    {
      id:2,
      title: "Sensor DDS B híbrido",
      description:
        "Responsável pela abertura e fechamento da porta automática com segurança.",
      image: radar,
    },
    {
      id:3,
      title: "Seletor de função digital",
      description:
        "Permite selecionar as diversas funções da porta e ainda conta com as funções de autoajuste e autodiagnóstico.",
      image: seletor_func,
    },
    {
      id:4,
      title: "Sensor fotocélula",
      description:
        "Reforça a segurança durante o fechamento das portas automáticas.",
      image: sensor_foto,
    },
    {
      id:5,
      title: "Sensor radar",
      description:
        "Permite a abertura automática da porta.",
      image: sensor_radar,
    },
    {
      id:6,
      title: "Trinco eletromecânico",
      description:
        "Trava a porta na posição fechada.",
      image: trinco,
    },
  ];
  
  export default acessorios;
  