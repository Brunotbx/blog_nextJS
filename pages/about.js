import Head from 'next/head'

export default function About() {
  return (
    <div>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h2 className="font-bold text-center py-4">
          About!
        </h2>
        <br /><br />
        <p className="text-center w-4/6 mx-auto">
        Hey, sou o Bruno, um curioso natural de formas novas e melhores de fazer algo, não me importo em falar "não sei", me incomoda não descobrir depois a forma de fazer aquilo.
        <br /><br />
        Hoje gasto a maioria do meu dia estudando tecnologias voltadas para o Front-end, pois acredito que não há um prédio que se mantenha entre os maiores sem um alicerce realmente sólido e se é para entrar no jogo, vamos com tudo!
        <br /><br />
        O que estudo atualmente: HTML5, CSS3(Bootstrap, Tailwind), JavaScript(ES6) ReactJs, NextJS, TypeScript, Scrum, Git.
        <br /><br />
        Contato: bruno@mktouch.com.br
        Github: https://github.com/Brunotbx
        </p>
      </main>
    </div>
  );
}
