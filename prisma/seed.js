import {PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Peuplement des utilisateurs
  await prisma.user.createMany({
    data: [
      {
        email: 'test@example.com',
        username: '',
        picture: '',
        password: '$2y$10$WEnl6GXIvhB/qS7AlpBbb.kzUxnFTCufWa0J3xc0z/AhFgdC2eapm',
        highest_score: 100,
        victories: 10,
        victories_chain: 3,
        victories_three: 5,
        games: 20,
        games_chain: 5,
        games_three: 15,
      },
    ],
  });

  // Peuplement des catégories
  await prisma.category.createMany({
    data: [{name: 'Culture générale'}, {name: 'Science'}, {name: 'Histoire'}],
  });

  // Récupération des IDs des catégories pour les associer aux questions
  const categoryIds = await prisma.category.findMany();

  await prisma.question.createMany({
    data: [
      // Culture générale
      {
        heading: 'Quelle est la capitale de la France ?',
        answer: 'Paris',
        category_id: categoryIds.find((c) => c.name === 'Culture générale').id,
      },
      {
        heading: 'Qui a écrit "Les Misérables" ?',
        answer: 'Victor Hugo',
        category_id: categoryIds.find((c) => c.name === 'Culture générale').id,
      },
  
      // Science
      {
        heading: 'Que représente H2O ?',
        answer: "L'eau",
        category_id: categoryIds.find((c) => c.name === 'Science').id,
      },
      {
        heading: 'Quelle est la planète la plus proche du Soleil ?',
        answer: 'Mercure',
        category_id: categoryIds.find((c) => c.name === 'Science').id,
      },
      {
        heading: 'Quel est l\'élément chimique dont le symbole est "O" ?',
        answer: 'Oxygène',
        category_id: categoryIds.find((c) => c.name === 'Science').id,
      },
  
      // Histoire
      {
        heading: "Qui a découvert l'Amérique ?",
        answer: 'Christophe Colomb',
        category_id: categoryIds.find((c) => c.name === 'Histoire').id,
      },
      {
        heading: 'En quelle année la Première Guerre mondiale a-t-elle commencé ?',
        answer: '1914',
        category_id: categoryIds.find((c) => c.name === 'Histoire').id,
      },
    ],
  });
  

  console.log('Peuplement terminé !');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
