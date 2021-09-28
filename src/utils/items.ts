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

/**
 * An item category
 */
export interface Category {
  id: number;
  name: string;
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
 * Extracts the subcategory from the given category string, if it is present, otherwise it returns the string.
 * @param fullCategory the category string, whose format is "category.subcategory"
 * @returns the subcategory if present, the given string otherwise
 */
export function extractSubcategory(fullCategory: string): string {
  const split = fullCategory.split('.');
  if (split.length > 1) {
    return split[1];
  } else {
    return fullCategory;
  }
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
    floor: 2,
    category: 'Oxygène',
    status: 'available',
    battery: 94,
    temperature: 20,
    latitude: 46.440896,
    longitude: 6.891924,
    timestamp: '2020-10-26T08:54:14',
    service: 'Bloc 1',
  },
  {
    beacon: 'aa:aa:aa:aa:aa:aa',
    floor: 0,
    timestamp: '2020-10-26T08:54:14',
    status: 'available',
    battery: 87,
    temperature: 22,
    latitude: 46.44092,
    longitude: 6.891924,
    category: 'Lit',
    service: 'Bloc 1',
    id: 2,
  },
  {
    beacon: 'aa:aa:aa:aa:aa:aa',
    floor: 1,
    timestamp: '2020-10-26T08:54:14',
    status: 'available',
    battery: 56,
    temperature: 21,
    latitude: 46.44089,
    longitude: 6.891944,
    category: 'ECG',
    service: 'Bloc 1',
    id: 3,
  },
  {
    beacon: 'aa:aa:aa:aa:aa:aa',
    floor: 2,
    timestamp: '2020-10-26T08:54:14',
    category: 'Oxygène',
    status: 'needMaintenance',
    battery: 20,
    temperature: 20,
    latitude: 46.44099,
    longitude: 6.891984,
    service: 'Bloc 1',
    id: 4,
  },
  {
    beacon: 'aa:aa:aa:aa:aa:aa',
    floor: 0,
    timestamp: '2020-10-26T08:54:14',
    category: 'Lit',
    status: 'unavailable',
    battery: 0,
    temperature: 19,
    latitude: 46.44079,
    longitude: 6.891984,
    service: 'Bloc 2',
    id: 5,
  },
  {
    beacon: 'aa:aa:aa:aa:aa:aa',
    floor: 1,
    timestamp: '2020-10-26T08:54:14',
    category: 'Lit',
    status: 'available',
    battery: 12,
    temperature: 21,
    latitude: 46.44089,
    longitude: 6.891684,
    service: 'Bloc 2',
    id: 6,
  },
  {
    beacon: 'aa:aa:aa:aa:aa:aa',
    floor: 2,
    timestamp: '2020-10-26T08:54:14',
    category: 'ECG',
    status: 'available',
    battery: 12,
    temperature: 20,
    latitude: 46.440898,
    longitude: 6.892268,
    service: 'Bloc 2',
    id: 7,
  },
  {
    beacon: 'aa:aa:aa:aa:aa:aa',
    floor: 1,
    timestamp: '2020-10-26T08:54:14',
    category: 'ECG',
    status: 'needMaintenance',
    battery: 20,
    temperature: 20,
    latitude: 46.441019,
    longitude: 6.891783,
    service: 'Bloc 2',
    id: 8,
  },
  {
    beacon: 'aa:aa:aa:aa:aa:aa',
    floor: 0,
    timestamp: '2020-10-26T08:54:14',
    id: 9,
    category: 'ECG',
    status: 'available',
    battery: 73,
    temperature: 21,
    latitude: 46.440754,
    longitude: 6.892197,
    service: 'Bloc 2',
  },
]);
