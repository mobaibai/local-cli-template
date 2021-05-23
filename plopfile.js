module.exports = (plop) => {
  plop.setGenerator('basics', {
    description: 'local cli template',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'template name'
      },
      {
        type: 'input',
        name: 'description',
        message: 'template description'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'projects/{{name}}/package.json',
        templateFile: 'templates/package.hbs'
      }
    ]
  })
}
