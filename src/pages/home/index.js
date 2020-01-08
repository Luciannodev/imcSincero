import React from 'react';

import { Container,Title,Input } from './styles';

export default function Home() {
  return (
    <Container>
        <Title>Imc Sincero</Title>
        <div>
        <Input>
        <span>Peso(g):</span>
        <input type="number"></input>
        </Input>
        <Input>
        <span>Altura(m)</span>
        <input type="number"></input>
        </Input>
        <Input>
        <span>Idade</span>
        <input type="number"></input>
        </Input>
        </div>
        <button>Resultado</button>
    </Container>
  );
}
