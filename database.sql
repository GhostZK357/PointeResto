-- Création de la base de données PointeResto
-- Suppression des tables si elles existent déjà
DROP TABLE IF EXISTS avis;
DROP TABLE IF EXISTS menus;
DROP TABLE IF EXISTS utilisateurs;
DROP TABLE IF EXISTS restaurants;
DROP TABLE IF EXISTS quartiers;

-- Table quartiers
CREATE TABLE quartiers (
  id SERIAL PRIMARY KEY,
  nom VARCHAR(100),
  description VARCHAR(255)
);

-- Table restaurants
CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY,
  nom VARCHAR(100),
  adresse VARCHAR(255),
  telephone VARCHAR(20),
  description VARCHAR(500),
  latitude DECIMAL(10,8),
  longitude DECIMAL(11,8),
  statut VARCHAR(20),
  type VARCHAR(50),
  id_quartier INTEGER REFERENCES quartiers(id)
);

-- Table utilisateurs
CREATE TABLE utilisateurs (
  id SERIAL PRIMARY KEY,
  nom VARCHAR(100),
  email VARCHAR(100),
  mot_de_passe VARCHAR(255),
  role VARCHAR(20)
);

-- Table menus
CREATE TABLE menus (
  id SERIAL PRIMARY KEY,
  nom VARCHAR(100),
  description VARCHAR(500),
  prix DECIMAL(10,2),
  photo_url VARCHAR(255),
  id_restaurant INTEGER REFERENCES restaurants(id)
);

-- Table avis
CREATE TABLE avis (
  id SERIAL PRIMARY KEY,
  contenu VARCHAR(500),
  note INTEGER,
  anonyme BOOLEAN,
  date DATE,
  id_utilisateur INTEGER REFERENCES utilisateurs(id),
  id_restaurant INTEGER REFERENCES restaurants(id)
);

-- Insertion des quartiers
INSERT INTO quartiers (nom, description) VALUES
('Centre-Ville / Lumumba', 'Quartier central de Pointe-Noire'),
('Tié-Tié', 'Quartier populaire de Pointe-Noire'),
('Mpaka', 'Quartier résidentiel de Pointe-Noire'),
('Côte Sauvage', 'Zone balnéaire de Pointe-Noire');

-- Insertion des restaurants
INSERT INTO restaurants (nom, adresse, telephone, description, statut, type, id_quartier) VALUES
('La Paillote', 'Bd Dr Jacques Bouiti', '06000001', 'Restaurant de spécialités locales', 'ouvert', 'classique', 1),
('Le Derrick', 'Av. Massafi', '06000002', 'Restaurant populaire de Pointe-Noire', 'ouvert', 'classique', 1),
('Le Comptoir', 'Centre-Ville', '06000003', 'Bar restaurant ambiance chaleureuse', 'ouvert', 'classique', 1),
('Caicos Restaurant', 'Côte Sauvage', '06000004', 'Restaurant vue sur mer', 'ouvert', 'gastronomie', 4),
('Fast-food Lumumba', 'Rond-point Lumumba', '06000005', 'Fast-food populaire', 'ouvert', 'economique', 1),
('La Pyramide', 'Mpaka', '06000006', 'Restaurant gastronomique', 'ouvert', 'gastronomie', 3),
('Le Maquis', 'Tié-Tié', '06000007', 'Maquis traditionnel', 'ouvert', 'economique', 2),
('Food Factory', 'Centre-Ville', '06000008', 'Restaurant moderne', 'ouvert', 'classique', 1),
('La Brasserie', 'Côte Sauvage', '06000009', 'Brasserie avec vue mer', 'ouvert', 'classique', 4),
('Le Voilier', 'Côte Sauvage', '06000010', 'Restaurant fruits de mer', 'ouvert', 'gastronomie', 4);