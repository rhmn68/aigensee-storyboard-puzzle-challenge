export const ORDINAL_WORDS = [
  'Pertama', 'Kedua', 'Ketiga', 'Keempat', 'Kelima', 'Keenam',
  'Ketujuh', 'Kedelapan', 'Kesembilan', 'Kesepuluh', 'Kesebelas',
  'Kedua Belas', 'Ketiga Belas', 'Keempat Belas', 'Kelima Belas', 'Keenam Belas'
];

export const getSlotLabel = (index: number): string => {
  return ORDINAL_WORDS[index] ? `Slot ${ORDINAL_WORDS[index]}` : `Slot Ke-${index + 1}`;
};
