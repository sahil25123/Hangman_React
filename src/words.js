const hangmanWords = [
    // Easy (4-5 letters)
    { word: "APPLE", hint: "A crunchy fruit, often red or green" },
    { word: "BALL", hint: "Round object used in sports" },
    { word: "FISH", hint: "Swims underwater and has gills" },
    { word: "MOON", hint: "Shines in the night sky" },
    { word: "TREE", hint: "Has leaves and branches" },
  
    // Medium (6-7 letters)
    { word: "BANANA", hint: "Yellow curved fruit" },
    { word: "ROCKET", hint: "Flies into space" },
    { word: "JUNGLE", hint: "Dense, tropical forest" },
    { word: "WHISPER", hint: "Speaking very quietly" },
  
    // Hard (8+ letters)
    { word: "ELEPHANT", hint: "Giant animal with a trunk" },
    { word: "XYLOPHONE", hint: "Musical instrument with wooden bars" },
    { word: "QUARANTINE", hint: "Isolation to prevent disease spread" },
  
    // Themed categories
    // Animals
    { word: "GIRAFFE", hint: "Tall animal with a long neck" },
    { word: "DOLPHIN", hint: "Intelligent sea mammal" },
  
    // Countries
    { word: "CANADA", hint: "Northern country with maple leaves" },
    { word: "JAPAN", hint: "Land of the rising sun" },
  
    // Food
    { word: "PIZZA", hint: "Italian dish with toppings" },
    { word: "SUSHI", hint: "Japanese rice and fish dish" }
  ];
  
  // How to use:
  // 1. Randomly select a word: 
  const randomWord = ()=>{ 
    const selected = hangmanWords[Math.floor(Math.random() * hangmanWords.length)]
    return selected; 
};
  

  export default randomWord;