import Filtrador from './MyStory.vue'

export default {
  title: 'components/MyStory',
  component: Filtrador,
  argTypes: {
    onInput: {action: 'Entrada del filtrado'},
    onResultadoFiltrador: {
      description: "Evento emitido cuando introduces carácteres en el input"
    },
    /* Ajusta el tamaño del input */
    size: {
      control: {
        type: "range",
        min: 16,
        max: 64
      }
    },
    /* Patrón que elimina de la frase introducida en el input */
    filter: {
      control: {
        type:"text",
      }
    }
  }
}
 const Template = (args) => ({
    components: {Filtrador},
    setup() {
      return {args}
    },
    template:/* html */
    `<div style>
    <Filtrador v-bind="args"/>
    </div>`,
  }
)
Template.storyName = 'Funcionalidad base';
export const Normal = Template.bind({});
Normal.args = {
  size:60,
  filter: "a",
}
