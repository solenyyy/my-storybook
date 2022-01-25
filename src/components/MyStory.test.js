/* eslint-disable no-undef */
import { mount } from '@vue/test-utils';
import MyStory from './MyStory.vue'

describe('MyStory', () => {
  test('Se visualiza', () => {
    const wrapper = mount(MyStory, {});
   expect(wrapper.find('h1').text()).toBe('Ola ke ase')
    })
})

    test('Probamos el input', async () => {
        const wrapper = mount(MyStory, { // ? No sería MyStory?
            props: {
                filter: 'ahi',
            }
        });
        /* eslint-disable no-undef */
        const resultadoEsperado = 'tche';
        await wrapper.find('#entrada').setValue('tahiche');
        expect(wrapper.emitted().ResultadoFiltrador[0]).toEqual(resultadoEsperado);//las llaves son necesarias?
        expect(wrapper.find('#etiqueta').text()).toBe(resultadoEsperado);
      });
