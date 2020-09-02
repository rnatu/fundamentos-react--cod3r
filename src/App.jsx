import './App.css';
import React from 'react';

import Card from './components/layout/Card';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import ComFilhos from './components/basicos/ComFilhos';
import Repeticao from './components/basicos/Repeticao';
import Condicional from './components/basicos/Condicional';
import CondicionalComIf from './components/basicos/CondicionalComIf';
import Pai from './components/comunicacao/direta/Pai';
import Super from './components/comunicacao/indireta/Super';
import Input from './components/form/Input';
import Contador from './components/contador/Contador';

export default () => (
  <div className="Cards">
    <h1>Fundamentos do React</h1>
    <div className="App">
      <Card titulo="#10 - Contador" color="#aaaa">
        <Contador />
      </Card>

      <Card titulo="#09 - Input" color="#283655">
        <Input />
      </Card>

      <Card titulo="#08 - Comunicação Indireta" color="#f6abb6">
        <Super />
      </Card>

      <Card titulo="#07 - Comunicação Direta" color="#851e3e">
        <Pai sobrenome="Ferreira" />
      </Card>

      <Card titulo="#06 - Condicional com if" color="#3c2f2f">
        <CondicionalComIf numero={15} />
      </Card>

      <Card titulo="#05 - Condicional" color="#536878 ">
        <Condicional numero={10} />
      </Card>

      <Card titulo="#04 - Repetição" color="#c99789">
        <Repeticao />
      </Card>

      <Card titulo="#03 - Componente com filhos" color="#3da4ab">
        <ComFilhos>
          <ul>
            <li>Ana</li>
            <li>João</li>
            <li>Renato</li>
            <li>Felipe</li>
          </ul>
        </ComFilhos>
      </Card>

      <Card titulo="#02 - Componente com parametros" color="#f6cd61">
        <ComParametro titulo="Esse é o titulo" subtitulo="Esse é o subtitulo" />
        <ComParametro titulo="Opa" subtitulo="Epa" />
      </Card>

      <Card titulo="#01 - Primeiro Componente" color="#fe8a71">
        <Primeiro />
      </Card>
    </div>
  </div>
);
