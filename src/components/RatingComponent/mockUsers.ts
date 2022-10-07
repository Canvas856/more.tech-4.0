export const mockUsersForRating = Array.from(
  {
    length: 6,
  },
  (_, k) => ({
    name: 'Павел Дуров',
    level: k + 1,
    coinAmount: (k + 1) * 1000,
  }),
);
