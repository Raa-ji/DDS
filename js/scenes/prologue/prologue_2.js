// # Scene Template

// Copy this file and rename it for your new scene (e.g., `my_new_scene.js`).

// javascript
// Scene: Dart calls Maya to ask her to go on a date
// Location: Thunderbeers
// Characters: Dart, Maya

import { registerScene } from '/DDS/js/engine.js';

registerScene({
  id: 'prologue_2',
  speaker: 'Maya',
  characters: [
    { name: 'Dart', image: 'Dart.png', position: 'left' },
    { name: 'Maya', image: 'Maya-Wen.png', position: 'right' },
    // Add more characters as needed
  ],
 text: "Sure, dinner sounds great. Did you want to do anything after that?", 
 // monologue: "Your inner thoughts and observations appear here. This reveals what the protagonist is really thinking.",
  image: "backgrounds/Thunderbeers.jpeg",
  options: [
    {
      text: "Ask if there's something exciting she'd like to do.",
      nextScene: 'prologue_3_a',
      vibeChange: { stability: 0, excitement: 0, class: 0 },
      // flagSet: 'optional_flag_name'
    },
      {
        text: "How about something more relaxing? Ask her what relaxing feels like to her.",
        nextScene: 'prologue_3_b',
        vibeChange: { stability: 0, excitement: 0, class: 0 },
        // flagSet: 'optional_flag_name'
      },
      {
        text: "Perhaps something fancy. What is her idea of that?",
        nextScene: 'prologue_3_c',
        vibeChange: { stability: 0, excitement: 0, class: 0 },
        // flagSet: 'optional_flag_name'
      },
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
