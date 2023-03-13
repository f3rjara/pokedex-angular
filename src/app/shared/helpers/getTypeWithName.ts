export const getTypeWithName = (type: string | number, name: string) => {
  // generate one emoki for each type pokeon and add name
  type = type.toString().toLowerCase();
  switch (type) {
    case 'fire':
      return `🔥 ${name}`;
    case 'water':
      return `💧 ${name}`;
    case 'grass':
      return `🌱 ${name}`;
    case 'ooison':
      return `☠️ ${name}`;
    case 'electric':
      return `⚡ ${name}`;
    case 'ground':
      return `🌎 ${name}`;
    case 'fairy':
      return `🧚 ${name}`;
    case 'fighting':
      return `🥊 ${name}`;
    case 'psychic':
      return `🧠 ${name}`;
    case 'rock':
      return `🪨 ${name}`;
    case 'bug':
      return `🐛 ${name}`;
    case 'ghost':
      return `👻 ${name}`;
    case 'dragon':
      return `🐉 ${name}`;
    case 'ice':
      return `🧊 ${name}`;
    case 'flying':
      return `🦅 ${name}`;
    case 'steel':
      return `⚙️ ${name}`;
    case 'dark':
      return `🌚 ${name}`;
    case 'normal':
      return `👤 ${name}`;
    default:
      return `👾 ${name}`;
  }
};
