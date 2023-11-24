import phoneOne from "../../assets/img/phone-01.jpg"
import phoneTwo from "../../assets/img/phone-02.jpg"
import phoneThree from "../../assets/img/phone-03.jpg"

import styles from "./advantages.module.scss"

function Vantagens() {
  return (
    <div className={styles.advantages}>
      <h1>Vantagens</h1>

      <div className={styles.boxes}>
        <div className={styles.box}>
          <img src={phoneOne} alt="Integração Eficiente" />
          <div className={styles.inner}>
            <h1>01</h1>
            <h3>Integração Eficiente</h3>
            <p>Proporcionamos uma integração eficiente entre pacientes, secretários e médicos, simplificando o fluxo de informações de saúde.</p>
          </div>
        </div>

        <div className={styles.box}>
          <img src={phoneTwo} alt="Segurança Garantida" />
          <div className={styles.inner}>
            <h1>02</h1>
            <h3>Segurança Garantida</h3>
            <p>Nossa plataforma prioriza a segurança dos dados, garantindo privacidade e confidencialidade nas interações médicas.</p>
          </div>
        </div>
  
        <div className={styles.box}>
          <img src={phoneThree} alt="Comunicação Facilitada" />
          <div className={styles.inner}>
            <h1>03</h1>
            <h3>Comunicação Facilitada</h3>
            <p>Facilitamos a comunicação entre os envolvidos, promovendo uma colaboração mais efetiva para uma gestão de saúde completa.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Vantagens