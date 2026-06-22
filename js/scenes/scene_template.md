# Scene Template

Copy this file and rename it for your new scene (e.g., `my_new_scene.js`).

```javascript
// Scene: [Brief description of what happens in this scene]
// Location: [Where the scene takes place]
// Characters: [List of characters involved]

import { registerScene } from '/DDS/js/engine.js';

registerScene({
  id: 'scene_id_placeholder',
  speaker: 'CharacterName',
  characters: [
    { name: 'Character 1', image: 'character1.png', position: 'left' },
    { name: 'Character 2', image: 'character2.png', position: 'center' },
    // Add more characters as needed
  ],
  text: "The scene description and dialogue go here. This is what the characters say and do.",
  monologue: "Your inner thoughts and observations appear here. This reveals what the protagonist is really thinking.",
  image: "backgrounds/scene_background.jpg",
  options: [
    {
      text: "First choice - what the player can say or do",
      nextScene: 'scene_to_jump_to',
      vibeChange: { stability: 0, excitement: 0 },
      flagSet: 'optional_flag_name'
    },
    {
      text: "Second choice",
      nextScene: 'another_scene',
      vibeChange: { stability: +1, excitement: +2 }
    }
    // Add more options as needed
  ]
});
```

## Field Descriptions

| Field | Description |
|-------|-------------|
| `id` | Unique identifier for this scene (use snake_case) |
| `speaker` | The character currently speaking |
| `characters` | Array of characters in this scene with their images and positions |
| `text` | Dialogue and narrative description of what's happening |
| `monologue` | The protagonist's inner thoughts |
| `image` | Background image path for this scene |
| `options` | Array of choices the player can make |

## Vibe Change Guidelines

Use `vibeChange` to track relationship stats:
- `stability`: Represents comfort, trust, and emotional stability
- `excitement`: Represents passion, chemistry, and thrill

Values can be positive (+) or negative (-) to increase or decrease these stats.

## Flags

Use `flagSet` to mark that a specific choice was made. This can be checked later to influence story branches or unlock special dialogue.

## Tips

- Keep scenes focused on a single moment or interaction
- Break long conversations into multiple connected scenes
- Use descriptive, vivid language in `text` and `monologue`
- Make choices meaningful—each should have clear consequences
- Test your scenes to ensure all paths connect properly
