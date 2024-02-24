import { shallowMount } from '@vue/test-utils';
import messageFormatterMixin from '../messageFormatterMixin';

describe('messageFormatterMixin', () => {
  it('returns correct plain text', () => {
    const Component = {
      render() {},
      mixins: [messageFormatterMixin],
    };
    const wrapper = shallowMount(Component);
    const message =
      '<b>VirtuaCRM is an opensource tool. https://www.virtuacrm.com</b>';
    expect(wrapper.vm.getPlainText(message)).toMatch(
      'VirtuaCRM is an opensource tool. https://www.virtuacrm.com'
    );
  });
});
