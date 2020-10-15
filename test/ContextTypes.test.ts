import { Contact, ContextTypes } from '../src';

const json = '{ "type": "fdc3.contact", "id": { "email": "joe@mail.com" } }';
const contact: Contact = {
  type: 'fdc3.contact',
  id: {
    email: 'joe@mail.com',
  },
};

// To be expanded
describe('Context types', () => {
  it('Convert contact from json', () => {
    const converted = JSON.parse(json) as Contact;
    expect(converted).toEqual(contact);
    expect(converted.type).toEqual(ContextTypes.Contact);
  });

  it('Convert contact to json', () => {
    expect(JSON.parse(JSON.stringify(contact))).toEqual(JSON.parse(json));
  });
});
