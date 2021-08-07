import React from "react";
import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form"

type Inputs = {
  example: string,
  exampleRequired: string,
};

const ReactHookFormSample = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
  const onError: SubmitErrorHandler<Inputs> = errors => { console.log('error:'); console.log(errors)}

  console.log('errors', errors)

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <input placeholder={"Input your name"} defaultValue="" {...register("example")} />
      {!errors.example && <span>OK</span>}

      <br />

      <input {...register("exampleRequired", { required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
      {!errors.exampleRequired && <span>OK</span>}

      <br />

      <input type="submit" />
    </form>
  );
}

export default ReactHookFormSample;
