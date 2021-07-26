export interface Item {
  id: number;
  beacon: string;
  category: string;
  service: string;
  timestamp: string;
  battery: number;
  temperature: number;
  status: string;
  latitude: number;
  longitude: number;
  floor: number;
}

const displayTextVersion: Record<string, string> = {
  available: 'disponible',
  unavailable: 'indisponible',
  needMaintenance: 'à réparer',
};

/**
 * Normalize the list of items
 *
 * @param {Item[]} items the list of items
 */
export function getPrettyItems(items: Item[]): Item[] {
  return items.map((item) => {
    return {
      ...item,
      status: displayTextVersion[item.status],
    };
  });
}

/**
 * Normalize string by converting characters to lower case and removing accents
 *
 * @param {string} text the input text
 */
export function simplifyText(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

/**
 * Return the path of the corresponding item icon
 *
 * @param {string} itemName the item name
 */
export function getIconPath(itemName: string): string {
  return '/itemIcons/' + itemName + '.svg';
}

export const itemExamples = getPrettyItems([
  {
    id: 1,
    beacon: 'aa:aa:aa:aa:aa:aa',
    floor: 0,
    category: 'ECG',
    status: 'available',
    battery: 94,
    temperature: 20,
    latitude: 47.36895354249011,
    longitude: 7.338636884727114,
    timestamp: '2020-10-26T08:54:14',
    service: 'Bloc 1',
  }
]);
