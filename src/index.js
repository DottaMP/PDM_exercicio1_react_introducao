import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

//1.5 Faça o download da primeira foto e armazene-a em uma pasta chamada images,subpasta de src. 
//Pesquise como ela pode ser acessada usando uma instrução import.
import medico1 from './images/medico1.jpg'

//função
const App = () => {

    //Função:
    //1.1 Defina os estilos do elemento “1” usando uma função que devolve um objetoJSON:
    const tituloElemento1 = 'Profissionais de Saúde' 
    const estilosElemento1 = {margin: 'auto', width: 868, backgroundColor: '#EEE', padding: 12, border:'solid black', 
    borderWidth: 2, borderRadius: 5, display:'block', textAlign: 'center', fontWeight:'bold'}

    //1.4 Defina os nomes dos médicos em um objeto JSON.
    const nomesMedicos = {nome1: "José da Silva", nome2: "Maria da Silva", nome3: "Jaqueline Mendes"}

    //Devolve
    return  (
        //1.1 Defina os estilos do elemento “1” usando uma função que devolve um objetoJSON:
        <div style={estilosElemento1}>{tituloElemento1}

            {/* 1.2 Defina os estilos do elemento “2” usando CSS In-line.*/}  
            <div style={{marginTop: 5, marginBottom: 5, backgroundColor: '#EEE', padding: 12, border:'solid', 
                borderWidth: 1, borderRadius: 5, borderColor: '#cfcfcf', display:'block', textAlign: 'center', fontWeight:'bold'}}>
                
                {/* Defina os estilos do elemento “3” usando uma classe CSS definida em um arquivo à parte.*/}  
                <table >
                    <tr>
                        {/*Médico 1*/}
                        <th>
                        <div className='elemento3'>
                            {/*acessando a imagem do medico1*/}
                            <img src={medico1} alt="Foto Médico" 
                            style={{width:160, height:130, borderRadius: 10, marginTop: 10}}/> 
                            <p>{nomesMedicos.nome1}</p>
                        </div>
                        </th>

                        {/*Médico 2*/}
                        <th>
                        <div className='elemento3'>
                            {/*1.6 Faça o download da segunda foto e armazene-a na pasta public, que já existe noprojeto. 
                            Pesquise como ela pode ser acessada usando a propriedade env do objetoglobal process 
                            do NodeJS: process.env.nomeDaFoto.jpg.*/}
                            <img src={process.env.PUBLIC_URL+'./medico2.jpg'} alt="Foto Médica" 
                            style={{width:160, height:130, borderRadius: 10, marginTop: 10  }}/>
                            <p>{nomesMedicos.nome2}</p>
                        </div>
                        </th>

                        {/*Médico 3*/}
                        <th>
                        <div className='elemento3'>
                            {/*1.7 Acesse a terceira foto usando um link https comum.*/}
                            <img src="https://files.websitebuilder.prositehosting.co.uk/f6/06/f606e03c-0896-4d2b-8dde-1fe213b36d8f.jpg" alt="Foto Médica" 
                            style={{width:160, height:130, borderRadius: 10, marginTop: 10 }}/>
                            <p>{nomesMedicos.nome3}</p>
                            
                        </div>
                        </th>
                    </tr>
                </table>
            </div>    
        </div>
    )
}

ReactDOM.render( //render = renderizar
    <App />,
    document.querySelector('#root') //busca por qualquer seletor e não só pelo id
)