# BattleSim
This is a simple 5e encounter simulator. It is showcased in the following Youtube video: https://www.youtube.com/watch?v=A8FNVkFuhXI

## How it works
The simulator calculates the "average" game using probabilities, which means it runs slightly differently than an actual game of 5e:
* A creature gets to act if it started the round with more than 0 hp
* Heals, buffs & debuffs are applied before attacks
* Debuffs are multiplied by the chance to actually receive that debuff
* Damage from attacks is multiplied by the chance that this attack hit

This does result in slightly different outcomes than if the simulator used statistics (running the simulation a large number of times, using random dice rolls, and measuring the result).</br>
For example, if a creature has 10 hit points and becomes the target of an attack dealing 10 damage that has 50% chance to hit, it will be shown to have taken 5 damage, when in the actual game, it would have taken either 0, or 10, never 5.

It might change in the future, but for now, the reason this approach was chosen is that:

1) A probabilities-based approach makes the visualization easier.
2) A statistics-based approach is more computationally intensive.

## Getting Started
* Install nodejs: https://nodejs.org/en
* Download node packages: `npm i`
* Run in dev mode: `npm run dev`
* Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Directory Structure
* `public`: images to be displayed on the website
* `src`
  * `components`: UI elements
    * `creatureForm`: the dialog which is shown when clicking adding/updating a creature
    * `simulation`: the components for showing the simulation's results on the home page
    * `utils`: general form elements
  * `data`: list of monsters & PC templates to populate the UI
  * `model`: type definitions, enums, and the core of the simulation
  * `pages`: HTTP URL endpoints
* `styles`: global CSS

## Contributing
To contribute, fork this repository and make pull requests.

Common reasons why a pull request might be denied:
* It adds too much data to the monsters, and risks breaking the terms of the WotC Fan Content Policy
* It changes the model in a way that backwards compatibility is not assured to the users who have already saved some adventuring days in their localStorage

## Licence
<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.

The license only covers commits on the `main` branch made after June 2nd, 2023, and only the contents of the `src` and `styles` directories, with the exception of:
* The `src/data` directory 
* The `src/components/utils/logo.tsx` file
* The `src/components/utils/logo.module.scss` file.

___

BattleSim is unofficial Fan Content permitted under the Fan Content Policy. Not approved/endorsed by Wizards. Portions of the materials used are property of Wizards of the Coast. ©Wizards of the Coast LLC.