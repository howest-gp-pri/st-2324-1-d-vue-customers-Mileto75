# Pri.Vue.Store
In deze oefening is reeds een werkende WEB API aanwezig. Aan dit project dien je geen wijzigingen te doen.

In het aanwezige MVC web project dien je VUE.js te installeren en te gebruiken. Lees de opgave goed door en raadpleeg de cursus VUE.js om deze oefening te maken.

## Vue.js en Axios installatie
- Installeer Vue.js in het MVC project
- Installeer Axios (javascript bibliotheek) in het MVC project

## Home page
- Voorzie een Vue instantie in de Index View van de HomeController.
- Koppel deze Vue instantie aan de `div` waarvan de `id` de waarde `app` heeft

## Opgave
Zorg ervoor dat bezoekers van de website het volgende kunen doen:

- De gebruiker kan een overzicht bekijken van alle categorieën
- De gebruiker kan een overzicht bekijken van alle producten die behoren tot één bepaalde categorieën
- De gebruiker kan een overzicht bekijken van alle producten
- De gebruiker kan de details van één bepaald product bekijken
- De gebruiker kan zoeken naar categorieën
- De gebruiker kan zoeken naar producten

**Dit gebeurt binnen dezelfde pagina (Index View bij de HomeController).**

Laat je inspireren door onderstaande gif animatie.

De communicatie met de WEB API gebeurt door middel van Axios methoden in de Vue implementatie.

### WEB API endpoints
Je gebruikt hiervoor onderstaande endpoints van de WEB API:

|Endpoint|Omschrijving|
|---|---|
|/api/categories|Haal alle categorieën op of **geef een zoekterm op** waarmee gezocht wordt in de namen van de categorieën|
|/api/categories/{id}|Haal één bepaalde categorie op|
|/api/categories/{id}/products|Haal alle producten op van een bepaalde categorie op|
|/api/products|Haal alle producten op of **geef een zoekterm op** waarmee gezocht wordt in de namen en beschrijving van de producten|
|/api/products/{id}|Haal één bepaald product op waarin ook de beschrijving en pegirating in aanwezig zijn|

## Voorbeeld uitwerking
![](images/image-01.gif)
