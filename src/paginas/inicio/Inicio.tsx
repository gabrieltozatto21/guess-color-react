import React from "react"
import { toast, ToastContainer } from "react-toastify";

type InicioProps = {
    // corSelecionada: string;
}

type InicioStats = {
    corSelecionada: string;
    itensCores: any[];
}

export class Inicio extends React.Component<InicioProps, InicioStats>{

    private arrCores = [
        'aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blue',
        'blueviolet', 'brown', 'burlyWood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson',
        'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgrey', 'darkgreen', 'darkkhaki', 'darkmagenta', 'darkolivegreen',
        'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet',
        'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro',
        'ghostwhite', 'gold', 'goldenrod', 'gray', 'grey', 'green', 'greenyellow', 'honeydew', 'hotpink', 'indianred',
        'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan',
        'lightgoldenrodyellow', 'lightgray', 'lightgrey', 'lightgreen', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey',
        'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid',
        'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin',
        'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen',
        'paleturquoise', 'plaevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'rebeccapurple',
        'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver',
        'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue', 'tan', 'teal', 'thistle',
        'tomato', 'turquoise', 'violet', 'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen'
    ];

    private arrCoresAleatorias= [];
    // private itensCores = [];


    constructor(props){
        super(props);
        this.state = {
            corSelecionada: '',
            itensCores: this.arrCoresAleatorias
        };

        this.chutarCor = this.chutarCor.bind(this);
    }

    componentDidMount(): void {
        this.selecionaCores();        
    }

    public selecionaCores(){
        this.arrCoresAleatorias = [];
        // Array das dez cores Aleatorias
        // Percorre todo o array de cores
        for (let i = 10; i != 0; i--) {
            // Adiciona 10 cores aleatoriamente no array
            this.arrCoresAleatorias.push(this.arrCores[Math.floor(Math.random() * this.arrCores.length)]);
            // Se o array estiver cheio, o ciclo encerra
        }
        
        let corSelecionada = this.arrCoresAleatorias[Math.floor(Math.random() * this.arrCoresAleatorias.length)];

        let i = 0;
        this.setState({
            corSelecionada: corSelecionada,
            itensCores: this.arrCoresAleatorias.map((cor) => {
                i++;
                return <li key={i} style={{backgroundColor: cor}} className="lista-item">{cor}</li>
            })
        })
        i = 0;

    }
    
    public chutarCor(e){
        e.preventDefault();       
        console.log(this.state.corSelecionada);

        let nomeDaCor = e.target.cor;

        let tamanhoAlphanumericoCor = this.state.corSelecionada.length;
        
        
        if (nomeDaCor.value == this.state.corSelecionada) {
            alert('Parabéns');
            this.selecionaCores();
        }
        else {
    
            var diferenca = Math.abs(nomeDaCor.value.length - tamanhoAlphanumericoCor);
    
            var menorOuMaior = nomeDaCor.value.length < tamanhoAlphanumericoCor
            ? "mais"
            : nomeDaCor.value.length == tamanhoAlphanumericoCor
            ? "mesma"
            : "menos";
            
            
            toast.error(`Você errou!
                a cor correta tem ${diferenca == 0 ? `a ${menorOuMaior} quantidade de caractéres`: ` ${diferenca} caractéres a ${menorOuMaior} de diferença`} 
                tente novamente!`, 
            {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            });

            if(this.arrCoresAleatorias.indexOf(nomeDaCor.value) != -1)
                this.arrCoresAleatorias.splice(this.arrCoresAleatorias.indexOf(nomeDaCor.value), 1)

            let i = 0;
            this.setState({
                corSelecionada: this.state.corSelecionada,
                itensCores: this.arrCoresAleatorias.map((cor) => {
                    i++;
                    return <li key={i} style={{backgroundColor: cor}} className="lista-item">{cor}</li>
                })
            })
            i = 0;

            document.body.style.backgroundColor = nomeDaCor.value;
        }
        nomeDaCor.value = '';
        
    }

    render(): React.ReactNode {        
        return(
            <div className="Inicio">
                <ToastContainer />
                <div id="caixaDeDialogo">
                    <p>Eu estou pensando em uma destas cores:</p>

                    <div id="coresSelecioandas">
                        <ul className=" d-flex flex-row lista">
                            {this.state.itensCores}
                        </ul>
                    </div>

                    <div id="inputResposta">
                        <label >Qual cor você está pensando?</label>
                        <form onSubmit={this.chutarCor}>
                            <input id="nomeDaCor" name="cor" type="text" placeholder="Digite o nome da cor"/>
                            <input id="btnConfirmar" type="submit" value="Confirmar"/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
