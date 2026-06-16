import './styles.css';

const names = ['Número de Oro', 'Número d\'Oro Barcelona', 'Oro Barcelona', 'Casa del Oro', 'Décimo Oro', 'Rambla de Oro'];
const cards = ['Grand tirage annuel', 'Tirage de janvier', 'Tirage européen', 'Tirage classique', 'Tirage quotidien'];

const root = document.querySelector('#root');
root.innerHTML = `
  <header class="hero">
    <nav class="nav">
      <div class="brand">Número de Oro</div>
      <a href="#catalogue">Catalogue</a>
    </nav>
    <section class="hero-inner">
      <div>
        <p class="eyebrow">Prototype privé</p>
        <h1>Número de Oro, une expérience digitale premium pour une adresse historique à Barcelone.</h1>
        <p class="lead">Cette maquette sert à valider le design, la navigation, les textes de confiance et la présentation des produits avant toute intégration avancée.</p>
        <a class="cta" href="#catalogue">Voir la maquette</a>
      </div>
      <div class="ticket-card">
        <span>Sélection vedette</span>
        <strong>08888</strong>
        <p>Emplacement réservé aux numéros favoris, disponibilités et informations officielles.</p>
      </div>
    </section>
  </header>

  <section class="section">
    <p class="eyebrow">Identité</p>
    <h2>Nom retenu : Número de Oro</h2>
    <div class="chips">${names.map(name => `<span>${name}</span>`).join('')}</div>
  </section>

  <section id="catalogue" class="section">
    <p class="eyebrow">Catalogue</p>
    <h2>Familles à présenter</h2>
    <div class="grid">
      ${cards.map((card, index) => `
        <article class="card">
          <span>0${index + 1}</span>
          <h3>${card}</h3>
          <p>Carte de présentation avec prix, date, informations claires, conditions et preuve de confiance.</p>
          <button type="button">Voir détail</button>
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
      <li>Contrôle 18+ à prévoir.</li>
      <li>Parcours avancé uniquement après validation.</li>
      <li>Conditions, reçus et service client visibles.</li>
      <li>Messages de prévention visibles.</li>
    </ul>
  </section>

  <footer>Número de Oro — maquette privée</footer>
`;
