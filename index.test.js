const parse = require('./index')
const testData = [{
    input: "So yeah, I bought an elephant yesterday.",
    expected: [{
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
    }]
  }, {
    input: "How is your tiger going?",
    expected: [{
      "ngram": "tiger",
      "value": {
        "id": "panthera-tigris",
        "label": {
          "en": "Tiger",
          "fr": "Tigre"
        },
        "plural": {
          "en": "Tigers",
          "fr": "Tigres",
        },
        "scientific_name": "Panthera tigris",
        "description": {
          "en": "Tiger (Panthera tigris)"
        },
        "aliases": {
          "en": [
            "Tiger",
            "Tigers",
            "Panthera tigris"
          ],
          "fr": [
            "Tigre",
            "Tigres"
          ]
        },
        "genus": "Panthera",
        "category": "animal"
      },
      "score": 1,
      "position": {
        "sentence": 0,
        "word": 3,
        "begin": 12,
        "end": 17
      }
    }]
  },
  {
    input: "I have bradypus tridactylus phobia",
    expected: [{
      "ngram": "bradypus tridactylus",
      "value": {
        "id": "bradypus-tridactylus",
        "label": {
          "en": "Pale-throated three-toed sloth"
        },
        "scientific_name": "Bradypus tridactylus",
        "description": {
          "en": "Pale-throated three-toed sloth (Bradypus tridactylus)"
        },
        "genus": "Bradypus",
        "category": "animal",
        "aliases": {
          "en": [
            "Sloth, pale-throated three-toed",
            "pale-throated three-toed, Sloth",
            "pale-throated three-toed Sloth",
            "Pale-throated three-toed sloth",
            "Bradypus tridactylus",
          ],
        },
      },
      "score": 1,
      "position": {
        "sentence": 0,
        "word": 2,
        "begin": 7,
        "end": 27
      }
    }]
  }, {
    input: "This animal is called a Kirk's dik dik.",
    expected: [{
      "ngram": "Kirk's dik dik",
      "value": {
        "id": "madoqua-kirkii",
        "label": {
          "en": "Kirk's dik dik"
        },
        "scientific_name": "Madoqua kirkii",
        "description": {
          "en": "Kirk's dik dik (Madoqua kirkii)"
        },
        "genus": "Madoqua",
        "category": "animal",
        "aliases": {
          "en": [
            "Kirk's dik dik",
            "Kirk's dik-dik",
            "Kirk s dik dik",
            "Kirk s dik-dik",
            "Kirks dik dik",
            "Kirks dik-dik",
            "Kirk dik dik",
            "Kirk dik-dik",
            "Madoqua kirkii",
          ],
        },
      },
      "score": 1,
      "position": {
        "sentence": 0,
        "word": 5,
        "begin": 24,
        "end": 38
      }
    }]
  },
  {
    input: "L'ourse a pêché un hareng",
    expected: [{
      "ngram": "L'ourse",
      "value": {
        "id": "bear",
        "label": {
          "en": "Bear",
          "fr": "Ours"
        },
        "plural": {
          "en": "Bears",
          "fr": "Ours"
        },
        "classification": {
          "kingdom": "Animalia",
          "subkingdom": "Eumetazoa",
          "phylum": "Chordata",
          "subphylum": "Vertebrata",
          "class": "Mammalia",
          "order": "Carnivora",
          "suborder": "Caniformia",
          "family": "Ursidae"
        },
        "aliases": {
          "en": [
            "Bear",
            "Bears",
          ],
          "fr": [
            "l'ours",
            "l'ourse",
            "l'ourson",
            "l'oursonne",
            "d'ours",
            "d'ourse",
            "d'ourses",
            "d'ourson",
            "d'oursons",
            "d'oursonne",
            "d'oursonnes",
            "Ours",
            "Ourson",
            "Oursons",
            "Ourse",
            "Ourses",
            "Oursonne",
            "Oursonnes",
          ],
        },
      },
      "score": 1,
      "position": {
        "sentence": 0,
        "word": 0,
        "begin": 0,
        "end": 7
      }
    }, {
      "ngram": "hareng",
      "value": {
        "id": "herring",
        "label": {
          "en": "Herring",
          "fr": "Hareng"
        },
        "plural": {
          "en": "Herring",
          "fr": "Harengs"
        },
        "classification": {
          "kingdom": "Animalia",
          "phylum": "Chordata",
          "subphylum": "Vertebrata",
          "infraphylum": "Gnathostomata",
          "superclass": "Osteichthyes",
          "class": "Actinopterygii",
          "subclass": "Neopterygii",
          "infraclass": "Teleostei",
          "superorder": "Clupeomorpha",
          "order": "Clupeiformes",
          "suborder": "Clupeoidei",
          "family": "Clupeidae",
          "subfamily": "Clupeinae",
          "genus": "Clupea"
        },
        "aliases": {
          "en": [
            "Herring",
          ],
          "fr": [
            "Hareng",
            "Harengs",
            "Hareng frais",
            "Harengs frais",
          ],
          "la": [
            "Clupea",
          ],
        },
      },
      "score": 1,
      "position": {
        "sentence": 0,
        "word": 4,
        "begin": 19,
        "end": 25
      }
    }]
  }, {
    input: "MENU NOUVEL AN 1870: ROTI D'AIGLON SUR LIT D’ANISOPTERES",
    expected: [{
      "ngram": "D'AIGLON",
      "value": {
        "id": "eagle",
        "label": {
          "en": "Eagle",
          "fr": "Aigle"
        },
        "plural": {
          "en": "Eagles",
          "fr": "Aigles"
        },
        "classification": {
          "kingdom": "Animalia",
          "subkingdom": "Eumetazoa",
          "phylum": "Chordata",
          "subphylum": "Vertebrata",
          "class": "Aves",
          "order": "Accipitriformes",
          "family": "Accipitridae"
        },
        "aliases": {
          "en": [
            "Eagle",
            "Eagles",
          ],
          "fr": [
            "l'aigle",
            "l'aiglon",
            "d'aigle",
            "d'aigles",
            "d'aiglon",
            "d'aiglons",
            "Aigle",
            "Aigles",
            "Aiglon",
            "Aiglons",
          ],
          "la": [
            "Accipitridae",
          ],
        },
      },
      "score": 1,
      "position": {
        "sentence": 0,
        "word": 6,
        "begin": 26,
        "end": 34
      }
    }, {
      "ngram": "D’ANISOPTERES",
      "value": {
        "id": "dragonfly",
        "label": {
          "en": "Dragonfly",
          "fr": "Anisoptère"
        },
        "plural": {
          "en": "Dragonflies",
          "fr": "Anisoptères"
        },
        "classification": {
          "kingdom": "Animalia",
          "phylum": "Arthropoda",
          "subphylum": "Hexapoda",
          "class": "Insecta",
          "subclass": "Pterygota",
          "order": "Odonata",
          "suborder": "Epiprocta",
          "infraorder": "Anisoptera"
        },
        "aliases": {
          "en": [
            "Dragonfly",
            "Dragonflies",
          ],
          "fr": [
            "libellule",
            "libellules",
            "l'anisoptère",
            "l'anisoptere",
            "d'anisoptère",
            "d'anisoptères",
            "d'anisoptere",
            "d'anisopteres",
            "anisoptère",
            "anisoptères",
            "anisoptere",
            "anisopteres",
          ],
          "la": [
            "Anisoptera",
          ],
        },
      },
      "score": 1,
      "position": {
        "sentence": 0,
        "word": 9,
        "begin": 43,
        "end": 56
      }
    }]
  }

]

test('extract generic animals', () => Promise.all(
  testData.map(async ({
    input,
    expected
  }) => expect(await parse(input)).toEqual(expected))
))