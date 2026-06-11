// Sound City - The Date
// Scene: Dart and Maya at the café (both present, Maya speaking)

import { registerScene } from '../engine.js';

// Register scene with two characters
registerScene({
  id: 'cafe_wait',
  speaker: 'Maya',
  characters: [
    { name: 'Dart', image: 'Dart.png', position: 'left' },
    { name: 'Maya', image: 'Maya-Wen.png', position: 'right' }
  ],
  text: "You sit at the corner table, watching the rain streak down the café window. The warm glow of string lights casts soft shadows across the room. When the door chimes, you both turn as Maya steps inside, shaking rain from her coat.",
  monologue: "She looks even better in person—polished but real, like a character who stepped out of a novel.",
  image: "backgrounds/Cat-Cafe.jpeg",
  options: [
    {
      text: "Wave and smile as she approaches.",
      nextScene: 'Maya_sits',
      vibeChange: { stability: +1, excitement: +1 }
    },
    {
      text: "Stand up to greet her properly.",
      nextScene: 'Maya_sits',
      vibeChange: { stability: +2, excitement: 0 }
    },
    {
      text: "Stay seated and give her a lazy grin.",
      nextScene: 'Maya_sits',
      vibeChange: { stability: 0, excitement: +2 }
    }
  ]
});

// Register scene where Maya sits down
registerScene({
  id: 'maya_sits',
  speaker: 'Maya',
  characters: [
    { name: 'Dart', image: 'Dart.jpeg', position: 'left' },
    { name: 'Maya', image: 'Audrey-Wen.jpeg', position: 'right' }
  ],
  text: "Maya slides into the seat across from you, her coat dripping onto the floor mat. She laughs, brushing a wet strand of hair from her face. 'I swear Seattle traffic is worse today than during the Great Rain of '82.'",
  monologue: "She's already making me smile. There's something about the way she talks—like she's sharing a secret with the world.",
  image: "Cat-Cafe.jpeg",
  options: [
    {
      text: "Hand her a napkin from the table.",
      nextScene: 'ordering_drinks',
      vibeChange: { stability: +2, excitement: 0 },
      flagSet: 'offered_napkin'
    },
    {
      text: "Tell her you've never seen rain like this even in the suburbs.",
      nextScene: 'ordering_drinks',
      vibeChange: { stability: +1, excitement: +1 }
    },
    {
      text: "Joke about how the café should charge extra for weather.",
      nextScene: 'ordering_drinks',
      vibeChange: { stability: 0, excitement: +2 }
    }
  ]
});
