import { Component } from 'react';
import Head from 'next/head';

class Home extends Component {
  componentDidMount() {
    import('../components/calculadora')
  }
  render() {
  return (
    <body>
        <Head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Calculadora - Arquiteturas Cloud</title>
        </Head>
        <div className="container">
        <div className="calc">
          <div className="header">
            <div className="titles">
              Arquiteturas Cloud
            </div>
          </div>
          <div className="display">
            <div className="display-indicate">
              max
            </div>
            <div className="display-main">
              0
            </div>
            
            <div className="display-operations">
              0
            </div>
          </div>
      
          <div className="row">
            <button className="button ac">ac</button>
            <button className="button ce">ce</button>
            <button className="button div">%</button>
            <button className="button mult">x</button>
          </div>
      
          <div className="row">
            <button className="button seven">7</button>
            <button className="button eight">8</button>
            <button className="button nine">9</button>
            <button className="button minus">−</button>
          </div>
      
          <div className="row">
            <button className="button four">4</button>
            <button className="button five">5</button>
            <button className="button six">6</button>
            <button className="button plus">+</button>
          </div>
      
          <div className="bottom-row">
            <div className="left">
              <div className="row">
                <button className="button one">1</button>
                <button className="button two">2</button>
                <button className="button three">3</button>
              </div>
              
              <div className="row">
                <button className="button zero">0</button>
                <button className="button dot">.</button>
              </div>
            </div>
            
            <div className="right">
              <div className="button eq">=</div>
            </div>
      
          </div>
      
        </div>
        
        <div className="tips">
            <div className="title" style={{marginTop: 80}}>Template feito por Ilyas Khalikov</div>
            <div className="hint small">modificado por Gustavo Andrade</div>
            <div className="hint small">original: https://codepen.io/i1yas/pen/xOyWbP.</div>
        </div>
    </div>
  </body>
  )
}
}

export default Home;
