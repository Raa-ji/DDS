// # Scene Template

// Copy this file and rename it for your new scene (e.g., `my_new_scene.js`).

// javascript
// Scene: Dart calls Maya to ask her to go on a date
// Location: Thunderbeers
// Characters: Dart, Maya

import { registerScene } from '../engine.js';

registerScene({
  id: 'prologue_1',
  speaker: 'Dart',
  characters: [
    { name: 'Dart', image: 'Dart.png', position: 'left' },
    // Add more characters as needed
  ],
 // text: "It's been a rough week for Dart. He's been dealing with his old debts to the Madrona Marauders, and has had a few really intense jobs. He's having a cold one with Big Mike when he decides it would be nice to have a date with Maya. He decides to text her and get some plans formulated.",
 // monologue: "Your inner thoughts and observations appear here. This reveals what the protagonist is really thinking.",
  image: "backgrounds/Thunderbeers.jpeg",
  options: [
    {
      text: "Suggest starting with getting something for dinner.",
      nextScene: 'prologue_a_2',
      vibeChange: { stability: 0, excitement: 0, class: 0 },
      // flagSet: 'optional_flag_name'
    },
  // {
    //   text: "Be casual - don't come on too strong.",
    //   nextScene: 'prologue_b_1',
    //   vibeChange: { stability: 0, excitement: 0, class: 0 }
    //   // flagSet: 'opptional_flag_name'
    // },
    // {
    //   text: "Send her a heartfelt text. That'll win her over!",
    //   nextScene: 'prologue_c_1',
    //   vibeChange: { stability: 0, excitement: 0, class: 0 },
    //   // flagSet: 'optional_flag_name'
    // },
  ]
});


// ## Field Descriptions

// | Field | Description |
// |-------|-------------|
// | `id` | Unique identifier for this scene (use snake_case) |
// | `speaker` | The character currently speaking |
// | `characters` | Array of characters in this scene with their images and positions |
// | `text` | Dialogue and narrative description of what's happening |
// | `monologue` | The protagonist's inner thoughts |
// | `image` | Background image path for this scene |
// | `options` | Array of choices the player can make |

// ## Vibe Change Guidelines

// Use `vibeChange` to track relationship stats:
// - `stability`: Represents comfort, trust, and emotional stability
// - `excitement`: Represents passion, chemistry, and thrill

// Values can be positive (+) or negative (-) to increase or decrease these stats.

// ## Flags

// Use `flagSet` to mark that a specific choice was made. This can be checked later to influence story branches or unlock special dialogue.

// ## Tips

// - Keep scenes focused on a single moment or interaction
// - Break long conversations into multiple connected scenes
// - Use descriptive, vivid language in `text` and `monologue`
// - Make choices meaningful—each should have clear consequences
// - Test your scenes to ensure all paths connect properly
