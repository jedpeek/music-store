export default {
  name: 'user',
  type: 'document',
  title: 'Users',
  fields: [
    {
      name: 'email',
      title: 'Email',
      type: 'email',
    },
    {
      name: 'first_name',
      title: 'First Name',
      type: 'string',
    },
    {
      name: 'last_name',
      title: 'Last Name',
      type: 'string',
    },
  ],
}
