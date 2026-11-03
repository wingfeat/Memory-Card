# Memory Card — plan

## Composants

```
App                ← appelle l'API au montage, possède tout l'état
├── ScoreBoard     ← affiche le score et le meilleur score
└── Grid           ← affiche les cartes
    └── Card × N   ← affiche une image et un nom, signale le clic
```

## État

Tout l'état vit dans `App` : c'est le parent commun de `ScoreBoard` et `Grid`, et c'est lui qui reçoit les données de l'API.

| Donnée | Type de valeur | Où elle vit | Qui l'affiche | Qui la modifie |
| --- | --- | --- | --- | --- |
| les cartes | un tableau d'objets `{ id, name, image }` | `App` | `Grid`, puis `Card` | `App` : au chargement, puis à chaque mélange |
| le score actuel | un nombre, `0` au départ | `App` | `ScoreBoard` | `App`, au clic sur une carte |
| le meilleur score | un nombre, `0` au départ | `App` | `ScoreBoard` | `App`, quand le score le dépasse |
| les cartes déjà cliquées | un tableau d'`id` | `App` | personne | `App`, au clic sur une carte |
| le chargement / l'erreur | un booléen / un message | `App` | `App` | `App`, pendant l'appel à l'API |

`Card` ne reçoit pas le score : elle reçoit seulement une fonction `onClick`, que `App` lui transmet à travers `Grid`.

## Quand on clique sur une carte

- si son `id` est déjà dans les cartes cliquées → perdu : le score revient à 0 et la liste des cartes cliquées est vidée ;
- sinon → le score augmente de 1 et l'`id` est ajouté aux cartes cliquées ;
- le meilleur score est mis à jour dès que le score le dépasse ;
- dans tous les cas → les cartes sont mélangées.

## Au montage

- `useEffect` avec un tableau de dépendances vide `[]` : l'appel à l'API ne se fait qu'une fois ;
- les cartes sont mélangées une première fois après le chargement ;
- un message s'affiche pendant le chargement, et un autre en cas d'erreur.
