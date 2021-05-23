import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import Signup1 from "./Signup1";
import Signup2 from "./Signup2";

const defaultData = {
  firstName: "",
  lastName: "",
  jobDesc: "",
  gender: "gender",
  email: "",
  laptop: "",
  address: "",
  phone: "",
};

const steps = [{ id: "a" }, { id: "b" }, { id: "preview" }];

const Stepper = () => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 1,
  });

  const props = { formData, setForm, navigation };

  switch (step.id) {
    case "a":
      return <Signup1 {...props} />;
    case "b":
      return <Signup2 {...props} />;
  }

  return <div>hallo</div>;
};

export default Stepper;
