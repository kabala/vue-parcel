module.exports = {
  prompts: {
    name: {
      type: "string",
      required: true,
      label: "Nombre del proyecto"
    },
    description: {
      type: "string",
      required: true,
      label: "Descripción del proyecto",
      default: "Un proyecto de Vue.js + Parcel"
    },
    author: {
      type: "string",
      label: "Autor"
    },
    license: {
      type: "string",
      label: "Licencia",
      default: "MIT"
    }
  },
  completeMessage: "{{#inPlace}}Para empezar:\n\n  yarn\n  yarn run dev{{else}}Para empezar:\n\n  cd {{destDirName}}\n  yarn\n  yarn run dev{{/inPlace}}"
}