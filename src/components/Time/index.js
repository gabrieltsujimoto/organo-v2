import "./Time.css";
import Card from "../Card";
import hexToRgba from "hex-to-rgba";

const Time = ({ time, colaboradores, aoDeletar, mudarCor, aoFavoritar }) => {
  return (
    colaboradores.length > 0 ? <section className="time" style={{
      backgroundImage: 'url(/images/fundo.png)', backgroundColor: hexToRgba(time.cor, '0.6'),
    }}>
      <input value={time.cor} onChange={e => mudarCor(e.target.value, time.id)} type='color' className='input-cor' />
      <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
      <div className="card">
        {colaboradores.map((colaborador, index) => {
          return (
            <Card
              bgColor={time.cor}
              key={index}
              colaborador={colaborador}
              aoDeletar={aoDeletar}
              aoFavoritar={aoFavoritar}
            />
          )
        })}
      </div>
    </section>
      : ''
  );
};

export default Time;
