import './Dropdown.css'

interface DropdownProps{
    label: string,
    aoAlterado: (e: string) =>{}
    value: string,
    times: string[],
    key?: Number,
}

const Dropdown = (props : DropdownProps) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} value={props.value}>
                <option></option>
                {
                    props.times.map(item => <option key={item}>{item}</option>)
                }
            </select>
        </div>
    )
}

export default Dropdown