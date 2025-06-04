import { faker } from "@faker-js/faker";

const createUser = () => {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    image: faker.image.avatar(),
    username: faker.internet.username(),
  };
};

export { createUser };
