import React from 'react'
import './Input.css'

interface InputProps{
    type?: 'text' | 'password' | 'date' | 'email' | 'number' | 'color',
    placeholder: string,
    aoAlterado: (valor: string) => void,
    label: string,
    obrigatorio: boolean,
    valor?: string,
}

const Input = ({ type = 'text', placeholder, aoAlterado, label, obrigatorio = false }: InputProps) => {
    const placeholderModificada = `${placeholder}...`
    const onType = (e : React.ChangeEvent<HTMLInputElement>)  => {
        aoAlterado(e.target.value)
    }

    return (
        <div className={`campo campo-${type}`}>
            <label>{label || 'Teste'}</label>
            <input
                type={type}
                onChange={evento => onType(evento)}
                required={obrigatorio}
                placeholder={placeholderModificada} />
        </div>
    )
}

export default Input