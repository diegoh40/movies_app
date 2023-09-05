import { mount } from '@vue/test-utils'
import AppNavbar from '@/components/AppNavbar.vue'
describe('AppNavbar.vue', () => {
  it('renders button text when passed', () => {
    const linkNavbar = 'MOVIES'
    const wrapper = mount(AppNavbar, {
      props: {
        text: linkNavbar
      }
    })


    expect(wrapper.text()).toContain(linkNavbar)
  })

  it('emits click event when button is clicked', async () => {
    const wrapper = mount(AppNavbar)


    await wrapper.find('button').trigger('click')


    expect(wrapper.emitted('click')).toBeTruthy()
  })
})