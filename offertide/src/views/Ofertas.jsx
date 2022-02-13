import React from "react";

export default class Produtos extends React.Component {

    constructor(props) {
        super(props);
        this.exibirCategoria = this.exibirCategoria.bind(this);
        this.exibirTodos = this.exibirTodos.bind(this);
    }


    // ------------------------- Exibir por categoria
    exibirCategoria(categoria) {
        let elementos = document.getElementsByClassName('card');

        for ( var i = 0; i < elementos.length; i++) {

            if(categoria === elementos[i].id){
                elementos[i].style = "";
            }
            else {
                elementos[i].style = "display:none";
            } 
        }
    }

    exibirTodos() {
        let elementos = document.getElementsByClassName('card');

        for( var i=0; i < elementos.length; i++ ){
                elementos[i].style = ""; 
        }
    }

    render () {
        return (   
        <main>
        <header>
            <h2>Ofertas</h2>
        </header>
        <section id="area_produtos">
            <section className="categorias">
                <h3>Categorias</h3><br />
                <ul>
                    <li onClick={() => this.exibirTodos()}>Todos(12)</li>
                    <li onClick={() => this.exibirCategoria('Norte')}>Norte (1)</li>
                    <li onClick={() => this.exibirCategoria('Sul')}>Sul (2)</li>
                    <li onClick={() => this.exibirCategoria('Sudeste')}>Sudeste (2)</li>
                    <li onClick={() => this.exibirCategoria('Centro-Oeste')}>Centro-Oeste (2)</li>
                    <li onClick={() => this.exibirCategoria('Nordeste')}>Nordeste (5)</li>
                </ul>
            </section>
            <section className="produtos">
                <div className="card" id="Nordeste">
                    <img height="100" src="./img/Alagoas.png" onclick="destaque(this)" alt="" />
                    <p>Alagoas</p>
                    <p>R$ 1.350,99</p>
                    <p>R$ 899,90</p>
                </div>
                <div className="card" id="Nordeste">
                    <img height="100" src="./img/Fortaleza.png"  onclick="destaque(this)" alt="" />
                    <p>Fortaleza </p>
                    <p>R$ 2.358,00</p>
                    <p>R$ 1.589,90</p>
                </div>
                <div className="card" id="Sudeste">
                    <img height="100" src="./img/Buzios.png"  onclick="destaque(this)" alt="" />
                    <p>Búzios</p>
                    <p>R$ 3.799,00</p>
                    <p>R$ 2.969,00</p>
                </div>
                <div className="card" id="Centro-Oeste">
                    <img height="100" src="./img/Caldas Novas.png"  onclick="destaque(this)" alt="" />
                    <p>Caldas Novas </p>
                    <p>R$ 4.280,00</p>
                    <p>R$ 3.129,00</p>
                </div>
                <div className="card" id="Centro-Oeste">
                    <img height="100" src="./img/Chapada dos veadeiros.png"  onclick="destaque(this)" alt="" />
                    <p>Chapada dos Veadeiros</p>
                    <p>R$ 2.600,00</p>
                    <p>R$ 1.519,70</p>
                </div>
                <div className="card" id="Sul">
                    <img height="100" src="./img/Florianópolis.png"  onclick="destaque(this)" alt="" />
                    <p>Florianópolis</p>
                    <p>R$ 3.580,00</p>
                    <p>R$ 2.409,88</p>
                </div>
                <div className="card" id="Sul">
                    <img height="100" src="./img/Gramado.png"  onclick="destaque(this)" alt="" />
                    <p>Gramado</p>
                    <p>R$ 2.508,70</p>
                    <p>R$ 1.464,53</p>
                </div>
                <div className="card" id="Nordeste">
                    <img height="100" src="./img/João Pessoa.png"  onclick="destaque(this)" alt="" />
                    <p>João Pessoa</p>
                    <p>R$ 1.459,00</p>
                    <p>R$ 799,99</p>
                </div>
                <div className="card" id="Nordeste">
                    <img height="100" src="./img/Noronha.png" alt="" onclick="destaque(this)" />
                    <p>Fernando de Noronha</p>
                    <p>R$ 3.500,00</p>
                    <p>R$ 2.799,00</p>
                </div>
                <div className="card" id="Norte">
                    <img height="100" src="./img/Pantanal.png"  onclick="destaque(this)" alt="" />
                    <p>Pantanal</p>
                    <p>R$ 2.070,45</p>
                    <p>R$ 1.730,61</p>
                </div>
                <div className="card" id="Nordeste">
                    <img height="100" src="./img/Recife.png"  onclick="destaque(this)" alt="" />
                    <p>Recife</p>
                    <p>R$ 1.500,00</p>
                    <p>R$ 1.214,10</p>
                </div>
                <div className="card" id="Sudeste">
                    <img height="100" src="./img/Rio de Janeiro.png" onclick="destaque(this)" alt="" />
                    <p>Rio de Janeiro</p>
                    <p>R$ 2.300,00</p>
                    <p>R$ 2.179,90</p>
                </div>
            </section>
        </section>
    </main>
    );
}
}
