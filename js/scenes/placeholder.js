// Sound City - The Date
// Placeholder Scene Data

import { registerScene } from '../engine.js';

// Register placeholder scene
registerScene({
  id: 'intro',
  speaker: 'Dart',
  text: "The rain taps a steady rhythm against the café window as you wait. You check your watch—Maya is five minutes late. Your fingers drum against the table, a nervous habit you've tried to shake for years.",
  monologue: "Five minutes. Just five minutes. It's not like her to be late. Is this a bad sign?",
  image: "Audrey-Wen.jpeg",
  options: [
    {
      text: "Take a deep breath and try to relax.",
      nextScene: 'Maya_arrives',
      vibeChange: { stability: +1, excitement: 0 }
    },
    {
      text: "Check your appearance in the mirror across the room.",
      nextScene: 'Maya_arrives',
      vibeChange: { stability: +1, excitement: 0 }
    },
    {
      text: "Order another coffee to kill time.",
      nextScene: 'Maya_arrives',
      vibeChange: { stability: 0, excitement: +1 }
    }
  ]
});

// Register second scene
registerScene({
  id: 'Maya_arrives',
  speaker: 'Maya',
  text: "The door chimes as Maya steps inside, shaking raindrops from her coat. She spots you and offers a warm, slightly apologetic smile. 'Sorry I'm late—the traffic was insane today.'",
  monologue: "She looks... exactly as I remembered. Professional but approachable. The kind of woman who could run a corporation or bake a perfect pie.",
  image: "Dart-Fancy.jpeg",
  options: [
    {
      text: "Stand up and offer her your coat to dry.",
      nextScene: 'ordering_drinks',
      vibeChange: { stability: +2, excitement: 0 },
      flagSet: 'noticed_coat'
    },
    {
      text: "Smile and tell her the wait was worth it.",
      nextScene: 'ordering_drinks',
      vibeChange: { stability: +1, excitement: +1 }
    },
    {
      text: "Make a joke about Seattle weather being its own character.",
      nextScene: 'ordering_drinks',
      vibeChange: { stability: 0, excitement: +2 }
    }
  ]
});

// Register third scene
registerScene({
  id: 'ordering_drinks',
  speaker: 'Waitstaff',
  text: "A friendly server approaches with a notepad. 'Are you ready to order?' they ask, pen poised.",
  monologue: "This is it—the moment where small talk turns into something more. What do you order? It matters more than you'd think.",
  image: "Dart.jpeg",
  options: [
    {
      text: "Order a classic coffee—simple and reliable.",
      nextScene: 'conversation_start',
      vibeChange: { stability: +1, excitement: 0 }
    },
    {
      text: "Try something exotic from the special menu.",
      nextScene: 'conversation_start',
      vibeChange: { stability: 0, excitement: +2 }
    },
    {
      text: "Ask Maya what she recommends.",
      nextScene: 'conversation_start',
      vibeChange: { stability: +1, excitement: +1 }
    }
  ]
});

// Register fourth scene
registerScene({
  id: 'conversation_start',
  speaker: 'Maya',
  text: "Maya leans forward, her eyes bright with interest. 'So, Dart, tell me about your work. What kind of projects do you usually take on?'",
  monologue: "Here we go. The moment where she tries to figure out who I am. Do I play it safe or show some personality?",
  image: "Maya-Wen.jpeg",
  options: [
    {
      text: "Describe your work in practical, straightforward terms.",
      nextScene: 'scene_5',
      vibeChange: { stability: +2, excitement: 0 }
    },
    {
      text: "Tell a colorful story about a recent job.",
      nextScene: 'scene_5',
      vibeChange: { stability: 0, excitement: +2 }
    },
    {
      text: "Ask about her work instead.",
      nextScene: 'scene_5',
      vibeChange: { stability: +1, excitement: +1 }
    }
  ]
});
