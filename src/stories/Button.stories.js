// import your component
import ButtonComponent from "../components/Button";

export default {
  title: "Button", // define a title
  component: ButtonComponent, // attach the component to use for a story
};

// create a template to create multiple stories
const Template = (args) => <ButtonComponent {...args} />;

// define your story ...
export const Button = Template.bind({}); // here "Button" will be your story name
// add Button properties
Button.args = {
  type: "primary",
  children: "Button",
};
