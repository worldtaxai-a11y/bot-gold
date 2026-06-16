import './styles.css';

const products = [
  {
    title: 'Lotería de Navidad',
    badge: 'Grand tirage annuel',
    price: 'Décimo 20 €',
    date: '22 décembre',
    text: 'La page phare du site, pensée pour mettre en avant la tradition, les numéros disponibles, les groupes et les informations essentielles.'
  },
  {
    title: 'Sorteo de El Niño',
    badge: 'Début d’année',
    price: 'Décimo 20 €',
    date: '6 janvier',
    text: 'Un espace clair pour présenter le tirage de janvier, ses conditions et les informations utiles aux clients récurrents.'
  },
  {
    title: 'EuroMillones',
    badge: 'Mardi & vendredi',
    price: 'Dès 2,50 €',
    date: '2 fois / semaine',
    text: 'Une carte moderne pour les tirages européens avec affichage simple des dates, options et messages de prévention.'
  },
  {
    title: 'La Primitiva',
    badge: 'Classique espagnol',
    price: 'Dès 1 €',
    date: 'Hebdomadaire',
    text: 'Une fiche produit conçue pour les tirages réguliers, avec structure prête pour les résultats et les rappels.'
  },
  {
    title: 'BonoLoto',
    badge: 'Quotidien',
    price: 'Dès 1 €',
    date: 'Tous les jours',
    text: 'Un format rapide pour les clients qui veulent consulter les tirages du jour et les informations principales.'
  },
  {
    title: 'Lotería Nacional',
    badge: 'Régulier',
    price: 'Selon tirage',
    date: 'Plusieurs dates',
    text: 'Une famille de produits à compléter avec les visuels, prix exacts et conditions spécifiques de votre administration.'
  }
];

const steps = [
  ['1', 'Découvrir', 'Le client consulte les tirages, les dates, les prix et les informations importantes.'],
  ['2', 'Choisir', 'La V1 prépare une sélection claire, sans encaissement réel tant que la conformité n’est pas validée.'],
  ['3', 'Confirmer', 'Le futur parcours devra contrôler l’âge, l’identité, les conditions et les restrictions applicables.'],
  ['4', 'Suivre', 'Espace prévu pour reçus, service client, historique, notifications et informations de retrait.']
];

const faq = [
  ['Le site est-il prêt à vendre en ligne ?', 'Non. Cette V1 est une base front-end et produit. Les fonctions transactionnelles devront être activées seulement après validation juridique et technique.'],
  ['Peut-on connecter Apple Pay, Google Pay et carte ?', 'Oui, l’architecture peut le prévoir, mais il faudra un prestataire de paiement compatible avec une activité réglementée.'],
  ['Peut-on gérer les billets et les stocks ?', 'Oui. La prochaine étape backend devra inclure un panneau admin, des références de billets, des statuts et des logs.'],
  ['Pourquoi mettre autant de messages de confiance ?', 'Parce que l’utilisateur doit comprendre qui est l’administration, comment les billets sont gérés et quelles protections existent.']
];

const app = document.querySelector('#root');

app.innerHTML = `
  <header class="site-hero">
    <nav class="topbar">
      <a class="brand-lockup" href="#top" aria-label="Número de Oro accueil">
        <span class="brand-symbol">NO</span>
        <span><strong>Número de Oro</strong><small>Barcelona</small></span>
      </a>
      <div class="nav-links" aria-label="Navigation principale">
        <a href="#catalogue">Tirages</a>
        <a href="#experience">Fonctionnement</a>
        <a href="#boutique">Boutique</a>
        <a href="#faq">FAQ</a>
      </div>
      <a class="nav-cta" href="#catalogue">Voir la V1</a>
    </nav>

    <section id="top" class="hero-layout">
      <div class="hero-copy">
        <p class="eyebrow">Administration à Barcelone · Expérience digitale premium</p>
        <h1>La tradition de la loterie espagnole, présentée avec une interface moderne et rassurante.</h1>
        <p class="hero-text">Número de Oro devient la vitrine digitale de votre point de vente : tirages, informations, confiance, service client et parcours futur prêt pour une intégration sécurisée.</p>
        <div class="hero-actions">
          <a class="primary-btn" href="#catalogue">Explorer les tirages</a>
          <a class="secondary-btn" href="#boutique">Présenter la boutique</a>
        </div>
        <div class="proof-row">
          <span>18+ à vérifier</span>
          <span>Point de vente identifié</span>
          <span>Prototype non transactionnel</span>
        </div>
      </div>

      <aside class="hero-ticket" aria-label="Carte visuelle Número de Oro">
        <div class="ticket-ribbon">Número favorito</div>
        <div class="ticket-number">08888</div>
        <p>Emplacement prêt pour numéros disponibles, séries, reçus, messages officiels et suivi client.</p>
        <div class="ticket-meta">
          <span>Barcelona</span>
          <span>Oro Edition</span>
        </div>
      </aside>
    </section>
  </header>

  <main>
    <section class="section intro-strip">
      <div>
        <p class="eyebrow">Positionnement</p>
        <h2>Un site qui ne doit pas seulement être beau : il doit inspirer confiance.</h2>
      </div>
      <p>Número de Oro doit combiner l’esthétique d’un e-commerce premium avec les exigences d’un univers réglementé : clarté, transparence, sécurité, prévention et service client.</p>
    </section>

    <section id="catalogue" class="section catalogue-section">
      <div class="section-heading">
        <p class="eyebrow">Catalogue V1</p>
        <h2>Les grandes familles de tirages à intégrer.</h2>
        <p>Les prix et logos pourront être remplacés par tes données exactes dès que tu me les donnes.</p>
      </div>
      <div class="product-grid">
        ${products.map((product) => `
          <article class="product-card">
            <div class="product-top">
              <span>${product.badge}</span>
              <strong>${product.date}</strong>
            </div>
            <h3>${product.title}</h3>
            <p>${product.text}</p>
            <div class="product-bottom">
              <strong>${product.price}</strong>
              <button type="button" data-demo-button>Voir détail</button>
            </div>
          </article>
        `).join('')}
      </div>
    </section>

    <section id="experience" class="section experience-section">
      <div class="section-heading compact">
        <p class="eyebrow">Parcours client</p>
        <h2>Une expérience pensée avant le paiement.</h2>
      </div>
      <div class="steps-grid">
        ${steps.map(([number, title, text]) => `
          <article class="step-card">
            <span>${number}</span>
            <h3>${title}</h3>
            <p>${text}</p>
          </article>
        `).join('')}
      </div>
    </section>

    <section id="boutique" class="section boutique-section">
      <div class="boutique-card">
        <div>
          <p class="eyebrow">Votre administration</p>
          <h2>La boutique physique reste au centre de la confiance.</h2>
          <p>Cette section accueillera l’adresse exacte, les horaires, les photos, l’histoire, l’équipe, les avis clients et les lots déjà distribués.</p>
          <div class="boutique-actions">
            <a class="primary-btn" href="mailto:contact@numerodeoro.es">Préparer le contact</a>
            <a class="secondary-btn dark" href="#faq">Lire la FAQ</a>
          </div>
        </div>
        <div class="map-placeholder">
          <span>Barcelona</span>
          <strong>Número de Oro</strong>
          <small>Zone visuelle carte / photos boutique</small>
        </div>
      </div>
    </section>

    <section class="section trust-section">
      <div class="trust-panel">
        <p class="eyebrow">Conformité & sécurité</p>
        <h2>À valider avant toute mise en production transactionnelle.</h2>
        <div class="trust-grid">
          <div><strong>Âge & identité</strong><span>Contrôle 18+, identité client, restrictions et consentements.</span></div>
          <div><strong>Paiements</strong><span>Prestataire compatible, validation marchande, reçus et remboursements.</span></div>
          <div><strong>Administration</strong><span>Gestion billets, statuts, inventaire, logs et preuves de remise.</span></div>
          <div><strong>Jeu responsable</strong><span>Messages de prévention, limites, aide, auto-exclusion et transparence.</span></div>
        </div>
      </div>
    </section>

    <section id="faq" class="section faq-section">
      <div class="section-heading compact">
        <p class="eyebrow">FAQ</p>
        <h2>Questions essentielles de la V1.</h2>
      </div>
      <div class="faq-list">
        ${faq.map(([question, answer]) => `
          <details>
            <summary>${question}</summary>
            <p>${answer}</p>
          </details>
        `).join('')}
      </div>
    </section>

    <section class="section final-cta">
      <p class="eyebrow">Prochaine étape</p>
      <h2>Brancher les vraies données : logos, prix, tirages, photos et identité boutique.</h2>
      <p>La structure est prête pour remplacer les contenus provisoires par tes informations exactes.</p>
    </section>
  </main>

  <footer class="site-footer">
    <strong>Número de Oro</strong>
    <span>Prototype privé · Non transactionnel · Barcelone</span>
  </footer>
`;

document.querySelectorAll('[data-demo-button]').forEach((button) => {
  button.addEventListener('click', () => {
    button.textContent = 'Détail bientôt disponible';
    button.disabled = true;
  });
});
