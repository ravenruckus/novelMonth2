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
      },
    {
      id: 2,
      bk_id: 1,
      piece_num: 1,
      micro_piece: 2,
      section_title: 'The Cyclone',
      data: {
          "data": [
        {
            "color": "white",
            "sentence_id": 0,
            "text": "It was Toto that made Dorothy laugh, and saved her from growing as gray as her other surroundings.",
            "tones": {
                "category_id": "emotion_tone",
                "category_name": "Emotion Tone",
                "tones": [
                    {
                        "score": 0.083012,
                        "tone_id": "anger",
                        "tone_name": "Anger"
                    },
                    {
                        "score": 0.101009,
                        "tone_id": "disgust",
                        "tone_name": "Disgust"
                    },
                    {
                        "score": 0.071914,
                        "tone_id": "fear",
                        "tone_name": "Fear"
                    },
                    {
                        "score": 0.370055,
                        "tone_id": "joy",
                        "tone_name": "Joy"
                    },
                    {
                        "score": 0.237416,
                        "tone_id": "sadness",
                        "tone_name": "Sadness"
                    }
                ]
            }
        },
        {
            "color": "white",
            "sentence_id": 1,
            "text": "Toto was not gray; he was a little black dog, with long silky hair and small black eyes that twinkled merrily on either side of his funny, wee nose.",
            "tones": {
                "category_id": "emotion_tone",
                "category_name": "Emotion Tone",
                "tones": [
                    {
                        "score": 0.023799,
                        "tone_id": "anger",
                        "tone_name": "Anger"
                    },
                    {
                        "score": 0.483959,
                        "tone_id": "disgust",
                        "tone_name": "Disgust"
                    },
                    {
                        "score": 0.073369,
                        "tone_id": "fear",
                        "tone_name": "Fear"
                    },
                    {
                        "score": 0.250773,
                        "tone_id": "joy",
                        "tone_name": "Joy"
                    },
                    {
                        "score": 0.108564,
                        "tone_id": "sadness",
                        "tone_name": "Sadness"
                    }
                ]
            }
        },
        {
            "color": "white",
            "sentence_id": 2,
            "text": "Toto played all day long, and Dorothy played with him, and loved him dearly.Today, however, they were not playing.",
            "tones": {
                "category_id": "emotion_tone",
                "category_name": "Emotion Tone",
                "tones": [
                    {
                        "score": 0.014977,
                        "tone_id": "anger",
                        "tone_name": "Anger"
                    },
                    {
                        "score": 0.014183,
                        "tone_id": "disgust",
                        "tone_name": "Disgust"
                    },
                    {
                        "score": 0.088484,
                        "tone_id": "fear",
                        "tone_name": "Fear"
                    },
                    {
                        "score": 0.401586,
                        "tone_id": "joy",
                        "tone_name": "Joy"
                    },
                    {
                        "score": 0.298043,
                        "tone_id": "sadness",
                        "tone_name": "Sadness"
                    }
                ]
            }
        },
        {
            "color": "white",
            "sentence_id": 3,
            "text": "Uncle Henry sat upon the doorstep and looked anxiously at the sky, which was even grayer than usual.",
            "tones": {
                "category_id": "emotion_tone",
                "category_name": "Emotion Tone",
                "tones": [
                    {
                        "score": 0.041798,
                        "tone_id": "anger",
                        "tone_name": "Anger"
                    },
                    {
                        "score": 0.431468,
                        "tone_id": "disgust",
                        "tone_name": "Disgust"
                    },
                    {
                        "score": 0.054343,
                        "tone_id": "fear",
                        "tone_name": "Fear"
                    },
                    {
                        "score": 0.116257,
                        "tone_id": "joy",
                        "tone_name": "Joy"
                    },
                    {
                        "score": 0.364912,
                        "tone_id": "sadness",
                        "tone_name": "Sadness"
                    }
                ]
            }
        },
        {
            "color": "white",
            "sentence_id": 4,
            "text": "Dorothy stood in the door with Toto in her arms, and looked at the sky too.",
            "tones": {
                "category_id": "emotion_tone",
                "category_name": "Emotion Tone",
                "tones": [
                    {
                        "score": 0.069608,
                        "tone_id": "anger",
                        "tone_name": "Anger"
                    },
                    {
                        "score": 0.1931,
                        "tone_id": "disgust",
                        "tone_name": "Disgust"
                    },
                    {
                        "score": 0.082956,
                        "tone_id": "fear",
                        "tone_name": "Fear"
                    },
                    {
                        "score": 0.472409,
                        "tone_id": "joy",
                        "tone_name": "Joy"
                    },
                    {
                        "score": 0.074359,
                        "tone_id": "sadness",
                        "tone_name": "Sadness"
                    }
                ]
            }
        },
        {
            "color": "white",
            "sentence_id": 5,
            "text": "Aunt Em was washing the dishes.From the far north they heard a low wail of the wind, and Uncle Henryand Dorothy could see where the long grass bowed in waves before thecoming storm.",
            "tones": {
                "category_id": "emotion_tone",
                "category_name": "Emotion Tone",
                "tones": [
                    {
                        "score": 0.07728,
                        "tone_id": "anger",
                        "tone_name": "Anger"
                    },
                    {
                        "score": 0.311569,
                        "tone_id": "disgust",
                        "tone_name": "Disgust"
                    },
                    {
                        "score": 0.475504,
                        "tone_id": "fear",
                        "tone_name": "Fear"
                    },
                    {
                        "score": 0.004241,
                        "tone_id": "joy",
                        "tone_name": "Joy"
                    },
                    {
                        "score": 0.296148,
                        "tone_id": "sadness",
                        "tone_name": "Sadness"
                    }
                ]
            }
        },
        {
            "color": "white",
            "sentence_id": 6,
            "text": "There now came a sharp whistling in the air from thesouth, and as they turned their eyes that way they saw ripples in thegrass coming from that direction also.Suddenly Uncle Henry stood up.\"There's a cyclone coming, Em,\" he called to his wife.",
            "tones": {
                "category_id": "emotion_tone",
                "category_name": "Emotion Tone",
                "tones": [
                    {
                        "score": 0.090914,
                        "tone_id": "anger",
                        "tone_name": "Anger"
                    },
                    {
                        "score": 0.458994,
                        "tone_id": "disgust",
                        "tone_name": "Disgust"
                    },
                    {
                        "score": 0.396248,
                        "tone_id": "fear",
                        "tone_name": "Fear"
                    },
                    {
                        "score": 0.048998,
                        "tone_id": "joy",
                        "tone_name": "Joy"
                    },
                    {
                        "score": 0.132848,
                        "tone_id": "sadness",
                        "tone_name": "Sadness"
                    }
                ]
            }
        },
        {
            "color": "blue",
            "sentence_id": 7,
            "text": "\"I'll go look after the stock.\"",
            "tones": {
                "category_id": "emotion_tone",
                "category_name": "Emotion Tone",
                "tones": [
                    {
                        "score": 0.111535,
                        "tone_id": "anger",
                        "tone_name": "Anger"
                    },
                    {
                        "score": 0.01389,
                        "tone_id": "disgust",
                        "tone_name": "Disgust"
                    },
                    {
                        "score": 0.416163,
                        "tone_id": "fear",
                        "tone_name": "Fear"
                    },
                    {
                        "score": 0.010473,
                        "tone_id": "joy",
                        "tone_name": "Joy"
                    },
                    {
                        "score": 0.536363,
                        "tone_id": "sadness",
                        "tone_name": "Sadness"
                    }
                ]
            }
        },
        {
            "color": "white",
            "sentence_id": 8,
            "text": "Then he ran toward the sheds where the cows andhorses were kept. Aunt Em dropped her work and came to the door.",
            "tones": {
                "category_id": "emotion_tone",
                "category_name": "Emotion Tone",
                "tones": [
                    {
                        "score": 0.207792,
                        "tone_id": "anger",
                        "tone_name": "Anger"
                    },
                    {
                        "score": 0.130339,
                        "tone_id": "disgust",
                        "tone_name": "Disgust"
                    },
                    {
                        "score": 0.335593,
                        "tone_id": "fear",
                        "tone_name": "Fear"
                    },
                    {
                        "score": 0.027228,
                        "tone_id": "joy",
                        "tone_name": "Joy"
                    },
                    {
                        "score": 0.419086,
                        "tone_id": "sadness",
                        "tone_name": "Sadness"
                    }
                ]
            }
        },
        {
            "color": "green",
            "sentence_id": 9,
            "text": "One glance told her ofthe danger close at hand.\"Quick,",
            "tones": {
                "category_id": "emotion_tone",
                "category_name": "Emotion Tone",
                "tones": [
                    {
                        "score": 0.149058,
                        "tone_id": "anger",
                        "tone_name": "Anger"
                    },
                    {
                        "score": 0.127766,
                        "tone_id": "disgust",
                        "tone_name": "Disgust"
                    },
                    {
                        "score": 0.516012,
                        "tone_id": "fear",
                        "tone_name": "Fear"
                    },
                    {
                        "score": 0.085612,
                        "tone_id": "joy",
                        "tone_name": "Joy"
                    },
                    {
                        "score": 0.166327,
                        "tone_id": "sadness",
                        "tone_name": "Sadness"
                    }
                ]
            }
        },
        {
            "color": "red",
            "sentence_id": 10,
            "text": "Dorothy!\" she screamed.",
            "tones": {
                "category_id": "emotion_tone",
                "category_name": "Emotion Tone",
                "tones": [
                    {
                        "score": 0.551165,
                        "tone_id": "anger",
                        "tone_name": "Anger"
                    },
                    {
                        "score": 0.085654,
                        "tone_id": "disgust",
                        "tone_name": "Disgust"
                    },
                    {
                        "score": 0.089454,
                        "tone_id": "fear",
                        "tone_name": "Fear"
                    },
                    {
                        "score": 0.111528,
                        "tone_id": "joy",
                        "tone_name": "Joy"
                    },
                    {
                        "score": 0.201933,
                        "tone_id": "sadness",
                        "tone_name": "Sadness"
                    }
                ]
            }
        },
        {
            "color": "white",
            "sentence_id": 11,
            "text": "\"Run for the cellar!\"",
            "tones": {
                "category_id": "emotion_tone",
                "category_name": "Emotion Tone",
                "tones": [
                    {
                        "score": 0.125659,
                        "tone_id": "anger",
                        "tone_name": "Anger"
                    },
                    {
                        "score": 0.050578,
                        "tone_id": "disgust",
                        "tone_name": "Disgust"
                    },
                    {
                        "score": 0.287536,
                        "tone_id": "fear",
                        "tone_name": "Fear"
                    },
                    {
                        "score": 0.175087,
                        "tone_id": "joy",
                        "tone_name": "Joy"
                    },
                    {
                        "score": 0.305791,
                        "tone_id": "sadness",
                        "tone_name": "Sadness"
                    }
                ]
            }
        }
      ]
    }
  },
  {
    id: 3,
    bk_id: 1,
    piece_num: 1,
    micro_piece: 3,
    section_title: 'The Cyclone',
    data: {
      "data": [
          {
              "color": "white",
              "sentence_id": 0,
              "text": "Toto jumped out of Dorothy's arms and hid under the bed, and the girl started to get him.",
              "tones": {
                  "category_id": "emotion_tone",
                  "category_name": "Emotion Tone",
                  "tones": [
                      {
                          "score": 0.125935,
                          "tone_id": "anger",
                          "tone_name": "Anger"
                      },
                      {
                          "score": 0.266399,
                          "tone_id": "disgust",
                          "tone_name": "Disgust"
                      },
                      {
                          "score": 0.355267,
                          "tone_id": "fear",
                          "tone_name": "Fear"
                      },
                      {
                          "score": 0.080023,
                          "tone_id": "joy",
                          "tone_name": "Joy"
                      },
                      {
                          "score": 0.248767,
                          "tone_id": "sadness",
                          "tone_name": "Sadness"
                      }
                  ]
              }
          },
          {
              "color": "green",
              "sentence_id": 1,
              "text": "Aunt Em, badly frightened, threw open the trap door in the floor and climbed down the ladder into the small, dark hole.",
              "tones": {
                  "category_id": "emotion_tone",
                  "category_name": "Emotion Tone",
                  "tones": [
                      {
                          "score": 0.176658,
                          "tone_id": "anger",
                          "tone_name": "Anger"
                      },
                      {
                          "score": 0.243482,
                          "tone_id": "disgust",
                          "tone_name": "Disgust"
                      },
                      {
                          "score": 0.572718,
                          "tone_id": "fear",
                          "tone_name": "Fear"
                      },
                      {
                          "score": 0.000616,
                          "tone_id": "joy",
                          "tone_name": "Joy"
                      },
                      {
                          "score": 0.194202,
                          "tone_id": "sadness",
                          "tone_name": "Sadness"
                      }
                  ]
              }
          },
          {
              "color": "white",
              "sentence_id": 2,
              "text": "Dorothy caught Toto at last and started to follow her aunt.",
              "tones": {
                  "category_id": "emotion_tone",
                  "category_name": "Emotion Tone",
                  "tones": [
                      {
                          "score": 0.041424,
                          "tone_id": "anger",
                          "tone_name": "Anger"
                      },
                      {
                          "score": 0.071232,
                          "tone_id": "disgust",
                          "tone_name": "Disgust"
                      },
                      {
                          "score": 0.088434,
                          "tone_id": "fear",
                          "tone_name": "Fear"
                      },
                      {
                          "score": 0.256426,
                          "tone_id": "joy",
                          "tone_name": "Joy"
                      },
                      {
                          "score": 0.409556,
                          "tone_id": "sadness",
                          "tone_name": "Sadness"
                      }
                  ]
              }
          },
          {
              "color": "green",
              "sentence_id": 3,
              "text": "When she was halfway across the room there came a great shriek from the wind, and the house shook so hard that she lost her footing and sat down suddenly upon the floor.Then a strange thing happened.The house whirled around two or three times and rose slowly through the air.",
              "tones": {
                  "category_id": "emotion_tone",
                  "category_name": "Emotion Tone",
                  "tones": [
                      {
                          "score": 0.037225,
                          "tone_id": "anger",
                          "tone_name": "Anger"
                      },
                      {
                          "score": 0.08243,
                          "tone_id": "disgust",
                          "tone_name": "Disgust"
                      },
                      {
                          "score": 0.617453,
                          "tone_id": "fear",
                          "tone_name": "Fear"
                      },
                      {
                          "score": 0.002112,
                          "tone_id": "joy",
                          "tone_name": "Joy"
                      },
                      {
                          "score": 0.362567,
                          "tone_id": "sadness",
                          "tone_name": "Sadness"
                      }
                  ]
              }
          },
          {
              "color": "white",
              "sentence_id": 4,
              "text": "Dorothy felt as if she were going up in a balloon.The north and south winds met where the house stood, and made it the exact center of the cyclone.",
              "tones": {
                  "category_id": "emotion_tone",
                  "category_name": "Emotion Tone",
                  "tones": [
                      {
                          "score": 0.074915,
                          "tone_id": "anger",
                          "tone_name": "Anger"
                      },
                      {
                          "score": 0.052393,
                          "tone_id": "disgust",
                          "tone_name": "Disgust"
                      },
                      {
                          "score": 0.422859,
                          "tone_id": "fear",
                          "tone_name": "Fear"
                      },
                      {
                          "score": 0.148246,
                          "tone_id": "joy",
                          "tone_name": "Joy"
                      },
                      {
                          "score": 0.253479,
                          "tone_id": "sadness",
                          "tone_name": "Sadness"
                      }
                  ]
              }
          },
          {
              "color": "green",
              "sentence_id": 5,
              "text": "In the middle of a cyclone the air is generally still, but the great pressure of the wind on every side of the house raised it up higher and higher, until it was at the very top of the cyclone; and there it remained and was carried miles and miles away as easily as you could carry a feather.It was very dark, and the wind howled horribly around her, but Dorothy found she was riding quite easily.",
              "tones": {
                  "category_id": "emotion_tone",
                  "category_name": "Emotion Tone",
                  "tones": [
                      {
                          "score": 0.045339,
                          "tone_id": "anger",
                          "tone_name": "Anger"
                      },
                      {
                          "score": 0.11045,
                          "tone_id": "disgust",
                          "tone_name": "Disgust"
                      },
                      {
                          "score": 0.726382,
                          "tone_id": "fear",
                          "tone_name": "Fear"
                      },
                      {
                          "score": 0.011533,
                          "tone_id": "joy",
                          "tone_name": "Joy"
                      },
                      {
                          "score": 0.191156,
                          "tone_id": "sadness",
                          "tone_name": "Sadness"
                      }
                  ]
              }
          },
          {
              "color": "white",
              "sentence_id": 6,
              "text": "After the first few whirls around, and one other time when the house tipped badly, she felt as if she were being rocked gently, like a baby in a cradle.Toto did not like it.",
              "tones": {
                  "category_id": "emotion_tone",
                  "category_name": "Emotion Tone",
                  "tones": [
                      {
                          "score": 0.06459,
                          "tone_id": "anger",
                          "tone_name": "Anger"
                      },
                      {
                          "score": 0.089513,
                          "tone_id": "disgust",
                          "tone_name": "Disgust"
                      },
                      {
                          "score": 0.29792,
                          "tone_id": "fear",
                          "tone_name": "Fear"
                      },
                      {
                          "score": 0.197679,
                          "tone_id": "joy",
                          "tone_name": "Joy"
                      },
                      {
                          "score": 0.280481,
                          "tone_id": "sadness",
                          "tone_name": "Sadness"
                      }
                  ]
              }
          },
          {
              "color": "white",
              "sentence_id": 7,
              "text": "He ran about the room, now here, now there, barking loudly; but Dorothy sat quite still on the floor and waited to see what would happen.Once Toto got too near the open trap door, and fell in; and at first the little girl thought she had lost him.",
              "tones": {
                  "category_id": "emotion_tone",
                  "category_name": "Emotion Tone",
                  "tones": [
                      {
                          "score": 0.192846,
                          "tone_id": "anger",
                          "tone_name": "Anger"
                      },
                      {
                          "score": 0.294867,
                          "tone_id": "disgust",
                          "tone_name": "Disgust"
                      },
                      {
                          "score": 0.378871,
                          "tone_id": "fear",
                          "tone_name": "Fear"
                      },
                      {
                          "score": 0.002349,
                          "tone_id": "joy",
                          "tone_name": "Joy"
                      },
                      {
                          "score": 0.32646,
                          "tone_id": "sadness",
                          "tone_name": "Sadness"
                      }
                  ]
              }
          },
          {
              "color": "green",
              "sentence_id": 8,
              "text": "But soon she saw one of his ears sticking up through the hole, for the strong pressure of the air was keeping him up so that he could not fall.",
              "tones": {
                  "category_id": "emotion_tone",
                  "category_name": "Emotion Tone",
                  "tones": [
                      {
                          "score": 0.187258,
                          "tone_id": "anger",
                          "tone_name": "Anger"
                      },
                      {
                          "score": 0.173303,
                          "tone_id": "disgust",
                          "tone_name": "Disgust"
                      },
                      {
                          "score": 0.517334,
                          "tone_id": "fear",
                          "tone_name": "Fear"
                      },
                      {
                          "score": 0.021068,
                          "tone_id": "joy",
                          "tone_name": "Joy"
                      },
                      {
                          "score": 0.242046,
                          "tone_id": "sadness",
                          "tone_name": "Sadness"
                      }
                  ]
              }
          },
          {
              "color": "blue",
              "sentence_id": 9,
              "text": "She crept to the hole, caught Toto by the ear, and dragged him into the room again, afterward closing the trap door so that no more accidents could happen.Hour after hour passed away, and slowly Dorothy got over her fright; but she felt quite lonely, and the wind shrieked so loudly all about her that she nearly became deaf.",
              "tones": {
                  "category_id": "emotion_tone",
                  "category_name": "Emotion Tone",
                  "tones": [
                      {
                          "score": 0.02285,
                          "tone_id": "anger",
                          "tone_name": "Anger"
                      },
                      {
                          "score": 0.060792,
                          "tone_id": "disgust",
                          "tone_name": "Disgust"
                      },
                      {
                          "score": 0.392909,
                          "tone_id": "fear",
                          "tone_name": "Fear"
                      },
                      {
                          "score": 0.000223,
                          "tone_id": "joy",
                          "tone_name": "Joy"
                      },
                      {
                          "score": 0.616635,
                          "tone_id": "sadness",
                          "tone_name": "Sadness"
                      }
                  ]
              }
          },
          {
              "color": "green",
              "sentence_id": 10,
              "text": "At first she had wondered if she would be dashed to pieces when the house fell again; but as the hours passed and nothing terrible happened, she stopped worrying and resolved to wait calmly and see what the future would bring.",
              "tones": {
                  "category_id": "emotion_tone",
                  "category_name": "Emotion Tone",
                  "tones": [
                      {
                          "score": 0.126943,
                          "tone_id": "anger",
                          "tone_name": "Anger"
                      },
                      {
                          "score": 0.117607,
                          "tone_id": "disgust",
                          "tone_name": "Disgust"
                      },
                      {
                          "score": 0.520338,
                          "tone_id": "fear",
                          "tone_name": "Fear"
                      },
                      {
                          "score": 0.004502,
                          "tone_id": "joy",
                          "tone_name": "Joy"
                      },
                      {
                          "score": 0.366921,
                          "tone_id": "sadness",
                          "tone_name": "Sadness"
                      }
                  ]
              }
          },
          {
              "color": "green",
              "sentence_id": 11,
              "text": "At last she crawled over the swaying floor to her bed, and lay down upon it; and Toto followed and lay down beside her.In spite of the swaying of the house and the wailing of the wind, Dorothy soon closed her eyes and fell fast asleep.",
              "tones": {
                  "category_id": "emotion_tone",
                  "category_name": "Emotion Tone",
                  "tones": [
                      {
                          "score": 0.095548,
                          "tone_id": "anger",
                          "tone_name": "Anger"
                      },
                      {
                          "score": 0.020395,
                          "tone_id": "disgust",
                          "tone_name": "Disgust"
                      },
                      {
                          "score": 0.726453,
                          "tone_id": "fear",
                          "tone_name": "Fear"
                      },
                      {
                          "score": 0.015081,
                          "tone_id": "joy",
                          "tone_name": "Joy"
                      },
                      {
                          "score": 0.21125,
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
