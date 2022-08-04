import React from 'react';

const getStyleName = btn =>{
    const className={
        '=': 'equals',
        'x': 'opt',
        '+': 'opt',
        '_': 'opt',
        '/': 'opt',
    }
    return className[btn]
}

const Button = ({value}) => {
    return(
        <button className={'button'}>{value}</button>
    )
}

export default Button;