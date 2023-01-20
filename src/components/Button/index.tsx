import { ReactElement } from 'react';
import './Button.css';

import React from 'react';

interface BotaoProps {
    children: ReactElement | string,
}

const Button = (props: BotaoProps) => {
    return(
        <div>
            <button className='botao'>
                {props.children}
            </button>
        </div>
    )
}

export default Button;