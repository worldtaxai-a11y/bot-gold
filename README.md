# Fortuna Barcelona — prototype web non transactionnel

Prototype front-end pour une administration de loterie physique souhaitant présenter ses produits, son histoire, ses services et un parcours de réservation démonstratif.

Important : cette version ne vend aucun billet, ne prend aucun paiement et ne valide aucune participation réelle. Toute mise en production devra être validée juridiquement et techniquement selon les règles applicables en Espagne, les conditions de SELAE et les exigences de protection des joueurs.

## Objectif

- Présenter l'administration d'origine à Barcelone.
- Montrer les grandes familles de tirages et produits.
- Simuler un panier et un parcours de commande non réel.
- Prévoir une architecture future compatible avec un prestataire de paiement, après validation légale.
- Mettre en avant la confiance : point de vente autorisé, majorité, jeu responsable, conservation des reçus et sécurité.

## Stack proposée

- Vite
- React
- TypeScript
- CSS moderne responsive

## Lancement local

```bash
npm install
npm run dev
```

## Points à valider avant production

1. Autorisation exacte de vente en ligne par l'administration.
2. Conditions SELAE applicables au point de vente et à la commercialisation à distance.
3. Vérification d'âge et d'identité.
4. Géolocalisation et restrictions territoriales.
5. KYC, lutte anti-fraude, anti-blanchiment et conservation des logs.
6. Prestataire de paiement compatible avec activité réglementée.
7. Politique de jeu responsable et auto-exclusion.
8. Conditions générales, politique de confidentialité, cookies, réclamations et service client.
