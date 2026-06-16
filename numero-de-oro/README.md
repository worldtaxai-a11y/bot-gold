# Número de Oro — V1 front-end non transactionnelle

Prototype front-end pour une administration physique à Barcelone souhaitant présenter ses produits, son histoire, ses services et préparer une future expérience digitale plus complète.

Important : cette version ne vend aucun billet, ne prend aucun paiement et ne valide aucune participation réelle. Toute mise en production devra être validée juridiquement et techniquement selon les règles applicables en Espagne, les conditions SELAE et les exigences de protection des joueurs.

## Objectif

- Présenter l'administration d'origine à Barcelone.
- Montrer les grandes familles de tirages et produits.
- Préparer une expérience utilisateur claire, premium et mobile-first.
- Prévoir une architecture future compatible avec un prestataire de paiement, après validation légale.
- Mettre en avant la confiance : point de vente autorisé, majorité, jeu responsable, conservation des reçus et sécurité.

## Nom retenu

**Número de Oro**

Pourquoi ce nom fonctionne : il est court, facile à retenir, premium, directement lié à la chance et au billet gagnant, et il peut être décliné graphiquement avec un univers or / bleu nuit / blanc.

## Ce que contient la V1

- Hero premium avec positionnement de marque.
- Navigation vers les sections importantes.
- Catalogue de tirages : Navidad, El Niño, EuroMillones, La Primitiva, BonoLoto, Lotería Nacional.
- Section parcours client en 4 étapes.
- Section boutique physique à Barcelone.
- Bloc conformité et sécurité.
- FAQ.
- Responsive mobile.
- Boutons de démonstration sans transaction réelle.

## Stack proposée

- Vite
- JavaScript
- CSS moderne responsive

## Lancement local

```bash
cd numero-de-oro
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
