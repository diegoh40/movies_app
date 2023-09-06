import { mount } from '@vue/test-utils'
import MovieModal from '@/components/MovieModal.vue'

describe('MovieModal.vue', () => {
  it('renders movie information correctly', () => {

    const movieData = {
      original_title: 'Sample Movie',
      poster_path: '/sample-poster.jpg',
      vote_average: 7.5,
      vote_count: 100,
      overview: 'This is a sample movie overview.',
    }


    const wrapper = mount(MovieModal, {
      props: {
        movie: movieData,
        closeModal: () => { },
      },
    })
    expect(wrapper.find('h3').text()).toBe('SAMPLE MOVIE')
  })
})

