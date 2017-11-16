import { shallow } from 'vue-test-utils'
import { assert } from 'chai'

import LgsAlert from '../../../src/LgsAlert'

describe('LgsAlert.vue', () => {
  it('should not render component when active prop is false', () => {
    const wrapper = shallow(LgsAlert, {
      propsData: {
        active: false
      }
    })
    assert.isOk(wrapper.isEmpty(), 'should be empty')
  })

  it('should dismiss alert when close button is clicked', done => {
    // const Vue = createLocalVue()
    const wrapper = shallow(LgsAlert)

    assert.isNotOk(wrapper.isEmpty(), 'should not be empty')

    // Dismiss the component
    wrapper.find('a').trigger('click')

    assert.isOk(wrapper.isEmpty(), 'should be empty')

    done()
  })
})
