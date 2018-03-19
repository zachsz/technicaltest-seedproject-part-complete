import Vue from 'vue';
import { beforeEachHooks, afterEachHooks, shallow } from 'vue-unit';
import MyComponent from './app.vue';


describe('App', () => {
  beforeEach(beforeEachHooks);
  afterEach(afterEachHooks);

  it('sets the correct default data', () => {
    const vm = shallow(MyComponent);
    expect(typeof MyComponent.data).toBe('function')
    const defaultData = MyComponent.data()
    expect(defaultData.deals.length).toBe(0)
    vm.$el.classList.contains('deals-layout')
  });
});
