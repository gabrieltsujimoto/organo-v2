import { useState } from "react";
import { IColaborador } from "../../interfaces/IColaborador";
import { ITime } from "../../interfaces/ITime";
import Button from "../Button";
import Dropdown from "../Dropdrown";
import Input from "../Input";
import './Form.css'
import { v4 as uuidv4 } from 'uuid';

interface FormProps{
    aoColaboradorCadastrado: (props: IColaborador) => void,
    times: string[],
    cadastrarTime: (time: ITime) => void
}

const Form = ({ aoColaboradorCadastrado, times, cadastrarTime }: FormProps) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')

    const onSave = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time,
            id: uuidv4(),
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
        window.alert(`Colaborador ${nome} cadastrado!`)
    }

    return (
        <section className="formulario">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador!</h2>
                <Input
                    obrigatorio
                    placeholder='Insira seu nome aqui'
                    label="Nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)} />

                <Input
                    obrigatorio
                    placeholder='Insira seu cargo aqui'
                    label="Cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)} />
                <Input
                    obrigatorio
                    placeholder='Insira sua imagem aqui'
                    label="Imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)} type={""} />
                <Dropdown
                    value={time}
                    aoAlterado={async (valor) => setTime(valor)}
                    label='Selecione seu time'
                    times={times}/>
                <Button>Criar card</Button>
            </form>
            <form onSubmit={event => {
                event.preventDefault()
                cadastrarTime({ nome: nomeTime, cor: corTime })
                window.alert(`Time ${nomeTime} cadastrado!`)
            }}>
                <h2>Preencha os dados para criar a secão do Time!!</h2>
                <Input
                    obrigatorio
                    placeholder='Insira o nome do novo time aqui'
                    label="Nome"
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)} />

                <Input
                    type='color'
                    obrigatorio
                    placeholder='Insira a Cor do time aqui'
                    label="Cor"
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)} />
                <Button>Criar um novo time</Button>
            </form>
        </section>
    )
}

export default Form