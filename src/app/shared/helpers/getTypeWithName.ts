export const getTypeWithName = (type: string | number, name: string) => {
  // generate one emoki for each type pokeon and add name
  switch (type) {
    case 'Fire':
      return `🔥 ${name}`;
    case 'Water':
      return `💧 ${name}`;
    case 'Grass':
      return `🌱 ${name}`;
    case 'Poison':
      return `☠️ ${name}`;
    case 'Electric':
      return `⚡ ${name}`;
    case 'Ground':
      return `🌎 ${name}`;
    case 'Fairy':
      return `🧚 ${name}`;
    case 'Fighting':
      return `🥊 ${name}`;
    case 'Psychic':
      return `🧠 ${name}`;
    case 'Rock':
      return `🪨 ${name}`;
    case 'Bug':
      return `🐛 ${name}`;
    case 'Ghost':
      return `👻 ${name}`;
    case 'Dragon':
      return `🐉 ${name}`;
    case 'Ice':
      return `🧊 ${name}`;
    case 'Flying':
      return `🦅 ${name}`;
    case 'Steel':
      return `⚙️ ${name}`;
    case 'Dark':
      return `🌚 ${name}`;
    case 'Normal':
      return `👤 ${name}`;
    default:
      return `👾 ${name}`;
  }
};
