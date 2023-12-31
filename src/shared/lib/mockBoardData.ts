export const upperBoard = [
  { id: 0, title: 'Start', group: 'angle', variant: 'angle' },
  { id: 1, title: 'Rolls Royce', price: 2000, group: 'britany', variant: 'vertical' },
  { id: 2, title: 'McDonalds', price: 2000, group: 'america', variant: 'vertical' },
  { id: 3, title: 'Bp', price: 2000, group: 'britany', variant: 'vertical' },
  { id: 4, title: 'BBC', price: 2000, group: 'britany', variant: 'vertical' },
  { id: 5, title: 'Форс-мажор', group: 'force-major', variant: 'vertical' },
  { id: 6, title: 'Samsung', price: 150000, group: 'korea', variant: 'vertical' },
  { id: 7, title: 'Шанс', group: 'chance', variant: 'vertical' },
  { id: 8, title: 'Danone', price: 6000, group: 'france', variant: 'vertical' },
  { id: 9, title: 'Hennessy', price: 6000, group: 'france', variant: 'vertical' },
  { id: 10, title: 'Walt disney', price: 200000, group: 'america', variant: 'vertical' },
  { id: 11, title: 'Loreal', price: 120000, group: 'france', variant: 'vertical' },
  { id: 12, title: 'Тюрьма', group: 'angle', variant: 'angle' },
];

export const bottomBoard = [
  { id: 19, title: 'Казик', group: 'angle', variant: 'angle' },
  { id: 20, title: 'Sony', price: 220000, group: 'japan', variant: 'vertical' },
  { id: 21, title: 'Cola', price: 200000, group: 'america', variant: 'vertical' },
  { id: 22, title: 'Canon', price: 18000, group: 'japan', variant: 'vertical' },
  { id: 23, title: 'Toyota', price: 20000, group: 'japan', variant: 'vertical' },
  { id: 24, title: 'Форс-мажор', group: 'force-major', variant: 'vertical' },
  { id: 25, title: 'Hyundai', price: 150000, group: 'korea', variant: 'vertical' },
  { id: 26, title: 'Шанс', group: 'chance', variant: 'vertical' },
  { id: 27, title: 'Siemens', price: 22000, group: 'germany', variant: 'vertical' },
  { id: 28, title: 'Adidas', price: 22000, group: 'germany', variant: 'vertical' },
  { id: 29, title: 'Ford', price: 200000, group: 'america', variant: 'vertical' },
  { id: 30, title: 'Mercedes-benz', price: 24000, group: 'germany', variant: 'vertical' },
  { id: 31, title: 'В тюрьму', group: 'angle', variant: 'angle' },
].reverse();

export const leftBoard = [
  { id: 32, title: 'Nestle', price: 28000, group: 'Switzerland', variant: 'horizontal' },
  { id: 33, title: 'Rolex', price: 28000, group: 'Switzerland', variant: 'horizontal' },
  { id: 34, title: 'Лукойл', price: 350000, group: 'russian', variant: 'horizontal' },
  { id: 35, title: 'Налог', price: 150000, group: 'tax', variant: 'horizontal' },
  { id: 36, title: 'Сбербанк', price: 350000, group: 'russian', variant: 'horizontal' },
  { id: 37, title: 'Газпром', price: 400000, group: 'russian', variant: 'horizontal' },
].reverse();

export const rightBoard = [
  { id: 13, title: 'Ikea', price: 140000, group: 'sweden', variant: 'horizontal' },
  { id: 14, title: 'Volvo', price: 140000, group: 'sweden', variant: 'horizontal' },
  { id: 15, title: 'Gorgo armani', price: 1400, group: 'italy', variant: 'horizontal' },
  { id: 16, title: 'Налог', price: 150000, group: 'tax', variant: 'horizontal' },
  { id: 17, title: 'Versace', price: 150000, group: 'italy', variant: 'horizontal' },
  { id: 18, title: 'Ferrari', price: 150000, group: 'italy', variant: 'horizontal' },
];

export const dataBoard = [...upperBoard, ...rightBoard, ...bottomBoard, ...leftBoard];
