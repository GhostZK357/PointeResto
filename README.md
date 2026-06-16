# PointeResto 

Plateforme de découverte et de référencement gastronomique local à Pointe-Noire.

## Description
PointeResto est une application web permettant aux habitants et visiteurs de Pointe-Noire de trouver, évaluer et localiser les restaurants, maquis et fast-foods de la ville.

## Technologies utilisées
- **Frontend** : HTML5, CSS3, JavaScript Vanilla
- **Backend** : Node.js (API REST)
- **Base de données** : PostgreSQL 17

## Structure du projet
## Structure du projet

- 📁 Database/
  - database.sql
  - PointeResto_MCD.mdj
  - PointeResto_MCD.png
- 📁 IMAGE/
  - (toutes les images des restaurants)
- connexion.css
- Connexion.html
- PointeResto.css
- PointeResto.html
- PointeResto.js
- README.md
## Base de données PostgreSQL
Les tables principales sont :
- **quartiers** : Les zones géographiques de Pointe-Noire
- **restaurants** : Les établissements référencés
- **menus** : Les plats proposés par chaque restaurant
- **utilisateurs** : Les clients et restaurateurs
- **avis** : Les commentaires et notes des clients

## Sécurité
- Protection contre les injections SQL
- Vérification des types MIME pour les uploads
- Limitation des requêtes par IP

## Auteur
GhostZK357
