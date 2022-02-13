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
            <h2>Destinos</h2>
        </header>
        <section id="area_produtos">
            <section className="categorias">
                <h3>Categorias</h3><br />
                <ul>
                    <li onClick={() => this.exibirTodos()}>Todos(8)</li>
                    <li onClick={() => this.exibirCategoria('Brasil')}>Brasil (4)</li>
                    <li onClick={() => this.exibirCategoria('Peru')}>Peru (1)</li>
                    <li onClick={() => this.exibirCategoria('Inglaterra')}>Londres (1)</li>
                    <li onClick={() => this.exibirCategoria('Colombia')}>Colômbia (1)</li>
                    <li onClick={() => this.exibirCategoria('Franca')}>França (1)</li>
                </ul>
            </section>
            <section className="produtos">
                <div className="card" id="Brasil">
                    <img height="150" src="./img/Aracaju-Brasil.png" onclick="destaque(this)" alt="" />
                    <p>Aracaju</p>
                    
                </div>
                <div className="card" id="Brasil">
                    <img height="150" src="./img/Natal-Brasil.png"  onclick="destaque(this)" alt="" />
                    <p>Natal</p>
                    
                </div>
                <div className="card" id="Brasil">
                    <img height="150" src="./img/Maceió-Brasil.png"  onclick="destaque(this)" alt="" />
                    <p>Maceió</p>
                    
                </div>
                <div className="card" id="Brasil">
                    <img height="150" src="./img/Serra_Gaúcha-Brasil.png"  onclick="destaque(this)" alt="" />
                    <p>Serra Gaúcha</p>
                    
                </div>
                <div className="card" id="Peru">
                    <img height="150" src="./img/Cusco-Peru.png"  onclick="destaque(this)" alt="" />
                    <p>Cusco</p>
                    
                </div>
                <div className="card" id="Colombia">
                    <img height="150" src="./img/San_Andrés-Colômbia.png"  onclick="destaque(this)" alt="" />
                    <p>San Andrés</p>
                    
                </div>
                <div className="card" id="Inglaterra">
                    <img height="150" src="./img/Londres-Inglaterra.png"  onclick="destaque(this)" alt="" />
                    <p>Londres</p>
                    
                </div>
                <div className="card" id="Franca">
                    <img height="150" src="./img/Paris-França.png"  onclick="destaque(this)" alt="" />
                    <p>Paris</p>
                    
                </div>
                               
            </section>
        </section>
    </main>
    );
    }
}
