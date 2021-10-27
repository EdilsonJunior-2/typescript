export const type = (typeName: string) => {
  switch (typeName) {
    case "flying":
      return "#a890f0";
    case "normal":
      return "#a8a878";
    case "fire":
      return "#f08030";
    case "water":
      return "#688fef";
    case "grass":
      return "#78c650";
    case "electric":
      return "#f8d030";
    case "ice":
      return "#98d8d8";
    case "fighting":
      return "#c03028";
    case "poison":
      return "#a040a0";
    case "ground":
      return "#e0c068";
    case "psychic":
      return "#f85888";
    case "bug":
      return "#a8b820";
    case "rock":
      return "#b8a038";
    case "ghost":
      return "#705898";
    case "dark":
      return "#705848";
    case "dragon":
      return "#7038f8";
    case "steel":
      return "#b8b8d0";
    case "fairy":
      return "#f0b6bc";
    default:
      return "#000000";
      break;
  }
};
