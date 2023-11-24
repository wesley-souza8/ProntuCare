import clsx from "clsx"
import principal from "../../assets/img/principal.jpg"
import styles from "./hero.module.scss"

const cx = clsx.bind(styles)

function Hero() {
  return (
    <div className={cx(styles.hero)}>
      <div className={cx(styles.grid, styles.grid1)}>
        <img src={principal} alt="Conectando Pessoas, Cuidando da sua Saúde" />
      </div>
  
      <div className={cx(styles.grid, styles.grid2)}>
        <div className={cx(styles.left)}>
          <h1>Conectando Pessoas, Cuidando da sua Saúde</h1>
        </div>

        <div className={cx(styles.right)}>
          <div className={cx(styles.destaque)}>
            <p>Revolucionando a saúde, integrando pacientes, secretárias e médicos. Simplifica cadastros, agendamentos e gestão de informações, proporcionando uma experiência eficiente e unificada.</p>
          </div>
          <button className={cx("btn btn-primary")}>Mais informações</button>
        </div>
      </div>
  
      <div className={cx(styles.grid, styles.grid3)}>
        <div className={cx(styles['grid-content'])}>
          <h2>Sobre nós</h2>
          <p>Simplificamos a administração médica, criando uma ponte digital entre pacientes, secretárias e médicos. Em um setor onde a eficiência é vital, nossa plataforma redefine a gestão médica, integrando processos, otimizando consultas e oferecendo uma experiência centrada no usuário. Essa solução é mais que um sistema; é uma revolução na forma como concebemos a administração de saúde, promovendo acessibilidade, eficiência e comunicação transparente.</p>
        </div>

        <div className={cx(styles.divider)}></div>

        <div className={cx(styles['grid-content'])}>
          <h2>Sobre a plataforma</h2>
          <p>Revoluciona a gestão médica ao oferecer uma plataforma integrada. Facilitando o agendamento para pacientes, proporcionando aos secretários uma visão completa dos prontuários e permitindo que médicos monitorem o progresso de seus pacientes. A solução proporcionará eficiência, transparência e uma experiência de cuidado mais personalizada e eficaz. Além disso, a automatização de processos e a centralização de dados contribuirão para uma abordagem mais ágil e inteligente na prestação de serviços de saúde.</p>
        </div>

        <div className={cx(styles.divider)}></div>

        <div className={cx(styles['grid-content'])}>
          <h2>Como funciona</h2>
          <p>Os pacientes realizarão cadastro e login, acessando um ambiente personalizado para mudança de informações, consulta de exames e verificação de resultados. Os secretários terão a facilidade de marcar exames e acessar informações relevantes dos pacientes. Médicos poderão visualizar consultas marcadas, marcar novos exames e verificar resultados, tudo em uma interface integrada. A plataforma garantirá uma experiência de saúde colaborativa, segura e adaptável ao ambiente online, promovendo eficiência e comunicação efetiva entre todas as partes envolvidas.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero