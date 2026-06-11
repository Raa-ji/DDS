// Sound City - The Date
// Game Engine Module

import { gameState } from './state.js';

// Scene registry
const scenes = {};

// Register a scene
export function registerScene(sceneData) {
  if (!sceneData || !sceneData.id) {
    console.error('Invalid scene data:', sceneData);
    return;
  }
  scenes[sceneData.id] = sceneData;
  console.log(`Scene registered: ${sceneData.id}`);
}

// Get a scene by ID
export function getScene(sceneId) {
  return scenes[sceneId];
}

// Render a scene to the UI
export function renderScene(sceneId) {
  const scene = getScene(sceneId);
  if (!scene) {
    console.error(`Scene not found: ${sceneId}`);
    return;
  }

  // Update current scene
  gameState.currentScene = sceneId;

  // Update visual section
  const sceneImage = document.getElementById('scene-image');
  const speakerName = document.getElementById('speaker-name');
  const artworkContainer = document.getElementById('artwork-container');

  // Clear existing character elements
  const existingCharacters = document.querySelectorAll('.character-portrait');
  existingCharacters.forEach(el => el.remove());

  // Handle background image
  if (scene.image) {
    artworkContainer.style.backgroundImage = `url('${scene.image}')`;
    artworkContainer.classList.add('artwork-background');
  } else {
    artworkContainer.style.backgroundImage = 'none';
    artworkContainer.classList.remove('artwork-background');
  }

  // Render characters if present
  if (scene.characters && scene.characters.length > 0) {
    scene.characters.forEach((char, index) => {
      const charDiv = document.createElement('div');
      charDiv.className = 'character-portrait';
      charDiv.style.position = 'absolute';
      charDiv.style.top = '0';
      charDiv.style.bottom = '0';
      charDiv.style.width = '50%';
      charDiv.style.display = 'flex';
      charDiv.style.flexDirection = 'column';
      charDiv.style.justifyContent = 'flex-end';
      charDiv.style.alignItems = 'center';

      if (char.position === 'left') {
        charDiv.style.left = '0';
      } else {
        charDiv.style.right = '0';
      }

      const charImg = document.createElement('img');
      charImg.src = char.image;
      charImg.style.width = '80%';
      charImg.style.height = '80%';
      charImg.style.objectFit = 'contain';
      charImg.style.objectPosition = 'bottom center';
      charImg.style.marginBottom = '20px';

      const charName = document.createElement('div');
      charName.className = 'character-name';
      charName.textContent = char.name;
      charName.style.background = 'linear-gradient(90deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0) 100%)';
      charName.style.padding = '4px 8px';
      charName.style.borderRadius = '4px';
      charName.style.fontSize = '0.9rem';
      charName.style.color = '#fff';
      charName.style.textTransform = 'uppercase';
      charName.style.letterSpacing = '1px';
      charName.style.textShadow = '1px 1px 2px #000';

      charDiv.appendChild(charImg);
      charDiv.appendChild(charName);
      artworkContainer.appendChild(charDiv);
    });

    // Hide single image when characters are present
    sceneImage.style.display = 'none';
  } else {
    // Show single image if no characters
    sceneImage.style.display = 'block';
    if (scene.image) {
      sceneImage.src = scene.image;
      sceneImage.style.opacity = '1';
    } else {
      sceneImage.style.opacity = '0';
    }
  }

  if (scene.speaker) {
    speakerName.textContent = scene.speaker;
  } else {
    speakerName.textContent = '';
  }

  // Update dialog section
  const sceneText = document.getElementById('scene-text');
  const sceneMonologue = document.getElementById('scene-monologue');

  sceneText.textContent = scene.text || '';

  if (scene.monologue) {
    sceneMonologue.textContent = scene.monologue;
    sceneMonologue.style.display = 'block';
  } else {
    sceneMonologue.style.display = 'none';
  }

  // Render choices
  const choicesContainer = document.getElementById('choices-container');
  choicesContainer.innerHTML = '';

  if (scene.options && scene.options.length > 0) {
    scene.options.forEach((option, index) => {
      // Check requirements
      if (option.requirement && !gameState.hasFlag(option.requirement)) {
        return; // Skip this option if requirement not met
      }

      const button = document.createElement('button');
      button.className = 'choice-btn';
      button.textContent = option.text;
      button.dataset.index = index;

      button.addEventListener('click', () => {
        handleChoice(option);
      });

      choicesContainer.appendChild(button);
    });
  } else {
    const noChoices = document.createElement('p');
    noChoices.textContent = '...';
    noChoices.style.color = '#666';
    noChoices.style.textAlign = 'center';
    choicesContainer.appendChild(noChoices);
  }
}

// Handle player choice
function handleChoice(option) {
  // Update vibes
  if (option.vibeChange) {
    for (const [tracker, value] of Object.entries(option.vibeChange)) {
      gameState.updateVibe(tracker, value);
    }
  }

  // Set flags
  if (option.flagSet) {
    gameState.setFlag(option.flagSet);
  }

  // Navigate to next scene
  if (option.nextScene) {
    renderScene(option.nextScene);
  }
}

// Navigate to a scene by ID
export function goToScene(sceneId) {
  renderScene(sceneId);
}

// Initialize the game
export function initGame(startSceneId = 'intro') {
  gameState.load();
  const startScene = getScene(startSceneId);
  if (startScene) {
    renderScene(startSceneId);
  } else {
    console.error(`Start scene not found: ${startSceneId}`);
  }
}

// Expose initGame globally for HTML script tag usage
window.initGame = initGame;
