import { shallow } from 'vue-test-utils'
import LgsAlert from '../../../src/LgsAlert'
import { assert } from 'chai'

describe('LgsAlert.vue', () => {
  it('should not render component when active prop is false', () => {
    const wrapper = shallow(LgsAlert, {
      propsData: {
        active: false
      }
    })
    assert.isNotOk(wrapper.contains('.lgs-alert'))
  })

  it('should dismiss alert when close button is clicked', () => {
    const wrapper = shallow(LgsAlert)

    // Dismiss the component
    wrapper.onClick()
  })
})
