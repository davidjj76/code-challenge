import _ from 'lodash';
import Faker from 'faker';
import mongoose from 'mongoose';

import Article from './models';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/billin');
mongoose.set('debug', true);

Article.remove({}, (err) => {
  if (!err) {
    _.times(10, () => {
      const content = `
${Faker.lorem.paragraphs()}
${Faker.lorem.paragraphs()}
${Faker.lorem.paragraphs()}
${Faker.lorem.paragraphs()}
${Faker.lorem.paragraphs()}
`;
      return Article.create({
        author: Faker.name.findName(),
        content,
        excerpt: content.slice(0, 350),
        published: Faker.random.boolean(),
        tags: [Faker.random.words(), Faker.random.words()],
        title: Faker.name.title(),
      });
    });
  }
});
