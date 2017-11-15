import { shallow } from 'vue-test-utils'
import LgsSpinner from '../../../src/LgsSpinner'
import { assert } from 'chai'

describe('LgsSpinner.vue', () => {
  it('should not render component when active prop is false', () => {
    const wrapper = shallow(LgsSpinner, {
      propsData: {
        active: false
      }
    })
    assert.isNotOk(wrapper.contains('svg'))
  })

  it('should render component when active it true/unspecified', () => {
    const wrapper = shallow(LgsSpinner)
    assert.isOk(wrapper.contains('svg'))
  })
})
