import { Creature } from "../model/model"

export const Monsters: Creature[] = [
  {
    "id": "4da6f6f4-fff1-4ba0-9a87-589b6d7588e5",
    "mode": "custom",
    "name": "Aarakocra",
    "type": "humanoid",
    "src": "MM p.12",
    "cr": "1/4",
    "hp": 13,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "05155575-9c4f-4da2-9932-898568b4be83",
    "mode": "custom",
    "name": "Aboleth",
    "type": "aberration",
    "src": "MM p.13",
    "cr": "10",
    "hp": 135,
    "AC": 17,
    "actions": [
      {
        "id": "1dcc9fb4-f1f6-447d-9bc3-3d84f874f0ac",
        "name": "Tentacle",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 19.5,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "001f7bab-be0b-4f30-825b-8edca5106cbe",
    "mode": "custom",
    "name": "Abominable Yeti",
    "type": "monstrosity",
    "src": "MM p.306",
    "cr": "9",
    "hp": 137,
    "AC": 15,
    "actions": [
      {
        "id": "2de34d11-6b46-455b-af22-4bacba085d71",
        "name": "Claw",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 14,
        "toHit": 11,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "53907bbf-d324-4d2c-a46b-b24d5096c562",
        "name": "Chilling Gaze",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 21,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "a85cda07-256e-43dd-96a1-9a57a1ae0bbc",
        "name": "Cold Breath {@recharge}",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 45,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "a611517b-f0fe-4c29-b10f-4ec18bd8b01f",
    "mode": "custom",
    "name": "Acolyte",
    "type": "humanoid",
    "src": "MM p.342",
    "cr": "1/4",
    "hp": 9,
    "AC": 10,
    "actions": [
      {
        "id": "6ea9020b-a1b8-467a-9676-165e55a8a510",
        "name": "Club",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 2.5,
        "toHit": 2,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "6122e937-c302-4071-947b-7e586e0667be",
    "mode": "custom",
    "name": "Adult Black Dragon",
    "type": "dragon",
    "src": "MM p.88",
    "cr": "14",
    "hp": 195,
    "AC": 19,
    "actions": [
      {
        "id": "cadf8922-ad35-44eb-b69d-5888adc4144a",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 4.5,
        "toHit": 11,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "66997f8e-dd0b-4d38-b6ad-b940330b2bc3",
        "name": "Acid Breath",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 54,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "d1666be3-ea2b-485e-83e3-17be7fef16ae",
    "mode": "custom",
    "name": "Adult Blue Dracolich",
    "type": "undead",
    "src": "MM p.84",
    "cr": "17",
    "hp": 225,
    "AC": 19,
    "actions": [
      {
        "id": "b34ecf89-9947-49f0-beb4-c164fa01bb1e",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 5.5,
        "toHit": 13,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "dd94632b-6ee5-4e53-a83c-98b56e0149b7",
        "name": "Lightning Breath",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 66,
        "toHit": 10,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "68532415-b898-4aaa-8805-00923becb5b0",
    "mode": "custom",
    "name": "Adult Blue Dragon",
    "type": "dragon",
    "src": "MM p.91",
    "cr": "16",
    "hp": 225,
    "AC": 19,
    "actions": [
      {
        "id": "851dea01-e808-4246-917c-a0ff2f6c1596",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 5.5,
        "toHit": 12,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "14c8a939-7d79-4117-ae5e-d45e76514956",
        "name": "Lightning Breath",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 66,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "1e37a6fe-da33-41d5-8ba6-8efeaacd7d19",
    "mode": "custom",
    "name": "Adult Brass Dragon",
    "type": "dragon",
    "src": "MM p.105",
    "cr": "13",
    "hp": 172,
    "AC": 18,
    "actions": [
      {
        "id": "f6519cff-3100-4d3e-b128-83937d380341",
        "name": "Breath Weapons",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 45.5,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "5a7c6656-673f-4bc0-bbcf-993ac817f24b",
    "mode": "custom",
    "name": "Adult Bronze Dragon",
    "type": "dragon",
    "src": "MM p.108",
    "cr": "15",
    "hp": 212,
    "AC": 19,
    "actions": [
      {
        "id": "316d03a9-6e93-4d8e-89db-90f04294d35f",
        "name": "Breath Weapons",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 66,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "65dab996-2564-4c9c-9350-3b53fb36fb9d",
    "mode": "custom",
    "name": "Adult Copper Dragon",
    "type": "dragon",
    "src": "MM p.112",
    "cr": "14",
    "hp": 184,
    "AC": 18,
    "actions": [
      {
        "id": "0ab8fa91-f8f0-4939-adb6-aa8ca70eab74",
        "name": "Breath Weapons",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 54,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "a3b5285d-30b7-4d8a-ae0e-ec0588a4d097",
    "mode": "custom",
    "name": "Adult Gold Dragon",
    "type": "dragon",
    "src": "MM p.114",
    "cr": "17",
    "hp": 256,
    "AC": 19,
    "actions": [
      {
        "id": "161c0fa0-6206-4da9-8058-431a15ffde03",
        "name": "Breath Weapons",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 66,
        "toHit": 11,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "9c1efd08-1a13-4f31-bb7f-e8d76573151a",
    "mode": "custom",
    "name": "Adult Green Dragon",
    "type": "dragon",
    "src": "MM p.94",
    "cr": "15",
    "hp": 207,
    "AC": 19,
    "actions": [
      {
        "id": "0dbbea42-ea25-43ef-b55d-ad66500a3876",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7,
        "toHit": 11,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "e1b5b1d9-96ce-47ec-a801-1e568566222c",
        "name": "Poison Breath",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 56,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "4840a148-1c31-4d85-adb4-933b4e72e008",
    "mode": "custom",
    "name": "Adult Red Dragon",
    "type": "dragon",
    "src": "MM p.98",
    "cr": "17",
    "hp": 256,
    "AC": 19,
    "actions": [
      {
        "id": "76b3b45b-b42c-4a4e-b697-78fa16c76078",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7,
        "toHit": 14,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "c4127b66-79a7-4e8c-90bd-8fde58e440ac",
        "name": "Fire Breath",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 63,
        "toHit": 11,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "59e0eca8-6614-4553-8596-2c984bf669a8",
    "mode": "custom",
    "name": "Adult Silver Dragon",
    "type": "dragon",
    "src": "MM p.117",
    "cr": "16",
    "hp": 243,
    "AC": 19,
    "actions": [
      {
        "id": "c0a4e8e0-b6f0-488b-bf55-b126f8c6f47e",
        "name": "Breath Weapons",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 58.5,
        "toHit": 10,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "1f679f8b-d7dd-4660-b9c0-72bfc8d74539",
    "mode": "custom",
    "name": "Adult White Dragon",
    "type": "dragon",
    "src": "MM p.101",
    "cr": "13",
    "hp": 200,
    "AC": 18,
    "actions": [
      {
        "id": "6c3e894d-c3ad-4a9a-8d82-b78532ac66af",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 4.5,
        "toHit": 11,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "05b90717-a6d9-4cec-9f2a-3890c8f1a3af",
        "name": "Cold Breath",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 54,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "ed1167e7-0da2-4d48-89d3-584a6cdd18c1",
    "mode": "custom",
    "name": "Air Elemental",
    "type": "elemental",
    "src": "MM p.124",
    "cr": "5",
    "hp": 90,
    "AC": 15,
    "actions": [
      {
        "id": "76120529-c9f2-4627-ad38-cf5f2a043851",
        "name": "Whirlwind",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 3.5,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "852fae0e-166b-4776-a28d-c984e2582823",
    "mode": "custom",
    "name": "Allosaurus",
    "type": "beast",
    "src": "MM p.79",
    "cr": "2",
    "hp": 51,
    "AC": 13,
    "actions": [],
    "count": 1
  },
  {
    "id": "9d6ddec5-80b8-4f52-99dd-a3974ec99888",
    "mode": "custom",
    "name": "Ancient Black Dragon",
    "type": "dragon",
    "src": "MM p.87",
    "cr": "21",
    "hp": 367,
    "AC": 22,
    "actions": [
      {
        "id": "cebe6a7c-867a-4283-a8b1-14e3857e156c",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 9,
        "toHit": 15,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "dada0fa2-68dc-4514-8bd5-d8b9e2c11b93",
        "name": "Acid Breath",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 67.5,
        "toHit": 12,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "6e1740f2-81bc-4d0b-a2d6-486543b3abdb",
    "mode": "custom",
    "name": "Ancient Blue Dragon",
    "type": "dragon",
    "src": "MM p.90",
    "cr": "23",
    "hp": 481,
    "AC": 22,
    "actions": [
      {
        "id": "8e5b54dc-c028-47d1-810e-a4bba45fdf43",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 11,
        "toHit": 16,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "9727f862-b241-4a79-97be-82adcf91fb0b",
        "name": "Lightning Breath",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 88,
        "toHit": 13,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "5b756703-4c2c-4959-8207-967efe58542e",
    "mode": "custom",
    "name": "Ancient Brass Dragon",
    "type": "dragon",
    "src": "MM p.104",
    "cr": "20",
    "hp": 297,
    "AC": 20,
    "actions": [
      {
        "id": "d43ca0ea-f9b5-4784-ba5b-d7933088d8a9",
        "name": "Breath Weapons",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 56,
        "toHit": 11,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "bb59b0eb-6c06-4058-a682-cc455c26ecfe",
    "mode": "custom",
    "name": "Ancient Bronze Dragon",
    "type": "dragon",
    "src": "MM p.107",
    "cr": "22",
    "hp": 444,
    "AC": 22,
    "actions": [
      {
        "id": "31bb6bcf-864b-42c0-bb13-420bf1bf0c52",
        "name": "Breath Weapons",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 88,
        "toHit": 13,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "29d556d0-8897-45fc-ab9a-d5d347772c75",
    "mode": "custom",
    "name": "Ancient Copper Dragon",
    "type": "dragon",
    "src": "MM p.110",
    "cr": "21",
    "hp": 350,
    "AC": 21,
    "actions": [
      {
        "id": "093ef40a-b98a-4b79-80a4-b6ab987a3c76",
        "name": "Breath Weapons",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 63,
        "toHit": 12,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "2b35a59a-ab10-48d7-8076-bcc8f680b172",
    "mode": "custom",
    "name": "Ancient Gold Dragon",
    "type": "dragon",
    "src": "MM p.113",
    "cr": "24",
    "hp": 546,
    "AC": 22,
    "actions": [
      {
        "id": "f27d1962-1a13-47c0-98dc-5773aece965e",
        "name": "Breath Weapons",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 71.5,
        "toHit": 14,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "5238951a-de1e-4cdd-81ae-c28fc27feb7e",
    "mode": "custom",
    "name": "Ancient Green Dragon",
    "type": "dragon",
    "src": "MM p.93",
    "cr": "22",
    "hp": 385,
    "AC": 21,
    "actions": [
      {
        "id": "523a833d-c8f6-458a-a6ae-0d3f9d94c5ec",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10.5,
        "toHit": 15,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "65c91613-060a-48bc-b5cc-0513b11dcfa1",
        "name": "Poison Breath",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 77,
        "toHit": 12,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "8687afba-3c0c-4a8a-b68f-1a669d053cc2",
    "mode": "custom",
    "name": "Ancient Red Dragon",
    "type": "dragon",
    "src": "MM p.97",
    "cr": "24",
    "hp": 546,
    "AC": 22,
    "actions": [
      {
        "id": "3a752f7d-7f20-49b4-ac7b-b2812b935448",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 14,
        "toHit": 17,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "e42b8cc9-c42c-434c-94e3-9e79f9e41d77",
        "name": "Fire Breath",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 91,
        "toHit": 14,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "f517c052-eee0-4990-84f5-c5aee341aca8",
    "mode": "custom",
    "name": "Ancient Silver Dragon",
    "type": "dragon",
    "src": "MM p.116",
    "cr": "23",
    "hp": 487,
    "AC": 22,
    "actions": [
      {
        "id": "e22fa3b7-48e5-44a2-97d6-14108fe6ab6b",
        "name": "Breath Weapons",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 67.5,
        "toHit": 14,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "9faee3e5-273b-4423-8c14-3d906b263f23",
    "mode": "custom",
    "name": "Ancient White Dragon",
    "type": "dragon",
    "src": "MM p.100",
    "cr": "20",
    "hp": 333,
    "AC": 20,
    "actions": [
      {
        "id": "d0127ac4-e390-41df-a77e-4e9712a35936",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 9,
        "toHit": 14,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "82143a26-81c8-411f-b534-abe10ed69552",
        "name": "Cold Breath",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 72,
        "toHit": 12,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "c97844d3-b575-4960-b65c-155bc799dc76",
    "mode": "custom",
    "name": "Androsphinx",
    "type": "monstrosity",
    "src": "MM p.281",
    "cr": "17",
    "hp": 199,
    "AC": 17,
    "actions": [
      {
        "id": "a46cb433-12f4-4893-8db8-85f87ef608a7",
        "name": "Roar",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 44,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "71d0d430-915e-47f8-ab99-616cc2f876a8",
    "mode": "custom",
    "name": "Animated Armor",
    "type": "construct",
    "src": "MM p.19",
    "cr": "1",
    "hp": 33,
    "AC": 18,
    "actions": [],
    "count": 1
  },
  {
    "id": "5e99ec30-9ae3-4594-bb81-d3885ee4d382",
    "mode": "custom",
    "name": "Ankheg",
    "type": "monstrosity",
    "src": "MM p.21",
    "cr": "2",
    "hp": 39,
    "AC": 14,
    "actions": [
      {
        "id": "bbae5cc6-64a1-49dd-b79a-3f0a3f2819a0",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 3.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "aa2e3085-e06e-46ae-91dd-eca540f7eae3",
        "name": "Acid Spray {@recharge}",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10.5,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "abac3008-0748-4daa-a9f2-9120887b90a4",
    "mode": "custom",
    "name": "Ankylosaurus",
    "type": "beast",
    "src": "MM p.79",
    "cr": "3",
    "hp": 68,
    "AC": 15,
    "actions": [],
    "count": 1
  },
  {
    "id": "b593084d-7242-47f2-a487-a2279e7848a7",
    "mode": "custom",
    "name": "Ape",
    "type": "beast",
    "src": "MM p.317",
    "cr": "1/2",
    "hp": 19,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "71b6c041-6d13-4099-a174-1b5ef0fa1e57",
    "mode": "custom",
    "name": "Arcanaloth",
    "type": "fiend",
    "src": "MM p.313",
    "cr": "12",
    "hp": 104,
    "AC": 17,
    "actions": [
      {
        "id": "6463b079-a9cc-464a-863d-366d83d3ac16",
        "name": "Claws",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10.5,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "106b6ef0-237d-4825-8dc2-0184f4faeed7",
    "mode": "custom",
    "name": "Archmage",
    "type": "humanoid",
    "src": "MM p.342",
    "cr": "12",
    "hp": 99,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "5374fb85-1411-421d-8e43-28022fba1842",
    "mode": "custom",
    "name": "Assassin",
    "type": "humanoid",
    "src": "MM p.343",
    "cr": "8",
    "hp": 78,
    "AC": 15,
    "actions": [
      {
        "id": "564a1a59-f01a-4b15-a4d2-46bf393ea182",
        "name": "Shortsword",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 49,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "5fae368f-0041-4313-b7ae-24899f320efc",
        "name": "Light Crossbow",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 24.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "6bec85ef-b695-4ca8-8000-58b8fc96273d",
    "mode": "custom",
    "name": "Awakened Shrub",
    "type": "plant",
    "src": "MM p.317",
    "cr": "0",
    "hp": 10,
    "AC": 9,
    "actions": [],
    "count": 1
  },
  {
    "id": "49c3a38d-c502-4cd4-9768-1e91caed95b8",
    "mode": "custom",
    "name": "Awakened Tree",
    "type": "plant",
    "src": "MM p.317",
    "cr": "2",
    "hp": 59,
    "AC": 13,
    "actions": [],
    "count": 1
  },
  {
    "id": "303dd44f-7936-4f94-ab46-86da120104a2",
    "mode": "custom",
    "name": "Axe Beak",
    "type": "beast",
    "src": "MM p.317",
    "cr": "1/4",
    "hp": 19,
    "AC": 11,
    "actions": [],
    "count": 1
  },
  {
    "id": "dc45307d-bf3b-4fe8-9a9e-3993fb1e057f",
    "mode": "custom",
    "name": "Azer",
    "type": "elemental",
    "src": "MM p.22",
    "cr": "2",
    "hp": 39,
    "AC": 17,
    "actions": [
      {
        "id": "c396d766-73f0-434c-81d2-37fb62464b8e",
        "name": "Warhammer",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 3.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "9ddf9acb-7ef2-4d9c-a2fa-e280513059a9",
    "mode": "custom",
    "name": "Baboon",
    "type": "beast",
    "src": "MM p.318",
    "cr": "0",
    "hp": 3,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "666af2b7-e436-46d3-8cd9-17ddc57a728c",
    "mode": "custom",
    "name": "Badger",
    "type": "beast",
    "src": "MM p.318",
    "cr": "0",
    "hp": 3,
    "AC": 10,
    "actions": [],
    "count": 1
  },
  {
    "id": "d8d97e58-6de7-4429-9451-be2ba130f64f",
    "mode": "custom",
    "name": "Balor",
    "type": "fiend",
    "src": "MM p.55",
    "cr": "19",
    "hp": 262,
    "AC": 19,
    "actions": [
      {
        "id": "a80486d8-6e3e-448a-bb24-3f9e96dc3b4d",
        "name": "Longsword",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 13.5,
        "toHit": 14,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "ac58f193-25f6-495e-b1ad-b0d19aa765f8",
        "name": "Whip",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10.5,
        "toHit": 14,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "b89a62d4-f35a-4523-9958-baf7abc265a0",
    "mode": "custom",
    "name": "Bandit",
    "type": "humanoid",
    "src": "MM p.343",
    "cr": "1/8",
    "hp": 11,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "05d2ec3b-6966-4730-99e4-2d97a6430929",
    "mode": "custom",
    "name": "Bandit Captain",
    "type": "humanoid",
    "src": "MM p.344",
    "cr": "2",
    "hp": 65,
    "AC": 15,
    "actions": [],
    "count": 1
  },
  {
    "id": "565835de-519d-46f0-a39d-859543c6e717",
    "mode": "custom",
    "name": "Banshee",
    "type": "undead",
    "src": "MM p.23",
    "cr": "4",
    "hp": 58,
    "AC": 12,
    "actions": [
      {
        "id": "ffd18628-fa01-4af7-a315-cde81508bc17",
        "name": "Wail",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/day",
        "condition": "is available",
        "dpr": 10.5,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "f9dba4a2-a088-4ffd-acfc-de449644a08e",
    "mode": "custom",
    "name": "Barbed Devil",
    "type": "fiend",
    "src": "MM p.70",
    "cr": "5",
    "hp": 110,
    "AC": 15,
    "actions": [
      {
        "id": "c2bd85ae-f84b-4f75-8bdd-18ba25bd2d61",
        "name": "Hurl Flame",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "07c24531-ebe8-4c3c-a40a-74f44657263b",
    "mode": "custom",
    "name": "Barlgura",
    "type": "fiend",
    "src": "MM p.56",
    "cr": "5",
    "hp": 68,
    "AC": 15,
    "actions": [],
    "count": 1
  },
  {
    "id": "0053405b-6fdb-49b0-9305-dfd97f5d71ce",
    "mode": "custom",
    "name": "Basilisk",
    "type": "monstrosity",
    "src": "MM p.24",
    "cr": "3",
    "hp": 52,
    "AC": 15,
    "actions": [
      {
        "id": "b492aaea-f6bf-4d29-93d7-bbcc6b5467f7",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "9a6ca079-28c1-412c-b01d-6be384c531c3",
    "mode": "custom",
    "name": "Bat",
    "type": "beast",
    "src": "MM p.318",
    "cr": "0",
    "hp": 1,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "95794587-17e6-4ae9-b053-d43e2f703fc3",
    "mode": "custom",
    "name": "Bearded Devil",
    "type": "fiend",
    "src": "MM p.70",
    "cr": "3",
    "hp": 52,
    "AC": 13,
    "actions": [],
    "count": 1
  },
  {
    "id": "193d0e9b-9c60-4b61-93b8-134528030a04",
    "mode": "custom",
    "name": "Behir",
    "type": "monstrosity",
    "src": "MM p.25",
    "cr": "11",
    "hp": 168,
    "AC": 17,
    "actions": [
      {
        "id": "75563a80-c931-42fa-a648-a2851d304da0",
        "name": "Lightning Breath",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 66,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 2
      },
      {
        "id": "b43ce340-68c3-4b02-b497-19802bf4d364",
        "name": "Swallow",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 21,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "ee969122-9295-426b-946e-5fc15bae7810",
    "mode": "custom",
    "name": "Beholder",
    "type": "aberration",
    "src": "MM p.28",
    "cr": "13",
    "hp": 180,
    "AC": 18,
    "actions": [
      {
        "id": "f0d2bba8-f9ed-4e3c-8138-ecfeb148d2cc",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 14,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "2d1e0bf3-2ed3-4cd6-b814-c0992144dddf",
        "name": "Eye Rays",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 136,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "87ccd749-0c5c-4d9c-be74-c2cb500d8e91",
    "mode": "custom",
    "name": "Beholder Zombie",
    "type": "undead",
    "src": "MM p.316",
    "cr": "5",
    "hp": 93,
    "AC": 15,
    "actions": [
      {
        "id": "ba24891d-4ae3-49eb-89ee-3ca1b2e4cd2e",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 14,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "29e747ce-02f3-4880-8633-e1dbf2a78dca",
        "name": "Eye Ray",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 81,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "1352c8db-a5a1-4104-8a93-0688ce502572",
    "mode": "custom",
    "name": "Berserker",
    "type": "humanoid",
    "src": "MM p.344",
    "cr": "2",
    "hp": 67,
    "AC": 13,
    "actions": [],
    "count": 1
  },
  {
    "id": "6983ee52-043c-4cfe-aa40-79ccfaf90715",
    "mode": "custom",
    "name": "Black Bear",
    "type": "beast",
    "src": "MM p.318",
    "cr": "1/2",
    "hp": 19,
    "AC": 11,
    "actions": [],
    "count": 1
  },
  {
    "id": "b802dafe-7dce-4210-b2f0-70e068e0a097",
    "mode": "custom",
    "name": "Black Dragon Wyrmling",
    "type": "dragon",
    "src": "MM p.88",
    "cr": "2",
    "hp": 33,
    "AC": 17,
    "actions": [
      {
        "id": "ecf71094-9030-4ae4-9b0b-6a0160f9d640",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 2.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "2baf3ffa-aff1-4b1e-82da-b41c98254672",
        "name": "Acid Breath",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 22.5,
        "toHit": 1,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "55644f46-d945-4d83-a639-a7014b2efc35",
    "mode": "custom",
    "name": "Black Pudding",
    "type": "ooze",
    "src": "MM p.241",
    "cr": "4",
    "hp": 85,
    "AC": 7,
    "actions": [
      {
        "id": "f4059848-2633-4cec-856d-8bdb3d2103dd",
        "name": "Pseudopod",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 18,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "c4b1a111-59db-4133-8bc2-81cd544661be",
    "mode": "custom",
    "name": "Blink Dog",
    "type": "fey",
    "src": "MM p.318",
    "cr": "1/4",
    "hp": 22,
    "AC": 13,
    "actions": [],
    "count": 1
  },
  {
    "id": "51505da5-f9a5-48b8-9e2e-7394a7368c5a",
    "mode": "custom",
    "name": "Blood Hawk",
    "type": "beast",
    "src": "MM p.319",
    "cr": "1/8",
    "hp": 7,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "29594fe0-204a-4324-ac4d-a212efa4e906",
    "mode": "custom",
    "name": "Blue Dragon Wyrmling",
    "type": "dragon",
    "src": "MM p.91",
    "cr": "3",
    "hp": 52,
    "AC": 17,
    "actions": [
      {
        "id": "307d1192-14a8-49d6-9db7-dd1e6572997a",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 3.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "001bc829-bd9f-4c69-85d4-02475ecf6bc8",
        "name": "Lightning Breath",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 22,
        "toHit": 2,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "b2f0ad13-746b-4ac2-a44e-0b19c4df1bdc",
    "mode": "custom",
    "name": "Blue Slaad",
    "type": "aberration",
    "src": "MM p.276",
    "cr": "7",
    "hp": 123,
    "AC": 15,
    "actions": [],
    "count": 1
  },
  {
    "id": "27440f4c-3e5c-4191-83a4-e286a6a74565",
    "mode": "custom",
    "name": "Boar",
    "type": "beast",
    "src": "MM p.319",
    "cr": "1/4",
    "hp": 11,
    "AC": 11,
    "actions": [],
    "count": 1
  },
  {
    "id": "3dfe99aa-347e-4792-824d-967b56e352f2",
    "mode": "custom",
    "name": "Bone Devil",
    "type": "fiend",
    "src": "MM p.71",
    "cr": "9",
    "hp": 142,
    "AC": 19,
    "actions": [
      {
        "id": "6e846365-12c9-4b1f-8d1d-a21de664d429",
        "name": "Sting",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 17.5,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "919abbb3-1c74-497e-af55-10250540debf",
    "mode": "custom",
    "name": "Bone Naga (Guardian)",
    "type": "undead",
    "src": "MM p.233",
    "cr": "4",
    "hp": 58,
    "AC": 15,
    "actions": [
      {
        "id": "8df3d21b-d9c5-4f6f-ac9a-031f31a250e5",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "6f9440e7-0fca-4898-8430-7546aa39e943",
    "mode": "custom",
    "name": "Bone Naga (Spirit)",
    "type": "undead",
    "src": "MM p.233",
    "cr": "4",
    "hp": 58,
    "AC": 15,
    "actions": [
      {
        "id": "6444403a-9e6f-4e13-876b-ae20c466bc6a",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "33d04604-8d6c-43e5-8b0c-1b534f381a33",
    "mode": "custom",
    "name": "Brass Dragon Wyrmling",
    "type": "dragon",
    "src": "MM p.106",
    "cr": "1",
    "hp": 16,
    "AC": 16,
    "actions": [
      {
        "id": "530fef7f-faa6-41c8-b564-57e0c1036646",
        "name": "Breath Weapons",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 14,
        "toHit": 1,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "b593a584-5ce0-46ee-b5b3-93b9cdce3ff9",
    "mode": "custom",
    "name": "Bronze Dragon Wyrmling",
    "type": "dragon",
    "src": "MM p.109",
    "cr": "2",
    "hp": 32,
    "AC": 17,
    "actions": [
      {
        "id": "d512dfb4-d0d0-4bcc-a652-63e0729dfddd",
        "name": "Breath Weapons",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 16.5,
        "toHit": 2,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "c1ff06ad-b2e4-4e8a-9d76-abf30264c88c",
    "mode": "custom",
    "name": "Brown Bear",
    "type": "beast",
    "src": "MM p.319",
    "cr": "1",
    "hp": 34,
    "AC": 11,
    "actions": [],
    "count": 1
  },
  {
    "id": "bab32d58-f7fc-405e-933f-5f9b1b24586f",
    "mode": "custom",
    "name": "Bugbear",
    "type": "humanoid",
    "src": "MM p.33",
    "cr": "1",
    "hp": 27,
    "AC": 16,
    "actions": [],
    "count": 1
  },
  {
    "id": "d11de3cc-bbcd-4e93-8e72-13382cabefea",
    "mode": "custom",
    "name": "Bugbear Chief",
    "type": "humanoid",
    "src": "MM p.33",
    "cr": "3",
    "hp": 65,
    "AC": 17,
    "actions": [],
    "count": 1
  },
  {
    "id": "d6281317-6452-4030-8843-88ec9a13a941",
    "mode": "custom",
    "name": "Bulette",
    "type": "monstrosity",
    "src": "MM p.34",
    "cr": "5",
    "hp": 94,
    "AC": 17,
    "actions": [],
    "count": 1
  },
  {
    "id": "fabb7cb6-8414-4d18-8ccf-7167f7fa9d3a",
    "mode": "custom",
    "name": "Bullywug",
    "type": "humanoid",
    "src": "MM p.35",
    "cr": "1/4",
    "hp": 11,
    "AC": 15,
    "actions": [],
    "count": 1
  },
  {
    "id": "52a651c0-d95c-48aa-849a-b6b0d2da42eb",
    "mode": "custom",
    "name": "Cambion",
    "type": "fiend",
    "src": "MM p.36",
    "cr": "5",
    "hp": 82,
    "AC": 19,
    "actions": [
      {
        "id": "508e50c7-8c1c-4903-a927-5bbbad0e4c1c",
        "name": "Spear",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 3.5,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "1a3a3381-abc4-416e-b8f2-496a8595840c",
        "name": "Fire Ray",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10.5,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "5d024b4b-c9d2-4c8c-b827-e2ced4dbc5c0",
    "mode": "custom",
    "name": "Camel",
    "type": "beast",
    "src": "MM p.320",
    "cr": "1/8",
    "hp": 15,
    "AC": 9,
    "actions": [
      {
        "id": "acd1c3ac-0090-435d-a1a4-34948ff9f163",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 2.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "757760ca-cbb3-4d0e-ba44-a27131824f40",
    "mode": "custom",
    "name": "Carrion Crawler",
    "type": "monstrosity",
    "src": "MM p.37",
    "cr": "2",
    "hp": 51,
    "AC": 13,
    "actions": [],
    "count": 1
  },
  {
    "id": "3991d937-a58a-4895-bb8b-9e41f809c49a",
    "mode": "custom",
    "name": "Cat",
    "type": "beast",
    "src": "MM p.320",
    "cr": "0",
    "hp": 2,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "d7ec4de9-2bf4-4236-9466-526951778794",
    "mode": "custom",
    "name": "Cave Bear",
    "type": "beast",
    "src": "MM p.334",
    "cr": "2",
    "hp": 42,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "884680d4-de41-4ec9-84d8-695877295abd",
    "mode": "custom",
    "name": "Centaur",
    "type": "monstrosity",
    "src": "MM p.38",
    "cr": "2",
    "hp": 45,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "f28d23d2-5c9b-4c06-880a-961d3af3650e",
    "mode": "custom",
    "name": "Chain Devil",
    "type": "fiend",
    "src": "MM p.72",
    "cr": "8",
    "hp": 85,
    "AC": 16,
    "actions": [
      {
        "id": "e5e735ec-e1b7-4ceb-b6ce-80491e320ebf",
        "name": "Chain",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 14,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "cc5464da-d8c6-4e1b-902b-270072e73aa3",
    "mode": "custom",
    "name": "Chasme",
    "type": "fiend",
    "src": "MM p.57",
    "cr": "6",
    "hp": 84,
    "AC": 15,
    "actions": [
      {
        "id": "b2a81f10-c7aa-4093-b95d-39d355072173",
        "name": "Proboscis",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 24.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "71ed7b82-f56f-461d-84e4-7bccded9d9f4",
    "mode": "custom",
    "name": "Chimera",
    "type": "monstrosity",
    "src": "MM p.39",
    "cr": "6",
    "hp": 114,
    "AC": 14,
    "actions": [
      {
        "id": "e88fbe47-492c-40ee-a47f-cf3698751999",
        "name": "Fire Breath",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 31.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "e003fed7-7461-4ead-9557-99d0324b94fc",
    "mode": "custom",
    "name": "Chuul",
    "type": "aberration",
    "src": "MM p.40",
    "cr": "4",
    "hp": 93,
    "AC": 16,
    "actions": [],
    "count": 1
  },
  {
    "id": "141520a8-9ec2-4176-a7bc-ce56d50382b3",
    "mode": "custom",
    "name": "Clay Golem",
    "type": "construct",
    "src": "MM p.168",
    "cr": "9",
    "hp": 133,
    "AC": 14,
    "actions": [],
    "count": 1
  },
  {
    "id": "a2f357de-f2d3-426d-b13d-10f945806dd9",
    "mode": "custom",
    "name": "Cloaker",
    "type": "aberration",
    "src": "MM p.41",
    "cr": "8",
    "hp": 78,
    "AC": 14,
    "actions": [],
    "count": 1
  },
  {
    "id": "abddc6c0-ad2a-4515-b891-f9f434850d36",
    "mode": "custom",
    "name": "Cloud Giant",
    "type": "giant",
    "src": "MM p.154",
    "cr": "9",
    "hp": 200,
    "AC": 14,
    "actions": [],
    "count": 1
  },
  {
    "id": "7285a758-0f18-4e47-880e-a226185343f3",
    "mode": "custom",
    "name": "Cockatrice",
    "type": "monstrosity",
    "src": "MM p.42",
    "cr": "1/2",
    "hp": 27,
    "AC": 11,
    "actions": [],
    "count": 1
  },
  {
    "id": "d207d5f8-4897-481b-a9bd-7a5cf4fe1412",
    "mode": "custom",
    "name": "Commoner",
    "type": "humanoid",
    "src": "MM p.345",
    "cr": "0",
    "hp": 4,
    "AC": 10,
    "actions": [
      {
        "id": "57599456-687f-4480-8c35-7bee4ee11fca",
        "name": "Club",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 2.5,
        "toHit": 2,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "56d44e5a-e9a8-4020-bdc0-f7101f5d82a3",
    "mode": "custom",
    "name": "Constrictor Snake",
    "type": "beast",
    "src": "MM p.320",
    "cr": "1/4",
    "hp": 13,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "4269e9f4-e106-4550-851b-e700d6c1517c",
    "mode": "custom",
    "name": "Copper Dragon Wyrmling",
    "type": "dragon",
    "src": "MM p.111",
    "cr": "1",
    "hp": 22,
    "AC": 16,
    "actions": [
      {
        "id": "f9906e18-8b13-4540-b509-8e7a116bdb8d",
        "name": "Breath Weapons",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 18,
        "toHit": 1,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "9058bfd1-0ebf-4c4b-9d56-5876d45045ec",
    "mode": "custom",
    "name": "Couatl",
    "type": "celestial",
    "src": "MM p.43",
    "cr": "4",
    "hp": 97,
    "AC": 19,
    "actions": [],
    "count": 1
  },
  {
    "id": "315ececb-b11e-406e-ad15-47c8ccc9ff35",
    "mode": "custom",
    "name": "Crab",
    "type": "beast",
    "src": "MM p.320",
    "cr": "0",
    "hp": 2,
    "AC": 11,
    "actions": [],
    "count": 1
  },
  {
    "id": "74684823-fca4-4332-b403-5ebff11ec460",
    "mode": "custom",
    "name": "Crawling Claw",
    "type": "undead",
    "src": "MM p.44",
    "cr": "0",
    "hp": 2,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "99cc6091-af30-4c47-a6ad-3b0b22aaff62",
    "mode": "custom",
    "name": "Crocodile",
    "type": "beast",
    "src": "MM p.320",
    "cr": "1/2",
    "hp": 19,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "57cfbced-0b20-4e98-a844-0af94dfd3e2c",
    "mode": "custom",
    "name": "Cult Fanatic",
    "type": "humanoid",
    "src": "MM p.345",
    "cr": "2",
    "hp": 33,
    "AC": 13,
    "actions": [],
    "count": 1
  },
  {
    "id": "e7ec3623-1956-4de9-ba22-302709bb750e",
    "mode": "custom",
    "name": "Cultist",
    "type": "humanoid",
    "src": "MM p.345",
    "cr": "1/8",
    "hp": 9,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "8f794c3c-5889-4be9-b083-a2fb9ee6a200",
    "mode": "custom",
    "name": "Cyclops",
    "type": "giant",
    "src": "MM p.45",
    "cr": "6",
    "hp": 138,
    "AC": 14,
    "actions": [],
    "count": 1
  },
  {
    "id": "1123d22e-14cb-45cb-bf51-f33e26a58e49",
    "mode": "custom",
    "name": "Dao",
    "type": "elemental",
    "src": "MM p.143",
    "cr": "11",
    "hp": 187,
    "AC": 18,
    "actions": [],
    "count": 1
  },
  {
    "id": "b6ce2662-a2fd-4b36-ad5b-f79a56c3159d",
    "mode": "custom",
    "name": "Darkmantle",
    "type": "monstrosity",
    "src": "MM p.46",
    "cr": "1/2",
    "hp": 22,
    "AC": 11,
    "actions": [],
    "count": 1
  },
  {
    "id": "d43552d8-2000-42cc-b8eb-c9e8ec72c871",
    "mode": "custom",
    "name": "Death Dog",
    "type": "monstrosity",
    "src": "MM p.321",
    "cr": "1",
    "hp": 39,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "befab185-da42-493a-aff5-5170f0f3a24c",
    "mode": "custom",
    "name": "Death Knight",
    "type": "undead",
    "src": "MM p.47",
    "cr": "17",
    "hp": 180,
    "AC": 20,
    "actions": [
      {
        "id": "9c5bfff2-00ce-46f0-b4e1-a3432b15d2a7",
        "name": "Longsword",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 54,
        "toHit": 11,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "3674ad08-d876-439c-bf61-54771d4d7a64",
        "name": "Hellfire Orb",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/day",
        "condition": "is available",
        "dpr": 70,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "d7be75fe-5475-45cf-8337-64bf18563ae2",
    "mode": "custom",
    "name": "Death Slaad",
    "type": "aberration",
    "src": "MM p.278",
    "cr": "10",
    "hp": 170,
    "AC": 18,
    "actions": [
      {
        "id": "ba944a88-a721-406b-8f4f-4264c6a1e8f3",
        "name": "Bite (Slaad Form Only)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "0a2cbce4-b2f3-41c2-b937-1d9193df2f88",
        "name": "Claws (Slaad Form Only)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "c303ef50-87b4-45de-b020-eeab1ca2d54d",
        "name": "Greatsword",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 14,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "347fbea8-f20e-4fb8-a3f3-20bc057e0291",
    "mode": "custom",
    "name": "Death Tyrant",
    "type": "undead",
    "src": "MM p.29",
    "cr": "14",
    "hp": 187,
    "AC": 19,
    "actions": [
      {
        "id": "bfb5228d-fd85-423e-b235-2d07ae2ae9ee",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 14,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "edd9496a-04dd-40e7-a904-32b32577410f",
        "name": "Eye Rays",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 136,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "4bad90e0-1c16-4b73-b273-40c236b79b25",
    "mode": "custom",
    "name": "Deep Gnome (Svirfneblin)",
    "type": "humanoid",
    "src": "MM p.164",
    "cr": "1/2",
    "hp": 16,
    "AC": 15,
    "actions": [],
    "count": 1
  },
  {
    "id": "b5c0cb20-e0fd-446a-aca4-abcd73012076",
    "mode": "custom",
    "name": "Deer",
    "type": "beast",
    "src": "MM p.321",
    "cr": "0",
    "hp": 4,
    "AC": 13,
    "actions": [
      {
        "id": "497c8118-a829-4920-8082-8a4c27139d60",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 2.5,
        "toHit": 2,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "1823ff5a-6b96-474d-b82c-f3257d451295",
    "mode": "custom",
    "name": "Demilich",
    "type": "undead",
    "src": "MM p.48",
    "cr": "18",
    "hp": 80,
    "AC": 20,
    "actions": [
      {
        "id": "ed643c3d-c520-4619-8a33-072ff2d2228f",
        "name": "Life Drain",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 21,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "c43e63b8-0ada-42cb-8405-717e9aa5b234",
    "mode": "custom",
    "name": "Deva",
    "type": "celestial",
    "src": "MM p.16",
    "cr": "10",
    "hp": 136,
    "AC": 17,
    "actions": [
      {
        "id": "3d9a3c69-5fb3-4d08-8c32-718b986c1835",
        "name": "Mace",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 18,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "b405bb04-612d-4a77-8d36-c0e5efc7e70b",
    "mode": "custom",
    "name": "Dire Wolf",
    "type": "beast",
    "src": "MM p.321",
    "cr": "1",
    "hp": 37,
    "AC": 14,
    "actions": [],
    "count": 1
  },
  {
    "id": "2c186980-b359-4d0a-be7a-7f272c57f461",
    "mode": "custom",
    "name": "Displacer Beast",
    "type": "monstrosity",
    "src": "MM p.81",
    "cr": "3",
    "hp": 85,
    "AC": 13,
    "actions": [
      {
        "id": "4aa39578-1893-4577-85db-f3b8ea866c11",
        "name": "Tentacle",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "1936254e-9b44-4e3e-ad30-45df6682344c",
    "mode": "custom",
    "name": "Djinni",
    "type": "elemental",
    "src": "MM p.144",
    "cr": "11",
    "hp": 161,
    "AC": 17,
    "actions": [
      {
        "id": "41d9048f-a3f4-4a11-9506-732490b14109",
        "name": "Scimitar",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10.5,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "0e1d0197-d307-46be-84c5-4c99c70733d8",
    "mode": "custom",
    "name": "Doppelganger",
    "type": "monstrosity",
    "src": "MM p.82",
    "cr": "3",
    "hp": 52,
    "AC": 14,
    "actions": [],
    "count": 1
  },
  {
    "id": "4d08f594-38e2-4135-8a1d-8a11b58cce38",
    "mode": "custom",
    "name": "Draft Horse",
    "type": "beast",
    "src": "MM p.321",
    "cr": "1/4",
    "hp": 19,
    "AC": 10,
    "actions": [],
    "count": 1
  },
  {
    "id": "ff98e6e7-6ccf-44ed-864d-c9730ad478d6",
    "mode": "custom",
    "name": "Dragon Turtle",
    "type": "dragon",
    "src": "MM p.119",
    "cr": "17",
    "hp": 341,
    "AC": 20,
    "actions": [
      {
        "id": "0d35c37f-d507-4c0f-af3e-1ecd632cf581",
        "name": "Steam Breath",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 52.5,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "68df06ac-a590-48f2-815f-cdd4e36d8de0",
    "mode": "custom",
    "name": "Dretch",
    "type": "fiend",
    "src": "MM p.57",
    "cr": "1/4",
    "hp": 18,
    "AC": 11,
    "actions": [
      {
        "id": "cf4d5c4a-1138-475b-b145-e181319feb36",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 3.5,
        "toHit": 2,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "6bf4f7d7-dfdf-4605-aa63-1a255a186c82",
        "name": "Claws",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 5,
        "toHit": 2,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "f6e594fd-2908-4f07-81bc-317119b7c674",
    "mode": "custom",
    "name": "Drider",
    "type": "monstrosity",
    "src": "MM p.120",
    "cr": "6",
    "hp": 123,
    "AC": 19,
    "actions": [
      {
        "id": "e1be5db2-9728-469f-9320-13a35d4c74e1",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 11.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "c1edc0bd-7ca3-4ce0-88f3-aa5b41082be5",
        "name": "Longbow",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 13.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "8cecbfe0-7851-4b32-820f-4202a18a9232",
    "mode": "custom",
    "name": "Drow",
    "type": "humanoid",
    "src": "MM p.128",
    "cr": "1/4",
    "hp": 13,
    "AC": 15,
    "actions": [],
    "count": 1
  },
  {
    "id": "44d4ff63-8589-4800-9e63-edcba8716b18",
    "mode": "custom",
    "name": "Drow Elite Warrior",
    "type": "humanoid",
    "src": "MM p.128",
    "cr": "5",
    "hp": 71,
    "AC": 18,
    "actions": [
      {
        "id": "d2d9ba1b-4d1f-42ae-b346-644f154875c5",
        "name": "Shortsword",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 21,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "824ad682-83b0-42ce-8e73-59cc28386010",
    "mode": "custom",
    "name": "Drow Mage",
    "type": "humanoid",
    "src": "MM p.129",
    "cr": "7",
    "hp": 45,
    "AC": 12,
    "actions": [
      {
        "id": "63fa49f3-4a02-462a-b0f0-cd04b600d6fd",
        "name": "Staff",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 3.5,
        "toHit": 2,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "e8ebc84a-c5ff-4285-9aa9-d536a0ed3112",
    "mode": "custom",
    "name": "Drow Priestess of Lolth",
    "type": "humanoid",
    "src": "MM p.129",
    "cr": "8",
    "hp": 71,
    "AC": 16,
    "actions": [
      {
        "id": "af9d4230-243b-4748-8a72-c8bb475945aa",
        "name": "Scourge",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 35,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "368077d5-eb40-4fd2-a860-f6ae4d67cea1",
        "name": "Summon Demon",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/day",
        "condition": "is available",
        "dpr": 5.5,
        "toHit": 0,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "a37a7ee3-fc31-4aca-9b3c-a71c591d342c",
    "mode": "custom",
    "name": "Druid",
    "type": "humanoid",
    "src": "MM p.346",
    "cr": "2",
    "hp": 27,
    "AC": 11,
    "actions": [
      {
        "id": "2dabb83d-e55d-4225-adac-00b0d3e57055",
        "name": "Quarterstaff",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 8,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "632c298f-c9ac-496f-9d73-ea6e7cc47ca7",
    "mode": "custom",
    "name": "Dryad",
    "type": "fey",
    "src": "MM p.121",
    "cr": "1",
    "hp": 22,
    "AC": 11,
    "actions": [
      {
        "id": "8afb449d-08da-460f-934e-78e788f92f5b",
        "name": "Club",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 2.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "01604327-452b-48f8-8198-40d35229a24f",
    "mode": "custom",
    "name": "Duergar",
    "type": "humanoid",
    "src": "MM p.122",
    "cr": "1",
    "hp": 26,
    "AC": 16,
    "actions": [],
    "count": 1
  },
  {
    "id": "6e0957d6-a689-456a-b11b-a0a981a3d89a",
    "mode": "custom",
    "name": "Duodrone",
    "type": "construct",
    "src": "MM p.225",
    "cr": "1/4",
    "hp": 11,
    "AC": 15,
    "actions": [
      {
        "id": "0307a53c-b0a1-4ce5-a968-9f46ea63626e",
        "name": "Fist",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 5,
        "toHit": 2,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "5fc031f3-ad60-4b9f-ad7f-9c8cbdd01a10",
    "mode": "custom",
    "name": "Dust Mephit",
    "type": "elemental",
    "src": "MM p.215",
    "cr": "1/2",
    "hp": 17,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "29ec3dd1-3208-4f8f-a4fd-19cf634dce30",
    "mode": "custom",
    "name": "Eagle",
    "type": "beast",
    "src": "MM p.322",
    "cr": "0",
    "hp": 3,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "9f95204b-d72e-4816-8fd5-15b5ae6464e4",
    "mode": "custom",
    "name": "Earth Elemental",
    "type": "elemental",
    "src": "MM p.124",
    "cr": "5",
    "hp": 126,
    "AC": 17,
    "actions": [],
    "count": 1
  },
  {
    "id": "c2f8ff05-a265-4a66-8b36-cb0ed3319a3c",
    "mode": "custom",
    "name": "Efreeti",
    "type": "elemental",
    "src": "MM p.145",
    "cr": "11",
    "hp": 200,
    "AC": 17,
    "actions": [
      {
        "id": "a45d366e-66d5-415d-995d-94eb732a1b90",
        "name": "Scimitar",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 14,
        "toHit": 10,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "1b2b1545-ca17-4c58-aa6a-b7d2e55351cc",
        "name": "Hurl Flame",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 17.5,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "70ef460d-9f8f-41c8-a0f6-e0aafd39a075",
    "mode": "custom",
    "name": "Elephant",
    "type": "beast",
    "src": "MM p.322",
    "cr": "4",
    "hp": 76,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "c30a6a19-6c84-4b5e-bded-aab40cc6fe7e",
    "mode": "custom",
    "name": "Elk",
    "type": "beast",
    "src": "MM p.322",
    "cr": "1/4",
    "hp": 13,
    "AC": 10,
    "actions": [],
    "count": 1
  },
  {
    "id": "c6b758be-c82f-4bd8-bd57-304d99e2b1a8",
    "mode": "custom",
    "name": "Empyrean",
    "type": "celestial",
    "src": "MM p.130",
    "cr": "23",
    "hp": 313,
    "AC": 22,
    "actions": [],
    "count": 1
  },
  {
    "id": "c5b4d413-b916-4d08-a54a-961f42c02e99",
    "mode": "custom",
    "name": "Erinyes",
    "type": "fiend",
    "src": "MM p.73",
    "cr": "12",
    "hp": 153,
    "AC": 18,
    "actions": [
      {
        "id": "130bdf00-7576-4107-bac7-f1874d86da4e",
        "name": "Longsword",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 13.5,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "5db7b8a8-b921-4c60-9a6b-cf1509b62ef8",
        "name": "Longbow",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 13.5,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "0a4d78b1-36ec-49ad-bfdf-627dc4359d10",
    "mode": "custom",
    "name": "Ettercap",
    "type": "monstrosity",
    "src": "MM p.131",
    "cr": "2",
    "hp": 44,
    "AC": 13,
    "actions": [
      {
        "id": "ebf84fb2-dad1-47f2-a02f-a83aea586156",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 4.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "389a432d-d6e7-4346-9c37-c05aa67ea655",
    "mode": "custom",
    "name": "Ettin",
    "type": "giant",
    "src": "MM p.132",
    "cr": "4",
    "hp": 85,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "75265efd-4a39-4a8a-9cea-060fd3456247",
    "mode": "custom",
    "name": "Faerie Dragon (Blue)",
    "type": "dragon",
    "src": "MM p.133",
    "cr": "2",
    "hp": 14,
    "AC": 15,
    "actions": [],
    "count": 1
  },
  {
    "id": "f43a3af0-5140-4c04-9309-7dfcddee2f71",
    "mode": "custom",
    "name": "Faerie Dragon (Green)",
    "type": "dragon",
    "src": "MM p.133",
    "cr": "2",
    "hp": 14,
    "AC": 15,
    "actions": [],
    "count": 1
  },
  {
    "id": "673b58c3-e6b8-4bde-8419-c54c569fad21",
    "mode": "custom",
    "name": "Faerie Dragon (Indigo)",
    "type": "dragon",
    "src": "MM p.133",
    "cr": "2",
    "hp": 14,
    "AC": 15,
    "actions": [],
    "count": 1
  },
  {
    "id": "0509cf8c-c117-4899-a8ee-6cc43e2eaf94",
    "mode": "custom",
    "name": "Faerie Dragon (Orange)",
    "type": "dragon",
    "src": "MM p.133",
    "cr": "1",
    "hp": 14,
    "AC": 15,
    "actions": [],
    "count": 1
  },
  {
    "id": "43f581bf-c3e3-4e3b-852d-6599ecac89cb",
    "mode": "custom",
    "name": "Faerie Dragon (Red)",
    "type": "dragon",
    "src": "MM p.133",
    "cr": "1",
    "hp": 14,
    "AC": 15,
    "actions": [],
    "count": 1
  },
  {
    "id": "0ac56e98-8945-454f-9cd0-cf1afb3c84d6",
    "mode": "custom",
    "name": "Faerie Dragon (Violet)",
    "type": "dragon",
    "src": "MM p.133",
    "cr": "2",
    "hp": 14,
    "AC": 15,
    "actions": [],
    "count": 1
  },
  {
    "id": "916e29ab-ad85-466d-bdbe-f73ac32a4c16",
    "mode": "custom",
    "name": "Faerie Dragon (Yellow)",
    "type": "dragon",
    "src": "MM p.133",
    "cr": "1",
    "hp": 14,
    "AC": 15,
    "actions": [],
    "count": 1
  },
  {
    "id": "a9a3a66b-c268-4e1f-b12e-8bb05f2f935b",
    "mode": "custom",
    "name": "Fire Elemental",
    "type": "elemental",
    "src": "MM p.125",
    "cr": "5",
    "hp": 102,
    "AC": 13,
    "actions": [
      {
        "id": "cea2d7a3-7da8-4ede-aec3-e47093af51fe",
        "name": "Touch",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 11,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "97717b2c-7e26-4da6-be86-ae49f3fb5412",
    "mode": "custom",
    "name": "Fire Giant",
    "type": "giant",
    "src": "MM p.154",
    "cr": "9",
    "hp": 162,
    "AC": 18,
    "actions": [],
    "count": 1
  },
  {
    "id": "ef157b77-43f5-44cb-9b46-b7d99a154275",
    "mode": "custom",
    "name": "Fire Snake",
    "type": "elemental",
    "src": "MM p.265",
    "cr": "1",
    "hp": 22,
    "AC": 14,
    "actions": [
      {
        "id": "1d4b86c2-463e-4afc-9f82-056b0dc6f7c9",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 3.5,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "71d601e4-2f9a-4abf-9c0d-709ac85290d9",
        "name": "Tail",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 3.5,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "7b4036a2-890b-423a-b03a-2b895ad7835f",
    "mode": "custom",
    "name": "Flameskull",
    "type": "undead",
    "src": "MM p.134",
    "cr": "4",
    "hp": 40,
    "AC": 13,
    "actions": [
      {
        "id": "8372f9fa-15b6-43a9-b926-a4f2be70d6eb",
        "name": "Fire Ray",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "8823d209-994a-4d7a-9e31-33637be8e515",
    "mode": "custom",
    "name": "Flesh Golem",
    "type": "construct",
    "src": "MM p.169",
    "cr": "5",
    "hp": 93,
    "AC": 9,
    "actions": [],
    "count": 1
  },
  {
    "id": "a3ae6b9b-36cb-4f9f-9e5d-be8d3c72fb13",
    "mode": "custom",
    "name": "Flumph",
    "type": "aberration",
    "src": "MM p.135",
    "cr": "1/8",
    "hp": 7,
    "AC": 12,
    "actions": [
      {
        "id": "937cf8bc-aded-4862-8cd9-ccc5c7333b6c",
        "name": "Tendrils",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "e3e57b5b-1000-448d-9458-80282fe5c2bf",
    "mode": "custom",
    "name": "Flying Snake",
    "type": "beast",
    "src": "MM p.322",
    "cr": "1/8",
    "hp": 5,
    "AC": 14,
    "actions": [
      {
        "id": "d0079db1-7431-4c3e-b598-7c9628bcdb09",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "500a14d6-4759-49d9-9628-e40995daac16",
    "mode": "custom",
    "name": "Flying Sword",
    "type": "construct",
    "src": "MM p.20",
    "cr": "1/4",
    "hp": 17,
    "AC": 17,
    "actions": [],
    "count": 1
  },
  {
    "id": "b0083e2d-6e3f-4750-b63d-de13d6adc472",
    "mode": "custom",
    "name": "Fomorian",
    "type": "giant",
    "src": "MM p.136",
    "cr": "8",
    "hp": 149,
    "AC": 14,
    "actions": [
      {
        "id": "5d5b3f73-f200-4e8f-8f69-bb136a8ed5df",
        "name": "Evil Eye",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 27,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "7fdaa48a-a6e1-4c00-a8e2-c5a3b23d5394",
    "mode": "custom",
    "name": "Frog",
    "type": "beast",
    "src": "MM p.322",
    "cr": "0",
    "hp": 1,
    "AC": 11,
    "actions": [],
    "count": 1
  },
  {
    "id": "ec229113-1780-4811-ad61-3da5d810c470",
    "mode": "custom",
    "name": "Frost Giant",
    "type": "giant",
    "src": "MM p.155",
    "cr": "8",
    "hp": 138,
    "AC": 15,
    "actions": [],
    "count": 1
  },
  {
    "id": "2c7f87de-2d34-487f-b012-3aff3059a340",
    "mode": "custom",
    "name": "Galeb Duhr",
    "type": "elemental",
    "src": "MM p.139",
    "cr": "6",
    "hp": 85,
    "AC": 16,
    "actions": [],
    "count": 1
  },
  {
    "id": "ad7a49ec-d42f-4e23-8375-7801fdbd702d",
    "mode": "custom",
    "name": "Gargoyle",
    "type": "elemental",
    "src": "MM p.140",
    "cr": "2",
    "hp": 52,
    "AC": 15,
    "actions": [],
    "count": 1
  },
  {
    "id": "89eee4d0-b13b-4945-b35f-2313f0b3b967",
    "mode": "custom",
    "name": "Gas Spore",
    "type": "plant",
    "src": "MM p.138",
    "cr": "1/2",
    "hp": 1,
    "AC": 5,
    "actions": [],
    "count": 1
  },
  {
    "id": "aeaec1d0-e7d7-456c-b9ea-14082142ff9b",
    "mode": "custom",
    "name": "Gelatinous Cube",
    "type": "ooze",
    "src": "MM p.242",
    "cr": "2",
    "hp": 84,
    "AC": 6,
    "actions": [
      {
        "id": "8bdb7378-77f6-4ba3-b5d5-7784e6e2c30d",
        "name": "Pseudopod",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "b4263789-b231-4b33-8918-63b62968bf11",
        "name": "Engulf",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 31.5,
        "toHit": 2,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "529d0421-4d98-4f3f-9285-65716668d224",
    "mode": "custom",
    "name": "Ghast",
    "type": "undead",
    "src": "MM p.148",
    "cr": "2",
    "hp": 36,
    "AC": 13,
    "actions": [],
    "count": 1
  },
  {
    "id": "23938c5a-2f4d-420e-98fe-80c9df4b3f8c",
    "mode": "custom",
    "name": "Ghost",
    "type": "undead",
    "src": "MM p.147",
    "cr": "4",
    "hp": 45,
    "AC": 11,
    "actions": [],
    "count": 1
  },
  {
    "id": "14e5cb79-6248-46d2-bb76-94ee926553fe",
    "mode": "custom",
    "name": "Ghoul",
    "type": "undead",
    "src": "MM p.148",
    "cr": "1",
    "hp": 22,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "81bc6f1e-73d6-4318-8135-6f1e01f3cc4e",
    "mode": "custom",
    "name": "Giant Ape",
    "type": "beast",
    "src": "MM p.323",
    "cr": "7",
    "hp": 157,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "09a9daa7-d4e5-4bdf-a530-cefc9c97c94b",
    "mode": "custom",
    "name": "Giant Badger",
    "type": "beast",
    "src": "MM p.323",
    "cr": "1/4",
    "hp": 13,
    "AC": 10,
    "actions": [],
    "count": 1
  },
  {
    "id": "c90d0144-ae27-4c14-b10f-4489864fa70f",
    "mode": "custom",
    "name": "Giant Bat",
    "type": "beast",
    "src": "MM p.323",
    "cr": "1/4",
    "hp": 22,
    "AC": 13,
    "actions": [],
    "count": 1
  },
  {
    "id": "3926caf4-eee7-4d51-8102-6385280a93f4",
    "mode": "custom",
    "name": "Giant Boar",
    "type": "beast",
    "src": "MM p.323",
    "cr": "2",
    "hp": 42,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "504694f6-c032-458e-b460-43a03b11cccf",
    "mode": "custom",
    "name": "Giant Centipede",
    "type": "beast",
    "src": "MM p.323",
    "cr": "1/4",
    "hp": 4,
    "AC": 13,
    "actions": [
      {
        "id": "3d213b27-7c62-416c-aa30-73eae715e298",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "f3d05141-009a-4bd0-812f-150271b727a8",
    "mode": "custom",
    "name": "Giant Constrictor Snake",
    "type": "beast",
    "src": "MM p.324",
    "cr": "2",
    "hp": 60,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "3c50ec9e-7d37-4040-b575-08ea1fc2624e",
    "mode": "custom",
    "name": "Giant Crab",
    "type": "beast",
    "src": "MM p.324",
    "cr": "1/8",
    "hp": 13,
    "AC": 15,
    "actions": [],
    "count": 1
  },
  {
    "id": "bc148aa0-c6c5-41de-97d8-86dab7ab6e09",
    "mode": "custom",
    "name": "Giant Crocodile",
    "type": "beast",
    "src": "MM p.324",
    "cr": "5",
    "hp": 85,
    "AC": 14,
    "actions": [],
    "count": 1
  },
  {
    "id": "7484d4a7-7557-4183-aa96-7c3d88768393",
    "mode": "custom",
    "name": "Giant Eagle",
    "type": "beast",
    "src": "MM p.324",
    "cr": "1",
    "hp": 26,
    "AC": 13,
    "actions": [],
    "count": 1
  },
  {
    "id": "54cfeeb8-6787-4839-8ae9-47a69afd35db",
    "mode": "custom",
    "name": "Giant Elk",
    "type": "beast",
    "src": "MM p.325",
    "cr": "2",
    "hp": 42,
    "AC": 14,
    "actions": [],
    "count": 1
  },
  {
    "id": "cd69f707-2fc7-47b4-9f8b-2f65f7dffb32",
    "mode": "custom",
    "name": "Giant Fire Beetle",
    "type": "beast",
    "src": "MM p.325",
    "cr": "0",
    "hp": 4,
    "AC": 13,
    "actions": [],
    "count": 1
  },
  {
    "id": "8e08d82a-bb0c-4919-a27e-377c5386ad75",
    "mode": "custom",
    "name": "Giant Frog",
    "type": "beast",
    "src": "MM p.325",
    "cr": "1/4",
    "hp": 18,
    "AC": 11,
    "actions": [
      {
        "id": "1681c781-6923-42d8-a9fa-a9698dcd8547",
        "name": "Swallow",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 5,
        "toHit": 0,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "2af71be4-1385-43d5-8d61-e5294a342016",
    "mode": "custom",
    "name": "Giant Goat",
    "type": "beast",
    "src": "MM p.326",
    "cr": "1/2",
    "hp": 19,
    "AC": 11,
    "actions": [],
    "count": 1
  },
  {
    "id": "69cfa0bc-d669-468f-81ba-aa7fb550f4a8",
    "mode": "custom",
    "name": "Giant Hyena",
    "type": "beast",
    "src": "MM p.326",
    "cr": "1",
    "hp": 45,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "986af38a-57ac-4402-9a21-d62e966753a3",
    "mode": "custom",
    "name": "Giant Lizard",
    "type": "beast",
    "src": "MM p.326",
    "cr": "1/4",
    "hp": 19,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "e9ff382b-6f7d-49c3-9ded-308e41e085fc",
    "mode": "custom",
    "name": "Giant Octopus",
    "type": "beast",
    "src": "MM p.326",
    "cr": "1",
    "hp": 52,
    "AC": 11,
    "actions": [],
    "count": 1
  },
  {
    "id": "be12cc75-10b5-4f11-88d8-2f878ed78c40",
    "mode": "custom",
    "name": "Giant Owl",
    "type": "beast",
    "src": "MM p.327",
    "cr": "1/4",
    "hp": 19,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "72ec9f61-1458-42eb-9391-af056d5a08a3",
    "mode": "custom",
    "name": "Giant Poisonous Snake",
    "type": "beast",
    "src": "MM p.327",
    "cr": "1/4",
    "hp": 11,
    "AC": 14,
    "actions": [
      {
        "id": "b01c9cd6-032e-4ec9-8665-9efbf7dd69b5",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "e3295ff5-bc36-4f55-bbf8-e82001444b43",
    "mode": "custom",
    "name": "Giant Rat",
    "type": "beast",
    "src": "MM p.327",
    "cr": "1/8",
    "hp": 7,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "edd25e99-d943-434f-bcce-2a697ce74e51",
    "mode": "custom",
    "name": "Giant Scorpion",
    "type": "beast",
    "src": "MM p.327",
    "cr": "3",
    "hp": 52,
    "AC": 15,
    "actions": [
      {
        "id": "d27acba0-4796-48a5-9c7c-fab2f3b99542",
        "name": "Sting",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 22,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "ea6ca4bc-b5a0-4494-bcce-6b3ee3239fb8",
    "mode": "custom",
    "name": "Giant Sea Horse",
    "type": "beast",
    "src": "MM p.328",
    "cr": "1/2",
    "hp": 16,
    "AC": 13,
    "actions": [],
    "count": 1
  },
  {
    "id": "7ce47f11-c5ad-419e-bfe9-84b3cc87a2e2",
    "mode": "custom",
    "name": "Giant Shark",
    "type": "beast",
    "src": "MM p.328",
    "cr": "5",
    "hp": 126,
    "AC": 13,
    "actions": [],
    "count": 1
  },
  {
    "id": "9399cae6-b6e6-42ba-b2ba-1e8f4ad3d9f4",
    "mode": "custom",
    "name": "Giant Spider",
    "type": "beast",
    "src": "MM p.328",
    "cr": "1",
    "hp": 26,
    "AC": 14,
    "actions": [
      {
        "id": "66e20bfa-1466-430a-8d10-5d535099c744",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 9,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "0aa0192a-8bc7-4d3b-b9e2-e81a4386c96d",
    "mode": "custom",
    "name": "Giant Toad",
    "type": "beast",
    "src": "MM p.329",
    "cr": "1",
    "hp": 39,
    "AC": 11,
    "actions": [
      {
        "id": "3830c966-45da-4277-84cf-3934725d07db",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 5.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "71586898-6e08-4f4a-bb4f-d81da143ff6c",
        "name": "Swallow",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10.5,
        "toHit": 0,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "4748f661-2561-4a85-a130-c09009c572e3",
    "mode": "custom",
    "name": "Giant Vulture",
    "type": "beast",
    "src": "MM p.329",
    "cr": "1",
    "hp": 22,
    "AC": 10,
    "actions": [],
    "count": 1
  },
  {
    "id": "5218061f-781c-4429-a7f3-4af3af5fd3c1",
    "mode": "custom",
    "name": "Giant Wasp",
    "type": "beast",
    "src": "MM p.329",
    "cr": "1/2",
    "hp": 13,
    "AC": 12,
    "actions": [
      {
        "id": "f3c3ae5a-54f1-403e-a9e5-e56df75500b4",
        "name": "Sting",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "a9210cee-7db1-457b-b9cc-20e1685a8568",
    "mode": "custom",
    "name": "Giant Weasel",
    "type": "beast",
    "src": "MM p.329",
    "cr": "1/8",
    "hp": 9,
    "AC": 13,
    "actions": [],
    "count": 1
  },
  {
    "id": "c6ae6bad-c66d-4344-8597-4214db9e9f34",
    "mode": "custom",
    "name": "Giant Wolf Spider",
    "type": "beast",
    "src": "MM p.330",
    "cr": "1/4",
    "hp": 11,
    "AC": 13,
    "actions": [
      {
        "id": "7a04e368-e95b-40e8-96e5-f10900d55708",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "4b56ef70-534f-47d2-86ef-1719fc78a456",
    "mode": "custom",
    "name": "Gibbering Mouther",
    "type": "aberration",
    "src": "MM p.157",
    "cr": "2",
    "hp": 67,
    "AC": 9,
    "actions": [
      {
        "id": "789a7a74-bc8c-4ca2-aae2-0e3186c74777",
        "name": "Bites",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 17.5,
        "toHit": 2,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "0e18a14d-8f88-4808-8428-30d8bf1a5980",
    "mode": "custom",
    "name": "Githyanki Knight",
    "type": "humanoid",
    "src": "MM p.160",
    "cr": "8",
    "hp": 91,
    "AC": 18,
    "actions": [
      {
        "id": "a43ebd7d-2801-42e1-8ea0-af1d92a18ec6",
        "name": "Silver Greatsword",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 21,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "57d40fa1-5edc-4b2d-bb90-c2e15aba9264",
    "mode": "custom",
    "name": "Githyanki Warrior",
    "type": "humanoid",
    "src": "MM p.160",
    "cr": "3",
    "hp": 49,
    "AC": 17,
    "actions": [
      {
        "id": "99c95859-7aca-44dd-a979-a87e996642cc",
        "name": "Greatsword",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 14,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "4c759b3c-e6a8-4452-a1b0-68e571d12bff",
    "mode": "custom",
    "name": "Githzerai Monk",
    "type": "humanoid",
    "src": "MM p.161",
    "cr": "2",
    "hp": 38,
    "AC": 14,
    "actions": [
      {
        "id": "560ad8fb-340b-4310-8e19-b1be1385e9ec",
        "name": "Unarmed Strike",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 18,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "6aeb836d-76c2-40e7-a5fb-fd197673ffd4",
    "mode": "custom",
    "name": "Githzerai Zerth",
    "type": "humanoid",
    "src": "MM p.161",
    "cr": "6",
    "hp": 84,
    "AC": 17,
    "actions": [
      {
        "id": "0a4cc63d-2642-4e7e-96a9-26acb080a9a5",
        "name": "Unarmed Strike",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 27,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "8afe7def-c5aa-48bf-ab84-81ded608e60f",
    "mode": "custom",
    "name": "Glabrezu",
    "type": "fiend",
    "src": "MM p.58",
    "cr": "9",
    "hp": 157,
    "AC": 17,
    "actions": [],
    "count": 1
  },
  {
    "id": "f471af98-01d8-4454-b262-9581729ed27c",
    "mode": "custom",
    "name": "Gladiator",
    "type": "humanoid",
    "src": "MM p.346",
    "cr": "5",
    "hp": 112,
    "AC": 16,
    "actions": [],
    "count": 1
  },
  {
    "id": "778ce6da-1527-4fe0-82c2-4d5cdee5c95e",
    "mode": "custom",
    "name": "Gnoll",
    "type": "humanoid",
    "src": "MM p.163",
    "cr": "1/2",
    "hp": 22,
    "AC": 15,
    "actions": [],
    "count": 1
  },
  {
    "id": "d8216ada-db8c-429b-8294-dcae84b2a589",
    "mode": "custom",
    "name": "Gnoll Fang of Yeenoghu",
    "type": "fiend",
    "src": "MM p.163",
    "cr": "4",
    "hp": 65,
    "AC": 14,
    "actions": [
      {
        "id": "82c57eb7-5d2a-4ecc-aa90-73e1fcc58f76",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "59b7d1f7-2ff3-4d24-a531-c0b21a03c43e",
    "mode": "custom",
    "name": "Gnoll Pack Lord",
    "type": "humanoid",
    "src": "MM p.163",
    "cr": "2",
    "hp": 49,
    "AC": 15,
    "actions": [],
    "count": 1
  },
  {
    "id": "47357f0f-2897-4645-b7ab-3f11e60dc351",
    "mode": "custom",
    "name": "Goat",
    "type": "beast",
    "src": "MM p.330",
    "cr": "0",
    "hp": 4,
    "AC": 10,
    "actions": [],
    "count": 1
  },
  {
    "id": "01113e11-c085-4a8c-9ad3-7a808f8bce67",
    "mode": "custom",
    "name": "Goblin",
    "type": "humanoid",
    "src": "MM p.166",
    "cr": "1/4",
    "hp": 7,
    "AC": 15,
    "actions": [],
    "count": 1
  },
  {
    "id": "86721016-8536-4bcf-a359-0ea1de1a0241",
    "mode": "custom",
    "name": "Goblin Boss",
    "type": "humanoid",
    "src": "MM p.166",
    "cr": "1",
    "hp": 21,
    "AC": 17,
    "actions": [
      {
        "id": "6b76f4ce-a3cb-481c-ba9a-384b8a7902ec",
        "name": "Javelin",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 3.5,
        "toHit": 2,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "918fc568-04aa-43b9-8d56-e802450fdb39",
    "mode": "custom",
    "name": "Gold Dragon Wyrmling",
    "type": "dragon",
    "src": "MM p.115",
    "cr": "3",
    "hp": 60,
    "AC": 17,
    "actions": [
      {
        "id": "9143eab4-c44c-4e19-a140-d66be7d110b1",
        "name": "Breath Weapons",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 22,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "d1f5e06c-322e-4c4d-8278-f37747575f16",
    "mode": "custom",
    "name": "Gorgon",
    "type": "monstrosity",
    "src": "MM p.171",
    "cr": "5",
    "hp": 114,
    "AC": 19,
    "actions": [],
    "count": 1
  },
  {
    "id": "9d109412-475d-4076-ba6e-422a3bcd8904",
    "mode": "custom",
    "name": "Goristro",
    "type": "fiend",
    "src": "MM p.59",
    "cr": "17",
    "hp": 310,
    "AC": 19,
    "actions": [],
    "count": 1
  },
  {
    "id": "5d767867-5aa4-4c2c-a4a5-c56aab15d806",
    "mode": "custom",
    "name": "Gray Ooze",
    "type": "ooze",
    "src": "MM p.243",
    "cr": "1/2",
    "hp": 22,
    "AC": 8,
    "actions": [
      {
        "id": "e69e75e2-8026-4c21-916a-b0bbecc33d19",
        "name": "Pseudopod",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "c7a671a4-70f9-4308-8bfd-6f0c9d1ed340",
    "mode": "custom",
    "name": "Gray Slaad",
    "type": "aberration",
    "src": "MM p.277",
    "cr": "9",
    "hp": 127,
    "AC": 18,
    "actions": [],
    "count": 1
  },
  {
    "id": "fc32b718-a658-424f-aa88-58c798fd749e",
    "mode": "custom",
    "name": "Green Dragon Wyrmling",
    "type": "dragon",
    "src": "MM p.95",
    "cr": "2",
    "hp": 38,
    "AC": 17,
    "actions": [
      {
        "id": "13927f2d-018a-4abe-8d51-2a5f31fcd6bc",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 3.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "9f2686e2-8f47-4a54-ba06-0d67d562dbe6",
        "name": "Poison Breath",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 21,
        "toHit": 1,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "fc07773e-4726-495a-8994-2507eb79fa17",
    "mode": "custom",
    "name": "Green Hag",
    "type": "fey",
    "src": "MM p.177",
    "cr": "3",
    "hp": 82,
    "AC": 17,
    "actions": [],
    "count": 1
  },
  {
    "id": "836e1ddd-cc9b-4a57-9f3c-a0512accafe5",
    "mode": "custom",
    "name": "Green Slaad",
    "type": "aberration",
    "src": "MM p.277",
    "cr": "8",
    "hp": 127,
    "AC": 16,
    "actions": [
      {
        "id": "2a78ae0e-bfea-4b63-a16d-5e4b1d224afe",
        "name": "Hurl Flame",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "db2228ae-c826-4dc4-b8a1-110aee48ad8c",
    "mode": "custom",
    "name": "Grell",
    "type": "aberration",
    "src": "MM p.172",
    "cr": "3",
    "hp": 55,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "249a6d41-136d-4e02-95e9-4ff76670475f",
    "mode": "custom",
    "name": "Grick",
    "type": "monstrosity",
    "src": "MM p.173",
    "cr": "2",
    "hp": 27,
    "AC": 14,
    "actions": [],
    "count": 1
  },
  {
    "id": "90eb5623-0510-4fe3-8654-c539c5959b4e",
    "mode": "custom",
    "name": "Grick Alpha",
    "type": "monstrosity",
    "src": "MM p.173",
    "cr": "7",
    "hp": 75,
    "AC": 18,
    "actions": [],
    "count": 1
  },
  {
    "id": "cb1a5bbd-6692-4db3-9f94-8e7b828829c3",
    "mode": "custom",
    "name": "Griffon",
    "type": "monstrosity",
    "src": "MM p.174",
    "cr": "2",
    "hp": 59,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "0604bf60-36f1-43b3-ad2d-5d2cd784e487",
    "mode": "custom",
    "name": "Grimlock",
    "type": "humanoid",
    "src": "MM p.175",
    "cr": "1/4",
    "hp": 11,
    "AC": 11,
    "actions": [
      {
        "id": "f600d92e-1891-44ba-ae05-a623022aefa7",
        "name": "Spiked Bone Club",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 2.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "fb4d0087-a15e-4da8-8700-9fca5cc786ad",
    "mode": "custom",
    "name": "Guard",
    "type": "humanoid",
    "src": "MM p.347",
    "cr": "1/8",
    "hp": 11,
    "AC": 16,
    "actions": [],
    "count": 1
  },
  {
    "id": "70983478-e4f8-4052-be1d-1dd2e9980d81",
    "mode": "custom",
    "name": "Guardian Naga",
    "type": "monstrosity",
    "src": "MM p.234",
    "cr": "10",
    "hp": 127,
    "AC": 18,
    "actions": [
      {
        "id": "df99cd87-a73a-4ede-b72a-44ca8cf498a4",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 45,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "06473bb3-2a1e-4429-a1d1-3ca3125a304f",
        "name": "Spit Poison",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 45,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "6a4c9877-a073-4287-8b4b-9d80d85a232a",
    "mode": "custom",
    "name": "Gynosphinx",
    "type": "monstrosity",
    "src": "MM p.282",
    "cr": "11",
    "hp": 136,
    "AC": 17,
    "actions": [],
    "count": 1
  },
  {
    "id": "26d27f6d-286e-44e8-a8ab-1ed2d4ed6146",
    "mode": "custom",
    "name": "Half-Ogre (Ogrillon)",
    "type": "giant",
    "src": "MM p.238",
    "cr": "1",
    "hp": 30,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "29e62114-0969-49f0-bbc8-41d018f4be33",
    "mode": "custom",
    "name": "Half-Red Dragon Veteran",
    "type": "humanoid",
    "src": "MM p.180",
    "cr": "5",
    "hp": 65,
    "AC": 18,
    "actions": [
      {
        "id": "1cfda539-641f-4191-9baa-a872ebd3fa29",
        "name": "Fire Breath",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 24.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "fe6305d3-5e43-43d1-ab6d-778815329952",
    "mode": "custom",
    "name": "Harpy",
    "type": "monstrosity",
    "src": "MM p.181",
    "cr": "1",
    "hp": 38,
    "AC": 11,
    "actions": [],
    "count": 1
  },
  {
    "id": "6ef2ee2c-7367-4e79-b292-c7ab2936ca32",
    "mode": "custom",
    "name": "Hawk",
    "type": "beast",
    "src": "MM p.330",
    "cr": "0",
    "hp": 1,
    "AC": 13,
    "actions": [],
    "count": 1
  },
  {
    "id": "481d59d9-fcfc-4e97-9e59-9acb6d8e96e4",
    "mode": "custom",
    "name": "Hell Hound",
    "type": "fiend",
    "src": "MM p.182",
    "cr": "3",
    "hp": 45,
    "AC": 15,
    "actions": [
      {
        "id": "c3ec1793-9b45-4506-919d-24282e52c756",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "3a7b8293-9732-4afb-90ca-eb0c5ab03619",
        "name": "Fire Breath",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 21,
        "toHit": 2,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "3845687f-c5f9-44e2-a13a-0e245abf1c7c",
    "mode": "custom",
    "name": "Helmed Horror",
    "type": "construct",
    "src": "MM p.183",
    "cr": "4",
    "hp": 60,
    "AC": 20,
    "actions": [],
    "count": 1
  },
  {
    "id": "dff2598a-624a-4a22-bc1e-beb24aa85562",
    "mode": "custom",
    "name": "Hezrou",
    "type": "fiend",
    "src": "MM p.60",
    "cr": "8",
    "hp": 136,
    "AC": 16,
    "actions": [],
    "count": 1
  },
  {
    "id": "21b1bfb2-d28d-4de7-b0ce-34b28d43240e",
    "mode": "custom",
    "name": "Hill Giant",
    "type": "giant",
    "src": "MM p.155",
    "cr": "5",
    "hp": 105,
    "AC": 13,
    "actions": [],
    "count": 1
  },
  {
    "id": "7c262e0d-774d-450b-a51a-0927bb6003fe",
    "mode": "custom",
    "name": "Hippogriff",
    "type": "monstrosity",
    "src": "MM p.184",
    "cr": "1",
    "hp": 19,
    "AC": 11,
    "actions": [],
    "count": 1
  },
  {
    "id": "63b3f235-8ee3-4726-ab3a-70cb6109cbe5",
    "mode": "custom",
    "name": "Hobgoblin",
    "type": "humanoid",
    "src": "MM p.186",
    "cr": "1/2",
    "hp": 11,
    "AC": 18,
    "actions": [],
    "count": 1
  },
  {
    "id": "69c930fc-9e95-4f41-9765-a110a40cb00d",
    "mode": "custom",
    "name": "Hobgoblin Captain",
    "type": "humanoid",
    "src": "MM p.186",
    "cr": "3",
    "hp": 39,
    "AC": 17,
    "actions": [],
    "count": 1
  },
  {
    "id": "a0e6bf7e-92ee-489c-b3bb-3526a0cca26e",
    "mode": "custom",
    "name": "Hobgoblin Warlord",
    "type": "humanoid",
    "src": "MM p.187",
    "cr": "6",
    "hp": 97,
    "AC": 20,
    "actions": [],
    "count": 1
  },
  {
    "id": "172c445e-f273-451c-a905-d84bdcf47d06",
    "mode": "custom",
    "name": "Homunculus",
    "type": "construct",
    "src": "MM p.188",
    "cr": "0",
    "hp": 5,
    "AC": 13,
    "actions": [],
    "count": 1
  },
  {
    "id": "652f790d-716d-46d8-a94a-384b99108f66",
    "mode": "custom",
    "name": "Hook Horror",
    "type": "monstrosity",
    "src": "MM p.189",
    "cr": "3",
    "hp": 75,
    "AC": 15,
    "actions": [],
    "count": 1
  },
  {
    "id": "61743617-623d-4d9c-af85-bbdfd98cd715",
    "mode": "custom",
    "name": "Horned Devil",
    "type": "fiend",
    "src": "MM p.74",
    "cr": "11",
    "hp": 178,
    "AC": 18,
    "actions": [
      {
        "id": "d3033973-3abb-4b1c-9f04-08dab772f9cf",
        "name": "Hurl Flame",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 14,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "fe1dd5f3-d529-4c57-98da-4f9a20b1c9f9",
    "mode": "custom",
    "name": "Hunter Shark",
    "type": "beast",
    "src": "MM p.330",
    "cr": "2",
    "hp": 45,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "9804303f-7ad6-4e95-a21f-52bda29aece7",
    "mode": "custom",
    "name": "Hydra",
    "type": "monstrosity",
    "src": "MM p.190",
    "cr": "8",
    "hp": 172,
    "AC": 15,
    "actions": [],
    "count": 1
  },
  {
    "id": "0c28d540-f897-4d8b-8ac6-044505543574",
    "mode": "custom",
    "name": "Hyena",
    "type": "beast",
    "src": "MM p.331",
    "cr": "0",
    "hp": 5,
    "AC": 11,
    "actions": [
      {
        "id": "f7444352-7ea1-4465-98d1-061060df98f8",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 3.5,
        "toHit": 2,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "63424caa-d62a-410f-b42a-f541b87da19d",
    "mode": "custom",
    "name": "Ice Devil",
    "type": "fiend",
    "src": "MM p.75",
    "cr": "14",
    "hp": 180,
    "AC": 18,
    "actions": [
      {
        "id": "89e99a01-cb15-4a56-890a-4e0cb437af13",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10.5,
        "toHit": 10,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "308496ab-97ed-404d-b570-619aeeeb6421",
        "name": "Claws",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10.5,
        "toHit": 10,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "916caf3b-449f-4efc-adb4-8c54cc071c63",
        "name": "Tail",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10.5,
        "toHit": 10,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "83ee9783-162f-4be5-8e71-2dc992e86911",
        "name": "Wall of Ice {@recharge}",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 52.5,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "b7f206e8-56e4-4204-987f-10264bda474e",
    "mode": "custom",
    "name": "Ice Mephit",
    "type": "elemental",
    "src": "MM p.215",
    "cr": "1/2",
    "hp": 21,
    "AC": 11,
    "actions": [
      {
        "id": "7b5cec5d-21f2-4f71-af9a-1c346800259c",
        "name": "Claws",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 2.5,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "74a7ad05-8315-4544-bccf-b9e575195671",
        "name": "Frost Breath {@recharge}",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 5,
        "toHit": 0,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "80ee69e7-17c8-4a2c-8a5c-bd2d787cc2fd",
    "mode": "custom",
    "name": "Imp",
    "type": "fiend",
    "src": "MM p.76",
    "cr": "1",
    "hp": 10,
    "AC": 13,
    "actions": [
      {
        "id": "069286f5-d0a1-4f73-9d0a-ae7f9fc21379",
        "name": "Sting (Bite in Beast Form)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "1edb62fa-4aa4-4ab0-886d-44c0eba2bdbc",
    "mode": "custom",
    "name": "Incubus",
    "type": "fiend",
    "src": "MM p.285",
    "cr": "4",
    "hp": 66,
    "AC": 15,
    "actions": [],
    "count": 1
  },
  {
    "id": "c0be6128-add3-43d5-9d34-e2983350fc3d",
    "mode": "custom",
    "name": "Intellect Devourer",
    "type": "aberration",
    "src": "MM p.191",
    "cr": "2",
    "hp": 21,
    "AC": 12,
    "actions": [
      {
        "id": "cdd9fcac-728a-42d0-9946-6908bfbd3634",
        "name": "Devour Intellect",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 11,
        "toHit": 2,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "7c3d460b-0071-4c3a-8aee-d8df7e83af2b",
    "mode": "custom",
    "name": "Invisible Stalker",
    "type": "elemental",
    "src": "MM p.192",
    "cr": "6",
    "hp": 104,
    "AC": 14,
    "actions": [],
    "count": 1
  },
  {
    "id": "abb2c6cb-1e3a-41bc-8c15-41ab3dedd7c1",
    "mode": "custom",
    "name": "Iron Golem",
    "type": "construct",
    "src": "MM p.170",
    "cr": "16",
    "hp": 210,
    "AC": 20,
    "actions": [
      {
        "id": "87113761-b62c-4e94-b05b-d5165339503e",
        "name": "Poison Breath",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 45,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "4852f164-98dc-401c-a879-dcc145d9d4e6",
    "mode": "custom",
    "name": "Jackal",
    "type": "beast",
    "src": "MM p.331",
    "cr": "0",
    "hp": 3,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "6dbf8f7e-a9eb-4094-9fd1-4c99b57b303b",
    "mode": "custom",
    "name": "Jackalwere",
    "type": "humanoid",
    "src": "MM p.193",
    "cr": "1/2",
    "hp": 18,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "675f38ce-842c-4359-b464-e70a39f6bf4c",
    "mode": "custom",
    "name": "Kenku",
    "type": "humanoid",
    "src": "MM p.194",
    "cr": "1/4",
    "hp": 13,
    "AC": 13,
    "actions": [],
    "count": 1
  },
  {
    "id": "e30153b3-7d65-4bec-95b7-6f32dae291d0",
    "mode": "custom",
    "name": "Killer Whale",
    "type": "beast",
    "src": "MM p.331",
    "cr": "3",
    "hp": 90,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "26003569-5d71-4cef-a316-82e4c1df42e8",
    "mode": "custom",
    "name": "Knight",
    "type": "humanoid",
    "src": "MM p.347",
    "cr": "3",
    "hp": 52,
    "AC": 18,
    "actions": [
      {
        "id": "5e8f7566-300f-405a-807b-59742d3a7d13",
        "name": "Heavy Crossbow",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 5.5,
        "toHit": 2,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "8ad21ddf-4389-4b93-9b2d-e40e4e37d2aa",
    "mode": "custom",
    "name": "Kobold",
    "type": "humanoid",
    "src": "MM p.195",
    "cr": "1/8",
    "hp": 5,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "6eea4af7-516a-41b4-9212-8d1f393d8741",
    "mode": "custom",
    "name": "Kraken",
    "type": "monstrosity",
    "src": "MM p.197",
    "cr": "23",
    "hp": 472,
    "AC": 18,
    "actions": [
      {
        "id": "5d395826-11cb-4c11-bb30-e46de9d06af1",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 42,
        "toHit": 17,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "d7bf401f-fb2f-46d0-9eef-326a9dc62156",
        "name": "Fling",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 3.5,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "561efc81-df2e-4e54-9823-67b1021f035c",
        "name": "Lightning Storm",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 22,
        "toHit": 13,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "c75e7521-7935-4b7f-b645-25479b459b6d",
    "mode": "custom",
    "name": "Kuo-toa",
    "type": "humanoid",
    "src": "MM p.199",
    "cr": "1/4",
    "hp": 18,
    "AC": 13,
    "actions": [],
    "count": 1
  },
  {
    "id": "f91af328-d1ee-4b6a-ac0e-865dc1c38bfa",
    "mode": "custom",
    "name": "Kuo-toa Archpriest",
    "type": "humanoid",
    "src": "MM p.200",
    "cr": "6",
    "hp": 97,
    "AC": 13,
    "actions": [
      {
        "id": "09e3f4d0-7045-4468-8264-60afb7cdd9af",
        "name": "Scepter",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 14,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "83a0f758-20ba-42a6-95bd-aa4c26eb6530",
    "mode": "custom",
    "name": "Kuo-toa Monitor",
    "type": "humanoid",
    "src": "MM p.198",
    "cr": "3",
    "hp": 65,
    "AC": 13,
    "actions": [
      {
        "id": "f6daaaac-bff1-4e9a-92ee-7714d1aabc14",
        "name": "Unarmed Strike",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "ab6f3494-383b-4055-966f-0a3fbca97592",
    "mode": "custom",
    "name": "Kuo-toa Whip",
    "type": "humanoid",
    "src": "MM p.200",
    "cr": "1",
    "hp": 65,
    "AC": 11,
    "actions": [],
    "count": 1
  },
  {
    "id": "04443b42-1295-4b97-a6ae-5d45a965272c",
    "mode": "custom",
    "name": "Lamia",
    "type": "monstrosity",
    "src": "MM p.201",
    "cr": "4",
    "hp": 97,
    "AC": 13,
    "actions": [],
    "count": 1
  },
  {
    "id": "d23fbbf6-8341-4d64-9311-f12fde840252",
    "mode": "custom",
    "name": "Lemure",
    "type": "fiend",
    "src": "MM p.76",
    "cr": "0",
    "hp": 13,
    "AC": 7,
    "actions": [
      {
        "id": "d79badb3-923a-4a5a-8a57-fbb97735a5af",
        "name": "Fist",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 2.5,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "4042ce48-0470-4ece-9caf-0ba02ce55b55",
    "mode": "custom",
    "name": "Lich",
    "type": "undead",
    "src": "MM p.202",
    "cr": "21",
    "hp": 135,
    "AC": 17,
    "actions": [
      {
        "id": "dc0cd7ea-214b-4148-8df9-9d10739893a5",
        "name": "Paralyzing Touch",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10.5,
        "toHit": 12,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "6906f196-9666-4b36-8146-bd695c49ce6d",
    "mode": "custom",
    "name": "Lion",
    "type": "beast",
    "src": "MM p.331",
    "cr": "1",
    "hp": 26,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "8f072350-89c3-48ff-beec-8468c3b6cc8e",
    "mode": "custom",
    "name": "Lizard",
    "type": "beast",
    "src": "MM p.332",
    "cr": "0",
    "hp": 2,
    "AC": 10,
    "actions": [],
    "count": 1
  },
  {
    "id": "e252471e-aa49-47f7-a860-b198fe949896",
    "mode": "custom",
    "name": "Lizard King",
    "type": "humanoid",
    "src": "MM p.205",
    "cr": "4",
    "hp": 78,
    "AC": 15,
    "actions": [],
    "count": 1
  },
  {
    "id": "1b0ec786-d8e4-4b70-9299-c07397c52975",
    "mode": "custom",
    "name": "Lizard Queen",
    "type": "humanoid",
    "src": "MM p.205",
    "cr": "4",
    "hp": 78,
    "AC": 15,
    "actions": [],
    "count": 1
  },
  {
    "id": "7dfb0464-fa94-4482-8884-4b5d714429b9",
    "mode": "custom",
    "name": "Lizardfolk",
    "type": "humanoid",
    "src": "MM p.204",
    "cr": "1/2",
    "hp": 22,
    "AC": 15,
    "actions": [],
    "count": 1
  },
  {
    "id": "1c909c7d-f47b-4d3a-b08c-e01112be760d",
    "mode": "custom",
    "name": "Lizardfolk Shaman",
    "type": "humanoid",
    "src": "MM p.205",
    "cr": "2",
    "hp": 27,
    "AC": 13,
    "actions": [],
    "count": 1
  },
  {
    "id": "456c4e3d-5e32-4405-9b20-309a16a8938b",
    "mode": "custom",
    "name": "Mage",
    "type": "humanoid",
    "src": "MM p.347",
    "cr": "6",
    "hp": 40,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "b7f6f1f3-07a3-4593-ba29-53f11e270041",
    "mode": "custom",
    "name": "Magma Mephit",
    "type": "elemental",
    "src": "MM p.216",
    "cr": "1/2",
    "hp": 22,
    "AC": 11,
    "actions": [
      {
        "id": "29884f37-fb8a-4c5b-bd88-de6b749afef4",
        "name": "Claws",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 2.5,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "e3e90d0c-ab80-4957-9db1-2f2a2607b545",
        "name": "Fire Breath {@recharge}",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7,
        "toHit": 1,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "e3da4d47-4213-40f7-bc33-94c2bfdc8c40",
    "mode": "custom",
    "name": "Magmin",
    "type": "elemental",
    "src": "MM p.212",
    "cr": "1/2",
    "hp": 9,
    "AC": 14,
    "actions": [
      {
        "id": "79472c21-6b5f-457a-a175-50ed57b3416f",
        "name": "Touch",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "ff30aa93-cf15-4224-a986-b851c52952e5",
    "mode": "custom",
    "name": "Mammoth",
    "type": "beast",
    "src": "MM p.332",
    "cr": "6",
    "hp": 126,
    "AC": 13,
    "actions": [],
    "count": 1
  },
  {
    "id": "15d26b30-a6dd-4a34-8b71-f64a2e4fc879",
    "mode": "custom",
    "name": "Manes",
    "type": "fiend",
    "src": "MM p.60",
    "cr": "1/8",
    "hp": 9,
    "AC": 9,
    "actions": [
      {
        "id": "842233e2-ccd2-47f7-b3cb-f5d81c5d0409",
        "name": "Claws",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 5,
        "toHit": 2,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "af7af057-ab35-47e5-bae6-5d29e51d5bb1",
    "mode": "custom",
    "name": "Manticore",
    "type": "monstrosity",
    "src": "MM p.213",
    "cr": "3",
    "hp": 68,
    "AC": 14,
    "actions": [],
    "count": 1
  },
  {
    "id": "ff5195c6-e444-43f9-9ce6-70c67cee0665",
    "mode": "custom",
    "name": "Marid",
    "type": "elemental",
    "src": "MM p.146",
    "cr": "11",
    "hp": 229,
    "AC": 17,
    "actions": [
      {
        "id": "6f12c591-e02b-411d-b18a-e52e7abbf85f",
        "name": "Water Jet",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 21,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "8c727fa7-19cd-40d5-948e-c19c238b9af4",
    "mode": "custom",
    "name": "Marilith",
    "type": "fiend",
    "src": "MM p.61",
    "cr": "16",
    "hp": 189,
    "AC": 18,
    "actions": [],
    "count": 1
  },
  {
    "id": "87dfb9d0-c79b-477a-8d47-7541a1b6fb34",
    "mode": "custom",
    "name": "Mastiff",
    "type": "beast",
    "src": "MM p.332",
    "cr": "1/8",
    "hp": 5,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "da6197d1-08ed-4aa9-85d4-535fe501456d",
    "mode": "custom",
    "name": "Medusa",
    "type": "monstrosity",
    "src": "MM p.214",
    "cr": "6",
    "hp": 127,
    "AC": 15,
    "actions": [
      {
        "id": "e0e686d0-f737-4d2a-a616-bbc2b1c85988",
        "name": "Snake Hair",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 14,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "a44e6c8b-54b8-4fa9-b059-db2723cd82a8",
        "name": "Longbow",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 14,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "d40ab458-1ca2-4f69-90d0-736bc408549c",
    "mode": "custom",
    "name": "Merfolk",
    "type": "humanoid",
    "src": "MM p.218",
    "cr": "1/8",
    "hp": 11,
    "AC": 11,
    "actions": [
      {
        "id": "78e3c711-5dde-4589-ae7a-1f1f03e9a602",
        "name": "Spear",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 8,
        "toHit": 2,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "0369a305-7326-40c5-acc5-a1c3b941b2f9",
    "mode": "custom",
    "name": "Merrow",
    "type": "monstrosity",
    "src": "MM p.219",
    "cr": "2",
    "hp": 45,
    "AC": 13,
    "actions": [],
    "count": 1
  },
  {
    "id": "3732cea6-3438-4017-b1f3-c094a41001d7",
    "mode": "custom",
    "name": "Mezzoloth",
    "type": "fiend",
    "src": "MM p.313",
    "cr": "5",
    "hp": 75,
    "AC": 18,
    "actions": [],
    "count": 1
  },
  {
    "id": "a9f75c55-5261-4fff-8426-7a18181bbd56",
    "mode": "custom",
    "name": "Mimic",
    "type": "monstrosity",
    "src": "MM p.220",
    "cr": "2",
    "hp": 58,
    "AC": 12,
    "actions": [
      {
        "id": "93560693-8fa3-4c76-8222-a0b32dce31c4",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 4.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "1f52a806-201e-4e50-946f-ab42f2ca8227",
    "mode": "custom",
    "name": "Mind Flayer",
    "type": "aberration",
    "src": "MM p.222",
    "cr": "7",
    "hp": 71,
    "AC": 15,
    "actions": [
      {
        "id": "ed9e26da-2b9d-4e7c-9761-88344822c2ba",
        "name": "Extract Brain",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 55,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "71b09aa1-1324-40e9-951b-65c5b520df31",
    "mode": "custom",
    "name": "Mind Flayer Arcanist",
    "type": "aberration",
    "src": "MM p.222",
    "cr": "8",
    "hp": 71,
    "AC": 15,
    "actions": [
      {
        "id": "d7a5802e-2ff8-4816-a7ee-67a50b925b46",
        "name": "Extract Brain",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 55,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "656e7c12-fd6e-4d10-85db-c729c1f26ca5",
    "mode": "custom",
    "name": "Minotaur",
    "type": "monstrosity",
    "src": "MM p.223",
    "cr": "3",
    "hp": 76,
    "AC": 14,
    "actions": [],
    "count": 1
  },
  {
    "id": "dc7f723b-be8b-4232-a643-9e0ede89f8f4",
    "mode": "custom",
    "name": "Minotaur Skeleton",
    "type": "undead",
    "src": "MM p.273",
    "cr": "2",
    "hp": 67,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "1e39a863-61b4-42aa-a2b8-98915453eac3",
    "mode": "custom",
    "name": "Monodrone",
    "type": "construct",
    "src": "MM p.224",
    "cr": "1/8",
    "hp": 5,
    "AC": 15,
    "actions": [
      {
        "id": "4d75e2a4-5149-44d3-aae8-7b7f0b093360",
        "name": "Javelin",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 3.5,
        "toHit": 2,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "8d72d015-3fe5-4f0c-a2ac-b45609ebb318",
    "mode": "custom",
    "name": "Mud Mephit",
    "type": "elemental",
    "src": "MM p.216",
    "cr": "1/4",
    "hp": 27,
    "AC": 11,
    "actions": [],
    "count": 1
  },
  {
    "id": "f0f220fc-bd35-4683-86da-63cbd696b276",
    "mode": "custom",
    "name": "Mule",
    "type": "beast",
    "src": "MM p.333",
    "cr": "1/8",
    "hp": 11,
    "AC": 10,
    "actions": [],
    "count": 1
  },
  {
    "id": "297b3a6a-849b-4e9f-9c3b-f0fe020283b4",
    "mode": "custom",
    "name": "Mummy",
    "type": "undead",
    "src": "MM p.228",
    "cr": "3",
    "hp": 58,
    "AC": 11,
    "actions": [
      {
        "id": "d34bee4e-0d17-425b-a227-dbd651d6cef4",
        "name": "Rotting Fist",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "ff930023-e451-4266-9a07-b869aac1a541",
    "mode": "custom",
    "name": "Mummy Lord",
    "type": "undead",
    "src": "MM p.229",
    "cr": "15",
    "hp": 97,
    "AC": 17,
    "actions": [
      {
        "id": "fa81d82e-e332-48a6-a64d-3a73a0802dca",
        "name": "Rotting Fist",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 21,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "23a4c5c2-86d8-4904-a01e-6e437d01fb1d",
    "mode": "custom",
    "name": "Myconid Adult",
    "type": "plant",
    "src": "MM p.232",
    "cr": "1/2",
    "hp": 22,
    "AC": 12,
    "actions": [
      {
        "id": "d6564639-46ff-4c32-a46b-62fa5734f0b7",
        "name": "Fist",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10,
        "toHit": 2,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "7d6aa07d-8261-495b-a9cc-843955a63192",
    "mode": "custom",
    "name": "Myconid Sovereign",
    "type": "plant",
    "src": "MM p.232",
    "cr": "2",
    "hp": 60,
    "AC": 13,
    "actions": [
      {
        "id": "0d71d4cc-6ac0-4159-8b07-642a91ebaaa3",
        "name": "Fist",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7.5,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "9396d5e4-4eae-487c-8892-44b9d4ec5ca8",
    "mode": "custom",
    "name": "Myconid Sprout",
    "type": "plant",
    "src": "MM p.230",
    "cr": "0",
    "hp": 7,
    "AC": 10,
    "actions": [
      {
        "id": "3644dea6-a27d-463b-b6ae-f2feddbfa4f7",
        "name": "Fist",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 2.5,
        "toHit": 1,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "5d78d7f0-88c0-483c-a25f-832ab642df30",
    "mode": "custom",
    "name": "Nalfeshnee",
    "type": "fiend",
    "src": "MM p.62",
    "cr": "13",
    "hp": 184,
    "AC": 18,
    "actions": [],
    "count": 1
  },
  {
    "id": "6eb1b0c5-5370-49f4-91b4-afac71e23221",
    "mode": "custom",
    "name": "Needle Blight",
    "type": "plant",
    "src": "MM p.32",
    "cr": "1/4",
    "hp": 11,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "381e0f49-d8a9-4a26-af7b-34d0bf44c21a",
    "mode": "custom",
    "name": "Night Hag",
    "type": "fiend",
    "src": "MM p.178",
    "cr": "5",
    "hp": 112,
    "AC": 17,
    "actions": [],
    "count": 1
  },
  {
    "id": "df75e827-8988-464d-a0e7-b953c4782ab5",
    "mode": "custom",
    "name": "Nightmare",
    "type": "fiend",
    "src": "MM p.235",
    "cr": "3",
    "hp": 68,
    "AC": 13,
    "actions": [
      {
        "id": "91fb1830-e58b-4905-a82c-6ee4eee8953a",
        "name": "Hooves",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "d44e02bf-eace-422b-983a-e7bbe9f652f5",
    "mode": "custom",
    "name": "Noble",
    "type": "humanoid",
    "src": "MM p.348",
    "cr": "1/8",
    "hp": 9,
    "AC": 15,
    "actions": [],
    "count": 1
  },
  {
    "id": "4bff6e85-6c36-463d-b911-b2de523bbcc6",
    "mode": "custom",
    "name": "Nothic",
    "type": "aberration",
    "src": "MM p.236",
    "cr": "2",
    "hp": 45,
    "AC": 15,
    "actions": [
      {
        "id": "3857f5af-408a-4965-b7be-00139166d0c7",
        "name": "Rotting Gaze",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10.5,
        "toHit": 2,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "632721a3-4c31-4356-a38d-3bde1702f530",
    "mode": "custom",
    "name": "Nycaloth",
    "type": "fiend",
    "src": "MM p.314",
    "cr": "9",
    "hp": 123,
    "AC": 18,
    "actions": [
      {
        "id": "a20bc737-f2f3-442b-b9d2-4a39fe7802da",
        "name": "Claw",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 5,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "61fc4bd4-7477-4fe9-b2bd-dfda53018760",
    "mode": "custom",
    "name": "Ochre Jelly",
    "type": "ooze",
    "src": "MM p.243",
    "cr": "2",
    "hp": 45,
    "AC": 8,
    "actions": [
      {
        "id": "f6f422ed-5119-4070-af5f-5b090b3f8171",
        "name": "Pseudopod",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 3.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "f43c8da3-e77d-4ef7-9d3f-cce20f7aefae",
    "mode": "custom",
    "name": "Octopus",
    "type": "beast",
    "src": "MM p.333",
    "cr": "0",
    "hp": 3,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "c89c53fb-4069-4a40-a690-069e253049d5",
    "mode": "custom",
    "name": "Ogre",
    "type": "giant",
    "src": "MM p.237",
    "cr": "2",
    "hp": 59,
    "AC": 11,
    "actions": [],
    "count": 1
  },
  {
    "id": "85e1446a-5972-487d-b6df-07efefb1e5ea",
    "mode": "custom",
    "name": "Ogre Zombie",
    "type": "undead",
    "src": "MM p.316",
    "cr": "2",
    "hp": 85,
    "AC": 8,
    "actions": [],
    "count": 1
  },
  {
    "id": "d76dd401-74f7-48fa-9bf2-249c0567d8a7",
    "mode": "custom",
    "name": "Oni",
    "type": "giant",
    "src": "MM p.239",
    "cr": "7",
    "hp": 110,
    "AC": 16,
    "actions": [],
    "count": 1
  },
  {
    "id": "6f8d9432-ac5a-4f8d-8a83-867e23df7f51",
    "mode": "custom",
    "name": "Orc",
    "type": "humanoid",
    "src": "MM p.246",
    "cr": "1/2",
    "hp": 15,
    "AC": 13,
    "actions": [],
    "count": 1
  },
  {
    "id": "dc7b4ca3-7b1f-40cc-801b-50afef6a2da0",
    "mode": "custom",
    "name": "Orc Eye of Gruumsh",
    "type": "humanoid",
    "src": "MM p.247",
    "cr": "2",
    "hp": 45,
    "AC": 16,
    "actions": [],
    "count": 1
  },
  {
    "id": "252b6818-2650-4286-8b93-50c809df907f",
    "mode": "custom",
    "name": "Orc War Chief",
    "type": "humanoid",
    "src": "MM p.246",
    "cr": "4",
    "hp": 93,
    "AC": 16,
    "actions": [
      {
        "id": "ded57679-55d4-463a-aa5e-d9c20be5591d",
        "name": "Greataxe",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 9,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "09897b55-00bc-4d73-8361-c40249ee25c1",
        "name": "Spear",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 9,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "c6b87da5-d014-41d1-9543-5842edf03fb3",
    "mode": "custom",
    "name": "Orog",
    "type": "humanoid",
    "src": "MM p.247",
    "cr": "2",
    "hp": 42,
    "AC": 18,
    "actions": [],
    "count": 1
  },
  {
    "id": "79dc63a1-2963-4154-9955-f232002dda90",
    "mode": "custom",
    "name": "Otyugh",
    "type": "aberration",
    "src": "MM p.248",
    "cr": "5",
    "hp": 114,
    "AC": 14,
    "actions": [
      {
        "id": "2359939a-d284-4629-b46f-dce1f663ca13",
        "name": "Tentacle",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 9,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "58e7374a-691b-4f74-81bd-99d710acc038",
    "mode": "custom",
    "name": "Owl",
    "type": "beast",
    "src": "MM p.333",
    "cr": "0",
    "hp": 1,
    "AC": 11,
    "actions": [],
    "count": 1
  },
  {
    "id": "8bf5efe6-6ad3-4687-baea-311eb7023630",
    "mode": "custom",
    "name": "Owlbear",
    "type": "monstrosity",
    "src": "MM p.249",
    "cr": "3",
    "hp": 59,
    "AC": 13,
    "actions": [],
    "count": 1
  },
  {
    "id": "590ada0e-0bd1-400c-8704-af6625fdeb56",
    "mode": "custom",
    "name": "Panther",
    "type": "beast",
    "src": "MM p.333",
    "cr": "1/4",
    "hp": 13,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "aa693b76-abe0-44fc-9f06-dc30c96ca967",
    "mode": "custom",
    "name": "Pegasus",
    "type": "celestial",
    "src": "MM p.250",
    "cr": "2",
    "hp": 59,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "cdd487e9-88fa-49c4-a50a-d204aec7c162",
    "mode": "custom",
    "name": "Pentadrone",
    "type": "construct",
    "src": "MM p.226",
    "cr": "2",
    "hp": 32,
    "AC": 16,
    "actions": [],
    "count": 1
  },
  {
    "id": "755b259e-8bbb-48c4-8551-b98c7ef5ce40",
    "mode": "custom",
    "name": "Peryton",
    "type": "monstrosity",
    "src": "MM p.251",
    "cr": "2",
    "hp": 33,
    "AC": 13,
    "actions": [],
    "count": 1
  },
  {
    "id": "b41473c8-927f-4062-91ae-01ca0729e3ed",
    "mode": "custom",
    "name": "Phase Spider",
    "type": "monstrosity",
    "src": "MM p.334",
    "cr": "3",
    "hp": 32,
    "AC": 13,
    "actions": [
      {
        "id": "1b3c1f37-bbfc-4ceb-b2ef-5ddd624c59e2",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 18,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "95e6a736-fafc-4f20-befb-1a409c8c1dec",
    "mode": "custom",
    "name": "Piercer",
    "type": "monstrosity",
    "src": "MM p.252",
    "cr": "1/2",
    "hp": 22,
    "AC": 15,
    "actions": [
      {
        "id": "c25a28e2-33d6-483a-91aa-7423448c5ab5",
        "name": "Drop",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 3.5,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "dd2cae62-3567-4868-bd1f-d757c4305495",
    "mode": "custom",
    "name": "Pit Fiend",
    "type": "fiend",
    "src": "MM p.77",
    "cr": "20",
    "hp": 300,
    "AC": 19,
    "actions": [
      {
        "id": "bbc77762-f9d6-45a1-a5bc-caa002377117",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 21,
        "toHit": 14,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "3683f691-7bd5-4bf1-a6c5-11aa6c5b61be",
        "name": "Mace",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 21,
        "toHit": 14,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "0ad6c433-a2d6-455e-bb65-d72da6010ffb",
    "mode": "custom",
    "name": "Pixie",
    "type": "fey",
    "src": "MM p.253",
    "cr": "1/4",
    "hp": 1,
    "AC": 15,
    "actions": [],
    "count": 1
  },
  {
    "id": "80498bcc-0fb5-4f8b-8696-8eb29bd3c11b",
    "mode": "custom",
    "name": "Planetar",
    "type": "celestial",
    "src": "MM p.17",
    "cr": "16",
    "hp": 200,
    "AC": 19,
    "actions": [
      {
        "id": "3d54658f-8e7e-4657-8e72-7ff93815cace",
        "name": "Greatsword",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 22.5,
        "toHit": 12,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "140d49fd-99ac-42fe-952c-51ea2f40fd37",
    "mode": "custom",
    "name": "Plesiosaurus",
    "type": "beast",
    "src": "MM p.80",
    "cr": "2",
    "hp": 68,
    "AC": 13,
    "actions": [],
    "count": 1
  },
  {
    "id": "2117cb92-badd-4341-ac1b-1ff5f412a449",
    "mode": "custom",
    "name": "Poisonous Snake",
    "type": "beast",
    "src": "MM p.334",
    "cr": "1/8",
    "hp": 2,
    "AC": 13,
    "actions": [
      {
        "id": "7c3e8bdb-9514-4f12-9d16-19715474d1af",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "c5cc88e7-9d53-48c2-b910-f8de22e205a6",
    "mode": "custom",
    "name": "Polar Bear",
    "type": "beast",
    "src": "MM p.334",
    "cr": "2",
    "hp": 42,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "09d60663-5c44-4a68-a428-564b8712f213",
    "mode": "custom",
    "name": "Poltergeist",
    "type": "undead",
    "src": "MM p.279",
    "cr": "2",
    "hp": 22,
    "AC": 12,
    "actions": [
      {
        "id": "f871bf6e-340e-407e-b82e-c25fb39f0b3e",
        "name": "Forceful Slam",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "18e459e9-2614-4885-a8c2-631e45b03c1f",
        "name": "Telekinetic Thrust",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "b605d760-6f35-492c-9556-f5b050a4b383",
    "mode": "custom",
    "name": "Pony",
    "type": "beast",
    "src": "MM p.335",
    "cr": "1/8",
    "hp": 11,
    "AC": 10,
    "actions": [],
    "count": 1
  },
  {
    "id": "8f8625f7-5d74-4259-8520-7894203b83cd",
    "mode": "custom",
    "name": "Priest",
    "type": "humanoid",
    "src": "MM p.348",
    "cr": "2",
    "hp": 27,
    "AC": 13,
    "actions": [
      {
        "id": "5dd9aba8-c590-4b69-9fe6-27ed9f774c8a",
        "name": "Mace",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 3.5,
        "toHit": 2,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "211ae497-ecbb-4366-a8e0-b46bed0d815a",
    "mode": "custom",
    "name": "Pseudodragon",
    "type": "dragon",
    "src": "MM p.254",
    "cr": "1/4",
    "hp": 7,
    "AC": 13,
    "actions": [],
    "count": 1
  },
  {
    "id": "eb060b10-bac4-4d8b-b7ec-8872954262f3",
    "mode": "custom",
    "name": "Pteranodon",
    "type": "beast",
    "src": "MM p.80",
    "cr": "1/4",
    "hp": 13,
    "AC": 13,
    "actions": [],
    "count": 1
  },
  {
    "id": "47b4c0df-8101-4473-adc2-b7924dc2fca6",
    "mode": "custom",
    "name": "Purple Worm",
    "type": "monstrosity",
    "src": "MM p.255",
    "cr": "15",
    "hp": 247,
    "AC": 18,
    "actions": [
      {
        "id": "c9a1e28e-a45a-444f-bb67-4f61ebdd9d0a",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 21,
        "toHit": 14,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "8e84fdad-971a-4587-98f2-9703bbeb2b0f",
        "name": "Tail Stinger",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 42,
        "toHit": 14,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "684d9ce0-651d-41dd-a0df-20f3dd9f6900",
    "mode": "custom",
    "name": "Quadrone",
    "type": "construct",
    "src": "MM p.226",
    "cr": "1",
    "hp": 22,
    "AC": 16,
    "actions": [],
    "count": 1
  },
  {
    "id": "64867385-82c3-4d3a-988e-314b23a9544f",
    "mode": "custom",
    "name": "Quaggoth",
    "type": "humanoid",
    "src": "MM p.256",
    "cr": "2",
    "hp": 45,
    "AC": 13,
    "actions": [],
    "count": 1
  },
  {
    "id": "0feb908c-ff92-4cc3-b616-dea2960979cf",
    "mode": "custom",
    "name": "Quaggoth Spore Servant",
    "type": "plant",
    "src": "MM p.230",
    "cr": "1",
    "hp": 45,
    "AC": 13,
    "actions": [],
    "count": 1
  },
  {
    "id": "12445145-765c-43f5-99fd-986ed743023f",
    "mode": "custom",
    "name": "Quaggoth Thonot",
    "type": "humanoid",
    "src": "MM p.256",
    "cr": "3",
    "hp": 45,
    "AC": 13,
    "actions": [],
    "count": 1
  },
  {
    "id": "ed23bd45-b7f2-4284-8c2c-108be51c412c",
    "mode": "custom",
    "name": "Quasit",
    "type": "fiend",
    "src": "MM p.63",
    "cr": "1",
    "hp": 7,
    "AC": 13,
    "actions": [
      {
        "id": "75f69865-ac97-4b00-9f18-053e113b3204",
        "name": "Claw (Bite in Beast Form)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "f9650127-c418-4ac2-a188-a10df2795a5b",
    "mode": "custom",
    "name": "Quipper",
    "type": "beast",
    "src": "MM p.335",
    "cr": "0",
    "hp": 1,
    "AC": 13,
    "actions": [],
    "count": 1
  },
  {
    "id": "2bdf3267-bc21-447f-97c7-e265a57ed848",
    "mode": "custom",
    "name": "Rakshasa",
    "type": "fiend",
    "src": "MM p.257",
    "cr": "13",
    "hp": 110,
    "AC": 16,
    "actions": [],
    "count": 1
  },
  {
    "id": "7371fe36-3b58-40bf-90a2-ec8285b713ef",
    "mode": "custom",
    "name": "Rat",
    "type": "beast",
    "src": "MM p.335",
    "cr": "0",
    "hp": 1,
    "AC": 10,
    "actions": [],
    "count": 1
  },
  {
    "id": "5e998b97-db6d-4dd9-980d-2870ed581c2f",
    "mode": "custom",
    "name": "Raven",
    "type": "beast",
    "src": "MM p.335",
    "cr": "0",
    "hp": 1,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "b30a0c8a-e938-4670-b285-afa1d976297c",
    "mode": "custom",
    "name": "Red Dragon Wyrmling",
    "type": "dragon",
    "src": "MM p.98",
    "cr": "4",
    "hp": 75,
    "AC": 17,
    "actions": [
      {
        "id": "1822119c-48b7-4201-a1d7-6ea928ccaaf8",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 3.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "68e3b528-da1f-40b6-9e75-03254bafae95",
        "name": "Fire Breath",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 24.5,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "ed89df70-b57f-47ad-becc-bf9d6df87586",
    "mode": "custom",
    "name": "Red Slaad",
    "type": "aberration",
    "src": "MM p.276",
    "cr": "5",
    "hp": 93,
    "AC": 14,
    "actions": [],
    "count": 1
  },
  {
    "id": "3322c5de-8f0f-4adc-ae91-c78b9a5cc489",
    "mode": "custom",
    "name": "Reef Shark",
    "type": "beast",
    "src": "MM p.336",
    "cr": "1/2",
    "hp": 22,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "79dabd30-236c-4992-b4f5-6f9c91e9985b",
    "mode": "custom",
    "name": "Remorhaz",
    "type": "monstrosity",
    "src": "MM p.258",
    "cr": "11",
    "hp": 195,
    "AC": 17,
    "actions": [
      {
        "id": "bf1bb1d2-5ddd-480a-9554-7114ea72260c",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10.5,
        "toHit": 11,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "01e3873e-37fb-4346-b142-48068294d438",
        "name": "Swallow",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 21,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "b3e54b42-4b8c-4373-8632-41d20ee9c0b0",
    "mode": "custom",
    "name": "Revenant",
    "type": "undead",
    "src": "MM p.259",
    "cr": "5",
    "hp": 136,
    "AC": 13,
    "actions": [
      {
        "id": "1266174c-b017-44d0-bc5d-2e33ce123453",
        "name": "Fist",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 28,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "c146ac47-4d6b-416d-90a1-8a5311bbde20",
    "mode": "custom",
    "name": "Rhinoceros",
    "type": "beast",
    "src": "MM p.336",
    "cr": "2",
    "hp": 45,
    "AC": 11,
    "actions": [],
    "count": 1
  },
  {
    "id": "7b5b11b1-624b-4338-ba45-95ec846528cf",
    "mode": "custom",
    "name": "Riding Horse",
    "type": "beast",
    "src": "MM p.336",
    "cr": "1/4",
    "hp": 13,
    "AC": 10,
    "actions": [],
    "count": 1
  },
  {
    "id": "fdfca631-0e29-4334-8b7a-0676017b5afa",
    "mode": "custom",
    "name": "Roc",
    "type": "monstrosity",
    "src": "MM p.260",
    "cr": "11",
    "hp": 248,
    "AC": 15,
    "actions": [],
    "count": 1
  },
  {
    "id": "f6b511f2-2f90-48fc-b0bc-440d533c171b",
    "mode": "custom",
    "name": "Roper",
    "type": "monstrosity",
    "src": "MM p.261",
    "cr": "5",
    "hp": 93,
    "AC": 20,
    "actions": [],
    "count": 1
  },
  {
    "id": "e564dcaf-c054-4e30-be9b-5b075c8879cc",
    "mode": "custom",
    "name": "Rug of Smothering",
    "type": "construct",
    "src": "MM p.20",
    "cr": "2",
    "hp": 33,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "59159965-c4af-49db-b2be-a46725ac4a38",
    "mode": "custom",
    "name": "Rust Monster",
    "type": "monstrosity",
    "src": "MM p.262",
    "cr": "1/2",
    "hp": 27,
    "AC": 14,
    "actions": [],
    "count": 1
  },
  {
    "id": "5a2b2cbe-ee0b-4bbb-b343-1d88afd04382",
    "mode": "custom",
    "name": "Saber-Toothed Tiger",
    "type": "beast",
    "src": "MM p.336",
    "cr": "2",
    "hp": 52,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "cbe184ec-6fa4-4c10-8cdb-39dfaf679a5c",
    "mode": "custom",
    "name": "Sahuagin",
    "type": "humanoid",
    "src": "MM p.263",
    "cr": "1/2",
    "hp": 22,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "6027ec4f-618c-4bcc-ad85-688344b6f8bc",
    "mode": "custom",
    "name": "Sahuagin Baron",
    "type": "humanoid",
    "src": "MM p.264",
    "cr": "5",
    "hp": 76,
    "AC": 16,
    "actions": [],
    "count": 1
  },
  {
    "id": "c61b44f5-af44-4624-9708-d93cc1f0b902",
    "mode": "custom",
    "name": "Sahuagin Priestess",
    "type": "humanoid",
    "src": "MM p.264",
    "cr": "2",
    "hp": 33,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "d950135d-5459-4cb3-8778-4ec2d1b200e5",
    "mode": "custom",
    "name": "Salamander",
    "type": "elemental",
    "src": "MM p.266",
    "cr": "5",
    "hp": 90,
    "AC": 15,
    "actions": [
      {
        "id": "1c882665-2f65-492a-bd25-b994d2861e4f",
        "name": "Spear",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 3.5,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "e1649890-f480-4106-8b2f-db058f27f20d",
        "name": "Tail",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "90ab2ace-407c-49a2-8693-f1ebe5e98bac",
    "mode": "custom",
    "name": "Satyr",
    "type": "fey",
    "src": "MM p.267",
    "cr": "1/2",
    "hp": 31,
    "AC": 14,
    "actions": [],
    "count": 1
  },
  {
    "id": "e83df852-12b2-4776-b740-7551d53fe7bc",
    "mode": "custom",
    "name": "Scarecrow",
    "type": "construct",
    "src": "MM p.268",
    "cr": "1",
    "hp": 36,
    "AC": 11,
    "actions": [],
    "count": 1
  },
  {
    "id": "22b9aa9a-aeea-4cd8-8261-3c4638fe1773",
    "mode": "custom",
    "name": "Scorpion",
    "type": "beast",
    "src": "MM p.337",
    "cr": "0",
    "hp": 1,
    "AC": 11,
    "actions": [
      {
        "id": "b429edc1-5935-4801-b121-32b4a7fa3008",
        "name": "Sting",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 4.5,
        "toHit": 2,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "4f9b6dfe-0bfb-4a70-bac7-3fa34dc7588a",
    "mode": "custom",
    "name": "Scout",
    "type": "humanoid",
    "src": "MM p.349",
    "cr": "1/2",
    "hp": 16,
    "AC": 13,
    "actions": [],
    "count": 1
  },
  {
    "id": "0f9fd97b-92b3-4db8-b2ad-b91b42a2cf49",
    "mode": "custom",
    "name": "Sea Hag",
    "type": "fey",
    "src": "MM p.179",
    "cr": "2",
    "hp": 52,
    "AC": 14,
    "actions": [],
    "count": 1
  },
  {
    "id": "3b090962-2f38-463c-841f-e4ac9bb0cec2",
    "mode": "custom",
    "name": "Sea Horse",
    "type": "beast",
    "src": "MM p.337",
    "cr": "0",
    "hp": 1,
    "AC": 11,
    "actions": [],
    "count": 1
  },
  {
    "id": "dfbd6fef-dc63-4517-976f-887fdbd8a7b0",
    "mode": "custom",
    "name": "Shadow",
    "type": "undead",
    "src": "MM p.269",
    "cr": "1/2",
    "hp": 16,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "c88d3d18-369e-4a6a-aea6-9b8440a6d5a5",
    "mode": "custom",
    "name": "Shadow Demon",
    "type": "fiend",
    "src": "MM p.64",
    "cr": "4",
    "hp": 66,
    "AC": 13,
    "actions": [],
    "count": 1
  },
  {
    "id": "14713c91-565c-46cf-8c96-f633511e5024",
    "mode": "custom",
    "name": "Shambling Mound",
    "type": "plant",
    "src": "MM p.270",
    "cr": "5",
    "hp": 136,
    "AC": 15,
    "actions": [],
    "count": 1
  },
  {
    "id": "87eeb960-79b9-4a54-b58f-381e671646a1",
    "mode": "custom",
    "name": "Shield Guardian",
    "type": "construct",
    "src": "MM p.271",
    "cr": "7",
    "hp": 142,
    "AC": 17,
    "actions": [],
    "count": 1
  },
  {
    "id": "a9d27e64-ae8f-43ba-8311-98c09bd0dd8d",
    "mode": "custom",
    "name": "Shrieker",
    "type": "plant",
    "src": "MM p.138",
    "cr": "0",
    "hp": 13,
    "AC": 5,
    "actions": [],
    "count": 1
  },
  {
    "id": "a606a9fa-4f51-4108-b611-7cc971770dd4",
    "mode": "custom",
    "name": "Silver Dragon Wyrmling",
    "type": "dragon",
    "src": "MM p.118",
    "cr": "2",
    "hp": 45,
    "AC": 17,
    "actions": [
      {
        "id": "097e0aa4-4455-4378-9696-a8ae5fb85ac8",
        "name": "Breath Weapons",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 18,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "9f0aa2cb-b8ae-49be-9342-301ba69f294a",
    "mode": "custom",
    "name": "Skeleton",
    "type": "undead",
    "src": "MM p.272",
    "cr": "1/4",
    "hp": 13,
    "AC": 13,
    "actions": [],
    "count": 1
  },
  {
    "id": "2b1c26a3-b945-45eb-9a7f-6ba2b8958507",
    "mode": "custom",
    "name": "Slaad Tadpole",
    "type": "aberration",
    "src": "MM p.276",
    "cr": "1/8",
    "hp": 10,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "825a4753-6f66-4a41-9d12-b338057f1a89",
    "mode": "custom",
    "name": "Smoke Mephit",
    "type": "elemental",
    "src": "MM p.217",
    "cr": "1/4",
    "hp": 22,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "d6e105f1-3af5-4fc4-bfb9-4835be86b3c5",
    "mode": "custom",
    "name": "Solar",
    "type": "celestial",
    "src": "MM p.18",
    "cr": "21",
    "hp": 243,
    "AC": 21,
    "actions": [
      {
        "id": "572fc2a1-2182-45a2-ba3f-2b4a97c0d8a9",
        "name": "Greatsword",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 54,
        "toHit": 15,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "1997b926-fc07-45a3-ba7e-95851f4d7767",
        "name": "Slaying Longbow",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 27,
        "toHit": 13,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "0c3a2298-25f7-4154-ba86-03786616d277",
    "mode": "custom",
    "name": "Spectator",
    "type": "aberration",
    "src": "MM p.30",
    "cr": "3",
    "hp": 39,
    "AC": 14,
    "actions": [
      {
        "id": "054d671a-37c7-49a4-941a-50cede79bf93",
        "name": "Eye Rays",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 16.5,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "2d939a7f-69bf-49c1-bac3-498b4f0da391",
    "mode": "custom",
    "name": "Specter",
    "type": "undead",
    "src": "MM p.279",
    "cr": "1",
    "hp": 22,
    "AC": 12,
    "actions": [
      {
        "id": "8c910efd-0072-4865-957a-30c0d6cfbd1f",
        "name": "Life Drain",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "1e2b6253-55a9-43d3-b2da-25b45cde86ac",
    "mode": "custom",
    "name": "Spider",
    "type": "beast",
    "src": "MM p.337",
    "cr": "0",
    "hp": 1,
    "AC": 12,
    "actions": [
      {
        "id": "0cdd9eaa-ec91-4e34-a481-210b05e5f16d",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 2.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "f117623a-8923-4815-a7f3-438e1fb78878",
    "mode": "custom",
    "name": "Spined Devil",
    "type": "fiend",
    "src": "MM p.78",
    "cr": "2",
    "hp": 22,
    "AC": 13,
    "actions": [
      {
        "id": "31744380-19b4-4acb-b390-3e7501f35044",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 5,
        "toHit": 2,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "c4d036a0-8a54-4991-ae40-00777bc91340",
        "name": "Fork",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 3.5,
        "toHit": 2,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "9693f3ee-5883-4c4b-a1eb-05d08c26a6f3",
        "name": "Tail Spine",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "5ebfe446-207d-45a3-b84f-87ef659c4ae4",
    "mode": "custom",
    "name": "Spirit Naga",
    "type": "monstrosity",
    "src": "MM p.234",
    "cr": "8",
    "hp": 75,
    "AC": 15,
    "actions": [
      {
        "id": "7ba4212d-3af1-4dc1-9587-267d6e43024a",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 31.5,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "f3321859-248a-4213-a4c5-21bd09888f4e",
    "mode": "custom",
    "name": "Sprite",
    "type": "fey",
    "src": "MM p.283",
    "cr": "1/4",
    "hp": 2,
    "AC": 15,
    "actions": [],
    "count": 1
  },
  {
    "id": "077e4d81-0e95-4400-a9d1-1453e16ca5b7",
    "mode": "custom",
    "name": "Spy",
    "type": "humanoid",
    "src": "MM p.349",
    "cr": "1",
    "hp": 27,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "65c58728-ce83-4129-a86b-9c46e489a7bd",
    "mode": "custom",
    "name": "Steam Mephit",
    "type": "elemental",
    "src": "MM p.217",
    "cr": "1/4",
    "hp": 21,
    "AC": 10,
    "actions": [
      {
        "id": "e10f037e-0c3c-4fec-bd41-6de584b6459d",
        "name": "Claws",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 5,
        "toHit": 2,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "b9be7a41-c1b0-4a63-af7f-70fe292a6a01",
        "name": "Steam Breath {@recharge}",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 4.5,
        "toHit": 0,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "681ead87-f066-4cb0-81e0-11e079b226ae",
    "mode": "custom",
    "name": "Stirge",
    "type": "beast",
    "src": "MM p.284",
    "cr": "1/8",
    "hp": 2,
    "AC": 14,
    "actions": [],
    "count": 1
  },
  {
    "id": "b7fca88f-d224-4f0c-93d8-e6829590ce28",
    "mode": "custom",
    "name": "Stone Giant",
    "type": "giant",
    "src": "MM p.156",
    "cr": "7",
    "hp": 126,
    "AC": 17,
    "actions": [],
    "count": 1
  },
  {
    "id": "f7adaa29-aba5-4a37-b276-5c0b6acae4d6",
    "mode": "custom",
    "name": "Stone Golem",
    "type": "construct",
    "src": "MM p.170",
    "cr": "10",
    "hp": 178,
    "AC": 17,
    "actions": [],
    "count": 1
  },
  {
    "id": "a727c955-eace-407a-9a53-d0b74f30cc3b",
    "mode": "custom",
    "name": "Storm Giant",
    "type": "giant",
    "src": "MM p.156",
    "cr": "13",
    "hp": 230,
    "AC": 16,
    "actions": [
      {
        "id": "9d8cea76-d971-4a10-a6dc-4d197eaa16bf",
        "name": "Lightning Strike",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 54,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "9de4aa71-e637-4b97-b8d9-581698662303",
    "mode": "custom",
    "name": "Succubus",
    "type": "fiend",
    "src": "MM p.285",
    "cr": "4",
    "hp": 66,
    "AC": 15,
    "actions": [],
    "count": 1
  },
  {
    "id": "fbdfaf7b-b729-4e0a-8770-665dedecb267",
    "mode": "custom",
    "name": "Swarm of Bats",
    "type": "beast",
    "src": "MM p.337",
    "cr": "1/4",
    "hp": 22,
    "AC": 12,
    "actions": [
      {
        "id": "3421f041-71c9-45c6-ba40-ae306778aed1",
        "name": "Bites",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "f450f4a5-83e9-4045-8ba2-e183f4e174ee",
    "mode": "custom",
    "name": "Swarm of Beetles",
    "type": "beast",
    "src": "MM p.338",
    "cr": "1/2",
    "hp": 22,
    "AC": 12,
    "actions": [
      {
        "id": "703ff01c-6ac2-43cd-b486-1aafb4721021",
        "name": "Bites",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 15,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "6bb87265-874b-404c-bedb-7cab7502169b",
    "mode": "custom",
    "name": "Swarm of Centipedes",
    "type": "beast",
    "src": "MM p.338",
    "cr": "1/2",
    "hp": 22,
    "AC": 12,
    "actions": [
      {
        "id": "39bc3961-0e50-4969-8988-9bedd9bcae2f",
        "name": "Bites",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 15,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "10106778-632d-49b0-9a37-4c17631cbd0c",
    "mode": "custom",
    "name": "Swarm of Insects",
    "type": "beast",
    "src": "MM p.338",
    "cr": "1/2",
    "hp": 22,
    "AC": 12,
    "actions": [
      {
        "id": "e7c4792d-077d-4116-ae86-118a7a29ebd5",
        "name": "Bites",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 15,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "89f46fea-ea3f-40c2-a6b0-aa09a3759b9d",
    "mode": "custom",
    "name": "Swarm of Poisonous Snakes",
    "type": "beast",
    "src": "MM p.338",
    "cr": "2",
    "hp": 36,
    "AC": 14,
    "actions": [
      {
        "id": "3e83aa3d-8176-457c-8675-bb35da2c78fc",
        "name": "Bites",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 24.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "152a829e-1487-4e4c-a8f7-26fdeff7ec7e",
    "mode": "custom",
    "name": "Swarm of Quippers",
    "type": "beast",
    "src": "MM p.338",
    "cr": "1",
    "hp": 28,
    "AC": 13,
    "actions": [
      {
        "id": "ef8a82b9-571d-4e89-840c-582aca650c99",
        "name": "Bites",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 21,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "cefd35b6-b1b1-40ec-a658-2f93cf21cf4b",
    "mode": "custom",
    "name": "Swarm of Rats",
    "type": "beast",
    "src": "MM p.339",
    "cr": "1/4",
    "hp": 24,
    "AC": 10,
    "actions": [
      {
        "id": "19239b12-39fb-4b82-a85d-d34031d7c49d",
        "name": "Bites",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10.5,
        "toHit": 2,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "48cf62b0-6f35-40ab-afda-189e5f79a9d9",
    "mode": "custom",
    "name": "Swarm of Ravens",
    "type": "beast",
    "src": "MM p.339",
    "cr": "1/4",
    "hp": 24,
    "AC": 12,
    "actions": [
      {
        "id": "f1bfd2ee-e372-4eea-b4bd-aedcc0f3a575",
        "name": "Beaks",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "3d6a840c-3340-4a46-8f16-553982e49be7",
    "mode": "custom",
    "name": "Swarm of Spiders",
    "type": "beast",
    "src": "MM p.338",
    "cr": "1/2",
    "hp": 22,
    "AC": 12,
    "actions": [
      {
        "id": "4a5a5652-cdf7-433c-b7f5-5de109921fb2",
        "name": "Bites",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 15,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "68df6366-5385-4dc1-a72d-c320cabd5a6d",
    "mode": "custom",
    "name": "Swarm of Wasps",
    "type": "beast",
    "src": "MM p.338",
    "cr": "1/2",
    "hp": 22,
    "AC": 12,
    "actions": [
      {
        "id": "25951bae-be90-42de-83d0-da131aba808d",
        "name": "Bites",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 15,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "8da0c676-b441-4b13-be5c-6617b8b272e0",
    "mode": "custom",
    "name": "Tarrasque",
    "type": "monstrosity",
    "src": "MM p.286",
    "cr": "30",
    "hp": 676,
    "AC": 25,
    "actions": [
      {
        "id": "b681f67f-f5a1-40f3-8965-993c4352e5cd",
        "name": "Swallow",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 56,
        "toHit": 10,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "a1e149c6-5e41-49cb-9444-50e597b8da78",
    "mode": "custom",
    "name": "Thri-kreen",
    "type": "humanoid",
    "src": "MM p.288",
    "cr": "1",
    "hp": 33,
    "AC": 15,
    "actions": [],
    "count": 1
  },
  {
    "id": "80d8a9d4-61d0-4a29-93a8-e661a6d481b6",
    "mode": "custom",
    "name": "Thug",
    "type": "humanoid",
    "src": "MM p.350",
    "cr": "1/2",
    "hp": 32,
    "AC": 11,
    "actions": [
      {
        "id": "cca10e33-fae4-4478-96b0-c3ebb3bcc3e9",
        "name": "Heavy Crossbow",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 5.5,
        "toHit": 2,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "174e8513-3549-4c68-b18d-9023020598ef",
    "mode": "custom",
    "name": "Tiger",
    "type": "beast",
    "src": "MM p.339",
    "cr": "1",
    "hp": 37,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "369b9ef0-234c-4749-b66a-5665b88bfd47",
    "mode": "custom",
    "name": "Treant",
    "type": "plant",
    "src": "MM p.289",
    "cr": "9",
    "hp": 138,
    "AC": 16,
    "actions": [],
    "count": 1
  },
  {
    "id": "293d0fa5-76ce-4fb4-8c5d-c66f397c5137",
    "mode": "custom",
    "name": "Tribal Warrior",
    "type": "humanoid",
    "src": "MM p.350",
    "cr": "1/8",
    "hp": 11,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "aabfcc55-7801-45c3-ba31-67de6567d0f7",
    "mode": "custom",
    "name": "Triceratops",
    "type": "beast",
    "src": "MM p.80",
    "cr": "5",
    "hp": 95,
    "AC": 13,
    "actions": [],
    "count": 1
  },
  {
    "id": "e813fa92-05e3-4046-9187-7c5dac133521",
    "mode": "custom",
    "name": "Tridrone",
    "type": "construct",
    "src": "MM p.225",
    "cr": "1/2",
    "hp": 16,
    "AC": 15,
    "actions": [],
    "count": 1
  },
  {
    "id": "440c1cda-c688-41c2-a6b3-135d790e5b53",
    "mode": "custom",
    "name": "Troglodyte",
    "type": "humanoid",
    "src": "MM p.290",
    "cr": "1/4",
    "hp": 13,
    "AC": 11,
    "actions": [],
    "count": 1
  },
  {
    "id": "ec0af86f-c0a6-46d4-9c3b-34854f0459d2",
    "mode": "custom",
    "name": "Troll",
    "type": "giant",
    "src": "MM p.291",
    "cr": "5",
    "hp": 84,
    "AC": 15,
    "actions": [],
    "count": 1
  },
  {
    "id": "20eda75c-dd01-4820-a61f-7805302f2ba5",
    "mode": "custom",
    "name": "Twig Blight",
    "type": "plant",
    "src": "MM p.32",
    "cr": "1/8",
    "hp": 4,
    "AC": 13,
    "actions": [],
    "count": 1
  },
  {
    "id": "87c17d95-f86d-44b9-87f9-bddbec32a75f",
    "mode": "custom",
    "name": "Tyrannosaurus Rex",
    "type": "beast",
    "src": "MM p.80",
    "cr": "8",
    "hp": 136,
    "AC": 13,
    "actions": [],
    "count": 1
  },
  {
    "id": "9d939703-edb4-4e58-94a4-05b323d49023",
    "mode": "custom",
    "name": "Ultroloth",
    "type": "fiend",
    "src": "MM p.314",
    "cr": "13",
    "hp": 153,
    "AC": 19,
    "actions": [],
    "count": 1
  },
  {
    "id": "68e0d92d-3ea2-4e24-8e55-6b5ca6219bb6",
    "mode": "custom",
    "name": "Umber Hulk",
    "type": "monstrosity",
    "src": "MM p.292",
    "cr": "5",
    "hp": 93,
    "AC": 18,
    "actions": [],
    "count": 1
  },
  {
    "id": "3c653f4f-1b4f-4597-9534-3b145cbb557c",
    "mode": "custom",
    "name": "Unicorn",
    "type": "celestial",
    "src": "MM p.294",
    "cr": "5",
    "hp": 67,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "1a758f76-235a-4970-8b7f-ca48eb1e6976",
    "mode": "custom",
    "name": "Vampire",
    "type": "undead",
    "src": "MM p.297",
    "cr": "13",
    "hp": 144,
    "AC": 16,
    "actions": [
      {
        "id": "9db0ded8-5b28-4223-9846-31c4056fb4f2",
        "name": "Bite (Bat or Vampire Form Only)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10.5,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "3a022abd-f86b-459f-bc61-acd10f782c21",
    "mode": "custom",
    "name": "Vampire Spawn",
    "type": "undead",
    "src": "MM p.298",
    "cr": "5",
    "hp": 82,
    "AC": 15,
    "actions": [
      {
        "id": "0477a01b-1b16-4340-a446-130d8ff988db",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "ef6c37a2-44e3-4f0b-ad7c-bf352d0b4466",
    "mode": "custom",
    "name": "Vampire Spellcaster",
    "type": "undead",
    "src": "MM p.298",
    "cr": "15",
    "hp": 144,
    "AC": 16,
    "actions": [
      {
        "id": "9fc0113b-ab02-4866-bcca-4bba529089eb",
        "name": "Bite (Bat or Vampire Form Only)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10.5,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "29481ed2-67a0-45bf-ad6d-e5e87a4df859",
    "mode": "custom",
    "name": "Vampire Warrior",
    "type": "undead",
    "src": "MM p.298",
    "cr": "15",
    "hp": 144,
    "AC": 18,
    "actions": [
      {
        "id": "3bbb5e47-35fa-4634-a469-68a5f7455eb7",
        "name": "Bite (Bat or Vampire Form Only)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10.5,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "ba0a72ea-8d4f-46d4-888a-338e7c5fd238",
    "mode": "custom",
    "name": "Veteran",
    "type": "humanoid",
    "src": "MM p.350",
    "cr": "3",
    "hp": 58,
    "AC": 17,
    "actions": [],
    "count": 1
  },
  {
    "id": "ff5735b4-c753-48d9-89b0-1dd3a9623002",
    "mode": "custom",
    "name": "Vine Blight",
    "type": "plant",
    "src": "MM p.32",
    "cr": "1/2",
    "hp": 26,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "d9f39202-5077-4594-aaa1-0941ae9be4b9",
    "mode": "custom",
    "name": "Violet Fungus",
    "type": "plant",
    "src": "MM p.138",
    "cr": "1/4",
    "hp": 18,
    "AC": 5,
    "actions": [
      {
        "id": "291f63c5-1885-41c7-8be7-3368e29f66c6",
        "name": "Rotting Touch",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 4.5,
        "toHit": 2,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "eaf1377b-de4d-4012-ad61-803125a51878",
    "mode": "custom",
    "name": "Vrock",
    "type": "fiend",
    "src": "MM p.64",
    "cr": "6",
    "hp": 104,
    "AC": 15,
    "actions": [
      {
        "id": "48582f00-cabe-4349-9700-003056e476f1",
        "name": "Spores {@recharge}",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 5.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "19c36507-5cc7-4d4c-9781-4b23fe88b6c3",
    "mode": "custom",
    "name": "Vulture",
    "type": "beast",
    "src": "MM p.339",
    "cr": "0",
    "hp": 5,
    "AC": 10,
    "actions": [
      {
        "id": "45e6c143-cc7a-4608-bb9c-2926f7c0e592",
        "name": "Beak",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 2.5,
        "toHit": 2,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "b0b776a1-cda9-40c2-8f7e-94ef5df66d5c",
    "mode": "custom",
    "name": "Warhorse",
    "type": "beast",
    "src": "MM p.340",
    "cr": "1/2",
    "hp": 19,
    "AC": 11,
    "actions": [],
    "count": 1
  },
  {
    "id": "90d26d04-47d7-446d-a440-aafbf4900709",
    "mode": "custom",
    "name": "Warhorse Skeleton",
    "type": "undead",
    "src": "MM p.273",
    "cr": "1/2",
    "hp": 22,
    "AC": 13,
    "actions": [],
    "count": 1
  },
  {
    "id": "955dc2ae-42e0-4460-a2e6-58c516b47c3b",
    "mode": "custom",
    "name": "Water Elemental",
    "type": "elemental",
    "src": "MM p.125",
    "cr": "5",
    "hp": 114,
    "AC": 14,
    "actions": [],
    "count": 1
  },
  {
    "id": "9c03e155-4458-4830-a846-9adde537bb3c",
    "mode": "custom",
    "name": "Water Weird",
    "type": "elemental",
    "src": "MM p.299",
    "cr": "3",
    "hp": 58,
    "AC": 13,
    "actions": [],
    "count": 1
  },
  {
    "id": "f72305ce-54c1-4e0e-8bad-a84092fb06ff",
    "mode": "custom",
    "name": "Weasel",
    "type": "beast",
    "src": "MM p.340",
    "cr": "0",
    "hp": 1,
    "AC": 13,
    "actions": [],
    "count": 1
  },
  {
    "id": "8f57d77d-0b13-4ebf-a464-fafb135d1bee",
    "mode": "custom",
    "name": "Werebear",
    "type": "humanoid",
    "src": "MM p.208",
    "cr": "5",
    "hp": 135,
    "AC": 10,
    "actions": [],
    "count": 1
  },
  {
    "id": "d73ba8f5-be58-4848-8d5e-e0e3f894fe38",
    "mode": "custom",
    "name": "Wereboar",
    "type": "humanoid",
    "src": "MM p.209",
    "cr": "4",
    "hp": 78,
    "AC": 10,
    "actions": [],
    "count": 1
  },
  {
    "id": "c8fb67f8-2183-469d-ba0f-98c1fac916d1",
    "mode": "custom",
    "name": "Wererat",
    "type": "humanoid",
    "src": "MM p.209",
    "cr": "2",
    "hp": 33,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "ec777ebc-443d-4824-8157-67f092f8a20c",
    "mode": "custom",
    "name": "Weretiger",
    "type": "humanoid",
    "src": "MM p.210",
    "cr": "4",
    "hp": 120,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "d3e8d00d-d90c-41ba-a082-45759300598d",
    "mode": "custom",
    "name": "Werewolf",
    "type": "humanoid",
    "src": "MM p.211",
    "cr": "3",
    "hp": 58,
    "AC": 11,
    "actions": [],
    "count": 1
  },
  {
    "id": "1a898bdc-9a9f-4a85-abae-38e7eaf7d488",
    "mode": "custom",
    "name": "White Dragon Wyrmling",
    "type": "dragon",
    "src": "MM p.102",
    "cr": "2",
    "hp": 32,
    "AC": 16,
    "actions": [
      {
        "id": "b3a668ce-f879-4cd9-b574-0ba73d9e123d",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 2.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "1c12c059-1c59-4be3-af72-f9390bbcaa4b",
        "name": "Cold Breath",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 22.5,
        "toHit": 2,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "c0826ade-11d8-4c15-a657-a41107fa80c5",
    "mode": "custom",
    "name": "Wight",
    "type": "undead",
    "src": "MM p.300",
    "cr": "3",
    "hp": 45,
    "AC": 14,
    "actions": [],
    "count": 1
  },
  {
    "id": "c338a444-e75c-463d-a45d-c016f09cc491",
    "mode": "custom",
    "name": "Will-o'-Wisp",
    "type": "undead",
    "src": "MM p.301",
    "cr": "2",
    "hp": 22,
    "AC": 19,
    "actions": [
      {
        "id": "ed54e98b-b346-4fda-90f6-0d55faefd178",
        "name": "Shock",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 9,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "8e6d56d5-b233-4a87-b020-2aad4cdef374",
    "mode": "custom",
    "name": "Winged Kobold",
    "type": "humanoid",
    "src": "MM p.195",
    "cr": "1/4",
    "hp": 7,
    "AC": 13,
    "actions": [],
    "count": 1
  },
  {
    "id": "2be15a85-e846-4e32-9ca0-7ce9b632412c",
    "mode": "custom",
    "name": "Winter Wolf",
    "type": "monstrosity",
    "src": "MM p.340",
    "cr": "3",
    "hp": 75,
    "AC": 13,
    "actions": [
      {
        "id": "e40795d0-93a9-4999-a6eb-cf963296cb72",
        "name": "Cold Breath",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 18,
        "toHit": 2,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "a234fc37-bfed-4772-8cdf-f540a42dd0fa",
    "mode": "custom",
    "name": "Wolf",
    "type": "beast",
    "src": "MM p.341",
    "cr": "1/4",
    "hp": 11,
    "AC": 13,
    "actions": [],
    "count": 1
  },
  {
    "id": "627d709a-7a28-48df-91ff-f3e99ed77e7c",
    "mode": "custom",
    "name": "Worg",
    "type": "monstrosity",
    "src": "MM p.341",
    "cr": "1/2",
    "hp": 26,
    "AC": 13,
    "actions": [],
    "count": 1
  },
  {
    "id": "e2b07c8c-756c-4722-98a6-780c559817fd",
    "mode": "custom",
    "name": "Wraith",
    "type": "undead",
    "src": "MM p.302",
    "cr": "5",
    "hp": 67,
    "AC": 13,
    "actions": [],
    "count": 1
  },
  {
    "id": "e60e1204-9e4f-47c6-8c07-7ad0218ab2a3",
    "mode": "custom",
    "name": "Wyvern",
    "type": "dragon",
    "src": "MM p.303",
    "cr": "6",
    "hp": 110,
    "AC": 13,
    "actions": [
      {
        "id": "65c99326-6d2c-488d-b8c7-26227eda9d73",
        "name": "Stinger",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 24.5,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "666f3853-208f-4b1a-a132-d1df7037453c",
    "mode": "custom",
    "name": "Xorn",
    "type": "elemental",
    "src": "MM p.304",
    "cr": "5",
    "hp": 73,
    "AC": 19,
    "actions": [],
    "count": 1
  },
  {
    "id": "09fee456-a291-4b4f-9694-5c95b9bd5457",
    "mode": "custom",
    "name": "Yeti",
    "type": "monstrosity",
    "src": "MM p.305",
    "cr": "3",
    "hp": 51,
    "AC": 12,
    "actions": [
      {
        "id": "6e31d9dc-ae41-4608-ab67-f94ef45cb406",
        "name": "Claw",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "a0345bfb-8948-4f63-ac22-b0a1086a0efd",
        "name": "Chilling Gaze",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10.5,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "618b6629-7b56-4adb-b4cc-b3cc424ed35b",
    "mode": "custom",
    "name": "Yochlol",
    "type": "fiend",
    "src": "MM p.65",
    "cr": "10",
    "hp": 136,
    "AC": 15,
    "actions": [
      {
        "id": "3238d6c8-139a-41c0-a666-a607ddf0210c",
        "name": "Slam (Bite in Spider Form)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 21,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "d83bf0eb-c949-48a3-834a-2c1fe48c6280",
    "mode": "custom",
    "name": "Young Black Dragon",
    "type": "dragon",
    "src": "MM p.88",
    "cr": "7",
    "hp": 127,
    "AC": 18,
    "actions": [
      {
        "id": "d33e0058-1258-4e68-b5bf-0810bbde2e3b",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 4.5,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "e845e72c-5a5a-4f93-9a7c-b900125bab8b",
        "name": "Acid Breath",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 49.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "8ae1e7c8-e03c-43cf-98c9-28bb52da1b15",
    "mode": "custom",
    "name": "Young Blue Dragon",
    "type": "dragon",
    "src": "MM p.91",
    "cr": "9",
    "hp": 152,
    "AC": 18,
    "actions": [
      {
        "id": "29d2b9df-04ad-4108-893c-8bec6d1e9be4",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 5.5,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "b2fc9324-7ce7-48e2-a71b-915922c46e15",
        "name": "Lightning Breath",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 55,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "75f84197-f239-4b7f-9502-3b007f849c39",
    "mode": "custom",
    "name": "Young Brass Dragon",
    "type": "dragon",
    "src": "MM p.105",
    "cr": "6",
    "hp": 110,
    "AC": 17,
    "actions": [
      {
        "id": "e053309a-e6af-425c-8d9a-a9024fb133da",
        "name": "Breath Weapons",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 42,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "beeeb50e-45eb-41cc-8df2-c7c6a4f0f43f",
    "mode": "custom",
    "name": "Young Bronze Dragon",
    "type": "dragon",
    "src": "MM p.108",
    "cr": "8",
    "hp": 142,
    "AC": 18,
    "actions": [
      {
        "id": "f77f93c3-812d-48f5-94bd-e758e7e25302",
        "name": "Breath Weapons",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 55,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "e7d2b7af-19da-49db-be2d-5106a7f4c136",
    "mode": "custom",
    "name": "Young Copper Dragon",
    "type": "dragon",
    "src": "MM p.112",
    "cr": "7",
    "hp": 119,
    "AC": 17,
    "actions": [
      {
        "id": "c50a5c97-3e33-46b3-b196-b9bb08f74cc2",
        "name": "Breath Weapons",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 40.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "0d839193-c153-4a34-8baa-3e50c882d63a",
    "mode": "custom",
    "name": "Young Gold Dragon",
    "type": "dragon",
    "src": "MM p.115",
    "cr": "10",
    "hp": 178,
    "AC": 18,
    "actions": [
      {
        "id": "cb626687-c4ca-437f-bbae-7551bc592452",
        "name": "Breath Weapons",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 55,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "3882ec31-c772-47b2-9fbe-b285f46b58dd",
    "mode": "custom",
    "name": "Young Green Dragon",
    "type": "dragon",
    "src": "MM p.94",
    "cr": "8",
    "hp": 136,
    "AC": 18,
    "actions": [
      {
        "id": "1b9bd2c6-b55b-49dc-9c5c-96ebe0e31c90",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "5effadae-17a4-45b9-a9e0-bc13ef866461",
        "name": "Poison Breath",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 42,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "ed6eb0da-a126-4d8a-9974-0a8b7e50e03d",
    "mode": "custom",
    "name": "Young Red Dragon",
    "type": "dragon",
    "src": "MM p.98",
    "cr": "10",
    "hp": 178,
    "AC": 18,
    "actions": [
      {
        "id": "6822423d-9c57-49f1-9210-36fcb5e56f37",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 3.5,
        "toHit": 10,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "5803249d-69f2-421d-bde9-76b9650d35f2",
        "name": "Fire Breath",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 56,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "21047354-bf6b-46bd-a3e8-f54ca2079a82",
    "mode": "custom",
    "name": "Young Red Shadow Dragon",
    "type": "dragon",
    "src": "MM p.85",
    "cr": "13",
    "hp": 178,
    "AC": 18,
    "actions": [
      {
        "id": "2dd7c86a-4055-4bbb-a5ef-bf5196ee6b6f",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 3.5,
        "toHit": 11,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "aac0e8f6-dd77-4f31-8a19-2104b6cb97bf",
        "name": "Shadow Breath",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 56,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "4d78b092-d914-46cc-a4d5-cffa9de8032f",
    "mode": "custom",
    "name": "Young Remorhaz",
    "type": "monstrosity",
    "src": "MM p.258",
    "cr": "5",
    "hp": 93,
    "AC": 14,
    "actions": [
      {
        "id": "f8deed66-1f8a-42c8-bc66-6613effadf47",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "ae26a97a-29c1-4c1f-87f7-93a10c7f38cb",
    "mode": "custom",
    "name": "Young Silver Dragon",
    "type": "dragon",
    "src": "MM p.118",
    "cr": "9",
    "hp": 168,
    "AC": 18,
    "actions": [
      {
        "id": "6dd8c296-6ede-4688-be18-fa0fc661c001",
        "name": "Breath Weapons",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 54,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "ab44e223-9c0e-419e-a2d1-184b36e74f4a",
    "mode": "custom",
    "name": "Young White Dragon",
    "type": "dragon",
    "src": "MM p.101",
    "cr": "6",
    "hp": 133,
    "AC": 17,
    "actions": [
      {
        "id": "9b04b585-b6b9-4c73-a3de-c0d95edafddc",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 4.5,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "56ab5ef1-f20d-40ad-b611-5cf7e71da8b0",
        "name": "Cold Breath",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 45,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "53e09c42-6bad-4fcc-b9c8-74274b5684bb",
    "mode": "custom",
    "name": "Yuan-ti Abomination",
    "type": "monstrosity",
    "src": "MM p.308",
    "cr": "7",
    "hp": 127,
    "AC": 15,
    "actions": [
      {
        "id": "764d7c44-2b3a-4601-90f9-4aa4aec5d982",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10.5,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "1fc60af6-87ea-41cb-b0a2-1eb6a2f45117",
        "name": "Longbow (Abomination Form Only)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "9b6d4ef1-2788-4754-a188-e9a6cb5bca5a",
    "mode": "custom",
    "name": "Yuan-ti Malison (Type 1)",
    "type": "monstrosity",
    "src": "MM p.309",
    "cr": "3",
    "hp": 66,
    "AC": 12,
    "actions": [
      {
        "id": "3d7f590e-f4ab-4f8a-908d-f559204ee77c",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "3434be3e-2b07-4d46-a810-0638bc7bc17a",
        "name": "Longbow (Yuan-ti Form Only)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "d196e0fa-817d-444d-b6d4-7c48235fafb3",
    "mode": "custom",
    "name": "Yuan-ti Malison (Type 2)",
    "type": "monstrosity",
    "src": "MM p.309",
    "cr": "3",
    "hp": 66,
    "AC": 12,
    "actions": [
      {
        "id": "19db5871-f0c5-4432-b34e-478ddbd5a49a",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "ff21118e-4b91-4b65-b338-0b7331ac4345",
    "mode": "custom",
    "name": "Yuan-ti Malison (Type 3)",
    "type": "monstrosity",
    "src": "MM p.309",
    "cr": "3",
    "hp": 66,
    "AC": 12,
    "actions": [
      {
        "id": "6cb39a37-6140-4c7b-b165-ecefccb1699d",
        "name": "Bite (Snake Form Only)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "7f035826-7e36-47ef-b13e-0f82ce71136e",
    "mode": "custom",
    "name": "Yuan-ti Pureblood",
    "type": "humanoid",
    "src": "MM p.310",
    "cr": "1",
    "hp": 40,
    "AC": 11,
    "actions": [
      {
        "id": "59756f4a-6f39-41af-8f50-78c249eb606b",
        "name": "Shortbow",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "05c728a2-b0b5-4380-a165-7132edddc261",
    "mode": "custom",
    "name": "Zombie",
    "type": "undead",
    "src": "MM p.316",
    "cr": "1/4",
    "hp": 22,
    "AC": 8,
    "actions": [],
    "count": 1
  },
  {
    "id": "c56ab598-4cc4-40fc-8718-eaf1bbbe45ea",
    "mode": "custom",
    "name": "Abjurer Wizard",
    "type": "humanoid",
    "src": "MPMM p.260",
    "cr": "9",
    "hp": 104,
    "AC": 12,
    "actions": [
      {
        "id": "8c9cc50c-0f1f-47b3-843b-eab5cc11e404",
        "name": "Force Blast",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 36,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "d95174d4-d583-44eb-9f0a-19b694eaac4d",
    "mode": "custom",
    "name": "Adult Kruthik",
    "type": "monstrosity",
    "src": "MPMM p.169",
    "cr": "2",
    "hp": 39,
    "AC": 18,
    "actions": [],
    "count": 1
  },
  {
    "id": "0a7ca3c2-cf9b-4f2e-a796-15aaa495a6a4",
    "mode": "custom",
    "name": "Adult Oblex",
    "type": "ooze",
    "src": "MPMM p.198",
    "cr": "5",
    "hp": 75,
    "AC": 14,
    "actions": [
      {
        "id": "ff1a3e29-4a8a-4b02-813d-45e5409eeac9",
        "name": "Pseudopod",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 14,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "fae06be5-1443-4a4e-8788-42e784caf360",
        "name": "Eat Memories",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 18,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "82068bde-e0bd-4f06-96e2-a8234437a517",
    "mode": "custom",
    "name": "Air Elemental Myrmidon",
    "type": "elemental",
    "src": "MPMM p.122",
    "cr": "7",
    "hp": 117,
    "AC": 18,
    "actions": [
      {
        "id": "f97ec59c-9f00-46c2-8c65-6cfb89651a0b",
        "name": "Lightning Strike {@recharge}",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 18,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "66809d4a-6074-40e1-8453-31aa0f329b2f",
    "mode": "custom",
    "name": "Alhoon",
    "type": "undead",
    "src": "MPMM p.43",
    "cr": "10",
    "hp": 150,
    "AC": 15,
    "actions": [
      {
        "id": "1a304c7e-32ae-44ef-a46b-7267aa97861e",
        "name": "Chilling Grasp",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 14,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "9d2b27c9-66f5-4160-94ea-da8964228015",
        "name": "Arcane Bolt",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 28,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "a2e5b0b3-01b1-4160-92f9-37b86dc0aba9",
    "mode": "custom",
    "name": "Alkilith",
    "type": "fiend",
    "src": "MPMM p.44",
    "cr": "11",
    "hp": 168,
    "AC": 17,
    "actions": [],
    "count": 1
  },
  {
    "id": "a394528d-128b-4de9-9c0e-1ce11dd15497",
    "mode": "custom",
    "name": "Allip",
    "type": "undead",
    "src": "MPMM p.45",
    "cr": "5",
    "hp": 40,
    "AC": 13,
    "actions": [],
    "count": 1
  },
  {
    "id": "b1c0599d-984f-43a6-92e8-af92c3040bda",
    "mode": "custom",
    "name": "Amnizu",
    "type": "fiend",
    "src": "MPMM p.46",
    "cr": "18",
    "hp": 202,
    "AC": 21,
    "actions": [
      {
        "id": "3b3b93f3-5d6d-4931-b491-beb1873892f8",
        "name": "Taskmaster Whip",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 16.5,
        "toHit": 11,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "7e395d44-999b-4512-ac08-38203686509a",
        "name": "Blinding Rot",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 26,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "27aa833c-404c-47fb-91a5-dc8c6c5300cc",
        "name": "Forgetfulness {@recharge}",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 26,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "6efa1658-706d-42b0-9404-3438a7e895fc",
    "mode": "custom",
    "name": "Angry Sorrowsworn",
    "type": "monstrosity",
    "src": "MPMM p.222",
    "cr": "13",
    "hp": 255,
    "AC": 18,
    "actions": [],
    "count": 1
  },
  {
    "id": "f1a0fa31-ffcb-45a7-8103-35e228c3e172",
    "mode": "custom",
    "name": "Annis Hag",
    "type": "fey",
    "src": "MPMM p.47",
    "cr": "6",
    "hp": 90,
    "AC": 17,
    "actions": [],
    "count": 1
  },
  {
    "id": "0ae0b010-8282-4351-b9f8-cf0f89461da7",
    "mode": "custom",
    "name": "Apprentice Wizard",
    "type": "humanoid",
    "src": "MPMM p.259",
    "cr": "1/4",
    "hp": 13,
    "AC": 10,
    "actions": [],
    "count": 1
  },
  {
    "id": "d1ff3a9d-3732-4d40-bd96-e074541ad6fc",
    "mode": "custom",
    "name": "Archdruid",
    "type": "humanoid",
    "src": "MPMM p.48",
    "cr": "12",
    "hp": 154,
    "AC": 14,
    "actions": [
      {
        "id": "67b62910-bd25-40f3-873e-e387e76e1041",
        "name": "Staff",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 21,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "af13e297-c9dd-4994-ad69-d1756665dbc4",
    "mode": "custom",
    "name": "Archer",
    "type": "humanoid",
    "src": "MPMM p.49",
    "cr": "3",
    "hp": 75,
    "AC": 16,
    "actions": [],
    "count": 1
  },
  {
    "id": "fde6b452-d36f-4b1b-b58f-b9f4c945aae3",
    "mode": "custom",
    "name": "Armanite",
    "type": "fiend",
    "src": "MPMM p.50",
    "cr": "7",
    "hp": 94,
    "AC": 16,
    "actions": [
      {
        "id": "ecf630a2-0f9f-434f-ad38-e5a14c940e08",
        "name": "Claw",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 9,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "3d31b68d-be35-4866-82c7-ea4b6876637e",
        "name": "Lightning Lance",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 36,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "2123b76e-0c2e-4302-8dfb-0c52bb059d11",
    "mode": "custom",
    "name": "Astral Dreadnought",
    "type": "monstrosity",
    "src": "MPMM p.51",
    "cr": "21",
    "hp": 297,
    "AC": 20,
    "actions": [],
    "count": 1
  },
  {
    "id": "13c669e7-de6e-4f67-a07a-4560df453ed1",
    "mode": "custom",
    "name": "Aurochs",
    "type": "beast",
    "src": "MPMM p.71",
    "cr": "2",
    "hp": 38,
    "AC": 11,
    "actions": [
      {
        "id": "df5630d4-2e95-4d02-84f6-d7377f54bb45",
        "name": "Gore",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 9,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "1cca474c-3da6-48e3-87d2-2b33054211b5",
    "mode": "custom",
    "name": "Autumn Eladrin",
    "type": "fey",
    "src": "MPMM p.115",
    "cr": "10",
    "hp": 165,
    "AC": 19,
    "actions": [
      {
        "id": "c5055d4a-f32f-48ad-bbb2-e7b85387f3f6",
        "name": "Longsword",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 22.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "20a733d0-69ce-41f0-9e43-304f7cc4326a",
        "name": "Longbow",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 22.5,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "0fdc3efd-1378-4e39-b3ef-411f8ceb90ff",
    "mode": "custom",
    "name": "Babau",
    "type": "fiend",
    "src": "MPMM p.52",
    "cr": "4",
    "hp": 82,
    "AC": 16,
    "actions": [
      {
        "id": "e4b42522-ec96-4121-bc35-2fa7a8f8bc98",
        "name": "Claw",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 2.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "bcadb780-da15-45c5-9564-595daaf1d4fd",
    "mode": "custom",
    "name": "Bael",
    "type": "fiend",
    "src": "MPMM p.54",
    "cr": "19",
    "hp": 189,
    "AC": 18,
    "actions": [
      {
        "id": "738dcfd2-1928-4b6c-99ec-2337d21a66fc",
        "name": "Hellish Morningstar",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 9,
        "toHit": 13,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "7d8d1e70-bfe6-4ec8-bb21-1e4d27805424",
    "mode": "custom",
    "name": "Balhannoth",
    "type": "aberration",
    "src": "MPMM p.55",
    "cr": "11",
    "hp": 114,
    "AC": 17,
    "actions": [],
    "count": 1
  },
  {
    "id": "6147bbf5-8749-4096-ac28-4ae9823f387b",
    "mode": "custom",
    "name": "Banderhobb",
    "type": "monstrosity",
    "src": "MPMM p.56",
    "cr": "5",
    "hp": 84,
    "AC": 15,
    "actions": [
      {
        "id": "302a556c-78b1-4d19-a9f2-47628de7103d",
        "name": "Tongue",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10.5,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "02694dc5-cff2-4c03-90fb-45d7b6474483",
        "name": "Swallow",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10.5,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "27bb5b5e-7650-4cac-91c0-3f9573563280",
    "mode": "custom",
    "name": "Baphomet",
    "type": "fiend",
    "src": "MPMM p.58",
    "cr": "23",
    "hp": 319,
    "AC": 22,
    "actions": [
      {
        "id": "ede40937-4443-41e6-8bb1-5a1409648700",
        "name": "Gore",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 16.5,
        "toHit": 17,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "aff0351d-1934-4532-a70a-4700ad32660f",
    "mode": "custom",
    "name": "Bard",
    "type": "humanoid",
    "src": "MPMM p.59",
    "cr": "2",
    "hp": 44,
    "AC": 15,
    "actions": [
      {
        "id": "b37dc3d8-b485-4914-8c7d-2553f97357d6",
        "name": "Cacophony",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 9,
        "toHit": 2,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "155681fd-68a1-470a-a6a8-9e4b2ed29c94",
    "mode": "custom",
    "name": "Barghest",
    "type": "fiend",
    "src": "MPMM p.60",
    "cr": "4",
    "hp": 60,
    "AC": 17,
    "actions": [],
    "count": 1
  },
  {
    "id": "f393f645-d8e1-48f3-ba20-99739996ae78",
    "mode": "custom",
    "name": "Berbalang",
    "type": "aberration",
    "src": "MPMM p.61",
    "cr": "2",
    "hp": 49,
    "AC": 14,
    "actions": [
      {
        "id": "f116550b-165f-44f4-a5c6-c21ccde5e4e7",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 4.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "9b3b1a90-67cc-487d-b9e2-e2e44ccb4cb8",
    "mode": "custom",
    "name": "Bheur Hag",
    "type": "fey",
    "src": "MPMM p.62",
    "cr": "7",
    "hp": 91,
    "AC": 17,
    "actions": [
      {
        "id": "66018c2b-00a9-4f1f-8752-6eb1392c18e9",
        "name": "Slam",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 18,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "b123b38d-031d-4611-bc09-0d1d4b350e0d",
    "mode": "custom",
    "name": "Black Abishai",
    "type": "fiend",
    "src": "MPMM p.38",
    "cr": "7",
    "hp": 58,
    "AC": 15,
    "actions": [
      {
        "id": "c76da1b6-87c9-4423-855b-e218c531664f",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 9,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "fadb1154-06ac-446a-bade-f202405b2af0",
    "mode": "custom",
    "name": "Blackguard",
    "type": "humanoid",
    "src": "MPMM p.63",
    "cr": "8",
    "hp": 119,
    "AC": 18,
    "actions": [
      {
        "id": "c077b3ea-dc3f-4b08-bd29-01272118a639",
        "name": "Glaive",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 9,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "53d34088-9444-4ab1-87c9-5561913c2846",
    "mode": "custom",
    "name": "Blue Abishai",
    "type": "fiend",
    "src": "MPMM p.39",
    "cr": "17",
    "hp": 202,
    "AC": 19,
    "actions": [
      {
        "id": "e895c012-a5af-4e37-aa50-4ce6498807d3",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 14,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "9fba8b13-caa4-4fb9-99da-8aa9ec323cad",
        "name": "Lightning Strike",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 36,
        "toHit": 12,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "3a0591cd-c3d8-4968-9966-0f0e56518579",
    "mode": "custom",
    "name": "Bodak",
    "type": "undead",
    "src": "MPMM p.64",
    "cr": "6",
    "hp": 58,
    "AC": 15,
    "actions": [
      {
        "id": "fbd86875-d61a-4563-a211-246a9a41d2b0",
        "name": "Fist",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 9,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "9971cbcb-a0ce-4663-a141-e43f9f679ac6",
        "name": "Withering Gaze",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 22,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "e738098d-a1c0-4d18-ab10-66716dd8bbb6",
    "mode": "custom",
    "name": "Boggle",
    "type": "fey",
    "src": "MPMM p.65",
    "cr": "1/8",
    "hp": 18,
    "AC": 14,
    "actions": [],
    "count": 1
  },
  {
    "id": "bec32c2e-eab1-41b7-9e78-37f3c256ecf4",
    "mode": "custom",
    "name": "Boneclaw",
    "type": "undead",
    "src": "MPMM p.66",
    "cr": "12",
    "hp": 150,
    "AC": 16,
    "actions": [
      {
        "id": "874d7531-4f75-4dbb-a4b7-bcf7eea7905a",
        "name": "Piercing Claw",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 11,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "68d28486-51a0-4179-8b03-32f857e11e0e",
    "mode": "custom",
    "name": "Brontosaurus",
    "type": "beast",
    "src": "MPMM p.95",
    "cr": "5",
    "hp": 121,
    "AC": 15,
    "actions": [],
    "count": 1
  },
  {
    "id": "9c7d72af-e181-4b5e-b531-7bafeba69ab5",
    "mode": "custom",
    "name": "Bulezau",
    "type": "fiend",
    "src": "MPMM p.67",
    "cr": "3",
    "hp": 52,
    "AC": 14,
    "actions": [
      {
        "id": "5ec90353-73f0-40cd-acd4-3cf3c1b8a5fb",
        "name": "Barbed Tail",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 4.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "1c9971e8-c1ac-4f70-81ea-11093f4db61f",
    "mode": "custom",
    "name": "Cadaver Collector",
    "type": "construct",
    "src": "MPMM p.68",
    "cr": "14",
    "hp": 189,
    "AC": 17,
    "actions": [
      {
        "id": "bc1c0854-017d-43ba-a2f4-b15d75305f3a",
        "name": "Slam",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 16.5,
        "toHit": 10,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "f630b375-0ca1-4744-bcab-036b01cf2714",
    "mode": "custom",
    "name": "Canoloth",
    "type": "fiend",
    "src": "MPMM p.69",
    "cr": "8",
    "hp": 120,
    "AC": 16,
    "actions": [
      {
        "id": "1a4a92f8-df58-4319-b0b8-8ec9f3261e72",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 18,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "fd439217-422e-4b8d-9494-f8cf484762f5",
        "name": "Claw",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 9,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "94db6d3f-7ea6-42a6-b71c-8f13e3c11ddd",
        "name": "Tongue",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "374536cd-597b-4392-9f8c-a6ca145b8f2c",
    "mode": "custom",
    "name": "Catoblepas",
    "type": "monstrosity",
    "src": "MPMM p.70",
    "cr": "5",
    "hp": 84,
    "AC": 14,
    "actions": [
      {
        "id": "f1a31df4-7d06-42f7-a96e-4a82e0f16ffe",
        "name": "Death Ray",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 36,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "abf22ed7-1b7c-4420-ae6a-39a3a51a8f41",
    "mode": "custom",
    "name": "Cave Fisher",
    "type": "monstrosity",
    "src": "MPMM p.73",
    "cr": "3",
    "hp": 58,
    "AC": 16,
    "actions": [],
    "count": 1
  },
  {
    "id": "5f4c9b42-09a3-4b74-80db-75d7ced2e1bb",
    "mode": "custom",
    "name": "Champion",
    "type": "humanoid",
    "src": "MPMM p.74",
    "cr": "9",
    "hp": 143,
    "AC": 18,
    "actions": [
      {
        "id": "e1adff85-a4ad-41d7-9a15-bbc5cba1ab83",
        "name": "Greatsword",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "eb43f6b6-3f32-468c-83cd-758875f21d06",
        "name": "Shortbow",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "ef7b6a98-ceab-4ae3-a25c-65729c5c0b0d",
    "mode": "custom",
    "name": "Chitine",
    "type": "monstrosity",
    "src": "MPMM p.75",
    "cr": "1/2",
    "hp": 18,
    "AC": 14,
    "actions": [],
    "count": 1
  },
  {
    "id": "1907fff9-265b-433f-a1bb-676a0d4afc64",
    "mode": "custom",
    "name": "Choker",
    "type": "aberration",
    "src": "MPMM p.76",
    "cr": "1",
    "hp": 13,
    "AC": 16,
    "actions": [],
    "count": 1
  },
  {
    "id": "4e793d09-40a0-4c44-a449-b21269ba157d",
    "mode": "custom",
    "name": "Choldrith",
    "type": "monstrosity",
    "src": "MPMM p.77",
    "cr": "3",
    "hp": 66,
    "AC": 15,
    "actions": [
      {
        "id": "677a8314-bd06-48b5-a9b9-5591927cbb31",
        "name": "Dagger",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "17ca5c98-47a1-4b35-97bf-665197997136",
    "mode": "custom",
    "name": "Clockwork Bronze Scout",
    "type": "construct",
    "src": "MPMM p.79",
    "cr": "1",
    "hp": 36,
    "AC": 13,
    "actions": [
      {
        "id": "acb30618-75cf-44a6-b9bf-27ce06e13067",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 3.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "008cf57a-a2bf-44d3-a382-3a98044f2470",
        "name": "Lightning Flare",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 14,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "664c1f4a-38a6-45ff-82f9-7a1c64da9c48",
    "mode": "custom",
    "name": "Clockwork Iron Cobra",
    "type": "construct",
    "src": "MPMM p.79",
    "cr": "4",
    "hp": 91,
    "AC": 13,
    "actions": [
      {
        "id": "f38d97f4-6203-484a-b806-a37d43269c96",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 13.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "657c0f95-4d06-4b98-b338-49d27262f2d0",
    "mode": "custom",
    "name": "Clockwork Oaken Bolter",
    "type": "construct",
    "src": "MPMM p.80",
    "cr": "5",
    "hp": 117,
    "AC": 16,
    "actions": [
      {
        "id": "9b413dce-e57d-4652-90f1-2bb14ada070c",
        "name": "Harpoon",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 5.5,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "1ef72975-e0b9-48e7-941b-4aae6251095e",
        "name": "Explosive Bolt",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 17.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "723c24f4-1c12-4c30-93d5-127c82d2afac",
    "mode": "custom",
    "name": "Clockwork Stone Defender",
    "type": "construct",
    "src": "MPMM p.80",
    "cr": "4",
    "hp": 105,
    "AC": 16,
    "actions": [],
    "count": 1
  },
  {
    "id": "522b77ab-1c37-4045-b2a5-6ade0b735066",
    "mode": "custom",
    "name": "Cloud Giant Smiling One",
    "type": "giant",
    "src": "MPMM p.81",
    "cr": "11",
    "hp": 250,
    "AC": 15,
    "actions": [
      {
        "id": "b03be209-a831-468b-a5dd-c55eaae085d6",
        "name": "Slam",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 5.5,
        "toHit": 12,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "6bb39181-8d28-4261-8670-814a94fd19e4",
    "mode": "custom",
    "name": "Conjurer Wizard",
    "type": "humanoid",
    "src": "MPMM p.260",
    "cr": "6",
    "hp": 58,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "2450409f-911b-440a-bfe5-ffafcc5c76af",
    "mode": "custom",
    "name": "Corpse Flower",
    "type": "plant",
    "src": "MPMM p.82",
    "cr": "8",
    "hp": 127,
    "AC": 12,
    "actions": [
      {
        "id": "b051f5b1-6339-408d-acb3-2a6c4fddb1f7",
        "name": "Tentacle",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "877b23c5-1497-4876-aef4-2542dd53fd8d",
    "mode": "custom",
    "name": "Cranium Rat",
    "type": "aberration",
    "src": "MPMM p.83",
    "cr": "0",
    "hp": 2,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "494ef232-54ed-4d21-b3e3-eb2ee008ea60",
    "mode": "custom",
    "name": "Darkling",
    "type": "fey",
    "src": "MPMM p.84",
    "cr": "1/2",
    "hp": 13,
    "AC": 14,
    "actions": [
      {
        "id": "e0e6ace9-cafc-4a59-a394-67a27f86e344",
        "name": "Dagger",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "137f46fa-76be-40eb-be11-f4a65ab36bec",
    "mode": "custom",
    "name": "Darkling Elder",
    "type": "fey",
    "src": "MPMM p.84",
    "cr": "2",
    "hp": 27,
    "AC": 15,
    "actions": [
      {
        "id": "0922891e-ae5a-4316-b780-112c158f6a8a",
        "name": "Scimitar",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "bec1fceb-97d1-4c37-ba39-c4249f2c3622",
    "mode": "custom",
    "name": "Death Kiss",
    "type": "aberration",
    "src": "MPMM p.85",
    "cr": "10",
    "hp": 142,
    "AC": 15,
    "actions": [
      {
        "id": "e61c17f5-bea0-4a90-8adc-4e6d3db591f2",
        "name": "Blood Drain",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 22,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "ae61432c-2238-4a57-8ff1-f9da43cd7dc8",
    "mode": "custom",
    "name": "Deathlock",
    "type": "undead",
    "src": "MPMM p.86",
    "cr": "4",
    "hp": 36,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "f51fe5ae-dcd4-499b-819e-e808cddb5a9f",
    "mode": "custom",
    "name": "Deathlock Mastermind",
    "type": "undead",
    "src": "MPMM p.87",
    "cr": "8",
    "hp": 110,
    "AC": 13,
    "actions": [
      {
        "id": "5dfe33b5-f949-46f1-929a-05faae3f257a",
        "name": "Grave Bolt",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 13.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "be5602c0-abdb-4a36-b9e1-d8ed90d28757",
    "mode": "custom",
    "name": "Deathlock Wight",
    "type": "undead",
    "src": "MPMM p.87",
    "cr": "3",
    "hp": 37,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "c828ea36-7226-4078-82e9-b43cd98032e2",
    "mode": "custom",
    "name": "Deep Rothé",
    "type": "beast",
    "src": "MPMM p.71",
    "cr": "1/4",
    "hp": 13,
    "AC": 10,
    "actions": [
      {
        "id": "69fce4ac-391c-43a1-8083-555669464c85",
        "name": "Gore",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "0ec3bb7b-c900-4caf-b536-8d470adbf323",
    "mode": "custom",
    "name": "Deep Scion",
    "type": "monstrosity",
    "src": "MPMM p.88",
    "cr": "3",
    "hp": 67,
    "AC": 11,
    "actions": [],
    "count": 1
  },
  {
    "id": "f836f681-d947-40b2-9416-6151261b8c07",
    "mode": "custom",
    "name": "Deinonychus",
    "type": "beast",
    "src": "MPMM p.95",
    "cr": "1",
    "hp": 26,
    "AC": 13,
    "actions": [],
    "count": 1
  },
  {
    "id": "99145f3c-6099-4cbe-8cd8-d5833ce2c5f6",
    "mode": "custom",
    "name": "Demogorgon",
    "type": "fiend",
    "src": "MPMM p.90",
    "cr": "26",
    "hp": 464,
    "AC": 22,
    "actions": [],
    "count": 1
  },
  {
    "id": "d71853de-11fb-4803-b6ce-483fbe38f642",
    "mode": "custom",
    "name": "Derro",
    "type": "aberration",
    "src": "MPMM p.91",
    "cr": "1/4",
    "hp": 13,
    "AC": 13,
    "actions": [
      {
        "id": "7bc6a6a4-7212-408c-a16f-17449e55bd83",
        "name": "Hooked Spear",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 3.5,
        "toHit": 2,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "eef9e984-50e9-4244-9adf-62d8e2f881eb",
    "mode": "custom",
    "name": "Derro Savant",
    "type": "aberration",
    "src": "MPMM p.92",
    "cr": "3",
    "hp": 36,
    "AC": 13,
    "actions": [
      {
        "id": "6ff720a8-86ee-4d6c-82a6-eb50e7ef715b",
        "name": "Chromatic Beam",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 21,
        "toHit": 2,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "9d5979d6-1cc0-4e74-94c3-261e5df67fac",
    "mode": "custom",
    "name": "Devourer",
    "type": "undead",
    "src": "MPMM p.93",
    "cr": "13",
    "hp": 189,
    "AC": 16,
    "actions": [
      {
        "id": "60980720-430d-46c6-bb33-3e91a4a1e9b8",
        "name": "Claw",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 21,
        "toHit": 10,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "a5737513-263c-4813-9cd9-fe56040d4b40",
        "name": "Soul Rend {@recharge}",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 44,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "b36668d6-b5d4-4d4f-ad02-04351d9cc311",
    "mode": "custom",
    "name": "Dhergoloth",
    "type": "fiend",
    "src": "MPMM p.94",
    "cr": "7",
    "hp": 119,
    "AC": 15,
    "actions": [],
    "count": 1
  },
  {
    "id": "75cffcef-41b9-4ad0-997a-0bdee5acc7fa",
    "mode": "custom",
    "name": "Dimetrodon",
    "type": "beast",
    "src": "MPMM p.95",
    "cr": "1/4",
    "hp": 19,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "34872dfe-537c-4f84-851a-88d54e4357c6",
    "mode": "custom",
    "name": "Dire Troll",
    "type": "giant",
    "src": "MPMM p.246",
    "cr": "13",
    "hp": 172,
    "AC": 15,
    "actions": [
      {
        "id": "7b01d75d-54d9-4392-92e6-dd021482c1b4",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 5.5,
        "toHit": 11,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "85212488-20be-404a-b35e-1e54d61f7bea",
        "name": "Whirlwind of Claws",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 44,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "bad9fdc4-2dfc-42f9-86a4-bf15f5e63aac",
    "mode": "custom",
    "name": "Diviner Wizard",
    "type": "humanoid",
    "src": "MPMM p.261",
    "cr": "8",
    "hp": 90,
    "AC": 12,
    "actions": [
      {
        "id": "03474b14-3066-4a6c-9d12-16d3fe51976e",
        "name": "Overwhelming Revelation",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 45,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "76260a95-d2ba-448f-9104-3d652adf6106",
    "mode": "custom",
    "name": "Dolphin",
    "type": "beast",
    "src": "MPMM p.97",
    "cr": "1/8",
    "hp": 11,
    "AC": 12,
    "actions": [
      {
        "id": "73588c60-eb2b-4fc5-b0d1-66830cc1d7c0",
        "name": "Slam",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 3.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "59fef861-00c9-4b91-b787-e3fd996200cc",
    "mode": "custom",
    "name": "Dolphin Delighter",
    "type": "fey",
    "src": "MPMM p.97",
    "cr": "3",
    "hp": 27,
    "AC": 14,
    "actions": [
      {
        "id": "5870a189-f430-41ac-837b-339dd5f5855a",
        "name": "Dazzling Slam",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "b3fb417d-5fc1-4f33-800d-a2725b2407ed",
    "mode": "custom",
    "name": "Draegloth",
    "type": "fiend",
    "src": "MPMM p.98",
    "cr": "7",
    "hp": 123,
    "AC": 15,
    "actions": [],
    "count": 1
  },
  {
    "id": "588f7df1-d273-4e1e-b5da-ffd12b585720",
    "mode": "custom",
    "name": "Drow Arachnomancer",
    "type": "humanoid",
    "src": "MPMM p.99",
    "cr": "13",
    "hp": 162,
    "AC": 15,
    "actions": [
      {
        "id": "5ebfc06d-25e4-458d-a5f6-2559b9f9e22c",
        "name": "Bite (Spider Form Only)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 31.5,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "87098aad-2fd0-4fad-a473-dba14d5cda4b",
        "name": "Poisonous Touch (Humanoid Form Only)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 35,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "2b455a0e-c563-4508-8be6-c22c7217f958",
    "mode": "custom",
    "name": "Drow Favored Consort",
    "type": "humanoid",
    "src": "MPMM p.100",
    "cr": "18",
    "hp": 240,
    "AC": 15,
    "actions": [
      {
        "id": "1cc2b8dc-64c4-45fc-9d2c-7a2cb1fd282f",
        "name": "Scimitar",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 27,
        "toHit": 11,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "8730b719-455d-48be-b323-7fd3e3354dac",
        "name": "Arcane Eruption",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 36,
        "toHit": 10,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "d0f75178-ad0e-4a23-b1f5-81efc6c877fe",
    "mode": "custom",
    "name": "Drow House Captain",
    "type": "humanoid",
    "src": "MPMM p.101",
    "cr": "9",
    "hp": 162,
    "AC": 16,
    "actions": [
      {
        "id": "70635804-304e-478a-b3a4-5eb60b1d5b9b",
        "name": "Scimitar",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 14,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "da444ac9-ba63-4f2a-bdb3-cd7bcd1f4a9c",
    "mode": "custom",
    "name": "Drow Inquisitor",
    "type": "humanoid",
    "src": "MPMM p.102",
    "cr": "14",
    "hp": 149,
    "AC": 16,
    "actions": [
      {
        "id": "997a9a8e-dcfd-42c8-b4cb-e5cbef919d82",
        "name": "Death Lance",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 18,
        "toHit": 10,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "73b9d5cf-bb98-43a1-9157-516d7372ed3a",
    "mode": "custom",
    "name": "Drow Matron Mother",
    "type": "humanoid",
    "src": "MPMM p.104",
    "cr": "20",
    "hp": 247,
    "AC": 17,
    "actions": [
      {
        "id": "9179d1f2-d156-481d-bc17-73a4c8f00b91",
        "name": "Demon Staff",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 14,
        "toHit": 10,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "6423e18a-376c-4224-b505-c07ea735d9d5",
        "name": "Tentacle Rod",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 3.5,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "be93b210-9600-4366-b2a4-09d56fd33461",
        "name": "Divine Flame",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 28,
        "toHit": 10,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "88d16477-ff79-4db7-862d-e293e8e03a95",
    "mode": "custom",
    "name": "Drow Shadowblade",
    "type": "humanoid",
    "src": "MPMM p.105",
    "cr": "11",
    "hp": 150,
    "AC": 17,
    "actions": [],
    "count": 1
  },
  {
    "id": "beb799d8-c467-4d56-ad5f-fe2d1cd08a97",
    "mode": "custom",
    "name": "Duergar Despot",
    "type": "humanoid",
    "src": "MPMM p.107",
    "cr": "12",
    "hp": 119,
    "AC": 21,
    "actions": [
      {
        "id": "68259f59-a03a-48eb-a048-705f364e9c57",
        "name": "Flame Jet",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 18,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "9c694d29-5555-45e9-9ce8-890ae5ee8c7c",
    "mode": "custom",
    "name": "Duergar Hammerer",
    "type": "construct",
    "src": "MPMM p.112",
    "cr": "2",
    "hp": 33,
    "AC": 17,
    "actions": [],
    "count": 1
  },
  {
    "id": "8d494152-9000-4bfb-ba70-334aec0ca99c",
    "mode": "custom",
    "name": "Duergar Kavalrachni",
    "type": "humanoid",
    "src": "MPMM p.107",
    "cr": "2",
    "hp": 26,
    "AC": 16,
    "actions": [
      {
        "id": "828d9a76-79b4-495c-9316-51a451f865a0",
        "name": "War Pick",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "6aaed7fb-7dd3-4bbc-8309-08623ba21b2e",
        "name": "Heavy Crossbow",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 5.5,
        "toHit": 2,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "eaf35ccd-990f-4397-bb32-fd4c361fee9d",
    "mode": "custom",
    "name": "Duergar Mind Master",
    "type": "humanoid",
    "src": "MPMM p.108",
    "cr": "2",
    "hp": 39,
    "AC": 14,
    "actions": [
      {
        "id": "46a29070-8fc8-4180-b66b-806aadf69971",
        "name": "Mind-Poison Dagger",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 21,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "f34f8899-35e1-4a1b-be84-7010e3036ae3",
    "mode": "custom",
    "name": "Duergar Screamer",
    "type": "construct",
    "src": "MPMM p.111",
    "cr": "3",
    "hp": 38,
    "AC": 15,
    "actions": [
      {
        "id": "29b28ba5-70db-42d0-875c-38edbd23791e",
        "name": "Sonic Scream",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7,
        "toHit": 1,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "7d1b8b25-9743-4437-b0b2-569844e7e410",
    "mode": "custom",
    "name": "Duergar Soulblade",
    "type": "humanoid",
    "src": "MPMM p.109",
    "cr": "1",
    "hp": 27,
    "AC": 14,
    "actions": [],
    "count": 1
  },
  {
    "id": "3f269d02-17a5-4ab5-a2e5-850c1968a0bf",
    "mode": "custom",
    "name": "Duergar Stone Guard",
    "type": "humanoid",
    "src": "MPMM p.110",
    "cr": "2",
    "hp": 39,
    "AC": 18,
    "actions": [],
    "count": 1
  },
  {
    "id": "484df4ad-64c2-408a-acfb-537e706e5c63",
    "mode": "custom",
    "name": "Duergar Warlord",
    "type": "humanoid",
    "src": "MPMM p.111",
    "cr": "6",
    "hp": 75,
    "AC": 20,
    "actions": [
      {
        "id": "725b25a6-af32-4a58-8a3d-43b6b949b6ee",
        "name": "Psychic-Attuned Hammer",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 5.5,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "03a516da-d592-4f21-9068-7d9b7c68d7a4",
    "mode": "custom",
    "name": "Duergar Xarrorn",
    "type": "humanoid",
    "src": "MPMM p.111",
    "cr": "2",
    "hp": 26,
    "AC": 18,
    "actions": [
      {
        "id": "f98a096c-626f-4ca3-9f65-ae51c515e960",
        "name": "Fire Lance",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 3.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "8edeb4f8-4db8-43f0-8807-92363a3322c4",
        "name": "Fire Spray",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 10.5,
        "toHit": 2,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "cc71b2f8-e1b5-49d4-a423-333263e2786f",
    "mode": "custom",
    "name": "Dybbuk",
    "type": "fiend",
    "src": "MPMM p.113",
    "cr": "4",
    "hp": 37,
    "AC": 14,
    "actions": [],
    "count": 1
  },
  {
    "id": "51029fa2-2a5d-4203-943d-b69e9a0d0569",
    "mode": "custom",
    "name": "Earth Elemental Myrmidon",
    "type": "elemental",
    "src": "MPMM p.122",
    "cr": "7",
    "hp": 127,
    "AC": 18,
    "actions": [
      {
        "id": "58e35995-9f53-4102-9715-1660f8a14f1f",
        "name": "Thunderous Strike {@recharge}",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 22,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "8bfc81bf-70e3-4b6c-ab5d-c8b8f73139eb",
    "mode": "custom",
    "name": "Eidolon",
    "type": "undead",
    "src": "MPMM p.114",
    "cr": "12",
    "hp": 63,
    "AC": 9,
    "actions": [],
    "count": 1
  },
  {
    "id": "d9844e7a-4a88-45a1-a3fc-61d68843e016",
    "mode": "custom",
    "name": "Elder Brain",
    "type": "aberration",
    "src": "MPMM p.120",
    "cr": "14",
    "hp": 210,
    "AC": 10,
    "actions": [],
    "count": 1
  },
  {
    "id": "4a9f35d5-cb6f-4025-973a-36fe6be484f2",
    "mode": "custom",
    "name": "Elder Oblex",
    "type": "ooze",
    "src": "MPMM p.199",
    "cr": "10",
    "hp": 115,
    "AC": 16,
    "actions": [
      {
        "id": "1780a44b-4ddb-4da2-825c-4cf67dbddc2f",
        "name": "Pseudopod",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 14,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "702c4bc2-74d9-4d41-86df-8839e12cb8a8",
        "name": "Eat Memories",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 44,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "32e76f87-1f22-4154-98fb-552976cbd5f5",
    "mode": "custom",
    "name": "Elder Tempest",
    "type": "elemental",
    "src": "MPMM p.121",
    "cr": "23",
    "hp": 264,
    "AC": 19,
    "actions": [
      {
        "id": "6a5a717c-4761-437e-be27-289f7cbc9783",
        "name": "Lightning Storm {@recharge}",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 27,
        "toHit": 11,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "5588472b-cbc8-4149-ab2d-931797095fef",
    "mode": "custom",
    "name": "Enchanter Wizard",
    "type": "humanoid",
    "src": "MPMM p.261",
    "cr": "5",
    "hp": 49,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "796d85e7-dda3-4164-92a6-2101192a8bf1",
    "mode": "custom",
    "name": "Evoker Wizard",
    "type": "humanoid",
    "src": "MPMM p.262",
    "cr": "9",
    "hp": 121,
    "AC": 12,
    "actions": [
      {
        "id": "b2184a3f-4278-4bd1-bbc6-07a790aeafd9",
        "name": "Sculpted Explosion",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 40.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "af236575-da33-4b43-b665-4cbee37c887a",
    "mode": "custom",
    "name": "Female Steeder",
    "type": "monstrosity",
    "src": "MPMM p.231",
    "cr": "1",
    "hp": 30,
    "AC": 14,
    "actions": [
      {
        "id": "6acf43ba-c3b7-4270-9e1b-e98239ebff93",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 9,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "b493c649-b924-4820-bfba-c08bcbf289e3",
    "mode": "custom",
    "name": "Fire Elemental Myrmidon",
    "type": "elemental",
    "src": "MPMM p.123",
    "cr": "7",
    "hp": 123,
    "AC": 18,
    "actions": [
      {
        "id": "7ee20dc2-8ae9-4c41-be6c-699f7309cc3f",
        "name": "Fiery Strikes {@recharge}",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7,
        "toHit": 0,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "9a1058cd-a75b-4bd2-b27e-0ec3378e917c",
    "mode": "custom",
    "name": "Fire Giant Dreadnought",
    "type": "giant",
    "src": "MPMM p.124",
    "cr": "14",
    "hp": 187,
    "AC": 21,
    "actions": [
      {
        "id": "8858b44e-8e8e-43a1-8f7a-3c540b6f56b7",
        "name": "Fireshield",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 14,
        "toHit": 13,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "be37f51a-5cc7-4ed1-b18d-99ad8d604a11",
        "name": "Shield Charge",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 14,
        "toHit": 11,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "841bb903-bed5-4569-b98e-0cb3dad936c1",
    "mode": "custom",
    "name": "Firenewt Warlock of Imix",
    "type": "elemental",
    "src": "MPMM p.125",
    "cr": "1",
    "hp": 33,
    "AC": 10,
    "actions": [],
    "count": 1
  },
  {
    "id": "14922b8b-fcaa-48c2-b41d-5947e2d4da76",
    "mode": "custom",
    "name": "Firenewt Warrior",
    "type": "elemental",
    "src": "MPMM p.125",
    "cr": "1/2",
    "hp": 27,
    "AC": 13,
    "actions": [
      {
        "id": "754714c9-492e-4e27-9e1a-5de9345bccf2",
        "name": "Spit Fire",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 9,
        "toHit": 1,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "ffe74469-dbfc-4b30-9dbf-d064bfac4c19",
    "mode": "custom",
    "name": "Flail Snail",
    "type": "elemental",
    "src": "MPMM p.126",
    "cr": "3",
    "hp": 52,
    "AC": 16,
    "actions": [],
    "count": 1
  },
  {
    "id": "40c07ce0-6472-44ee-9b85-8a01b1f92ee4",
    "mode": "custom",
    "name": "Flind",
    "type": "fiend",
    "src": "MPMM p.127",
    "cr": "9",
    "hp": 127,
    "AC": 16,
    "actions": [
      {
        "id": "14cbc1e2-f56a-4a9f-9cdc-cff55347f522",
        "name": "Flail of Pain",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 16.5,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "c7af9c62-2026-4311-9bd1-2454f022b965",
    "mode": "custom",
    "name": "Fraz-Urb'luu",
    "type": "fiend",
    "src": "MPMM p.129",
    "cr": "23",
    "hp": 337,
    "AC": 18,
    "actions": [
      {
        "id": "fa37fe90-bb9d-4a18-af38-9e343a403356",
        "name": "Phantasmal Terror",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 16.5,
        "toHit": 13,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "781aa47d-f2f6-4e8e-af5d-d46625f2bd3a",
    "mode": "custom",
    "name": "Froghemoth",
    "type": "monstrosity",
    "src": "MPMM p.130",
    "cr": "10",
    "hp": 161,
    "AC": 14,
    "actions": [
      {
        "id": "4a201e67-2c59-4aee-9d46-6ae3d96b0a1f",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10.5,
        "toHit": 10,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "9d166710-0a0e-4d2f-96cb-123626db9a55",
    "mode": "custom",
    "name": "Frost Giant Everlasting One",
    "type": "giant",
    "src": "MPMM p.131",
    "cr": "12",
    "hp": 189,
    "AC": 15,
    "actions": [],
    "count": 1
  },
  {
    "id": "d45f09c9-63e8-48c0-9578-8d6f7ebe8849",
    "mode": "custom",
    "name": "Frost Salamander",
    "type": "elemental",
    "src": "MPMM p.132",
    "cr": "9",
    "hp": 168,
    "AC": 17,
    "actions": [
      {
        "id": "f7b89235-5da7-44bf-961c-62062979bdb5",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 5.5,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "095235d2-4487-4450-b170-6966e3a496e7",
        "name": "Freezing Breath {@recharge}",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 44,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "6b3d7a7c-1b45-402f-bab4-6b2d0f55be19",
    "mode": "custom",
    "name": "Gauth",
    "type": "aberration",
    "src": "MPMM p.133",
    "cr": "6",
    "hp": 52,
    "AC": 15,
    "actions": [
      {
        "id": "a8ae827f-2ce5-4aa5-8215-7438ea95aaa7",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 9,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "6fddf74c-b0b5-460b-916e-5f346c023d93",
        "name": "Eye Rays",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 40,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "0444fc40-33cf-4974-9e00-037f71e3ff3d",
    "mode": "custom",
    "name": "Gazer",
    "type": "aberration",
    "src": "MPMM p.134",
    "cr": "1/2",
    "hp": 13,
    "AC": 13,
    "actions": [
      {
        "id": "b3a7f09f-1c2d-4ebd-8aa8-72ca832ad47e",
        "name": "Eye Rays",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10.5,
        "toHit": 2,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "ecef5d2a-0610-45d8-b701-58ef00d8b038",
    "mode": "custom",
    "name": "Geryon",
    "type": "fiend",
    "src": "MPMM p.136",
    "cr": "22",
    "hp": 300,
    "AC": 19,
    "actions": [
      {
        "id": "7d4fc6c7-7ee0-48cf-a486-48857b4f0519",
        "name": "Claw",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 27,
        "toHit": 16,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "dfda7c20-1e7e-4f49-89ce-8377a427ac25",
        "name": "Stinger",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 13,
        "toHit": 16,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "aa9048bc-4e57-497c-97f5-3287768e22ab",
    "mode": "custom",
    "name": "Giant Strider",
    "type": "elemental",
    "src": "MPMM p.137",
    "cr": "1",
    "hp": 22,
    "AC": 14,
    "actions": [
      {
        "id": "d3eebcc2-f544-4c2f-957a-741a95e00979",
        "name": "Fire Burst",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 14,
        "toHit": 2,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "437755f3-cd99-4582-99b8-d68cf758e50a",
    "mode": "custom",
    "name": "Giff",
    "type": "humanoid",
    "src": "MPMM p.138",
    "cr": "3",
    "hp": 60,
    "AC": 16,
    "actions": [
      {
        "id": "79385773-ed55-4999-a6ca-e3155d2325fd",
        "name": "Fragmentation Grenade",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/day",
        "condition": "is available",
        "dpr": 17.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "29d03761-8936-4c42-9074-f81e4bfe3262",
    "mode": "custom",
    "name": "Girallon",
    "type": "monstrosity",
    "src": "MPMM p.139",
    "cr": "4",
    "hp": 59,
    "AC": 13,
    "actions": [],
    "count": 1
  },
  {
    "id": "32665fc2-73dd-4b0a-a6bd-f647bde1d200",
    "mode": "custom",
    "name": "Githyanki Gish",
    "type": "humanoid",
    "src": "MPMM p.140",
    "cr": "10",
    "hp": 130,
    "AC": 17,
    "actions": [
      {
        "id": "a532fc09-474d-44c3-94ff-709cf758ab8f",
        "name": "Longsword",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 22.5,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "5f36b5d1-8b31-4d6d-b2de-d3ebdc239c41",
        "name": "Telekinetic Bolt",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 28,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "f3bf29f7-fc3c-4f19-8a7f-3d73b2e8e825",
    "mode": "custom",
    "name": "Githyanki Kith'rak",
    "type": "humanoid",
    "src": "MPMM p.140",
    "cr": "12",
    "hp": 180,
    "AC": 18,
    "actions": [
      {
        "id": "3d97dc82-4bb6-4309-a1f4-d40d41673f50",
        "name": "Greatsword",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 17.5,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "ccf2f2b7-8586-48d0-b38f-0fe85a756ad4",
    "mode": "custom",
    "name": "Githyanki Supreme Commander",
    "type": "humanoid",
    "src": "MPMM p.141",
    "cr": "14",
    "hp": 187,
    "AC": 18,
    "actions": [
      {
        "id": "e1b8f6c2-0329-466b-bf8b-0183f95b650f",
        "name": "Silver Greatsword",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 17.5,
        "toHit": 12,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "fcab32b7-6e7e-4abd-a0fe-cb354a1d0ca8",
    "mode": "custom",
    "name": "Githzerai Anarch",
    "type": "humanoid",
    "src": "MPMM p.142",
    "cr": "16",
    "hp": 144,
    "AC": 20,
    "actions": [
      {
        "id": "70d256db-a8dc-44a3-b84b-853448c18971",
        "name": "Unarmed Strike",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 18,
        "toHit": 10,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "6f4169bd-61b6-4585-8807-8324b3af0988",
    "mode": "custom",
    "name": "Githzerai Enlightened",
    "type": "humanoid",
    "src": "MPMM p.143",
    "cr": "10",
    "hp": 112,
    "AC": 18,
    "actions": [
      {
        "id": "d9fa6d37-763c-4807-b3d5-bc053e036d1f",
        "name": "Unarmed Strike",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 18,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "8722c1c4-8b94-411f-ab72-b6ef56c0e332",
        "name": "Temporal Strike {@recharge}",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 52,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "2ce010c4-1e20-47c0-a718-7b276524a871",
    "mode": "custom",
    "name": "Gnoll Flesh Gnawer",
    "type": "monstrosity",
    "src": "MPMM p.144",
    "cr": "1",
    "hp": 22,
    "AC": 14,
    "actions": [],
    "count": 1
  },
  {
    "id": "03c53c21-ee74-4d7d-925d-9da83ceedc8d",
    "mode": "custom",
    "name": "Gnoll Hunter",
    "type": "monstrosity",
    "src": "MPMM p.144",
    "cr": "1/2",
    "hp": 22,
    "AC": 13,
    "actions": [],
    "count": 1
  },
  {
    "id": "ee0a89b3-a5d7-45a9-a800-506f0d88185d",
    "mode": "custom",
    "name": "Gnoll Witherling",
    "type": "undead",
    "src": "MPMM p.145",
    "cr": "1/4",
    "hp": 11,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "b8e4a913-6480-447d-9af3-8b3751b407d9",
    "mode": "custom",
    "name": "Gray Render",
    "type": "monstrosity",
    "src": "MPMM p.146",
    "cr": "12",
    "hp": 189,
    "AC": 19,
    "actions": [
      {
        "id": "9a17ae01-a3e0-45bb-8512-4264d63e1d54",
        "name": "Claw",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10.5,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "0a6fbd92-e10b-4de8-ab00-15c5f8de2036",
    "mode": "custom",
    "name": "Graz'zt",
    "type": "fiend",
    "src": "MPMM p.148",
    "cr": "24",
    "hp": 346,
    "AC": 20,
    "actions": [
      {
        "id": "666ab438-6eb9-412e-a974-880fb5e760c8",
        "name": "Wave of Sorrow (Greatsword)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 14,
        "toHit": 13,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "07d824e4-912f-454e-aff9-2c5bf661e716",
    "mode": "custom",
    "name": "Green Abishai",
    "type": "fiend",
    "src": "MPMM p.40",
    "cr": "15",
    "hp": 195,
    "AC": 18,
    "actions": [
      {
        "id": "dde2995d-93a9-4a54-8ee0-a43cff1f439d",
        "name": "Fiendish Claw",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 16.5,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "a5e66398-8979-490a-b853-d06afabf6b29",
    "mode": "custom",
    "name": "Grung",
    "type": "humanoid",
    "src": "MPMM p.149",
    "cr": "1/4",
    "hp": 11,
    "AC": 12,
    "actions": [
      {
        "id": "ce341039-4206-43de-8393-f860fb3f874e",
        "name": "Dagger",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "1070af5a-f0d4-44dc-a593-fdbc4a52aaf4",
    "mode": "custom",
    "name": "Grung Elite Warrior",
    "type": "humanoid",
    "src": "MPMM p.150",
    "cr": "2",
    "hp": 49,
    "AC": 13,
    "actions": [
      {
        "id": "26b09b6c-2fe4-4ab2-8f12-01bc05cdb7ff",
        "name": "Dagger",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "5ce8ce5e-1151-4b12-bc74-e2b242ab1f1d",
        "name": "Shortbow",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "1f37484c-e6c3-4abd-8524-5bfefd23852d",
    "mode": "custom",
    "name": "Grung Wildling",
    "type": "humanoid",
    "src": "MPMM p.150",
    "cr": "1",
    "hp": 27,
    "AC": 16,
    "actions": [
      {
        "id": "13524abd-c5f0-4261-b00f-8fc8d9d18306",
        "name": "Dagger",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "b28c0e82-d170-4469-ae7c-563b85603d3e",
        "name": "Shortbow",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "0342a1c0-c3b2-41c9-913e-143617ead77e",
    "mode": "custom",
    "name": "Guard Drake",
    "type": "dragon",
    "src": "MPMM p.151",
    "cr": "2",
    "hp": 52,
    "AC": 14,
    "actions": [],
    "count": 1
  },
  {
    "id": "7a2cfdec-9071-48d9-99fa-70f833ec3a03",
    "mode": "custom",
    "name": "Hadrosaurus",
    "type": "beast",
    "src": "MPMM p.96",
    "cr": "1/4",
    "hp": 19,
    "AC": 11,
    "actions": [],
    "count": 1
  },
  {
    "id": "9dc431eb-1184-48ab-bdd9-e4168a6ee105",
    "mode": "custom",
    "name": "Hellfire Engine",
    "type": "construct",
    "src": "MPMM p.152",
    "cr": "16",
    "hp": 216,
    "AC": 18,
    "actions": [
      {
        "id": "604a3f0d-aa0e-4cd3-9fdb-bdd29ddf89a2",
        "name": "Flesh-Crushing Stride",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 28,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 2
      },
      {
        "id": "79a3dc8a-f040-4c69-8953-ab6d768e0e6f",
        "name": "Hellfire Weapons",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 135.5,
        "toHit": 10,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "426cca53-5888-4510-a20a-b3d5b2358677",
    "mode": "custom",
    "name": "Hobgoblin Devastator",
    "type": "fey",
    "src": "MPMM p.153",
    "cr": "4",
    "hp": 45,
    "AC": 13,
    "actions": [
      {
        "id": "d96fdffb-3c68-4f48-8f5e-72caf3ccafb8",
        "name": "Quarterstaff",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 13.5,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "3c37749c-97a4-4e39-aad4-d366b1175674",
    "mode": "custom",
    "name": "Hobgoblin Iron Shadow",
    "type": "fey",
    "src": "MPMM p.154",
    "cr": "2",
    "hp": 32,
    "AC": 15,
    "actions": [],
    "count": 1
  },
  {
    "id": "df3d45f7-df3b-4952-bd90-0c708631e3ff",
    "mode": "custom",
    "name": "Howler",
    "type": "fiend",
    "src": "MPMM p.155",
    "cr": "8",
    "hp": 90,
    "AC": 16,
    "actions": [
      {
        "id": "5eb84fab-c3c1-44f5-9558-39c62d025ab1",
        "name": "Rending Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 22,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "7a219337-59b3-4c6d-84ba-2eb0e2cbbde0",
        "name": "Mind-Breaking Howl",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 16.5,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "3a94a1ac-3edc-431c-9de4-e218b5eae276",
    "mode": "custom",
    "name": "Hungry Sorrowsworn",
    "type": "monstrosity",
    "src": "MPMM p.223",
    "cr": "11",
    "hp": 225,
    "AC": 17,
    "actions": [
      {
        "id": "5bee9bd4-4120-45d0-abe3-04522d5ba4ed",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 13.5,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "84dbc4a7-a7df-4768-ab59-8fedfce5ab0d",
    "mode": "custom",
    "name": "Hutijin",
    "type": "fiend",
    "src": "MPMM p.157",
    "cr": "21",
    "hp": 200,
    "AC": 19,
    "actions": [
      {
        "id": "9a6a0dbb-1bec-48d7-8235-c41c0a9819f8",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10.5,
        "toHit": 15,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "760ac655-7655-4c5b-909b-b5aa7e640905",
    "mode": "custom",
    "name": "Hydroloth",
    "type": "fiend",
    "src": "MPMM p.158",
    "cr": "9",
    "hp": 135,
    "AC": 15,
    "actions": [
      {
        "id": "ef887738-5a8f-42e4-a817-169691326561",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 11,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "b714b170-2013-4673-ae1a-293457f33196",
        "name": "Claw",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 11,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "9292758f-5f9e-43de-b068-f61ff2455909",
        "name": "Steal Memory",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/day",
        "condition": "is available",
        "dpr": 14,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "e1c5ce55-b833-4079-a0bc-adff764fb880",
    "mode": "custom",
    "name": "Illusionist Wizard",
    "type": "humanoid",
    "src": "MPMM p.263",
    "cr": "3",
    "hp": 44,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "f75c0e55-9612-4d31-bded-8dac5a466e02",
    "mode": "custom",
    "name": "Juiblex",
    "type": "fiend",
    "src": "MPMM p.160",
    "cr": "23",
    "hp": 350,
    "AC": 18,
    "actions": [
      {
        "id": "d973de73-f6c1-4840-a86a-c75ee2057e9b",
        "name": "Eject Slime",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 55,
        "toHit": 11,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "4521b204-db54-409e-9b4f-d8a7930afe4d",
    "mode": "custom",
    "name": "Ki-rin",
    "type": "celestial",
    "src": "MPMM p.162",
    "cr": "12",
    "hp": 153,
    "AC": 20,
    "actions": [],
    "count": 1
  },
  {
    "id": "9c1543ce-0f3a-442f-a878-82d60b89d250",
    "mode": "custom",
    "name": "Kobold Dragonshield",
    "type": "dragon",
    "src": "MPMM p.163",
    "cr": "1",
    "hp": 44,
    "AC": 15,
    "actions": [],
    "count": 1
  },
  {
    "id": "57674a20-cfa8-44e8-9610-483ce06b560e",
    "mode": "custom",
    "name": "Kobold Inventor",
    "type": "humanoid",
    "src": "MPMM p.164",
    "cr": "1/4",
    "hp": 13,
    "AC": 12,
    "actions": [
      {
        "id": "1038bcad-9e71-4cce-b5f1-5fdd642185d3",
        "name": "Weapon Invention",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 25,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "10c4ae21-1e7d-4cc8-ae82-b27f6cab961f",
    "mode": "custom",
    "name": "Kobold Scale Sorcerer",
    "type": "humanoid",
    "src": "MPMM p.165",
    "cr": "1",
    "hp": 27,
    "AC": 15,
    "actions": [],
    "count": 1
  },
  {
    "id": "2307326c-b134-435c-8250-1fe73101cf2b",
    "mode": "custom",
    "name": "Korred",
    "type": "fey",
    "src": "MPMM p.166",
    "cr": "7",
    "hp": 93,
    "AC": 17,
    "actions": [],
    "count": 1
  },
  {
    "id": "aee8b22e-344b-43d5-8047-f78b7f8dc125",
    "mode": "custom",
    "name": "Kraken Priest",
    "type": "monstrosity",
    "src": "MPMM p.167",
    "cr": "5",
    "hp": 75,
    "AC": 15,
    "actions": [
      {
        "id": "7b72aa4d-8e38-4e21-a617-ff7b5f6b193d",
        "name": "Thunderous Touch",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 27.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "f07d849a-a706-4253-98e7-159338f87735",
        "name": "Thunderbolt",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 11,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "e7a45086-0783-4db3-bb95-dac71a057a81",
    "mode": "custom",
    "name": "Kruthik Hive Lord",
    "type": "monstrosity",
    "src": "MPMM p.169",
    "cr": "5",
    "hp": 102,
    "AC": 20,
    "actions": [
      {
        "id": "1f98a55a-1b9a-402f-a2bc-1d7d2b0a1040",
        "name": "Acid Spray",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 22,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "eb9ca9bc-e085-486d-912d-eab2089c9b0d",
    "mode": "custom",
    "name": "Leucrotta",
    "type": "monstrosity",
    "src": "MPMM p.170",
    "cr": "3",
    "hp": 67,
    "AC": 14,
    "actions": [],
    "count": 1
  },
  {
    "id": "c57dec47-582c-428f-8583-9ab656e68ade",
    "mode": "custom",
    "name": "Leviathan",
    "type": "elemental",
    "src": "MPMM p.171",
    "cr": "20",
    "hp": 328,
    "AC": 17,
    "actions": [
      {
        "id": "978ba937-2659-486f-ba35-3991a357006c",
        "name": "Slam",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 13,
        "toHit": 14,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "a96b88ff-7780-454b-84e4-e73eafcf2806",
        "name": "Tail",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10.5,
        "toHit": 14,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "ecf0626d-b08d-4cc4-88c6-792bc8701dc7",
        "name": "Tidal Wave {@recharge}",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 45.5,
        "toHit": 14,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "253300f3-2637-4db1-a66f-0990ca3df854",
    "mode": "custom",
    "name": "Lonely Sorrowsworn",
    "type": "monstrosity",
    "src": "MPMM p.223",
    "cr": "9",
    "hp": 112,
    "AC": 16,
    "actions": [
      {
        "id": "73ce5af0-be1d-43f7-85cc-1f35caaa1d22",
        "name": "Sorrowful Embrace",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 18,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "6e3ab8f7-523a-4b62-b617-4dec9d513f94",
    "mode": "custom",
    "name": "Lost Sorrowsworn",
    "type": "monstrosity",
    "src": "MPMM p.224",
    "cr": "7",
    "hp": 78,
    "AC": 15,
    "actions": [
      {
        "id": "4cb1f384-d9a0-4bb2-b59a-75d9a5dd06ee",
        "name": "Embrace",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 27,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "09f27d40-c0e0-49f7-a95a-fdd93116057f",
    "mode": "custom",
    "name": "Male Steeder",
    "type": "monstrosity",
    "src": "MPMM p.231",
    "cr": "1/4",
    "hp": 13,
    "AC": 12,
    "actions": [
      {
        "id": "6da012de-37ef-4be7-a491-d3bceae60f4a",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 4.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "e98018a1-200f-4925-ac59-aa057bdfab00",
    "mode": "custom",
    "name": "Martial Arts Adept",
    "type": "humanoid",
    "src": "MPMM p.172",
    "cr": "3",
    "hp": 60,
    "AC": 16,
    "actions": [],
    "count": 1
  },
  {
    "id": "10fffb02-496b-413c-8066-fe1b83cda901",
    "mode": "custom",
    "name": "Marut",
    "type": "construct",
    "src": "MPMM p.173",
    "cr": "25",
    "hp": 432,
    "AC": 22,
    "actions": [],
    "count": 1
  },
  {
    "id": "9ddd8640-e5e4-47ea-b35c-a5164d61e4fd",
    "mode": "custom",
    "name": "Master Thief",
    "type": "humanoid",
    "src": "MPMM p.174",
    "cr": "5",
    "hp": 84,
    "AC": 16,
    "actions": [
      {
        "id": "eba84c12-bf42-461b-be97-a6fab7e6e635",
        "name": "Shortsword",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 3.5,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "9ae7104b-306a-4769-8a39-7c16da0b0645",
        "name": "Shortbow",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 3.5,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "bbf872e0-c882-4fb5-a66e-2dadd4f899c9",
    "mode": "custom",
    "name": "Maurezhi",
    "type": "fiend",
    "src": "MPMM p.175",
    "cr": "7",
    "hp": 88,
    "AC": 15,
    "actions": [],
    "count": 1
  },
  {
    "id": "115b1dd7-ffdf-4be5-98a3-51eb85feb6dc",
    "mode": "custom",
    "name": "Maw Demon",
    "type": "fiend",
    "src": "MPMM p.176",
    "cr": "1",
    "hp": 33,
    "AC": 13,
    "actions": [
      {
        "id": "648daf8c-e467-4f02-9b9c-195a5969a973",
        "name": "Disgorge {@recharge}",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 11,
        "toHit": 1,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "3495b12c-0ab9-405d-8a63-9a595cfa7658",
    "mode": "custom",
    "name": "Meazel",
    "type": "monstrosity",
    "src": "MPMM p.177",
    "cr": "1",
    "hp": 35,
    "AC": 13,
    "actions": [
      {
        "id": "86e5122c-b39d-49c2-b559-585c6c7be5d8",
        "name": "Shortsword",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 3.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "f5caee7e-518d-46af-a94e-d37cc00a4c89",
    "mode": "custom",
    "name": "Meenlock",
    "type": "fey",
    "src": "MPMM p.178",
    "cr": "2",
    "hp": 31,
    "AC": 15,
    "actions": [],
    "count": 1
  },
  {
    "id": "bfa518fd-d75f-49b7-a0d0-23e08f421e2e",
    "mode": "custom",
    "name": "Merregon",
    "type": "fiend",
    "src": "MPMM p.179",
    "cr": "4",
    "hp": 45,
    "AC": 16,
    "actions": [],
    "count": 1
  },
  {
    "id": "25646c32-72e7-4419-b70e-e44496548e23",
    "mode": "custom",
    "name": "Merrenoloth",
    "type": "fiend",
    "src": "MPMM p.180",
    "cr": "3",
    "hp": 40,
    "AC": 13,
    "actions": [],
    "count": 1
  },
  {
    "id": "095a57d0-b2ed-4260-9a1c-8a066b3e8834",
    "mode": "custom",
    "name": "Mindwitness",
    "type": "aberration",
    "src": "MPMM p.181",
    "cr": "5",
    "hp": 75,
    "AC": 15,
    "actions": [
      {
        "id": "a9d99b5e-4b53-40a3-b52a-72eae4424c31",
        "name": "Eye Ray",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 27,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "877673e1-5f4b-4cd2-aa23-78e5475fbaef",
    "mode": "custom",
    "name": "Moloch",
    "type": "fiend",
    "src": "MPMM p.183",
    "cr": "21",
    "hp": 253,
    "AC": 19,
    "actions": [
      {
        "id": "77da2adb-68af-425f-b6a9-94e8768810d2",
        "name": "Many-Tailed Whip",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 11,
        "toHit": 15,
        "target": "enemy with most HP",
        "targets": 2
      },
      {
        "id": "86b67e7f-4ca9-41af-a660-2e10a70fc11e",
        "name": "Breath of Despair",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 27.5,
        "toHit": 11,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "e3d690d8-ffb8-480d-a1fb-ba2dfd5daf9a",
    "mode": "custom",
    "name": "Molydeus",
    "type": "fiend",
    "src": "MPMM p.184",
    "cr": "21",
    "hp": 216,
    "AC": 19,
    "actions": [
      {
        "id": "3a46eb06-ad93-4503-9d4c-4ddc57964ea6",
        "name": "Demonic Weapon",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 27,
        "toHit": 16,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "9b126e96-a8bf-48e2-a1da-00e5f73c606d",
    "mode": "custom",
    "name": "Morkoth",
    "type": "aberration",
    "src": "MPMM p.186",
    "cr": "11",
    "hp": 165,
    "AC": 17,
    "actions": [
      {
        "id": "003e4411-3ade-410e-bb68-49f96cc89fdb",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "3b296aed-cf7c-4808-a4cf-fdba5e11532a",
    "mode": "custom",
    "name": "Mouth of Grolantor",
    "type": "giant",
    "src": "MPMM p.187",
    "cr": "6",
    "hp": 105,
    "AC": 14,
    "actions": [],
    "count": 1
  },
  {
    "id": "e4494e81-6cd9-41a7-88c4-d48921c93405",
    "mode": "custom",
    "name": "Nabassu",
    "type": "fiend",
    "src": "MPMM p.188",
    "cr": "15",
    "hp": 190,
    "AC": 18,
    "actions": [
      {
        "id": "6c8cf1a8-5f18-426a-8711-37a9cb4764a4",
        "name": "Soul-Stealing Gaze",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 13,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "54b1dda3-c0aa-4196-bb4e-cacf82ce7807",
    "mode": "custom",
    "name": "Nagpa",
    "type": "monstrosity",
    "src": "MPMM p.189",
    "cr": "17",
    "hp": 203,
    "AC": 19,
    "actions": [
      {
        "id": "d01c5ad4-85e6-4667-af03-b81ed7d88a41",
        "name": "Staff",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 24.5,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "83992b83-e977-44da-bc62-6c2121669551",
    "mode": "custom",
    "name": "Narzugon",
    "type": "fiend",
    "src": "MPMM p.190",
    "cr": "13",
    "hp": 112,
    "AC": 20,
    "actions": [
      {
        "id": "329872a1-8b4b-4d50-bd31-bddc5f44736b",
        "name": "Hellfire Lance",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 16.5,
        "toHit": 10,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "b16ea0f5-0659-4c8d-8446-2c2a4e82ec2d",
    "mode": "custom",
    "name": "Necromancer Wizard",
    "type": "humanoid",
    "src": "MPMM p.264",
    "cr": "9",
    "hp": 110,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "8b326154-28d3-4764-b233-eea067f9b14c",
    "mode": "custom",
    "name": "Neogi",
    "type": "aberration",
    "src": "MPMM p.192",
    "cr": "3",
    "hp": 33,
    "AC": 15,
    "actions": [
      {
        "id": "e1c2396e-bb91-45f3-9f12-59a838e72604",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 14,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "676cdbd3-d84d-4435-a7af-b45fa74b4aa9",
    "mode": "custom",
    "name": "Neogi Hatchling",
    "type": "aberration",
    "src": "MPMM p.191",
    "cr": "1/8",
    "hp": 7,
    "AC": 11,
    "actions": [
      {
        "id": "350d98a5-3893-4785-8dc6-e83751a05c62",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 3.5,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "a006f64f-3ba6-4570-99c4-d09606b22d4e",
    "mode": "custom",
    "name": "Neogi Master",
    "type": "aberration",
    "src": "MPMM p.192",
    "cr": "4",
    "hp": 71,
    "AC": 15,
    "actions": [
      {
        "id": "cd15dddc-a334-4815-9b67-d5fe400a5e9d",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 14,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "4d35ecd6-06ec-4e79-8dfb-7339f249433b",
    "mode": "custom",
    "name": "Neothelid",
    "type": "aberration",
    "src": "MPMM p.193",
    "cr": "13",
    "hp": 232,
    "AC": 16,
    "actions": [
      {
        "id": "5ed0240d-81fc-4cb7-a76b-223102450d26",
        "name": "Tentacles",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 32,
        "toHit": 13,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "15852b03-96ef-4ce8-8136-90bf544e36ae",
        "name": "Acid Breath",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 35,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "b2649458-17f1-480e-bd80-d1d1460d168a",
    "mode": "custom",
    "name": "Nightwalker",
    "type": "undead",
    "src": "MPMM p.194",
    "cr": "20",
    "hp": 337,
    "AC": 14,
    "actions": [
      {
        "id": "e1bd9359-8938-4631-ad94-f4e83c49cc46",
        "name": "Finger of Doom {@recharge}",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 39,
        "toHit": 11,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "981ddc89-fcc5-48cf-a39a-621b78c8d6e0",
    "mode": "custom",
    "name": "Nilbog",
    "type": "fey",
    "src": "MPMM p.195",
    "cr": "1",
    "hp": 7,
    "AC": 13,
    "actions": [
      {
        "id": "e3ac1495-1e5c-4a5c-bfa2-ab40491b2c53",
        "name": "Mocking Word",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 5,
        "toHit": 2,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "769bff53-3976-4b67-b929-a556039348bc",
    "mode": "custom",
    "name": "Nupperibo",
    "type": "fiend",
    "src": "MPMM p.196",
    "cr": "1/2",
    "hp": 11,
    "AC": 13,
    "actions": [],
    "count": 1
  },
  {
    "id": "8e68abef-48a7-4143-80ee-b98c503c1468",
    "mode": "custom",
    "name": "Oblex Spawn",
    "type": "ooze",
    "src": "MPMM p.197",
    "cr": "1/4",
    "hp": 18,
    "AC": 13,
    "actions": [
      {
        "id": "a051d404-baf7-427a-b9ef-d098f0bdc849",
        "name": "Pseudopod",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 2.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "15be127f-5400-4dc7-b618-e7779c3320ea",
    "mode": "custom",
    "name": "Ogre Battering Ram",
    "type": "giant",
    "src": "MPMM p.200",
    "cr": "4",
    "hp": 76,
    "AC": 11,
    "actions": [],
    "count": 1
  },
  {
    "id": "0024b66b-7a19-4431-82f9-4bdef57e0228",
    "mode": "custom",
    "name": "Ogre Bolt Launcher",
    "type": "giant",
    "src": "MPMM p.200",
    "cr": "2",
    "hp": 59,
    "AC": 13,
    "actions": [],
    "count": 1
  },
  {
    "id": "24ecc3e0-c231-4b2d-9fdd-f0c4ce68b660",
    "mode": "custom",
    "name": "Ogre Chain Brute",
    "type": "giant",
    "src": "MPMM p.201",
    "cr": "3",
    "hp": 59,
    "AC": 11,
    "actions": [],
    "count": 1
  },
  {
    "id": "a669f750-c8bb-47c5-a101-58f77dae18dc",
    "mode": "custom",
    "name": "Ogre Howdah",
    "type": "giant",
    "src": "MPMM p.201",
    "cr": "2",
    "hp": 59,
    "AC": 15,
    "actions": [],
    "count": 1
  },
  {
    "id": "e071ad98-5679-4aca-addb-7634e9038469",
    "mode": "custom",
    "name": "Oinoloth",
    "type": "fiend",
    "src": "MPMM p.202",
    "cr": "12",
    "hp": 119,
    "AC": 17,
    "actions": [
      {
        "id": "cb367f94-d965-45a8-aa8a-448e7722bf44",
        "name": "Claw",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 22,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "74c39d08-c858-4c84-9694-d35f1a7eb67a",
    "mode": "custom",
    "name": "Orcus",
    "type": "fiend",
    "src": "MPMM p.204",
    "cr": "26",
    "hp": 405,
    "AC": 17,
    "actions": [
      {
        "id": "26679cbc-745a-4b96-a1c3-42c60b0afba5",
        "name": "Wand of Orcus",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 13,
        "toHit": 19,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "20790e0f-13f1-4b52-9741-17509367b4cc",
        "name": "Tail",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 9,
        "toHit": 16,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "23a62611-36a2-400f-a1cc-2258fb51d393",
    "mode": "custom",
    "name": "Orthon",
    "type": "fiend",
    "src": "MPMM p.205",
    "cr": "10",
    "hp": 105,
    "AC": 17,
    "actions": [
      {
        "id": "f5efefa3-e90c-44d8-bc05-e1f9790ae0b3",
        "name": "Infernal Dagger",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 22,
        "toHit": 10,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "9d654c44-2d86-4810-bf57-838b569a5b97",
        "name": "Brass Crossbow",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 58,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "ba1b3a97-cb48-4d03-8b3e-06cea6699aab",
    "mode": "custom",
    "name": "Ox",
    "type": "beast",
    "src": "MPMM p.72",
    "cr": "1/4",
    "hp": 15,
    "AC": 10,
    "actions": [
      {
        "id": "ad14fe44-0286-47d7-88e6-c137aa0214cc",
        "name": "Gore",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "56b0af8f-51c4-457e-b649-47576aa8316d",
    "mode": "custom",
    "name": "Phoenix",
    "type": "elemental",
    "src": "MPMM p.206",
    "cr": "16",
    "hp": 175,
    "AC": 18,
    "actions": [],
    "count": 1
  },
  {
    "id": "3383f0ee-e270-4209-b435-e52f9444c964",
    "mode": "custom",
    "name": "Quetzalcoatlus",
    "type": "beast",
    "src": "MPMM p.96",
    "cr": "2",
    "hp": 30,
    "AC": 13,
    "actions": [
      {
        "id": "f29408cf-e207-4f6b-abc9-76febe2578c0",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "78619b6d-f8e7-4847-b8c1-af839faa54cd",
    "mode": "custom",
    "name": "Quickling",
    "type": "fey",
    "src": "MPMM p.207",
    "cr": "1",
    "hp": 10,
    "AC": 16,
    "actions": [],
    "count": 1
  },
  {
    "id": "ab9bdafe-8ba4-49fd-a746-afb1931d4ba9",
    "mode": "custom",
    "name": "Red Abishai",
    "type": "fiend",
    "src": "MPMM p.40",
    "cr": "19",
    "hp": 289,
    "AC": 22,
    "actions": [
      {
        "id": "099f1231-1f19-43bb-b770-a7423e05250e",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 38.5,
        "toHit": 12,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "409310a0-a139-41c7-a34a-6db156faa74e",
        "name": "Claw",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 11,
        "toHit": 12,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "ce98879a-2887-4562-8002-a8fbb2908531",
    "mode": "custom",
    "name": "Redcap",
    "type": "fey",
    "src": "MPMM p.208",
    "cr": "3",
    "hp": 45,
    "AC": 14,
    "actions": [],
    "count": 1
  },
  {
    "id": "e5083b5e-773e-4114-a829-6e6e85001d93",
    "mode": "custom",
    "name": "Retriever",
    "type": "construct",
    "src": "MPMM p.209",
    "cr": "14",
    "hp": 210,
    "AC": 19,
    "actions": [
      {
        "id": "2de546c3-0a90-46af-b8f3-6c606b9276be",
        "name": "Force Beam",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 27.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "49edac05-4b8d-4b3d-9094-4ef5ec4057fb",
    "mode": "custom",
    "name": "Rot Troll",
    "type": "giant",
    "src": "MPMM p.247",
    "cr": "9",
    "hp": 138,
    "AC": 16,
    "actions": [
      {
        "id": "10a4e77d-5f40-441d-9aa7-78ea5971c436",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 16.5,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "d8321865-6c7f-46ba-a257-d67b75213b60",
        "name": "Claws",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "dd0a5e4e-351a-4b86-b45d-20413c0bca2c",
    "mode": "custom",
    "name": "Rutterkin",
    "type": "fiend",
    "src": "MPMM p.210",
    "cr": "2",
    "hp": 37,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "f50cef3e-88ec-4031-83a6-12d74b998e11",
    "mode": "custom",
    "name": "Sacred Statue",
    "type": "construct",
    "src": "MPMM p.114",
    "cr": "—" as any,
    "hp": 95,
    "AC": 19,
    "actions": [],
    "count": 1
  },
  {
    "id": "febf40b7-78dc-4450-b8c8-bb1b79aca64a",
    "mode": "custom",
    "name": "Sea Spawn",
    "type": "monstrosity",
    "src": "MPMM p.211",
    "cr": "1",
    "hp": 32,
    "AC": 11,
    "actions": [
      {
        "id": "cf798ff4-a96d-46d9-9264-d975786a1325",
        "name": "Piscine Anatomy",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 3.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "c7fe1f78-2b20-416a-bf1c-1ad5105e3042",
    "mode": "custom",
    "name": "Shadar-kai Gloom Weaver",
    "type": "humanoid",
    "src": "MPMM p.213",
    "cr": "9",
    "hp": 104,
    "AC": 14,
    "actions": [
      {
        "id": "78d396c7-bf41-41f5-bd7c-93c340d796ad",
        "name": "Shadow Spear",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 26,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "1e8d0eab-245a-4bc5-bd54-32f24473ea3e",
    "mode": "custom",
    "name": "Shadar-kai Shadow Dancer",
    "type": "humanoid",
    "src": "MPMM p.213",
    "cr": "7",
    "hp": 71,
    "AC": 15,
    "actions": [
      {
        "id": "2f0a3b0e-d44f-4b66-b994-2557532f9ee1",
        "name": "Spiked Chain",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 22,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "01c00b60-8a7f-447b-903f-ab25d88c5b07",
    "mode": "custom",
    "name": "Shadar-kai Soul Monger",
    "type": "humanoid",
    "src": "MPMM p.214",
    "cr": "11",
    "hp": 136,
    "AC": 15,
    "actions": [
      {
        "id": "e0d5f5dd-25cf-4511-b5d6-f51e319c4a8b",
        "name": "Shadow Dagger",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 19.5,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "4cae5b44-f17b-4081-9b27-c917a90a4ccc",
        "name": "Wave of Weariness",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 45,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "83a08967-9803-4dca-b7e0-0ade05464ef2",
    "mode": "custom",
    "name": "Shadow Mastiff",
    "type": "monstrosity",
    "src": "MPMM p.215",
    "cr": "2",
    "hp": 33,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "03670555-f13b-4963-9ea3-c966000b0779",
    "mode": "custom",
    "name": "Shadow Mastiff Alpha",
    "type": "monstrosity",
    "src": "MPMM p.215",
    "cr": "3",
    "hp": 44,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "fbab5ff7-b0f7-4f97-a06f-220117627b63",
    "mode": "custom",
    "name": "Shoosuva",
    "type": "fiend",
    "src": "MPMM p.216",
    "cr": "8",
    "hp": 136,
    "AC": 14,
    "actions": [],
    "count": 1
  },
  {
    "id": "f3d22c3d-9c8d-45c7-8619-3905f8ebc99d",
    "mode": "custom",
    "name": "Sibriex",
    "type": "fiend",
    "src": "MPMM p.217",
    "cr": "18",
    "hp": 150,
    "AC": 19,
    "actions": [
      {
        "id": "1e395efe-18d9-4ee9-8728-9533c3829fdd",
        "name": "Squirt Bile",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 31.5,
        "toHit": 10,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "fc3be016-648a-4479-bf85-e139f38821a4",
    "mode": "custom",
    "name": "Skulk",
    "type": "monstrosity",
    "src": "MPMM p.219",
    "cr": "1/2",
    "hp": 18,
    "AC": 14,
    "actions": [
      {
        "id": "b253710f-a327-44a7-991a-9bb0524b646f",
        "name": "Claw",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 3.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "066e52d7-b7b2-41e5-b4a4-5e96f4b09b6d",
    "mode": "custom",
    "name": "Skull Lord",
    "type": "undead",
    "src": "MPMM p.220",
    "cr": "15",
    "hp": 112,
    "AC": 18,
    "actions": [
      {
        "id": "57028946-7fef-49b1-8dd9-e1611c81afc0",
        "name": "Bone Staff",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 21,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "57250ac3-6b62-41e9-b2d1-e86b28fcff49",
    "mode": "custom",
    "name": "Slithering Tracker",
    "type": "ooze",
    "src": "MPMM p.221",
    "cr": "3",
    "hp": 39,
    "AC": 14,
    "actions": [
      {
        "id": "670a6dd3-358c-4df4-be76-5355a8757b46",
        "name": "Life Leech",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 16.5,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "55690235-e56e-4599-94a4-f0274b6ed5ef",
    "mode": "custom",
    "name": "Spawn of Kyuss",
    "type": "undead",
    "src": "MPMM p.225",
    "cr": "5",
    "hp": 76,
    "AC": 10,
    "actions": [
      {
        "id": "a922d1a0-e148-4abb-adf7-5a72f738418f",
        "name": "Claw",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "3ce96de8-4c65-48a7-bea2-ec77f9879287",
        "name": "Burrowing Worm",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 42,
        "toHit": 1,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "e936446a-83a7-4aa9-8571-27b6beee29cc",
    "mode": "custom",
    "name": "Spirit Troll",
    "type": "giant",
    "src": "MPMM p.247",
    "cr": "11",
    "hp": 130,
    "AC": 17,
    "actions": [],
    "count": 1
  },
  {
    "id": "52d5f686-bf3c-41f1-8b21-c4c936a76c42",
    "mode": "custom",
    "name": "Spring Eladrin",
    "type": "fey",
    "src": "MPMM p.116",
    "cr": "10",
    "hp": 165,
    "AC": 19,
    "actions": [
      {
        "id": "947b11e3-9f73-46ae-a50c-8f39719de7fa",
        "name": "Longsword",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 22.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "02e30d38-4198-461e-ae79-21c480978e0f",
        "name": "Longbow",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 22.5,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "6b23bffa-71d7-437f-907c-d7a8f88f7be3",
    "mode": "custom",
    "name": "Star Spawn Grue",
    "type": "aberration",
    "src": "MPMM p.227",
    "cr": "1/4",
    "hp": 17,
    "AC": 11,
    "actions": [],
    "count": 1
  },
  {
    "id": "581edbab-85d5-492d-8bad-b8a587c27b53",
    "mode": "custom",
    "name": "Star Spawn Hulk",
    "type": "aberration",
    "src": "MPMM p.227",
    "cr": "10",
    "hp": 136,
    "AC": 16,
    "actions": [],
    "count": 1
  },
  {
    "id": "e3b2fead-5ec2-4f35-99d3-5c7a3e346de6",
    "mode": "custom",
    "name": "Star Spawn Larva Mage",
    "type": "aberration",
    "src": "MPMM p.228",
    "cr": "16",
    "hp": 168,
    "AC": 16,
    "actions": [
      {
        "id": "6dce6abb-b145-4d9f-8524-a0f9a36bfee2",
        "name": "Plague of Worms {@recharge}",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 45,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "be98c658-b0a6-4b08-97d8-34a6cfd36077",
    "mode": "custom",
    "name": "Star Spawn Mangler",
    "type": "aberration",
    "src": "MPMM p.229",
    "cr": "5",
    "hp": 71,
    "AC": 14,
    "actions": [
      {
        "id": "47e11c70-66ce-4c6d-9302-8bdcc7cefa94",
        "name": "Claw",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "85d733c8-e27b-4167-843b-c6669197b1c5",
    "mode": "custom",
    "name": "Star Spawn Seer",
    "type": "aberration",
    "src": "MPMM p.230",
    "cr": "13",
    "hp": 153,
    "AC": 17,
    "actions": [
      {
        "id": "b17b8449-2408-4001-8b8c-04fcc0b6560b",
        "name": "Comet Staff",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 18,
        "toHit": 11,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "b031ef72-5248-4744-8e10-d021ee7b7286",
        "name": "Psychic Orb",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 27.5,
        "toHit": 11,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "cb7be006-8c3d-40b2-ae67-aad761aed7ff",
        "name": "Collapse Distance {@recharge}",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 58.5,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "10ea285b-ec0b-4b3f-b1d5-4a2b6c315933",
    "mode": "custom",
    "name": "Steel Predator",
    "type": "construct",
    "src": "MPMM p.232",
    "cr": "16",
    "hp": 207,
    "AC": 20,
    "actions": [
      {
        "id": "9e546571-f656-4fa8-8ab8-0ce5657d2cc7",
        "name": "Stunning Roar",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 33,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "187ff33a-20aa-4f77-ba7c-5b26ccf96e26",
    "mode": "custom",
    "name": "Stegosaurus",
    "type": "beast",
    "src": "MPMM p.96",
    "cr": "4",
    "hp": 76,
    "AC": 13,
    "actions": [],
    "count": 1
  },
  {
    "id": "bebbe716-603d-4fd9-ba6e-695e1567152b",
    "mode": "custom",
    "name": "Stench Kow",
    "type": "fiend",
    "src": "MPMM p.72",
    "cr": "1/2",
    "hp": 15,
    "AC": 10,
    "actions": [
      {
        "id": "72b332f0-f73e-4cc1-9019-f58e5f130fb8",
        "name": "Gore",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "6f972c53-8f3b-455c-b0f0-8e9417f303f0",
    "mode": "custom",
    "name": "Stone Cursed",
    "type": "construct",
    "src": "MPMM p.233",
    "cr": "1",
    "hp": 19,
    "AC": 17,
    "actions": [],
    "count": 1
  },
  {
    "id": "9b3ba409-8e92-4eea-af2c-e76c3697fbe2",
    "mode": "custom",
    "name": "Stone Giant Dreamwalker",
    "type": "giant",
    "src": "MPMM p.234",
    "cr": "10",
    "hp": 161,
    "AC": 18,
    "actions": [],
    "count": 1
  },
  {
    "id": "6e35e380-89cc-4a50-98ed-ba7f37e505ed",
    "mode": "custom",
    "name": "Storm Giant Quintessent",
    "type": "giant",
    "src": "MPMM p.235",
    "cr": "16",
    "hp": 230,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "cfd5c178-114b-4c8e-bd6c-597676cb40d2",
    "mode": "custom",
    "name": "Summer Eladrin",
    "type": "fey",
    "src": "MPMM p.116",
    "cr": "10",
    "hp": 165,
    "AC": 19,
    "actions": [
      {
        "id": "1031e35c-d556-495f-9bd3-4dc9a25a9e28",
        "name": "Longsword",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 9,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "97fe6114-c679-43bb-b0c1-c30f7f655756",
        "name": "Longbow",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 9,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "45b82fa2-ea51-494b-9ddd-eddbfa4b6c19",
    "mode": "custom",
    "name": "Swarm of Cranium Rats",
    "type": "aberration",
    "src": "MPMM p.83",
    "cr": "5",
    "hp": 76,
    "AC": 12,
    "actions": [
      {
        "id": "52a3149b-7954-426d-b465-964fc6d392e6",
        "name": "Bites",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 43.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "00e748af-590b-472c-9ebe-2a9a8221979c",
    "mode": "custom",
    "name": "Swarm of Rot Grubs",
    "type": "beast",
    "src": "MPMM p.237",
    "cr": "1/2",
    "hp": 22,
    "AC": 8,
    "actions": [
      {
        "id": "2f22c468-6b39-4542-b509-5e9bbbe3fc8a",
        "name": "Bites",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10.5,
        "toHit": 0,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "19cbcbb2-957b-4277-9071-351c53a07a29",
    "mode": "custom",
    "name": "Swashbuckler",
    "type": "humanoid",
    "src": "MPMM p.238",
    "cr": "3",
    "hp": 66,
    "AC": 17,
    "actions": [],
    "count": 1
  },
  {
    "id": "493c516d-a8af-4ff2-951b-b0930bbab16a",
    "mode": "custom",
    "name": "Sword Wraith Commander",
    "type": "undead",
    "src": "MPMM p.239",
    "cr": "8",
    "hp": 127,
    "AC": 18,
    "actions": [],
    "count": 1
  },
  {
    "id": "14b90646-2d48-4ee1-bfa6-6df9b175ac8e",
    "mode": "custom",
    "name": "Sword Wraith Warrior",
    "type": "undead",
    "src": "MPMM p.239",
    "cr": "3",
    "hp": 45,
    "AC": 16,
    "actions": [],
    "count": 1
  },
  {
    "id": "bbc20bb8-6a3b-4e0b-9428-80075205d41a",
    "mode": "custom",
    "name": "Tanarukk",
    "type": "fiend",
    "src": "MPMM p.240",
    "cr": "5",
    "hp": 95,
    "AC": 14,
    "actions": [],
    "count": 1
  },
  {
    "id": "f8e271c7-fdee-4943-8b0b-4e7e47552e39",
    "mode": "custom",
    "name": "Thorny Vegepygmy",
    "type": "plant",
    "src": "MPMM p.253",
    "cr": "1",
    "hp": 27,
    "AC": 14,
    "actions": [],
    "count": 1
  },
  {
    "id": "b241b2d6-4a11-4248-8b24-878651bad758",
    "mode": "custom",
    "name": "Titivilus",
    "type": "fiend",
    "src": "MPMM p.242",
    "cr": "16",
    "hp": 150,
    "AC": 20,
    "actions": [
      {
        "id": "c7f6ef12-b54b-406a-82d4-4386d5c9e339",
        "name": "Silver Sword",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 16.5,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "797c6039-d04b-42ce-b69b-bb3ec32176fb",
    "mode": "custom",
    "name": "Tlincalli",
    "type": "monstrosity",
    "src": "MPMM p.242",
    "cr": "5",
    "hp": 85,
    "AC": 15,
    "actions": [
      {
        "id": "f03a886b-1139-4e23-ac9d-51cd28242302",
        "name": "Sting",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 14,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "b3e25110-303a-43fe-a4f1-267dbcc258e5",
    "mode": "custom",
    "name": "Tortle",
    "type": "humanoid",
    "src": "MPMM p.244",
    "cr": "1/4",
    "hp": 22,
    "AC": 17,
    "actions": [
      {
        "id": "3e2a2d34-5983-4a16-a27a-228ff8033d21",
        "name": "Light Crossbow",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 4.5,
        "toHit": 2,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "0a49b7bd-b5d5-4dcd-ab72-c95b602ef308",
    "mode": "custom",
    "name": "Tortle Druid",
    "type": "humanoid",
    "src": "MPMM p.244",
    "cr": "2",
    "hp": 33,
    "AC": 17,
    "actions": [],
    "count": 1
  },
  {
    "id": "30169e3e-9942-4c5a-9b03-c6a885954fe8",
    "mode": "custom",
    "name": "Transmuter Wizard",
    "type": "humanoid",
    "src": "MPMM p.265",
    "cr": "5",
    "hp": 49,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "3dc16205-6319-498a-946a-28e2258586e8",
    "mode": "custom",
    "name": "Trapper",
    "type": "monstrosity",
    "src": "MPMM p.245",
    "cr": "3",
    "hp": 68,
    "AC": 13,
    "actions": [
      {
        "id": "365ba103-de08-41a8-ab6c-bace53a41166",
        "name": "Smother",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 3.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "edce373d-9b64-45b0-8b49-95489dfed917",
    "mode": "custom",
    "name": "Ulitharid",
    "type": "aberration",
    "src": "MPMM p.249",
    "cr": "9",
    "hp": 127,
    "AC": 15,
    "actions": [
      {
        "id": "bcb305f4-3bc4-4724-bcd6-75a54ff1d17d",
        "name": "Extract Brain",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 55,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "92e472f2-1f1c-4062-bb90-03abf060d3e6",
    "mode": "custom",
    "name": "Vampiric Mist",
    "type": "undead",
    "src": "MPMM p.250",
    "cr": "3",
    "hp": 30,
    "AC": 13,
    "actions": [],
    "count": 1
  },
  {
    "id": "79292044-7160-4a01-99a6-93c03bd48b5f",
    "mode": "custom",
    "name": "Vargouille",
    "type": "fiend",
    "src": "MPMM p.251",
    "cr": "1",
    "hp": 18,
    "AC": 12,
    "actions": [
      {
        "id": "fc4646ea-d192-4ea9-b91d-8ebf015743c8",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "4f2a3253-a0b4-47a8-b5c0-6ecc0482a419",
    "mode": "custom",
    "name": "Vegepygmy",
    "type": "plant",
    "src": "MPMM p.252",
    "cr": "1/4",
    "hp": 13,
    "AC": 13,
    "actions": [],
    "count": 1
  },
  {
    "id": "dcbf2c47-4fd4-4d2c-9ce5-fa821b8caba1",
    "mode": "custom",
    "name": "Vegepygmy Chief",
    "type": "plant",
    "src": "MPMM p.253",
    "cr": "2",
    "hp": 33,
    "AC": 14,
    "actions": [
      {
        "id": "d9c7fc53-844d-45f3-a866-4f1116c9401a",
        "name": "Spores",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/day",
        "condition": "is available",
        "dpr": 9,
        "toHit": 2,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "2a7af8e5-f836-40d9-a31a-e8450f5042b4",
    "mode": "custom",
    "name": "Velociraptor",
    "type": "beast",
    "src": "MPMM p.96",
    "cr": "1/4",
    "hp": 10,
    "AC": 13,
    "actions": [],
    "count": 1
  },
  {
    "id": "7ceb2b48-351b-4ece-94f0-233698f656b5",
    "mode": "custom",
    "name": "Venom Troll",
    "type": "giant",
    "src": "MPMM p.248",
    "cr": "7",
    "hp": 94,
    "AC": 15,
    "actions": [
      {
        "id": "4e2981f4-0ad4-44f0-af96-fd27eda70d46",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 4.5,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "48d40daa-3412-4ec3-bde4-78f56c113c46",
        "name": "Claws",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 4.5,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "d6261bf7-311d-446a-9e11-4de1a0c8e311",
        "name": "Venom Spray {@recharge}",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 25,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "4a98af23-3a9a-4d5e-9e65-f42e71a030cd",
    "mode": "custom",
    "name": "War Priest",
    "type": "humanoid",
    "src": "MPMM p.254",
    "cr": "9",
    "hp": 117,
    "AC": 18,
    "actions": [
      {
        "id": "c85374aa-6111-46a5-950a-4e67973a616c",
        "name": "Maul",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10.5,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "39367a25-b43e-49fc-bcac-472d91c54df9",
    "mode": "custom",
    "name": "Warlock of the Archfey",
    "type": "humanoid",
    "src": "MPMM p.255",
    "cr": "4",
    "hp": 67,
    "AC": 13,
    "actions": [
      {
        "id": "0ab6f37b-a939-4c8d-8090-00d4a1cf20e1",
        "name": "Rapier",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "9c3b19a5-2125-4cf4-9ed4-028a3e0853d0",
        "name": "Bewildering Word",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 9,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "cd751e98-8d7f-41ea-852e-88f7d89e47e3",
    "mode": "custom",
    "name": "Warlock of the Fiend",
    "type": "humanoid",
    "src": "MPMM p.255",
    "cr": "7",
    "hp": 78,
    "AC": 13,
    "actions": [
      {
        "id": "c1f28b2c-9298-4b03-94fb-60d17b4bec92",
        "name": "Scimitar",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 14,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "434a4a5a-c61f-43b1-9016-9db4b164ee6d",
        "name": "Hellfire",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 27.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "ed8ae2a6-156b-40bd-af2d-00bccad6323d",
    "mode": "custom",
    "name": "Warlock of the Great Old One",
    "type": "humanoid",
    "src": "MPMM p.256",
    "cr": "6",
    "hp": 91,
    "AC": 13,
    "actions": [
      {
        "id": "0a75fc85-65a8-47b6-bcd8-c2d42f042163",
        "name": "Dagger",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "7ddbd770-1107-4675-ad15-bdc07104096b",
        "name": "Howling Void",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 9,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "88cb5120-f5e7-49ea-ab83-c32b62abc440",
    "mode": "custom",
    "name": "Warlord",
    "type": "humanoid",
    "src": "MPMM p.257",
    "cr": "12",
    "hp": 229,
    "AC": 18,
    "actions": [],
    "count": 1
  },
  {
    "id": "593fd5da-da61-453e-b8aa-813378e73c59",
    "mode": "custom",
    "name": "Wastrilith",
    "type": "fiend",
    "src": "MPMM p.258",
    "cr": "13",
    "hp": 157,
    "AC": 18,
    "actions": [],
    "count": 1
  },
  {
    "id": "5f6782c1-682f-4558-84cf-ca6220d381ea",
    "mode": "custom",
    "name": "Water Elemental Myrmidon",
    "type": "elemental",
    "src": "MPMM p.123",
    "cr": "7",
    "hp": 127,
    "AC": 18,
    "actions": [
      {
        "id": "cde211db-0056-4c56-90e0-f128709315cd",
        "name": "Freezing Strikes {@recharge}",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 5.5,
        "toHit": 0,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "1f994bdc-3577-494c-b6e6-ca2e47ddb804",
    "mode": "custom",
    "name": "White Abishai",
    "type": "fiend",
    "src": "MPMM p.41",
    "cr": "6",
    "hp": 68,
    "AC": 15,
    "actions": [
      {
        "id": "494ecc08-fb31-400d-b17d-540cc0ac8bab",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 3.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "56f960b1-6971-422b-b1a9-60b217c8bf76",
    "mode": "custom",
    "name": "Winter Eladrin",
    "type": "fey",
    "src": "MPMM p.117",
    "cr": "10",
    "hp": 165,
    "AC": 19,
    "actions": [
      {
        "id": "4550c1f7-c988-4ad4-8f2e-c67f0a2161b9",
        "name": "Longsword",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 23.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "101b5007-9e94-4aea-9908-7e04bbc106d9",
        "name": "Longbow",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 13.5,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "9cf5b228-aeca-4d74-ac70-f3b665271f87",
    "mode": "custom",
    "name": "Wood Woad",
    "type": "plant",
    "src": "MPMM p.266",
    "cr": "5",
    "hp": 75,
    "AC": 18,
    "actions": [],
    "count": 1
  },
  {
    "id": "f7d77b3f-6918-4c91-a85d-43c21657ebe5",
    "mode": "custom",
    "name": "Wretched Sorrowsworn",
    "type": "monstrosity",
    "src": "MPMM p.224",
    "cr": "1/4",
    "hp": 10,
    "AC": 15,
    "actions": [],
    "count": 1
  },
  {
    "id": "4e230056-928a-4220-ad20-290f2c9ad2ab",
    "mode": "custom",
    "name": "Xvart",
    "type": "monstrosity",
    "src": "MPMM p.267",
    "cr": "1/8",
    "hp": 7,
    "AC": 13,
    "actions": [],
    "count": 1
  },
  {
    "id": "d676630a-3ed6-430b-a343-b51e27e0aa81",
    "mode": "custom",
    "name": "Xvart Warlock of Raxivort",
    "type": "monstrosity",
    "src": "MPMM p.267",
    "cr": "1",
    "hp": 22,
    "AC": 12,
    "actions": [],
    "count": 1
  },
  {
    "id": "3dea988b-49af-4e2c-ad10-61bfbdedd2bc",
    "mode": "custom",
    "name": "Yagnoloth",
    "type": "fiend",
    "src": "MPMM p.268",
    "cr": "11",
    "hp": 147,
    "AC": 17,
    "actions": [
      {
        "id": "1a7931c5-792a-4f3c-bc72-3ebf93e6d77d",
        "name": "Electrified Touch",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 27,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "04eba9a7-269c-44d7-8e9b-a872b2e11c1f",
    "mode": "custom",
    "name": "Yeenoghu",
    "type": "fiend",
    "src": "MPMM p.270",
    "cr": "24",
    "hp": 333,
    "AC": 20,
    "actions": [
      {
        "id": "94b264f2-f2e4-4181-8fd2-9480ffe98fab",
        "name": "Flail",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 13,
        "toHit": 16,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "4da79f90-4e58-4bc0-b8c9-23df5df9c8c3",
    "mode": "custom",
    "name": "Yeth Hound",
    "type": "fey",
    "src": "MPMM p.271",
    "cr": "4",
    "hp": 51,
    "AC": 14,
    "actions": [
      {
        "id": "4e93ec4d-2453-4d61-8781-eaa9e43a6e88",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 14,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "5da3ab76-0abe-48e4-bea8-8fa5d8b1760b",
    "mode": "custom",
    "name": "Young Kruthik",
    "type": "monstrosity",
    "src": "MPMM p.168",
    "cr": "1/8",
    "hp": 9,
    "AC": 16,
    "actions": [],
    "count": 1
  },
  {
    "id": "a473c210-4714-4daf-9cc2-483f71143f6d",
    "mode": "custom",
    "name": "Yuan-ti Anathema",
    "type": "monstrosity",
    "src": "MPMM p.272",
    "cr": "12",
    "hp": 189,
    "AC": 16,
    "actions": [
      {
        "id": "115ba383-116b-4f27-a4e3-40d93eeb14c7",
        "name": "Flurry of Bites (Anathema Form Only)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 14,
        "toHit": 10,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "6c446e13-4d00-488d-acff-0ec4746aaf3a",
        "name": "Constrict (Snake Form Only)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 14,
        "toHit": 10,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "55e3cbb3-cb28-4556-a3b6-bfc30154f801",
    "mode": "custom",
    "name": "Yuan-ti Broodguard",
    "type": "monstrosity",
    "src": "MPMM p.273",
    "cr": "2",
    "hp": 45,
    "AC": 14,
    "actions": [],
    "count": 1
  },
  {
    "id": "f26478a9-fbd3-4be1-9338-ac510f162aaf",
    "mode": "custom",
    "name": "Yuan-ti Mind Whisperer",
    "type": "monstrosity",
    "src": "MPMM p.274",
    "cr": "4",
    "hp": 71,
    "AC": 14,
    "actions": [
      {
        "id": "c1f2418a-3b95-4b03-aa4f-64a7a2979ba6",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "ebfec768-1691-4f29-9199-334a01d9049a",
    "mode": "custom",
    "name": "Yuan-ti Nightmare Speaker",
    "type": "monstrosity",
    "src": "MPMM p.275",
    "cr": "4",
    "hp": 71,
    "AC": 14,
    "actions": [
      {
        "id": "f5b429a7-d8d4-4f8b-8833-683f6d56e7f3",
        "name": "Invoke Nightmare",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 33,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "068aa1b2-4486-476b-88d6-7e4254a142d6",
    "mode": "custom",
    "name": "Yuan-ti Pit Master",
    "type": "monstrosity",
    "src": "MPMM p.276",
    "cr": "5",
    "hp": 88,
    "AC": 14,
    "actions": [
      {
        "id": "2635b485-8c63-4055-80bf-8fbf330998bb",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "a108e128-42f4-41d6-9cdc-385665d50bc7",
    "mode": "custom",
    "name": "Zaratan",
    "type": "elemental",
    "src": "MPMM p.278",
    "cr": "22",
    "hp": 307,
    "AC": 21,
    "actions": [
      {
        "id": "769db72e-e9d2-4b08-ad60-6d7b48cebfe0",
        "name": "Spew Debris",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 33,
        "toHit": 15,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "21db7085-848f-466b-89ba-91f29341e227",
    "mode": "custom",
    "name": "Zariel",
    "type": "fiend",
    "src": "MPMM p.280",
    "cr": "26",
    "hp": 420,
    "AC": 21,
    "actions": [
      {
        "id": "26b006d9-7601-4935-856f-60955ca8a99f",
        "name": "Flail",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 36,
        "toHit": 16,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "3ea5b746-f88f-4f49-88c7-c056a1d37ea6",
        "name": "Longsword",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 36,
        "toHit": 16,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "534843dd-8b70-48d3-9318-72e929ad4068",
        "name": "Horrid Touch",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 44,
        "toHit": 16,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "772392cf-74ca-49ad-a923-34824a619a65",
    "mode": "custom",
    "name": "Zuggtmoy",
    "type": "fiend",
    "src": "MPMM p.281",
    "cr": "23",
    "hp": 304,
    "AC": 18,
    "actions": [
      {
        "id": "913802b0-ca09-4bbe-af5e-14c55e22cbfd",
        "name": "Pseudopod",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 9,
        "toHit": 0,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  }
]