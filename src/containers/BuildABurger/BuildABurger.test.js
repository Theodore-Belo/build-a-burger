import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { BuildABurger } from "./BuildABurger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

configure({ adapter: new Adapter() });

describe("<BuildABurger />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BuildABurger onInitIngredients={() => {}} />);
  });

  it("should render <BuildControls /> when receiving ingredients", () => {
    wrapper.setProps({ ings: { salad: 0 } });
    expect(wrapper.find(BuildControls)).toHaveLength(1);
  });
});
