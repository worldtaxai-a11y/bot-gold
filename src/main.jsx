import './styles.css';

const names = ['Numero de Oro', 'Numero d\'Oro Barcelona', 'Oro Barcelona', 'Casa del Oro', 'Decimo Oro', 'Rambla de Oro'];
const cards = ['Grand tirage annuel', 'Tirage de janvier', 'Tirage europeen', 'Tirage classique', 'Tirage quotidien'];

const root = document.querySelector('#root');
root.innerHTML = `
  <header class="hero">
    <nav class="nav">
      <div class="brand">Numero de Oro</div>
      <a href="#catalogue">Catalogue</a>
    </nav>
    <section class="hero-inner">
      <div>
        <p class="eyebrow">Prototype prive</p>
        <h1>Numero de Oro, une experience digitale premium pour une adresse historique a Barcelone.</h1>
        <p class="lead">Cette maquette sert a valider le design, la navigation, les textes de confiance et la presentation des produits avant toute integration avancee.</p>
        <a class="cta" href="#catalogue">Voir la maquette</a>
      </div>
      <div class="ticket-card">
        <span>Selection vedette</span>
        <strong>08888</strong>
        <p>Emplacement reserve aux numeros favoris, disponibilites et informations officielles.</p>
      </div>
    </section>
  </header>

  <section class="section">
    <p class="eyebrow">Identite</p>
    <h2>Nom retenu : Numero de Oro</h2>
    <div class="chips">${names.map(name => `<span>${name}</span>`).join('')}</div>
  </section>

  <section id="catalogue" class="section">
    <p class="eyebrow">Catalogue</p>
    <h2>Familles a presenter</h2>
    <div class="grid">
      ${cards.map((card, index) => `
        <article class="card">
          <span>0${index + 1}</span>
          <h3>${card}</h3>
          <p>Carte de presentation avec prix, date, informations claires, conditions et preuve de confiance.</p>
          <button type="button">Voir detail</button>
        </article>
      `).join('')}
    </div>
  </section>

  <section class="section trust">
    <div>
      <p class="eyebrow">Confiance</p>
      <h2>Le site doit rassurer avant toute action.</h2>
    </div>
    <ul>
      <li>Point de vente identifiable.</li>
      <li>Controle 18+ a prevoir.</li>
      <li>Parcours avance uniquement apres validation.</li>
      <li>Conditions, recus et service client visibles.</li>
      <li>Messages de prevention visibles.</li>
    </ul>
  </section>

  <footer>Numero de Oro — maquette privee</footer>
`;
