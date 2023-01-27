import './Card.css';
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { IColaborador } from '../../interfaces/IColaborador';


interface ColaboradorProps{
    colaborador: IColaborador,
    data: string,
    bgColor:string,
    aoDeletar: (id: string) => void,
    aoFavoritar: (id: string) => void, 
}

const Card = ({ colaborador, bgColor, aoDeletar, aoFavoritar, data } : ColaboradorProps) => {
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
                <span style={{fontSize: 18}}>{data !== '' ? new Date(data).toLocaleDateString() : 'Usuário não cadastrou a data de registro!'}</span>
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