import './Card.css';
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const Card = ({ colaborador, bgColor, aoDeletar, aoFavoritar }) => {
    const iconProps = {
        size: 25,
        onClick: favoritar
    }

    function favoritar() {
        aoFavoritar(colaborador.id)
    }

    return (
        <div className='colaborador'>
            <AiFillCloseCircle
                size={24}
                className='deletar'
                onClick={() => aoDeletar(colaborador.id)}
            />
            <div className='cabecalho' style={{ backgroundColor: bgColor }}>
                <img src={colaborador.imagem} alt={colaborador.nome} />
            </div>
            <div className='rodape'>
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
                <div className='favoritar'>
                    {
                        colaborador.favorito
                            ? <AiFillHeart {...iconProps} color='#ff0000' />
                            : <AiOutlineHeart{...iconProps} color='#aaaaaaaa' />
                    }
                </div>
            </div>
        </div>
    )
}

export default Card;