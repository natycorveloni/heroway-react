import React from 'react';

interface IProps {
    name: string;
    surname: string;
}

function HelloWorld(propriedade) {
    return (
    <h1>Olá meu nome é {propriedade.name} {propriedade.surname}</h1>
    );
}



export default HelloWorld;