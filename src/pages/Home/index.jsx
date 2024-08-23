import enderecoImg from '../../../public/img/image.png';
import { Footer } from '../../components/Footer';
import './styles.css';


export function Home() {


  return (
    <>
      <img src={ enderecoImg } alt="Descrição da img"/>


      <h1><span class="sombra">Transformando </span><span class="coloridoazul">espaço</span>,
      <br/> criando <span class="coloridoazul">história</span> </h1>


      <p>
        Nós criamos ambientes  <b> exclusívos </b> e <b> únicos </b>, com muito bom gosto e profissionalismo, <br/> investimos tempo e
          <span class="coloridoazul"> dedicação no seu projeto</span>. Nosso compromisso vai além de simplesmente decorar.
      </p>


      <br/>
      <br/>
      <p>
          Tenha <span class="coloridoazul">ambientes limpos</span> e bem decorados, transmitindo <b>elegância</b> e <b> finesse </b>para todo <br/> aquele que estiver ali. Sua história visual começa aqui!
      </p>
     
      <Footer />


    </>
   
  )
}
