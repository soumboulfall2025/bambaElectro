import arrowsRotate from './arrows-rotate-solid.svg';
import bars from './bars-solid.svg';
import cartShopping from './cart-shopping-solid.svg';
import stripedFashionShirt2 from './congelateur/gongelateur1.jpg';
import stripedFashionShirt5 from './congelateur/congelateur2.jpeg';

import stripedFashionShirt4 from './congelateur/congelateur3.jpeg';
import stripedFashionShirt8 from './Astechandroidtv85.jpg';
import stripedFashionShirt9 from './smarttv/32pouces.jpeg';
import stripedFashionShirt10 from './smarttv/43pouces.jpeg';
import stripedFashionShirt11 from './smarttv/50pouces.jpeg';
import stripedFashionShirt12 from './smarttv/55pouces.jpeg';
import stripedFashionShirt13 from './smarttv/65pouces.jpeg';
import stripedFashionShirt14 from './smarttv/75pouces.jpeg';
import stripedFashionShirt15 from './refrigerateur/refrigerateur.jpg';
import stripedFashionShirt16 from './refrigerateur/ref1.png';
import stripedFashionShirt17 from './refrigerateur/ref2.png';
import stripedFashionShirt18 from './refrigerateur/ref3.png';
import trash from './trash-solid.svg';
import user from './user-solid.svg';
import xmark from './xmark-solid.svg';
import magnifyingGlass from './magnifying-glass-solid.svg';
import hero from './download.png';
import support from './headset-solid.svg';
import retour from './certificate-solid.svg';
import dropdown from './caret-down-solid.svg';
const products = [
  {
    id: 1,
name: "Congélateur ASTECH FRN222ST No Frost 6 Tiroirs",
price: 399.99,
image: [stripedFashionShirt2],
description: "Congélateur ASTECH FRN222ST No Frost 6 Tiroirs /Modéle : FRN222ST /Dimensions : Hauteur : 1.85m, Largeur : 0.60m, Diamètre : 0.70m /Poids : 80kg /Capacité : 740L /Tension : 220V /Fréquence : 50Hz /Puissance : 300W /Type de réfrigération : statique",
category: "ElectroMenager",
bestSeller: false,
subCategory: "Machine",
sizes: ["S", "M", "L", "XL"],
colors: ["Rouge", "Bleu", "Vert"],
},
  {
id: 2,
name: "Congélateur ASTECH FRN422TG No Frost 7 Tiroirs",
price: 44.99,
image: [stripedFashionShirt4],
description: "Congélateur ASTECH FRN422TG No Frost 7 Tiroirs /Modéle : FRN422TG /Dimensions : Hauteur : 1.85m, Largeur : 0.60m, Diamètre : 0.70m /Poids : 80kg /Capacité : 740L /Tension : 220V /Fréquence : 50Hz /Puissance : 300W /Type de réfrigération : statique",
category: "ElectroMenager",
bestSeller: false,
subCategory: "Machine",
sizes: ["S", "M", "L", "XL"],
colors: ["Rouge", "Bleu", "Vert"],
},
  {
id: 3,
name: "Congélateur ASTECH vertical PA240 8T aluminium",
price: 29.99,
image: [stripedFashionShirt5],
description: "Congélateur ASTECH vertical PA240 8T aluminium /Modéle : PA240 /Dimensions : Hauteur : 1.85m, Largeur : 0.60m, Diamètre : 0.70m /Poids : 80kg /Capacité : 740L /Tension : 220V /Fréquence : 50Hz /Puissance : 300W /Type de réfrigération : statique",
category: "ElectroMenager",
bestSeller: false,
subCategory: "Machine",
sizes: ["S", "M", "L", "XL"],
colors: ["Rouge", "Bleu", "Vert"],
},
  {
id: 4,
name: "Micro-ondes",
price: 29.99,
image: [stripedFashionShirt5],
description: "Micro-ondes pratique pour réchauffer vos plats.",
category: "ElectroMenager",
bestSeller: false,
subCategory: "Machine",
sizes: ["S", "M", "L", "XL"],
colors: ["Rouge", "Bleu", "Vert"],
},
  {
id: 5,
name: "Refrigerateur",
price: 29.99,
image: [stripedFashionShirt5],
description: "Réfrigérateur spacieux avec congélateur intégré.",
category: "ElectroMenager",
bestSeller: false,
subCategory: "Machine",
sizes: ["S", "M", "L", "XL"],
colors: ["Rouge", "Bleu", "Vert"],
},
  {
id: 6,
name: "TV QLED 65 pouces",
price: 29.99,
image: [stripedFashionShirt8],
description: "Téléviseur QLED 65 pouces avec une qualité d'image exceptionnelle.",
category: "ElectroMenager",
bestSeller: false,
subCategory: "SmartTv",
sizes: ["S", "M", "L", "XL"],
colors: ["Rouge", "Bleu", "Vert"],
},
  {
id: 7,
name: "TV Android 85 pouces",
price: 29.99,
image: [stripedFashionShirt8],
description: "Téléviseur Android 85 pouces avec une qualité d'image exceptionnelle.",
category: "ElectroMenager",
bestSeller: false,
subCategory: "SmartTv",
sizes: ["S", "M", "L", "XL"],
colors: ["Rouge", "Bleu", "Vert"],
},
  {
id: 8,
name: "Google TV 32GT3022A 32 pouces",
price: 29.99,
image: [stripedFashionShirt9],
description: "Google TV 32GT3022A 32 pouces avec une qualité d'image exceptionnelle.",
category: "ElectroMenager",
bestSeller: true,
subCategory: "SmartTv",
sizes: ["S", "M", "L", "XL"],
colors: ["Rouge", "Bleu", "Vert"],
},
 {
id: 9,
name: "Google TV 43GT3022A 43 Pouces",
price: 29.99,
image: [stripedFashionShirt10],
description: "Google TV 43GT3022A 43 pouces avec une qualité d'image exceptionnelle.",
category: "ElectroMenager",
bestSeller: true,
subCategory: "SmartTv",
sizes: ["S", "M", "L", "XL"],
colors: ["Rouge", "Bleu", "Vert"],
},
 {
id: 10,
name: "Google TV 50GT3022 ASTECH 50 Pouces 2024",
price: 29.99,
image: [stripedFashionShirt11],
description: "Google TV 50GT3022 ASTECH 50 pouces avec une qualité d'image exceptionnelle.",
category: "ElectroMenager",
bestSeller: true,
subCategory: "SmartTv",
sizes: ["S", "M", "L", "XL"],
colors: ["Rouge", "Bleu", "Vert"],
},
  {
id: 11,
name: "Google TV 55GX350QD ASTECH QLED 55 Pouces 2025 avec une Barre de SON",
price: 29.99,
image: [stripedFashionShirt12],
description: "Google TV Astech 55 pouces QLED avec une Barre de SON Système Google TV /Modéle : 55GX350QD /Résolution d’écran : full HD Systéme Google TV avec deux télécommandes, 2 ports HDMI,2port USB( 2.0 et 3.0 ),un port RGI45 ,Blutooth ,Netflix, YouTube, Dolby, Prime Video,Chrome cast /Version 14 Android / Mise à jour automatique / Stockage: 16GB/ 4K /Dimensions Hauteur : 78cm, Largeur : 123cm , Diamètre : 142cm",
category: "ElectroMenager",
bestSeller: true,
subCategory: "SmartTv",
sizes: ["S", "M", "L", "XL"],
colors: ["Rouge", "Bleu", "Vert"],
},
 {
id: 12,
name: "Google TV 65GT3022R ASTECH 65 Pouces 2025",
price: 29.99,
image: [stripedFashionShirt13],
description: "Google TV Astech 65 pouces QLED avec une Barre de SON Système Google TV /Modéle : 65GT3022R /Résolution d’écran : full HD Systéme Google TV avec deux télécommandes, 2 ports HDMI,2port USB( 2.0 et 3.0 ),un port RGI45 ,Blutooth ,Netflix, YouTube, Dolby, Prime Video,Chrome cast /Version 14 Android / Mise à jour automatique / Stockage: 16GB/ 4K /Dimensions Hauteur : 78cm, Largeur : 123cm , Diamètre : 142cm",
category: "ElectroMenager",
bestSeller: true,
subCategory: "SmartTv",
sizes: ["S", "M", "L", "XL"],
colors: ["Rouge", "Bleu", "Vert"],
},
 {
id: 13,
name: "Réfrigérateur FV740DD-GR vitrine 2portes FV-740DD-GR",
price: 29.99,
image: [stripedFashionShirt14],
description: "Refrigérateur FV740DD-GR vitrine 2portes FV-740DD-GR /Modéle : FV740DD-GR /Dimensions : Hauteur : 1.85m, Largeur : 0.60m, Diamètre : 0.70m /Poids : 80kg /Capacité : 740L /Tension : 220V /Fréquence : 50Hz /Puissance : 300W /Type de réfrigération : statique",
category: "ElectroMenager",
bestSeller: true,
subCategory: "Machine",
sizes: ["S", "M", "L", "XL"],
colors: ["Rouge", "Bleu", "Vert"],
},
  {
id: 14,
name: "Réfrigérateur ASTECH FC-234CM-OG combiné 3T",
price: 29.99,
image: [stripedFashionShirt15],
description: "Réfrigérateur ASTECH FC-234CM-OG combiné 3T /Modéle : FC-234CM-OG /Dimensions : Hauteur : 1.85m, Largeur : 0.60m, Diamètre : 0.70m /Poids : 80kg /Capacité : 740L /Tension : 220V /Fréquence : 50Hz /Puissance : 300W /Type de réfrigération : statique",
category: "ElectroMenager",
bestSeller: true,
subCategory: "Machine",
sizes: ["S", "M", "L", "XL"],
colors: ["Rouge", "Bleu", "Vert"],
},
 {
id: 15,
name: "Réfrigérateur ASTECH FC267(CM-VM)OG combiné 3T",
price: 29.99,
image: [stripedFashionShirt17],
description: "Réfrigérateur ASTECH FC267(CM-VM)OG combiné 3T /Modéle : FC267(CM-VM)OG /Dimensions : Hauteur : 1.85m, Largeur : 0.60m, Diamètre : 0.70m /Poids : 80kg /Capacité : 740L /Tension : 220V /Fréquence : 50Hz /Puissance : 300W /Type de réfrigération : statique",
category: "ElectroMenager",
bestSeller: true,
subCategory: "Machine",
sizes: ["S", "M", "L", "XL"],
colors: ["Rouge", "Bleu", "Vert"],
},
 {
id: 16,
name: "Réfrigérateur ASTECH FC370INO-OG combiné 4T no frost ino",
price: 29.99,
image: [stripedFashionShirt18],
description: "Réfrigérateur ASTECH FC370INO-OG combiné 4T no frost ino /Modéle : FC370INO-OG /Dimensions : Hauteur : 1.85m, Largeur : 0.60m, Diamètre : 0.70m /Poids : 80kg /Capacité : 740L /Tension : 220V /Fréquence : 50Hz /Puissance : 300W /Type de réfrigération : statique",
category: "ElectroMenager",
bestSeller: true,
subCategory: "Machine",
sizes: ["S", "M", "L", "XL"],
colors: ["Rouge", "Bleu", "Vert"],
},
];

const assets = {
  icons: {
    arrowsRotate,
    bars,
    cartShopping,
    trash,
    user,
    xmark,
    magnifyingGlass,
    support,
    retour,
    dropdown
  },
  images: {
  
    hero,
    stripedFashionShirt2,
    stripedFashionShirt8,
    stripedFashionShirt9,
    stripedFashionShirt4,
    stripedFashionShirt10,
    stripedFashionShirt11,
    
  },
  products, // Ajout du tableau products ici
};

export default assets;