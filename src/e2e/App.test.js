import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `localhost:8080`;

test('Check root', async t => {
  const root = Selector('#root').exists;
  await t.expect(root).ok();
});

test('Check navbar', async t => {
const navbar = Selector('#navbar').exists;
await t.expect(navbar).ok();
});
test('Check logo', async t => {
const logo = Selector('#logo').exists;
await t.expect(logo).ok();
});
test('Check main', async t => {
const main = Selector('#main').exists;
await t.expect(main).ok();
});
test('Check searchBox', async t => {
const search = Selector('#search').exists;
await t.expect(search).ok();
});

