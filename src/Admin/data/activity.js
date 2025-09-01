import { faker } from "@faker-js/faker";
export const logs = Array.from({ length: 20 }).map((_, i) => ({
  id: i + 1,
  actor: faker.person.fullName(),
  action: ["CREATED", "UPDATED", "DELETED"][faker.number.int({ min: 0, max: 2 })],
  target: faker.commerce.productName(),
  at: faker.date.recent({ days: 20 }).toISOString(),
}));
