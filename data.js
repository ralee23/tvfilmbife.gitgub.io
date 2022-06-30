var APP_DATA = {
  "scenes": [
    {
      "id": "0-studio-talent",
      "name": "Studio Talent",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3887485427646578
      },
      "linkHotspots": [
        {
          "yaw": 1.655572470721543,
          "pitch": 0.14118343639616704,
          "rotation": 0,
          "target": "2-photography"
        },
        {
          "yaw": -0.24688449315076078,
          "pitch": 0.2569423682477172,
          "rotation": 0,
          "target": "1-studio-cameras"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.9056029072559593,
          "pitch": -0.1079107626622573,
          "title": "Bray Civic Plaza",
          "text": "Mermaid Arts Centre"
        },
        {
          "yaw": -2.5678801010755823,
          "pitch": 0.4015816145131694,
          "title": "Talent",
          "text": "Seats for Interviewees"
        },
        {
          "yaw": 2.3694756125766343,
          "pitch": 0.40128280014007345,
          "title": "Talent",
          "text": "Seat for Interviewer"
        },
        {
          "yaw": -1.6437953072455684,
          "pitch": 0.20260654151539015,
          "title": "Sound Desk",
          "text": "Preview Monitors"
        },
        {
          "yaw": -0.5025594259692205,
          "pitch": 0.1239077779809854,
          "title": "Teleprompter",
          "text": "Studio Camera with Teleprompter"
        },
        {
          "yaw": 0.3012110947900979,
          "pitch": 0.1544738640123846,
          "title": "Studio Cameras",
          "text": "Cameras with \"talkback\" to control room."
        },
        {
          "yaw": 0.7986229514037309,
          "pitch": 0.2689506622993516,
          "title": "Camera Crane",
          "text": "For shots of Audience and Talent"
        },
        {
          "yaw": 0.044370868061186286,
          "pitch": -0.8612616607298147,
          "title": "Studio Lights",
          "text": "LED panel Lights"
        },
        {
          "yaw": 0.17917190866846866,
          "pitch": 1.1641426326629407,
          "title": "Studio Lights",
          "text": "LED Floor Lights"
        }
      ]
    },
    {
      "id": "1-studio-cameras",
      "name": "Studio Cameras",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.124979067010246,
          "pitch": -0.010640382340186605,
          "rotation": 0,
          "target": "2-photography"
        },
        {
          "yaw": 2.9739659145986774,
          "pitch": 0.010756978507224346,
          "rotation": 0,
          "target": "0-studio-talent"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.7759626307926322,
          "pitch": 0.3922550186519729,
          "title": "Audience",
          "text": "TV Studio Audience"
        },
        {
          "yaw": -2.849580882903858,
          "pitch": 0.26393006107671724,
          "title": "Studio Camera",
          "text": "Close Up Camera for Talent"
        },
        {
          "yaw": -2.7194804906087775,
          "pitch": 0.6957853990527472,
          "title": "Talkback",
          "text": "Communication System for the Camera Operators"
        },
        {
          "yaw": -1.8289438684486967,
          "pitch": 0.17580384336093324,
          "title": "Teleprompter",
          "text": "Camera 4 and Teleprompter"
        },
        {
          "yaw": -2.4348299936356597,
          "pitch": -0.5546969500483492,
          "title": "Studio Lights",
          "text": "LED Light Panels"
        },
        {
          "yaw": 1.3274336796633346,
          "pitch": -0.008546040161270696,
          "title": "Greenscreen",
          "text": "For Live camera effects, like \"weather maps\".&nbsp;"
        },
        {
          "yaw": 2.4149751444734795,
          "pitch": 0.2869831527057496,
          "title": "Camera Crane",
          "text": "Dynamic Camera for shots of Audience and Talent."
        }
      ]
    },
    {
      "id": "2-photography",
      "name": "photography",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.0799877002201406,
          "pitch": 0.049519459540896094,
          "rotation": 0,
          "target": "1-studio-cameras"
        },
        {
          "yaw": -1.950870965588738,
          "pitch": 0.13110307143401023,
          "rotation": 0,
          "target": "0-studio-talent"
        },
        {
          "yaw": 1.6507323895043102,
          "pitch": 0.11678743324273988,
          "rotation": 0,
          "target": "3-lecture-hall"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.47043448772756946,
          "pitch": 0.0197910145985567,
          "title": "Greenscreen",
          "text": "For live camera effects such as \"weather maps\"."
        },
        {
          "yaw": -1.5446804533861211,
          "pitch": 0.07964417847010274,
          "title": "Live Studio",
          "text": "Live TV Studio for Recording and Streaming."
        },
        {
          "yaw": -2.9754864964705376,
          "pitch": 0.13760014627050765,
          "title": "Photography",
          "text": "Backdrop and Seat for Studio Photography.&nbsp;"
        },
        {
          "yaw": 2.663006098796073,
          "pitch": -0.33026530105135343,
          "title": "Softbox",
          "text": "Flash for Studio Photography."
        }
      ]
    },
    {
      "id": "3-lecture-hall",
      "name": "lecture hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5384958837473164,
          "pitch": 0.10565855393635992,
          "rotation": 0,
          "target": "2-photography"
        },
        {
          "yaw": -1.6865041738474886,
          "pitch": 0.08576131157860267,
          "rotation": 0,
          "target": "4-black-box"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.15036682786413103,
          "pitch": 0.09073157146062094,
          "title": "Student Seats",
          "text": "Seats for lectures and playback."
        },
        {
          "yaw": 3.038951169667305,
          "pitch": -0.23772183287335658,
          "title": "Playback System",
          "text": "For reviewing Student Work"
        },
        {
          "yaw": -1.1503012368676409,
          "pitch": -0.08387064802636246,
          "title": "Black Box",
          "text": "Blackout Area for Cinematography"
        }
      ]
    },
    {
      "id": "4-black-box",
      "name": "black box",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.2957039694604511,
          "pitch": 0.19811843961172926,
          "rotation": 0,
          "target": "5-control-room"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.27683637740365086,
          "pitch": -0.11264044310091137,
          "title": "TV Studio Control Room",
          "text": "Control of Live Cameras and Sound."
        },
        {
          "yaw": -3.1131469274914956,
          "pitch": 0.01918143313643661,
          "title": "Black Box",
          "text": "This area is used for Lighting and Cinematography Classes.&nbsp;"
        }
      ]
    },
    {
      "id": "5-control-room",
      "name": "control room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.1515131913617758,
          "pitch": 0.2531201914408463,
          "rotation": 0,
          "target": "4-black-box"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.1579516894836104,
          "pitch": -0.13476240430181896,
          "title": "Black Box",
          "text": "Lighting and Cinematography Space."
        },
        {
          "yaw": -2.1299073523863257,
          "pitch": 0.33979524674673733,
          "title": "ATEM Vision Mixer",
          "text": "PC for switching betwenn Live Sources.&nbsp;"
        },
        {
          "yaw": -3.0703479624836874,
          "pitch": 0.9231833161246641,
          "title": "Vision Mixer",
          "text": "For camera selection"
        },
        {
          "yaw": -3.0663076081613205,
          "pitch": 0.13714645926182634,
          "title": "Live Preview Monitor",
          "text": "For seeing all the TV Station Inputs."
        },
        {
          "yaw": 2.4956966951479878,
          "pitch": 0.37431293662692866,
          "title": "VT Playback",
          "text": "For pre-recorded Adverts and media.&nbsp;"
        },
        {
          "yaw": 1.176100368106436,
          "pitch": 0.026693881949132248,
          "title": "VO Space",
          "text": "Booth for Recording Voice-Overs or Podcasts.&nbsp;"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
