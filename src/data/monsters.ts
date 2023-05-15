import { Creature } from "../model/model"

export const Monsters: Creature[] = [
  {
    "id": "670d1340-c829-4746-b112-d96960ebd650",
    "mode": "custom",
    "name": "Aarakocra",
    "type": "humanoid",
    "src": "MM p.12",
    "cr": "1/4",
    "hp": 13,
    "AC": 12,
    "actions": [
      {
        "id": "6ef9f7ab-2adf-48a9-8830-b3adf5329ca3",
        "name": "Talon",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 4.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "31b826b0-f34c-4fc3-9d29-3b40bb9373d8",
        "name": "Javelin",
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
    "id": "87662fb6-772f-4a82-95c2-b69b89fe88c9",
    "mode": "custom",
    "name": "Aboleth",
    "type": "aberration",
    "src": "MM p.13",
    "cr": "10",
    "hp": 135,
    "AC": 17,
    "actions": [
        {
            "id": "8e4811aa-2d4c-4960-b3f4-6831094f835f",
            "name": "Tail x3",
            "type": "atk",
            "actionSlot": 2,
            "freq": "at will",
            "condition": "default",
            "dpr": 46.5,
            "toHit": 9,
            "target": "enemy with most HP",
            "targets": 1
        },
        {
            "id": "c1c8211f-67ce-4b6f-998e-820ffec834d1",
            "name": "Tentacle x 3",
            "type": "atk",
            "actionSlot": 0,
            "freq": "at will",
            "condition": "default",
            "dpr": 36,
            "toHit": 9,
            "target": "enemy with most HP",
            "targets": 1
        }
    ],
    "count": 1
},
{
  "id": "fd3f9795-7245-4dc7-8b94-8f3ab40bdb81",
  "mode": "custom",
  "name": "Abominable Yeti",
  "type": "monstrosity",
  "src": "MM p.306",
  "cr": "9",
  "hp": 137,
  "AC": 15,
  "actions": [
      {
          "id": "bcfde5d4-2e74-4fd4-ae7f-037985a48b43",
          "name": "Cold Breath",
          "type": "atk",
          "actionSlot": 0,
          "freq": "1/fight",
          "condition": "is available",
          "dpr": 45,
          "toHit": 8,
          "target": "enemy with most HP",
          "targets": 2
      },
      {
          "id": "5276dccb-4d33-4580-8460-45aaacc07a87",
          "name": "Claw x 2 + Chilling Gaze",
          "type": "atk",
          "actionSlot": 0,
          "freq": "at will",
          "condition": "default",
          "dpr": 63,
          "toHit": 11,
          "target": "enemy with most HP",
          "targets": 1
      }
  ],
  "count": 1
},
{
  "id": "49ef9dcd-9979-492e-847d-99d84b628df6",
  "mode": "custom",
  "name": "Acolyte",
  "type": "humanoid",
  "src": "MM p.342",
  "cr": "1/4",
  "hp": 9,
  "AC": 10,
  "actions": [
      {
          "id": "26e6ab65-5b86-403f-b246-d6ef50d013c7",
          "name": "Club",
          "type": "atk",
          "actionSlot": 0,
          "freq": "at will",
          "condition": "default",
          "dpr": 2.5,
          "toHit": 2,
          "target": "enemy with most HP",
          "targets": 1
      },
      {
          "id": "f5e9b5f8-72f2-403e-9e58-2de262beb3b5",
          "name": "Bless",
          "actionSlot": 4,
          "condition": "default",
          "freq": "at will",
          "targets": 2,
          "type": "buff",
          "target": "ally with the highest DPR",
          "toHitBonus": 3
      },
      {
          "id": "b92c0727-7b4d-41cd-b31e-3d1a02d5221e",
          "name": "Cure Wounds",
          "actionSlot": 0,
          "condition": "ally at 0 HP",
          "freq": "1/fight",
          "targets": 1,
          "type": "heal",
          "amount": 7,
          "target": "ally with the least HP"
      }
  ],
  "count": 1
},
  {
    "id": "c31c90a0-e1be-4e46-9228-c8ec1552adc7",
    "mode": "custom",
    "name": "Adult Black Dragon",
    "type": "dragon",
    "src": "MM p.88",
    "cr": "14",
    "hp": 195,
    "AC": 19,
    "actions": [
        {
            "id": "4ecf90dd-97c1-4082-838b-ec96194b22e0",
            "name": "Tail x3",
            "type": "atk",
            "actionSlot": 2,
            "freq": "at will",
            "condition": "default",
            "dpr": 45,
            "toHit": 11,
            "target": "enemy with most HP",
            "targets": 1
        },
        {
            "id": "33e83c55-08af-4f60-8059-21df2429c4a2",
            "name": "Acid Breath",
            "type": "atk",
            "actionSlot": 0,
            "freq": "1/fight",
            "condition": "is available",
            "dpr": 54,
            "toHit": 8,
            "target": "enemy with most HP",
            "targets": 2
        },
        {
            "id": "cddcb08e-c967-409e-a2e4-0f8d20918cc8",
            "name": "Bite & Claw x 2",
            "type": "atk",
            "actionSlot": 0,
            "freq": "at will",
            "condition": "default",
            "dpr": 47.5,
            "toHit": 11,
            "target": "enemy with most HP",
            "targets": 1
        }
    ],
    "count": 1
  },
  {
    "id": "fdb7834b-7fd3-4a57-9707-f32919fedf52",
    "mode": "custom",
    "name": "Adult Blue Dracolich",
    "type": "undead",
    "src": "MM p.84",
    "cr": "17",
    "hp": 225,
    "AC": 19,
    "actions": [
      {
        "id": "7b0af669-06be-412e-8261-c0c24da4e87a",
        "name": "Tail",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 16,
        "toHit": 13,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "3ed58e7f-c665-4ad5-8b30-9e074de6e65d",
        "name": "Tail x3",
        "type": "atk",
        "actionSlot": 2,
        "freq": "at will",
        "condition": "default",
        "dpr": 48,
        "toHit": 13,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "09f1539f-90e5-4d0a-9641-5be8ca765bcc",
        "name": "Lightning Breath",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 66,
        "toHit": 10,
        "target": "enemy with most HP",
        "targets": 2
      },
      {
        "id": "f6fe761c-5787-4f8a-839a-48d70f1470e9",
        "name": "Bite & Claw x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 51.5,
        "toHit": 13,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "a263d640-d061-44c2-892b-be047158b062",
    "mode": "custom",
    "name": "Adult Blue Dragon",
    "type": "dragon",
    "src": "MM p.91",
    "cr": "16",
    "hp": 225,
    "AC": 19,
    "actions": [
      {
        "id": "8c0e3b00-8c14-40e2-9503-1f61cc6714f9",
        "name": "Tail",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 16,
        "toHit": 12,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "3303bbed-c047-4268-bc63-c872771205f8",
        "name": "Tail x3",
        "type": "atk",
        "actionSlot": 2,
        "freq": "at will",
        "condition": "default",
        "dpr": 48,
        "toHit": 12,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "72b3f78c-66d9-43f2-8e3f-b753cef1425a",
        "name": "Lightning Breath",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 66,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 2
      },
      {
        "id": "b6cd4ca6-b42a-4016-9f3a-040284202292",
        "name": "Bite & Claw x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 51.5,
        "toHit": 12,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "0ed2abc9-8d07-4ee5-b484-b9c4a81adf7e",
    "mode": "custom",
    "name": "Adult Brass Dragon",
    "type": "dragon",
    "src": "MM p.105",
    "cr": "13",
    "hp": 172,
    "AC": 18,
    "actions": [
      {
        "id": "e89afca5-7403-4e27-88e3-0cbc0ad07307",
        "name": "Tail",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 15,
        "toHit": 11,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "0a2b4af6-a5e3-4b13-94af-63a569a21199",
        "name": "Tail x3",
        "type": "atk",
        "actionSlot": 2,
        "freq": "at will",
        "condition": "default",
        "dpr": 45,
        "toHit": 11,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "d75b9f7e-d570-44a4-8a95-5d81c506cc57",
        "name": "Breath Weapons",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 45.5,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 2
      },
      {
        "id": "d2830ead-bb4e-4da3-93c5-a743a6350fc5",
        "name": "Bite & Claw x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 43,
        "toHit": 11,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "fb20948d-3e44-4e70-9e7c-e14dbc7ebdce",
    "mode": "custom",
    "name": "Adult Bronze Dragon",
    "type": "dragon",
    "src": "MM p.108",
    "cr": "15",
    "hp": 212,
    "AC": 19,
    "actions": [
      {
        "id": "92c71ad4-5e33-40c9-a111-931ae343825c",
        "name": "Tail",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 16,
        "toHit": 12,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "f21b4467-3fca-4cc4-9fbd-d5103f2b0f21",
        "name": "Tail x3",
        "type": "atk",
        "actionSlot": 2,
        "freq": "at will",
        "condition": "default",
        "dpr": 48,
        "toHit": 12,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "c0a758a8-d1d9-4cda-b982-19377a59d378",
        "name": "Breath Weapons",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 66,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 2
      },
      {
        "id": "bb0563d6-c791-470c-ba4d-d014d46f224a",
        "name": "Bite & Claw x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 46,
        "toHit": 12,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "1fe45e0d-5b28-47d7-8845-b80f33f7c89f",
    "mode": "custom",
    "name": "Adult Copper Dragon",
    "type": "dragon",
    "src": "MM p.112",
    "cr": "14",
    "hp": 184,
    "AC": 18,
    "actions": [
      {
        "id": "f8f4f7f9-8712-4da4-896f-67803b571e9a",
        "name": "Tail",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 15,
        "toHit": 11,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "8b21befd-b1bb-46d0-8218-9cbe89515414",
        "name": "Tail x3",
        "type": "atk",
        "actionSlot": 2,
        "freq": "at will",
        "condition": "default",
        "dpr": 45,
        "toHit": 11,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "376ef613-6f7e-494e-aed3-2f37b2276328",
        "name": "Breath Weapons",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 54,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 2
      },
      {
        "id": "323fdb8e-c634-4f69-acdb-7d0c59bf44b4",
        "name": "Bite & Claw x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 43,
        "toHit": 11,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "7269d37a-84b7-49ad-97d6-8acea6879702",
    "mode": "custom",
    "name": "Adult Gold Dragon",
    "type": "dragon",
    "src": "MM p.114",
    "cr": "17",
    "hp": 256,
    "AC": 19,
    "actions": [
      {
        "id": "5c403535-e0c1-42b6-9116-dfe9d0422af2",
        "name": "Tail",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 17,
        "toHit": 14,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "576b9b71-6593-4965-894c-121ea622f971",
        "name": "Tail x3",
        "type": "atk",
        "actionSlot": 2,
        "freq": "at will",
        "condition": "default",
        "dpr": 51,
        "toHit": 14,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "7900345b-bceb-423d-bdbf-517b017116a9",
        "name": "Breath Weapons",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 66,
        "toHit": 11,
        "target": "enemy with most HP",
        "targets": 2
      },
      {
        "id": "a6aff193-41b3-4afb-a74b-799612371cba",
        "name": "Bite & Claw x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 49,
        "toHit": 14,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "078b1a31-90e6-4d22-8771-181d1e3dfdf3",
    "mode": "custom",
    "name": "Adult Green Dragon",
    "type": "dragon",
    "src": "MM p.94",
    "cr": "15",
    "hp": 207,
    "AC": 19,
    "actions": [
      {
        "id": "a9eb6ad2-9e79-4c30-bd20-a8e2fcb5e3da",
        "name": "Tail",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 15,
        "toHit": 11,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "344cbb8a-4234-4c44-9c1a-15c56970a5f5",
        "name": "Tail x3",
        "type": "atk",
        "actionSlot": 2,
        "freq": "at will",
        "condition": "default",
        "dpr": 45,
        "toHit": 11,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "aa662b92-ef97-49fe-adc9-0b3fbebac2bd",
        "name": "Poison Breath",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 56,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 2
      },
      {
        "id": "7c567762-4f4e-4635-96e3-8f765087e62a",
        "name": "Bite & Claw x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 50,
        "toHit": 11,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "ea13476e-36e1-41d5-b49f-e38cd45c47e6",
    "mode": "custom",
    "name": "Adult Red Dragon",
    "type": "dragon",
    "src": "MM p.98",
    "cr": "17",
    "hp": 256,
    "AC": 19,
    "actions": [
      {
        "id": "1996f3e8-8174-448f-b514-6b9e35c3724d",
        "name": "Tail",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 17,
        "toHit": 14,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "e18a1380-0618-4c2b-a7ec-8974c2347516",
        "name": "Tail x3",
        "type": "atk",
        "actionSlot": 2,
        "freq": "at will",
        "condition": "default",
        "dpr": 51,
        "toHit": 14,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "cf9c4e56-8bb7-42fd-9b26-1b47d9c1a304",
        "name": "Fire Breath",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 63,
        "toHit": 11,
        "target": "enemy with most HP",
        "targets": 2
      },
      {
        "id": "7f265b70-1538-4cd0-95c4-2e7e6fc02508",
        "name": "Bite & Claw x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 56,
        "toHit": 14,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "b843f472-7ac4-480b-817c-bf19555fe93e",
    "mode": "custom",
    "name": "Adult Silver Dragon",
    "type": "dragon",
    "src": "MM p.117",
    "cr": "16",
    "hp": 243,
    "AC": 19,
    "actions": [
      {
        "id": "d8cc1c58-11af-4b70-bf36-1189411ccf76",
        "name": "Tail",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 17,
        "toHit": 13,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "56edd846-5ac0-4521-9c2e-fc9eb41e11e3",
        "name": "Tail x3",
        "type": "atk",
        "actionSlot": 2,
        "freq": "at will",
        "condition": "default",
        "dpr": 51,
        "toHit": 13,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "705bd701-799d-4407-98da-c07ebbcded0a",
        "name": "Breath Weapons",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 58.5,
        "toHit": 10,
        "target": "enemy with most HP",
        "targets": 2
      },
      {
        "id": "d2a9b56b-102e-4cc9-be30-6bb932a48064",
        "name": "Bite & Claw x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 49,
        "toHit": 13,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "bfa089de-ac91-4bc7-ab48-07cdea928321",
    "mode": "custom",
    "name": "Adult White Dragon",
    "type": "dragon",
    "src": "MM p.101",
    "cr": "13",
    "hp": 200,
    "AC": 18,
    "actions": [
      {
        "id": "40a4e675-1f34-41a9-b2d2-638737d4078d",
        "name": "Tail",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 15,
        "toHit": 11,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "3b4f066d-1735-4d65-bc20-34ba76226f75",
        "name": "Tail x3",
        "type": "atk",
        "actionSlot": 2,
        "freq": "at will",
        "condition": "default",
        "dpr": 45,
        "toHit": 11,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "81ce809d-8495-48b0-a4fc-e253d0f0522c",
        "name": "Cold Breath",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 54,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 2
      },
      {
        "id": "2e614fe9-c255-465e-ad09-081d26adb414",
        "name": "Bite & Claw x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 47.5,
        "toHit": 11,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "1e0a476b-6d35-4270-93aa-81f7c8f87c8d",
    "mode": "custom",
    "name": "Air Elemental",
    "type": "elemental",
    "src": "MM p.124",
    "cr": "5",
    "hp": 90,
    "AC": 15,
    "actions": [
        {
            "id": "3e57da1f-7bf4-45ad-a793-b0585d8a9adc",
            "name": "Whirlwind",
            "type": "atk",
            "actionSlot": 0,
            "freq": "1/fight",
            "condition": "is available",
            "dpr": 21,
            "toHit": 3,
            "target": "enemy with most HP",
            "targets": 2
        },
        {
            "id": "d74b15eb-4693-4d9f-8838-b59bfc82b008",
            "name": "Slam x 2",
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
  "id": "0ae9f40c-eea4-4435-a340-7bad2b7666c1",
  "mode": "custom",
  "name": "Allosaurus",
  "type": "beast",
  "src": "MM p.79",
  "cr": "2",
  "hp": 51,
  "AC": 13,
  "actions": [
      {
          "id": "0a2ed335-2a06-4e70-8d04-96f4eb62e630",
          "name": "Bite",
          "type": "atk",
          "actionSlot": 1,
          "freq": "at will",
          "condition": "default",
          "dpr": 15,
          "toHit": 9,
          "target": "enemy with most HP",
          "targets": 1
      },
      {
          "id": "04c4f146-7a13-4e42-ab0c-06b8c514706d",
          "name": "Claw",
          "type": "atk",
          "actionSlot": 0,
          "freq": "at will",
          "condition": "default",
          "dpr": 8.5,
          "toHit": 6,
          "target": "enemy with most HP",
          "targets": 1
      }
  ],
  "count": 1
},
  {
    "id": "ceea94c3-3779-4e65-8c4a-53b3a3c7cea2",
    "mode": "custom",
    "name": "Ancient Black Dragon",
    "type": "dragon",
    "src": "MM p.87",
    "cr": "21",
    "hp": 367,
    "AC": 22,
    "actions": [
      {
        "id": "692b5908-62ce-4768-a845-3cf670c09cda",
        "name": "Tail",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 17,
        "toHit": 15,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "92748132-fe1c-458f-9c74-5f7314304b30",
        "name": "Tail x3",
        "type": "atk",
        "actionSlot": 2,
        "freq": "at will",
        "condition": "default",
        "dpr": 51,
        "toHit": 15,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "c06a5d79-87f1-4076-b452-8159b620e63d",
        "name": "Acid Breath",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 67.5,
        "toHit": 12,
        "target": "enemy with most HP",
        "targets": 2
      },
      {
        "id": "1284bfe9-4a96-454e-a262-ae99cc114b91",
        "name": "Bite & Claw x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 58,
        "toHit": 15,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "f6fc9474-9fd0-4030-936f-fe98ef0cb1d4",
    "mode": "custom",
    "name": "Ancient Blue Dragon",
    "type": "dragon",
    "src": "MM p.90",
    "cr": "23",
    "hp": 481,
    "AC": 22,
    "actions": [
      {
        "id": "ac46a8c2-1b0e-40a7-ab89-e29effebb103",
        "name": "Tail",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 18,
        "toHit": 16,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "dd0168b8-75aa-4b06-a50e-18b9307cba21",
        "name": "Tail x3",
        "type": "atk",
        "actionSlot": 2,
        "freq": "at will",
        "condition": "default",
        "dpr": 54,
        "toHit": 16,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "933b0a79-df50-48d3-a233-f322828943a5",
        "name": "Lightning Breath",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 88,
        "toHit": 13,
        "target": "enemy with most HP",
        "targets": 2
      },
      {
        "id": "e98c4a93-1543-41a3-a16a-370f77fff26e",
        "name": "Bite & Claw x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 63,
        "toHit": 16,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "16d0ea8f-6f23-414c-addd-0a8209b96f9b",
    "mode": "custom",
    "name": "Ancient Brass Dragon",
    "type": "dragon",
    "src": "MM p.104",
    "cr": "20",
    "hp": 297,
    "AC": 20,
    "actions": [
      {
        "id": "3f28f925-389b-4c97-ab50-c5d7a0e0dbb9",
        "name": "Tail",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 17,
        "toHit": 14,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "0c91542b-0f0f-4b5c-9dd4-7f6345172e6b",
        "name": "Tail x3",
        "type": "atk",
        "actionSlot": 2,
        "freq": "at will",
        "condition": "default",
        "dpr": 51,
        "toHit": 14,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "9530550b-6bbc-43d0-a850-bcedbcdf8e7c",
        "name": "Breath Weapons",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 56,
        "toHit": 11,
        "target": "enemy with most HP",
        "targets": 2
      },
      {
        "id": "e1f2ae3a-75a9-499b-800a-986ee621d4cd",
        "name": "Bite & Claw x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 49,
        "toHit": 14,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "a8fd1fe6-6369-4488-ad08-9e89d1cfc564",
    "mode": "custom",
    "name": "Ancient Bronze Dragon",
    "type": "dragon",
    "src": "MM p.107",
    "cr": "22",
    "hp": 444,
    "AC": 22,
    "actions": [
      {
        "id": "62cbca93-c50c-4594-90b6-e56d3c549e8a",
        "name": "Tail",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 18,
        "toHit": 16,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "47303f45-49f5-4f3d-bdfe-941f5c2d57ab",
        "name": "Tail x3",
        "type": "atk",
        "actionSlot": 2,
        "freq": "at will",
        "condition": "default",
        "dpr": 54,
        "toHit": 16,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "ea4c1a70-aa3e-4f29-a276-8e8b49036541",
        "name": "Breath Weapons",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 88,
        "toHit": 13,
        "target": "enemy with most HP",
        "targets": 2
      },
      {
        "id": "45726449-fd61-4ce4-b4a6-fba8d9584e79",
        "name": "Bite & Claw x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 52,
        "toHit": 16,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "7af215b8-6294-410e-aadf-1d7cfdfb7fdb",
    "mode": "custom",
    "name": "Ancient Copper Dragon",
    "type": "dragon",
    "src": "MM p.110",
    "cr": "21",
    "hp": 350,
    "AC": 21,
    "actions": [
      {
        "id": "d38c044c-7534-4bfa-97cb-a8955c92d5a0",
        "name": "Tail",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 17,
        "toHit": 15,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "99dc800f-9d49-4dbd-97e9-06ba8521b875",
        "name": "Tail x3",
        "type": "atk",
        "actionSlot": 2,
        "freq": "at will",
        "condition": "default",
        "dpr": 51,
        "toHit": 15,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "daffe9f9-ea84-4a2b-9860-d15cb76b8076",
        "name": "Breath Weapons",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 63,
        "toHit": 12,
        "target": "enemy with most HP",
        "targets": 2
      },
      {
        "id": "7974d7c3-7b63-4608-abf0-bd86981702cf",
        "name": "Bite & Claw x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 49,
        "toHit": 15,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "b1f87dbf-3cc7-4d89-a60b-8d25876e085e",
    "mode": "custom",
    "name": "Ancient Gold Dragon",
    "type": "dragon",
    "src": "MM p.113",
    "cr": "24",
    "hp": 546,
    "AC": 22,
    "actions": [
      {
        "id": "a105d1c1-d0a6-4b89-bfe8-f26234ab4b92",
        "name": "Tail",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 19,
        "toHit": 17,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "7315a9e9-538f-4720-aacf-301f12cc1190",
        "name": "Tail x3",
        "type": "atk",
        "actionSlot": 2,
        "freq": "at will",
        "condition": "default",
        "dpr": 57,
        "toHit": 17,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "6149e631-9cb6-4240-a021-5d635527b9f4",
        "name": "Breath Weapons",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 71.5,
        "toHit": 14,
        "target": "enemy with most HP",
        "targets": 2
      },
      {
        "id": "ed79aebe-8501-4ac0-928c-a12f5a6d4152",
        "name": "Bite & Claw x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 55,
        "toHit": 17,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "98d61253-9c93-41b0-ad2b-5c5ef3636d35",
    "mode": "custom",
    "name": "Ancient Green Dragon",
    "type": "dragon",
    "src": "MM p.93",
    "cr": "22",
    "hp": 385,
    "AC": 21,
    "actions": [
      {
        "id": "f9d17d7e-b66c-4e0c-a309-a0a2b99b5f27",
        "name": "Tail",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 17,
        "toHit": 15,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "a809cb05-9754-4807-8397-a4e68fa7a112",
        "name": "Tail x3",
        "type": "atk",
        "actionSlot": 2,
        "freq": "at will",
        "condition": "default",
        "dpr": 51,
        "toHit": 15,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "c7a77a79-1f3d-4326-b580-1855bc1f840f",
        "name": "Poison Breath",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 77,
        "toHit": 12,
        "target": "enemy with most HP",
        "targets": 2
      },
      {
        "id": "a9e0af14-c238-422c-ae58-759c0c1b1fc4",
        "name": "Bite & Claw x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 73.5,
        "toHit": 15,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "72da0ddc-6de9-45f0-85f6-beec46f50ad9",
    "mode": "custom",
    "name": "Ancient Red Dragon",
    "type": "dragon",
    "src": "MM p.97",
    "cr": "24",
    "hp": 546,
    "AC": 22,
    "actions": [
      {
        "id": "0bae38ea-0019-4cd5-a6d5-f0e9f8ee5181",
        "name": "Tail",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 19,
        "toHit": 17,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "0b40ffb3-0f74-452d-a35b-11c6c17df8bb",
        "name": "Tail x3",
        "type": "atk",
        "actionSlot": 2,
        "freq": "at will",
        "condition": "default",
        "dpr": 57,
        "toHit": 17,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "592031a8-3077-447f-9139-df6ea7d34437",
        "name": "Fire Breath",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 91,
        "toHit": 14,
        "target": "enemy with most HP",
        "targets": 2
      },
      {
        "id": "03814064-6589-43a8-be4c-780c7474ef7a",
        "name": "Bite & Claw x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 69,
        "toHit": 17,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "3fe9f9fd-b57a-4356-bd37-a6e201a10446",
    "mode": "custom",
    "name": "Ancient Silver Dragon",
    "type": "dragon",
    "src": "MM p.116",
    "cr": "23",
    "hp": 487,
    "AC": 22,
    "actions": [
      {
        "id": "c9f705b7-f4af-4705-8a16-4b2fdada91f8",
        "name": "Tail",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 19,
        "toHit": 17,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "f5061d33-3fbe-4a08-9656-804bffcdae6e",
        "name": "Tail x3",
        "type": "atk",
        "actionSlot": 2,
        "freq": "at will",
        "condition": "default",
        "dpr": 57,
        "toHit": 17,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "ced6b53c-4082-4596-adee-582930c2b098",
        "name": "Breath Weapons",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 67.5,
        "toHit": 14,
        "target": "enemy with most HP",
        "targets": 2
      },
      {
        "id": "c6035be3-bb5e-469f-9de6-8b8c30abe06d",
        "name": "Bite & Claw x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 55,
        "toHit": 17,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "4313af63-2ace-4817-a868-62d53c614783",
    "mode": "custom",
    "name": "Ancient White Dragon",
    "type": "dragon",
    "src": "MM p.100",
    "cr": "20",
    "hp": 333,
    "AC": 20,
    "actions": [
      {
        "id": "96d0afd3-6179-438d-88a9-96b59c5bf9b0",
        "name": "Tail",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 17,
        "toHit": 14,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "a17d7e66-bc41-4027-b6a3-39993fa055d5",
        "name": "Tail x3",
        "type": "atk",
        "actionSlot": 2,
        "freq": "at will",
        "condition": "default",
        "dpr": 51,
        "toHit": 14,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "33415e19-81bb-4038-9ca6-2ca8a4fb7a3f",
        "name": "Cold Breath",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 72,
        "toHit": 12,
        "target": "enemy with most HP",
        "targets": 2
      },
      {
        "id": "e1509600-8808-440c-9c26-09acc3937377",
        "name": "Bite & Claw x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 58,
        "toHit": 14,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "e8727d49-ecad-4670-9084-35443b476a90",
    "mode": "custom",
    "name": "Androsphinx",
    "type": "monstrosity",
    "src": "MM p.281",
    "cr": "17",
    "hp": 199,
    "AC": 17,
    "actions": [
        {
            "id": "555a5704-20db-4abc-9382-c1e4c2415a79",
            "name": "Roar",
            "type": "atk",
            "actionSlot": 0,
            "freq": "1/fight",
            "condition": "is under half HP",
            "dpr": 44,
            "toHit": 8,
            "target": "enemy with most HP",
            "targets": 2
        },
        {
            "id": "b550ce8f-26b8-49ab-b4e0-0955ca7d16c3",
            "name": "Claw x 2",
            "type": "atk",
            "actionSlot": 0,
            "freq": "at will",
            "condition": "default",
            "dpr": 34,
            "toHit": 12,
            "target": "enemy with most HP",
            "targets": 1
        },
        {
            "id": "b40a5bbd-bff6-4bdb-88d1-a735ef867062",
            "actionSlot": 2,
            "name": "Flame Strike",
            "freq": "at will",
            "condition": "default",
            "targets": 2,
            "type": "atk",
            "dpr": 28,
            "toHit": 8,
            "target": "enemy with least HP"
        }
    ],
    "count": 1
},
{
  "id": "b2b88224-735a-48cd-8da9-c2f7de4f93bc",
  "mode": "custom",
  "name": "Animated Armor",
  "type": "construct",
  "src": "MM p.19",
  "cr": "1",
  "hp": 33,
  "AC": 18,
  "actions": [
      {
          "id": "f0bdc055-61eb-44a0-9d3b-69303e3dc386",
          "name": "Slam x2",
          "type": "atk",
          "actionSlot": 0,
          "freq": "at will",
          "condition": "default",
          "dpr": 11,
          "toHit": 4,
          "target": "enemy with most HP",
          "targets": 1
      }
  ],
  "count": 1
},
{
  "id": "5273bc53-066d-4f93-8611-4b2a4706f718",
  "mode": "custom",
  "name": "Ankheg",
  "type": "monstrosity",
  "src": "MM p.21",
  "cr": "2",
  "hp": 39,
  "AC": 14,
  "actions": [
      {
          "id": "cc8e913d-d598-4dcf-b0b6-92e15d1a639f",
          "name": "Bite",
          "type": "atk",
          "actionSlot": 0,
          "freq": "at will",
          "condition": "default",
          "dpr": 13.5,
          "toHit": 5,
          "target": "enemy with most HP",
          "targets": 1
      },
      {
          "id": "8d959f3f-e1c1-4267-8e18-0ed783b7e334",
          "name": "Acid Spray",
          "type": "atk",
          "actionSlot": 0,
          "freq": "1/fight",
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
    "id": "fe0f0f77-2f3b-4b98-8f58-926b37b8fabb",
    "mode": "custom",
    "name": "Ankylosaurus",
    "type": "beast",
    "src": "MM p.79",
    "cr": "3",
    "hp": 68,
    "AC": 15,
    "actions": [
      {
        "id": "36e58e3b-3d1c-4cb5-b3e8-929f51d31fcc",
        "name": "Tail",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 18,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "244ed7c9-e5fa-4e7e-8472-2df4109b6fea",
    "mode": "custom",
    "name": "Ape",
    "type": "beast",
    "src": "MM p.317",
    "cr": "1/2",
    "hp": 19,
    "AC": 12,
    "actions": [
      {
        "id": "e019d16c-e167-47be-b646-0ae18bd50f86",
        "name": "Rock",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 6.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "de918930-0115-42a7-9c93-23a3c7ff6cc8",
        "name": "Fist x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 13,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "b62cd8d8-0c6b-42ba-98a7-a7b95fe3bb4d",
    "mode": "custom",
    "name": "Arcanaloth",
    "type": "fiend",
    "src": "MM p.313",
    "cr": "12",
    "hp": 104,
    "AC": 17,
    "actions": [
        {
            "id": "ae7153c1-4c0d-4be9-bc9a-8a4e8b8995d3",
            "actionSlot": 0,
            "name": "Finger of Death",
            "freq": "1/day",
            "condition": "is available",
            "targets": 1,
            "type": "atk",
            "dpr": 62,
            "toHit": 7,
            "target": "enemy with most HP"
        },
        {
            "id": "ec3d829e-993b-4b8c-b6cc-d3b25f51c482",
            "actionSlot": 0,
            "name": "Chain Lightning",
            "freq": "1/day",
            "condition": "is available",
            "targets": 2,
            "type": "atk",
            "dpr": 45,
            "toHit": 7,
            "target": "enemy with most HP"
        },
        {
            "id": "ef23df09-abd1-49e1-8b47-b60f01fb4e46",
            "actionSlot": 0,
            "name": "Fireball",
            "freq": "at will",
            "condition": "default",
            "targets": 2,
            "type": "atk",
            "dpr": 28,
            "toHit": 7,
            "target": "enemy with most HP"
        }
    ],
    "count": 1
},
{
  "id": "7fc873f3-6fc6-4de6-945c-069affba2790",
  "mode": "custom",
  "name": "Archmage",
  "type": "humanoid",
  "src": "MM p.342",
  "cr": "12",
  "hp": 198,
  "AC": 15,
  "actions": [
      {
          "id": "53f6d9e8-5455-4fd3-8797-c92007ec8d1f",
          "name": "Shield",
          "actionSlot": 4,
          "condition": "default",
          "freq": "at will",
          "targets": 1,
          "type": "buff",
          "target": "self",
          "acBonus": 5
      },
      {
          "id": "8569a346-91f0-482e-9c65-11d0d5c370fb",
          "name": "Stoneskin",
          "actionSlot": 5,
          "condition": "default",
          "freq": "at will",
          "targets": 1,
          "type": "buff",
          "target": "self",
      },
      {
          "id": "dfcf320e-e18a-4cc9-8c84-c4c370ff2000",
          "actionSlot": 0,
          "name": "Cone of Cold",
          "freq": "at will",
          "condition": "default",
          "targets": 2,
          "type": "atk",
          "dpr": 36,
          "toHit": 7,
          "target": "enemy with most HP"
      }
  ],
  "count": 1
},
{
  "id": "31ec2574-8542-4774-8e96-788967123840",
  "mode": "custom",
  "name": "Assassin",
  "type": "humanoid",
  "src": "MM p.343",
  "cr": "8",
  "hp": 78,
  "AC": 15,
  "actions": [
      {
          "id": "f14b8998-4066-466c-a683-d9c3ad639226",
          "name": "Shortsword x 2 + Sneak Attack",
          "type": "atk",
          "actionSlot": 0,
          "freq": "at will",
          "condition": "default",
          "dpr": 76,
          "toHit": 6,
          "target": "enemy with most HP",
          "targets": 1
      },
      {
          "id": "b9f33af6-f169-4c85-aa8d-1c6c3d02e145",
          "actionSlot": 4,
          "name": "Assassinate",
          "freq": "1/fight",
          "condition": "is available",
          "targets": 1,
          "type": "atk",
          "dpr": 17,
          "toHit": 6,
          "target": "enemy with least HP"
      }
  ],
  "count": 1
},
  {
    "id": "e3831bbb-a866-4171-8714-264ea1e50cf3",
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
    "id": "f06b694f-4396-497d-b200-1240c83afc0b",
    "mode": "custom",
    "name": "Awakened Tree",
    "type": "plant",
    "src": "MM p.317",
    "cr": "2",
    "hp": 59,
    "AC": 13,
    "actions": [
      {
        "id": "ba5b30d1-c744-43f0-b41b-b82ae9a0aa37",
        "name": "Slam",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 14.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "bae7ed6b-d10c-4334-877c-33d12b5c4b9a",
    "mode": "custom",
    "name": "Axe Beak",
    "type": "beast",
    "src": "MM p.317",
    "cr": "1/4",
    "hp": 19,
    "AC": 11,
    "actions": [
      {
        "id": "7b4cc74e-4f9f-4798-aa06-fbea6a995d8c",
        "name": "Beak",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 6.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "afccb9f9-b09a-414d-a6ff-cfa3b1d9c6e1",
    "mode": "custom",
    "name": "Azer",
    "type": "elemental",
    "src": "MM p.22",
    "cr": "2",
    "hp": 39,
    "AC": 17,
    "actions": [
      {
        "id": "ba0ab305-b8de-418f-8be7-d89fac367557",
        "name": "Warhammer",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 19.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "450748da-427b-4659-a3b3-3b33cf70fa87",
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
    "id": "01a1d8ec-1459-4195-aeda-adb3e610ba7f",
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
    "id": "63f3e05d-31ee-4e3b-8abe-7b2b6f3696c4",
    "mode": "custom",
    "name": "Balor",
    "type": "fiend",
    "src": "MM p.55",
    "cr": "19",
    "hp": 262,
    "AC": 19,
    "actions": [
        {
            "id": "aede95ee-f7de-49fe-b2d5-cce99525987e",
            "name": "Longsword & Whip",
            "type": "atk",
            "actionSlot": 0,
            "freq": "at will",
            "condition": "default",
            "dpr": 60.5,
            "toHit": 14,
            "target": "enemy with most HP",
            "targets": 1
        },
        {
            "id": "52c68468-47a5-4583-9a3f-2bfe8b2d1e60",
            "actionSlot": 4,
            "name": "Fire Aura",
            "freq": "at will",
            "condition": "default",
            "targets": 2,
            "type": "atk",
            "dpr": 10,
            "toHit": 20,
            "target": "enemy with most HP"
        }
    ],
    "count": 1
},
  {
    "id": "e9b29ddd-d20a-4032-a8b9-e84bef0a567e",
    "mode": "custom",
    "name": "Bandit",
    "type": "humanoid",
    "src": "MM p.343",
    "cr": "1/8",
    "hp": 11,
    "AC": 12,
    "actions": [
      {
        "id": "932121f1-a8ab-4ad1-9c3a-3de0423ff70b",
        "name": "Scimitar",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 4.5,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "06e35845-60e7-4569-90de-3b57e1c6e1c4",
        "name": "Light Crossbow",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 5.5,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "6e6f8923-d087-4e08-81b5-7ee56290422d",
    "mode": "custom",
    "name": "Bandit Captain",
    "type": "humanoid",
    "src": "MM p.344",
    "cr": "2",
    "hp": 65,
    "AC": 15,
    "actions": [
        {
            "id": "39ddd986-0e58-4ee6-a3ce-bd9dbc177fe8",
            "name": "Scimitar x 2 & Dagger",
            "type": "atk",
            "actionSlot": 0,
            "freq": "at will",
            "condition": "default",
            "dpr": 19,
            "toHit": 5,
            "target": "enemy with most HP",
            "targets": 1
        }
    ],
    "count": 1
},
{
  "id": "1e5718d2-8d53-4f30-88b0-8494dca076f4",
  "mode": "custom",
  "name": "Banshee",
  "type": "undead",
  "src": "MM p.23",
  "cr": "4",
  "hp": 58,
  "AC": 12,
  "actions": [
      {
          "id": "984d6225-02fb-448f-ab3b-168682786cda",
          "name": "Corrupting Touch",
          "type": "atk",
          "actionSlot": 0,
          "freq": "at will",
          "condition": "default",
          "dpr": 12.5,
          "toHit": 4,
          "target": "enemy with most HP",
          "targets": 1
      },
      {
          "id": "d844117d-6eaf-4230-ae67-48b2d33b920e",
          "name": "Wail",
          "type": "atk",
          "actionSlot": 0,
          "freq": "1/day",
          "condition": "is available",
          "dpr": 30,
          "toHit": 3,
          "target": "enemy with most HP",
          "targets": 2
      }
  ],
  "count": 1
},
{
  "id": "a673dd37-704f-4db6-a1d8-a9668f526556",
  "mode": "custom",
  "name": "Barbed Devil",
  "type": "fiend",
  "src": "MM p.70",
  "cr": "5",
  "hp": 110,
  "AC": 15,
  "actions": [
      {
          "id": "87740760-e00d-4d38-bc53-fe05cf30cff4",
          "name": "Claw x 2 & Tail",
          "type": "atk",
          "actionSlot": 0,
          "freq": "at will",
          "condition": "default",
          "dpr": 23,
          "toHit": 6,
          "target": "enemy with most HP",
          "targets": 1
      }
  ],
  "count": 1
},
{
  "id": "2b7a76c4-67e6-44de-9e87-1731d61a08fa",
  "mode": "custom",
  "name": "Barlgura",
  "type": "fiend",
  "src": "MM p.56",
  "cr": "5",
  "hp": 68,
  "AC": 15,
  "actions": [
      {
          "id": "5f5fbc4f-c968-4d0f-8b7f-9bc212da2603",
          "name": "Bite & Fist x 2",
          "type": "atk",
          "actionSlot": 0,
          "freq": "at will",
          "condition": "default",
          "dpr": 30,
          "toHit": 7,
          "target": "enemy with most HP",
          "targets": 1
      },
      {
          "id": "f79d280f-7cda-43b7-a3ad-01258b6a4fd0",
          "name": "Reckless",
          "actionSlot": 1,
          "condition": "default",
          "freq": "at will",
          "targets": 1,
          "type": "buff",
          "target": "self",
          "acBonus": -4,
          "toHitBonus": 4
      }
  ],
  "count": 1
},
  {
    "id": "322a7317-42b8-4c7d-b919-427c40507ac7",
    "mode": "custom",
    "name": "Basilisk",
    "type": "monstrosity",
    "src": "MM p.24",
    "cr": "3",
    "hp": 52,
    "AC": 15,
    "actions": [
      {
        "id": "aaf69c35-87ab-48e4-85d6-71cbc7b6d46a",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 17,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "9c158be6-d19f-4f08-b113-53d0b40b4c36",
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
    "id": "dfce0028-07ae-4124-8044-e1df952f4da7",
    "mode": "custom",
    "name": "Bearded Devil",
    "type": "fiend",
    "src": "MM p.70",
    "cr": "3",
    "hp": 52,
    "AC": 13,
    "actions": [
      {
        "id": "593f2762-9534-4418-92a6-8f7d92fdbea0",
        "name": "Beard & Glaive",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 15,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "8f01228f-9041-450f-b151-dc2010ed844a",
    "mode": "custom",
    "name": "Behir",
    "type": "monstrosity",
    "src": "MM p.25",
    "cr": "11",
    "hp": 168,
    "AC": 17,
    "actions": [
        {
            "id": "7a1c3f6b-511c-490a-bb91-1f84853e4165",
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
            "id": "bf0d23e6-4bb4-4e79-b8fb-5d801a45617a",
            "name": "Bite & Constrict",
            "type": "atk",
            "actionSlot": 0,
            "freq": "at will",
            "condition": "default",
            "dpr": 56.5,
            "toHit": 10,
            "target": "enemy with most HP",
            "targets": 1
        }
    ],
    "count": 1
},
{
  "id": "2474a4e5-7978-4dc1-bcb9-67e5c7f08bc1",
  "mode": "custom",
  "name": "Beholder",
  "type": "aberration",
  "src": "MM p.28",
  "cr": "13",
  "hp": 180,
  "AC": 18,
  "actions": [
      {
          "id": "6b9f1a02-eb98-4e20-af17-a2662a04e14a",
          "name": "Eye Rays x3",
          "type": "atk",
          "actionSlot": 0,
          "freq": "at will",
          "condition": "default",
          "dpr": 20,
          "toHit": 6,
          "target": "enemy with most HP",
          "targets": 2
      },
      {
          "id": "fbed8014-e61f-4f75-a986-b90ff094289a",
          "actionSlot": 2,
          "name": "Eye Rays x3",
          "freq": "at will",
          "condition": "default",
          "targets": 2,
          "type": "atk",
          "dpr": 20,
          "toHit": 6,
          "target": "enemy with most HP"
      }
  ],
  "count": 1
},
{
  "id": "e465ed53-396b-4cc4-8604-7d60b1c63d93",
  "mode": "custom",
  "name": "Beholder Zombie",
  "type": "undead",
  "src": "MM p.316",
  "cr": "5",
  "hp": 93,
  "AC": 15,
  "actions": [
      {
          "id": "4eec7cf5-f58f-41dd-9b8e-ca04e44de1dd",
          "name": "Eye Ray",
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
  "id": "a8eb3afc-a5f9-4dfe-be31-ecd9e8ed4dfb",
  "mode": "custom",
  "name": "Berserker",
  "type": "humanoid",
  "src": "MM p.344",
  "cr": "2",
  "hp": 67,
  "AC": 13,
  "actions": [
      {
          "id": "10a31730-7a4d-414b-9130-7045fee13359",
          "name": "Greataxe",
          "type": "atk",
          "actionSlot": 0,
          "freq": "at will",
          "condition": "default",
          "dpr": 9.5,
          "toHit": 5,
          "target": "enemy with most HP",
          "targets": 1
      },
      {
          "id": "fa40a9e3-650c-4abb-83cc-e2bba0a35f34",
          "name": "Reckless",
          "actionSlot": 0,
          "condition": "default",
          "freq": "at will",
          "targets": 1,
          "type": "buff",
          "target": "self",
          "acBonus": -4,
          "toHitBonus": 4
      }
  ],
  "count": 1
},
  {
    "id": "a74a363f-c5d0-415f-baa2-a71fdac08caf",
    "mode": "custom",
    "name": "Black Bear",
    "type": "beast",
    "src": "MM p.318",
    "cr": "1/2",
    "hp": 19,
    "AC": 11,
    "actions": [
      {
        "id": "c1a79a75-cfc0-4802-865f-cb858a173a3c",
        "name": "Bite & Claws",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 12.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "a77f20a2-9e9c-43ff-8880-7f4020877afc",
    "mode": "custom",
    "name": "Black Dragon Wyrmling",
    "type": "dragon",
    "src": "MM p.88",
    "cr": "2",
    "hp": 33,
    "AC": 17,
    "actions": [
      {
        "id": "411558f4-dc5c-41c8-a22e-50ec3f0734df",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "97b0e63d-5886-44ca-829c-e5567facc8b5",
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
    "id": "8fc28abc-bf5f-4dce-bcd2-78905c3cf645",
    "mode": "custom",
    "name": "Black Pudding",
    "type": "ooze",
    "src": "MM p.241",
    "cr": "4",
    "hp": 85,
    "AC": 7,
    "actions": [
      {
        "id": "d8c948ba-255d-4c7b-bbd5-26fe104a9202",
        "name": "Pseudopod",
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
    "id": "9d4c19d5-2353-48c6-93ac-40ed6427b697",
    "mode": "custom",
    "name": "Blink Dog",
    "type": "fey",
    "src": "MM p.318",
    "cr": "1/4",
    "hp": 22,
    "AC": 13,
    "actions": [
      {
        "id": "e5068f2b-0f79-4993-9830-e5ca702b3450",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 4.5,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "8009fca0-f600-4022-972f-593a7a42632c",
    "mode": "custom",
    "name": "Blood Hawk",
    "type": "beast",
    "src": "MM p.319",
    "cr": "1/8",
    "hp": 7,
    "AC": 12,
    "actions": [
      {
        "id": "7f1dce45-7ee3-4ccf-8528-eee4524f4b7c",
        "name": "Beak",
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
    "id": "b2ec74b2-c4b0-42e1-90e3-5972de8541c9",
    "mode": "custom",
    "name": "Blue Dragon Wyrmling",
    "type": "dragon",
    "src": "MM p.91",
    "cr": "3",
    "hp": 52,
    "AC": 17,
    "actions": [
      {
        "id": "3c608edc-18f3-4ec0-bce6-4d6bf2c19081",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 12,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "a49f0c29-71fb-433e-a532-c713feb22c87",
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
    "id": "99a9eb14-95a8-44b3-9ab1-a923c6705dc5",
    "mode": "custom",
    "name": "Blue Slaad",
    "type": "aberration",
    "src": "MM p.276",
    "cr": "7",
    "hp": 123,
    "AC": 15,
    "actions": [
      {
        "id": "93a5f8d0-6dbe-4765-a156-0bd8e5884397",
        "name": "Bite & Claw x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 36,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "55475542-5766-4d2c-92b2-d29e343b1324",
    "mode": "custom",
    "name": "Boar",
    "type": "beast",
    "src": "MM p.319",
    "cr": "1/4",
    "hp": 11,
    "AC": 11,
    "actions": [
      {
        "id": "d979eb6e-90a9-43a0-a3ec-b42ea602a615",
        "name": "Tusk",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 4.5,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "ac85a7a2-fc8d-476a-9cb4-520b24119a51",
    "mode": "custom",
    "name": "Bone Devil",
    "type": "fiend",
    "src": "MM p.71",
    "cr": "9",
    "hp": 142,
    "AC": 19,
    "actions": [
      {
        "id": "55df6b98-7f84-4e5e-9c2a-e6fee26840ca",
        "name": "Claw x 2 & Sting",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 47.5,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "deca2ed1-b53f-48c0-befa-5e6fde95baba",
    "mode": "custom",
    "name": "Bone Naga (Guardian)",
    "type": "undead",
    "src": "MM p.233",
    "cr": "4",
    "hp": 58,
    "AC": 15,
    "actions": [
      {
        "id": "fb3a6a0c-79e3-4b0c-a0a2-ffb9366b18bd",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 20.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "2a66dcb6-ff9a-444f-ac78-569bc96b70bb",
    "mode": "custom",
    "name": "Bone Naga (Spirit)",
    "type": "undead",
    "src": "MM p.233",
    "cr": "4",
    "hp": 58,
    "AC": 15,
    "actions": [
      {
        "id": "81658a5b-1278-49fa-b7c4-8424d64a58f9",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 20.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "57e768d2-0489-4d9a-89ba-d634e905e887",
    "mode": "custom",
    "name": "Brass Dragon Wyrmling",
    "type": "dragon",
    "src": "MM p.106",
    "cr": "1",
    "hp": 16,
    "AC": 16,
    "actions": [
      {
        "id": "d7b71fac-8794-4af8-8101-8d7cf724f4eb",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "a0c8dae9-8877-4623-836d-e76e1053316f",
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
    "id": "41232eba-e6d9-4b05-9bbf-bc714d948777",
    "mode": "custom",
    "name": "Bronze Dragon Wyrmling",
    "type": "dragon",
    "src": "MM p.109",
    "cr": "2",
    "hp": 32,
    "AC": 17,
    "actions": [
      {
        "id": "bad60b84-dbea-48ef-8467-d171bf45eeee",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 8.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "feb535f1-51da-4592-b480-642e6585e0e8",
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
    "id": "4c30e302-f633-428d-8f35-ff7f5d8484c8",
    "mode": "custom",
    "name": "Brown Bear",
    "type": "beast",
    "src": "MM p.319",
    "cr": "1",
    "hp": 34,
    "AC": 11,
    "actions": [
      {
        "id": "d3abb83e-e5b4-4ecd-90ce-fd7e5a2b7fd4",
        "name": "Bite & Claws",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 19.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "848d678b-fd96-49b8-b23d-fb1b67aa49f6",
    "mode": "custom",
    "name": "Bugbear",
    "type": "humanoid",
    "src": "MM p.33",
    "cr": "1",
    "hp": 27,
    "AC": 16,
    "actions": [
      {
        "id": "45aa611d-6a75-4ae0-a2b0-6a6e3156daad",
        "name": "Morningstar",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 11,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "fe55fb77-9a16-4739-853c-13905a908730",
        "name": "Javelin",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 14.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "604ae944-8c66-4d0d-8f69-4bc57157a9d3",
    "mode": "custom",
    "name": "Bugbear Chief",
    "type": "humanoid",
    "src": "MM p.33",
    "cr": "3",
    "hp": 65,
    "AC": 17,
    "actions": [
        {
            "id": "f71ae55f-88c2-4f83-96bb-ca6f4e6bb068",
            "name": "Morningstar x2",
            "type": "atk",
            "actionSlot": 0,
            "freq": "at will",
            "condition": "default",
            "dpr": 24,
            "toHit": 5,
            "target": "enemy with most HP",
            "targets": 1
        },
        {
            "id": "d003b354-fb09-4e92-9e5d-57c70f43f4ab",
            "actionSlot": 0,
            "name": "Surprise Attack",
            "freq": "1/fight",
            "condition": "default",
            "targets": 1,
            "type": "atk",
            "dpr": 7,
            "toHit": 5,
            "target": "enemy with least HP"
        }
    ],
    "count": 1
},
  {
    "id": "fd0e8aaf-795f-4d19-b4c6-f47c677e618b",
    "mode": "custom",
    "name": "Bulette",
    "type": "monstrosity",
    "src": "MM p.34",
    "cr": "5",
    "hp": 94,
    "AC": 17,
    "actions": [
      {
        "id": "89a67aea-4c45-448e-adb9-7391704bfb03",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 30,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "b0f23a34-3411-4e27-89ce-ba18883e7484",
        "name": "Deadly Leap",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 29,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "0c47523e-ada4-4a06-92e0-a2270d031a67",
    "mode": "custom",
    "name": "Bullywug",
    "type": "humanoid",
    "src": "MM p.35",
    "cr": "1/4",
    "hp": 11,
    "AC": 15,
    "actions": [
      {
        "id": "6555bdd4-9dc4-43c9-8c1f-38961f54084a",
        "name": "Bite & Spear",
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
    "id": "f3e4de74-9d0c-4138-a045-e53ac2a69412",
    "mode": "custom",
    "name": "Cambion",
    "type": "fiend",
    "src": "MM p.36",
    "cr": "5",
    "hp": 82,
    "AC": 19,
    "actions": [
      {
        "id": "7448280f-208d-48bf-8f57-4451f41d46d1",
        "name": "Spear",
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
        "id": "b276c068-f68b-4541-81ee-abc354bfc7ac",
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
    "id": "0851c7cf-bcdb-4116-800b-872a60c50dd1",
    "mode": "custom",
    "name": "Camel",
    "type": "beast",
    "src": "MM p.320",
    "cr": "1/8",
    "hp": 15,
    "AC": 9,
    "actions": [
      {
        "id": "164829ad-4eed-4824-a6bb-5a661c074a53",
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
    "id": "ae8c686e-90b9-4a26-ab88-7fafe8f53e94",
    "mode": "custom",
    "name": "Carrion Crawler",
    "type": "monstrosity",
    "src": "MM p.37",
    "cr": "2",
    "hp": 51,
    "AC": 13,
    "actions": [
      {
        "id": "781a58e7-c166-4b94-bf5d-d57a66a1e7f0",
        "name": "Tentacles & Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 11.5,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "3b8bc241-213c-4be7-844f-cc2a458e796e",
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
    "id": "3cba0c5e-2445-4739-8f59-51ea711c268e",
    "mode": "custom",
    "name": "Cave Bear",
    "type": "beast",
    "src": "MM p.334",
    "cr": "2",
    "hp": 42,
    "AC": 12,
    "actions": [
      {
        "id": "41ff44c7-0a29-4312-ae05-0fab4d4d6e4d",
        "name": "Bite & Claws",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 21.5,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "7ff684d8-2e1c-48f4-a0c0-e6c98fdb1f2b",
    "mode": "custom",
    "name": "Centaur",
    "type": "monstrosity",
    "src": "MM p.38",
    "cr": "2",
    "hp": 45,
    "AC": 12,
    "actions": [
      {
        "id": "59bfc8ca-6dda-464f-ac7f-01ea76c1f735",
        "name": "Pike & Hooves & Longbow x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 33.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "70556ee4-8160-406b-9a92-807cd02f75b5",
    "mode": "custom",
    "name": "Chain Devil",
    "type": "fiend",
    "src": "MM p.72",
    "cr": "8",
    "hp": 85,
    "AC": 16,
    "actions": [
      {
        "id": "9c00fb96-5c2c-412c-9237-c571380e291a",
        "name": "Chain x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 36,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "b6a28eb0-56d6-467d-bb10-f5cc59491280",
    "mode": "custom",
    "name": "Chasme",
    "type": "fiend",
    "src": "MM p.57",
    "cr": "6",
    "hp": 84,
    "AC": 15,
    "actions": [
      {
        "id": "8bdbe598-8c27-49f9-8fbe-70f8a3bd0ea5",
        "name": "Proboscis",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 40.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "bea6f524-a895-482d-a7fe-f5f28b479477",
    "mode": "custom",
    "name": "Chimera",
    "type": "monstrosity",
    "src": "MM p.39",
    "cr": "6",
    "hp": 114,
    "AC": 14,
    "actions": [
      {
        "id": "edc7fd81-2c7e-4db5-89c0-349e7317ef99",
        "name": "Fire Breath",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 31.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 2
      },
      {
        "id": "a7ebcc75-d157-43ca-9817-157a4e5c39db",
        "name": "Bite & Horns & Claws",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 32.5,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "f616e2d2-dd2e-4ff0-84a6-2a1a481b82f6",
    "mode": "custom",
    "name": "Chuul",
    "type": "aberration",
    "src": "MM p.40",
    "cr": "4",
    "hp": 93,
    "AC": 16,
    "actions": [
      {
        "id": "cee97f6e-e8c2-4288-aa24-62da8328cf78",
        "name": "Pincer x 2 & Tentacles x 2",
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
    "id": "0266704f-030a-412b-926e-4babe200571f",
    "mode": "custom",
    "name": "Clay Golem",
    "type": "construct",
    "src": "MM p.168",
    "cr": "9",
    "hp": 133,
    "AC": 14,
    "actions": [
      {
        "id": "8db358dc-8a34-44e1-8a9e-7f4857a68bc7",
        "name": "Slam x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 32,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "84e1835e-cb07-4601-a27f-82e034dfd422",
    "mode": "custom",
    "name": "Cloaker",
    "type": "aberration",
    "src": "MM p.41",
    "cr": "8",
    "hp": 78,
    "AC": 14,
    "actions": [
      {
        "id": "1e83f4ea-4e8a-4c9c-8d17-f0b88532e843",
        "name": "Bite & Tail",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 17.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "259a0694-05b1-4e6d-acd6-b08daa10b318",
    "mode": "custom",
    "name": "Cloud Giant",
    "type": "giant",
    "src": "MM p.154",
    "cr": "9",
    "hp": 200,
    "AC": 14,
    "actions": [
      {
        "id": "6da024d3-81e0-4cd3-8fbc-a848e77ea79b",
        "name": "Rock",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 30,
        "toHit": 12,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "6654e450-a44a-4a15-9491-a2f3bf7a539b",
        "name": "Morningstar x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 43,
        "toHit": 12,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "ed94198c-46ef-414c-8bc3-25e85871c905",
    "mode": "custom",
    "name": "Cockatrice",
    "type": "monstrosity",
    "src": "MM p.42",
    "cr": "1/2",
    "hp": 27,
    "AC": 11,
    "actions": [
      {
        "id": "4f5adadb-672c-4582-b0f5-5c9af62ca6bc",
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
    "id": "21f6771d-ab3e-4eef-92c6-7f59dd479a5d",
    "mode": "custom",
    "name": "Commoner",
    "type": "humanoid",
    "src": "MM p.345",
    "cr": "0",
    "hp": 4,
    "AC": 10,
    "actions": [
      {
        "id": "4a9c54e3-20a9-4f75-9a98-1d571e4d8ae9",
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
    "id": "b6c3b295-1902-4de6-9fcc-96d37f6ba1bd",
    "mode": "custom",
    "name": "Constrictor Snake",
    "type": "beast",
    "src": "MM p.320",
    "cr": "1/4",
    "hp": 13,
    "AC": 12,
    "actions": [
      {
        "id": "49d6bac1-4280-4f0d-8ce0-45d6703b54a5",
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
        "id": "96fea9b5-415b-4a1a-acbe-f1cde0ccd5d2",
        "name": "Constrict",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 6.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "a7575e4c-ca6c-4dd1-aac8-287fa09a1591",
    "mode": "custom",
    "name": "Copper Dragon Wyrmling",
    "type": "dragon",
    "src": "MM p.111",
    "cr": "1",
    "hp": 22,
    "AC": 16,
    "actions": [
      {
        "id": "dea670ce-6b24-415e-94b4-cf4a5f8287e9",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "444d9fe8-c14e-4ecb-9c18-c22cbe412ed5",
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
    "id": "e54f4d66-ff77-4262-821c-be917e61efb2",
    "mode": "custom",
    "name": "Couatl",
    "type": "celestial",
    "src": "MM p.43",
    "cr": "4",
    "hp": 97,
    "AC": 19,
    "actions": [
      {
        "id": "7024fbfc-39cb-4f69-a0a3-8c766e21b2d3",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 8.5,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "46f4d40b-f0b5-481e-b0e6-d6a41fd39ffd",
        "name": "Constrict",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "3d3b6634-a221-465f-a78b-52c422c4db6f",
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
    "id": "4e8a3d62-e2ff-4b34-a951-7a210fd49da9",
    "mode": "custom",
    "name": "Crawling Claw",
    "type": "undead",
    "src": "MM p.44",
    "cr": "0",
    "hp": 2,
    "AC": 12,
    "actions": [
      {
        "id": "76a0d90f-a9e7-46a3-b6d7-83dbf8aec583",
        "name": "Claw",
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
    "id": "0614613b-eb8e-4474-889a-79e89a93840f",
    "mode": "custom",
    "name": "Crocodile",
    "type": "beast",
    "src": "MM p.320",
    "cr": "1/2",
    "hp": 19,
    "AC": 12,
    "actions": [
      {
        "id": "4ed27380-5f9a-4279-afc0-6f53703403f8",
        "name": "Bite",
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
    "id": "4802f251-2d5b-44f1-b9fe-c8ec1d2b488c",
    "mode": "custom",
    "name": "Cult Fanatic",
    "type": "humanoid",
    "src": "MM p.345",
    "cr": "2",
    "hp": 33,
    "AC": 13,
    "actions": [
      {
        "id": "51947e8a-83e6-4365-9ba8-16ad32310a1b",
        "name": "Dagger",
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
    "id": "3f8b9016-f96e-4d78-b4d9-9a38e5e6c9cc",
    "mode": "custom",
    "name": "Cultist",
    "type": "humanoid",
    "src": "MM p.345",
    "cr": "1/8",
    "hp": 9,
    "AC": 12,
    "actions": [
      {
        "id": "423d69df-e5b9-4819-b745-4ab66ee8023d",
        "name": "Scimitar",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 4.5,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "77228276-e739-48ca-8d3f-0be88b524d27",
    "mode": "custom",
    "name": "Cyclops",
    "type": "giant",
    "src": "MM p.45",
    "cr": "6",
    "hp": 138,
    "AC": 14,
    "actions": [
      {
        "id": "64c9df11-e83c-41ca-a1f0-2718879deb79",
        "name": "Rock",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 28,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "0ac4d558-7472-496b-9799-3db50c40d67b",
        "name": "Greatclub x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 39,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "ba94e3ee-503d-4348-afca-7589f0e8f436",
    "mode": "custom",
    "name": "Dao",
    "type": "elemental",
    "src": "MM p.143",
    "cr": "11",
    "hp": 187,
    "AC": 18,
    "actions": [
      {
        "id": "2f4df425-7324-4d7c-8290-48a92f9528ae",
        "name": "Fist x 2 & Maul x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 70,
        "toHit": 10,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "ec306480-e235-48a9-87c7-d19f6fa9b9ce",
    "mode": "custom",
    "name": "Darkmantle",
    "type": "monstrosity",
    "src": "MM p.46",
    "cr": "1/2",
    "hp": 22,
    "AC": 11,
    "actions": [
      {
        "id": "fff216ff-63f5-416f-9d8c-f14f0c6b6cbe",
        "name": "Crush",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 6.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "2144126f-a8a7-4640-a692-848f26940c27",
    "mode": "custom",
    "name": "Death Dog",
    "type": "monstrosity",
    "src": "MM p.321",
    "cr": "1",
    "hp": 39,
    "AC": 12,
    "actions": [
      {
        "id": "f015c642-0ebb-4283-b396-f0851483270e",
        "name": "Bite x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 11,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "72fcb263-a873-439d-88f0-1d1d1a03a1d9",
    "mode": "custom",
    "name": "Death Knight",
    "type": "undead",
    "src": "MM p.47",
    "cr": "17",
    "hp": 180,
    "AC": 20,
    "actions": [
      {
        "id": "aa308d76-1fb7-4482-a7c3-cca9d1b4d8fc",
        "name": "Hellfire Orb",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/day",
        "condition": "is available",
        "dpr": 70,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 2
      },
      {
        "id": "46c60fe1-40bb-42e1-b017-9611451f9980",
        "name": "Longsword x 3",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 114,
        "toHit": 11,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "7880234e-6575-4b7e-866b-8d4390c3f351",
    "mode": "custom",
    "name": "Death Slaad",
    "type": "aberration",
    "src": "MM p.278",
    "cr": "10",
    "hp": 170,
    "AC": 18,
    "actions": [
      {
        "id": "cc2e2634-8cbe-4b4e-a084-350737b1a009",
        "name": "Bite (Slaad Form Only)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 16.5,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "5b5bef67-9de4-49a2-a539-e5a2e82e1a1b",
        "name": "Claws (Slaad Form Only)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 17.5,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "dd7bb8f2-f6de-4eae-a3be-6e55c5575bdf",
        "name": "Greatsword x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 38,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "29b4b922-d5ba-436a-a307-d43523bb5485",
    "mode": "custom",
    "name": "Death Tyrant",
    "type": "undead",
    "src": "MM p.29",
    "cr": "14",
    "hp": 187,
    "AC": 19,
    "actions": [
      {
        "id": "71295bbf-6c4a-4658-88d9-9a2e6d9432e5",
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
        "id": "065af412-cb31-4198-8f50-0d10a6b83b7a",
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
    "id": "23d96bb6-71db-4f5d-abdf-7f89022793a5",
    "mode": "custom",
    "name": "Deep Gnome (Svirfneblin)",
    "type": "humanoid",
    "src": "MM p.164",
    "cr": "1/2",
    "hp": 16,
    "AC": 15,
    "actions": [
      {
        "id": "5d70b4ec-ff4e-4899-a4e8-f41cfdd349e8",
        "name": "War Pick",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 6.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "8551df9f-5422-43c2-8d5d-5c7d91c086fc",
        "name": "Poisoned Dart",
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
    "id": "19d874fd-c020-42ae-9b62-dd9ece151aaf",
    "mode": "custom",
    "name": "Deer",
    "type": "beast",
    "src": "MM p.321",
    "cr": "0",
    "hp": 4,
    "AC": 13,
    "actions": [
      {
        "id": "e683dbaf-ce2f-48bd-9091-09d407e971a7",
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
    "id": "3206d4c0-15f0-4824-9251-a45aa097617c",
    "mode": "custom",
    "name": "Demilich",
    "type": "undead",
    "src": "MM p.48",
    "cr": "18",
    "hp": 80,
    "AC": 20,
    "actions": [
      {
        "id": "cd927901-1976-4c11-aaaa-13e1c486cc8c",
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
    "id": "8ba765e8-1930-4680-8c13-992a40726465",
    "mode": "custom",
    "name": "Deva",
    "type": "celestial",
    "src": "MM p.16",
    "cr": "10",
    "hp": 136,
    "AC": 17,
    "actions": [
      {
        "id": "681c5680-0a5d-4550-a4a5-d62fa15c485e",
        "name": "Mace",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 25.5,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "7c982d18-a2eb-4f2f-880d-43471be6255d",
    "mode": "custom",
    "name": "Dire Wolf",
    "type": "beast",
    "src": "MM p.321",
    "cr": "1",
    "hp": 37,
    "AC": 14,
    "actions": [
      {
        "id": "5ce452a5-0310-4520-9b89-7438c75567e7",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "37b1a459-194a-46a7-ab62-d62fa4ce03ce",
    "mode": "custom",
    "name": "Displacer Beast",
    "type": "monstrosity",
    "src": "MM p.81",
    "cr": "3",
    "hp": 85,
    "AC": 13,
    "actions": [
      {
        "id": "66add2f4-a157-4407-8cbc-749ac13a097f",
        "name": "Tentacle x 2",
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
    "id": "4ffca5be-94f2-48f1-b4ad-cd4d4c4a70ee",
    "mode": "custom",
    "name": "Djinni",
    "type": "elemental",
    "src": "MM p.144",
    "cr": "11",
    "hp": 161,
    "AC": 17,
    "actions": [
      {
        "id": "da42f009-2ac0-4b98-a9c2-bcd92d6de917",
        "name": "Scimitar x 3",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 46.5,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "1c15a258-5e2f-4eb5-93ff-5ab186add6b2",
    "mode": "custom",
    "name": "Doppelganger",
    "type": "monstrosity",
    "src": "MM p.82",
    "cr": "3",
    "hp": 52,
    "AC": 14,
    "actions": [
      {
        "id": "c4242b98-56b2-4bad-bd0e-aa05b80e0d26",
        "name": "Slam",
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
    "id": "d63a478e-4fba-4e40-8866-6a19e41f2b25",
    "mode": "custom",
    "name": "Draft Horse",
    "type": "beast",
    "src": "MM p.321",
    "cr": "1/4",
    "hp": 19,
    "AC": 10,
    "actions": [
      {
        "id": "ac247a30-3310-45a1-85c6-e4c2a2fe6468",
        "name": "Hooves",
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
    "id": "522d25a4-dd6e-4c52-9d3e-5f298e27f5db",
    "mode": "custom",
    "name": "Dragon Turtle",
    "type": "dragon",
    "src": "MM p.119",
    "cr": "17",
    "hp": 341,
    "AC": 20,
    "actions": [
      {
        "id": "d254bda5-9116-43e3-98a3-9b86ed7baab0",
        "name": "Steam Breath",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 52.5,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 2
      },
      {
        "id": "09738be7-fb2c-4194-91db-9025a11a4de7",
        "name": "Bite & Claw x 2 & Tail",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 85,
        "toHit": 13,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "75a45ce2-501f-49ba-855d-be8de61273b0",
    "mode": "custom",
    "name": "Dretch",
    "type": "fiend",
    "src": "MM p.57",
    "cr": "1/4",
    "hp": 18,
    "AC": 11,
    "actions": [
      {
        "id": "480f06ec-81f1-4b95-a1d2-562c192b4a64",
        "name": "Bite & Claws",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 8.5,
        "toHit": 2,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "1d08066b-2245-4c9a-8ca3-06245166c005",
    "mode": "custom",
    "name": "Drider",
    "type": "monstrosity",
    "src": "MM p.120",
    "cr": "6",
    "hp": 123,
    "AC": 19,
    "actions": [
      {
        "id": "754909ee-96bc-4039-9ce6-493e3a9d4d52",
        "name": "Bite & Longsword x 3 & Longbow x 3",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 95.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "3036d622-9685-4cb2-a224-8cc794e40240",
    "mode": "custom",
    "name": "Drow",
    "type": "humanoid",
    "src": "MM p.128",
    "cr": "1/4",
    "hp": 13,
    "AC": 15,
    "actions": [
      {
        "id": "576bdcfd-402c-4451-9db5-ef47c82c0410",
        "name": "Shortsword",
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
        "id": "15f49fb7-f56a-449b-92d2-f316983f7166",
        "name": "Hand Crossbow",
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
    "id": "6f104376-8e82-4e43-bd37-c4c54d3437b3",
    "mode": "custom",
    "name": "Drow Elite Warrior",
    "type": "humanoid",
    "src": "MM p.128",
    "cr": "5",
    "hp": 71,
    "AC": 18,
    "actions": [
      {
        "id": "0e311e77-f448-43db-9f0e-fe35d20d76c0",
        "name": "Hand Crossbow",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7.5,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "0411d615-7dbb-4e39-9288-a5a5d9381aba",
        "name": "Shortsword x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 36,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "f5d51178-2c3e-4f9c-bc6b-82d232aaf950",
    "mode": "custom",
    "name": "Drow Mage",
    "type": "humanoid",
    "src": "MM p.129",
    "cr": "7",
    "hp": 45,
    "AC": 12,
    "actions": [
      {
        "id": "05e1283f-bf0b-4f60-8652-35a00be84253",
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
    "id": "aee7f112-64d0-40a4-998b-bdb240be3723",
    "mode": "custom",
    "name": "Drow Priestess of Lolth",
    "type": "humanoid",
    "src": "MM p.129",
    "cr": "8",
    "hp": 71,
    "AC": 16,
    "actions": [
      {
        "id": "8c65e1a0-f8ac-4daa-896b-f1060c451d72",
        "name": "Summon Demon",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/day",
        "condition": "is available",
        "dpr": 5.5,
        "toHit": 0,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "20602a44-c297-4266-a278-953d91b8ea51",
        "name": "Scourge x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 46,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "61b96c5d-5d9d-42bf-9b54-02df85b1b755",
    "mode": "custom",
    "name": "Druid",
    "type": "humanoid",
    "src": "MM p.346",
    "cr": "2",
    "hp": 27,
    "AC": 11,
    "actions": [
      {
        "id": "ba00f89f-c380-4b77-8128-a915f7826fa9",
        "name": "Quarterstaff",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 14.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "1eb426f2-0bd1-4ae1-b185-01b9d4cb1799",
    "mode": "custom",
    "name": "Dryad",
    "type": "fey",
    "src": "MM p.121",
    "cr": "1",
    "hp": 22,
    "AC": 11,
    "actions": [
      {
        "id": "60143b84-e231-4e13-b23f-3a5aaef0e02e",
        "name": "Club",
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
    "id": "c6d418e7-db65-4007-9db7-3159431940c0",
    "mode": "custom",
    "name": "Duergar",
    "type": "humanoid",
    "src": "MM p.122",
    "cr": "1",
    "hp": 26,
    "AC": 16,
    "actions": [
      {
        "id": "048659bd-2a51-4954-a0b6-8b80703e2df3",
        "name": "War Pick",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 17.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "6879657e-499c-4e19-937c-cd6b33cc8e76",
        "name": "Javelin",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 14.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "f9480d74-40bb-45a9-9fb3-12c0c95b0d84",
    "mode": "custom",
    "name": "Duodrone",
    "type": "construct",
    "src": "MM p.225",
    "cr": "1/4",
    "hp": 11,
    "AC": 15,
    "actions": [
      {
        "id": "33fd19d8-3702-47b6-99db-61bfb2578600",
        "name": "Fist x 2 & Javelin x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 14,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "e817f4c7-4c5a-4813-b2eb-47adf740ca25",
    "mode": "custom",
    "name": "Dust Mephit",
    "type": "elemental",
    "src": "MM p.215",
    "cr": "1/2",
    "hp": 17,
    "AC": 12,
    "actions": [
      {
        "id": "e76db1b2-52c9-417d-be35-53e9f1c7e32e",
        "name": "Claws",
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
    "id": "e08e964d-0a19-4ec5-ac66-28652da64314",
    "mode": "custom",
    "name": "Eagle",
    "type": "beast",
    "src": "MM p.322",
    "cr": "0",
    "hp": 3,
    "AC": 12,
    "actions": [
      {
        "id": "1885fe64-3c1b-4c63-8c26-a1499c395d7a",
        "name": "Talons",
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
    "id": "0ba17a7f-91e0-4af7-8774-074de3aad3eb",
    "mode": "custom",
    "name": "Earth Elemental",
    "type": "elemental",
    "src": "MM p.124",
    "cr": "5",
    "hp": 126,
    "AC": 17,
    "actions": [
      {
        "id": "9432f62e-e745-4a6a-85c8-236efd42be49",
        "name": "Slam x 2",
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
    "id": "d76da28b-0c62-482c-b6f4-29a7ba1dad1c",
    "mode": "custom",
    "name": "Efreeti",
    "type": "elemental",
    "src": "MM p.145",
    "cr": "11",
    "hp": 200,
    "AC": 17,
    "actions": [
      {
        "id": "1154e1b0-d120-45e3-94d2-6671417080fe",
        "name": "Hurl Flame",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 17.5,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "cfefbbc4-090a-42be-95cf-828aec8be10d",
        "name": "Scimitar x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 40,
        "toHit": 10,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "d03a6991-68a3-47a7-bff0-02f8a9ef58a8",
    "mode": "custom",
    "name": "Elephant",
    "type": "beast",
    "src": "MM p.322",
    "cr": "4",
    "hp": 76,
    "AC": 12,
    "actions": [
      {
        "id": "c41c1ca2-8f17-4c46-bca0-0654da5e65a7",
        "name": "Gore",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 19.5,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "182d1ea0-da46-4a8c-9e02-9377e6cb8fff",
        "name": "Stomp",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 22.5,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "01d4becd-0e01-4db4-9f8c-de468489658f",
    "mode": "custom",
    "name": "Elk",
    "type": "beast",
    "src": "MM p.322",
    "cr": "1/4",
    "hp": 13,
    "AC": 10,
    "actions": [
      {
        "id": "f2736255-c45e-4651-955e-303eae1b1d57",
        "name": "Ram",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 6.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "54ffd38d-84b7-49eb-ba4f-1e432ebb2d8c",
        "name": "Hooves",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 8,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "6e0a5807-4869-4a76-894f-8d841879ed39",
    "mode": "custom",
    "name": "Empyrean",
    "type": "celestial",
    "src": "MM p.130",
    "cr": "23",
    "hp": 313,
    "AC": 22,
    "actions": [
      {
        "id": "6030e852-423c-4830-baaa-6e3d848a98f1",
        "name": "Maul",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 31,
        "toHit": 17,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "70863ae7-ffa3-4bd5-9fa6-50130111aa0a",
    "mode": "custom",
    "name": "Erinyes",
    "type": "fiend",
    "src": "MM p.73",
    "cr": "12",
    "hp": 153,
    "AC": 18,
    "actions": [
      {
        "id": "4760202d-5bb9-40d9-8681-06920966af9b",
        "name": "Longsword",
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
        "id": "911ecd23-4f51-43c8-9f24-ae48c2c7feaa",
        "name": "Longbow",
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
    "id": "740e0792-348b-4e6f-9b5c-8294634a942c",
    "mode": "custom",
    "name": "Ettercap",
    "type": "monstrosity",
    "src": "MM p.131",
    "cr": "2",
    "hp": 44,
    "AC": 13,
    "actions": [
      {
        "id": "ab1d26a6-fe0a-46e7-b8cc-7f454dd000d1",
        "name": "Bite & Claws",
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
    "id": "717cb659-b2a3-43f2-b0cd-df4d77b66c6b",
    "mode": "custom",
    "name": "Ettin",
    "type": "giant",
    "src": "MM p.132",
    "cr": "4",
    "hp": 85,
    "AC": 12,
    "actions": [
      {
        "id": "749a82de-793a-4fe9-b557-5631e562f10d",
        "name": "Battleaxe & Morningstar",
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
    "id": "f6448846-4f84-482c-b376-5285fd769aa8",
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
    "id": "d08ae51d-bf5a-4041-9ecc-b0ea0f35f5f7",
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
    "id": "8be0edba-356e-4c28-beb9-0f81912fe498",
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
    "id": "40e06caa-4869-4610-b13f-5ddc276fe109",
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
    "id": "6c8d320a-783c-4ee5-82d7-92343f40d455",
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
    "id": "329c8944-c583-469b-9b8b-ae4e8dd0c93b",
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
    "id": "32dcb639-cbb6-4ebf-9ea9-807479f854fa",
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
    "id": "1f28c0ad-10d1-4309-8b51-a85ad9c7ad3c",
    "mode": "custom",
    "name": "Fire Elemental",
    "type": "elemental",
    "src": "MM p.125",
    "cr": "5",
    "hp": 102,
    "AC": 13,
    "actions": [
      {
        "id": "23c0a9dc-6a83-4689-8f50-b4995bf8d95a",
        "name": "Touch x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 31,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "2c650efa-38e4-4529-9ecd-bf0291122dd3",
    "mode": "custom",
    "name": "Fire Giant",
    "type": "giant",
    "src": "MM p.154",
    "cr": "9",
    "hp": 162,
    "AC": 18,
    "actions": [
      {
        "id": "cb59055b-02d3-43e0-a7fe-bc89990e79ab",
        "name": "Rock",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 29,
        "toHit": 11,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "a4d93805-4f04-4dd3-99da-5139262951b3",
        "name": "Greatsword x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 56,
        "toHit": 11,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "3ba8c51b-6f5c-4c46-bc2b-d4506789de38",
    "mode": "custom",
    "name": "Fire Snake",
    "type": "elemental",
    "src": "MM p.265",
    "cr": "1",
    "hp": 22,
    "AC": 14,
    "actions": [
      {
        "id": "96f40f3e-f04c-4b59-be23-d756c5e67c0f",
        "name": "Bite & Tail",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 14,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "94256225-2947-48f6-b4df-c5044f7a11bb",
    "mode": "custom",
    "name": "Flameskull",
    "type": "undead",
    "src": "MM p.134",
    "cr": "4",
    "hp": 40,
    "AC": 13,
    "actions": [
      {
        "id": "7de14aa3-0382-43ce-8d4e-2b3f29e500c2",
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
    "id": "bc9b45d8-6c4e-4b16-8f91-f58971aa489c",
    "mode": "custom",
    "name": "Flesh Golem",
    "type": "construct",
    "src": "MM p.169",
    "cr": "5",
    "hp": 93,
    "AC": 9,
    "actions": [
      {
        "id": "8c64fa31-377f-44b8-ac5a-03930fff5c7e",
        "name": "Slam x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 26,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "1c35b5a4-b211-4f8d-a010-423e1fa05498",
    "mode": "custom",
    "name": "Flumph",
    "type": "aberration",
    "src": "MM p.135",
    "cr": "1/8",
    "hp": 7,
    "AC": 12,
    "actions": [
      {
        "id": "9bb9e208-7535-4f5c-8c09-806e1e77b236",
        "name": "Tendrils",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 9.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "3a9cc7fa-793d-4a4d-a321-550c49266e0f",
    "mode": "custom",
    "name": "Flying Snake",
    "type": "beast",
    "src": "MM p.322",
    "cr": "1/8",
    "hp": 5,
    "AC": 14,
    "actions": [
      {
        "id": "124babd4-69bb-4046-b850-3c5588808753",
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
    "id": "3589199e-b19a-401a-86b2-ed2abf0a2247",
    "mode": "custom",
    "name": "Flying Sword",
    "type": "construct",
    "src": "MM p.20",
    "cr": "1/4",
    "hp": 17,
    "AC": 17,
    "actions": [
      {
        "id": "a5f27165-385b-4e86-a04f-445991a36cd7",
        "name": "Longsword",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 5.5,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "df1b943d-163f-45ee-ae4e-149ceb8e26e5",
    "mode": "custom",
    "name": "Fomorian",
    "type": "giant",
    "src": "MM p.136",
    "cr": "8",
    "hp": 149,
    "AC": 14,
    "actions": [
      {
        "id": "d49236f4-b134-4b7b-90dc-25c71494f21f",
        "name": "Evil Eye",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 27,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "7ecae848-28ab-4acc-8d27-0b58fc68579f",
        "name": "Greatclub",
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
    "id": "31fc5606-4b22-4b62-92ca-3c25386e4ecd",
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
    "id": "7e16065c-bf2f-482f-bbb2-f1f334f0398f",
    "mode": "custom",
    "name": "Frost Giant",
    "type": "giant",
    "src": "MM p.155",
    "cr": "8",
    "hp": 138,
    "AC": 15,
    "actions": [
      {
        "id": "ff12a132-9cf9-44d0-96ab-6bdfba555495",
        "name": "Rock",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 28,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "00263eac-eb84-4524-a1d9-402fc450ad69",
        "name": "Greataxe x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 51,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "43283309-01fc-4d98-bb1a-434cb1294e14",
    "mode": "custom",
    "name": "Galeb Duhr",
    "type": "elemental",
    "src": "MM p.139",
    "cr": "6",
    "hp": 85,
    "AC": 16,
    "actions": [
      {
        "id": "6f71b87c-7790-47f4-941b-9d5603e8ba5d",
        "name": "Slam",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 12,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "b2a646b7-4f9e-45bd-878c-17b44a509abb",
    "mode": "custom",
    "name": "Gargoyle",
    "type": "elemental",
    "src": "MM p.140",
    "cr": "2",
    "hp": 52,
    "AC": 15,
    "actions": [
      {
        "id": "cda9e60d-bad5-4c8e-baab-506b99a0a853",
        "name": "Bite & Claws",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 11,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "9ca4fa81-6d47-4e99-879b-76af52448cd5",
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
    "id": "8a4a66a7-179c-4929-95b6-f14b7088d370",
    "mode": "custom",
    "name": "Gelatinous Cube",
    "type": "ooze",
    "src": "MM p.242",
    "cr": "2",
    "hp": 84,
    "AC": 6,
    "actions": [
      {
        "id": "b4215249-fde4-4a58-aabb-4edc803925ff",
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
        "id": "9f69b540-ce3d-4fc9-8303-690e8b11cf03",
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
    "id": "64f1c78b-be7a-49e6-8385-3522560efdf1",
    "mode": "custom",
    "name": "Ghast",
    "type": "undead",
    "src": "MM p.148",
    "cr": "2",
    "hp": 36,
    "AC": 13,
    "actions": [
      {
        "id": "96c7b110-123a-4066-8305-189292f3ff07",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 12,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "aa9115a3-5683-4924-ad21-e8bb88c925c4",
        "name": "Claws",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "b69ec87f-7a65-434d-9fd9-62a450b4ffb9",
    "mode": "custom",
    "name": "Ghost",
    "type": "undead",
    "src": "MM p.147",
    "cr": "4",
    "hp": 45,
    "AC": 11,
    "actions": [
      {
        "id": "8793c87f-7619-4965-a344-146b6d552f64",
        "name": "Withering Touch",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 17,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "e3359ffc-2606-4182-91e6-91b8a1a538eb",
    "mode": "custom",
    "name": "Ghoul",
    "type": "undead",
    "src": "MM p.148",
    "cr": "1",
    "hp": 22,
    "AC": 12,
    "actions": [
      {
        "id": "ed6efb35-6a74-4eb1-b01a-4ed596ebe7d5",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 9,
        "toHit": 2,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "99c9aa11-07af-4b93-9f2e-716413b6d002",
        "name": "Claws",
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
    "id": "63ac73ef-e36f-4753-b68b-af3346fca66e",
    "mode": "custom",
    "name": "Giant Ape",
    "type": "beast",
    "src": "MM p.323",
    "cr": "7",
    "hp": 157,
    "AC": 12,
    "actions": [
      {
        "id": "c9d6a7d4-eb2c-4a4e-a5d3-bea687232f86",
        "name": "Rock",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 30.5,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "92893277-6ccb-43a7-871d-e6b88e8ef4a7",
        "name": "Fist x 2",
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
    "id": "6e54dbea-2672-447b-b1cb-ad85f038ab51",
    "mode": "custom",
    "name": "Giant Badger",
    "type": "beast",
    "src": "MM p.323",
    "cr": "1/4",
    "hp": 13,
    "AC": 10,
    "actions": [
      {
        "id": "6dfa476d-fde9-4967-9f85-ee275800aba8",
        "name": "Bite & Claws",
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
    "id": "55737446-8bb6-43f8-9281-0d042b1a2480",
    "mode": "custom",
    "name": "Giant Bat",
    "type": "beast",
    "src": "MM p.323",
    "cr": "1/4",
    "hp": 22,
    "AC": 13,
    "actions": [
      {
        "id": "f3a522e9-9892-4a48-b51b-86551fd297dd",
        "name": "Bite",
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
    "id": "0041fbc1-3402-4702-926c-122d40911ced",
    "mode": "custom",
    "name": "Giant Boar",
    "type": "beast",
    "src": "MM p.323",
    "cr": "2",
    "hp": 42,
    "AC": 12,
    "actions": [
      {
        "id": "946b1b9f-3dea-457c-8d95-d21517a75724",
        "name": "Tusk",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "b37d7b10-b340-4677-97bc-a5f16d72393e",
    "mode": "custom",
    "name": "Giant Centipede",
    "type": "beast",
    "src": "MM p.323",
    "cr": "1/4",
    "hp": 4,
    "AC": 13,
    "actions": [
      {
        "id": "2276a913-098c-429c-9a89-0feabb0fe4b2",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 15,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "0d8c18b7-a4b7-490d-8aee-bad7317cf840",
    "mode": "custom",
    "name": "Giant Constrictor Snake",
    "type": "beast",
    "src": "MM p.324",
    "cr": "2",
    "hp": 60,
    "AC": 12,
    "actions": [
      {
        "id": "e6f4d0c0-359f-4104-8155-0b2e361fc629",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 11,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "977f35f4-1d32-4daf-ab38-dfb69592921a",
        "name": "Constrict",
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
    "id": "4d4e8887-3825-43e7-bf63-8b1a3061c727",
    "mode": "custom",
    "name": "Giant Crab",
    "type": "beast",
    "src": "MM p.324",
    "cr": "1/8",
    "hp": 13,
    "AC": 15,
    "actions": [
      {
        "id": "332bd116-3bd6-4645-a661-5f4bb573211d",
        "name": "Claw",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 4.5,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "142eed0a-39be-4953-96f1-e31b09860519",
    "mode": "custom",
    "name": "Giant Crocodile",
    "type": "beast",
    "src": "MM p.324",
    "cr": "5",
    "hp": 85,
    "AC": 14,
    "actions": [
      {
        "id": "341a8627-4c0f-47e8-89ed-46a65bbacdb4",
        "name": "Bite & Tail",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 35.5,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "c0af16e9-2246-41dd-abd9-e537d31ebffa",
    "mode": "custom",
    "name": "Giant Eagle",
    "type": "beast",
    "src": "MM p.324",
    "cr": "1",
    "hp": 26,
    "AC": 13,
    "actions": [
      {
        "id": "e745b636-c2ac-401c-b77f-cd1d03e274bf",
        "name": "Beak & Talons",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 16.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "18c26e4c-08d0-493b-9e1a-b1c88e175b65",
    "mode": "custom",
    "name": "Giant Elk",
    "type": "beast",
    "src": "MM p.325",
    "cr": "2",
    "hp": 42,
    "AC": 14,
    "actions": [
      {
        "id": "a1a041f7-7443-47fb-ae0d-78d8fc50f4d9",
        "name": "Ram",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 11,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "25f45103-0844-4179-a750-e7b0a5652574",
        "name": "Hooves",
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
    "id": "5ef4d953-0b4a-47bc-bfce-c123facc1bba",
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
    "id": "417d89e4-3884-4ae3-99d2-f14ce3de7763",
    "mode": "custom",
    "name": "Giant Frog",
    "type": "beast",
    "src": "MM p.325",
    "cr": "1/4",
    "hp": 18,
    "AC": 11,
    "actions": [
      {
        "id": "05ffc2cb-105d-4685-82a8-7340c92d746d",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 4.5,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "f7a989e8-3785-4f64-8381-b3be6d46ee98",
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
    "id": "da412937-8494-4132-84f9-46d1f6f26817",
    "mode": "custom",
    "name": "Giant Goat",
    "type": "beast",
    "src": "MM p.326",
    "cr": "1/2",
    "hp": 19,
    "AC": 11,
    "actions": [
      {
        "id": "1ab88d9c-a0cd-457f-a6ba-0a4a0700316e",
        "name": "Ram",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 8,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "8051fd9e-1b3f-48df-841c-27bc07971357",
    "mode": "custom",
    "name": "Giant Hyena",
    "type": "beast",
    "src": "MM p.326",
    "cr": "1",
    "hp": 45,
    "AC": 12,
    "actions": [
      {
        "id": "33ab619d-b444-4b3b-b388-d42b0ba6b673",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "2e079fc2-6f69-442b-9681-2b1a5e520b9e",
    "mode": "custom",
    "name": "Giant Lizard",
    "type": "beast",
    "src": "MM p.326",
    "cr": "1/4",
    "hp": 19,
    "AC": 12,
    "actions": [
      {
        "id": "d85b49a6-13d6-4a6b-b9e8-54f1806d831a",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 6.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "1c793897-a44a-4b04-ae0e-0e459e467308",
    "mode": "custom",
    "name": "Giant Octopus",
    "type": "beast",
    "src": "MM p.326",
    "cr": "1",
    "hp": 52,
    "AC": 11,
    "actions": [
      {
        "id": "e917cb01-1099-4b28-9f26-1533bd0d6ed1",
        "name": "Tentacles",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "aab3bff1-d012-4070-8f89-74878826d445",
    "mode": "custom",
    "name": "Giant Owl",
    "type": "beast",
    "src": "MM p.327",
    "cr": "1/4",
    "hp": 19,
    "AC": 12,
    "actions": [
      {
        "id": "5f3fac38-6995-4b04-a83c-b8bcdbd95507",
        "name": "Talons",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 8,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "a6f46a85-d714-41d9-afbc-cfaf0c7989ec",
    "mode": "custom",
    "name": "Giant Poisonous Snake",
    "type": "beast",
    "src": "MM p.327",
    "cr": "1/4",
    "hp": 11,
    "AC": 14,
    "actions": [
      {
        "id": "85b888e0-1672-476f-a8a9-3ea6ec66fe84",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 17,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "03d50c58-30ed-4e50-af5e-f35012e31190",
    "mode": "custom",
    "name": "Giant Rat",
    "type": "beast",
    "src": "MM p.327",
    "cr": "1/8",
    "hp": 7,
    "AC": 12,
    "actions": [
      {
        "id": "4d203bd9-b84a-4783-9bab-1f173d7bd470",
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
    "id": "5fddf610-1e88-48ae-b206-eb8159cf85f2",
    "mode": "custom",
    "name": "Giant Scorpion",
    "type": "beast",
    "src": "MM p.327",
    "cr": "3",
    "hp": 52,
    "AC": 15,
    "actions": [
      {
        "id": "b17786ef-1e13-48ad-9264-f5447c3c4f3b",
        "name": "Claw x 2 & Sting",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 42.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "3bccf80b-e384-4d50-a774-3c0ab02684e1",
    "mode": "custom",
    "name": "Giant Sea Horse",
    "type": "beast",
    "src": "MM p.328",
    "cr": "1/2",
    "hp": 16,
    "AC": 13,
    "actions": [
      {
        "id": "de069518-d422-4bd9-9d40-41ebf3879d7d",
        "name": "Ram",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 4.5,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "44ed6891-8688-4428-9250-a8e188b7f592",
    "mode": "custom",
    "name": "Giant Shark",
    "type": "beast",
    "src": "MM p.328",
    "cr": "5",
    "hp": 126,
    "AC": 13,
    "actions": [
      {
        "id": "9fb19f1d-b378-450e-88bf-91f812b7600c",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 22.5,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "c412bd7f-2d9a-4a81-a359-36979185ef9c",
    "mode": "custom",
    "name": "Giant Spider",
    "type": "beast",
    "src": "MM p.328",
    "cr": "1",
    "hp": 26,
    "AC": 14,
    "actions": [
      {
        "id": "35642fe1-2dac-47b0-9a7a-2a6c524beb03",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 16.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "e09252a9-c99a-4d70-b234-c30f4e7685b9",
    "mode": "custom",
    "name": "Giant Toad",
    "type": "beast",
    "src": "MM p.329",
    "cr": "1",
    "hp": 39,
    "AC": 11,
    "actions": [
      {
        "id": "7cf359d3-88c8-4521-9f4e-5213b98d9695",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 13,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "89111346-1452-4a80-bfde-ce883db09ea8",
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
    "id": "1bb49bf3-602b-4576-9d0d-e2540d899f76",
    "mode": "custom",
    "name": "Giant Vulture",
    "type": "beast",
    "src": "MM p.329",
    "cr": "1",
    "hp": 22,
    "AC": 10,
    "actions": [
      {
        "id": "8fa5c6c8-3725-4d03-a7f7-241ec79e937f",
        "name": "Beak & Talons",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 16,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "f55ee8db-9f03-4459-8759-7176a6011b70",
    "mode": "custom",
    "name": "Giant Wasp",
    "type": "beast",
    "src": "MM p.329",
    "cr": "1/2",
    "hp": 13,
    "AC": 12,
    "actions": [
      {
        "id": "d8e9df42-46f1-4664-b99c-67f9fab890fb",
        "name": "Sting",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 16,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "3b3b6786-05aa-4f03-b816-67b8b83ccae9",
    "mode": "custom",
    "name": "Giant Weasel",
    "type": "beast",
    "src": "MM p.329",
    "cr": "1/8",
    "hp": 9,
    "AC": 13,
    "actions": [
      {
        "id": "1ca99745-ebca-4142-b220-1339a6ef5608",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 5.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "53e41eca-b162-48c8-9ac9-778e4327d01e",
    "mode": "custom",
    "name": "Giant Wolf Spider",
    "type": "beast",
    "src": "MM p.330",
    "cr": "1/4",
    "hp": 11,
    "AC": 13,
    "actions": [
      {
        "id": "03fe1288-18d5-4823-8349-561896604657",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 11.5,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "54823945-43d9-4f29-a52d-4b4a9ed784c3",
    "mode": "custom",
    "name": "Gibbering Mouther",
    "type": "aberration",
    "src": "MM p.157",
    "cr": "2",
    "hp": 67,
    "AC": 9,
    "actions": [
      {
        "id": "c38f50cf-8af4-41a2-a107-3dbcd0710e98",
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
    "id": "7c068a8d-d84f-4add-a1b9-562d592270e5",
    "mode": "custom",
    "name": "Githyanki Knight",
    "type": "humanoid",
    "src": "MM p.160",
    "cr": "8",
    "hp": 91,
    "AC": 18,
    "actions": [
      {
        "id": "ee4eef5f-a5c7-4047-a926-fd5f10414e5d",
        "name": "Silver Greatsword x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 47,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "59772bc1-260e-46dd-b26a-a899173377f1",
    "mode": "custom",
    "name": "Githyanki Warrior",
    "type": "humanoid",
    "src": "MM p.160",
    "cr": "3",
    "hp": 49,
    "AC": 17,
    "actions": [
      {
        "id": "ea67ef69-dc2e-40a8-8124-4d8b20fc6e77",
        "name": "Greatsword x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 32,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "f23d3796-80de-40ef-bf27-18c0eea8d912",
    "mode": "custom",
    "name": "Githzerai Monk",
    "type": "humanoid",
    "src": "MM p.161",
    "cr": "2",
    "hp": 38,
    "AC": 14,
    "actions": [
      {
        "id": "6299998b-92d1-4ddb-862b-898924d93ab3",
        "name": "Unarmed Strike x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 31,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "b33d2e78-00b9-435c-bf67-c7f2fdd8f8b6",
    "mode": "custom",
    "name": "Githzerai Zerth",
    "type": "humanoid",
    "src": "MM p.161",
    "cr": "6",
    "hp": 84,
    "AC": 17,
    "actions": [
      {
        "id": "2e6961e5-c9d9-4d36-8b23-448eb432f6e8",
        "name": "Unarmed Strike x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 49,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "61092a97-9ffa-4107-8f00-91d9627a1923",
    "mode": "custom",
    "name": "Glabrezu",
    "type": "fiend",
    "src": "MM p.58",
    "cr": "9",
    "hp": 157,
    "AC": 17,
    "actions": [
      {
        "id": "59ee2a11-2f98-44c8-a30c-c2ef0dd5ab7d",
        "name": "Pincer x 2 & Fist x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 46,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "49b17ccd-be63-4451-8c80-dc2a8f0c0354",
    "mode": "custom",
    "name": "Gladiator",
    "type": "humanoid",
    "src": "MM p.346",
    "cr": "5",
    "hp": 112,
    "AC": 16,
    "actions": [
      {
        "id": "2b67872d-0ae1-43b7-bf35-c08b686d2c33",
        "name": "Spear",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 24,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "3fe6f6c1-5679-4587-95a5-bd2d89bfa7a7",
        "name": "Shield Bash",
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
    "id": "b209ee47-6ca4-4b7f-96c3-e5528edd8be0",
    "mode": "custom",
    "name": "Gnoll",
    "type": "humanoid",
    "src": "MM p.163",
    "cr": "1/2",
    "hp": 22,
    "AC": 15,
    "actions": [
      {
        "id": "6aea9664-d6d7-4e46-b157-26017944449e",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 4.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "3f98a6fa-a5e6-4d80-a4ea-4fae20c5f93a",
        "name": "Spear",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 12,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "4164e52a-4e3f-437f-b6e3-3b41079b92ac",
        "name": "Longbow",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 5.5,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "2671c697-fa9d-436c-a9a3-8348a29d131d",
    "mode": "custom",
    "name": "Gnoll Fang of Yeenoghu",
    "type": "fiend",
    "src": "MM p.163",
    "cr": "4",
    "hp": 65,
    "AC": 14,
    "actions": [
      {
        "id": "91fa1151-eaae-4d8f-8503-ad8659ac72e9",
        "name": "Bite & Claw x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 28.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "56d68e78-578a-481b-a179-2fb23ceec318",
    "mode": "custom",
    "name": "Gnoll Pack Lord",
    "type": "humanoid",
    "src": "MM p.163",
    "cr": "2",
    "hp": 49,
    "AC": 15,
    "actions": [
      {
        "id": "4b5173a5-ee54-4eff-a539-9946400838d2",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 5.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "943cc4b2-f395-45da-bf8e-36623d095488",
        "name": "Glaive x 2 & Longbow x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 30,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "5cbc365e-443e-443a-b68f-1eeb914921f1",
    "mode": "custom",
    "name": "Goat",
    "type": "beast",
    "src": "MM p.330",
    "cr": "0",
    "hp": 4,
    "AC": 10,
    "actions": [
      {
        "id": "ab5044ea-61ae-457c-af6f-d40c40b90471",
        "name": "Ram",
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
    "id": "a98ee6f6-2a36-4096-b816-56efe7191d3d",
    "mode": "custom",
    "name": "Goblin",
    "type": "humanoid",
    "src": "MM p.166",
    "cr": "1/4",
    "hp": 7,
    "AC": 15,
    "actions": [
      {
        "id": "17b41cbe-b515-4bf7-9095-0cbc91987f13",
        "name": "Scimitar",
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
        "id": "59296459-64f6-44d1-9ba4-294637971b8e",
        "name": "Shortbow",
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
    "id": "c132609d-a013-4223-8b9e-8377107cff5f",
    "mode": "custom",
    "name": "Goblin Boss",
    "type": "humanoid",
    "src": "MM p.166",
    "cr": "1",
    "hp": 21,
    "AC": 17,
    "actions": [
      {
        "id": "768b300a-5f7c-4d85-b3bb-18d03b9ef03b",
        "name": "Javelin",
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
        "id": "521a8f1f-c9a6-4873-a1ef-a39479e96f27",
        "name": "Scimitar x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 11,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "3dba101b-2473-4cd2-8663-013ddc68c130",
    "mode": "custom",
    "name": "Gold Dragon Wyrmling",
    "type": "dragon",
    "src": "MM p.115",
    "cr": "3",
    "hp": 60,
    "AC": 17,
    "actions": [
      {
        "id": "06463441-912d-411a-bbe5-f886ce89c05f",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 9.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "cb58bcb4-8aa5-44d7-a3af-b447df81164a",
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
    "id": "24dcbab7-5cde-4bd0-a969-88da6e6b97fe",
    "mode": "custom",
    "name": "Gorgon",
    "type": "monstrosity",
    "src": "MM p.171",
    "cr": "5",
    "hp": 114,
    "AC": 19,
    "actions": [
      {
        "id": "744a85f3-78d8-44dd-8338-34436d1c3bbc",
        "name": "Gore",
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
        "id": "35bca693-21ce-4c0a-86ec-25a461cf50fe",
        "name": "Hooves",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 16,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "ccc98fa2-3a46-414d-a4b5-964780737755",
    "mode": "custom",
    "name": "Goristro",
    "type": "fiend",
    "src": "MM p.59",
    "cr": "17",
    "hp": 310,
    "AC": 19,
    "actions": [
      {
        "id": "3cd10104-7c3f-4459-a30e-856d1cf6142a",
        "name": "Gore",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 45.5,
        "toHit": 13,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "05117276-9f81-4489-a65c-110fa46bfd86",
        "name": "Fist x 2 & Hoof",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 64.5,
        "toHit": 13,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "5fc0ad62-0de1-46da-abe6-bc424e33eafc",
    "mode": "custom",
    "name": "Gray Ooze",
    "type": "ooze",
    "src": "MM p.243",
    "cr": "1/2",
    "hp": 22,
    "AC": 8,
    "actions": [
      {
        "id": "608af480-903e-49e8-9633-5db898e26b3d",
        "name": "Pseudopod",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 11.5,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "0a46314a-170e-474f-a15b-6ef54c4c66ea",
    "mode": "custom",
    "name": "Gray Slaad",
    "type": "aberration",
    "src": "MM p.277",
    "cr": "9",
    "hp": 127,
    "AC": 18,
    "actions": [
      {
        "id": "ee552ae0-18a2-4324-b76f-13c225a8d910",
        "name": "Bite (Slaad Form Only)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 6.5,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "08c97524-9bd3-44f9-9c7e-38ec26883d49",
        "name": "Claws (Slaad Form Only)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 8.5,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "437ccef9-5682-4f37-90a8-39eb165069b9",
        "name": "Greatsword x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 20,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "ebe72089-9124-4d8b-84df-1561f2e956e9",
    "mode": "custom",
    "name": "Green Dragon Wyrmling",
    "type": "dragon",
    "src": "MM p.95",
    "cr": "2",
    "hp": 38,
    "AC": 17,
    "actions": [
      {
        "id": "c7e19401-6929-4924-bfb3-e13f6cb0d3d3",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 11,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "5830d004-0acb-48e9-b1f5-befdb562da69",
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
    "id": "2c01e70d-86d3-472e-8db0-45f48cc6b9ed",
    "mode": "custom",
    "name": "Green Hag",
    "type": "fey",
    "src": "MM p.177",
    "cr": "3",
    "hp": 82,
    "AC": 17,
    "actions": [
      {
        "id": "330ffb1c-4259-48f0-b131-a9d07fec7a1b",
        "name": "Claws",
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
    "id": "cc428d7f-0efd-492d-9b7c-f0be2c00c6c6",
    "mode": "custom",
    "name": "Green Slaad",
    "type": "aberration",
    "src": "MM p.277",
    "cr": "8",
    "hp": 127,
    "AC": 16,
    "actions": [
      {
        "id": "3268a3ee-6a0d-4f54-aa74-c3160118bd5e",
        "name": "Bite (Slaad Form Only)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 11,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "15baf97d-4e3c-458a-81ee-1b1ebdd3a1cd",
        "name": "Claw (Slaad Form Only)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7.5,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "37a16ed3-f169-4e00-a1ba-1471e3f4c657",
        "name": "Hurl Flame",
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
        "id": "7da420aa-b021-43e9-8154-48875aec6282",
        "name": "Staff x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 22,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "66d2962c-6b87-4f5f-b551-50c6cc61c1dd",
    "mode": "custom",
    "name": "Grell",
    "type": "aberration",
    "src": "MM p.172",
    "cr": "3",
    "hp": 55,
    "AC": 12,
    "actions": [
      {
        "id": "2105f5e4-9e48-40d1-ae50-7f437673f0b9",
        "name": "Tentacles & Beak",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 14.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "b56662bd-9143-4cee-b53b-7a21d35e0829",
    "mode": "custom",
    "name": "Grick",
    "type": "monstrosity",
    "src": "MM p.173",
    "cr": "2",
    "hp": 27,
    "AC": 14,
    "actions": [
      {
        "id": "6d5628be-6de2-4311-a5e7-81e3744c8d7c",
        "name": "Tentacles & Beak",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 14.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "1805e722-c864-40dc-a684-d07795f0eb9c",
    "mode": "custom",
    "name": "Grick Alpha",
    "type": "monstrosity",
    "src": "MM p.173",
    "cr": "7",
    "hp": 75,
    "AC": 18,
    "actions": [
      {
        "id": "a779c46d-9974-48fe-84fb-157ef532c0b9",
        "name": "Tail & Tentacles & Beak",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 46,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "32ccd37e-2cf7-4fd6-b06f-928d6d4c1ef7",
    "mode": "custom",
    "name": "Griffon",
    "type": "monstrosity",
    "src": "MM p.174",
    "cr": "2",
    "hp": 59,
    "AC": 12,
    "actions": [
      {
        "id": "58367753-f18c-456d-9593-2ff616136ee8",
        "name": "Beak & Claws",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 19.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "1a346ec7-93fd-4f73-a2ad-2571cce43528",
    "mode": "custom",
    "name": "Grimlock",
    "type": "humanoid",
    "src": "MM p.175",
    "cr": "1/4",
    "hp": 11,
    "AC": 11,
    "actions": [
      {
        "id": "642682ad-b302-4d72-b40d-fc6366b10c3f",
        "name": "Spiked Bone Club",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 8,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "c83c232f-60ec-43bf-9b36-c42b68291daa",
    "mode": "custom",
    "name": "Guard",
    "type": "humanoid",
    "src": "MM p.347",
    "cr": "1/8",
    "hp": 11,
    "AC": 16,
    "actions": [
      {
        "id": "81c7e393-f529-416c-bf68-31977ad5c2f9",
        "name": "Spear",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "21d5c106-e6b0-4cd3-93fc-2d39986100a9",
    "mode": "custom",
    "name": "Guardian Naga",
    "type": "monstrosity",
    "src": "MM p.234",
    "cr": "10",
    "hp": 127,
    "AC": 18,
    "actions": [
      {
        "id": "c473170b-ea24-4aed-9057-65621a21bb58",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 53.5,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "cf2fa372-3779-493d-b810-db7f0531c939",
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
    "id": "941a3627-07c6-44c7-9e61-d3fc618a3060",
    "mode": "custom",
    "name": "Gynosphinx",
    "type": "monstrosity",
    "src": "MM p.282",
    "cr": "11",
    "hp": 136,
    "AC": 17,
    "actions": [
      {
        "id": "f2ecf2f9-cc1e-4f4a-99e5-a67388c1b989",
        "name": "Claw x 2",
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
    "id": "f6fc46b6-68bc-4cc0-a20e-44b9b517ca2f",
    "mode": "custom",
    "name": "Half-Ogre (Ogrillon)",
    "type": "giant",
    "src": "MM p.238",
    "cr": "1",
    "hp": 30,
    "AC": 12,
    "actions": [
      {
        "id": "4056a03b-328b-4b6d-91cc-0deacb8512ee",
        "name": "Battleaxe",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 26,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "9ef28b96-9343-467d-a7db-b6f2ede2f7c3",
        "name": "Javelin",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "f414b9ae-17c1-496a-8390-d65a87ef00bd",
    "mode": "custom",
    "name": "Half-Red Dragon Veteran",
    "type": "humanoid",
    "src": "MM p.180",
    "cr": "5",
    "hp": 65,
    "AC": 18,
    "actions": [
      {
        "id": "1fc3746e-a740-48a7-b946-3af0f8b18560",
        "name": "Heavy Crossbow",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 6.5,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "900008d1-22cf-495b-9ac3-c2c11c29c2c2",
        "name": "Fire Breath",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 24.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 2
      },
      {
        "id": "939df6ab-01a5-40be-9961-d99afe4c2c77",
        "name": "Longsword x 2 & Shortsword x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 45,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "5dd1d14d-a6d8-4dc0-b2d9-ab72d23b3092",
    "mode": "custom",
    "name": "Harpy",
    "type": "monstrosity",
    "src": "MM p.181",
    "cr": "1",
    "hp": 38,
    "AC": 11,
    "actions": [
      {
        "id": "5b56d4dc-cbb2-43d1-a10e-3f21f7cecdf6",
        "name": "Claws & Club",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 9.5,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "5273ef22-3914-4655-bac5-7bcc69acc47a",
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
    "id": "6f70d861-b922-4c4f-bb0d-8f63ba8f1a17",
    "mode": "custom",
    "name": "Hell Hound",
    "type": "fiend",
    "src": "MM p.182",
    "cr": "3",
    "hp": 45,
    "AC": 15,
    "actions": [
      {
        "id": "3d1b06ce-ee17-445e-97bb-52c56e4960ab",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 14.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "08aabd1f-7edc-4674-88bf-9d5a318dde0e",
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
    "id": "10e70140-dab7-43af-a0e6-11a1465c8d3f",
    "mode": "custom",
    "name": "Helmed Horror",
    "type": "construct",
    "src": "MM p.183",
    "cr": "4",
    "hp": 60,
    "AC": 20,
    "actions": [
      {
        "id": "780c231e-6ddb-4796-854a-84fbdeaffd3d",
        "name": "Longsword x 2",
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
    "id": "85d54d65-0b97-4936-874c-c832a3c27eb4",
    "mode": "custom",
    "name": "Hezrou",
    "type": "fiend",
    "src": "MM p.60",
    "cr": "8",
    "hp": 136,
    "AC": 16,
    "actions": [
      {
        "id": "b2f417be-7b30-431d-8489-b9bb4be4a672",
        "name": "Bite & Claws x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 37,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "71a5fb98-13e0-42f1-a9b5-bd577cc3722d",
    "mode": "custom",
    "name": "Hill Giant",
    "type": "giant",
    "src": "MM p.155",
    "cr": "5",
    "hp": 105,
    "AC": 13,
    "actions": [
      {
        "id": "4f95176b-92a8-4500-bd91-4882379af592",
        "name": "Rock",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 21.5,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "2e3937ea-1235-4e9f-ba40-5e0415ab3ba1",
        "name": "Greatclub x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 37,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "29f80d77-e71c-4501-badc-d2c205366a2e",
    "mode": "custom",
    "name": "Hippogriff",
    "type": "monstrosity",
    "src": "MM p.184",
    "cr": "1",
    "hp": 19,
    "AC": 11,
    "actions": [
      {
        "id": "7cd43faa-6cf6-45da-b6be-94f81c49276b",
        "name": "Beak & Claws",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 18.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "c62854c5-5b84-472e-bb2d-0821cacec2ac",
    "mode": "custom",
    "name": "Hobgoblin",
    "type": "humanoid",
    "src": "MM p.186",
    "cr": "1/2",
    "hp": 11,
    "AC": 18,
    "actions": [
      {
        "id": "68bdc9b5-7775-4445-96d0-ed457f706d98",
        "name": "Longsword",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 12,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "6d3d6330-9914-4639-b765-d1a05f2e05c6",
        "name": "Longbow",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 5.5,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "46a09fb4-0680-4bd8-9b6e-91003a5ceaa6",
    "mode": "custom",
    "name": "Hobgoblin Captain",
    "type": "humanoid",
    "src": "MM p.186",
    "cr": "3",
    "hp": 39,
    "AC": 17,
    "actions": [
      {
        "id": "b2efdfb8-567e-40c6-beeb-476fc2f57a2c",
        "name": "Javelin",
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
        "id": "8fe49378-bde0-458a-8c53-e70fa9cb9825",
        "name": "Greatsword x 2",
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
    "id": "ac8958e4-f9b9-4572-9a61-5317a15cbd29",
    "mode": "custom",
    "name": "Hobgoblin Warlord",
    "type": "humanoid",
    "src": "MM p.187",
    "cr": "6",
    "hp": 97,
    "AC": 20,
    "actions": [
      {
        "id": "d46c011f-a85b-4710-93ed-5bfd745143f1",
        "name": "Longsword",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 16,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "954190de-f5b9-492b-b3a5-ed22f5bd935d",
        "name": "Shield Bash",
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
        "id": "a67be15e-e278-4600-9151-443b154b1696",
        "name": "Javelin x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 13,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "ca088a3c-708b-4cd5-9119-ad73f6241c40",
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
    "id": "77d0fb11-d30e-43e6-8ec4-5a517c8e13c2",
    "mode": "custom",
    "name": "Hook Horror",
    "type": "monstrosity",
    "src": "MM p.189",
    "cr": "3",
    "hp": 75,
    "AC": 15,
    "actions": [
      {
        "id": "07cf0c1c-de48-4fa3-bafa-8d2b828b911a",
        "name": "Hook x 2",
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
    "id": "b172197e-4533-4904-8624-38ce99c4daf0",
    "mode": "custom",
    "name": "Horned Devil",
    "type": "fiend",
    "src": "MM p.74",
    "cr": "11",
    "hp": 178,
    "AC": 18,
    "actions": [
      {
        "id": "765d2769-3a78-4889-b53e-2bfd5861f4da",
        "name": "Hurl Flame",
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
        "id": "c7ef5496-0251-4709-bd61-c27ada03e59b",
        "name": "Fork x 2 & Tail",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 40.5,
        "toHit": 10,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "1c7b36a8-bd35-4c91-aa4f-b14f92f8d340",
    "mode": "custom",
    "name": "Hunter Shark",
    "type": "beast",
    "src": "MM p.330",
    "cr": "2",
    "hp": 45,
    "AC": 12,
    "actions": [
      {
        "id": "179c6257-7278-450a-996d-725581dc2446",
        "name": "Bite",
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
    "id": "d53336e0-5e29-4353-b280-ab0209e63d19",
    "mode": "custom",
    "name": "Hydra",
    "type": "monstrosity",
    "src": "MM p.190",
    "cr": "8",
    "hp": 172,
    "AC": 15,
    "actions": [
      {
        "id": "e24476bb-931a-4730-b575-c01cbc27c169",
        "name": "Bite",
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
    "id": "5dd0d50d-9a90-4437-a171-5166787fd90e",
    "mode": "custom",
    "name": "Hyena",
    "type": "beast",
    "src": "MM p.331",
    "cr": "0",
    "hp": 5,
    "AC": 11,
    "actions": [
      {
        "id": "f519985a-15dd-4862-b774-67aa5417f65f",
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
    "id": "2f6f9fc3-9816-49ef-9b93-f851f40cc1f4",
    "mode": "custom",
    "name": "Ice Devil",
    "type": "fiend",
    "src": "MM p.75",
    "cr": "14",
    "hp": 180,
    "AC": 18,
    "actions": [
      {
        "id": "a88f759a-9f28-406f-b448-ce01abb549fc",
        "name": "Wall of Ice {@recharge}",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 52.5,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "23211340-757d-499d-8d21-6cbb8bf69021",
        "name": "Bite & Claws & Tail",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 65.5,
        "toHit": 10,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "d23dba29-3138-4c82-8554-61ca78efde94",
    "mode": "custom",
    "name": "Ice Mephit",
    "type": "elemental",
    "src": "MM p.215",
    "cr": "1/2",
    "hp": 21,
    "AC": 11,
    "actions": [
      {
        "id": "c9eb4fb6-623f-40ad-9b46-a974e9297528",
        "name": "Claws",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 6,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "562819c1-6187-4a8a-9651-f72f2402716c",
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
    "id": "f046ef68-2e9e-4ed8-abdc-f3e0b1b7c43b",
    "mode": "custom",
    "name": "Imp",
    "type": "fiend",
    "src": "MM p.76",
    "cr": "1",
    "hp": 10,
    "AC": 13,
    "actions": [
      {
        "id": "f8f18b77-b72f-4105-a3e0-887cd39e1c6a",
        "name": "Sting (Bite in Beast Form)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 16,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "95f45f5a-7c4e-422f-aff2-39d8eb1c8524",
    "mode": "custom",
    "name": "Incubus",
    "type": "fiend",
    "src": "MM p.285",
    "cr": "4",
    "hp": 66,
    "AC": 15,
    "actions": [
      {
        "id": "27903ff8-2252-43c4-b017-16470d502402",
        "name": "Claw (Fiend Form Only)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 6.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "ce3847dd-1b00-4f36-ba61-551ee32fc41a",
        "name": "Draining Kiss",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 32.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "d2e40f05-1562-4169-a46a-52a4094a58cc",
    "mode": "custom",
    "name": "Intellect Devourer",
    "type": "aberration",
    "src": "MM p.191",
    "cr": "2",
    "hp": 21,
    "AC": 12,
    "actions": [
      {
        "id": "0f69b990-fed0-4fa8-a88c-65ec63198af8",
        "name": "Devour Intellect",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 11,
        "toHit": 2,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "d07c7bea-e008-4297-8c19-6db8c92488bf",
        "name": "Claws",
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
    "id": "9449102f-296e-4512-af17-37c95ad69e13",
    "mode": "custom",
    "name": "Invisible Stalker",
    "type": "elemental",
    "src": "MM p.192",
    "cr": "6",
    "hp": 104,
    "AC": 14,
    "actions": [
      {
        "id": "55536544-cf36-467c-a9ca-d54ccfd3a74a",
        "name": "Slam x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 20,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "38624976-c038-4eaa-acc3-343ed288aa73",
    "mode": "custom",
    "name": "Iron Golem",
    "type": "construct",
    "src": "MM p.170",
    "cr": "16",
    "hp": 210,
    "AC": 20,
    "actions": [
      {
        "id": "8f67bbc1-dd15-47c6-9b11-800d9e3a6857",
        "name": "Slam",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 20.5,
        "toHit": 13,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "4443587a-e648-47ba-9bee-2da4968d09a4",
        "name": "Sword",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 23.5,
        "toHit": 13,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "f612643a-9fdc-4c24-93c7-983d10b71c3f",
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
    "id": "6a6b7446-0e23-4bd5-bd4c-9a1e0f93b5a2",
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
    "id": "52045efe-898b-4995-b61a-e67289a0bfd3",
    "mode": "custom",
    "name": "Jackalwere",
    "type": "humanoid",
    "src": "MM p.193",
    "cr": "1/2",
    "hp": 18,
    "AC": 12,
    "actions": [
      {
        "id": "0bf5fd6c-a0d6-4b83-b8b6-684df758f8f7",
        "name": "Bite (Jackal or Hybrid Form Only)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 4.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "d36908ac-2b57-4f1c-9328-17bba86c73f7",
        "name": "Scimitar (Human or Hybrid Form Only)",
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
    "id": "ce816f87-302f-437d-8cef-243a00283e79",
    "mode": "custom",
    "name": "Kenku",
    "type": "humanoid",
    "src": "MM p.194",
    "cr": "1/4",
    "hp": 13,
    "AC": 13,
    "actions": [
      {
        "id": "3e364b81-2252-459c-b628-3fdff81eed73",
        "name": "Shortsword",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 6.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "4edd8383-e1f0-4b5a-b2a1-727117082796",
        "name": "Shortbow",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 6.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "9e226da2-3dbd-428f-bc7b-4241f3a13fcf",
    "mode": "custom",
    "name": "Killer Whale",
    "type": "beast",
    "src": "MM p.331",
    "cr": "3",
    "hp": 90,
    "AC": 12,
    "actions": [
      {
        "id": "086b2f78-cb69-4a44-b1c0-97c3d1847ac3",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 21.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "9cef1b43-5700-41d3-9c76-ea3d05699ec1",
    "mode": "custom",
    "name": "Knight",
    "type": "humanoid",
    "src": "MM p.347",
    "cr": "3",
    "hp": 52,
    "AC": 18,
    "actions": [
      {
        "id": "b8f8f038-a8db-44e0-be54-8acc31ae46cc",
        "name": "Greatsword",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "edef9247-5a49-44d2-b812-0f86374d29db",
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
    "id": "5ba734ba-ecd2-4387-a69b-a816a3c8b0a0",
    "mode": "custom",
    "name": "Kobold",
    "type": "humanoid",
    "src": "MM p.195",
    "cr": "1/8",
    "hp": 5,
    "AC": 12,
    "actions": [
      {
        "id": "735eeb1b-2db0-41fd-bfd5-88917772cbe5",
        "name": "Dagger",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 4.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "c7db5412-5cfa-4204-93f6-7d85d7cb55b7",
        "name": "Sling",
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
    "id": "e1561319-8c40-4682-b0a4-978bacf6718d",
    "mode": "custom",
    "name": "Kraken",
    "type": "monstrosity",
    "src": "MM p.197",
    "cr": "23",
    "hp": 472,
    "AC": 18,
    "actions": [
      {
        "id": "409ff9f6-9100-4e5c-9015-330c64e949e4",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 65.5,
        "toHit": 17,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "36303bac-7a7b-4ee9-9c0d-f2a84739e96f",
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
        "id": "939d5995-6fa3-46bd-8fa8-eceac573ea9c",
        "name": "Lightning Storm",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 22,
        "toHit": 13,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "edef7fe0-23ad-48fb-b4a2-cd55de7b8f9d",
        "name": "Lightning Storm",
        "type": "atk",
        "actionSlot": 2,
        "freq": "at will",
        "condition": "default",
        "dpr": 22,
        "toHit": 13,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "44c69e98-4923-42b5-9628-744231ce137e",
        "name": "Tentacle x 3",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 61.5,
        "toHit": 17,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "1f21d8c0-76d4-4cdf-8139-35fd263cb6fe",
    "mode": "custom",
    "name": "Kuo-toa",
    "type": "humanoid",
    "src": "MM p.199",
    "cr": "1/4",
    "hp": 18,
    "AC": 13,
    "actions": [
      {
        "id": "08bb813f-a0ba-49f5-bee9-c8fdd38da6cd",
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
        "id": "538a5b3a-db14-4713-9957-6d6cba18d693",
        "name": "Spear",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "28bcabcd-63ca-4268-8c79-63aa74461594",
    "mode": "custom",
    "name": "Kuo-toa Archpriest",
    "type": "humanoid",
    "src": "MM p.200",
    "cr": "6",
    "hp": 97,
    "AC": 13,
    "actions": [
      {
        "id": "27cb6571-0024-4899-b226-b51eaefcfd6c",
        "name": "Scepter",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 20.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "56f0b393-aef7-438a-a14a-907588090925",
        "name": "Unarmed Strike",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 5.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "af91e3fa-8d08-4d69-b48f-c198a609e3d3",
    "mode": "custom",
    "name": "Kuo-toa Monitor",
    "type": "humanoid",
    "src": "MM p.198",
    "cr": "3",
    "hp": 65,
    "AC": 13,
    "actions": [
      {
        "id": "2e39f7f9-759a-4125-b8e2-30bc222f45f0",
        "name": "Bite & Unarmed Strike x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 22.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "6bf140fe-342a-4e5c-9d89-0b17fe1e5320",
    "mode": "custom",
    "name": "Kuo-toa Whip",
    "type": "humanoid",
    "src": "MM p.200",
    "cr": "1",
    "hp": 65,
    "AC": 11,
    "actions": [
      {
        "id": "2f81bc61-5e65-4a19-8bfd-e11474292ece",
        "name": "Bite & Pincer Staff",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "526f667f-1730-44ca-ab63-2c4672623290",
    "mode": "custom",
    "name": "Lamia",
    "type": "monstrosity",
    "src": "MM p.201",
    "cr": "4",
    "hp": 97,
    "AC": 13,
    "actions": [
      {
        "id": "44bedb15-94cb-4214-bb14-a1c54ac5d47c",
        "name": "Claws & Dagger",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 19.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "767e1929-e7fd-40b7-90a4-337477546874",
    "mode": "custom",
    "name": "Lemure",
    "type": "fiend",
    "src": "MM p.76",
    "cr": "0",
    "hp": 13,
    "AC": 7,
    "actions": [
      {
        "id": "6d02d55e-d936-4b47-844e-2c91635af969",
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
    "id": "767c98d3-1b86-4bd2-8e99-eace3d42e3ef",
    "mode": "custom",
    "name": "Lich",
    "type": "undead",
    "src": "MM p.202",
    "cr": "21",
    "hp": 135,
    "AC": 17,
    "actions": [
      {
        "id": "5e1cb455-2765-4356-b069-c53641a1d11e",
        "name": "Paralyzing Touch",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10.5,
        "toHit": 12,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "a8c84273-173d-41bc-8ab9-9802d968d2cc",
        "name": "Paralyzing Touch",
        "type": "atk",
        "actionSlot": 2,
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
    "id": "78baaf96-8224-4c72-84d5-cea2c311e438",
    "mode": "custom",
    "name": "Lion",
    "type": "beast",
    "src": "MM p.331",
    "cr": "1",
    "hp": 26,
    "AC": 12,
    "actions": [
      {
        "id": "adde5fc8-9635-4cc3-a168-51b97b2157fc",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "e8af12a8-e20a-43b5-acec-17a0af724948",
        "name": "Claw",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 6.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "2ab71128-ba3c-4624-9bf6-58e5aab4002c",
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
    "id": "38c07406-d0f1-45e6-92cf-0d340b15fcaf",
    "mode": "custom",
    "name": "Lizard King",
    "type": "humanoid",
    "src": "MM p.205",
    "cr": "4",
    "hp": 78,
    "AC": 15,
    "actions": [
      {
        "id": "d373f6fd-fd2c-4b32-a20e-422e2dfde80e",
        "name": "Bite & Claws & Trident x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 40,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "c9471d5e-8b43-41b3-9111-eaba30de5583",
    "mode": "custom",
    "name": "Lizard Queen",
    "type": "humanoid",
    "src": "MM p.205",
    "cr": "4",
    "hp": 78,
    "AC": 15,
    "actions": [
      {
        "id": "4686aa07-9ba6-4952-8965-27146cdba939",
        "name": "Bite & Claws & Trident x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 40,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "96f3e784-f147-4ca5-bc4a-011c9be5fe9d",
    "mode": "custom",
    "name": "Lizardfolk",
    "type": "humanoid",
    "src": "MM p.204",
    "cr": "1/2",
    "hp": 22,
    "AC": 15,
    "actions": [
      {
        "id": "46f2f38b-2bd1-47ef-bc2f-41ea133d9fbf",
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
        "id": "5ba5d6e0-b886-4086-bb7a-aa09f1b7b904",
        "name": "Heavy Club",
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
        "id": "6b9c79a2-c425-4daa-be7f-10d73a25ba04",
        "name": "Javelin",
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
        "id": "cf4fabf8-108f-43be-9f59-3369f7915b3b",
        "name": "Spiked Shield",
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
    "id": "37c4c927-816c-4344-8210-904fb7aeb535",
    "mode": "custom",
    "name": "Lizardfolk Shaman",
    "type": "humanoid",
    "src": "MM p.205",
    "cr": "2",
    "hp": 27,
    "AC": 13,
    "actions": [
      {
        "id": "b05ab0a7-e20a-470b-95f2-c0038bd72d5a",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 13,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "a0c02fcd-bf8c-4e79-b730-a70452bcbed6",
        "name": "Claws (Lizardfolk Form Only)",
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
    "id": "6364c013-818b-4098-b397-4f6ad3bfb58a",
    "mode": "custom",
    "name": "Mage",
    "type": "humanoid",
    "src": "MM p.347",
    "cr": "6",
    "hp": 40,
    "AC": 12,
    "actions": [
      {
        "id": "784b29e8-c3d0-494a-b442-dc12d69c8095",
        "name": "Dagger",
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
    "id": "393b7b9a-3b34-4443-ace4-d76e3440fa74",
    "mode": "custom",
    "name": "Magma Mephit",
    "type": "elemental",
    "src": "MM p.216",
    "cr": "1/2",
    "hp": 22,
    "AC": 11,
    "actions": [
      {
        "id": "a2c73e31-1369-46a6-a873-92db8efabc5e",
        "name": "Claws",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 6,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "d4bc1eac-4795-4e0d-8386-e41c92c6fcb9",
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
    "id": "69b6cdb3-6d8f-4c3b-a1c9-91a4ad83b302",
    "mode": "custom",
    "name": "Magmin",
    "type": "elemental",
    "src": "MM p.212",
    "cr": "1/2",
    "hp": 9,
    "AC": 14,
    "actions": [
      {
        "id": "8174e697-7259-4fff-9fec-02bc82ed99cd",
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
    "id": "a1072c58-6cd3-4203-9541-a756be382495",
    "mode": "custom",
    "name": "Mammoth",
    "type": "beast",
    "src": "MM p.332",
    "cr": "6",
    "hp": 126,
    "AC": 13,
    "actions": [
      {
        "id": "b01355d8-e686-4682-bfde-358660c60152",
        "name": "Gore",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 25,
        "toHit": 10,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "51c9151d-e8dd-4fa7-8772-66802965a87b",
        "name": "Stomp",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 29,
        "toHit": 10,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "e2e5edb0-449d-4e7e-a180-b92f6d88b60c",
    "mode": "custom",
    "name": "Manes",
    "type": "fiend",
    "src": "MM p.60",
    "cr": "1/8",
    "hp": 9,
    "AC": 9,
    "actions": [
      {
        "id": "60a288d6-e89d-44de-91c2-5562b7d4c893",
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
    "id": "a6cafc4d-29e7-4325-ad3a-66e4a05317b1",
    "mode": "custom",
    "name": "Manticore",
    "type": "monstrosity",
    "src": "MM p.213",
    "cr": "3",
    "hp": 68,
    "AC": 14,
    "actions": [
      {
        "id": "987b26ff-71b1-4521-b1fd-2b25f29f9a1d",
        "name": "Bite & Claw x 2 & Tail Spike x 3",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 43,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "14ee352f-0198-459c-b664-771b4b5a4fb2",
    "mode": "custom",
    "name": "Marid",
    "type": "elemental",
    "src": "MM p.146",
    "cr": "11",
    "hp": 229,
    "AC": 17,
    "actions": [
      {
        "id": "41bf0751-572f-4aea-a513-cb2d70e60fd2",
        "name": "Water Jet",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 21,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 2
      },
      {
        "id": "8a241372-0e57-4bc5-9e08-2b2aff903029",
        "name": "Trident x 2",
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
    "id": "92a63810-82ff-43cd-9ec0-6c092d890eda",
    "mode": "custom",
    "name": "Marilith",
    "type": "fiend",
    "src": "MM p.61",
    "cr": "16",
    "hp": 189,
    "AC": 18,
    "actions": [
      {
        "id": "19bfaf7a-c07b-4903-b2c4-72a14ee01949",
        "name": "Longsword x 6 & Tail",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 93,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "05f66a75-9464-47b8-8360-3968436bcb24",
    "mode": "custom",
    "name": "Mastiff",
    "type": "beast",
    "src": "MM p.332",
    "cr": "1/8",
    "hp": 5,
    "AC": 12,
    "actions": [
      {
        "id": "ed4895ef-d7a3-4a95-b39b-a9f274c22d98",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 4.5,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "ed3c1f2b-1870-4ed9-9273-230733ede368",
    "mode": "custom",
    "name": "Medusa",
    "type": "monstrosity",
    "src": "MM p.214",
    "cr": "6",
    "hp": 127,
    "AC": 15,
    "actions": [
      {
        "id": "abaaeb32-df0f-4e80-aae1-a06d02cf4c8f",
        "name": "Snake Hair & Shortsword x 2 & Longbow x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 56.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "ebc894cf-c3e4-4169-b935-659aa4abe059",
    "mode": "custom",
    "name": "Merfolk",
    "type": "humanoid",
    "src": "MM p.218",
    "cr": "1/8",
    "hp": 11,
    "AC": 11,
    "actions": [
      {
        "id": "a3ce5250-faad-49da-860a-aa93a093f57e",
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
    "id": "7a1f270f-d155-4beb-8be1-7c15fd1c0744",
    "mode": "custom",
    "name": "Merrow",
    "type": "monstrosity",
    "src": "MM p.219",
    "cr": "2",
    "hp": 45,
    "AC": 13,
    "actions": [
      {
        "id": "ef10c40b-9311-4087-9f5c-7d11b0e62b4c",
        "name": "Bite & Claws & Harpoon",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 28.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "cf61b445-33f8-4936-916e-8c66e6760530",
    "mode": "custom",
    "name": "Mezzoloth",
    "type": "fiend",
    "src": "MM p.313",
    "cr": "5",
    "hp": 75,
    "AC": 18,
    "actions": [
      {
        "id": "a61ff4c5-0428-4557-858b-95df6e01e627",
        "name": "Claws & Trident",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 25,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "dabb88de-ea57-448f-9417-a461ed5c9bbf",
    "mode": "custom",
    "name": "Mimic",
    "type": "monstrosity",
    "src": "MM p.220",
    "cr": "2",
    "hp": 58,
    "AC": 12,
    "actions": [
      {
        "id": "8aaaeec6-2076-4061-b5cd-dc404c7c8529",
        "name": "Pseudopod",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "8c181fdc-e5ab-46b3-b78d-f7b14df31006",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 12,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "768783cd-32fd-4290-95de-20a003584f0b",
    "mode": "custom",
    "name": "Mind Flayer",
    "type": "aberration",
    "src": "MM p.222",
    "cr": "7",
    "hp": 71,
    "AC": 15,
    "actions": [
      {
        "id": "ddf3219d-eedd-4bbd-9bd4-ce2c9ba55dd9",
        "name": "Tentacles",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 15,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "3debe8d7-ea0a-45c2-8ea5-4a84c4f763a0",
        "name": "Extract Brain",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 55,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "201dffdf-795b-416b-ae72-f0e3b24abec7",
        "name": "Mind Blast",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 22,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "2d0d3fb2-2fab-442d-9892-b43fe8afb888",
    "mode": "custom",
    "name": "Mind Flayer Arcanist",
    "type": "aberration",
    "src": "MM p.222",
    "cr": "8",
    "hp": 71,
    "AC": 15,
    "actions": [
      {
        "id": "b4e89d3b-5891-4407-9cda-f3cca6924e2e",
        "name": "Tentacles",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 15,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "53a11b20-b893-4fb1-88f3-5d907a262d73",
        "name": "Extract Brain",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 55,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "ba210900-666b-409e-bf99-399d7726179e",
        "name": "Mind Blast",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 22,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "9be5b832-4386-4dcb-8d32-ea37a0cd9e60",
    "mode": "custom",
    "name": "Minotaur",
    "type": "monstrosity",
    "src": "MM p.223",
    "cr": "3",
    "hp": 76,
    "AC": 14,
    "actions": [
      {
        "id": "ff2ec610-e5b8-490f-ac5a-99eea30e1b23",
        "name": "Greataxe",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 17,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "41ed07d1-4f4d-4719-ae66-cb10ac8b7427",
        "name": "Gore",
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
    "id": "56365a31-c28b-4bc1-987d-fccbaf0d7a1b",
    "mode": "custom",
    "name": "Minotaur Skeleton",
    "type": "undead",
    "src": "MM p.273",
    "cr": "2",
    "hp": 67,
    "AC": 12,
    "actions": [
      {
        "id": "384ac487-e135-49ad-8d43-ebe1bf1d147d",
        "name": "Greataxe",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 17,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "74cc151a-f292-45e4-a782-780dcbaa650e",
        "name": "Gore",
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
    "id": "dc7806bc-ad59-40e4-ba80-af98df54cb32",
    "mode": "custom",
    "name": "Monodrone",
    "type": "construct",
    "src": "MM p.224",
    "cr": "1/8",
    "hp": 5,
    "AC": 15,
    "actions": [
      {
        "id": "27c8ddec-0cd9-480a-884e-bd377b821375",
        "name": "Dagger",
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
        "id": "5f9b6912-455b-4d0f-85dd-5f6d2dab5880",
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
    "id": "48486f0d-b733-4695-80d7-77de79ea27a5",
    "mode": "custom",
    "name": "Mud Mephit",
    "type": "elemental",
    "src": "MM p.216",
    "cr": "1/4",
    "hp": 27,
    "AC": 11,
    "actions": [
      {
        "id": "b10c6c25-c827-4929-836c-76b0037e63a2",
        "name": "Fists",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 4.5,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "5b7c1f98-7df2-4d2f-8e37-3d25d2e35f5e",
    "mode": "custom",
    "name": "Mule",
    "type": "beast",
    "src": "MM p.333",
    "cr": "1/8",
    "hp": 11,
    "AC": 10,
    "actions": [
      {
        "id": "a660c467-e66b-4589-9557-0717999774d6",
        "name": "Hooves",
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
    "id": "e99d9b01-9211-48be-b866-32486a9ca429",
    "mode": "custom",
    "name": "Mummy",
    "type": "undead",
    "src": "MM p.228",
    "cr": "3",
    "hp": 58,
    "AC": 11,
    "actions": [
      {
        "id": "5e805820-0e1d-4f13-8cb5-cd7172ef7c45",
        "name": "Rotting Fist",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 20.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "b037ee17-3de1-4716-818f-722f02966ac6",
    "mode": "custom",
    "name": "Mummy Lord",
    "type": "undead",
    "src": "MM p.229",
    "cr": "15",
    "hp": 97,
    "AC": 17,
    "actions": [
      {
        "id": "1b7301fd-00c0-4b95-a48a-57f3c9c7a45b",
        "name": "Rotting Fist",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 35.5,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "b47dd5f9-b55c-480d-8744-2bd9780615f5",
    "mode": "custom",
    "name": "Myconid Adult",
    "type": "plant",
    "src": "MM p.232",
    "cr": "1/2",
    "hp": 22,
    "AC": 12,
    "actions": [
      {
        "id": "9c5bcecf-53c6-495c-8cbc-b1cb049ea2cf",
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
    "id": "c33036a6-7fc4-4a97-9ccd-03485da2f270",
    "mode": "custom",
    "name": "Myconid Sovereign",
    "type": "plant",
    "src": "MM p.232",
    "cr": "2",
    "hp": 60,
    "AC": 13,
    "actions": [
      {
        "id": "63666ebc-e119-4bde-b067-039cc73f0454",
        "name": "Fist",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 16,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "0e893267-50e3-4258-a2fd-9f5196f22b1f",
    "mode": "custom",
    "name": "Myconid Sprout",
    "type": "plant",
    "src": "MM p.230",
    "cr": "0",
    "hp": 7,
    "AC": 10,
    "actions": [
      {
        "id": "565d432d-fc65-48dd-b84e-1a4c52241038",
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
    "id": "2e3380a0-91a6-424c-8af1-bfbe77c84a95",
    "mode": "custom",
    "name": "Nalfeshnee",
    "type": "fiend",
    "src": "MM p.62",
    "cr": "13",
    "hp": 184,
    "AC": 18,
    "actions": [
      {
        "id": "20f717e5-9d09-4f32-ae68-5a788f6d0b29",
        "name": "Bite & Claw x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 63.5,
        "toHit": 10,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "2a6f3102-6205-452d-821c-5c228aac75af",
    "mode": "custom",
    "name": "Needle Blight",
    "type": "plant",
    "src": "MM p.32",
    "cr": "1/4",
    "hp": 11,
    "AC": 12,
    "actions": [
      {
        "id": "e090ecab-86ae-43e7-ad2d-288b67d27aaa",
        "name": "Claws",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 6,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "1b6ad025-31c6-408b-b4f1-87078b5d71b8",
        "name": "Needles",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 8,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "8b01b340-c208-478b-8fc8-000e721f4a41",
    "mode": "custom",
    "name": "Night Hag",
    "type": "fiend",
    "src": "MM p.178",
    "cr": "5",
    "hp": 112,
    "AC": 17,
    "actions": [
      {
        "id": "2a93961b-0570-4d25-8ba3-e6dbce6274c3",
        "name": "Claws (Hag Form Only)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 13,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "d3e1faa4-6370-4592-aaea-05ac867b9ee1",
    "mode": "custom",
    "name": "Nightmare",
    "type": "fiend",
    "src": "MM p.235",
    "cr": "3",
    "hp": 68,
    "AC": 13,
    "actions": [
      {
        "id": "9d0d1776-1f71-4c75-a25c-9d7f64d07f63",
        "name": "Hooves",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 20,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "960fc001-964c-4fcd-afaf-932442649ade",
    "mode": "custom",
    "name": "Noble",
    "type": "humanoid",
    "src": "MM p.348",
    "cr": "1/8",
    "hp": 9,
    "AC": 15,
    "actions": [
      {
        "id": "199f0f33-427b-4844-82da-2884de9482f9",
        "name": "Rapier",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 5.5,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "4b66b8c1-c163-4ee2-91f6-190db04b8510",
    "mode": "custom",
    "name": "Nothic",
    "type": "aberration",
    "src": "MM p.236",
    "cr": "2",
    "hp": 45,
    "AC": 15,
    "actions": [
      {
        "id": "29d1b081-8f1f-4fd3-9958-481fe5c5150e",
        "name": "Rotting Gaze",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10.5,
        "toHit": 2,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "fb2592e3-6ce3-493f-85be-898028c1fcef",
        "name": "Claw x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 13,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "79899e9f-ecba-4d19-8f2f-196613a0547b",
    "mode": "custom",
    "name": "Nycaloth",
    "type": "fiend",
    "src": "MM p.314",
    "cr": "9",
    "hp": 123,
    "AC": 18,
    "actions": [
      {
        "id": "f5b5f32c-2e63-4831-b255-7651ae65b19a",
        "name": "Claw",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 17,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "690c0d8b-fc2e-473d-9b51-9db6aba66919",
        "name": "Greataxe",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 18,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "931a644a-3e99-4430-b4a2-747c550d0023",
        "name": "Teleport",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 0,
        "toHit": 0,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "14f3b545-3b83-4b5e-a019-abc5f8a6a1dd",
    "mode": "custom",
    "name": "Ochre Jelly",
    "type": "ooze",
    "src": "MM p.243",
    "cr": "2",
    "hp": 45,
    "AC": 8,
    "actions": [
      {
        "id": "837e8a62-24f5-4925-82ca-4d510472ce4c",
        "name": "Pseudopod",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 12.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "f7fc7d16-a6ff-4695-851d-fc230fe94820",
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
    "id": "d720cb22-2901-4219-a632-40fb667d9050",
    "mode": "custom",
    "name": "Ogre",
    "type": "giant",
    "src": "MM p.237",
    "cr": "2",
    "hp": 59,
    "AC": 11,
    "actions": [
      {
        "id": "d2600c30-d662-4e3c-b44b-84fe688155a3",
        "name": "Greatclub",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 13,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "022d268f-7c6f-4752-bfeb-9bdd8a106ff8",
        "name": "Javelin",
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
    "id": "5e09a866-da33-4f82-b16b-81643d8b23cc",
    "mode": "custom",
    "name": "Ogre Zombie",
    "type": "undead",
    "src": "MM p.316",
    "cr": "2",
    "hp": 85,
    "AC": 8,
    "actions": [
      {
        "id": "3d03d54b-43ec-402c-b974-712d33aa31b3",
        "name": "Morningstar",
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
    "id": "796d0936-091a-4be1-884f-b143076d4f31",
    "mode": "custom",
    "name": "Oni",
    "type": "giant",
    "src": "MM p.239",
    "cr": "7",
    "hp": 110,
    "AC": 16,
    "actions": [
      {
        "id": "4fc672fb-ef68-4075-9e3e-e63defc21c18",
        "name": "Claw (Oni Form Only)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 8.5,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "a67ba541-31d9-40af-adc9-bf5acafc0c20",
        "name": "Glaive x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 49,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "05f2d617-bffb-410b-9184-2aa93da5e33e",
    "mode": "custom",
    "name": "Orc",
    "type": "humanoid",
    "src": "MM p.246",
    "cr": "1/2",
    "hp": 15,
    "AC": 13,
    "actions": [
      {
        "id": "e2086b3e-7e38-4d1d-ab76-7152c1e08cb5",
        "name": "Greataxe",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 9.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "47a95e80-21d8-4956-a9e4-97da427c7555",
        "name": "Javelin",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 6.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "cef41780-3bb5-45f4-839b-2f5448e66960",
    "mode": "custom",
    "name": "Orc Eye of Gruumsh",
    "type": "humanoid",
    "src": "MM p.247",
    "cr": "2",
    "hp": 45,
    "AC": 16,
    "actions": [
      {
        "id": "564766b3-ca52-4839-97c7-676a5ef77617",
        "name": "Spear",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 12,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "95ca9c15-b5df-4664-92e8-625c42f09716",
    "mode": "custom",
    "name": "Orc War Chief",
    "type": "humanoid",
    "src": "MM p.246",
    "cr": "4",
    "hp": 93,
    "AC": 16,
    "actions": [
      {
        "id": "933af31f-f59a-4894-b25d-e90ffdb974d6",
        "name": "Greataxe x 2 & Spear x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 80,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "69e4df64-a91e-4420-bd58-29bc0b9b32a6",
    "mode": "custom",
    "name": "Orog",
    "type": "humanoid",
    "src": "MM p.247",
    "cr": "2",
    "hp": 42,
    "AC": 18,
    "actions": [
      {
        "id": "a8c220f9-6ba8-44a8-a098-8306b82e3f0e",
        "name": "Javelin",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "75a049e6-4c36-4d65-bc51-822ca78a8c9d",
        "name": "Greataxe x 2",
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
    "id": "743f64ba-9a56-40d5-805e-b2ed5beed877",
    "mode": "custom",
    "name": "Otyugh",
    "type": "aberration",
    "src": "MM p.248",
    "cr": "5",
    "hp": 114,
    "AC": 14,
    "actions": [
      {
        "id": "17f022c0-7887-4805-a147-3dbdefe8f92d",
        "name": "Tentacle Slam",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "6a806acd-3907-48d8-9f84-a15f44becbe9",
        "name": "Bite & Tentacle x 2",
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
    "id": "f76966e9-c243-402b-bde5-4b331a9fb44b",
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
    "id": "534546b7-e0ff-432e-9938-ee0ebaa1048d",
    "mode": "custom",
    "name": "Owlbear",
    "type": "monstrosity",
    "src": "MM p.249",
    "cr": "3",
    "hp": 59,
    "AC": 13,
    "actions": [
      {
        "id": "6783e543-3333-4ab5-b89d-c14d4a34060e",
        "name": "Beak & Claws",
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
    "id": "82ad0148-723e-4cbf-8bea-df3dcf827e53",
    "mode": "custom",
    "name": "Panther",
    "type": "beast",
    "src": "MM p.333",
    "cr": "1/4",
    "hp": 13,
    "AC": 12,
    "actions": [
      {
        "id": "09474615-c59e-45fe-b886-82337f4a529b",
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
        "id": "0d488c6a-fd3b-4292-b920-00c788ca4c2e",
        "name": "Claw",
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
    "id": "d4d7b632-4647-4292-b49d-61e1f7914fd2",
    "mode": "custom",
    "name": "Pegasus",
    "type": "celestial",
    "src": "MM p.250",
    "cr": "2",
    "hp": 59,
    "AC": 12,
    "actions": [
      {
        "id": "4be137d6-c03c-4e97-a5e8-25b44a57b83e",
        "name": "Hooves",
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
    "id": "f04af3f5-b2b5-42c9-a841-5f4616d3e8c3",
    "mode": "custom",
    "name": "Pentadrone",
    "type": "construct",
    "src": "MM p.226",
    "cr": "2",
    "hp": 32,
    "AC": 16,
    "actions": [
      {
        "id": "e7714478-1bbb-4d44-a70f-88b3b855f100",
        "name": "Arm x 5",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 27.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "3f3e2365-8f81-4cda-bbe9-3fc87ba68ed7",
    "mode": "custom",
    "name": "Peryton",
    "type": "monstrosity",
    "src": "MM p.251",
    "cr": "2",
    "hp": 33,
    "AC": 13,
    "actions": [
      {
        "id": "9b5e4591-5f47-4276-9b5b-067e598d0496",
        "name": "Talons",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 8,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "b5d5dc5c-75bb-48e1-bb92-e059c170471e",
        "name": "Gore",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "5262b049-14ce-4486-bfa2-8acf3347bcbc",
    "mode": "custom",
    "name": "Phase Spider",
    "type": "monstrosity",
    "src": "MM p.334",
    "cr": "3",
    "hp": 32,
    "AC": 13,
    "actions": [
      {
        "id": "4840f99e-6ce9-4d31-a683-ee6feafb568a",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 25.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "63403e4f-865f-4f36-8a0c-5bb3128253ae",
    "mode": "custom",
    "name": "Piercer",
    "type": "monstrosity",
    "src": "MM p.252",
    "cr": "1/2",
    "hp": 22,
    "AC": 15,
    "actions": [
      {
        "id": "55dbacac-670c-42c3-9e49-3a914c415960",
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
    "id": "96f3d715-0db4-4f9b-a70e-3086d330a29a",
    "mode": "custom",
    "name": "Pit Fiend",
    "type": "fiend",
    "src": "MM p.77",
    "cr": "20",
    "hp": 300,
    "AC": 19,
    "actions": [
      {
        "id": "2e7b7970-1103-4322-bf9f-1d6ce9f2f92f",
        "name": "Bite & Claw & Mace & Tail",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 120.5,
        "toHit": 14,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "0589dd0f-196f-4bad-94bf-3ded8c650e87",
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
    "id": "55916595-0c3b-406e-889b-770daf0d125b",
    "mode": "custom",
    "name": "Planetar",
    "type": "celestial",
    "src": "MM p.17",
    "cr": "16",
    "hp": 200,
    "AC": 19,
    "actions": [
      {
        "id": "cca788a1-24c6-4ec1-83cf-4d0b0d450dcf",
        "name": "Greatsword",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 43.5,
        "toHit": 12,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "415d0828-b935-40cd-ac6d-df38d8d1c87e",
    "mode": "custom",
    "name": "Plesiosaurus",
    "type": "beast",
    "src": "MM p.80",
    "cr": "2",
    "hp": 68,
    "AC": 13,
    "actions": [
      {
        "id": "4d28bda4-5d37-4df3-8af7-e29da036ff8e",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 14.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "9cf0f91f-236b-450e-afc8-e6fa3c181c82",
    "mode": "custom",
    "name": "Poisonous Snake",
    "type": "beast",
    "src": "MM p.334",
    "cr": "1/8",
    "hp": 2,
    "AC": 13,
    "actions": [
      {
        "id": "671c375d-f920-442c-9a6d-671ff884263d",
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
    "id": "745ebcdd-18f3-4f89-acea-c6855aaa1938",
    "mode": "custom",
    "name": "Polar Bear",
    "type": "beast",
    "src": "MM p.334",
    "cr": "2",
    "hp": 42,
    "AC": 12,
    "actions": [
      {
        "id": "1422a08c-e90b-4698-a97f-282faf97fe40",
        "name": "Bite & Claws",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 21.5,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "98463a43-a202-4604-ac42-0e338c5827b0",
    "mode": "custom",
    "name": "Poltergeist",
    "type": "undead",
    "src": "MM p.279",
    "cr": "2",
    "hp": 22,
    "AC": 12,
    "actions": [
      {
        "id": "c37e5f12-e9cc-4824-a3af-e1dda8cd31f0",
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
        "id": "7ace6b1b-18f8-4c05-89b4-431a2c5c245f",
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
    "id": "98d5c941-556d-4d68-a8f7-ed0eea30d548",
    "mode": "custom",
    "name": "Pony",
    "type": "beast",
    "src": "MM p.335",
    "cr": "1/8",
    "hp": 11,
    "AC": 10,
    "actions": [
      {
        "id": "059efc81-6f96-4c7b-81dc-87f69b730c36",
        "name": "Hooves",
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
    "id": "77a74527-2255-4bfd-a644-19af96cba664",
    "mode": "custom",
    "name": "Priest",
    "type": "humanoid",
    "src": "MM p.348",
    "cr": "2",
    "hp": 27,
    "AC": 13,
    "actions": [
      {
        "id": "35e0c272-b43d-4f6a-9140-ff30de40abcf",
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
    "id": "8a596547-6cb9-4ebc-b90c-9cff74807e3e",
    "mode": "custom",
    "name": "Pseudodragon",
    "type": "dragon",
    "src": "MM p.254",
    "cr": "1/4",
    "hp": 7,
    "AC": 13,
    "actions": [
      {
        "id": "262f7547-2a59-4fe9-8bed-8dd8462e1e57",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 4.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "ec001354-c94f-4437-9e2b-4c27a6e63e20",
        "name": "Sting",
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
    "id": "d0baeb50-7e4b-432f-99c5-81dc86047169",
    "mode": "custom",
    "name": "Pteranodon",
    "type": "beast",
    "src": "MM p.80",
    "cr": "1/4",
    "hp": 13,
    "AC": 13,
    "actions": [
      {
        "id": "005d62df-5f63-484c-8017-d2055987d46b",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 6,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "6b8338c3-7c74-4fde-a084-ee47bd6c022d",
    "mode": "custom",
    "name": "Purple Worm",
    "type": "monstrosity",
    "src": "MM p.255",
    "cr": "15",
    "hp": 247,
    "AC": 18,
    "actions": [
      {
        "id": "6a8e6e05-b0ce-43f5-8839-6109661ae750",
        "name": "Tail Stinger",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 61.5,
        "toHit": 14,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "1a038215-d0eb-4c2f-be6f-8d21ad44549f",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 43.5,
        "toHit": 14,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "0a8fe163-f79c-419b-aff0-6c682afa2edb",
    "mode": "custom",
    "name": "Quadrone",
    "type": "construct",
    "src": "MM p.226",
    "cr": "1",
    "hp": 22,
    "AC": 16,
    "actions": [
      {
        "id": "0171d2bf-c48a-4609-8ff6-913d91ce37e5",
        "name": "Fist x 2 & Shortbow x 4",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 29,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "b8098256-4d88-4da5-a5cd-e399d6b4a02d",
    "mode": "custom",
    "name": "Quaggoth",
    "type": "humanoid",
    "src": "MM p.256",
    "cr": "2",
    "hp": 45,
    "AC": 13,
    "actions": [
      {
        "id": "da8f1ddf-b60c-4538-b7ad-d1909963b666",
        "name": "Claw x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 13,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "542a083a-ced6-4066-887d-056a4fb466bf",
    "mode": "custom",
    "name": "Quaggoth Spore Servant",
    "type": "plant",
    "src": "MM p.230",
    "cr": "1",
    "hp": 45,
    "AC": 13,
    "actions": [
      {
        "id": "1914c455-8c07-4310-b3f3-9cf3f5877115",
        "name": "Claw x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 13,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "3c236dab-29e0-4dd1-8623-80c2a6d0627f",
    "mode": "custom",
    "name": "Quaggoth Thonot",
    "type": "humanoid",
    "src": "MM p.256",
    "cr": "3",
    "hp": 45,
    "AC": 13,
    "actions": [
      {
        "id": "2209b4b1-ddec-4e42-a5ab-1d031d04e3ac",
        "name": "Claw x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 13,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "a0a0c13f-5ccc-440b-862d-6cd71e49d5c5",
    "mode": "custom",
    "name": "Quasit",
    "type": "fiend",
    "src": "MM p.63",
    "cr": "1",
    "hp": 7,
    "AC": 13,
    "actions": [
      {
        "id": "57841394-6972-41b1-a694-1dbd0c2e3dea",
        "name": "Claw (Bite in Beast Form)",
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
    "id": "e6555a35-9648-48ae-b5cd-369fcd6078e6",
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
    "id": "32f2ce1b-8d0f-4f42-a7f1-534a4239e39d",
    "mode": "custom",
    "name": "Rakshasa",
    "type": "fiend",
    "src": "MM p.257",
    "cr": "13",
    "hp": 110,
    "AC": 16,
    "actions": [
      {
        "id": "d76ca05f-81c4-4443-98ae-a46f19c7959d",
        "name": "Claw x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 18,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "cc2b52f9-a732-4eb7-8a41-66f9af7eb802",
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
    "id": "d5de086f-f0dd-4538-ac30-c84b2ec2b011",
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
    "id": "16e49c6d-6104-4840-aef4-b2e778502e31",
    "mode": "custom",
    "name": "Red Dragon Wyrmling",
    "type": "dragon",
    "src": "MM p.98",
    "cr": "4",
    "hp": 75,
    "AC": 17,
    "actions": [
      {
        "id": "52852c2f-d42b-4d50-a326-a220a693fd11",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 13,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "56fa25c8-51d4-4498-b8ac-8048f8b777fb",
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
    "id": "0a0e41b7-9cd5-4bfd-9f60-a90a2ce92326",
    "mode": "custom",
    "name": "Red Slaad",
    "type": "aberration",
    "src": "MM p.276",
    "cr": "5",
    "hp": 93,
    "AC": 14,
    "actions": [
      {
        "id": "eb38ea40-d751-4a5f-b7d5-2faa1d672982",
        "name": "Bite & Claw x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 23,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "b7c32a64-e9ae-4991-830d-5d66dbb32393",
    "mode": "custom",
    "name": "Reef Shark",
    "type": "beast",
    "src": "MM p.336",
    "cr": "1/2",
    "hp": 22,
    "AC": 12,
    "actions": [
      {
        "id": "8570a9db-4b78-4510-8ca1-6d4dcf1b0325",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 6.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "43f8f9d2-09b3-4e49-b432-07ea1e470adf",
    "mode": "custom",
    "name": "Remorhaz",
    "type": "monstrosity",
    "src": "MM p.258",
    "cr": "11",
    "hp": 195,
    "AC": 17,
    "actions": [
      {
        "id": "4d060777-e006-4229-a5f8-00b26f1c3b87",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 50.5,
        "toHit": 11,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "dd1a2841-9974-47e7-ab7a-ea3942544691",
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
    "id": "e36b1136-9241-42d3-b4da-714758a94c92",
    "mode": "custom",
    "name": "Revenant",
    "type": "undead",
    "src": "MM p.259",
    "cr": "5",
    "hp": 136,
    "AC": 13,
    "actions": [
      {
        "id": "b02dbb93-bb22-47ef-b361-f045db7539aa",
        "name": "Fist x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 50,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "69977337-0191-42ed-a411-3ec48bc758e9",
    "mode": "custom",
    "name": "Rhinoceros",
    "type": "beast",
    "src": "MM p.336",
    "cr": "2",
    "hp": 45,
    "AC": 11,
    "actions": [
      {
        "id": "110fbac8-07ce-4891-ae61-5d0e6d5a4a19",
        "name": "Gore",
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
    "id": "0561bc0a-15ef-447a-92f0-992afe5867c2",
    "mode": "custom",
    "name": "Riding Horse",
    "type": "beast",
    "src": "MM p.336",
    "cr": "1/4",
    "hp": 13,
    "AC": 10,
    "actions": [
      {
        "id": "b480ea22-e0e7-4a4c-bdf1-ce4eeedac34b",
        "name": "Hooves",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 8,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "093f0010-f0bb-4f18-8ec3-46a75a0b4023",
    "mode": "custom",
    "name": "Roc",
    "type": "monstrosity",
    "src": "MM p.260",
    "cr": "11",
    "hp": 248,
    "AC": 15,
    "actions": [
      {
        "id": "f2f45163-66d1-49f9-9180-79f0abb2136a",
        "name": "Beak & Talons",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 50,
        "toHit": 13,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "ad78200a-7df2-45a2-9ab9-9fc2e4fed2dc",
    "mode": "custom",
    "name": "Roper",
    "type": "monstrosity",
    "src": "MM p.261",
    "cr": "5",
    "hp": 93,
    "AC": 20,
    "actions": [
      {
        "id": "de32e134-f203-4b22-a9a3-59a01230ff2b",
        "name": "Bite & Tendril x 4",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 22,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "a4fef78a-ed37-4149-908f-94f153be43da",
    "mode": "custom",
    "name": "Rug of Smothering",
    "type": "construct",
    "src": "MM p.20",
    "cr": "2",
    "hp": 33,
    "AC": 12,
    "actions": [
      {
        "id": "77edaa04-7755-483c-932a-29361daefde2",
        "name": "Smother",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "1b5cbe2e-6639-4874-978c-e0bf7c635e55",
    "mode": "custom",
    "name": "Rust Monster",
    "type": "monstrosity",
    "src": "MM p.262",
    "cr": "1/2",
    "hp": 27,
    "AC": 14,
    "actions": [
      {
        "id": "4f30da78-1743-451e-8fac-e69875ae4cc0",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 5.5,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "6ac483b7-0a13-49d2-90fc-4b4df1132cb9",
    "mode": "custom",
    "name": "Saber-Toothed Tiger",
    "type": "beast",
    "src": "MM p.336",
    "cr": "2",
    "hp": 52,
    "AC": 12,
    "actions": [
      {
        "id": "23fb24b9-20de-4cfe-ba9f-30dd84fee2be",
        "name": "Bite",
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
        "id": "5c124e01-f9bd-4a1d-bb47-0119c6492e96",
        "name": "Claw",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 12,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "daf7b989-c1b6-4274-ace8-454a1645e135",
    "mode": "custom",
    "name": "Sahuagin",
    "type": "humanoid",
    "src": "MM p.263",
    "cr": "1/2",
    "hp": 22,
    "AC": 12,
    "actions": [
      {
        "id": "e69f1274-9f62-485d-8d66-6dd210d565af",
        "name": "Bite & Claws & Spear",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 17,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "734c22ff-b9f1-45c7-8093-25936ae24377",
    "mode": "custom",
    "name": "Sahuagin Baron",
    "type": "humanoid",
    "src": "MM p.264",
    "cr": "5",
    "hp": 76,
    "AC": 16,
    "actions": [
      {
        "id": "a800854d-4a9e-479a-96c9-1ac0f2c3744e",
        "name": "Bite & Claws x 2 & Trident x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 79,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "63701bd4-a4e2-4963-be29-2ab1cc8911d7",
    "mode": "custom",
    "name": "Sahuagin Priestess",
    "type": "humanoid",
    "src": "MM p.264",
    "cr": "2",
    "hp": 33,
    "AC": 12,
    "actions": [
      {
        "id": "732a08f6-d6a7-4298-a776-b67b1e0090d0",
        "name": "Bite & Claws",
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
    "id": "cf5dfbc5-4129-45d1-a941-23f800fd7896",
    "mode": "custom",
    "name": "Salamander",
    "type": "elemental",
    "src": "MM p.266",
    "cr": "5",
    "hp": 90,
    "AC": 15,
    "actions": [
      {
        "id": "f9500725-1efd-448f-8fee-2f30369bdfbb",
        "name": "Spear & Tail",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 45.5,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "a548caaa-fcfa-4bb2-a494-682deeed0787",
    "mode": "custom",
    "name": "Satyr",
    "type": "fey",
    "src": "MM p.267",
    "cr": "1/2",
    "hp": 31,
    "AC": 14,
    "actions": [
      {
        "id": "c09b5bd8-1e08-46e2-8694-0de08575ad26",
        "name": "Ram",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 6,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "cca6d247-9801-4d07-b5dd-e8d75ee64a00",
        "name": "Shortsword",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 6.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "5d012ac2-b37d-427f-a543-149956f70f61",
        "name": "Shortbow",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 6.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "d028e231-a1fb-40dd-b414-55148e18ee9d",
    "mode": "custom",
    "name": "Scarecrow",
    "type": "construct",
    "src": "MM p.268",
    "cr": "1",
    "hp": 36,
    "AC": 11,
    "actions": [
      {
        "id": "cfb06ebf-d3b1-4eda-a815-e00518bcf97d",
        "name": "Claw x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 12,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "c4fa361f-7965-4648-a973-b81bb09f3c23",
    "mode": "custom",
    "name": "Scorpion",
    "type": "beast",
    "src": "MM p.337",
    "cr": "0",
    "hp": 1,
    "AC": 11,
    "actions": [
      {
        "id": "6e7ca442-648e-43f9-8305-5e2efce510d6",
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
    "id": "d900d814-c6dd-4cbe-8c2d-39ddd72d99e1",
    "mode": "custom",
    "name": "Scout",
    "type": "humanoid",
    "src": "MM p.349",
    "cr": "1/2",
    "hp": 16,
    "AC": 13,
    "actions": [
      {
        "id": "98b23dc1-4a53-4763-b95f-b003d01f7561",
        "name": "Shortsword",
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
        "id": "530ef63d-01f7-4dd3-8821-2360935b6b20",
        "name": "Longbow",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 6.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "68b2c933-6745-4d38-8e4b-618f1890ffb6",
    "mode": "custom",
    "name": "Sea Hag",
    "type": "fey",
    "src": "MM p.179",
    "cr": "2",
    "hp": 52,
    "AC": 14,
    "actions": [
      {
        "id": "48b522fe-b092-4197-9a4e-6a15a7507871",
        "name": "Claws",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "69340f93-c0d1-41bd-80c4-8e40272c6816",
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
    "id": "85feab16-971b-44bb-b34c-2876e7e3328d",
    "mode": "custom",
    "name": "Shadow",
    "type": "undead",
    "src": "MM p.269",
    "cr": "1/2",
    "hp": 16,
    "AC": 12,
    "actions": [
      {
        "id": "59450efc-41c9-46ac-a8a2-9525e5680079",
        "name": "Strength Drain",
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
    "id": "ae0bd78f-e017-4039-916c-79c4ccdb2e6c",
    "mode": "custom",
    "name": "Shadow Demon",
    "type": "fiend",
    "src": "MM p.64",
    "cr": "4",
    "hp": 66,
    "AC": 13,
    "actions": [
      {
        "id": "3889b6ce-d24d-4412-a62c-68767b06036c",
        "name": "Claws",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 27,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "995a706e-a370-4266-bb75-4414117c8bd2",
    "mode": "custom",
    "name": "Shambling Mound",
    "type": "plant",
    "src": "MM p.270",
    "cr": "5",
    "hp": 136,
    "AC": 15,
    "actions": [
      {
        "id": "165d7300-0463-4e86-b995-498b737fd1f1",
        "name": "Engulf",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 13,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "92e50e04-8227-4225-9ff0-e0f578334d3c",
        "name": "Slam x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 26,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "c8619ec3-ffbc-4426-82f5-73d32e2647c8",
    "mode": "custom",
    "name": "Shield Guardian",
    "type": "construct",
    "src": "MM p.271",
    "cr": "7",
    "hp": 142,
    "AC": 17,
    "actions": [
      {
        "id": "a41cd172-e27f-4e97-906b-0db6852d1d60",
        "name": "Fist x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 22,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "b8db536e-8650-46bf-9854-813aec2ad696",
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
    "id": "1db5aee7-7980-4744-a363-9c6bd711b481",
    "mode": "custom",
    "name": "Silver Dragon Wyrmling",
    "type": "dragon",
    "src": "MM p.118",
    "cr": "2",
    "hp": 45,
    "AC": 17,
    "actions": [
      {
        "id": "985a1c61-ab60-4d31-8ad7-7add708b044e",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 9.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "f6e53f9b-dcd0-465f-b42f-c585a49a966c",
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
    "id": "04618ac6-d0c5-4b03-afd1-29ef09df5896",
    "mode": "custom",
    "name": "Skeleton",
    "type": "undead",
    "src": "MM p.272",
    "cr": "1/4",
    "hp": 13,
    "AC": 13,
    "actions": [
      {
        "id": "c5297ca5-1f30-4836-ab9d-88aacd03a09f",
        "name": "Shortsword",
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
        "id": "74ade6f8-7de2-459e-a3cd-3e290559721d",
        "name": "Shortbow",
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
    "id": "bb894a8c-f6a5-4f5a-a413-bc6feae7f3ad",
    "mode": "custom",
    "name": "Slaad Tadpole",
    "type": "aberration",
    "src": "MM p.276",
    "cr": "1/8",
    "hp": 10,
    "AC": 12,
    "actions": [
      {
        "id": "4f0f1ffb-a4dd-47c3-94fc-4a6bee0c60b0",
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
    "id": "48ad329d-d7ad-4712-b513-83d1aa3bad2c",
    "mode": "custom",
    "name": "Smoke Mephit",
    "type": "elemental",
    "src": "MM p.217",
    "cr": "1/4",
    "hp": 22,
    "AC": 12,
    "actions": [
      {
        "id": "058d4672-860e-4c54-b9cd-8c8b2b81712a",
        "name": "Claws",
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
    "id": "919209c0-7d15-49ae-80f8-335340310c55",
    "mode": "custom",
    "name": "Solar",
    "type": "celestial",
    "src": "MM p.18",
    "cr": "21",
    "hp": 243,
    "AC": 21,
    "actions": [
      {
        "id": "1f00dae8-4f88-48f3-9f37-97ef8fce64a9",
        "name": "Slaying Longbow",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 42,
        "toHit": 13,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "1e8932a7-197b-467d-8786-08366d96415e",
        "name": "Greatsword x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 98,
        "toHit": 15,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "779419ba-11b2-4a11-bb91-91d708cf22d6",
    "mode": "custom",
    "name": "Spectator",
    "type": "aberration",
    "src": "MM p.30",
    "cr": "3",
    "hp": 39,
    "AC": 14,
    "actions": [
      {
        "id": "a37b1d6d-d666-46b2-b722-bf34f61f9417",
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
    "id": "892c7766-d7d6-40fa-823b-9a8d1c297b8f",
    "mode": "custom",
    "name": "Specter",
    "type": "undead",
    "src": "MM p.279",
    "cr": "1",
    "hp": 22,
    "AC": 12,
    "actions": [
      {
        "id": "de5530fc-3bdf-4f7b-803a-bb5e691a8f6d",
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
    "id": "361d0f09-1cae-44e3-b50d-97ea83ca59eb",
    "mode": "custom",
    "name": "Spider",
    "type": "beast",
    "src": "MM p.337",
    "cr": "0",
    "hp": 1,
    "AC": 12,
    "actions": [
      {
        "id": "079f20fe-6879-4ca6-82ce-a05a46dd719b",
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
    "id": "ad8cc049-02f2-4944-a148-d2476f3f9b6d",
    "mode": "custom",
    "name": "Spined Devil",
    "type": "fiend",
    "src": "MM p.78",
    "cr": "2",
    "hp": 22,
    "AC": 13,
    "actions": [
      {
        "id": "960ffaa0-cb48-494f-9eed-47d7f67de28f",
        "name": "Bite & Fork & Tail Spine x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 24.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "149491f8-4f34-4593-901c-c821a697eda0",
    "mode": "custom",
    "name": "Spirit Naga",
    "type": "monstrosity",
    "src": "MM p.234",
    "cr": "8",
    "hp": 75,
    "AC": 15,
    "actions": [
      {
        "id": "d264020a-4c60-4ef7-b59e-2f5d4da85bbe",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 39,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "9c66c68f-3866-4a57-bdb9-4de651ab83e1",
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
    "id": "a82de5a3-4308-475a-b963-41d0c4cba7da",
    "mode": "custom",
    "name": "Spy",
    "type": "humanoid",
    "src": "MM p.349",
    "cr": "1",
    "hp": 27,
    "AC": 12,
    "actions": [
      {
        "id": "d7e68127-d808-4060-a49d-66cce6a8e0c6",
        "name": "Shortsword",
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
        "id": "f8acc50f-682a-4cb7-aeb4-61b76258c861",
        "name": "Hand Crossbow",
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
    "id": "553dc32b-f805-4a11-a2c6-2c06b32b35b5",
    "mode": "custom",
    "name": "Steam Mephit",
    "type": "elemental",
    "src": "MM p.217",
    "cr": "1/4",
    "hp": 21,
    "AC": 10,
    "actions": [
      {
        "id": "6a7f85a5-fcbd-4923-8f54-ce4b3cc17d29",
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
        "id": "1f55dbdd-d518-472a-9248-7a23bfe27d4d",
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
    "id": "e60ae451-2bdc-4838-9085-fc30e23ddf88",
    "mode": "custom",
    "name": "Stirge",
    "type": "beast",
    "src": "MM p.284",
    "cr": "1/8",
    "hp": 2,
    "AC": 14,
    "actions": [
      {
        "id": "4585dba7-1ecf-47c7-bb78-2a8c3e04eaf6",
        "name": "Blood Drain",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 5.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "0d47b2de-a50a-4c76-9323-0b3291db0241",
    "mode": "custom",
    "name": "Stone Giant",
    "type": "giant",
    "src": "MM p.156",
    "cr": "7",
    "hp": 126,
    "AC": 17,
    "actions": [
      {
        "id": "9f959c8c-e3bf-4205-9ba4-f748e9e11242",
        "name": "Rock",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 28,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "9885f48d-c973-47e8-b0f0-001d927b671d",
        "name": "Greatclub x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 39,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "f528471e-bcaf-4642-b3b5-5bb17a183eec",
    "mode": "custom",
    "name": "Stone Golem",
    "type": "construct",
    "src": "MM p.170",
    "cr": "10",
    "hp": 178,
    "AC": 17,
    "actions": [
      {
        "id": "181ec701-1b47-4981-a88b-4135d69cbab0",
        "name": "Slam x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 39,
        "toHit": 10,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "e174dd08-0676-40fb-9beb-611949210ca0",
    "mode": "custom",
    "name": "Storm Giant",
    "type": "giant",
    "src": "MM p.156",
    "cr": "13",
    "hp": 230,
    "AC": 16,
    "actions": [
      {
        "id": "1526a756-5dc2-440c-8e37-e06b5cfead88",
        "name": "Rock",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 35,
        "toHit": 14,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "6a1f9fb7-9b4f-49cc-b232-e57617384324",
        "name": "Lightning Strike",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 54,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "181d3cf1-a062-44df-9595-3a4cebbc3ab3",
        "name": "Greatsword x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 60,
        "toHit": 14,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "28b285ab-5f32-4505-83d8-3f09a6dd2d31",
    "mode": "custom",
    "name": "Succubus",
    "type": "fiend",
    "src": "MM p.285",
    "cr": "4",
    "hp": 66,
    "AC": 15,
    "actions": [
      {
        "id": "8c30df84-0d5e-4e63-b47e-84f78dd94b0a",
        "name": "Claw (Fiend Form Only)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 6.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "98e63091-fb37-475c-b846-d46966278702",
        "name": "Draining Kiss",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 32.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "77d65f4e-5b4e-4bc6-aecc-143b94d6178c",
    "mode": "custom",
    "name": "Swarm of Bats",
    "type": "beast",
    "src": "MM p.337",
    "cr": "1/4",
    "hp": 22,
    "AC": 12,
    "actions": [
      {
        "id": "9208b3e3-ba8c-4801-b342-acc2736adba0",
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
    "id": "11b34766-a996-4836-ab35-82f4c07c2fc0",
    "mode": "custom",
    "name": "Swarm of Beetles",
    "type": "beast",
    "src": "MM p.338",
    "cr": "1/2",
    "hp": 22,
    "AC": 12,
    "actions": [
      {
        "id": "768cb633-d3bc-4cda-b6ab-89d050d7c3e1",
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
    "id": "4bb805c4-2971-444d-acb5-1deee1e43050",
    "mode": "custom",
    "name": "Swarm of Centipedes",
    "type": "beast",
    "src": "MM p.338",
    "cr": "1/2",
    "hp": 22,
    "AC": 12,
    "actions": [
      {
        "id": "22e5a52b-a8b1-46ae-9477-b6376c6d4a85",
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
    "id": "0a43ec3d-c431-4e25-b5ab-a272bd025d34",
    "mode": "custom",
    "name": "Swarm of Insects",
    "type": "beast",
    "src": "MM p.338",
    "cr": "1/2",
    "hp": 22,
    "AC": 12,
    "actions": [
      {
        "id": "d6277f94-21cb-49d9-a85d-06e46e2711e7",
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
    "id": "9278a3cc-da9b-4d10-815b-d36efc7a4e49",
    "mode": "custom",
    "name": "Swarm of Poisonous Snakes",
    "type": "beast",
    "src": "MM p.338",
    "cr": "2",
    "hp": 36,
    "AC": 14,
    "actions": [
      {
        "id": "1ccb9a8c-893a-4157-b0b8-e00847077217",
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
    "id": "bf36aada-d1e5-4f0e-a12b-1a3c3914d49c",
    "mode": "custom",
    "name": "Swarm of Quippers",
    "type": "beast",
    "src": "MM p.338",
    "cr": "1",
    "hp": 28,
    "AC": 13,
    "actions": [
      {
        "id": "d6de9a92-f23e-47cc-8e2c-4d2cf85a1188",
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
    "id": "674dca8b-4f22-41a9-9c33-bf1d7517a26b",
    "mode": "custom",
    "name": "Swarm of Rats",
    "type": "beast",
    "src": "MM p.339",
    "cr": "1/4",
    "hp": 24,
    "AC": 10,
    "actions": [
      {
        "id": "5ad11741-3ba6-437a-a67f-6fd3b670ddd7",
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
    "id": "057221a1-fa13-48b5-8c70-5bbf845120d9",
    "mode": "custom",
    "name": "Swarm of Ravens",
    "type": "beast",
    "src": "MM p.339",
    "cr": "1/4",
    "hp": 24,
    "AC": 12,
    "actions": [
      {
        "id": "18e412d7-2808-47e1-9663-a5e02bda2c0d",
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
    "id": "ac59caf5-7b50-4903-81b4-43578f3e3f4d",
    "mode": "custom",
    "name": "Swarm of Spiders",
    "type": "beast",
    "src": "MM p.338",
    "cr": "1/2",
    "hp": 22,
    "AC": 12,
    "actions": [
      {
        "id": "a239ad1a-2f0b-416c-af3a-b9f936abcba5",
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
    "id": "d7131094-72f9-4e64-9403-0a12bc13fd06",
    "mode": "custom",
    "name": "Swarm of Wasps",
    "type": "beast",
    "src": "MM p.338",
    "cr": "1/2",
    "hp": 22,
    "AC": 12,
    "actions": [
      {
        "id": "96308fdb-4a6b-4d35-b27a-054ec55b205e",
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
    "id": "953df334-be8b-4122-95c5-f60c85aa1ac3",
    "mode": "custom",
    "name": "Tarrasque",
    "type": "monstrosity",
    "src": "MM p.286",
    "cr": "30",
    "hp": 676,
    "AC": 25,
    "actions": [
      {
        "id": "66d29a50-e482-4bfb-bc1e-5f460e9dd21f",
        "name": "Swallow",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 56,
        "toHit": 10,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "d949ec9a-3c3c-4efb-b1d0-fdfa04944f53",
        "name": "Bite & Claw x 2 & Horns & Tail",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 148,
        "toHit": 19,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "b9fdb47a-5263-46c8-b338-d08fcb084adc",
    "mode": "custom",
    "name": "Thri-kreen",
    "type": "humanoid",
    "src": "MM p.288",
    "cr": "1",
    "hp": 33,
    "AC": 15,
    "actions": [
      {
        "id": "2b20fd5a-2193-4977-a7f9-91b87033567a",
        "name": "Bite & Claws",
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
    "id": "8da999bc-c6b9-453e-93de-11221f2ccbd8",
    "mode": "custom",
    "name": "Thug",
    "type": "humanoid",
    "src": "MM p.350",
    "cr": "1/2",
    "hp": 32,
    "AC": 11,
    "actions": [
      {
        "id": "c1dfa1cd-2160-4784-a674-1da9cca60239",
        "name": "Mace",
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
        "id": "51339a87-620b-458e-adc4-1e62e091abca",
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
    "id": "52a57b38-fa99-4a5f-ae9a-988486fdbe56",
    "mode": "custom",
    "name": "Tiger",
    "type": "beast",
    "src": "MM p.339",
    "cr": "1",
    "hp": 37,
    "AC": 12,
    "actions": [
      {
        "id": "0eedebd4-37b0-4e7c-b6a3-03e3cc095445",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 8.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "6a618c51-6db3-4637-bd10-6e27f7b97737",
        "name": "Claw",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "1604711e-b3a6-40f6-a6ef-744da5cb572c",
    "mode": "custom",
    "name": "Treant",
    "type": "plant",
    "src": "MM p.289",
    "cr": "9",
    "hp": 138,
    "AC": 16,
    "actions": [
      {
        "id": "201ad2ff-6efa-450a-b44a-db9a33954e9e",
        "name": "Rock",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 28,
        "toHit": 10,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "3f86093a-da85-45f2-aba6-e8db338aea85",
        "name": "Slam x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 33,
        "toHit": 10,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "b43e48dd-e901-4953-b79b-f8609b2c79f0",
    "mode": "custom",
    "name": "Tribal Warrior",
    "type": "humanoid",
    "src": "MM p.350",
    "cr": "1/8",
    "hp": 11,
    "AC": 12,
    "actions": [
      {
        "id": "3bfd4f42-aca1-47e7-bffa-81f2e87bd81c",
        "name": "Spear",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "4183e1af-4d69-44a0-887d-5eac117f7101",
    "mode": "custom",
    "name": "Triceratops",
    "type": "beast",
    "src": "MM p.80",
    "cr": "5",
    "hp": 95,
    "AC": 13,
    "actions": [
      {
        "id": "6ea36138-2f10-4bf9-843d-0a76955b7592",
        "name": "Gore",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 24,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "c920d102-02ad-41fe-8dae-e5da9d0cf40e",
        "name": "Stomp",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 22.5,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "bdf3e681-3262-4ec6-9966-f5e2e879434c",
    "mode": "custom",
    "name": "Tridrone",
    "type": "construct",
    "src": "MM p.225",
    "cr": "1/2",
    "hp": 16,
    "AC": 15,
    "actions": [
      {
        "id": "c93eb4b0-218a-486e-bf7a-95bced8d1dc0",
        "name": "Fist x 3 & Javelin x 3",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 24,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "019f2b67-aa98-49dd-8fe6-30a243c877ab",
    "mode": "custom",
    "name": "Troglodyte",
    "type": "humanoid",
    "src": "MM p.290",
    "cr": "1/4",
    "hp": 13,
    "AC": 11,
    "actions": [
      {
        "id": "4d7d1c9f-05fa-4383-9109-ea374bb55d44",
        "name": "Bite & Claw x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 13.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "4f724228-356b-44be-8e49-dec2e9fe8a2c",
    "mode": "custom",
    "name": "Troll",
    "type": "giant",
    "src": "MM p.291",
    "cr": "5",
    "hp": 84,
    "AC": 15,
    "actions": [
      {
        "id": "095c9743-3d62-4431-9247-9bc5fe08bf64",
        "name": "Bite & Claw x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 29.5,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "2965f7cc-f4de-4bc0-b4ff-c08cb3f16781",
    "mode": "custom",
    "name": "Twig Blight",
    "type": "plant",
    "src": "MM p.32",
    "cr": "1/8",
    "hp": 4,
    "AC": 13,
    "actions": [
      {
        "id": "73b98478-c317-47df-aa37-1d440e1697a1",
        "name": "Claws",
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
    "id": "4c896294-4b4d-48f0-bcc3-1e8f40675d48",
    "mode": "custom",
    "name": "Tyrannosaurus Rex",
    "type": "beast",
    "src": "MM p.80",
    "cr": "8",
    "hp": 136,
    "AC": 13,
    "actions": [
      {
        "id": "06c469b7-90ab-4173-b2a9-68f67eee0421",
        "name": "Bite & Tail",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 53.5,
        "toHit": 10,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "cb9926c2-c95e-487f-90fa-c0591bd5dc1e",
    "mode": "custom",
    "name": "Ultroloth",
    "type": "fiend",
    "src": "MM p.314",
    "cr": "13",
    "hp": 153,
    "AC": 19,
    "actions": [
      {
        "id": "d1f75d77-4134-4236-adac-f49cfc2cb23d",
        "name": "Longsword",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 16,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "38d35170-7348-4102-bac8-4d925f98b7c4",
    "mode": "custom",
    "name": "Umber Hulk",
    "type": "monstrosity",
    "src": "MM p.292",
    "cr": "5",
    "hp": 93,
    "AC": 18,
    "actions": [
      {
        "id": "bd0cb132-fa2f-4581-8cd8-4e61f6bd7f5a",
        "name": "Claw x 2 & Mandibles",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 33,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "4b6d1e97-d3f0-4667-b772-eb7742ccbcd8",
    "mode": "custom",
    "name": "Unicorn",
    "type": "celestial",
    "src": "MM p.294",
    "cr": "5",
    "hp": 67,
    "AC": 12,
    "actions": [
      {
        "id": "ff52e433-7fa1-4abc-8afc-3d9f3f0eb318",
        "name": "Hooves & Horn",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 19.5,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "2b663478-6aa1-4cab-822c-75a164ef9114",
    "mode": "custom",
    "name": "Vampire",
    "type": "undead",
    "src": "MM p.297",
    "cr": "13",
    "hp": 144,
    "AC": 16,
    "actions": [
      {
        "id": "754d76a0-e77a-4df5-90aa-05d80807d56f",
        "name": "Unarmed Strike (Vampire Form Only)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 8.5,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "5d04aa64-c507-4093-b142-c1ea38fd4ca4",
        "name": "Bite (Bat or Vampire Form Only)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 18,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "a2bfe648-cfca-4812-883e-c021d5fbb68b",
    "mode": "custom",
    "name": "Vampire Spawn",
    "type": "undead",
    "src": "MM p.298",
    "cr": "5",
    "hp": 82,
    "AC": 15,
    "actions": [
      {
        "id": "bdf96374-07a0-4f42-bbd3-6b8631db6066",
        "name": "Claws",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 8,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "1d5ddc49-8477-41ab-b890-3fe1eb4db065",
        "name": "Bite",
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
    "id": "5d921ed8-b12c-42c9-8725-64897de91d31",
    "mode": "custom",
    "name": "Vampire Spellcaster",
    "type": "undead",
    "src": "MM p.298",
    "cr": "15",
    "hp": 144,
    "AC": 16,
    "actions": [
      {
        "id": "ecb73f70-445b-4e58-84d3-5dde420206fd",
        "name": "Unarmed Strike (Vampire Form Only)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 8.5,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "651d72cd-d9b4-4565-83af-9c90b5104dbd",
        "name": "Bite (Bat or Vampire Form Only)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 18,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "9f6d99c6-920a-4d41-b835-db8bef5219fc",
    "mode": "custom",
    "name": "Vampire Warrior",
    "type": "undead",
    "src": "MM p.298",
    "cr": "15",
    "hp": 144,
    "AC": 18,
    "actions": [
      {
        "id": "7553c2e3-93b0-4a86-8908-25602795e4bb",
        "name": "Unarmed Strike (Vampire Form Only)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 8.5,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "0d19a42c-4793-4a8a-90af-37f8f59db5d3",
        "name": "Bite (Bat or Vampire Form Only)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 18,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "0dc768d8-0607-4b4f-a024-b760a2122456",
        "name": "Greatsword x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 22,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "bd61fe23-3cc4-40d5-a6ff-542df1904128",
    "mode": "custom",
    "name": "Veteran",
    "type": "humanoid",
    "src": "MM p.350",
    "cr": "3",
    "hp": 58,
    "AC": 17,
    "actions": [
      {
        "id": "5d48c4cd-6dd7-4035-b7b4-c19f3800da2a",
        "name": "Heavy Crossbow",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 6.5,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "902aefca-ffb3-4596-97c1-b3a7eb5fe079",
        "name": "Longsword x 2 & Shortsword x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 45,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "7f778d0e-14ed-45cc-9ae5-8c5a21b0b885",
    "mode": "custom",
    "name": "Vine Blight",
    "type": "plant",
    "src": "MM p.32",
    "cr": "1/2",
    "hp": 26,
    "AC": 12,
    "actions": [
      {
        "id": "a1e9d82a-9e3a-4fa3-97c2-d625afedc36b",
        "name": "Constrict",
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
    "id": "1a63be0e-7724-40e5-916c-4306b1030956",
    "mode": "custom",
    "name": "Violet Fungus",
    "type": "plant",
    "src": "MM p.138",
    "cr": "1/4",
    "hp": 18,
    "AC": 5,
    "actions": [
      {
        "id": "70beec17-0eb8-4dcf-b5ac-88db12cb714a",
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
    "id": "623ea38d-867b-4b2f-982e-a877005ce934",
    "mode": "custom",
    "name": "Vrock",
    "type": "fiend",
    "src": "MM p.64",
    "cr": "6",
    "hp": 104,
    "AC": 15,
    "actions": [
      {
        "id": "52f862f9-e9e2-43b2-b9e7-7834f99affc5",
        "name": "Spores {@recharge}",
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
        "id": "48535d91-55de-45dc-96ce-c773a0f400ee",
        "name": "Beak & Talons",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 24,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "344ffcc8-8bbc-4eb5-a6d5-38300245b7f0",
    "mode": "custom",
    "name": "Vulture",
    "type": "beast",
    "src": "MM p.339",
    "cr": "0",
    "hp": 5,
    "AC": 10,
    "actions": [
      {
        "id": "913f663b-24e9-40dc-ac3b-8f804cd816fa",
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
    "id": "0f6232bf-44b7-49d4-87c8-1715ea13c7f7",
    "mode": "custom",
    "name": "Warhorse",
    "type": "beast",
    "src": "MM p.340",
    "cr": "1/2",
    "hp": 19,
    "AC": 11,
    "actions": [
      {
        "id": "05b00c37-d3f5-47c5-a257-d47773d799a5",
        "name": "Hooves",
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
    "id": "13e1517f-9f14-4cad-82d4-14d32f1d39de",
    "mode": "custom",
    "name": "Warhorse Skeleton",
    "type": "undead",
    "src": "MM p.273",
    "cr": "1/2",
    "hp": 22,
    "AC": 13,
    "actions": [
      {
        "id": "d2398b3f-5695-44bc-88dd-2201c3f4dbca",
        "name": "Hooves",
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
    "id": "9588b5b5-c785-4fc4-900c-3a57f9d2f3c0",
    "mode": "custom",
    "name": "Water Elemental",
    "type": "elemental",
    "src": "MM p.125",
    "cr": "5",
    "hp": 114,
    "AC": 14,
    "actions": [
      {
        "id": "219d7afc-f0af-48f9-a947-3f0489e7283d",
        "name": "Whelm",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 26,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "603f9f15-f392-4f76-b3d4-cbafa681e9bd",
        "name": "Slam x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 26,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "120d02c4-0eca-4406-854b-0c1b6aeaccf4",
    "mode": "custom",
    "name": "Water Weird",
    "type": "elemental",
    "src": "MM p.299",
    "cr": "3",
    "hp": 58,
    "AC": 13,
    "actions": [
      {
        "id": "a672072a-e6c1-43d4-9a0f-eece233f9de8",
        "name": "Constrict",
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
    "id": "be1bffb2-4551-4d98-a35d-8b95c00a05cc",
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
    "id": "cc14aaf2-4997-455c-b058-72c7c1636cc9",
    "mode": "custom",
    "name": "Werebear",
    "type": "humanoid",
    "src": "MM p.208",
    "cr": "5",
    "hp": 135,
    "AC": 10,
    "actions": [
      {
        "id": "d46e644b-512f-4bd9-a66e-d3409a4b8fcf",
        "name": "Bite (Bear or Hybrid Form Only)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 15,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "46c4538e-5a27-4966-8e5b-afedca2d02bb",
        "name": "Claw (Bear or Hybrid Form Only)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 13,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "ebbe22eb-45f3-4089-80bf-81e568edd2cc",
        "name": "Greataxe (Humanoid or Hybrid Form Only)",
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
    "id": "f1bcc01b-a7e8-4448-98f0-8dc474e4cf1f",
    "mode": "custom",
    "name": "Wereboar",
    "type": "humanoid",
    "src": "MM p.209",
    "cr": "4",
    "hp": 78,
    "AC": 10,
    "actions": [
      {
        "id": "8adcad2f-5f67-4419-893f-08240229fc95",
        "name": "Maul (Humanoid or Hybrid Form Only)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "cba2ba59-14a2-4da0-b8c2-f8cc081196d2",
        "name": "Tusks (Boar or Hybrid Form Only)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "8f74f0e0-abf2-41ba-96d9-5a97c353c6f1",
    "mode": "custom",
    "name": "Wererat",
    "type": "humanoid",
    "src": "MM p.209",
    "cr": "2",
    "hp": 33,
    "AC": 12,
    "actions": [
      {
        "id": "d784cd8a-13d2-4e0a-b71d-dc762bd85df5",
        "name": "Bite (Rat or Hybrid Form Only)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 4.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "0e568490-be76-4c7c-8554-6cb7ac6fc7e7",
        "name": "Shortsword (Humanoid or Hybrid Form Only)",
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
        "id": "0c641971-4d0d-4d98-9ca7-270e6ab666bb",
        "name": "Hand Crossbow (Humanoid or Hybrid Form Only)",
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
    "id": "cbb3dfed-f622-4989-93dc-3a2e211202ee",
    "mode": "custom",
    "name": "Weretiger",
    "type": "humanoid",
    "src": "MM p.210",
    "cr": "4",
    "hp": 120,
    "AC": 12,
    "actions": [
      {
        "id": "69270f5a-4fe3-40cc-bd2c-89ae0cda2eb7",
        "name": "Bite (Tiger or Hybrid Form Only)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 8.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "526ffa87-3bb9-48b6-971c-313cee482b9b",
        "name": "Claw (Tiger or Hybrid Form Only)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "3375767a-9206-4a12-a5d6-1a52242ae6ad",
        "name": "Scimitar (Humanoid or Hybrid Form Only)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 6.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "d74297d7-0ef4-479b-8617-8b97ee8fc036",
        "name": "Longbow (Humanoid or Hybrid Form Only)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 6.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "ead12594-aa80-49b0-80d7-7ba1e36a0c72",
    "mode": "custom",
    "name": "Werewolf",
    "type": "humanoid",
    "src": "MM p.211",
    "cr": "3",
    "hp": 58,
    "AC": 11,
    "actions": [
      {
        "id": "41017536-2a81-4011-8625-aac8e93cc0f0",
        "name": "Bite (Wolf or Hybrid Form Only)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 6.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "a72a12de-6a62-44b0-9460-501b6d25ed66",
        "name": "Claws (Hybrid Form Only)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "65296feb-056a-433f-af3f-427d93317549",
        "name": "Spear (Humanoid Form Only)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 12,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "033bfa67-56f0-485a-8973-410c9a287683",
    "mode": "custom",
    "name": "White Dragon Wyrmling",
    "type": "dragon",
    "src": "MM p.102",
    "cr": "2",
    "hp": 32,
    "AC": 16,
    "actions": [
      {
        "id": "039445cd-5e70-4dbe-acc7-8ee3ae9159ed",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "85d244ed-db27-4ec5-9681-56667afbb653",
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
    "id": "c5820f6e-9beb-476e-82b0-65519cb2b029",
    "mode": "custom",
    "name": "Wight",
    "type": "undead",
    "src": "MM p.300",
    "cr": "3",
    "hp": 45,
    "AC": 14,
    "actions": [
      {
        "id": "a83037ae-8f3d-4921-aba0-9b2da09a7046",
        "name": "Life Drain",
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
        "id": "8267da2e-d330-4042-8adf-28b7d19beede",
        "name": "Longsword & Longbow x 2",
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
    "id": "15f94887-c4bc-4ece-92f3-389ed74e83cd",
    "mode": "custom",
    "name": "Will-o'-Wisp",
    "type": "undead",
    "src": "MM p.301",
    "cr": "2",
    "hp": 22,
    "AC": 19,
    "actions": [
      {
        "id": "f52bbc13-dd79-4cfc-afe0-dadfadc31026",
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
    "id": "9acdf7cd-7d55-4e85-aa4b-7c1d0753407d",
    "mode": "custom",
    "name": "Winged Kobold",
    "type": "humanoid",
    "src": "MM p.195",
    "cr": "1/4",
    "hp": 7,
    "AC": 13,
    "actions": [
      {
        "id": "492bb674-2e52-4619-beba-7e5d58774549",
        "name": "Dagger",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 5.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "dca4b8a3-41e4-409f-9be2-93f9335f26d2",
        "name": "Dropped Rock",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 6.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "e1a8f8ca-c85d-4aa1-8809-2ca55b38a18d",
    "mode": "custom",
    "name": "Winter Wolf",
    "type": "monstrosity",
    "src": "MM p.340",
    "cr": "3",
    "hp": 75,
    "AC": 13,
    "actions": [
      {
        "id": "2f0c6830-d560-4c2b-8f10-af83d193997e",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 11,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "8e856b5a-b5fd-45c6-9361-babaebfc8cee",
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
    "id": "faec22c5-04d8-4f9f-9832-67010db7f729",
    "mode": "custom",
    "name": "Wolf",
    "type": "beast",
    "src": "MM p.341",
    "cr": "1/4",
    "hp": 11,
    "AC": 13,
    "actions": [
      {
        "id": "d0dcfef2-ec29-4c6b-9426-b9e6c31fadbd",
        "name": "Bite",
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
    "id": "c0827e2d-0e09-4ed5-923a-88db5f29eeef",
    "mode": "custom",
    "name": "Worg",
    "type": "monstrosity",
    "src": "MM p.341",
    "cr": "1/2",
    "hp": 26,
    "AC": 13,
    "actions": [
      {
        "id": "c50051cc-15cc-426c-b21f-c75fb4dc189b",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "7501d470-09f1-46da-ac1c-fbd856f59634",
    "mode": "custom",
    "name": "Wraith",
    "type": "undead",
    "src": "MM p.302",
    "cr": "5",
    "hp": 67,
    "AC": 13,
    "actions": [
      {
        "id": "d45e8e29-c0e6-44bb-91e3-bf843b639a2b",
        "name": "Life Drain",
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
    "id": "4d79fca0-701f-44bb-a1c7-04f5ea1d8486",
    "mode": "custom",
    "name": "Wyvern",
    "type": "dragon",
    "src": "MM p.303",
    "cr": "6",
    "hp": 110,
    "AC": 13,
    "actions": [
      {
        "id": "f8aad756-ca48-4a7e-a113-5b6c0363aba3",
        "name": "Bite & Claws & Stinger",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 59.5,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "13e872fe-c560-4eba-936e-1b8cbef43337",
    "mode": "custom",
    "name": "Xorn",
    "type": "elemental",
    "src": "MM p.304",
    "cr": "5",
    "hp": 73,
    "AC": 19,
    "actions": [
      {
        "id": "04764159-ffa0-45c7-ac15-504d51ec8664",
        "name": "Bite & Claw x 3",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 33,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "779db6e1-3d30-403c-a195-891c794ceff9",
    "mode": "custom",
    "name": "Yeti",
    "type": "monstrosity",
    "src": "MM p.305",
    "cr": "3",
    "hp": 51,
    "AC": 12,
    "actions": [
      {
        "id": "d0a81de1-e18b-4fb7-977a-eb01e796bcc6",
        "name": "Chilling Gaze",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10.5,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "31d7c66c-d8f1-4b60-b707-514e373c5e97",
        "name": "Claw x 2",
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
    "id": "c237d09b-8523-4568-9f81-360d19261352",
    "mode": "custom",
    "name": "Yochlol",
    "type": "fiend",
    "src": "MM p.65",
    "cr": "10",
    "hp": 136,
    "AC": 15,
    "actions": [
      {
        "id": "d0659750-3c12-427e-88b8-2d06930300c4",
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
    "id": "63f00587-a88a-46fe-a1a4-021062c87eb6",
    "mode": "custom",
    "name": "Young Black Dragon",
    "type": "dragon",
    "src": "MM p.88",
    "cr": "7",
    "hp": 127,
    "AC": 18,
    "actions": [
      {
        "id": "1e957729-8248-4558-9a29-6f5818efb51e",
        "name": "Acid Breath",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 49.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 2
      },
      {
        "id": "1e5118aa-6d13-492d-ac57-c5242a561041",
        "name": "Bite & Claw x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 41.5,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "a29c82ac-1927-4b77-be04-2a0ba136c460",
    "mode": "custom",
    "name": "Young Blue Dragon",
    "type": "dragon",
    "src": "MM p.91",
    "cr": "9",
    "hp": 152,
    "AC": 18,
    "actions": [
      {
        "id": "904629d7-1f6d-4d21-a2c7-e79296900036",
        "name": "Lightning Breath",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 55,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 2
      },
      {
        "id": "6f3ec5b8-12a7-4c15-ac14-c4b0dacd9b78",
        "name": "Bite & Claw x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 45.5,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "00ca67a2-d043-4d2a-be00-7b4291cb8bb9",
    "mode": "custom",
    "name": "Young Brass Dragon",
    "type": "dragon",
    "src": "MM p.105",
    "cr": "6",
    "hp": 110,
    "AC": 17,
    "actions": [
      {
        "id": "4e242e5d-14b5-4198-a6d8-76138c626140",
        "name": "Breath Weapons",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 42,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 2
      },
      {
        "id": "014adc71-8e90-4b64-92bc-56e524162c58",
        "name": "Bite & Claw x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 37,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "b6d3d343-6ea6-4ace-8518-21ca9adb0e58",
    "mode": "custom",
    "name": "Young Bronze Dragon",
    "type": "dragon",
    "src": "MM p.108",
    "cr": "8",
    "hp": 142,
    "AC": 18,
    "actions": [
      {
        "id": "f448d43a-8395-49a4-a0e8-2e6d1f3dde86",
        "name": "Breath Weapons",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 55,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 2
      },
      {
        "id": "86c4899c-8b99-4c31-bd6e-7fc0d642866e",
        "name": "Bite & Claw x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 40,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "facc566f-4946-49f8-881b-6c1983bc4f69",
    "mode": "custom",
    "name": "Young Copper Dragon",
    "type": "dragon",
    "src": "MM p.112",
    "cr": "7",
    "hp": 119,
    "AC": 17,
    "actions": [
      {
        "id": "cba58d4f-f8ae-4d6e-ac98-f3f2c0ebcec7",
        "name": "Breath Weapons",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 40.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 2
      },
      {
        "id": "9f6a4cd7-a369-4026-bdff-8b6366af3bb2",
        "name": "Bite & Claw x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 37,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "e675da60-2924-4262-aca8-aeb06d2b084c",
    "mode": "custom",
    "name": "Young Gold Dragon",
    "type": "dragon",
    "src": "MM p.115",
    "cr": "10",
    "hp": 178,
    "AC": 18,
    "actions": [
      {
        "id": "c4d6c32b-ae00-4e20-bba5-306a72289be5",
        "name": "Breath Weapons",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 55,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 2
      },
      {
        "id": "57b85450-f9a3-4eb4-801b-9ea5f0fa45bc",
        "name": "Bite & Claw x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 43,
        "toHit": 10,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "d7671e4d-05a9-42c9-ad47-43db92297f9b",
    "mode": "custom",
    "name": "Young Green Dragon",
    "type": "dragon",
    "src": "MM p.94",
    "cr": "8",
    "hp": 136,
    "AC": 18,
    "actions": [
      {
        "id": "d8b60ba2-e23f-4fce-850a-6d671d2e731e",
        "name": "Poison Breath",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 42,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 2
      },
      {
        "id": "7f5b55c8-a3b6-423d-a7cc-7921f2261772",
        "name": "Bite & Claw x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 44,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "b26b04c5-40d9-4705-b3b5-22584f8ff2e1",
    "mode": "custom",
    "name": "Young Red Dragon",
    "type": "dragon",
    "src": "MM p.98",
    "cr": "10",
    "hp": 178,
    "AC": 18,
    "actions": [
      {
        "id": "1d755fb6-1bd0-4314-89da-aeee86856804",
        "name": "Fire Breath",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 56,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 2
      },
      {
        "id": "a122fd1b-f3fa-4da7-87ee-fd847b584a79",
        "name": "Bite & Claw x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 46.5,
        "toHit": 10,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "e02dc654-27cf-45f4-ba80-b3efff2b3bfd",
    "mode": "custom",
    "name": "Young Red Shadow Dragon",
    "type": "dragon",
    "src": "MM p.85",
    "cr": "13",
    "hp": 178,
    "AC": 18,
    "actions": [
      {
        "id": "32730dfd-f4da-4a0f-bc3f-eb58eba67520",
        "name": "Shadow Breath",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 56,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 2
      },
      {
        "id": "be96a9ab-56f7-4404-ba0f-fbd56f3b6155",
        "name": "Bite & Claw x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 46.5,
        "toHit": 11,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "057bbb6b-04dc-46d9-bbb2-3ade0f93ad57",
    "mode": "custom",
    "name": "Young Remorhaz",
    "type": "monstrosity",
    "src": "MM p.258",
    "cr": "5",
    "hp": 93,
    "AC": 14,
    "actions": [
      {
        "id": "dd82becc-7b8b-4f46-a395-abcdf26ed87f",
        "name": "Bite",
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
    "id": "d65dca4e-847b-42a1-bcde-d170578f407a",
    "mode": "custom",
    "name": "Young Silver Dragon",
    "type": "dragon",
    "src": "MM p.118",
    "cr": "9",
    "hp": 168,
    "AC": 18,
    "actions": [
      {
        "id": "a99b4c00-d72f-4db0-aa37-c0d5621054f1",
        "name": "Breath Weapons",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 54,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 2
      },
      {
        "id": "cfa159c4-7c0e-4594-8061-2f612284aaf4",
        "name": "Bite & Claw x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 43,
        "toHit": 10,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "b168761b-a826-4f9c-80be-c0eed924f45b",
    "mode": "custom",
    "name": "Young White Dragon",
    "type": "dragon",
    "src": "MM p.101",
    "cr": "6",
    "hp": 133,
    "AC": 17,
    "actions": [
      {
        "id": "0a3c4acc-20db-40d8-a85c-9578738e3848",
        "name": "Cold Breath",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 45,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 2
      },
      {
        "id": "04039aae-9cc1-4c7a-8499-3331313b3dc5",
        "name": "Bite & Claw x 2",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 41.5,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "0b55489e-6810-4197-bb16-c126ef5ce796",
    "mode": "custom",
    "name": "Yuan-ti Abomination",
    "type": "monstrosity",
    "src": "MM p.308",
    "cr": "7",
    "hp": 127,
    "AC": 15,
    "actions": [
      {
        "id": "c5cfea29-e5a7-4099-8700-d9271d2b1786",
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
        "id": "9fa6d1db-163d-449a-9beb-23bf4f4d07a7",
        "name": "Constrict",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 11,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "0d6c0e44-d6ff-40f8-9b26-4d86e67f18ba",
        "name": "Scimitar (Abomination Form Only)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 11,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "35b2e9fa-8f46-423e-b176-b08c5b15a81e",
        "name": "Longbow (Abomination Form Only)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 22.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "975b267b-dc24-4e76-92a2-f3ebd21c8898",
    "mode": "custom",
    "name": "Yuan-ti Malison (Type 1)",
    "type": "monstrosity",
    "src": "MM p.309",
    "cr": "3",
    "hp": 66,
    "AC": 12,
    "actions": [
      {
        "id": "964eabbd-05a2-4204-82ac-fb3e516bf4e0",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 12.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "319e3386-f69c-4954-9eb2-cf40107a05c9",
        "name": "Scimitar (Yuan-ti Form Only)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 6.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "3f15c8ed-2896-4547-87a5-08eac999fbc1",
        "name": "Longbow (Yuan-ti Form Only)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 13.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "58d8229a-59bb-417b-ae10-c95e5115d38b",
    "mode": "custom",
    "name": "Yuan-ti Malison (Type 2)",
    "type": "monstrosity",
    "src": "MM p.309",
    "cr": "3",
    "hp": 66,
    "AC": 12,
    "actions": [
      {
        "id": "40664514-bdbd-4fbe-a5bc-397e035800a0",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 12.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "4c831c64-6c49-484f-8436-bbeec28bc942",
    "mode": "custom",
    "name": "Yuan-ti Malison (Type 3)",
    "type": "monstrosity",
    "src": "MM p.309",
    "cr": "3",
    "hp": 66,
    "AC": 12,
    "actions": [
      {
        "id": "279255c9-db95-4684-bf39-d8fe383c92ed",
        "name": "Bite (Snake Form Only)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 12.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "8eacce45-10e2-4b30-b670-dbdb5f0b07ca",
        "name": "Constrict",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "e16abffb-6dfe-4858-beb0-c7de334bdfde",
        "name": "Scimitar (Yuan-ti Form Only)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 6.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "e8658e54-d3ba-47ff-be01-213e43b8b36d",
        "name": "Longbow (Yuan-ti Form Only)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 6.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "368dc9a9-cfbd-4936-bc17-a468ca38ff73",
    "mode": "custom",
    "name": "Yuan-ti Pureblood",
    "type": "humanoid",
    "src": "MM p.310",
    "cr": "1",
    "hp": 40,
    "AC": 11,
    "actions": [
      {
        "id": "c7392963-59c9-435b-aa91-e1e5e5735f4f",
        "name": "Scimitar",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 4.5,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "5e42c9b0-42e7-4f5a-b312-c552e64f0490",
        "name": "Shortbow",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 11.5,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "574eb146-56f3-43c6-b179-a1d1a618814d",
    "mode": "custom",
    "name": "Zombie",
    "type": "undead",
    "src": "MM p.316",
    "cr": "1/4",
    "hp": 22,
    "AC": 8,
    "actions": [
      {
        "id": "1cdb9b9a-b8c8-4ab2-8fe7-aa43a07738cb",
        "name": "Slam",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 4.5,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "9f65bf3c-ef12-4bba-b22e-182e05db33d6",
    "mode": "custom",
    "name": "Abjurer Wizard",
    "type": "humanoid",
    "src": "MPMM p.260",
    "cr": "9",
    "hp": 104,
    "AC": 12,
    "actions": [
        {
            "id": "5162a1d2-e7fa-4abf-a8e8-fa7e5f5456e9",
            "name": "Arcane Burst x 3",
            "type": "atk",
            "actionSlot": 0,
            "freq": "at will",
            "condition": "default",
            "dpr": 62,
            "toHit": 8,
            "target": "enemy with most HP",
            "targets": 1
        },
        {
            "id": "339ade8e-4197-417e-99ce-ae59edb38c63",
            "name": "Force Blast",
            "type": "atk",
            "actionSlot": 0,
            "freq": "at will",
            "condition": "default",
            "dpr": 36,
            "toHit": 6,
            "target": "enemy with most HP",
            "targets": 2
        }
    ],
    "count": 1
  },
  {
    "id": "06a392a3-f266-4ae2-be06-e89978b3f519",
    "mode": "custom",
    "name": "Adult Kruthik",
    "type": "monstrosity",
    "src": "MPMM p.169",
    "cr": "2",
    "hp": 39,
    "AC": 18,
    "actions": [
      {
        "id": "44cf6c3a-68ee-43f6-a046-3f05b6f35cf6",
        "name": "Stab",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 6.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "71f7f9a3-b9e9-4373-b901-fc9011873ebe",
        "name": "Spike",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 5.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "d8d40e4a-f289-472e-838d-f2f563cd1fd9",
    "mode": "custom",
    "name": "Adult Oblex",
    "type": "ooze",
    "src": "MPMM p.198",
    "cr": "5",
    "hp": 75,
    "AC": 14,
    "actions": [
        {
            "id": "878ace34-a467-4ac3-9673-b6a8b46bc434",
            "name": "Pseudopod x 2 + Eat Memories",
            "type": "atk",
            "actionSlot": 0,
            "freq": "at will",
            "condition": "default",
            "dpr": 54,
            "toHit": 7,
            "target": "enemy with most HP",
            "targets": 1
        }
    ],
    "count": 1
},
{
  "id": "a11b5bc3-94e1-4475-b714-15a1913e6bd4",
  "mode": "custom",
  "name": "Air Elemental Myrmidon",
  "type": "elemental",
  "src": "MPMM p.122",
  "cr": "7",
  "hp": 117,
  "AC": 18,
  "actions": [
      {
          "id": "c3cd560f-5eff-442b-b099-1a14dedcb199",
          "name": "Flail x3",
          "type": "atk",
          "actionSlot": 0,
          "freq": "at will",
          "condition": "default",
          "dpr": 26,
          "toHit": 7,
          "target": "enemy with most HP",
          "targets": 1
      },
      {
          "id": "d0892b21-6843-44ab-a337-0342482e4a0b",
          "name": "Lightning Strike",
          "type": "atk",
          "actionSlot": 1,
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
  "id": "0b11d0e4-ce01-428a-bd8c-6b989b849587",
  "mode": "custom",
  "name": "Alhoon",
  "type": "undead",
  "src": "MPMM p.43",
  "cr": "10",
  "hp": 150,
  "AC": 15,
  "actions": [
      {
          "id": "380322b1-0e18-4f6e-a9d8-4fbfa63ba111",
          "name": "Arcane Bolt x2",
          "type": "atk",
          "actionSlot": 0,
          "freq": "at will",
          "condition": "default",
          "dpr": 56,
          "toHit": 8,
          "target": "enemy with most HP",
          "targets": 1
      },
      {
          "id": "11819708-27a1-4018-bdc4-149c2b5c848f",
          "name": "Mind Blast",
          "type": "atk",
          "actionSlot": 0,
          "freq": "1/fight",
          "condition": "is available",
          "dpr": 22,
          "toHit": 6,
          "target": "enemy with most HP",
          "targets": 2
      }
  ],
  "count": 1
},
{
  "id": "ccd0b4cd-7818-4063-a90e-e86a0089f38b",
  "mode": "custom",
  "name": "Alkilith",
  "type": "fiend",
  "src": "MPMM p.44",
  "cr": "11",
  "hp": 168,
  "AC": 17,
  "actions": [
      {
          "id": "264639f7-6139-48c5-b054-0c72bb3a1062",
          "name": "Tentacle x3",
          "type": "atk",
          "actionSlot": 0,
          "freq": "at will",
          "condition": "default",
          "dpr": 54,
          "toHit": 8,
          "target": "enemy with most HP",
          "targets": 1
      }
  ],
  "count": 1
},
{
  "id": "0d488d8b-7acd-4a55-83f3-63de1a2b9bcd",
  "mode": "custom",
  "name": "Allip",
  "type": "undead",
  "src": "MPMM p.45",
  "cr": "5",
  "hp": 40,
  "AC": 13,
  "actions": [
      {
          "id": "d72e624a-1aff-4b19-b3fb-cd50c918b4c5",
          "name": "Whispers of Compulsion",
          "type": "atk",
          "actionSlot": 0,
          "freq": "at will",
          "condition": "default",
          "dpr": 18,
          "toHit": 6,
          "target": "enemy with highest DPR",
          "targets": 2
      }
  ],
  "count": 1
},
{
  "id": "32eb68e2-e3ee-44cb-9be0-0d53c1772328",
  "mode": "custom",
  "name": "Amnizu",
  "type": "fiend",
  "src": "MPMM p.46",
  "cr": "18",
  "hp": 202,
  "AC": 21,
  "actions": [
      {
          "id": "001696d8-f632-48bf-bbb0-9e47d6703fa6",
          "name": "Taskmaster Whip x2",
          "type": "atk",
          "actionSlot": 0,
          "freq": "at will",
          "condition": "default",
          "dpr": 52,
          "toHit": 11,
          "target": "enemy with most HP",
          "targets": 1
      },
      {
          "id": "5359bf2f-22fe-455d-8dc5-73cb6aa5f34a",
          "name": "Blinding Rot",
          "type": "atk",
          "actionSlot": 1,
          "freq": "at will",
          "condition": "default",
          "dpr": 26,
          "toHit": 9,
          "target": "enemy with most HP",
          "targets": 2
      },
      {
          "id": "d6dbcb51-65f4-41ce-9ba0-0d2e9b948a32",
          "name": "Forgetfulness",
          "type": "atk",
          "actionSlot": 1,
          "freq": "1/fight",
          "condition": "is available",
          "dpr": 26,
          "toHit": 8,
          "target": "enemy with most HP",
          "targets": 1
      }
  ],
  "count": 1
},
{
  "id": "ae9d26e7-d36c-4ea0-82e3-c69863c43c49",
  "mode": "custom",
  "name": "Angry Sorrowsworn",
  "type": "monstrosity",
  "src": "MPMM p.222",
  "cr": "13",
  "hp": 255,
  "AC": 18,
  "actions": [
      {
          "id": "781b1450-568f-4789-b994-fbfbb4975c3e",
          "name": "Hook x2 + Rising Anger",
          "type": "atk",
          "actionSlot": 0,
          "freq": "at will",
          "condition": "default",
          "dpr": 50,
          "toHit": 8,
          "target": "enemy with most HP",
          "targets": 1
      }
  ],
  "count": 1
},
{
  "id": "3ed95e22-bf32-464d-b88b-76d1478ba75e",
  "mode": "custom",
  "name": "Annis Hag",
  "type": "fey",
  "src": "MPMM p.47",
  "cr": "6",
  "hp": 90,
  "AC": 17,
  "actions": [
      {
          "id": "dad83df7-0690-41fd-9a6f-24fcbdc6de1d",
          "name": "Bite + Claw x2",
          "type": "atk",
          "actionSlot": 0,
          "freq": "at will",
          "condition": "default",
          "dpr": 47,
          "toHit": 8,
          "target": "enemy with most HP",
          "targets": 1
      },
      {
          "id": "fcc3a13a-351c-446d-803b-0db78f2a858f",
          "name": "Crushing Hug",
          "type": "atk",
          "actionSlot": 1,
          "freq": "at will",
          "condition": "default",
          "dpr": 36,
          "toHit": 8,
          "target": "enemy with most HP",
          "targets": 1
      }
  ],
  "count": 1
},
{
  "id": "b6eaa528-94ba-4351-81fa-1b7815e8060c",
  "mode": "custom",
  "name": "Apprentice Wizard",
  "type": "humanoid",
  "src": "MPMM p.259",
  "cr": "1/4",
  "hp": 13,
  "AC": 10,
  "actions": [
      {
          "id": "b3a0146e-03b8-4289-a1d4-5be45e27dcfa",
          "name": "Arcane Burst",
          "type": "atk",
          "actionSlot": 0,
          "freq": "at will",
          "condition": "default",
          "dpr": 7.5,
          "toHit": 4,
          "target": "enemy with most HP",
          "targets": 1
      },
      {
          "id": "b5cdd4de-9ef2-480c-ace7-b064edbdb1ee",
          "actionSlot": 0,
          "name": "Burning Hands",
          "freq": "1/day",
          "condition": "is available",
          "targets": 2,
          "type": "atk",
          "dpr": 11,
          "toHit": 2,
          "target": "enemy with most HP"
      }
  ],
  "count": 1
},
{
  "id": "947716b0-2ac8-4d30-bc25-a015aad22ef0",
  "mode": "custom",
  "name": "Archdruid",
  "type": "humanoid",
  "src": "MPMM p.48",
  "cr": "12",
  "hp": 154,
  "AC": 14,
  "actions": [
      {
          "id": "3f50000b-6014-4172-b55f-829498d46c0c",
          "name": "Wildfire x2",
          "type": "atk",
          "actionSlot": 0,
          "freq": "at will",
          "condition": "default",
          "dpr": 52,
          "toHit": 9,
          "target": "enemy with most HP",
          "targets": 1
      },
      {
          "id": "26118886-a150-4437-8da5-60b2c5b24bf7",
          "name": "Mass Cure Wounds",
          "actionSlot": 4,
          "condition": "ally at 0 HP",
          "freq": "1/day",
          "targets": 2,
          "type": "heal",
          "amount": 19,
          "target": "ally with the least HP"
      },
      {
          "id": "e709cd3a-9f5f-46ed-b161-f03e84a61807",
          "actionSlot": 4,
          "name": "Wildfire",
          "freq": "at will",
          "condition": "default",
          "targets": 1,
          "type": "atk",
          "dpr": 26,
          "toHit": 9,
          "target": "enemy with most HP"
      },
      {
          "id": "6c0408ba-3544-4241-9176-7d4a987f5eeb",
          "name": "Wild Shape",
          "actionSlot": 1,
          "condition": "is under half HP",
          "freq": "1/fight",
          "targets": 1,
          "type": "heal",
          "amount": 100,
          "target": "self"
      }
  ],
  "count": 1
},
{
  "id": "db451e14-6681-458b-9016-dca1ceee7c83",
  "mode": "custom",
  "name": "Archer",
  "type": "humanoid",
  "src": "MPMM p.49",
  "cr": "3",
  "hp": 75,
  "AC": 16,
  "actions": [
      {
          "id": "331362ad-c1b7-4074-b612-570df9fefdfa",
          "name": "Longbow x2",
          "type": "atk",
          "actionSlot": 0,
          "freq": "at will",
          "condition": "default",
          "dpr": 23,
          "toHit": 6,
          "target": "enemy with most HP",
          "targets": 1
      }
  ],
  "count": 1
},
{
  "id": "0ae504fa-1ecc-4972-be40-2a4a2ee49f68",
  "mode": "custom",
  "name": "Armanite",
  "type": "fiend",
  "src": "MPMM p.50",
  "cr": "7",
  "hp": 94,
  "AC": 16,
  "actions": [
      {
          "id": "34c5beea-8c5e-4125-87fd-79e01907c5b6",
          "name": "Claw x2 + Hooves + Serrated Tail",
          "type": "atk",
          "actionSlot": 0,
          "freq": "at will",
          "condition": "default",
          "dpr": 48,
          "toHit": 8,
          "target": "enemy with most HP",
          "targets": 1
      },
      {
          "id": "5c0b35f9-17df-46ad-9a1d-d26d685e42a5",
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
  "id": "955fb4b5-cbd5-4f16-aa3d-5cf3ab37922b",
  "mode": "custom",
  "name": "Astral Dreadnought",
  "type": "monstrosity",
  "src": "MPMM p.51",
  "cr": "21",
  "hp": 297,
  "AC": 20,
  "actions": [
      {
          "id": "0333e759-119e-4052-af24-4158e7efd2a1",
          "name": "Bite + Claw x2",
          "type": "atk",
          "actionSlot": 0,
          "freq": "at will",
          "condition": "default",
          "dpr": 76,
          "toHit": 16,
          "target": "enemy with most HP",
          "targets": 1
      },
      {
          "id": "e31dc590-0f0e-4d05-834c-39caa7f770ff",
          "name": "Claw x3",
          "type": "atk",
          "actionSlot": 2,
          "freq": "at will",
          "condition": "default",
          "dpr": 58.5,
          "toHit": 16,
          "target": "enemy with most HP",
          "targets": 1
      }
  ],
  "count": 1
},
  {
    "id": "861f7459-036b-4f1a-972e-78f7ede64ad7",
    "mode": "custom",
    "name": "Aurochs",
    "type": "beast",
    "src": "MPMM p.71",
    "cr": "2",
    "hp": 38,
    "AC": 11,
    "actions": [
      {
        "id": "08f21d05-4f83-469a-b09c-e37286da800a",
        "name": "Gore",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 23,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "cea84c99-1130-408e-950f-5880def85f9d",
    "mode": "custom",
    "name": "Autumn Eladrin",
    "type": "fey",
    "src": "MPMM p.115",
    "cr": "10",
    "hp": 165,
    "AC": 19,
    "actions": [
        {
            "id": "53e5d2c0-0d47-4faa-9c4a-8bd951df1b66",
            "name": "Longbow",
            "type": "atk",
            "actionSlot": 0,
            "freq": "at will",
            "condition": "default",
            "dpr": 30,
            "toHit": 7,
            "target": "enemy with most HP",
            "targets": 1
        },
        {
            "id": "9fe67af2-3c20-4b62-b8cc-798030f50d4e",
            "actionSlot": 4,
            "name": "Longbow",
            "freq": "at will",
            "condition": "default",
            "targets": 1,
            "type": "atk",
            "dpr": 30,
            "toHit": 7,
            "target": "enemy with most HP"
        },
        {
            "id": "b4b1432e-9795-4752-a51e-9ad14e126e3b",
            "name": "Cure Wounds",
            "actionSlot": 4,
            "condition": "is under half HP",
            "freq": "at will",
            "targets": 1,
            "type": "heal",
            "amount": 27,
            "target": "self"
        }
    ],
    "count": 1
},
{
  "id": "48505162-dc43-4186-a3bd-808a250df5ee",
  "mode": "custom",
  "name": "Babau",
  "type": "fiend",
  "src": "MPMM p.52",
  "cr": "4",
  "hp": 82,
  "AC": 16,
  "actions": [
      {
          "id": "037fa50b-dcc1-40fb-9b6a-b2a1c6d1d9d1",
          "name": "Claw x2",
          "type": "atk",
          "actionSlot": 0,
          "freq": "at will",
          "condition": "default",
          "dpr": 18,
          "toHit": 6,
          "target": "enemy with most HP",
          "targets": 1
      }
  ],
  "count": 1
},
{
  "id": "99f3465a-0c49-445e-ac65-aed0067534c2",
  "mode": "custom",
  "name": "Bael",
  "type": "fiend",
  "src": "MPMM p.54",
  "cr": "19",
  "hp": 189,
  "AC": 18,
  "actions": [
      {
          "id": "a0d4c1ee-9a53-4675-9ba9-fe37c33aa856",
          "name": "Hellish Morningstar x3",
          "type": "atk",
          "actionSlot": 0,
          "freq": "at will",
          "condition": "default",
          "dpr": 75,
          "toHit": 13,
          "target": "enemy with most HP",
          "targets": 1
      },
      {
          "id": "95922979-fb30-44b5-9261-0f0bd44db026",
          "name": "Regeneration",
          "actionSlot": 4,
          "condition": "default",
          "freq": "at will",
          "targets": 1,
          "type": "heal",
          "amount": 20,
          "target": "self"
      },
      {
          "id": "d4035573-24c2-4362-8059-05364d7e6276",
          "actionSlot": 2,
          "name": "Wall of Fire x3",
          "freq": "1/day",
          "condition": "is available",
          "targets": 2,
          "type": "atk",
          "dpr": 55,
          "toHit": 11,
          "target": "enemy with least HP"
      },
      {
          "id": "3ed27497-dbf0-4ace-8fcd-a49940f1b8ed",
          "name": "Invisibility",
          "actionSlot": 2,
          "condition": "default",
          "freq": "at will",
          "targets": 1,
          "type": "buff",
          "target": "self",
          "acBonus": 4,
          "toHitBonus": 4
      }
  ],
  "count": 1
},
{
  "id": "995e2325-024b-4a0a-95c7-09358cde65cd",
  "mode": "custom",
  "name": "Balhannoth",
  "type": "aberration",
  "src": "MPMM p.55",
  "cr": "11",
  "hp": 114,
  "AC": 17,
  "actions": [
      {
          "id": "3c858445-b099-4f0a-86bf-7899700fe7e3",
          "name": "Bite + Tentacle x2",
          "type": "atk",
          "actionSlot": 0,
          "freq": "at will",
          "condition": "default",
          "dpr": 39.5,
          "toHit": 7,
          "target": "enemy with most HP",
          "targets": 1
      },
      {
          "id": "8935f1be-db5a-4820-b25e-5b58fbce8af0",
          "name": "Bite x3",
          "type": "atk",
          "actionSlot": 2,
          "freq": "at will",
          "condition": "default",
          "dpr": 58.5,
          "toHit": 7,
          "target": "enemy with most HP",
          "targets": 1
      }
  ],
  "count": 1
},
{
  "id": "2e842bf4-1155-4a1d-a5eb-851fba0ecd9c",
  "mode": "custom",
  "name": "Banderhobb",
  "type": "monstrosity",
  "src": "MPMM p.56",
  "cr": "5",
  "hp": 84,
  "AC": 15,
  "actions": [
      {
          "id": "6bd41fa6-0d02-47f4-b70d-57a5d7bd67ee",
          "name": "Bite + Tongue",
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
  "id": "f95ac642-fc4b-4002-9340-a6f1b69c8d0e",
  "mode": "custom",
  "name": "Baphomet",
  "type": "fiend",
  "src": "MPMM p.58",
  "cr": "23",
  "hp": 319,
  "AC": 22,
  "actions": [
      {
          "id": "e1e4603c-0d3b-48df-af2c-5cf28fe63f98",
          "name": "Bite + Gore + Heartcleaver",
          "type": "atk",
          "actionSlot": 0,
          "freq": "at will",
          "condition": "default",
          "dpr": 74,
          "toHit": 17,
          "target": "enemy with most HP",
          "targets": 1
      },
      {
          "id": "96505357-3a75-4ef5-a524-fa5a0a81c8e4",
          "name": "Heartcleaver x3",
          "type": "atk",
          "actionSlot": 2,
          "freq": "at will",
          "condition": "default",
          "dpr": 63,
          "toHit": 17,
          "target": "enemy with most HP",
          "targets": 1
      }
  ],
  "count": 1
},
{
  "id": "9e7de75e-9f3b-42f4-88d2-a901ba372190",
  "mode": "custom",
  "name": "Bard",
  "type": "humanoid",
  "src": "MPMM p.59",
  "cr": "2",
  "hp": 44,
  "AC": 15,
  "actions": [
      {
          "id": "9ce8da50-55e8-408c-8252-99e1297f8b58",
          "name": "Shortsword x2",
          "type": "atk",
          "actionSlot": 0,
          "freq": "at will",
          "condition": "default",
          "dpr": 11,
          "toHit": 4,
          "target": "enemy with most HP",
          "targets": 1
      },
      {
          "id": "9a0e05bb-c508-42ef-a4a5-d58bc738cc7a",
          "name": "Cacophony",
          "type": "atk",
          "actionSlot": 0,
          "freq": "1/fight",
          "condition": "is available",
          "dpr": 9,
          "toHit": 2,
          "target": "enemy with most HP",
          "targets": 2
      },
      {
          "id": "ccf3afbf-b31e-4199-b68f-33e5101571da",
          "name": "Taunt",
          "actionSlot": 1,
          "condition": "default",
          "freq": "at will",
          "targets": 1,
          "type": "debuff",
          "target": "enemy with highest DPR",
          "toHitDebuff": -4
      }
  ],
  "count": 1
},
{
  "id": "75c83b13-a71f-4512-8695-ec2a9fa0d9e7",
  "mode": "custom",
  "name": "Barghest",
  "type": "fiend",
  "src": "MPMM p.60",
  "cr": "4",
  "hp": 60,
  "AC": 17,
  "actions": [
      {
          "id": "7510fc40-4964-43c2-bc54-3d14b75b1beb",
          "name": "Bite + Claw",
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
  "id": "18b01640-f11a-4242-97c3-debbe1863e6b",
  "mode": "custom",
  "name": "Berbalang",
  "type": "aberration",
  "src": "MPMM p.61",
  "cr": "2",
  "hp": 49,
  "AC": 14,
  "actions": [
      {
          "id": "1fef155d-b336-433b-a8f2-2c506a28236f",
          "name": "Bite + Claw",
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
  "id": "0f5c1142-9811-41d1-9534-44d092632c3e",
  "mode": "custom",
  "name": "Bheur Hag",
  "type": "fey",
  "src": "MPMM p.62",
  "cr": "7",
  "hp": 91,
  "AC": 17,
  "actions": [
      {
          "id": "e008260a-7567-4250-840c-6b0f9f43c105",
          "name": "Frost Shard x2",
          "type": "atk",
          "actionSlot": 0,
          "freq": "at will",
          "condition": "default",
          "dpr": 60,
          "toHit": 6,
          "target": "enemy with most HP",
          "targets": 1
      },
      {
          "id": "1f5f811e-0336-40d8-b32d-401ed1b7598d",
          "actionSlot": 0,
          "name": "Cone of Cold",
          "freq": "1/day",
          "condition": "default",
          "targets": 2,
          "type": "atk",
          "dpr": 36,
          "toHit": 4,
          "target": "enemy with most HP"
      }
  ],
  "count": 1
},
{
  "id": "60bd2b09-9d42-4cc2-941d-28f28ec3fd8d",
  "mode": "custom",
  "name": "Black Abishai",
  "type": "fiend",
  "src": "MPMM p.38",
  "cr": "7",
  "hp": 58,
  "AC": 15,
  "actions": [
      {
          "id": "e3dd3393-c0a4-4cc5-be40-1e5db78c3bc5",
          "name": "Bite & Scimitar x2",
          "type": "atk",
          "actionSlot": 0,
          "freq": "at will",
          "condition": "default",
          "dpr": 30.5,
          "toHit": 6,
          "target": "enemy with most HP",
          "targets": 1
      }
  ],
  "count": 1
},
{
  "id": "6ef8b06d-d289-4f8d-848a-2a33ee06f01d",
  "mode": "custom",
  "name": "Blackguard",
  "type": "humanoid",
  "src": "MPMM p.63",
  "cr": "8",
  "hp": 119,
  "AC": 18,
  "actions": [
      {
          "id": "389dd239-0424-44d3-bdd5-c1d65658b795",
          "name": "Glaive x3",
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
  "id": "3dd62147-27b8-417c-b7ec-61c0cf02a1bc",
  "mode": "custom",
  "name": "Blue Abishai",
  "type": "fiend",
  "src": "MPMM p.39",
  "cr": "17",
  "hp": 202,
  "AC": 19,
  "actions": [
      {
          "id": "1f83bbe3-2228-499b-8a4d-f115e111ab51",
          "name": "Lightning Strike x3",
          "type": "atk",
          "actionSlot": 0,
          "freq": "at will",
          "condition": "default",
          "dpr": 108,
          "toHit": 12,
          "target": "enemy with most HP",
          "targets": 1
      }
  ],
  "count": 1
},
{
  "id": "f5f6ad8d-502e-493e-98a7-59aa2d175798",
  "mode": "custom",
  "name": "Bodak",
  "type": "undead",
  "src": "MPMM p.64",
  "cr": "6",
  "hp": 58,
  "AC": 15,
  "actions": [
      {
          "id": "c785549e-eb09-42dd-af5e-e2abafdee252",
          "name": "Withering Gaze",
          "type": "atk",
          "actionSlot": 0,
          "freq": "at will",
          "condition": "default",
          "dpr": 22,
          "toHit": 3,
          "target": "enemy with most HP",
          "targets": 1
      },
      {
          "id": "6b4b4bf9-4fed-4649-90eb-f19484fc3283",
          "actionSlot": 1,
          "name": "Aura of Annihilation",
          "freq": "at will",
          "condition": "default",
          "targets": 2,
          "type": "atk",
          "dpr": 5,
          "toHit": 20,
          "target": "enemy with most HP"
      },
      {
          "id": "365a85ac-69c3-4db8-ba81-f39258cf73f7",
          "name": "Death Gaze",
          "actionSlot": 4,
          "condition": "default",
          "freq": "at will",
          "targets": 2,
          "type": "debuff",
          "target": "enemy with highest DPR",
          "toHitDebuff": -4
      }
  ],
  "count": 1
},
  {
    "id": "466f42cd-64f9-45fc-8990-e3fc7c0777a1",
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
    "id": "e579802e-a2ed-4526-b88d-3e892a8c1b6a",
    "mode": "custom",
    "name": "Boneclaw",
    "type": "undead",
    "src": "MPMM p.66",
    "cr": "12",
    "hp": 150,
    "AC": 16,
    "actions": [
        {
            "id": "4d1d039b-8d5d-4c95-ace6-344a29e43939",
            "name": "Piercing Claw x2",
            "type": "atk",
            "actionSlot": 0,
            "freq": "at will",
            "condition": "default",
            "dpr": 63,
            "toHit": 8,
            "target": "enemy with most HP",
            "targets": 1
        },
        {
            "id": "30a0c0c7-d96f-485e-87a6-0afd278b8b0f",
            "actionSlot": 0,
            "name": "Deadly Reach",
            "freq": "at will",
            "condition": "default",
            "targets": 1,
            "type": "atk",
            "dpr": 31,
            "toHit": 8,
            "target": "enemy with most HP"
        }
    ],
    "count": 1
},
  {
    "id": "fbfd8123-5308-4de3-993f-6e11e62befe3",
    "mode": "custom",
    "name": "Brontosaurus",
    "type": "beast",
    "src": "MPMM p.95",
    "cr": "5",
    "hp": 121,
    "AC": 15,
    "actions": [
      {
        "id": "dd4ec355-d869-4374-aa5b-5ca0df6b531e",
        "name": "Stomp",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 27.5,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "56fa9159-9c98-43f1-b020-c552c78e1755",
        "name": "Tail",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 32,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "e26a691c-66ff-4789-9f5f-e1f3a8c95320",
    "mode": "custom",
    "name": "Bulezau",
    "type": "fiend",
    "src": "MPMM p.67",
    "cr": "3",
    "hp": 52,
    "AC": 14,
    "actions": [
      {
        "id": "90e5502b-40e6-4019-8310-289fb2f0431d",
        "name": "Barbed Tail",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 13,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "e91d1db6-8817-4aec-9a21-c4d3990726c6",
    "mode": "custom",
    "name": "Cadaver Collector",
    "type": "construct",
    "src": "MPMM p.68",
    "cr": "14",
    "hp": 189,
    "AC": 17,
    "actions": [
      {
        "id": "5cc6b2cd-a690-4388-b963-a1b9f608588f",
        "name": "Slam",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 35,
        "toHit": 10,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "f41d4beb-5dd2-4f3c-a1d0-2b4961d7049e",
    "mode": "custom",
    "name": "Canoloth",
    "type": "fiend",
    "src": "MPMM p.69",
    "cr": "8",
    "hp": 120,
    "AC": 16,
    "actions": [
      {
        "id": "c703c377-b24a-4da5-8e12-c476453d79b2",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 25.5,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "8305e696-0daa-4e7d-ba14-b7ff4f2e84d0",
        "name": "Claw",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 16.5,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "b4c1e4d9-3a94-4812-864a-e5100b53cd94",
        "name": "Tongue",
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
    "id": "20dbaf7a-3df6-4751-b31a-d7c651e1fec6",
    "mode": "custom",
    "name": "Catoblepas",
    "type": "monstrosity",
    "src": "MPMM p.70",
    "cr": "5",
    "hp": 84,
    "AC": 14,
    "actions": [
      {
        "id": "9e33cd36-f886-4e4a-a97b-54f2808ed41d",
        "name": "Tail",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 21.5,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "99ff8c8d-1eb6-4beb-9463-391204678114",
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
    "id": "c36c962f-1474-4c55-b1f2-e25125feebd9",
    "mode": "custom",
    "name": "Cave Fisher",
    "type": "monstrosity",
    "src": "MPMM p.73",
    "cr": "3",
    "hp": 58,
    "AC": 16,
    "actions": [
      {
        "id": "9459ef67-f75e-4143-a1d5-8834aa6a68fe",
        "name": "Claw",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "7958ed84-bcb4-490c-ab0b-0c6afaabcbfc",
    "mode": "custom",
    "name": "Champion",
    "type": "humanoid",
    "src": "MPMM p.74",
    "cr": "9",
    "hp": 143,
    "AC": 18,
    "actions": [
      {
        "id": "e8b52880-1f13-4a55-ac66-348249c6bebe",
        "name": "Greatsword",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 19,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "a1fb80e5-7238-4d09-96f5-cb834cdf5855",
        "name": "Shortbow",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 12.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "c6eb543f-29a4-462b-a36e-fdd327624a98",
    "mode": "custom",
    "name": "Chitine",
    "type": "monstrosity",
    "src": "MPMM p.75",
    "cr": "1/2",
    "hp": 18,
    "AC": 14,
    "actions": [
      {
        "id": "b6d49e0f-26d0-4d7b-98f9-fbf715ddfda1",
        "name": "Dagger",
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
    "id": "2d5657c5-039b-4c4e-983a-4e840012f1c2",
    "mode": "custom",
    "name": "Choker",
    "type": "aberration",
    "src": "MPMM p.76",
    "cr": "1",
    "hp": 13,
    "AC": 16,
    "actions": [
      {
        "id": "70476911-0dc5-4320-8d9b-6be8fdd14840",
        "name": "Tentacle",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 5.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "6c3dc9fa-369a-4774-81dd-5523ce3a651f",
    "mode": "custom",
    "name": "Choldrith",
    "type": "monstrosity",
    "src": "MPMM p.77",
    "cr": "3",
    "hp": 66,
    "AC": 15,
    "actions": [
      {
        "id": "acd86608-af06-4398-95dd-54cce5c12c7f",
        "name": "Dagger",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 16,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "62d093f1-87a1-458a-8250-e8486fc162c5",
    "mode": "custom",
    "name": "Clockwork Bronze Scout",
    "type": "construct",
    "src": "MPMM p.79",
    "cr": "1",
    "hp": 36,
    "AC": 13,
    "actions": [
      {
        "id": "7527bec6-3fd2-45ea-8ec8-7966177b9fe6",
        "name": "Bite",
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
        "id": "7e0d334a-a823-4bda-88bf-4c6969169380",
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
    "id": "59a7505c-3a09-4bb4-81cb-ef5a57e3e093",
    "mode": "custom",
    "name": "Clockwork Iron Cobra",
    "type": "construct",
    "src": "MPMM p.79",
    "cr": "4",
    "hp": 91,
    "AC": 13,
    "actions": [
      {
        "id": "95e920bf-a1a0-4a2a-91b9-be8d10e5474a",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 20,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "7d20584f-5c45-492b-bf37-6b1ff161473c",
    "mode": "custom",
    "name": "Clockwork Oaken Bolter",
    "type": "construct",
    "src": "MPMM p.80",
    "cr": "5",
    "hp": 117,
    "AC": 16,
    "actions": [
      {
        "id": "985fe330-5ea5-41cc-940d-ef390b0fe25b",
        "name": "Lancing Bolt",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 15,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "14f22695-0b98-47c1-b028-4a194a44e8aa",
        "name": "Harpoon",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 15,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "dd1d4f36-8e31-41ed-bb4a-d8e73428a4f3",
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
    "id": "080ce702-ea99-40cd-95c1-3b3a7fca5741",
    "mode": "custom",
    "name": "Clockwork Stone Defender",
    "type": "construct",
    "src": "MPMM p.80",
    "cr": "4",
    "hp": 105,
    "AC": 16,
    "actions": [
      {
        "id": "563d2ce6-2e43-40b4-bba8-aeb90beb6b06",
        "name": "Slam",
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
    "id": "8338afea-93e8-4bdc-a0c9-5c8edd14c27a",
    "mode": "custom",
    "name": "Cloud Giant Smiling One",
    "type": "giant",
    "src": "MPMM p.81",
    "cr": "11",
    "hp": 250,
    "AC": 15,
    "actions": [
      {
        "id": "49d090b4-5b44-48f2-b5ff-c3c0d425ae00",
        "name": "Slam",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 27,
        "toHit": 12,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "7911490a-5c63-4c69-ba4d-9515c39a7cc1",
        "name": "Telekinetic Strike",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 25,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "d448fb58-e766-422c-ba89-0242d79e33e0",
    "mode": "custom",
    "name": "Conjurer Wizard",
    "type": "humanoid",
    "src": "MPMM p.260",
    "cr": "6",
    "hp": 58,
    "AC": 12,
    "actions": [
      {
        "id": "2f019ced-5055-4311-b0ca-3e4721061219",
        "name": "Arcane Burst",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 19.5,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "499e661f-b592-49e6-8673-99cc30a1e585",
    "mode": "custom",
    "name": "Corpse Flower",
    "type": "plant",
    "src": "MPMM p.82",
    "cr": "8",
    "hp": 127,
    "AC": 12,
    "actions": [
      {
        "id": "3d876e3e-a1b4-4ed0-a93e-7b7f4e3343dd",
        "name": "Tentacle",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 19.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "5ab796f4-66a1-4180-9b6f-aa167656d2ac",
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
    "id": "e5492281-46ff-4c82-8fa4-dd57864e4630",
    "mode": "custom",
    "name": "Darkling",
    "type": "fey",
    "src": "MPMM p.84",
    "cr": "1/2",
    "hp": 13,
    "AC": 14,
    "actions": [
      {
        "id": "42abf668-64bd-490f-9531-a6acb33fa92c",
        "name": "Dagger",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 12.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "9196d6c3-7312-4e93-a579-e6ae55d62bd3",
    "mode": "custom",
    "name": "Darkling Elder",
    "type": "fey",
    "src": "MPMM p.84",
    "cr": "2",
    "hp": 27,
    "AC": 15,
    "actions": [
      {
        "id": "3b4b8bcd-b40b-4739-af0b-1d29fdcae5e2",
        "name": "Scimitar",
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
    "id": "5ba54709-efeb-447f-9382-3e0588e763dd",
    "mode": "custom",
    "name": "Death Kiss",
    "type": "aberration",
    "src": "MPMM p.85",
    "cr": "10",
    "hp": 142,
    "AC": 15,
    "actions": [
      {
        "id": "9c4dfd12-65cc-4c9b-817e-12974896232c",
        "name": "Blood Drain",
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
        "id": "a2554ff7-38a3-4803-8828-f3f7dcd7a3af",
        "name": "Tentacle",
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
    "id": "e70a9579-27c5-424f-b1a5-091a48c21016",
    "mode": "custom",
    "name": "Deathlock",
    "type": "undead",
    "src": "MPMM p.86",
    "cr": "4",
    "hp": 36,
    "AC": 12,
    "actions": [
      {
        "id": "f02df217-0dbd-4079-bc45-6983592312c6",
        "name": "Deathly Claw",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 9,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "e75c173f-0615-46a3-8c21-643977d1f278",
        "name": "Grave Bolt",
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
    "id": "933096e6-5404-4043-9268-a6348e09eaec",
    "mode": "custom",
    "name": "Deathlock Mastermind",
    "type": "undead",
    "src": "MPMM p.87",
    "cr": "8",
    "hp": 110,
    "AC": 13,
    "actions": [
      {
        "id": "0593102b-b2d4-40b3-8e66-75e9cbc59845",
        "name": "Deathly Claw",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 13.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "5a7ebc61-b34b-4dff-9d16-527106fd463e",
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
    "id": "2a6f4ff6-3d02-4135-ad29-629aa04dd590",
    "mode": "custom",
    "name": "Deathlock Wight",
    "type": "undead",
    "src": "MPMM p.87",
    "cr": "3",
    "hp": 37,
    "AC": 12,
    "actions": [
      {
        "id": "7bc35225-09f0-4271-9ec6-394e6f284281",
        "name": "Life Drain",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 6.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "fa4cb6d2-8249-47d6-adc3-3de8013a8404",
        "name": "Grave Bolt",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 12,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "d141d8b8-2557-42a8-a596-290a5629a567",
    "mode": "custom",
    "name": "Deep Rothé",
    "type": "beast",
    "src": "MPMM p.71",
    "cr": "1/4",
    "hp": 13,
    "AC": 10,
    "actions": [
      {
        "id": "0ef8c183-4644-4431-825c-6872b1711714",
        "name": "Gore",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 14.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "d3cf6e05-a723-462a-9fe9-4de969bd5eb5",
    "mode": "custom",
    "name": "Deep Scion",
    "type": "monstrosity",
    "src": "MPMM p.88",
    "cr": "3",
    "hp": 67,
    "AC": 11,
    "actions": [
      {
        "id": "b9d69534-4f17-486e-8a5f-630d1369ab4f",
        "name": "Battleaxe",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 9.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "1ee776a2-d814-45fd-82dd-e94c6211d3a5",
        "name": "Bite (Hybrid Form Only)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 6.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "5ee4a8c2-486b-45d1-9193-06634ac83d10",
        "name": "Claw (Hybrid Form Only)",
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
    "id": "d9a31fad-5ddf-49cf-b747-b1676ec34a84",
    "mode": "custom",
    "name": "Deinonychus",
    "type": "beast",
    "src": "MPMM p.95",
    "cr": "1",
    "hp": 26,
    "AC": 13,
    "actions": [
      {
        "id": "a3445b34-0f27-4f5f-9d5a-3b298cafaaca",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 6.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "0dee9066-0013-403a-8408-d23475706ed0",
        "name": "Claw",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 6.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "bcb6ab50-a138-475f-a92b-8821eea05b64",
    "mode": "custom",
    "name": "Demogorgon",
    "type": "fiend",
    "src": "MPMM p.90",
    "cr": "26",
    "hp": 464,
    "AC": 22,
    "actions": [
      {
        "id": "7751b150-2c9b-4d56-bc6a-00f3cd1c5985",
        "name": "Tentacle",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 28.5,
        "toHit": 17,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "f129a5ce-18a4-42cb-9c24-0763534e0cf7",
    "mode": "custom",
    "name": "Derro",
    "type": "aberration",
    "src": "MPMM p.91",
    "cr": "1/4",
    "hp": 13,
    "AC": 13,
    "actions": [
      {
        "id": "3c7fcb24-cdb9-45fa-90c1-ce69b5769154",
        "name": "Hooked Spear",
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
        "id": "25ad01eb-6378-44ef-83a8-74af338dad42",
        "name": "Light Crossbow",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 6.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "9b9db92f-5b47-4c10-9d95-2e8b38e3d0d4",
    "mode": "custom",
    "name": "Derro Savant",
    "type": "aberration",
    "src": "MPMM p.92",
    "cr": "3",
    "hp": 36,
    "AC": 13,
    "actions": [
      {
        "id": "e2b41124-7536-43e8-a317-f86d96e11f1c",
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
    "id": "89763784-00d0-48d8-988f-26802abf3b86",
    "mode": "custom",
    "name": "Devourer",
    "type": "undead",
    "src": "MPMM p.93",
    "cr": "13",
    "hp": 189,
    "AC": 16,
    "actions": [
      {
        "id": "ab581f30-381d-44ab-9f0a-967766762858",
        "name": "Claw",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 33,
        "toHit": 10,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "4ee8c498-7e52-4c3a-8ced-4a138497639b",
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
    "id": "80a4908a-f3ac-4181-9eff-119a4e068256",
    "mode": "custom",
    "name": "Dhergoloth",
    "type": "fiend",
    "src": "MPMM p.94",
    "cr": "7",
    "hp": 119,
    "AC": 15,
    "actions": [
      {
        "id": "b40d102f-4d2e-4020-962c-da8b40ce04e1",
        "name": "Claw",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 12,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "0a1fe3a7-6aa1-4605-8212-c51ad12a898f",
        "name": "Flailing Claws",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 22.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "bea6f173-1373-4f2c-b2db-81849fce1325",
    "mode": "custom",
    "name": "Dimetrodon",
    "type": "beast",
    "src": "MPMM p.95",
    "cr": "1/4",
    "hp": 19,
    "AC": 12,
    "actions": [
      {
        "id": "ce6a3147-0123-4045-a9b7-94c088b55bb2",
        "name": "Bite",
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
    "id": "34fedfec-2658-4f71-aa84-e2ba8a7d8d49",
    "mode": "custom",
    "name": "Dire Troll",
    "type": "giant",
    "src": "MPMM p.246",
    "cr": "13",
    "hp": 172,
    "AC": 15,
    "actions": [
      {
        "id": "ffdbecb9-e0bb-44c1-b633-00bf0fbcd178",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 16,
        "toHit": 11,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "7a26806e-c639-4ccc-8edf-d245148af104",
        "name": "Claws",
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
        "id": "be3d46f9-f14f-434b-9495-f72b508acfa9",
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
    "id": "a374bdda-802f-4f45-a139-b985e657e77d",
    "mode": "custom",
    "name": "Diviner Wizard",
    "type": "humanoid",
    "src": "MPMM p.261",
    "cr": "8",
    "hp": 90,
    "AC": 12,
    "actions": [
      {
        "id": "c6b5082c-97c5-4440-87b2-d2061ca4d02a",
        "name": "Arcane Burst",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 20.5,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "2ac2bc58-ae5d-43d8-983e-dd7175f1552e",
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
    "id": "010b26ec-0a78-491e-bf6a-39f8ac8ed34d",
    "mode": "custom",
    "name": "Dolphin",
    "type": "beast",
    "src": "MPMM p.97",
    "cr": "1/8",
    "hp": 11,
    "AC": 12,
    "actions": [
      {
        "id": "8bbe232b-775c-4639-b667-99202092b6e9",
        "name": "Slam",
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
    "id": "a215c70c-7de2-4070-890c-9344b0f3f5e7",
    "mode": "custom",
    "name": "Dolphin Delighter",
    "type": "fey",
    "src": "MPMM p.97",
    "cr": "3",
    "hp": 27,
    "AC": 14,
    "actions": [
      {
        "id": "a0450dd0-669f-4b5e-978d-5e26c03dc644",
        "name": "Dazzling Slam",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 12.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "20c7b41f-3a97-421c-a1a6-01b1dff2c168",
    "mode": "custom",
    "name": "Draegloth",
    "type": "fiend",
    "src": "MPMM p.98",
    "cr": "7",
    "hp": 123,
    "AC": 15,
    "actions": [
      {
        "id": "6b7ae369-fda3-47bf-9cfb-d2046d36c9ef",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 16,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "f098f032-2d61-42b5-9120-b649e2d3a29e",
        "name": "Claw",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 16,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "0e6663cd-4666-46c3-9f68-b84300189921",
    "mode": "custom",
    "name": "Drow Arachnomancer",
    "type": "humanoid",
    "src": "MPMM p.99",
    "cr": "13",
    "hp": 162,
    "AC": 15,
    "actions": [
      {
        "id": "f570d79a-40ed-435e-bdae-76b10be3dcf7",
        "name": "Bite (Spider Form Only)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 43.5,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "f8719e10-ed93-4165-a8b6-4902ea9251f9",
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
    "id": "d4d70922-e881-4a58-9ac5-c09f1180e4e6",
    "mode": "custom",
    "name": "Drow Favored Consort",
    "type": "humanoid",
    "src": "MPMM p.100",
    "cr": "18",
    "hp": 240,
    "AC": 15,
    "actions": [
      {
        "id": "ac8b6b8a-47cf-4b50-84cf-82d21fd763a6",
        "name": "Scimitar",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 35.5,
        "toHit": 11,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "07d5bcee-707b-4317-8448-811a1f11eee1",
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
    "id": "86fe8cbf-04c6-4df0-bc92-7032bbf1eb2d",
    "mode": "custom",
    "name": "Drow House Captain",
    "type": "humanoid",
    "src": "MPMM p.101",
    "cr": "9",
    "hp": 162,
    "AC": 16,
    "actions": [
      {
        "id": "d35fd49d-99a2-4195-b5e9-6669f8f25139",
        "name": "Scimitar",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 21.5,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "a9aa826b-b502-4820-975b-1dc7a9564463",
        "name": "Whip",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 6.5,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "1bb27929-cf50-419e-b867-df5b4a169e8d",
        "name": "Hand Crossbow",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7.5,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "25cb4935-5242-461d-a04e-698f48dc7c2e",
    "mode": "custom",
    "name": "Drow Inquisitor",
    "type": "humanoid",
    "src": "MPMM p.102",
    "cr": "14",
    "hp": 149,
    "AC": 16,
    "actions": [
      {
        "id": "23b98e46-c2cd-4a59-a312-98d1ab0bcdf1",
        "name": "Death Lance",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 26.5,
        "toHit": 10,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "965e2df5-41e7-4e5a-bcd0-acb1955372c8",
    "mode": "custom",
    "name": "Drow Matron Mother",
    "type": "humanoid",
    "src": "MPMM p.104",
    "cr": "20",
    "hp": 247,
    "AC": 17,
    "actions": [
      {
        "id": "57f3e8e3-2299-4d4e-8c4e-d1cbe7c5c6c5",
        "name": "Demon Staff",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 30,
        "toHit": 10,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "f6ed6b0d-61e8-4f37-abcb-9924830d170d",
        "name": "Demon Staff x3",
        "type": "atk",
        "actionSlot": 2,
        "freq": "at will",
        "condition": "default",
        "dpr": 90,
        "toHit": 10,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "3f94b141-99d3-4a00-91fc-2113604bd45c",
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
        "id": "3b458403-5eed-4097-bd0b-afc6b799fdf3",
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
    "id": "8057809b-163d-4585-ad7a-c07967ccb6f8",
    "mode": "custom",
    "name": "Drow Shadowblade",
    "type": "humanoid",
    "src": "MPMM p.105",
    "cr": "11",
    "hp": 150,
    "AC": 17,
    "actions": [
      {
        "id": "fbd3332a-f790-408a-bf9b-0d885c97eea5",
        "name": "Shadow Sword",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 29.5,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "e84c4934-6ba2-4d51-b3cc-f4716c49350f",
        "name": "Hand Crossbow",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 8.5,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "ca3e1dc0-365e-415d-8b6e-24177944ff45",
    "mode": "custom",
    "name": "Duergar Despot",
    "type": "humanoid",
    "src": "MPMM p.107",
    "cr": "12",
    "hp": 119,
    "AC": 21,
    "actions": [
      {
        "id": "ad9fb7e0-2948-4af4-922d-77ef615360b5",
        "name": "Iron Fist",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 23,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 2
      },
      {
        "id": "35e89eec-a2e6-4d53-9cff-1cfeaa220957",
        "name": "Stomping Foot",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10.5,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "dc9ec9fd-4ef4-485c-b883-81a29a8a476f",
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
    "id": "45c3eee5-2e90-42b8-a730-97eae600ee15",
    "mode": "custom",
    "name": "Duergar Hammerer",
    "type": "construct",
    "src": "MPMM p.112",
    "cr": "2",
    "hp": 33,
    "AC": 17,
    "actions": [
      {
        "id": "227973af-6aed-453d-9252-734a0ec7e9e5",
        "name": "Claw",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 6.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "bb4e80fd-8629-4fe7-aa66-d23de96b9607",
        "name": "Hammer",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "79188723-7167-4775-9362-3c6fd0624611",
    "mode": "custom",
    "name": "Duergar Kavalrachni",
    "type": "humanoid",
    "src": "MPMM p.107",
    "cr": "2",
    "hp": 26,
    "AC": 16,
    "actions": [
      {
        "id": "8370bcc2-3ee4-432f-996f-aea5bda4f411",
        "name": "War Pick",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 11.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "ad896f33-03c8-4946-856f-a4c890c798c3",
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
    "id": "4fe0fce5-427a-4823-a15f-f107872e7322",
    "mode": "custom",
    "name": "Duergar Mind Master",
    "type": "humanoid",
    "src": "MPMM p.108",
    "cr": "2",
    "hp": 39,
    "AC": 14,
    "actions": [
      {
        "id": "912fa281-01c7-4e5a-824b-13aaa02bf7f4",
        "name": "Mind-Poison Dagger",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 26.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "63db243c-4b0f-4a2d-ba33-62542cf93951",
    "mode": "custom",
    "name": "Duergar Screamer",
    "type": "construct",
    "src": "MPMM p.111",
    "cr": "3",
    "hp": 38,
    "AC": 15,
    "actions": [
      {
        "id": "23604eca-f917-4d36-b629-318006fb79cb",
        "name": "Drill",
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
        "id": "3a5b1fbe-7dc9-46aa-b091-010eadb6fdb0",
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
    "id": "5671953b-faab-4b59-9eab-f76b1bc05d9e",
    "mode": "custom",
    "name": "Duergar Soulblade",
    "type": "humanoid",
    "src": "MPMM p.109",
    "cr": "1",
    "hp": 27,
    "AC": 14,
    "actions": [
      {
        "id": "80b2e432-7554-4a2d-8ec3-8a801a616b80",
        "name": "Soulblade",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 23.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "15fd4615-c90c-4c5a-8214-2a68c0cc7b9c",
    "mode": "custom",
    "name": "Duergar Stone Guard",
    "type": "humanoid",
    "src": "MPMM p.110",
    "cr": "2",
    "hp": 39,
    "AC": 18,
    "actions": [
      {
        "id": "7f2826e2-3071-468b-b503-e7e99c856f78",
        "name": "Shortsword",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 18.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "8c8b872e-b73f-423e-848d-25e442c5f7e0",
        "name": "Javelin",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 18.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "e80741ad-7578-48c5-b22d-fe5dce3abb09",
    "mode": "custom",
    "name": "Duergar Warlord",
    "type": "humanoid",
    "src": "MPMM p.111",
    "cr": "6",
    "hp": 75,
    "AC": 20,
    "actions": [
      {
        "id": "8a247bc0-13f8-4c1b-9e17-bc2fd4ce7089",
        "name": "Psychic-Attuned Hammer",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 30,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "a4df5d3a-c959-4b95-a6e5-746d855f8ac6",
        "name": "Javelin",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 18.5,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "063d6ed3-2625-4fb6-a42e-4b5ef3f36cc5",
    "mode": "custom",
    "name": "Duergar Xarrorn",
    "type": "humanoid",
    "src": "MPMM p.111",
    "cr": "2",
    "hp": 26,
    "AC": 18,
    "actions": [
      {
        "id": "46b6ec8d-1a8b-41fd-8f58-335024724545",
        "name": "Fire Lance",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 29,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "570d1d17-5f29-432e-9253-b26a805ada97",
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
    "id": "ac3ff074-c0ac-4b89-b6b1-5abd9b635eab",
    "mode": "custom",
    "name": "Dybbuk",
    "type": "fiend",
    "src": "MPMM p.113",
    "cr": "4",
    "hp": 37,
    "AC": 14,
    "actions": [
      {
        "id": "25692fd2-e05e-4a01-b57e-9c16f17ae9ff",
        "name": "Tentacle",
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
    "id": "3316cd33-cf2a-4668-afca-c63e489cfd1f",
    "mode": "custom",
    "name": "Earth Elemental Myrmidon",
    "type": "elemental",
    "src": "MPMM p.122",
    "cr": "7",
    "hp": 127,
    "AC": 18,
    "actions": [
      {
        "id": "b1e24efc-d810-41ec-bd4c-c8efcd9cd8fa",
        "name": "Maul",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 11,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "208acf77-55fa-49a8-8bec-c26ce048a58e",
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
    "id": "70966c2a-bf46-4968-87dd-152e78c9baf6",
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
    "id": "f6fb4fed-7f59-4cf6-9ead-d5757c9d1c57",
    "mode": "custom",
    "name": "Elder Brain",
    "type": "aberration",
    "src": "MPMM p.120",
    "cr": "14",
    "hp": 210,
    "AC": 10,
    "actions": [
      {
        "id": "9696ac55-0906-4514-a9f6-73b4a632db31",
        "name": "Tentacle",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 29.5,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "ec569e4c-a664-4e34-b2bf-19e67afdfc6a",
        "name": "Tentacle",
        "type": "atk",
        "actionSlot": 2,
        "freq": "at will",
        "condition": "default",
        "dpr": 29.5,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "0afc1389-27e1-4137-8c39-88d33b5d6d1f",
        "name": "Mind Blast",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 32.5,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "cfb1927c-f1d2-4fa5-bb1b-f64ff8db9714",
    "mode": "custom",
    "name": "Elder Oblex",
    "type": "ooze",
    "src": "MPMM p.199",
    "cr": "10",
    "hp": 115,
    "AC": 16,
    "actions": [
      {
        "id": "905bcf0e-f151-4911-a444-1d5ba8b5323b",
        "name": "Pseudopod",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 31,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "b6da8e66-a061-4e15-a5ec-8ba729d3b6b4",
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
    "id": "6abf09d1-a835-4a71-9461-d9cd0b44b5e4",
    "mode": "custom",
    "name": "Elder Tempest",
    "type": "elemental",
    "src": "MPMM p.121",
    "cr": "23",
    "hp": 264,
    "AC": 19,
    "actions": [
      {
        "id": "3206a9a6-460f-4066-8df5-3b7f9def3412",
        "name": "Thunderous Slam",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 23,
        "toHit": 16,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "7fdeead7-cd9e-4d8b-9377-012f696f45f7",
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
    "id": "cee501b6-de3f-4b9f-af5b-775240774d4e",
    "mode": "custom",
    "name": "Enchanter Wizard",
    "type": "humanoid",
    "src": "MPMM p.261",
    "cr": "5",
    "hp": 49,
    "AC": 12,
    "actions": [
      {
        "id": "679e02c2-c00b-4dad-9626-0e4e791e3b97",
        "name": "Arcane Burst",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 19.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "9af37558-e745-41a8-982b-61ad9008ed90",
    "mode": "custom",
    "name": "Evoker Wizard",
    "type": "humanoid",
    "src": "MPMM p.262",
    "cr": "9",
    "hp": 121,
    "AC": 12,
    "actions": [
      {
        "id": "550a300f-b7a5-48f9-8f7d-da5a8748a1ca",
        "name": "Arcane Burst",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 25,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "e38148a9-e0ba-4eaf-9c09-44f0ff173b64",
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
    "id": "fc172007-500a-4831-83f7-962c16df4ea7",
    "mode": "custom",
    "name": "Female Steeder",
    "type": "monstrosity",
    "src": "MPMM p.231",
    "cr": "1",
    "hp": 30,
    "AC": 14,
    "actions": [
      {
        "id": "c9554b8d-1141-4e0f-ac3d-dfa91c6d91fa",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 16.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "88d7ce3b-4a1a-4611-9e35-0a8279af249d",
    "mode": "custom",
    "name": "Fire Elemental Myrmidon",
    "type": "elemental",
    "src": "MPMM p.123",
    "cr": "7",
    "hp": 123,
    "AC": 18,
    "actions": [
      {
        "id": "b0b7f0bf-a93c-4d0d-a24d-f5815b5e219a",
        "name": "Scimitar",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7.5,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "dba1519e-f157-46df-b6dc-faed7debc7fc",
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
    "id": "e58ebb6f-c36a-4e6a-8c73-781df439ef22",
    "mode": "custom",
    "name": "Fire Giant Dreadnought",
    "type": "giant",
    "src": "MPMM p.124",
    "cr": "14",
    "hp": 187,
    "AC": 21,
    "actions": [
      {
        "id": "8cc28a8e-34b0-4b3c-8b5d-6f217b918dd5",
        "name": "Fireshield",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 36,
        "toHit": 13,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "be35aba8-b0bf-43df-bb8b-f93e7a9fb495",
        "name": "Rock",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 30,
        "toHit": 13,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "3a3462b7-2189-42e3-b39a-6dff99e758c2",
        "name": "Shield Charge",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 50,
        "toHit": 11,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "ca71f48b-70f3-4059-a6fd-eb31a433f57e",
    "mode": "custom",
    "name": "Firenewt Warlock of Imix",
    "type": "elemental",
    "src": "MPMM p.125",
    "cr": "1",
    "hp": 33,
    "AC": 10,
    "actions": [
      {
        "id": "c8352736-11c1-4924-a307-73544b31e496",
        "name": "Morningstar",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 5.5,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "a53f8a77-9a4f-480a-bf70-77b9a6592ba5",
        "name": "Fire Ray",
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
    "id": "174a7a8a-f263-4c6d-91d8-7e00e1e950b0",
    "mode": "custom",
    "name": "Firenewt Warrior",
    "type": "elemental",
    "src": "MPMM p.125",
    "cr": "1/2",
    "hp": 27,
    "AC": 13,
    "actions": [
      {
        "id": "95955e55-d66f-4461-aebb-526acddb81a0",
        "name": "Scimitar",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 4.5,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "6e644ec3-fd14-4486-b389-a5b9cde70444",
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
    "id": "2a9f2b82-4189-4630-946b-a4f5238a4dea",
    "mode": "custom",
    "name": "Flail Snail",
    "type": "elemental",
    "src": "MPMM p.126",
    "cr": "3",
    "hp": 52,
    "AC": 16,
    "actions": [
      {
        "id": "b2ed2ba7-5e44-49fe-9c34-d90262489f3d",
        "name": "Flail Tentacle",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 5.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "5c9cee64-f340-4dda-91f5-2c9e7837931f",
    "mode": "custom",
    "name": "Flind",
    "type": "fiend",
    "src": "MPMM p.127",
    "cr": "9",
    "hp": 127,
    "AC": 16,
    "actions": [
      {
        "id": "6d5196a7-dfb7-4508-821a-3d98328677b9",
        "name": "Flail of Chaos",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10.5,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "7fcf0856-0cbf-4072-aa17-db80955e0630",
        "name": "Flail of Pain",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 27,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "5e08c8dd-90b6-4711-b387-8a30c577808f",
        "name": "Flail of Paralysis",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10.5,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "1d11224d-d4c4-403b-b727-fc4d6f00d4fb",
        "name": "Longbow",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 6.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "85c18495-4ce6-42a5-bdd5-7cfe0ff2d18f",
    "mode": "custom",
    "name": "Fraz-Urb'luu",
    "type": "fiend",
    "src": "MPMM p.129",
    "cr": "23",
    "hp": 337,
    "AC": 18,
    "actions": [
      {
        "id": "3f34fae3-59a1-43e4-9471-ac4e8acb1843",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 19.5,
        "toHit": 16,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "1a08ed7e-60ef-4a8e-ba9d-7a9119c67ded",
        "name": "Fist",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 22.5,
        "toHit": 16,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "d5499bd9-052e-46e8-9aeb-b7933b5b640d",
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
    "id": "d61a7e7f-5522-4e41-a629-8035fc6de699",
    "mode": "custom",
    "name": "Froghemoth",
    "type": "monstrosity",
    "src": "MPMM p.130",
    "cr": "10",
    "hp": 161,
    "AC": 14,
    "actions": [
      {
        "id": "a2f0b7ba-7389-4381-9110-0666a1c875dd",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 33,
        "toHit": 10,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "c8ae04fa-a761-4306-95c0-3e35e0b82b5a",
        "name": "Tentacle",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 19.5,
        "toHit": 10,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "ce73d46f-e9bd-4939-9f59-4b3faebc4087",
    "mode": "custom",
    "name": "Frost Giant Everlasting One",
    "type": "giant",
    "src": "MPMM p.131",
    "cr": "12",
    "hp": 189,
    "AC": 15,
    "actions": [
      {
        "id": "79c2825c-1265-4832-98c8-c7a6a000fc14",
        "name": "Greataxe",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 57,
        "toHit": 11,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "dfa22be8-2d51-4036-9dc8-d7b4969dcfa9",
        "name": "Rock",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 29,
        "toHit": 11,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "87ac0785-226c-4c8e-bd20-4ee0c0427b7d",
    "mode": "custom",
    "name": "Frost Salamander",
    "type": "elemental",
    "src": "MPMM p.132",
    "cr": "9",
    "hp": 168,
    "AC": 17,
    "actions": [
      {
        "id": "d0ecd261-85ae-46bf-af14-c4c94a42a3a1",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 15,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "147e780c-264f-45e7-988b-581743344881",
        "name": "Claw",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 8.5,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "b19afa45-32c3-4ca6-8846-3c7feae3b8f8",
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
    "id": "762ebebe-667f-4b42-a193-6b83f050b081",
    "mode": "custom",
    "name": "Gauth",
    "type": "aberration",
    "src": "MPMM p.133",
    "cr": "6",
    "hp": 52,
    "AC": 15,
    "actions": [
      {
        "id": "dff91310-1ece-4ebf-9b0f-a2bcbefd3253",
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
        "id": "80775b5f-8011-4e26-860c-6cdff3530c42",
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
    "id": "5d5114b3-1288-4ed0-ba52-7ff376daa97c",
    "mode": "custom",
    "name": "Gazer",
    "type": "aberration",
    "src": "MPMM p.134",
    "cr": "1/2",
    "hp": 13,
    "AC": 13,
    "actions": [
      {
        "id": "26eaa2c2-2576-43f4-a8b5-e23c7eb6c5e0",
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
    "id": "7d626809-7dd6-44ea-84bd-5f3394a7f536",
    "mode": "custom",
    "name": "Geryon",
    "type": "fiend",
    "src": "MPMM p.136",
    "cr": "22",
    "hp": 300,
    "AC": 19,
    "actions": [
      {
        "id": "b4b97c24-14fe-4b1d-8075-6a772264e848",
        "name": "Claw",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 50,
        "toHit": 16,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "98081d7e-0331-4c5b-88d1-993b4c5d7d4b",
        "name": "Stinger",
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
    "id": "91a998a4-3665-46e2-95aa-9b282537a366",
    "mode": "custom",
    "name": "Giant Strider",
    "type": "elemental",
    "src": "MPMM p.137",
    "cr": "1",
    "hp": 22,
    "AC": 14,
    "actions": [
      {
        "id": "e61dd08f-5cb0-4048-8be9-b98a01838e34",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 8.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "a532de11-9207-4d6a-98d1-794d9fab0ea4",
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
    "id": "2996d687-c5ac-4344-801b-f4b6ea0c2330",
    "mode": "custom",
    "name": "Giff",
    "type": "humanoid",
    "src": "MPMM p.138",
    "cr": "3",
    "hp": 60,
    "AC": 16,
    "actions": [
      {
        "id": "33fce093-15b4-4f44-8893-cda3f6b22a19",
        "name": "Longsword",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 18,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "8905f5ac-d60a-44e6-b0a4-43f0c9f041fe",
        "name": "Musket",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 8.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "63756515-f32c-4d3e-9b85-f3ecff562343",
        "name": "Pistol",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "b59e695f-7360-4c15-b185-beca232c23db",
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
    "id": "386d73dd-f991-42de-b48d-0a3804498a80",
    "mode": "custom",
    "name": "Girallon",
    "type": "monstrosity",
    "src": "MPMM p.139",
    "cr": "4",
    "hp": 59,
    "AC": 13,
    "actions": [
      {
        "id": "d1db1181-8dfb-4772-90e8-664bdc09cab1",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "f2f06bf0-40dc-4feb-84c1-e2d19ca430e8",
        "name": "Claw",
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
    "id": "9616bc1e-21dc-4f57-8bd4-8e885677a602",
    "mode": "custom",
    "name": "Githyanki Gish",
    "type": "humanoid",
    "src": "MPMM p.140",
    "cr": "10",
    "hp": 130,
    "AC": 17,
    "actions": [
      {
        "id": "114f3959-0fd4-4e8c-ad23-f2e3703086a0",
        "name": "Longsword",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 38.5,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "603e0c2d-73f5-4b03-92e0-97542169a50d",
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
    "id": "6a895552-4a5b-4423-86cb-0e081264c126",
    "mode": "custom",
    "name": "Githyanki Kith'rak",
    "type": "humanoid",
    "src": "MPMM p.140",
    "cr": "12",
    "hp": 180,
    "AC": 18,
    "actions": [
      {
        "id": "517495d2-8bb0-4551-890d-71486a17039b",
        "name": "Greatsword",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 28.5,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "67f81589-0f07-4506-aa5d-9ca4496e8030",
    "mode": "custom",
    "name": "Githyanki Supreme Commander",
    "type": "humanoid",
    "src": "MPMM p.141",
    "cr": "14",
    "hp": 187,
    "AC": 18,
    "actions": [
      {
        "id": "f216aec7-961c-4046-9b28-5acf9a29322f",
        "name": "Silver Greatsword",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 31.5,
        "toHit": 12,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "bb68294e-f9af-4819-b99c-c836573853e2",
    "mode": "custom",
    "name": "Githzerai Anarch",
    "type": "humanoid",
    "src": "MPMM p.142",
    "cr": "16",
    "hp": 144,
    "AC": 20,
    "actions": [
      {
        "id": "cfe845c5-bc5b-41a7-bdec-aae66d9bdf2c",
        "name": "Unarmed Strike",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 27.5,
        "toHit": 10,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "9d98ca5a-6f72-4d2b-a85f-c892e9f6127e",
    "mode": "custom",
    "name": "Githzerai Enlightened",
    "type": "humanoid",
    "src": "MPMM p.143",
    "cr": "10",
    "hp": 112,
    "AC": 18,
    "actions": [
      {
        "id": "1aece606-132c-4dc6-80e4-ad4ee1bd4ca8",
        "name": "Unarmed Strike",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 31,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "6d83ae63-a363-44f5-97bd-db87b34d45a9",
        "name": "Temporal Strike {@recharge}",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 65,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "cc43548d-d174-42c0-b94f-17fa8e3a4a77",
    "mode": "custom",
    "name": "Gnoll Flesh Gnawer",
    "type": "monstrosity",
    "src": "MPMM p.144",
    "cr": "1",
    "hp": 22,
    "AC": 14,
    "actions": [
      {
        "id": "18ebca23-9d79-470d-9277-f683acf3c2b4",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 4.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "7193f2b1-d4e2-4d31-bc25-65e185b4f860",
        "name": "Shortsword",
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
    "id": "323a6193-e3fd-4691-8d9a-5e3ac8f76ffc",
    "mode": "custom",
    "name": "Gnoll Hunter",
    "type": "monstrosity",
    "src": "MPMM p.144",
    "cr": "1/2",
    "hp": 22,
    "AC": 13,
    "actions": [
      {
        "id": "188e1f98-d7cf-468f-a631-48325f9e2701",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 4.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "30522d8f-d922-4352-a6a1-19e0d315c436",
        "name": "Spear",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 12,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "fcf49106-8ae9-48fb-92ca-ddf3892667bb",
        "name": "Longbow",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 6.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "6a79d38d-b87a-4767-b942-09baea47a0e8",
    "mode": "custom",
    "name": "Gnoll Witherling",
    "type": "undead",
    "src": "MPMM p.145",
    "cr": "1/4",
    "hp": 11,
    "AC": 12,
    "actions": [
      {
        "id": "dc0d1448-54c9-4bce-bc31-12a790900291",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 4.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "be8d6cff-5a51-4c94-91e4-a899c4d0cd52",
        "name": "Spiked Club",
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
    "id": "a8a990e3-bfe0-4257-bb80-aa44aa064bc4",
    "mode": "custom",
    "name": "Gray Render",
    "type": "monstrosity",
    "src": "MPMM p.146",
    "cr": "12",
    "hp": 189,
    "AC": 19,
    "actions": [
      {
        "id": "1344fdce-68f9-41d8-83dc-0f69d3ae972b",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 17,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "516d824f-4e8a-4c22-b722-92b4cf58ba8d",
        "name": "Claw",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 23.5,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "2e2cfd20-52e7-4299-9d3b-4ca9c9d4dbf3",
    "mode": "custom",
    "name": "Graz'zt",
    "type": "fiend",
    "src": "MPMM p.148",
    "cr": "24",
    "hp": 346,
    "AC": 20,
    "actions": [
      {
        "id": "4e372f53-6a8f-4512-96a6-d756f520b1b4",
        "name": "Wave of Sorrow (Greatsword)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 34,
        "toHit": 13,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "4a5da7ac-188b-44f1-921e-632e71446102",
    "mode": "custom",
    "name": "Green Abishai",
    "type": "fiend",
    "src": "MPMM p.40",
    "cr": "15",
    "hp": 195,
    "AC": 18,
    "actions": [
      {
        "id": "fbfa40da-3dba-49f2-81b4-a535ccbfd37f",
        "name": "Fiendish Claw",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 28.5,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "63ea5640-2210-4ee8-9ace-6341273a2473",
    "mode": "custom",
    "name": "Grung",
    "type": "humanoid",
    "src": "MPMM p.149",
    "cr": "1/4",
    "hp": 11,
    "AC": 12,
    "actions": [
      {
        "id": "7f976b8c-ccb9-45fd-889c-9b33b5030fb1",
        "name": "Dagger",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 9.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "76d48a08-bb14-4b04-9ade-515022563394",
    "mode": "custom",
    "name": "Grung Elite Warrior",
    "type": "humanoid",
    "src": "MPMM p.150",
    "cr": "2",
    "hp": 49,
    "AC": 13,
    "actions": [
      {
        "id": "7c1009eb-08d3-451c-ba26-101290e1683e",
        "name": "Dagger",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "58a10350-2d07-440d-b5df-d2922c65a804",
        "name": "Shortbow",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 11.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "4a7ba693-3cff-4b30-83c6-655414f455b6",
    "mode": "custom",
    "name": "Grung Wildling",
    "type": "humanoid",
    "src": "MPMM p.150",
    "cr": "1",
    "hp": 27,
    "AC": 16,
    "actions": [
      {
        "id": "0abfba35-bc5d-45bf-8d12-79373b880573",
        "name": "Dagger",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "affdf2c3-9a4f-4096-b4fd-f9e93f70ceb5",
        "name": "Shortbow",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 11.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "7fb9f94c-d3fb-41be-a61a-180866b5b5d7",
    "mode": "custom",
    "name": "Guard Drake",
    "type": "dragon",
    "src": "MPMM p.151",
    "cr": "2",
    "hp": 52,
    "AC": 14,
    "actions": [
      {
        "id": "196a5361-d421-45e2-9097-c0c6b6708a29",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "0eacfe0f-82ba-4d6d-91ab-7a9a562a78a1",
        "name": "Tail",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 6.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "4ca30fe5-354e-410c-9867-6a2d8436e991",
    "mode": "custom",
    "name": "Hadrosaurus",
    "type": "beast",
    "src": "MPMM p.96",
    "cr": "1/4",
    "hp": 19,
    "AC": 11,
    "actions": [
      {
        "id": "64bc737b-8c80-46fd-b3c3-328a345072e9",
        "name": "Tail",
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
    "id": "efed2bfb-afa2-4f0e-ac85-63dd7f24dd9a",
    "mode": "custom",
    "name": "Hellfire Engine",
    "type": "construct",
    "src": "MPMM p.152",
    "cr": "16",
    "hp": 216,
    "AC": 18,
    "actions": [
      {
        "id": "8ec24b7f-48ee-49d0-bdc8-9dc3fcf096ed",
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
        "id": "81077150-abd9-47de-bee0-9a26bd7d1c21",
        "name": "Hellfire Weapons",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 154,
        "toHit": 10,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "32bfa272-9ed2-4ac2-b796-8efafd1cd804",
    "mode": "custom",
    "name": "Hobgoblin Devastator",
    "type": "fey",
    "src": "MPMM p.153",
    "cr": "4",
    "hp": 45,
    "AC": 13,
    "actions": [
      {
        "id": "9eb376ba-f09f-4ce4-98de-3ff1fb8e16d4",
        "name": "Quarterstaff",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 23.5,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "718c2fbb-ffe4-483b-8fe8-20f054fb0258",
        "name": "Devastating Bolt",
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
    "id": "59ed178b-a932-4c5f-9b5a-825f14da9955",
    "mode": "custom",
    "name": "Hobgoblin Iron Shadow",
    "type": "fey",
    "src": "MPMM p.154",
    "cr": "2",
    "hp": 32,
    "AC": 15,
    "actions": [
      {
        "id": "53e1d71c-65f6-429d-9b0e-9134980e2755",
        "name": "Unarmed Strike",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 5.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "9ea1a6ae-080a-4eb8-bc0b-659186bd2710",
        "name": "Dart",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 5.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "91db2c29-4ff9-465c-ad73-039d003e7cbb",
    "mode": "custom",
    "name": "Howler",
    "type": "fiend",
    "src": "MPMM p.155",
    "cr": "8",
    "hp": 90,
    "AC": 16,
    "actions": [
      {
        "id": "0de2084c-ece9-4710-bdff-a04ed9804d76",
        "name": "Rending Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 32,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "42763a7e-380b-41f8-8ba8-eab73070599a",
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
    "id": "a628824e-b10c-4a73-bfd1-f5ef30d545fc",
    "mode": "custom",
    "name": "Hungry Sorrowsworn",
    "type": "monstrosity",
    "src": "MPMM p.223",
    "cr": "11",
    "hp": 225,
    "AC": 17,
    "actions": [
      {
        "id": "c1fcfeda-d1a3-4b4c-affa-36ce03bcd8e5",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 22,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "788ada9b-ffe4-46be-9eef-a652be12ff47",
        "name": "Claw",
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
    "id": "60c45ba7-8631-4568-b30c-9920dfa4cef6",
    "mode": "custom",
    "name": "Hutijin",
    "type": "fiend",
    "src": "MPMM p.157",
    "cr": "21",
    "hp": 200,
    "AC": 19,
    "actions": [
      {
        "id": "094dfa6d-c329-49ef-8c36-23cf62c219e3",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 25.5,
        "toHit": 15,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "1241ee91-96fb-47db-b708-296bfa59355b",
        "name": "Claw",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 17,
        "toHit": 15,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "16bbbb05-5866-4b7d-a1e2-c44c4531b861",
        "name": "Mace",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 15,
        "toHit": 15,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "094d055e-c14b-4468-b594-5e9d1ff195a5",
        "name": "Tail",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 19,
        "toHit": 15,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "ba2199e6-7119-473b-92b8-442de0e67084",
    "mode": "custom",
    "name": "Hydroloth",
    "type": "fiend",
    "src": "MPMM p.158",
    "cr": "9",
    "hp": 135,
    "AC": 15,
    "actions": [
      {
        "id": "a772cefb-5f87-4f0b-9ec7-2b4c0479206d",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 27,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "90f134fd-6891-48a5-a041-8dff3eed59e1",
        "name": "Claw",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 25,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "980dc961-764d-4f35-b93e-bdb39ccf40d5",
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
    "id": "9e289ee4-6867-4013-a7ad-cb9503fa06ae",
    "mode": "custom",
    "name": "Illusionist Wizard",
    "type": "humanoid",
    "src": "MPMM p.263",
    "cr": "3",
    "hp": 44,
    "AC": 12,
    "actions": [
      {
        "id": "a50b378f-8135-4de8-8671-70710034c85e",
        "name": "Arcane Burst",
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
    "id": "f07a68a1-8154-4a5c-90fb-251c7d1096a9",
    "mode": "custom",
    "name": "Juiblex",
    "type": "fiend",
    "src": "MPMM p.160",
    "cr": "23",
    "hp": 350,
    "AC": 18,
    "actions": [
      {
        "id": "6164523e-967a-4cfd-a819-cc24decc5d33",
        "name": "Acid Lash",
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
        "id": "3ff83548-55ab-4407-8c1c-47fa65bc32e5",
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
    "id": "92e0b543-9a7d-4f24-a9ff-ee66435c9bf7",
    "mode": "custom",
    "name": "Ki-rin",
    "type": "celestial",
    "src": "MPMM p.162",
    "cr": "12",
    "hp": 153,
    "AC": 20,
    "actions": [
      {
        "id": "d2d01b39-ffff-45a9-968a-51d6942490f4",
        "name": "Hoof",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "c121da52-5850-4ea7-aa45-b596ea088665",
        "name": "Horn",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 14,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "5ebd416e-b5ff-45ba-9545-4517c1cc1ef2",
        "name": "Sacred Fire",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 18.5,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "c0da8ddb-c005-464d-a27d-e0a355996c27",
    "mode": "custom",
    "name": "Kobold Dragonshield",
    "type": "dragon",
    "src": "MPMM p.163",
    "cr": "1",
    "hp": 44,
    "AC": 15,
    "actions": [
      {
        "id": "204843c9-749f-467e-ab3e-002cff2cac45",
        "name": "Spear",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "4d768309-2d1e-4805-91c4-bf69c83e852c",
    "mode": "custom",
    "name": "Kobold Inventor",
    "type": "humanoid",
    "src": "MPMM p.164",
    "cr": "1/4",
    "hp": 13,
    "AC": 12,
    "actions": [
      {
        "id": "db1cf8d6-ea53-4ea9-ba9b-ac16547cf477",
        "name": "Dagger",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 4.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "2ff51105-2c55-4588-a37a-9243faf0c570",
        "name": "Sling",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 4.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "b938c868-9199-488c-a260-b3ba4a06c704",
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
    "id": "faaaf11f-91b1-46b4-8048-b328f79a87c0",
    "mode": "custom",
    "name": "Kobold Scale Sorcerer",
    "type": "humanoid",
    "src": "MPMM p.165",
    "cr": "1",
    "hp": 27,
    "AC": 15,
    "actions": [
      {
        "id": "b9070f64-f500-41d3-b60e-ec1617ab70a0",
        "name": "Dagger",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 4.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "fd8bab86-4c8a-4e3b-94e2-008e56fac45c",
        "name": "Chromatic Bolt",
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
    "id": "286e4faf-2c9f-4920-90d6-3cc43e952d2c",
    "mode": "custom",
    "name": "Korred",
    "type": "fey",
    "src": "MPMM p.166",
    "cr": "7",
    "hp": 93,
    "AC": 17,
    "actions": [
      {
        "id": "28dda42f-821c-4a48-b6be-902a5e413bd9",
        "name": "Greatclub",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 30,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "05668416-0dd8-4504-ad04-9dd045dc4a3e",
        "name": "Rock",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 30,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "edd382bd-7f87-4bfd-999f-8d6d6edf8e88",
    "mode": "custom",
    "name": "Kraken Priest",
    "type": "monstrosity",
    "src": "MPMM p.167",
    "cr": "5",
    "hp": 75,
    "AC": 15,
    "actions": [
      {
        "id": "9b9a29b7-ef1e-4c2b-85fc-94514aaf9073",
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
        "id": "aa8417eb-64d4-4dc8-a2c6-94d86aed9a4f",
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
    "id": "35123082-9cad-4ac9-b125-5ee737f0c860",
    "mode": "custom",
    "name": "Kruthik Hive Lord",
    "type": "monstrosity",
    "src": "MPMM p.169",
    "cr": "5",
    "hp": 102,
    "AC": 20,
    "actions": [
      {
        "id": "7896cfc5-e03c-4129-91ca-d9d0b7a255fc",
        "name": "Stab",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 9.5,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "09dc308c-62d9-4248-9461-bd016a4775e5",
        "name": "Spike",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "608f7105-0db0-4ff9-a748-938148477071",
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
    "id": "d17d36be-14cf-435d-9f74-df634fb44671",
    "mode": "custom",
    "name": "Leucrotta",
    "type": "monstrosity",
    "src": "MPMM p.170",
    "cr": "3",
    "hp": 67,
    "AC": 14,
    "actions": [
      {
        "id": "35c1a6e9-278e-4914-a05e-f505035590d3",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 8.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "596677e7-f109-4262-a639-849b83269a66",
        "name": "Hooves",
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
    "id": "9264398c-c684-47d2-bb03-46d994ab106b",
    "mode": "custom",
    "name": "Leviathan",
    "type": "elemental",
    "src": "MPMM p.171",
    "cr": "20",
    "hp": 328,
    "AC": 17,
    "actions": [
      {
        "id": "a108a8d9-7c2b-47a9-a7ef-2dc35b1f7951",
        "name": "Slam",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 34,
        "toHit": 14,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "6e575f1a-f1ca-420e-b038-169728c81b96",
        "name": "Slam",
        "type": "atk",
        "actionSlot": 2,
        "freq": "at will",
        "condition": "default",
        "dpr": 34,
        "toHit": 14,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "5cedae9e-c016-4ffc-acd8-6caf14810924",
        "name": "Tail",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 29.5,
        "toHit": 14,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "6437a35e-ba5c-4919-8ca8-45197f8c6098",
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
    "id": "dc013a3c-8f33-4478-8dd0-54971255057f",
    "mode": "custom",
    "name": "Lonely Sorrowsworn",
    "type": "monstrosity",
    "src": "MPMM p.223",
    "cr": "9",
    "hp": 112,
    "AC": 16,
    "actions": [
      {
        "id": "a89f62e4-3b0a-47ad-9eb1-63fc4364fef8",
        "name": "Harpoon Arm",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 21,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "9fd34664-e2d8-422f-9d07-efa19f0d0d96",
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
    "id": "d6289978-7204-44b6-8569-bde38eb2ffb6",
    "mode": "custom",
    "name": "Lost Sorrowsworn",
    "type": "monstrosity",
    "src": "MPMM p.224",
    "cr": "7",
    "hp": 78,
    "AC": 15,
    "actions": [
      {
        "id": "8dc9c49a-b949-45b7-9e5a-16c57164890a",
        "name": "Arm Spike",
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
        "id": "69fb41ba-8af3-4c53-8b4b-50530ba05754",
        "name": "Embrace",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 52,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "91aceb57-e010-4a9e-b079-b4504aae5b3c",
    "mode": "custom",
    "name": "Male Steeder",
    "type": "monstrosity",
    "src": "MPMM p.231",
    "cr": "1/4",
    "hp": 13,
    "AC": 12,
    "actions": [
      {
        "id": "67ce10e9-1956-4460-8cab-794f5bab5690",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 11,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "84e44ae9-da20-40ef-b9ee-7886c1dcea44",
    "mode": "custom",
    "name": "Martial Arts Adept",
    "type": "humanoid",
    "src": "MPMM p.172",
    "cr": "3",
    "hp": 60,
    "AC": 16,
    "actions": [
      {
        "id": "9202dce2-ebdc-43f4-a120-40707e4cdfa8",
        "name": "Unarmed Strike",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "16531612-5e9c-4f71-849f-c3f9468223c9",
        "name": "Dart",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 5.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "37c3154b-1979-402c-afa8-6bf261fc25f7",
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
    "id": "a2c624b0-c464-405e-ad7d-7cb6698e856d",
    "mode": "custom",
    "name": "Master Thief",
    "type": "humanoid",
    "src": "MPMM p.174",
    "cr": "5",
    "hp": 84,
    "AC": 16,
    "actions": [
      {
        "id": "53bbaf36-3c09-4c4b-a3a5-3ca8dc0d571b",
        "name": "Shortsword",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 11,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "e66b7cd3-bd31-4479-9dcc-77008a7466d7",
        "name": "Shortbow",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 11,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "a074c98a-510d-4224-b5fd-82332461a3be",
    "mode": "custom",
    "name": "Maurezhi",
    "type": "fiend",
    "src": "MPMM p.175",
    "cr": "7",
    "hp": 88,
    "AC": 15,
    "actions": [
      {
        "id": "265d429a-1f1d-4784-8186-15d4adec2f62",
        "name": "Bite",
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
        "id": "2058bc32-737f-4f9a-af89-7beac301c88c",
        "name": "Claw",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 12,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "52d0d8d1-1d40-412f-9c52-46dc9c0e687c",
    "mode": "custom",
    "name": "Maw Demon",
    "type": "fiend",
    "src": "MPMM p.176",
    "cr": "1",
    "hp": 33,
    "AC": 13,
    "actions": [
      {
        "id": "bcb7a2c7-b150-4aaa-8b3a-f28a9533582c",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 11,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "7062fcde-6679-4b7a-bd85-66a630959421",
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
    "id": "5df327a5-ec11-4740-b4a3-ca887cf75485",
    "mode": "custom",
    "name": "Meazel",
    "type": "monstrosity",
    "src": "MPMM p.177",
    "cr": "1",
    "hp": 35,
    "AC": 13,
    "actions": [
      {
        "id": "1afd6652-2912-4d82-8abb-f059fe2aa008",
        "name": "Garrote",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 16.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "dbb05289-35b9-4afe-b2e8-82281e03ca5b",
        "name": "Shortsword",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "df442262-fd5a-4d6b-bd7d-2543f88b2ae2",
    "mode": "custom",
    "name": "Meenlock",
    "type": "fey",
    "src": "MPMM p.178",
    "cr": "2",
    "hp": 31,
    "AC": 15,
    "actions": [
      {
        "id": "7443ebeb-1bdd-4118-a3cd-52feedac1ccf",
        "name": "Claw",
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
    "id": "38b701a5-348a-48ce-97d7-a89cb7cb0be4",
    "mode": "custom",
    "name": "Merregon",
    "type": "fiend",
    "src": "MPMM p.179",
    "cr": "4",
    "hp": 45,
    "AC": 16,
    "actions": [
      {
        "id": "d6b9ea11-c30e-4850-8666-89babf817887",
        "name": "Halberd",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 9.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "bd57e246-d000-4d2c-ba56-7dfc0c015465",
        "name": "Heavy Crossbow",
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
    "id": "9346a7cc-3bbe-4ca5-ad18-e43a82d1f13a",
    "mode": "custom",
    "name": "Merrenoloth",
    "type": "fiend",
    "src": "MPMM p.180",
    "cr": "3",
    "hp": 40,
    "AC": 13,
    "actions": [
      {
        "id": "8903699e-5595-4e14-b11b-773697dfe115",
        "name": "Oar",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 8,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "449801b8-8928-4800-9252-4595a60c5e57",
    "mode": "custom",
    "name": "Mindwitness",
    "type": "aberration",
    "src": "MPMM p.181",
    "cr": "5",
    "hp": 75,
    "AC": 15,
    "actions": [
      {
        "id": "7d053f8d-4da6-4009-9bc1-fbf1d50d4a8f",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 16,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "e0b2b2d8-e694-472d-a98e-5ee0386f2c5d",
        "name": "Tentacles",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 20,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "991f8515-2870-4ac4-83b6-94a55498aa0f",
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
    "id": "1704931e-f395-429d-b72e-3abac411d816",
    "mode": "custom",
    "name": "Moloch",
    "type": "fiend",
    "src": "MPMM p.183",
    "cr": "21",
    "hp": 253,
    "AC": 19,
    "actions": [
      {
        "id": "ed319049-37e6-4cae-89bd-3ce77b2e6a1f",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 26,
        "toHit": 15,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "77b96cb3-01c0-49c5-96cd-fccf639c24da",
        "name": "Claw",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 17,
        "toHit": 15,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "3405ef43-b09e-4a80-81e8-a4ce5213e686",
        "name": "Many-Tailed Whip",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 24,
        "toHit": 15,
        "target": "enemy with most HP",
        "targets": 2
      },
      {
        "id": "59fdb312-c85c-4dd3-a084-4632be292c22",
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
    "id": "ec6174e7-40e2-4985-a7ca-e3dd0106e412",
    "mode": "custom",
    "name": "Molydeus",
    "type": "fiend",
    "src": "MPMM p.184",
    "cr": "21",
    "hp": 216,
    "AC": 19,
    "actions": [
      {
        "id": "b9402381-e7bc-45ec-bf49-d78719ef6a54",
        "name": "Demonic Weapon",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 62,
        "toHit": 16,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "96820151-9a71-4c60-a888-9156b0cac71b",
        "name": "Snakebite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 16,
        "toHit": 16,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "f4229b93-b7ae-49f1-9d6a-3ce129cb59bd",
        "name": "Wolf Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 25.5,
        "toHit": 16,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "c0a74f32-9fe4-455b-ae89-cd562e833930",
    "mode": "custom",
    "name": "Morkoth",
    "type": "aberration",
    "src": "MPMM p.186",
    "cr": "11",
    "hp": 165,
    "AC": 17,
    "actions": [
      {
        "id": "dd8a70c5-d8a5-4787-969d-db3a42a4bbfc",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 19.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "d0a0437e-5b0b-485b-a667-36bb0353449b",
        "name": "Tentacles",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 15.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "2ac224f9-2154-40f5-b818-8125ebcb5b74",
    "mode": "custom",
    "name": "Mouth of Grolantor",
    "type": "giant",
    "src": "MPMM p.187",
    "cr": "6",
    "hp": 105,
    "AC": 14,
    "actions": [
      {
        "id": "1ecdddca-27d4-4ffc-b47f-9678bfc41d36",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 15.5,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "d8e6b8da-c7ad-4b98-bfd5-4c614fbb171c",
        "name": "Fist",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 18.5,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "b513c9ff-8768-4f37-b654-d604559451c1",
    "mode": "custom",
    "name": "Nabassu",
    "type": "fiend",
    "src": "MPMM p.188",
    "cr": "15",
    "hp": 190,
    "AC": 18,
    "actions": [
      {
        "id": "207a0b51-d34f-4b4b-b9e4-19b0b2dabe51",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 38.5,
        "toHit": 11,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "36335419-3560-48f1-86ca-4dc46ce79749",
        "name": "Claw",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 28,
        "toHit": 11,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "b8e12b24-336e-4b19-bd6b-6dcd2bc3ec69",
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
    "id": "db706245-2b95-4bbb-9af1-4d283e3b76f2",
    "mode": "custom",
    "name": "Nagpa",
    "type": "monstrosity",
    "src": "MPMM p.189",
    "cr": "17",
    "hp": 203,
    "AC": 19,
    "actions": [
      {
        "id": "36752dbf-abbe-4fce-98d4-0b6e64b25dcb",
        "name": "Staff",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 33.5,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "4db26f65-f083-41c3-aa97-22d18e9d5973",
        "name": "Deathly Ray",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 30.5,
        "toHit": 12,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "024f8133-9435-4558-80d5-c2864de03cae",
    "mode": "custom",
    "name": "Narzugon",
    "type": "fiend",
    "src": "MPMM p.190",
    "cr": "13",
    "hp": 112,
    "AC": 20,
    "actions": [
      {
        "id": "74e503ea-99ef-4d07-be76-00b29ce7da96",
        "name": "Hellfire Lance",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 28,
        "toHit": 10,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "d2c2c64f-d552-4902-90bf-76557f8a7de7",
    "mode": "custom",
    "name": "Necromancer Wizard",
    "type": "humanoid",
    "src": "MPMM p.264",
    "cr": "9",
    "hp": 110,
    "AC": 12,
    "actions": [
      {
        "id": "fa5515e0-6635-4a25-ba67-e1f4a5d04366",
        "name": "Arcane Burst",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 25,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "e3f4d148-10a6-4bf1-850e-3a7b7a6681aa",
    "mode": "custom",
    "name": "Neogi",
    "type": "aberration",
    "src": "MPMM p.192",
    "cr": "3",
    "hp": 33,
    "AC": 15,
    "actions": [
      {
        "id": "0373dc4a-f2c5-45d5-b2f0-9a0277cbb626",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 20.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "eb0a9892-f3c8-464a-8720-89ac33dbcc30",
        "name": "Claw",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 8,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "554adf6c-9114-417d-9ffb-7b1e40bb9a06",
    "mode": "custom",
    "name": "Neogi Hatchling",
    "type": "aberration",
    "src": "MPMM p.191",
    "cr": "1/8",
    "hp": 7,
    "AC": 11,
    "actions": [
      {
        "id": "dc0eb726-b4c2-4646-861b-dbbfa2142fe5",
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
    "id": "7163a172-72c8-4ac1-81cd-b11ac465837e",
    "mode": "custom",
    "name": "Neogi Master",
    "type": "aberration",
    "src": "MPMM p.192",
    "cr": "4",
    "hp": 71,
    "AC": 15,
    "actions": [
      {
        "id": "5a933222-be54-42a0-b0c4-3b0623fcf169",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 20.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "6360b095-78a7-4e2d-8185-6f164859560f",
        "name": "Claw",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 8,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "83879e8b-0fa9-4177-8d15-4b7c51c0544d",
        "name": "Tentacle of Hadar",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 14.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "cb7110b8-4a54-44b1-bc0c-db22c47f16d1",
    "mode": "custom",
    "name": "Neothelid",
    "type": "aberration",
    "src": "MPMM p.193",
    "cr": "13",
    "hp": 232,
    "AC": 16,
    "actions": [
      {
        "id": "7ae8f5bd-fee7-471b-b736-c205af28c452",
        "name": "Tentacles",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 53.5,
        "toHit": 13,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "fde3b855-4012-442c-b4dc-b6c752832e2f",
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
    "id": "5ca39e72-1aa7-49d8-93c2-560400996e01",
    "mode": "custom",
    "name": "Nightwalker",
    "type": "undead",
    "src": "MPMM p.194",
    "cr": "20",
    "hp": 337,
    "AC": 14,
    "actions": [
      {
        "id": "8de7bcac-4af7-43ce-b01c-27405333d6c9",
        "name": "Enervating Focus",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 28.5,
        "toHit": 12,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "8637bbc9-232d-41dc-a30f-8b22ac3a1026",
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
    "id": "ae98fafa-55ed-4ec9-bf08-5773f49febdd",
    "mode": "custom",
    "name": "Nilbog",
    "type": "fey",
    "src": "MPMM p.195",
    "cr": "1",
    "hp": 7,
    "AC": 13,
    "actions": [
      {
        "id": "a219b9b6-cfa6-4ae8-858b-ab01b9a56912",
        "name": "Fool's Scepter",
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
        "id": "b98c8613-ffb2-45b4-b2ac-917b9f2d7bcd",
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
    "id": "61745a03-7875-429c-95fb-980bf97b7f57",
    "mode": "custom",
    "name": "Nupperibo",
    "type": "fiend",
    "src": "MPMM p.196",
    "cr": "1/2",
    "hp": 11,
    "AC": 13,
    "actions": [
      {
        "id": "f7e1998d-3496-47b4-a0fc-1d577f7059db",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 6.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "1521a4a8-cdf8-46c7-a0da-55e139ac27f9",
    "mode": "custom",
    "name": "Oblex Spawn",
    "type": "ooze",
    "src": "MPMM p.197",
    "cr": "1/4",
    "hp": 18,
    "AC": 13,
    "actions": [
      {
        "id": "587a80b7-0fe6-4b2a-9bc0-7d1ad103ac30",
        "name": "Pseudopod",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 8,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "a1e5d44f-394f-4ab8-8117-dc3c78faabc3",
    "mode": "custom",
    "name": "Ogre Battering Ram",
    "type": "giant",
    "src": "MPMM p.200",
    "cr": "4",
    "hp": 76,
    "AC": 11,
    "actions": [
      {
        "id": "02d5b784-60bb-4878-901a-316ef5b2e6bc",
        "name": "Bash",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 15,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "653a12a4-e5ae-4462-97d3-868727508669",
    "mode": "custom",
    "name": "Ogre Bolt Launcher",
    "type": "giant",
    "src": "MPMM p.200",
    "cr": "2",
    "hp": 59,
    "AC": 13,
    "actions": [
      {
        "id": "689deef8-e4ee-4342-9090-c44943465e4d",
        "name": "Fist",
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
        "id": "145fdf6c-77a2-4f50-96b4-121ce2f1d080",
        "name": "Bolt Launcher",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 17.5,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "13622743-8bb1-4e2f-8cea-3b1f05f609d7",
    "mode": "custom",
    "name": "Ogre Chain Brute",
    "type": "giant",
    "src": "MPMM p.201",
    "cr": "3",
    "hp": 59,
    "AC": 11,
    "actions": [
      {
        "id": "79bfbad5-8f61-4a8d-bd38-af1150e3f714",
        "name": "Fist",
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
        "id": "76beddf1-a839-4c49-855c-3cb59898cf0a",
        "name": "Chain Smash {@recharge}",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 13,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "06ac6a0e-930c-4378-95f1-9374c9936f0b",
        "name": "Chain Sweep",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 8.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "b28a2578-8009-48d8-8ca0-517cc84d6592",
    "mode": "custom",
    "name": "Ogre Howdah",
    "type": "giant",
    "src": "MPMM p.201",
    "cr": "2",
    "hp": 59,
    "AC": 15,
    "actions": [
      {
        "id": "016c7fcd-eff1-4b92-aa4d-8f40aa1e51f0",
        "name": "Mace",
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
    "id": "428792a7-8df8-42fc-b3c3-340149d9bf26",
    "mode": "custom",
    "name": "Oinoloth",
    "type": "fiend",
    "src": "MPMM p.202",
    "cr": "12",
    "hp": 119,
    "AC": 17,
    "actions": [
      {
        "id": "23b97174-cacc-42e5-b7b7-895d9557fb3e",
        "name": "Claw",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 36.5,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "3652df2a-1315-469c-b32c-0bb0afee8f90",
    "mode": "custom",
    "name": "Orcus",
    "type": "fiend",
    "src": "MPMM p.204",
    "cr": "26",
    "hp": 405,
    "AC": 17,
    "actions": [
      {
        "id": "205c8921-d77e-4b72-9d7a-bb6bcf8c533c",
        "name": "Wand of Orcus",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 37.5,
        "toHit": 19,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "7cca85fb-7b08-47a0-8c88-9baa0d6c9277",
        "name": "Tail",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 30.5,
        "toHit": 16,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "87373617-a0da-499a-ad74-314f09a23bb0",
        "name": "Necrotic Bolt",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 29.5,
        "toHit": 15,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "0f4e09ef-ef20-4d43-942e-86bfa949413f",
    "mode": "custom",
    "name": "Orthon",
    "type": "fiend",
    "src": "MPMM p.205",
    "cr": "10",
    "hp": 105,
    "AC": 17,
    "actions": [
      {
        "id": "03d2a2d8-0c35-4c3e-815d-a3888ca912ef",
        "name": "Infernal Dagger",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 33,
        "toHit": 10,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "119cda39-9ed5-42b9-b1b5-9d9da4a8f3b1",
        "name": "Brass Crossbow",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 72,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "378e57a4-ac17-4947-ad5a-9a767a02d94a",
    "mode": "custom",
    "name": "Ox",
    "type": "beast",
    "src": "MPMM p.72",
    "cr": "1/4",
    "hp": 15,
    "AC": 10,
    "actions": [
      {
        "id": "c46b6f88-65ba-4706-abd7-b037c410746f",
        "name": "Gore",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 14.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "3ac5c99c-6cf5-4849-8596-fa0b9cf6664d",
    "mode": "custom",
    "name": "Phoenix",
    "type": "elemental",
    "src": "MPMM p.206",
    "cr": "16",
    "hp": 175,
    "AC": 18,
    "actions": [
      {
        "id": "a44c79a4-e3d3-4ab1-9e46-d7d99be46746",
        "name": "Beak",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 15,
        "toHit": 13,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "fc2ab3c7-c5c0-4954-a00a-14502d9416c0",
        "name": "Fiery Talons",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 17,
        "toHit": 13,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "381aa7b1-8805-461c-844e-85540990677e",
    "mode": "custom",
    "name": "Quetzalcoatlus",
    "type": "beast",
    "src": "MPMM p.96",
    "cr": "2",
    "hp": 30,
    "AC": 13,
    "actions": [
      {
        "id": "9b5c6814-7d26-4eea-bbc6-9c762d76fa96",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 23,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "1daa121a-9dc2-4846-91ae-5c9e59baa922",
    "mode": "custom",
    "name": "Quickling",
    "type": "fey",
    "src": "MPMM p.207",
    "cr": "1",
    "hp": 10,
    "AC": 16,
    "actions": [
      {
        "id": "0e3df7ad-0ace-4bda-8d3e-a4b988b4b0f1",
        "name": "Dagger",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 8.5,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "c72ff0b2-e7ad-49e9-ac39-cfc79c301650",
    "mode": "custom",
    "name": "Red Abishai",
    "type": "fiend",
    "src": "MPMM p.40",
    "cr": "19",
    "hp": 289,
    "AC": 22,
    "actions": [
      {
        "id": "d3c0cbc6-f411-409f-9dbc-3e81ad7a2f96",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 61,
        "toHit": 12,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "1e3cc7af-f234-416c-8166-c7fefbfe1ece",
        "name": "Claw",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 28,
        "toHit": 12,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "a8f21244-70ae-4285-8420-2bd260bb4f5d",
    "mode": "custom",
    "name": "Redcap",
    "type": "fey",
    "src": "MPMM p.208",
    "cr": "3",
    "hp": 45,
    "AC": 14,
    "actions": [
      {
        "id": "7048e465-837b-4d2f-af2d-8a5c974ea996",
        "name": "Wicked Sickle",
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
        "id": "ee6201f8-94ae-4fef-8f1a-70321031ec89",
        "name": "Ironbound Pursuit",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 20.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "b248cbc8-4d53-40da-93fd-476d5cfc52d2",
    "mode": "custom",
    "name": "Retriever",
    "type": "construct",
    "src": "MPMM p.209",
    "cr": "14",
    "hp": 210,
    "AC": 19,
    "actions": [
      {
        "id": "4f37a5cb-fac0-4406-9a07-87ff660fcb61",
        "name": "Foreleg",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 15,
        "toHit": 11,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "6d215906-47c1-4214-af40-3f970d2e8b8c",
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
    "id": "3c172227-8c29-4641-8879-535252a5ae0c",
    "mode": "custom",
    "name": "Rot Troll",
    "type": "giant",
    "src": "MPMM p.247",
    "cr": "9",
    "hp": 138,
    "AC": 16,
    "actions": [
      {
        "id": "9cc533b1-9abb-4876-b1ee-d5a72b798a68",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 26,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "a34a36ea-2b89-4559-8b84-c753a23673d9",
        "name": "Claws",
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
    "id": "782932aa-c73c-4f43-842a-27e61c89c95d",
    "mode": "custom",
    "name": "Rutterkin",
    "type": "fiend",
    "src": "MPMM p.210",
    "cr": "2",
    "hp": 37,
    "AC": 12,
    "actions": [
      {
        "id": "29d1dcba-5b52-4e2a-9f8f-1da32b290f19",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 12.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "e4a2fa87-4e24-4af1-a629-2c35f57dd6c6",
    "mode": "custom",
    "name": "Sacred Statue",
    "type": "construct",
    "src": "MPMM p.114",
    "cr": "—" as any,
    "hp": 95,
    "AC": 19,
    "actions": [
      {
        "id": "f678dff2-f286-44e4-abb3-24af3d7b8748",
        "name": "Slam",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 43,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "bf210646-620b-4570-ba2b-5db48378eb35",
        "name": "Rock",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 37,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "a7929d8d-a80f-4f49-b5bd-779347348d16",
    "mode": "custom",
    "name": "Sea Spawn",
    "type": "monstrosity",
    "src": "MPMM p.211",
    "cr": "1",
    "hp": 32,
    "AC": 11,
    "actions": [
      {
        "id": "67763ad0-8f73-4772-b880-137985854acf",
        "name": "Unarmed Strike",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 4.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "1b31f149-cd05-467f-809d-3aa1525614f5",
        "name": "Piscine Anatomy",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 13.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "47e925cf-4fa2-48fb-8e0f-48ebcd6a130e",
    "mode": "custom",
    "name": "Shadar-kai Gloom Weaver",
    "type": "humanoid",
    "src": "MPMM p.213",
    "cr": "9",
    "hp": 104,
    "AC": 14,
    "actions": [
      {
        "id": "44453c71-27b0-48c4-bc86-4521f36cecd6",
        "name": "Shadow Spear",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 33.5,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "73626dac-16e0-4d62-a65e-f70b083deff5",
    "mode": "custom",
    "name": "Shadar-kai Shadow Dancer",
    "type": "humanoid",
    "src": "MPMM p.213",
    "cr": "7",
    "hp": 71,
    "AC": 15,
    "actions": [
      {
        "id": "68e633c1-a132-4638-b373-1bfa3f682089",
        "name": "Spiked Chain",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 32,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "f4640161-0f31-4747-bec8-7870da16f6ea",
    "mode": "custom",
    "name": "Shadar-kai Soul Monger",
    "type": "humanoid",
    "src": "MPMM p.214",
    "cr": "11",
    "hp": 136,
    "AC": 15,
    "actions": [
      {
        "id": "5b03153c-cde7-4d11-8671-71a6b373ee6a",
        "name": "Shadow Dagger",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 32.5,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "a196af56-6222-4487-b676-1ac5d98c0357",
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
    "id": "d6266494-7bdf-49e7-a6b5-3f7f9c2668f3",
    "mode": "custom",
    "name": "Shadow Mastiff",
    "type": "monstrosity",
    "src": "MPMM p.215",
    "cr": "2",
    "hp": 33,
    "AC": 12,
    "actions": [
      {
        "id": "4ae49693-1ed6-4c64-905d-1eabcec77467",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "90d78350-f44c-4963-9a13-93aeccd9f43c",
    "mode": "custom",
    "name": "Shadow Mastiff Alpha",
    "type": "monstrosity",
    "src": "MPMM p.215",
    "cr": "3",
    "hp": 44,
    "AC": 12,
    "actions": [
      {
        "id": "d6a233bc-e9d1-4920-bef1-b641b88ff543",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "f3963c0a-0969-4acd-9448-d352ddfa75b6",
    "mode": "custom",
    "name": "Shoosuva",
    "type": "fiend",
    "src": "MPMM p.216",
    "cr": "8",
    "hp": 136,
    "AC": 14,
    "actions": [
      {
        "id": "63fcc353-edab-40a7-af05-4a0dfd454d0e",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 26,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "4034ba86-64f6-47d7-9595-6a44b7426bb4",
        "name": "Tail Stinger",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 13,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "079a8bff-1367-4173-a99b-58fb3fb3b6a8",
    "mode": "custom",
    "name": "Sibriex",
    "type": "fiend",
    "src": "MPMM p.217",
    "cr": "18",
    "hp": 150,
    "AC": 19,
    "actions": [
      {
        "id": "c8426e66-f9a3-432d-ba7f-55f7c1e6e9b9",
        "name": "Chain",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 20,
        "toHit": 13,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "4577f14c-e155-4ef7-9265-45ff77291784",
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
    "id": "45909288-ea97-4966-8e2e-6cc8703f4a32",
    "mode": "custom",
    "name": "Skulk",
    "type": "monstrosity",
    "src": "MPMM p.219",
    "cr": "1/2",
    "hp": 18,
    "AC": 14,
    "actions": [
      {
        "id": "68f15fe3-5681-4357-9ab3-6c3aa03ee38b",
        "name": "Claw",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "a5c0099e-e652-443e-beca-4ee163902f52",
    "mode": "custom",
    "name": "Skull Lord",
    "type": "undead",
    "src": "MPMM p.220",
    "cr": "15",
    "hp": 112,
    "AC": 18,
    "actions": [
      {
        "id": "93c348d0-c429-485a-8a3a-c377b93242dd",
        "name": "Bone Staff",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 28.5,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "d0ba8430-a388-4e67-8527-13e5b4dca045",
        "name": "Deathly Ray",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 27.5,
        "toHit": 10,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "ba9eb546-1ad2-4940-9208-5f1f2a033b39",
    "mode": "custom",
    "name": "Slithering Tracker",
    "type": "ooze",
    "src": "MPMM p.221",
    "cr": "3",
    "hp": 39,
    "AC": 14,
    "actions": [
      {
        "id": "97f47af8-e1c7-436b-a658-bc91dd17cbda",
        "name": "Slam",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 8.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "8a2078e5-434c-4021-a7ad-9bee9d77ef67",
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
    "id": "3be75e60-faf0-4455-a6cb-3e79533e2d69",
    "mode": "custom",
    "name": "Spawn of Kyuss",
    "type": "undead",
    "src": "MPMM p.225",
    "cr": "5",
    "hp": 76,
    "AC": 10,
    "actions": [
      {
        "id": "7f8e2bee-fa92-473e-b9a6-27509bc3cb37",
        "name": "Claw",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 13.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "6c7d096d-992d-4493-8ae1-43e6a087f0ba",
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
    "id": "d058a411-88c4-49a5-b7e0-7354eb74d83c",
    "mode": "custom",
    "name": "Spirit Troll",
    "type": "giant",
    "src": "MPMM p.247",
    "cr": "11",
    "hp": 130,
    "AC": 17,
    "actions": [
      {
        "id": "df79ba25-1326-4e3f-b2a7-8dae562cc1cf",
        "name": "Bite",
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
        "id": "0dd7f2e4-7ff4-41e4-b48f-a23b94940b2b",
        "name": "Claws",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 19.5,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "bc7fee1e-586b-4a70-b2a2-b2f446b89487",
    "mode": "custom",
    "name": "Spring Eladrin",
    "type": "fey",
    "src": "MPMM p.116",
    "cr": "10",
    "hp": 165,
    "AC": 19,
    "actions": [
      {
        "id": "e14c41ca-781b-4589-b16f-cd2b8a42a9f3",
        "name": "Longsword",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 36.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "0bdb36cd-84a5-4e79-b05a-268c6ca8e5e5",
        "name": "Longbow",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 30,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "3579ff1b-6553-4b35-8d58-bb52f7813d65",
    "mode": "custom",
    "name": "Star Spawn Grue",
    "type": "aberration",
    "src": "MPMM p.227",
    "cr": "1/4",
    "hp": 17,
    "AC": 11,
    "actions": [
      {
        "id": "5b10573b-6d3b-4608-819f-d22d16d90240",
        "name": "Confounding Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 6,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "ec1cf1ab-678f-4d33-835a-831202b644c9",
    "mode": "custom",
    "name": "Star Spawn Hulk",
    "type": "aberration",
    "src": "MPMM p.227",
    "cr": "10",
    "hp": 136,
    "AC": 16,
    "actions": [
      {
        "id": "8751f6f5-fbaf-43ee-ae1d-b05e6963e0a8",
        "name": "Slam",
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
    "id": "fec56836-61b1-4f0e-b66d-f134d39ec118",
    "mode": "custom",
    "name": "Star Spawn Larva Mage",
    "type": "aberration",
    "src": "MPMM p.228",
    "cr": "16",
    "hp": 168,
    "AC": 16,
    "actions": [
      {
        "id": "d611748c-065f-453d-8018-17e7a8c12886",
        "name": "Slam",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 7.5,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "6b7020ee-114a-4af2-903a-f43d35ab43ce",
        "name": "Slam x3",
        "type": "atk",
        "actionSlot": 2,
        "freq": "at will",
        "condition": "default",
        "dpr": 22.5,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "d9f72bc0-7574-4630-8161-e1e32c36ae60",
        "name": "Eldritch Bolt",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 19.5,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "80bbb8ae-0759-40e5-ae9b-57d362d3f0c5",
        "name": "Eldritch Bolt",
        "type": "atk",
        "actionSlot": 2,
        "freq": "at will",
        "condition": "default",
        "dpr": 19.5,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "e9e8df59-7d03-4725-ac75-853e4fd0d912",
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
    "id": "5d07b115-e703-49a7-ab0d-b0936b9468f5",
    "mode": "custom",
    "name": "Star Spawn Mangler",
    "type": "aberration",
    "src": "MPMM p.229",
    "cr": "5",
    "hp": 71,
    "AC": 14,
    "actions": [
      {
        "id": "8cee8597-429f-43ae-915b-2e9de2eaab86",
        "name": "Claw",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 15.5,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "2cccb05d-481d-4c03-86cc-aad52b40a5bb",
    "mode": "custom",
    "name": "Star Spawn Seer",
    "type": "aberration",
    "src": "MPMM p.230",
    "cr": "13",
    "hp": 153,
    "AC": 17,
    "actions": [
      {
        "id": "3beda408-af25-4f08-a711-d400e4234f66",
        "name": "Comet Staff",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 28.5,
        "toHit": 11,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "af68cb57-0a2f-484a-95f7-66f7f3bed52d",
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
        "id": "5258c24f-c830-42e8-b1aa-4024ff6a43a2",
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
    "id": "5bc14753-75da-4097-961b-e88082c01168",
    "mode": "custom",
    "name": "Steel Predator",
    "type": "construct",
    "src": "MPMM p.232",
    "cr": "16",
    "hp": 207,
    "AC": 20,
    "actions": [
      {
        "id": "aa24fa7e-338b-45ff-933b-1db9f4113de4",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 18,
        "toHit": 12,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "4c98f62e-1714-487c-8a2d-5dcda7185f89",
        "name": "Claw",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 16,
        "toHit": 12,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "96770c6e-0b4b-447b-a5f4-82dff49512c8",
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
    "id": "d938b47c-2a83-41aa-b0cb-ea34158522ca",
    "mode": "custom",
    "name": "Stegosaurus",
    "type": "beast",
    "src": "MPMM p.96",
    "cr": "4",
    "hp": 76,
    "AC": 13,
    "actions": [
      {
        "id": "91c5de4d-bc31-4484-8ae6-94c018b4fe88",
        "name": "Tail",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 26,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "69df4200-a2a4-42b1-a4c5-508665b790e0",
    "mode": "custom",
    "name": "Stench Kow",
    "type": "fiend",
    "src": "MPMM p.72",
    "cr": "1/2",
    "hp": 15,
    "AC": 10,
    "actions": [
      {
        "id": "4e2ffdcf-0acb-48a6-88e1-63e63aac1254",
        "name": "Gore",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 14.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "ce8acfb7-5e53-4a92-842f-02117da89ba7",
    "mode": "custom",
    "name": "Stone Cursed",
    "type": "construct",
    "src": "MPMM p.233",
    "cr": "1",
    "hp": 19,
    "AC": 17,
    "actions": [
      {
        "id": "075c9229-51c3-4968-b476-f0649eb27847",
        "name": "Petrifying Claws",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 12,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "5be47106-701d-407f-b2e2-602abc05c265",
    "mode": "custom",
    "name": "Stone Giant Dreamwalker",
    "type": "giant",
    "src": "MPMM p.234",
    "cr": "10",
    "hp": 161,
    "AC": 18,
    "actions": [
      {
        "id": "62a96b87-14f3-45e4-a17e-25df94d60e31",
        "name": "Greatclub",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 24,
        "toHit": 10,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "d5960f9f-3873-454e-bab8-34b4a72c304e",
        "name": "Rock",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 22.5,
        "toHit": 10,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "202146aa-1324-4a59-9129-405ae7648549",
    "mode": "custom",
    "name": "Storm Giant Quintessent",
    "type": "giant",
    "src": "MPMM p.235",
    "cr": "16",
    "hp": 230,
    "AC": 12,
    "actions": [
      {
        "id": "1a582316-4cdf-4dc3-b604-a8e6c61c77d2",
        "name": "Lightning Sword",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 40.5,
        "toHit": 14,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "72218503-f28b-4d43-9cd9-7f2f48161493",
        "name": "Wind Javelin",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 19.5,
        "toHit": 0,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "e885888c-54d7-47d8-9fb0-530e8e861eb1",
    "mode": "custom",
    "name": "Summer Eladrin",
    "type": "fey",
    "src": "MPMM p.116",
    "cr": "10",
    "hp": 165,
    "AC": 19,
    "actions": [
      {
        "id": "99f9ab8a-ba41-48d3-977c-05301c548b31",
        "name": "Longsword",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 37,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "f4e25816-813f-4ab0-862d-934e2f74689a",
        "name": "Longbow",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 23,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "32029dde-d1f2-437a-9503-dad3d925cf9b",
    "mode": "custom",
    "name": "Swarm of Cranium Rats",
    "type": "aberration",
    "src": "MPMM p.83",
    "cr": "5",
    "hp": 76,
    "AC": 12,
    "actions": [
      {
        "id": "67e05dcc-192c-4dd0-bfa3-8fbffff177de",
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
    "id": "20cab8dc-3024-415c-81ef-cc7be7b06b73",
    "mode": "custom",
    "name": "Swarm of Rot Grubs",
    "type": "beast",
    "src": "MPMM p.237",
    "cr": "1/2",
    "hp": 22,
    "AC": 8,
    "actions": [
      {
        "id": "2aba95f6-1ceb-458d-864a-24ba9c201afe",
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
    "id": "90989be0-fff2-43e0-b5e8-29e9a447aebf",
    "mode": "custom",
    "name": "Swashbuckler",
    "type": "humanoid",
    "src": "MPMM p.238",
    "cr": "3",
    "hp": 66,
    "AC": 17,
    "actions": [
      {
        "id": "8920ddcf-9e76-4d43-9a73-74ca018cd610",
        "name": "Dagger",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 6.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "4a88d4e6-30f2-4624-8492-357b40c7e55d",
        "name": "Rapier",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 8.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "6e0508ea-0265-48f4-8f2d-9b10a1636211",
    "mode": "custom",
    "name": "Sword Wraith Commander",
    "type": "undead",
    "src": "MPMM p.239",
    "cr": "8",
    "hp": 127,
    "AC": 18,
    "actions": [
      {
        "id": "492fcac1-9d53-4f91-88ae-62b19be5a53d",
        "name": "Longsword",
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
        "id": "25a5c7fb-428f-4922-ae47-4210610fd531",
        "name": "Longbow",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 6.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "702fbbd0-9e61-41f5-8a54-95f59d9e5502",
    "mode": "custom",
    "name": "Sword Wraith Warrior",
    "type": "undead",
    "src": "MPMM p.239",
    "cr": "3",
    "hp": 45,
    "AC": 16,
    "actions": [
      {
        "id": "9105812a-4984-4a0c-8962-db26bdcb4904",
        "name": "Battleaxe",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 18,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "14399f6d-51d0-46e1-9cc3-32c370d868b5",
        "name": "Longbow",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 5.5,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "6502955c-0968-4444-bd49-8ed66e138837",
    "mode": "custom",
    "name": "Tanarukk",
    "type": "fiend",
    "src": "MPMM p.240",
    "cr": "5",
    "hp": 95,
    "AC": 14,
    "actions": [
      {
        "id": "33778c18-1ca8-42d4-b372-62e92b6e8fdb",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 8.5,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "41391996-28ba-4a16-a41c-3a6bfee2fcb0",
        "name": "Greatsword",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 11,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "4a133432-c409-43af-902e-8d5c231c5a73",
    "mode": "custom",
    "name": "Thorny Vegepygmy",
    "type": "plant",
    "src": "MPMM p.253",
    "cr": "1",
    "hp": 27,
    "AC": 14,
    "actions": [
      {
        "id": "4ce8f63a-5947-4344-af1c-db108c5a0320",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "2f2bbfbb-b4ee-43e5-991f-38721bebac48",
    "mode": "custom",
    "name": "Titivilus",
    "type": "fiend",
    "src": "MPMM p.242",
    "cr": "16",
    "hp": 150,
    "AC": 20,
    "actions": [
      {
        "id": "d0771b2d-e70e-4f9e-9498-c2f3f612ad76",
        "name": "Silver Sword",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 34.5,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "a1803d9a-832b-4441-8351-b2ff418b6099",
    "mode": "custom",
    "name": "Tlincalli",
    "type": "monstrosity",
    "src": "MPMM p.242",
    "cr": "5",
    "hp": 85,
    "AC": 15,
    "actions": [
      {
        "id": "999b51ca-0eda-48d2-95b4-adeea893832c",
        "name": "Longsword",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 16,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "cc84b080-0a50-448a-b67a-4c792fa4374c",
        "name": "Spiked Chain",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 6.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "b77c8798-5bb5-4dce-b65c-ea8e06790715",
        "name": "Sting",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 20.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "2642f938-3130-42d3-85c4-08d15da061b5",
    "mode": "custom",
    "name": "Tortle",
    "type": "humanoid",
    "src": "MPMM p.244",
    "cr": "1/4",
    "hp": 22,
    "AC": 17,
    "actions": [
      {
        "id": "eea1f394-2a55-4cc2-a443-ea08862614b4",
        "name": "Claw",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 4.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "94097734-068a-4d17-8283-c499d4fd5265",
        "name": "Spear",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 12,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "ea4e018a-e74b-48ac-8892-f00fbfebda63",
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
    "id": "03a193eb-655c-4fa4-9d48-0b34486e7d81",
    "mode": "custom",
    "name": "Tortle Druid",
    "type": "humanoid",
    "src": "MPMM p.244",
    "cr": "2",
    "hp": 33,
    "AC": 17,
    "actions": [
      {
        "id": "f3893d8e-918e-4e93-aaac-64a93fa04da2",
        "name": "Claw",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 4.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "acb1cc3e-42e0-4e41-9402-16edcf7bc773",
        "name": "Nature's Wrath",
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
    "id": "8a20d38f-1fe5-4d34-82a6-117bf5767fc1",
    "mode": "custom",
    "name": "Transmuter Wizard",
    "type": "humanoid",
    "src": "MPMM p.265",
    "cr": "5",
    "hp": 49,
    "AC": 12,
    "actions": [
      {
        "id": "787cd7df-4ee8-44a2-8f08-9ca47e11d08c",
        "name": "Arcane Burst",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 19.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "3ecc89cc-8aec-4c6f-baf6-a25007d9722d",
    "mode": "custom",
    "name": "Trapper",
    "type": "monstrosity",
    "src": "MPMM p.245",
    "cr": "3",
    "hp": 68,
    "AC": 13,
    "actions": [
      {
        "id": "4a3fcb83-38ba-45a4-a3e4-8841edc0fff8",
        "name": "Smother",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 17,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "21dbf853-5e17-4d3e-9540-08aa7cfa99f4",
    "mode": "custom",
    "name": "Ulitharid",
    "type": "aberration",
    "src": "MPMM p.249",
    "cr": "9",
    "hp": 127,
    "AC": 15,
    "actions": [
      {
        "id": "737130be-73c4-4547-aa24-00751adbe791",
        "name": "Tentacles",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 27,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "6e118511-f80b-4beb-8082-0dc4c450d588",
        "name": "Extract Brain",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 55,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "5c2ea46c-7f6c-4a46-b302-2cd20f50b275",
        "name": "Mind Blast",
        "type": "atk",
        "actionSlot": 0,
        "freq": "1/fight",
        "condition": "is available",
        "dpr": 31,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 2
      }
    ],
    "count": 1
  },
  {
    "id": "b4088877-d310-4ddc-801d-628fc6b4c37b",
    "mode": "custom",
    "name": "Vampiric Mist",
    "type": "undead",
    "src": "MPMM p.250",
    "cr": "3",
    "hp": 30,
    "AC": 13,
    "actions": [
      {
        "id": "113b6241-809f-4b43-bb75-d53ac25286b2",
        "name": "Life Drain",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "e40721b5-f795-4b36-bce2-ff19136c0c21",
    "mode": "custom",
    "name": "Vargouille",
    "type": "fiend",
    "src": "MPMM p.251",
    "cr": "1",
    "hp": 18,
    "AC": 12,
    "actions": [
      {
        "id": "1ca7c29f-1e2d-4243-9564-169c35b5b145",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 16,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "2048f52d-dc04-4ca7-ac73-84ac3357e073",
    "mode": "custom",
    "name": "Vegepygmy",
    "type": "plant",
    "src": "MPMM p.252",
    "cr": "1/4",
    "hp": 13,
    "AC": 13,
    "actions": [
      {
        "id": "396942c6-fe0b-4be3-ad97-d879a0e79bef",
        "name": "Claws",
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
        "id": "6cedf720-f839-4f5b-9b81-63b3e716c8e9",
        "name": "Sling",
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
    "id": "8c2adc55-cb77-49f3-a57b-1031beebcbcb",
    "mode": "custom",
    "name": "Vegepygmy Chief",
    "type": "plant",
    "src": "MPMM p.253",
    "cr": "2",
    "hp": 33,
    "AC": 14,
    "actions": [
      {
        "id": "c52a00fd-180d-4329-8a28-0617f1a0fbf2",
        "name": "Claws",
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
        "id": "07a869e2-8686-4926-af21-6af0ebf8a711",
        "name": "Spear",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 12,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "16ebf810-255c-4835-9971-2546f1dcbbce",
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
    "id": "034eb653-f6b4-40b6-a91b-7532d283598c",
    "mode": "custom",
    "name": "Velociraptor",
    "type": "beast",
    "src": "MPMM p.96",
    "cr": "1/4",
    "hp": 10,
    "AC": 13,
    "actions": [
      {
        "id": "7dac9aa5-b820-4d79-951a-12b2ee2da236",
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
        "id": "bd0dcb0c-8294-4de0-ad2f-256685cf2afc",
        "name": "Claw",
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
    "id": "2eda8619-2d76-4c6a-8bec-ff3ad8fc29a9",
    "mode": "custom",
    "name": "Venom Troll",
    "type": "giant",
    "src": "MPMM p.248",
    "cr": "7",
    "hp": 94,
    "AC": 15,
    "actions": [
      {
        "id": "f5d8877f-0f0f-448b-a31c-39800d0af0fa",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 12,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "19d901af-d768-4b28-8eac-a5ade8bab63a",
        "name": "Claws",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 15.5,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "5bbbb6f9-045b-43e7-ad33-13548054eb84",
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
    "id": "ca508c95-267e-4d39-978e-0a060b350f4e",
    "mode": "custom",
    "name": "War Priest",
    "type": "humanoid",
    "src": "MPMM p.254",
    "cr": "9",
    "hp": 117,
    "AC": 18,
    "actions": [
      {
        "id": "b90f451f-94c1-44b9-b075-f250257b2bba",
        "name": "Maul",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 20.5,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "6f22b51b-35ad-48c8-b928-6fbaa0d4e5e6",
        "name": "Holy Fire",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 12,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "0374af21-8217-4711-9e1f-0c9aa1d5322f",
    "mode": "custom",
    "name": "Warlock of the Archfey",
    "type": "humanoid",
    "src": "MPMM p.255",
    "cr": "4",
    "hp": 67,
    "AC": 13,
    "actions": [
      {
        "id": "adf03997-53ce-417f-8050-8413724c200f",
        "name": "Rapier",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 14.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "d56c02ed-2e83-462a-aca7-38f0d61e4928",
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
    "id": "35ca8df1-5383-42ff-80a3-10588d4a9296",
    "mode": "custom",
    "name": "Warlock of the Fiend",
    "type": "humanoid",
    "src": "MPMM p.255",
    "cr": "7",
    "hp": 78,
    "AC": 13,
    "actions": [
      {
        "id": "c4536a31-362c-4761-8a16-067f8535c727",
        "name": "Scimitar",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 20.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "e3a36b04-f2e0-443c-b5fa-201a17fb9a2e",
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
    "id": "9dd0bf2d-94ed-483b-94f5-0a8c5214ce90",
    "mode": "custom",
    "name": "Warlock of the Great Old One",
    "type": "humanoid",
    "src": "MPMM p.256",
    "cr": "6",
    "hp": 91,
    "AC": 13,
    "actions": [
      {
        "id": "0512e495-b55e-4caf-9540-b0822c12d476",
        "name": "Dagger",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 16,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "c2a1ef65-725f-4b8b-88d5-46ff12fe3c7b",
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
    "id": "3a0a0ed2-1bad-4fc3-84cc-260ed8d81bc7",
    "mode": "custom",
    "name": "Warlord",
    "type": "humanoid",
    "src": "MPMM p.257",
    "cr": "12",
    "hp": 229,
    "AC": 18,
    "actions": [
      {
        "id": "bca6bc70-db0f-4737-bdf6-73971911c01c",
        "name": "Greatsword",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 12,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "3b90db70-2775-4acd-8662-aa1cf5e8701b",
        "name": "Shortbow",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 6.5,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "c7bafa11-e943-4e5e-b134-06bf75d5d1ec",
    "mode": "custom",
    "name": "Wastrilith",
    "type": "fiend",
    "src": "MPMM p.258",
    "cr": "13",
    "hp": 157,
    "AC": 18,
    "actions": [
      {
        "id": "1baed5dd-2408-45ba-bf21-de6b935f949b",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 30,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "ac2a6b65-1bbd-4265-8f08-fec69a6f54ac",
        "name": "Claws",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 18,
        "toHit": 9,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "b40dcea3-6fc3-4632-8668-0978777e493c",
        "name": "Grasping Spout",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 22,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "3e8280dd-7877-4e8f-9638-da337aa84aa2",
    "mode": "custom",
    "name": "Water Elemental Myrmidon",
    "type": "elemental",
    "src": "MPMM p.123",
    "cr": "7",
    "hp": 127,
    "AC": 18,
    "actions": [
      {
        "id": "aa4c8d04-0318-44b9-a34d-0c54a8a87f09",
        "name": "Trident",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 16,
        "toHit": 7,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "c3780cae-2208-4742-81b1-ca8260795349",
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
    "id": "dc7c3c31-868d-4d59-a50e-7831dca0b174",
    "mode": "custom",
    "name": "White Abishai",
    "type": "fiend",
    "src": "MPMM p.41",
    "cr": "6",
    "hp": 68,
    "AC": 15,
    "actions": [
      {
        "id": "6da2b026-0ec1-4d2d-a9ca-dda34e667cdd",
        "name": "Bite",
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
        "id": "08d1b531-33d2-416e-9b01-c923e74b05be",
        "name": "Claw",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 8.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "8989ebc9-32de-4e5f-ad30-84a64f7f00d2",
        "name": "Longsword",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 16,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "d040e6a6-dbe7-4faf-a23c-012b746da950",
    "mode": "custom",
    "name": "Winter Eladrin",
    "type": "fey",
    "src": "MPMM p.117",
    "cr": "10",
    "hp": 165,
    "AC": 19,
    "actions": [
      {
        "id": "dbd52108-a004-4616-aa46-fc35e4a0ae64",
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
        "id": "83b636cd-001a-4e3c-9ac7-561794369f92",
        "name": "Longbow",
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
    "id": "11219b45-3fe9-434f-84b6-4f621e845b5d",
    "mode": "custom",
    "name": "Wood Woad",
    "type": "plant",
    "src": "MPMM p.266",
    "cr": "5",
    "hp": 75,
    "AC": 18,
    "actions": [
      {
        "id": "181aa130-ca1a-4270-a9af-004398db9c32",
        "name": "Club",
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
    "id": "f7f46cdb-f605-4b5b-acff-af1a34e1ffeb",
    "mode": "custom",
    "name": "Wretched Sorrowsworn",
    "type": "monstrosity",
    "src": "MPMM p.224",
    "cr": "1/4",
    "hp": 10,
    "AC": 15,
    "actions": [
      {
        "id": "348dd703-d946-453c-90a0-45a775582967",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 13,
        "toHit": 3,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "b50435a4-e98f-4ab3-999b-a874ce47ae23",
    "mode": "custom",
    "name": "Xvart",
    "type": "monstrosity",
    "src": "MPMM p.267",
    "cr": "1/8",
    "hp": 7,
    "AC": 13,
    "actions": [
      {
        "id": "e3d4a33b-6939-4e1d-869a-f72450bde04a",
        "name": "Sling",
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
    "id": "e3dcbc72-2d18-4280-8c1d-215717a94d58",
    "mode": "custom",
    "name": "Xvart Warlock of Raxivort",
    "type": "monstrosity",
    "src": "MPMM p.267",
    "cr": "1",
    "hp": 22,
    "AC": 12,
    "actions": [
      {
        "id": "fd52f714-b497-45d1-9122-e8d787195c82",
        "name": "Raxivort's Bite",
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
    "id": "e4391ae0-38e6-4f1f-a6a9-9d6847f0fbde",
    "mode": "custom",
    "name": "Yagnoloth",
    "type": "fiend",
    "src": "MPMM p.268",
    "cr": "11",
    "hp": 147,
    "AC": 17,
    "actions": [
      {
        "id": "a1ed16a1-1822-48cc-ae13-52af5dd02d09",
        "name": "Electrified Touch",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 27,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "f85987d5-f089-48e6-8054-7d7d6aa0348b",
        "name": "Massive Arm",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 23.5,
        "toHit": 8,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "3ebd4807-67a7-4e0e-8cf4-13afdab091aa",
        "name": "Life Leech",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 35.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "6a7efc43-9b22-4536-ace6-0f9768505c6d",
    "mode": "custom",
    "name": "Yeenoghu",
    "type": "fiend",
    "src": "MPMM p.270",
    "cr": "24",
    "hp": 333,
    "AC": 20,
    "actions": [
      {
        "id": "5132278b-1adc-44ba-936e-3cbe04c37afa",
        "name": "Flail",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 35,
        "toHit": 16,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "b7eef3c8-5e2f-4393-a996-2ffa6c76911c",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 20,
        "toHit": 16,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "0865bd2b-814e-4642-860d-a0a6ddd67adc",
    "mode": "custom",
    "name": "Yeth Hound",
    "type": "fey",
    "src": "MPMM p.271",
    "cr": "4",
    "hp": 51,
    "AC": 14,
    "actions": [
      {
        "id": "d41690e6-698e-499d-a2c1-1c10476ef708",
        "name": "Bite",
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
    "id": "354463b1-94f4-46f6-9e29-2eeb2387010d",
    "mode": "custom",
    "name": "Young Kruthik",
    "type": "monstrosity",
    "src": "MPMM p.168",
    "cr": "1/8",
    "hp": 9,
    "AC": 16,
    "actions": [
      {
        "id": "c8b4aeff-b978-44b9-87cf-57ed311c7269",
        "name": "Stab",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 5.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "7af7e86f-0b22-4431-8f9a-1a16e85bb25c",
    "mode": "custom",
    "name": "Yuan-ti Anathema",
    "type": "monstrosity",
    "src": "MPMM p.272",
    "cr": "12",
    "hp": 189,
    "AC": 16,
    "actions": [
      {
        "id": "6cb0090a-895b-4471-8d94-9edab9404d4c",
        "name": "Claw (Anathema Form Only)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 13,
        "toHit": 10,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "865143dc-8036-488d-8429-af18f4a6673f",
        "name": "Flurry of Bites (Anathema Form Only)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 41,
        "toHit": 10,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "bafb6829-3806-44d2-a6e8-5d265e6ce661",
        "name": "Constrict (Snake Form Only)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 47,
        "toHit": 10,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "9e5e59e6-ef02-4bfc-b4a3-fbaf7210532f",
    "mode": "custom",
    "name": "Yuan-ti Broodguard",
    "type": "monstrosity",
    "src": "MPMM p.273",
    "cr": "2",
    "hp": 45,
    "AC": 14,
    "actions": [
      {
        "id": "bf9134a0-fd6c-4db9-b5b2-e207310ddc31",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 6.5,
        "toHit": 4,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "c646a0ec-e2ae-4a6b-b3ef-0e3c27761764",
        "name": "Claw",
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
    "id": "74c00592-3bef-4cf2-b951-48948d51e4b0",
    "mode": "custom",
    "name": "Yuan-ti Mind Whisperer",
    "type": "monstrosity",
    "src": "MPMM p.274",
    "cr": "4",
    "hp": 71,
    "AC": 14,
    "actions": [
      {
        "id": "6307ebc7-f277-4beb-b648-fecb5adeee28",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 12.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "8ed71c7d-65e9-4d7a-8a5f-aa83c67b7f43",
        "name": "Scimitar (Yuan-ti Form Only)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 6.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "a1831a68-5430-4491-a8fc-d028709aefab",
        "name": "Spectral Fangs",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 16.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "a5c6a3e0-8903-448e-aa1b-2951981019e4",
    "mode": "custom",
    "name": "Yuan-ti Nightmare Speaker",
    "type": "monstrosity",
    "src": "MPMM p.275",
    "cr": "4",
    "hp": 71,
    "AC": 14,
    "actions": [
      {
        "id": "491b05a2-4151-4c0d-a898-761319e954ce",
        "name": "Constrict",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 10,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "218daaad-76c9-4330-a644-aef8793c340d",
        "name": "Scimitar (Yuan-ti Form Only)",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 6.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "51803c1a-ed5e-40d9-af61-c3ab9598710a",
        "name": "Spectral Fangs",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 16.5,
        "toHit": 5,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "f354dac8-ef66-41ec-a1a9-f8f03000b0b2",
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
    "id": "e5b079e1-1b7b-4d71-8886-ceb4b3d0dce9",
    "mode": "custom",
    "name": "Yuan-ti Pit Master",
    "type": "monstrosity",
    "src": "MPMM p.276",
    "cr": "5",
    "hp": 88,
    "AC": 14,
    "actions": [
      {
        "id": "91ef9771-6cfe-4c36-b1df-cf56ab875dd6",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 12.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "26e59c56-4a22-4b96-bb68-0452b1d350b3",
        "name": "Spectral Fangs",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 16.5,
        "toHit": 6,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  },
  {
    "id": "07ab8859-1c47-4ce3-ada9-68d4ad64c75a",
    "mode": "custom",
    "name": "Zaratan",
    "type": "elemental",
    "src": "MPMM p.278",
    "cr": "22",
    "hp": 307,
    "AC": 21,
    "actions": [
      {
        "id": "5fd9dce2-b288-4fcf-bb62-5ff7ffc7d93c",
        "name": "Bite",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 28,
        "toHit": 17,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "ec7853ec-52ad-41c3-af25-0f21a401636c",
        "name": "Stomp",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 26.5,
        "toHit": 17,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "b4d17f8d-62dc-4050-abb1-9a7acedff1c9",
        "name": "Stomp x3",
        "type": "atk",
        "actionSlot": 2,
        "freq": "at will",
        "condition": "default",
        "dpr": 79.5,
        "toHit": 17,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "96811d65-a216-4ffc-81ee-856fb6065ceb",
        "name": "Spit Rock",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 37,
        "toHit": 17,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "a14fedc3-3922-4396-b188-8411ff40bd96",
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
    "id": "ad458979-bcc6-41f0-8504-f0a22350630f",
    "mode": "custom",
    "name": "Zariel",
    "type": "fiend",
    "src": "MPMM p.280",
    "cr": "26",
    "hp": 420,
    "AC": 21,
    "actions": [
      {
        "id": "5ba6f9ef-6f7b-4df9-8da6-c1f5aac3387a",
        "name": "Flail",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 53,
        "toHit": 16,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "25f691d0-6b3a-48f6-bf94-f8eea56e7e2a",
        "name": "Longsword",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 72,
        "toHit": 16,
        "target": "enemy with most HP",
        "targets": 1
      },
      {
        "id": "243274dc-8540-4829-8dfd-60dbeea31159",
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
    "id": "b5f8e216-be4f-4c28-ba26-6fb9939f2839",
    "mode": "custom",
    "name": "Zuggtmoy",
    "type": "fiend",
    "src": "MPMM p.281",
    "cr": "23",
    "hp": 304,
    "AC": 18,
    "actions": [
      {
        "id": "eaac23b4-8326-470d-8861-29118ad890d2",
        "name": "Pseudopod",
        "type": "atk",
        "actionSlot": 0,
        "freq": "at will",
        "condition": "default",
        "dpr": 24,
        "toHit": 0,
        "target": "enemy with most HP",
        "targets": 1
      }
    ],
    "count": 1
  }
]