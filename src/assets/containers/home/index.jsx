import './style.css';
import css from './img/css.png'
import html from './img/html.png'
import javascript from './img/javascript.png'
import reactlg from './img/reactlg.png'



function Home(){

    return(
        <div>

            <div className='container'>
             <title>Home</title>
                <h3 className='nome'>Nadson Oliveira Coelho</h3>
                <p className='sub-titulo'>Front-End Developer</p>
                <div className='navbar'>
                    <a className='home' href="">HOME</a>
                    <a className='contato' href="http://wa.me/<5575991534447?text=Ol%C3%A1%2C%20visitei%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20saber%20mais!">CONTATO</a>
                    <a className='sobre' href="https://github.com/nadson-engineer">GITHUB</a>
                    <a href='https://drive.google.com/file/d/14kgHnRmwIAk5fiLBM0nCwdTllZ3CpT9V/view?usp=drivesdk' className='cv'>CV</a>
                </div>
            </div>
            <div className='mensagem'>
            <p>O código que você precisa, a experiência que seu usuário merece.</p>
            </div>
            <div>
                <section className='skill'>HABILIDADES TÉCNICAS</section>
                <p className='logos'>
                <img src={css} alt="css" />
                <img src={html} alt="html" />
                <img src={javascript} alt="javascript" />
                <img src={reactlg} alt="reactlg" />
                </p>
            </div>
            <div className='sobremim'>
                <section>SOBRE MIM</section>
                <p className='texto'>Sou um desenvolvedor Front-end apaixonado por transformar ideias em interfaces digitais incríveis. Meu foco é criar experiências de usuário que não só funcionam perfeitamente, mas também encantam.

Com domínio de HTML, CSS, JavaScript e React, construo sites e aplicações web responsivas e otimizadas, garantindo que seus projetos tenham o melhor desempenho em qualquer dispositivo.

Busco sempre as últimas tendências em Front-end e estou pronto para novos desafios. Se você quer um profissional criativo e focado em detalhes para dar vida ao seu projeto, vamos conversar!</p>
            </div>
            <a href="http://wa.me/<5575991534447?text=Ol%C3%A1%2C%20visitei%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20saber%20mais!>" target='_blank' className='conversar'>CONVERSAR</a>
           
        </div>
    )      

}

export default Home