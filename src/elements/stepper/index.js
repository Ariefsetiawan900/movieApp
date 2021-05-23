import React,{useEffect} from "react";
import { useForm, useStep } from "react-hooks-helper";
import Signup1 from "./Signup1";
import Signup2 from "./Signup2";
import Preview from './Preview'

const defaultData = {
  firstName: "",
  lastName: "",
  gender: "",
  email: "",
  laptop: "",
  address: "",
  phone: 0,
};

const steps = [{ id: "a" }, { id: "b" }, { id: "preview" }];

const Stepper = () => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  const props = { formData, setForm, navigation };

  useEffect(() => {
    console.log(formData)
  }, [formData])

  switch (step.id) {
    case "a":
      return <Signup1 {...props} />;
    case "b":
      return <Signup2 {...props} />;
      case "preview":
      return <Preview {...props} />;
  }

  return <div>Loading</div>;
};

export default Stepper;
