'use strict';

require('dotenv').config();
const mongoose = require('mongoose');

const book = require('./book')
mongoose.connect(process.env.DB_URL);

async function seed() {
  await book.create({
    title: 'Three Body Problem',
    description: "Set against the backdrop of China's Cultural Revolution, a secret military project sends signals into space to establish contact with aliens. An alien civilization on the brink of destruction captures the signal and plans to invade Earth. Meanwhile, on Earth, different camps start forming, planning to either welcome the superior beings and help them take over a world seen as corrupt, or to fight against the invasion. The result is a science fiction masterpiece of enormous scope and vision.",
    author: 'Liu Cixin',
    email: 'TotallyReal_Email@YupRealEmail.com'
  });
  console.log('Three Body Problem was added to the DB');

  await book.create({
    title: 'Dune',
    description: `Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the “spice” melange, a drug capable of extending life and enhancing consciousness. Coveted across the known universe, melange is a prize worth killing for.

    When House Atreides is betrayed, the destruction of Paul’s family will set the boy on a journey toward a destiny greater than he could ever have imagined. And as he evolves into the mysterious man known as Muad’Dib, he will bring to fruition humankind’s most ancient and unattainable dream.`,
    author: 'Frank Herbert',
    email: 'TotallyReal_Email2@YupRealEmail.com'
  });
  console.log('Dune was added to the DB');

  await book.create({
    title: 'Quotations from Chairman Mao Tse-tung',
    description: "Quotations from Chairman Mao Tse-tung is a book of statements from speeches and writings by Mao Zedong, the former Chairman of the Chinese Communist Party, published from 1964 to about 1976 and widely distributed during the Cultural Revolution.",
    author: 'Mao Zedong',
    email: 'TotallyReal_Email3@YupRealEmail.com'
  });
  console.log('Quotations from Chairman Mao Tse-tung was added to the DB');

  await book.create({
    title: 'Enders Game',
    description: `Andrew "Ender" Wiggin thinks he is playing computer simulated war games; he is, in fact, engaged in something far more desperate. The result of genetic experimentation, Ender may be the military genius Earth desperately needs in a war against an alien enemy seeking to destroy all human life. The only way to find out is to throw Ender into ever harsher training, to chip away and find the diamond inside, or destroy him utterly. Ender Wiggin is six years old when it begins. He will grow up fast.

    But Ender is not the only result of the experiment. The war with the Buggers has been raging for a hundred years, and the quest for the perfect general has been underway almost as long. Ender's two older siblings, Peter and Valentine, are every bit as unusual as he is, but in very different ways. While Peter was too uncontrollably violent, Valentine very nearly lacks the capability for violence altogether. Neither was found suitable for the military's purpose. But they are driven by their jealousy of Ender, and by their inbred drive for power. Peter seeks to control the political process, to become a ruler. Valentine's abilities turn more toward the subtle control of the beliefs of commoner and elite alike, through powerfully convincing essays. Hiding their youth and identities behind the anonymity of the computer networks, these two begin working together to shape the destiny of Earth-an Earth that has no future at all if their brother Ender fails.`,
    author: 'Orson Scott Card',
    email: 'TotallyReal_Email4@YupRealEmail.com'
  });
  console.log('Enders Game was added to the DB');
  mongoose.disconnect();
};

seed();
