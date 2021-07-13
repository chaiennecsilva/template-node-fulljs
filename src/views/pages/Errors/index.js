import darthError from "../../../assets/images/elements/404_darth-vader.png";
import errorBg from "../../../assets/images/background/bg3.jpeg";

let Error404 = {
    is_private: false,
    render: async () => {
        let view = `${error}`
        return view
    },

    after_render: () => {
        console.log('Try another one... :)')
    }
}

let error = `
<div class="error-default" style="background-image:url('${errorBg}')">
    <div class="container">
        <a href="http://localhost:8080/">
            <img src ="${darthError}" alt="Vader error">
        </a>
        <h2>Error 404!</h2>
        <h3> CARO PADAWAN, ESTE CONTÉUDO NÃO EXISTE.</h3> 
        <h2> CLIQUE NO VALDER E TENTE NOVAMENTE.</h2>
    </div> 
</div>      
`

export default Error404;