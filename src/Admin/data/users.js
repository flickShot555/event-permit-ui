import { faker } from "@faker-js/faker";

export const ROLES = ["Admin", "Moderator", "User"];

export const users = Array.from({ length: 18 }).map((_, i) => ({
  id: i + 1,
  name: faker.person.fullName(),
  email: faker.internet.email(),
  role: ROLES[faker.number.int({ min: 0, max: 2 })],
  createdAt: faker.date.past({ years: 1 }).toISOString().slice(0, 10),
}));
