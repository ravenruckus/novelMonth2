'use strict';

exports.seed = function(knex) {
  return knex('original_pieces').del()
    .then(() => {
      return knex('original_pieces').insert([{
        id: 1,
        bk_id: 1,
        piece_num: 1,
        micro_piece: 1,
        section_title: 'The Cyclone',
        data: {
            "data": [
                {
                    "color": "white",
                    "sentence_id": 0,
                    "text": "Dorothy lived in the midst of the great Kansas prairies, with Uncle Henry, who was a farmer, and Aunt Em, who was the farmer's wife.",
                    "tones": {
                        "category_id": "emotion_tone",
                        "category_name": "Emotion Tone",
                        "tones": [
                            {
                                "score": 0.068629,
                                "tone_id": "anger",
                                "tone_name": "Anger"
                            },
                            {
                                "score": 0.099649,
                                "tone_id": "disgust",
                                "tone_name": "Disgust"
                            },
                            {
                                "score": 0.127444,
                                "tone_id": "fear",
                                "tone_name": "Fear"
                            },
                            {
                                "score": 0.457856,
                                "tone_id": "joy",
                                "tone_name": "Joy"
                            },
                            {
                                "score": 0.117648,
                                "tone_id": "sadness",
                                "tone_name": "Sadness"
                            }
                        ]
                    }
                },
                {
                    "color": "white",
                    "sentence_id": 1,
                    "text": "Their house was small, for the lumber to build it had to be carried by wagon many miles.",
                    "tones": {
                        "category_id": "emotion_tone",
                        "category_name": "Emotion Tone",
                        "tones": [
                            {
                                "score": 0.122102,
                                "tone_id": "anger",
                                "tone_name": "Anger"
                            },
                            {
                                "score": 0.072772,
                                "tone_id": "disgust",
                                "tone_name": "Disgust"
                            },
                            {
                                "score": 0.358841,
                                "tone_id": "fear",
                                "tone_name": "Fear"
                            },
                            {
                                "score": 0.146648,
                                "tone_id": "joy",
                                "tone_name": "Joy"
                            },
                            {
                                "score": 0.275086,
                                "tone_id": "sadness",
                                "tone_name": "Sadness"
                            }
                        ]
                    }
                },
                {
                    "color": "white",
                    "sentence_id": 2,
                    "text": "There were four walls, a floor and a roof, which made one room; and this room contained a rusty looking cookstove, a cupboard for the dishes, a table, three or four chairs, and the beds.",
                    "tones": {
                        "category_id": "emotion_tone",
                        "category_name": "Emotion Tone",
                        "tones": [
                            {
                                "score": 0.308313,
                                "tone_id": "anger",
                                "tone_name": "Anger"
                            },
                            {
                                "score": 0.228731,
                                "tone_id": "disgust",
                                "tone_name": "Disgust"
                            },
                            {
                                "score": 0.349401,
                                "tone_id": "fear",
                                "tone_name": "Fear"
                            },
                            {
                                "score": 0.071122,
                                "tone_id": "joy",
                                "tone_name": "Joy"
                            },
                            {
                                "score": 0.161553,
                                "tone_id": "sadness",
                                "tone_name": "Sadness"
                            }
                        ]
                    }
                },
                {
                    "color": "white",
                    "sentence_id": 3,
                    "text": "Uncle Henry and Aunt Em had a big bed in one corner, and Dorothy a little bed in another corner.",
                    "tones": {
                        "category_id": "emotion_tone",
                        "category_name": "Emotion Tone",
                        "tones": [
                            {
                                "score": 0.081743,
                                "tone_id": "anger",
                                "tone_name": "Anger"
                            },
                            {
                                "score": 0.119422,
                                "tone_id": "disgust",
                                "tone_name": "Disgust"
                            },
                            {
                                "score": 0.1516,
                                "tone_id": "fear",
                                "tone_name": "Fear"
                            },
                            {
                                "score": 0.193745,
                                "tone_id": "joy",
                                "tone_name": "Joy"
                            },
                            {
                                "score": 0.382181,
                                "tone_id": "sadness",
                                "tone_name": "Sadness"
                            }
                        ]
                    }
                },
                {
                    "color": "blue",
                    "sentence_id": 4,
                    "text": "There was no garret at all, and no cellar--except a small hole dug in the ground, called a cyclone cellar, where the family could go in case one of those great whirlwinds arose, mighty enough to crush any building in its path.",
                    "tones": {
                        "category_id": "emotion_tone",
                        "category_name": "Emotion Tone",
                        "tones": [
                            {
                                "score": 0.036531,
                                "tone_id": "anger",
                                "tone_name": "Anger"
                            },
                            {
                                "score": 0.068975,
                                "tone_id": "disgust",
                                "tone_name": "Disgust"
                            },
                            {
                                "score": 0.300141,
                                "tone_id": "fear",
                                "tone_name": "Fear"
                            },
                            {
                                "score": 0.014802,
                                "tone_id": "joy",
                                "tone_name": "Joy"
                            },
                            {
                                "score": 0.647298,
                                "tone_id": "sadness",
                                "tone_name": "Sadness"
                            }
                        ]
                    }
                },
                {
                    "color": "white",
                    "sentence_id": 5,
                    "text": "It was reached by a trap door in the middle of the floor, from which a ladder led down into the small, dark hole.When Dorothy stood in the doorway and looked around, she could see nothing but the great gray prairie on every side.",
                    "tones": {
                        "category_id": "emotion_tone",
                        "category_name": "Emotion Tone",
                        "tones": [
                            {
                                "score": 0.166718,
                                "tone_id": "anger",
                                "tone_name": "Anger"
                            },
                            {
                                "score": 0.301145,
                                "tone_id": "disgust",
                                "tone_name": "Disgust"
                            },
                            {
                                "score": 0.379997,
                                "tone_id": "fear",
                                "tone_name": "Fear"
                            },
                            {
                                "score": 0.006546,
                                "tone_id": "joy",
                                "tone_name": "Joy"
                            },
                            {
                                "score": 0.328152,
                                "tone_id": "sadness",
                                "tone_name": "Sadness"
                            }
                        ]
                    }
                },
                {
                    "color": "white",
                    "sentence_id": 6,
                    "text": "Not a tree nor a house broke the broad sweep of flat country that reached to the edge of the sky in all directions.",
                    "tones": {
                        "category_id": "emotion_tone",
                        "category_name": "Emotion Tone",
                        "tones": [
                            {
                                "score": 0.392952,
                                "tone_id": "anger",
                                "tone_name": "Anger"
                            },
                            {
                                "score": 0.186075,
                                "tone_id": "disgust",
                                "tone_name": "Disgust"
                            },
                            {
                                "score": 0.157734,
                                "tone_id": "fear",
                                "tone_name": "Fear"
                            },
                            {
                                "score": 0.016098,
                                "tone_id": "joy",
                                "tone_name": "Joy"
                            },
                            {
                                "score": 0.412749,
                                "tone_id": "sadness",
                                "tone_name": "Sadness"
                            }
                        ]
                    }
                },
                {
                    "color": "white",
                    "sentence_id": 7,
                    "text": "The sun had baked the plowed land into a gray mass, with little cracks running through it.",
                    "tones": {
                        "category_id": "emotion_tone",
                        "category_name": "Emotion Tone",
                        "tones": [
                            {
                                "score": 0.129549,
                                "tone_id": "anger",
                                "tone_name": "Anger"
                            },
                            {
                                "score": 0.09208,
                                "tone_id": "disgust",
                                "tone_name": "Disgust"
                            },
                            {
                                "score": 0.294856,
                                "tone_id": "fear",
                                "tone_name": "Fear"
                            },
                            {
                                "score": 0.123706,
                                "tone_id": "joy",
                                "tone_name": "Joy"
                            },
                            {
                                "score": 0.352557,
                                "tone_id": "sadness",
                                "tone_name": "Sadness"
                            }
                        ]
                    }
                },
                {
                    "color": "white",
                    "sentence_id": 8,
                    "text": "Even the grass was not green, for the sun had burned the tops of the long blades until they were the same gray color to be seen everywhere.",
                    "tones": {
                        "category_id": "emotion_tone",
                        "category_name": "Emotion Tone",
                        "tones": [
                            {
                                "score": 0.12204,
                                "tone_id": "anger",
                                "tone_name": "Anger"
                            },
                            {
                                "score": 0.216587,
                                "tone_id": "disgust",
                                "tone_name": "Disgust"
                            },
                            {
                                "score": 0.089657,
                                "tone_id": "fear",
                                "tone_name": "Fear"
                            },
                            {
                                "score": 0.2229,
                                "tone_id": "joy",
                                "tone_name": "Joy"
                            },
                            {
                                "score": 0.289758,
                                "tone_id": "sadness",
                                "tone_name": "Sadness"
                            }
                        ]
                    }
                },
                {
                    "color": "white",
                    "sentence_id": 9,
                    "text": "Once the house had been painted, but the sun blistered the paint and the rains washed it away, and now the house was as dull and gray as everything else.",
                    "tones": {
                        "category_id": "emotion_tone",
                        "category_name": "Emotion Tone",
                        "tones": [
                            {
                                "score": 0.202844,
                                "tone_id": "anger",
                                "tone_name": "Anger"
                            },
                            {
                                "score": 0.095322,
                                "tone_id": "disgust",
                                "tone_name": "Disgust"
                            },
                            {
                                "score": 0.330754,
                                "tone_id": "fear",
                                "tone_name": "Fear"
                            },
                            {
                                "score": 0.018228,
                                "tone_id": "joy",
                                "tone_name": "Joy"
                            },
                            {
                                "score": 0.47093,
                                "tone_id": "sadness",
                                "tone_name": "Sadness"
                            }
                        ]
                    }
                },
                {
                    "color": "white",
                    "sentence_id": 10,
                    "text": "When Aunt Em came there to live she was a young, pretty wife.",
                    "tones": {
                        "category_id": "emotion_tone",
                        "category_name": "Emotion Tone",
                        "tones": [
                            {
                                "score": 0.066441,
                                "tone_id": "anger",
                                "tone_name": "Anger"
                            },
                            {
                                "score": 0.073444,
                                "tone_id": "disgust",
                                "tone_name": "Disgust"
                            },
                            {
                                "score": 0.182655,
                                "tone_id": "fear",
                                "tone_name": "Fear"
                            },
                            {
                                "score": 0.45377,
                                "tone_id": "joy",
                                "tone_name": "Joy"
                            },
                            {
                                "score": 0.092729,
                                "tone_id": "sadness",
                                "tone_name": "Sadness"
                            }
                        ]
                    }
                },
                {
                    "color": "white",
                    "sentence_id": 11,
                    "text": "The sun and wind had changed her, too.",
                    "tones": {
                        "category_id": "emotion_tone",
                        "category_name": "Emotion Tone",
                        "tones": [
                            {
                                "score": 0.014461,
                                "tone_id": "anger",
                                "tone_name": "Anger"
                            },
                            {
                                "score": 0.003754,
                                "tone_id": "disgust",
                                "tone_name": "Disgust"
                            },
                            {
                                "score": 0.359921,
                                "tone_id": "fear",
                                "tone_name": "Fear"
                            },
                            {
                                "score": 0.311677,
                                "tone_id": "joy",
                                "tone_name": "Joy"
                            },
                            {
                                "score": 0.1624,
                                "tone_id": "sadness",
                                "tone_name": "Sadness"
                            }
                        ]
                    }
                },
                {
                    "color": "white",
                    "sentence_id": 12,
                    "text": "They had taken the sparkle from her eyes and left them a sober gray; they had taken the red from her cheeks and lips, and they were gray also.",
                    "tones": {
                        "category_id": "emotion_tone",
                        "category_name": "Emotion Tone",
                        "tones": [
                            {
                                "score": 0.082317,
                                "tone_id": "anger",
                                "tone_name": "Anger"
                            },
                            {
                                "score": 0.244286,
                                "tone_id": "disgust",
                                "tone_name": "Disgust"
                            },
                            {
                                "score": 0.061942,
                                "tone_id": "fear",
                                "tone_name": "Fear"
                            },
                            {
                                "score": 0.141802,
                                "tone_id": "joy",
                                "tone_name": "Joy"
                            },
                            {
                                "score": 0.444715,
                                "tone_id": "sadness",
                                "tone_name": "Sadness"
                            }
                        ]
                    }
                },
                {
                    "color": "white",
                    "sentence_id": 13,
                    "text": "She was thin and gaunt, and never smiled now.",
                    "tones": {
                        "category_id": "emotion_tone",
                        "category_name": "Emotion Tone",
                        "tones": [
                            {
                                "score": 0.275499,
                                "tone_id": "anger",
                                "tone_name": "Anger"
                            },
                            {
                                "score": 0.117021,
                                "tone_id": "disgust",
                                "tone_name": "Disgust"
                            },
                            {
                                "score": 0.080258,
                                "tone_id": "fear",
                                "tone_name": "Fear"
                            },
                            {
                                "score": 0.082617,
                                "tone_id": "joy",
                                "tone_name": "Joy"
                            },
                            {
                                "score": 0.481135,
                                "tone_id": "sadness",
                                "tone_name": "Sadness"
                            }
                        ]
                    }
                },
                {
                    "color": "white",
                    "sentence_id": 14,
                    "text": "When Dorothy, who was an orphan, first came to her, Aunt Em had been so startled by the child's laughter that she would scream and press her hand upon her heart whenever Dorothy's merry voice reached her ears; and she still looked at the little girl with wonder that she could find anything to laugh at.",
                    "tones": {
                        "category_id": "emotion_tone",
                        "category_name": "Emotion Tone",
                        "tones": [
                            {
                                "score": 0.027779,
                                "tone_id": "anger",
                                "tone_name": "Anger"
                            },
                            {
                                "score": 0.222661,
                                "tone_id": "disgust",
                                "tone_name": "Disgust"
                            },
                            {
                                "score": 0.143924,
                                "tone_id": "fear",
                                "tone_name": "Fear"
                            },
                            {
                                "score": 0.418785,
                                "tone_id": "joy",
                                "tone_name": "Joy"
                            },
                            {
                                "score": 0.073722,
                                "tone_id": "sadness",
                                "tone_name": "Sadness"
                            }
                        ]
                    }
                },
                {
                    "color": "white",
                    "sentence_id": 15,
                    "text": "Uncle Henry never laughed.",
                    "tones": {
                        "category_id": "emotion_tone",
                        "category_name": "Emotion Tone",
                        "tones": [
                            {
                                "score": 0.144549,
                                "tone_id": "anger",
                                "tone_name": "Anger"
                            },
                            {
                                "score": 0.09528,
                                "tone_id": "disgust",
                                "tone_name": "Disgust"
                            },
                            {
                                "score": 0.101631,
                                "tone_id": "fear",
                                "tone_name": "Fear"
                            },
                            {
                                "score": 0.223328,
                                "tone_id": "joy",
                                "tone_name": "Joy"
                            },
                            {
                                "score": 0.354482,
                                "tone_id": "sadness",
                                "tone_name": "Sadness"
                            }
                        ]
                    }
                },
                {
                    "color": "white",
                    "sentence_id": 16,
                    "text": "He worked hard from morning till night and did not know what joy was.",
                    "tones": {
                        "category_id": "emotion_tone",
                        "category_name": "Emotion Tone",
                        "tones": [
                            {
                                "score": 0.046204,
                                "tone_id": "anger",
                                "tone_name": "Anger"
                            },
                            {
                                "score": 0.015668,
                                "tone_id": "disgust",
                                "tone_name": "Disgust"
                            },
                            {
                                "score": 0.252136,
                                "tone_id": "fear",
                                "tone_name": "Fear"
                            },
                            {
                                "score": 0.274934,
                                "tone_id": "joy",
                                "tone_name": "Joy"
                            },
                            {
                                "score": 0.275825,
                                "tone_id": "sadness",
                                "tone_name": "Sadness"
                            }
                        ]
                    }
                },
                {
                    "color": "yellow",
                    "sentence_id": 17,
                    "text": "He was gray also, from his long beard to his rough boots, and he looked stern and solemn, and rarely spoke.",
                    "tones": {
                        "category_id": "emotion_tone",
                        "category_name": "Emotion Tone",
                        "tones": [
                            {
                                "score": 0.065602,
                                "tone_id": "anger",
                                "tone_name": "Anger"
                            },
                            {
                                "score": 0.523264,
                                "tone_id": "disgust",
                                "tone_name": "Disgust"
                            },
                            {
                                "score": 0.118803,
                                "tone_id": "fear",
                                "tone_name": "Fear"
                            },
                            {
                                "score": 0.013244,
                                "tone_id": "joy",
                                "tone_name": "Joy"
                            },
                            {
                                "score": 0.416347,
                                "tone_id": "sadness",
                                "tone_name": "Sadness"
                            }
                        ]
                    }
                }
            ]
        }

      }
    ])
    })
    .then(function() {
      return knex.raw("SELECT setval('original_pieces_id_seq', (SELECT MAX(id) FROM original_pieces));")
    });
};
