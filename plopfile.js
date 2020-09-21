const COMPONENT_TYPES = {
  ATOM: 'atom',
  MOLECULE: 'molecule',
  ORGANISM: 'organism',
  PAGE: 'page',
}

module.exports = function(plop) {
  plop.setGenerator('component', {
    description: 'Pick one of following component type',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'Component name',
        validate: function(value) {
          if (/.+/.test(value)) {
            return true
          }
          return 'component name is required'
        },
      },
      {
        type: 'list',
        name: 'componentType',
        message: 'Component type',
        choices: Object.values(COMPONENT_TYPES),
      },
    ],
    actions: function(data) {
      const TYPE = '{{dashCase componentType}}'
      const COMPONENTS_TMPL_DIR = '_templates/components'
      const OUTPUT_DIR = 'src/components/'
      const TYPE_DIR = TYPE + 's/'
      const OUT_TYPE = OUTPUT_DIR + TYPE_DIR
      const COMPONENT_NAME = '{{properCase componentName}}'
      const DEFAULT_EXPORT_TEMPLATE = `export * from './${COMPONENT_NAME}';`
      let actions = [
        // Output src/components/{componentType}/index.js file
        {
          type: 'add',
          path: `${OUT_TYPE}index.js`,
          skipIfExists: true,
        },
        // Append new component to src/components/{componentType}/index.js file
        {
          type: 'append',
          path: `${OUT_TYPE}index.js`,
          template: DEFAULT_EXPORT_TEMPLATE,
        },
        // Output src/components/{componentType}/{componentName}/index.js file
        {
          type: 'add',
          path: `${OUT_TYPE}${COMPONENT_NAME}/index.js`,
          template: DEFAULT_EXPORT_TEMPLATE,
          skipIfExists: true,
        },
        // Output src/components/{componentType}/{componentName}/{componentName}.jsx file
        {
          type: 'add',
          path: `${OUT_TYPE}${COMPONENT_NAME}/${COMPONENT_NAME}.jsx`,
          templateFile: `${COMPONENTS_TMPL_DIR}/${TYPE}.jsx`,
          skipIfExists: true,
        },
      ]
      switch (data.componentType) {
        case COMPONENT_TYPES.ATOM:
        case COMPONENT_TYPES.MOLECULE:
        case COMPONENT_TYPES.ORGANISM:
          actions = actions.concat([
            // Output src/components/{componentType}/{componentName}/{componentName}.stories.jss file
            {
              type: 'add',
              path: `${OUT_TYPE}${COMPONENT_NAME}/${COMPONENT_NAME}.stories.js`,
              templateFile: `${COMPONENTS_TMPL_DIR}/stories.js`,
              skipIfExists: true,
            },
          ])
          break
        case COMPONENT_TYPES.PAGE:
          break
        default:
          console.log('No default action type')
          return false
      }
      return actions
    },
  })
}
