# Parse Animals

If an animal, license or copyright is missing you can create a pull request

## Installation

    $ npm i @datagica/parse-animals

## Usage

Example:

```javascript
await parse('So yeah, I bought an elephant yesterday.')
```

Output:

```json
[
      {
        "ngram": "elephant",
        "value": {
          "id": "elephant",
          "label": {
            "en": "Elephant",
            "fr": "Éléphant"
          },
          "plural": {
            "en": "Elephants",
            "fr": "Éléphants"
          },
          "classification": {
            "kingdom": "Animalia",
            "subkingdom": "Eumetazoa",
            "phylum": "Chordata",
            "subphylum": "Vertebrata",
            "class": "Mammalia",
            "superorder": "Afrotheria",
            "order": "Proboscidea",
            "family": "Elephantidae"
          },
          "aliases": {
            "en": [
              "Elephant",
              "Elephants",
            ],
            "fr": [
              "l'éléphant",
              "l'éléphante",
              "l'elephant",
              "l'elephante",
              "d'éléphant",
              "d'éléphante",
              "d'éléphants",
              "d'éléphantes",
              "d'elephant",
              "d'elephante",
              "d'elephants",
              "d'elephantes",
              "Éléphant",
              "Éléphants",
              "Elephant",
              "Elephants",
              "Éléphante",
              "Éléphantes",
              "Elephante",
              "Elephantes",
            ],
            "la": [
              "Elephantidae",
            ],
          },
        },
        "score": 1,
        "position": {
          "sentence": 0,
          "word": 6,
          "begin": 21,
          "end": 29
        }
      }
    ]
```

## TODO

### Add more animal names
### Make sure all animals have the correct classification

