import { faker } from "@faker-js/faker";
export const orders = Array.from({ length: 12 }).map((_, i) => ({
  id: 1000 + i,
  event: faker.commerce.productName(),
  status: ["Approved", "In Review", "Rejected"][faker.number.int({ min: 0, max: 2 })],
  updatedAt: faker.date.recent({ days: 14 }).toISOString().slice(0, 10),
}));
