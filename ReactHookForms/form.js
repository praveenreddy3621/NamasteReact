import { useForm } from "react-hook-form";

export const Form = (props) => {
    // console.log(".....props>>>>", props)
    const {onChange} = props;
    // console.log(".....onChange>>>>", onChange)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // console.log("....errors>>>", errors);
  // console.log("....>>>> register>>>", register("abc"))

  const Controller = ({control, register, name, render}) => {
    return null;
  }

  return (
    <form
      style={{ marginTop: "50px" }}
      onSubmit={handleSubmit((data) => {
        //console.log("...data>>>", data);
      })}
    >
      <label>First Name :</label>
      <input
        // {...register("firstName", {
        //   required: "This is Required",
        //   maxLength: {
        //     value: 4,
        //     message: "Value is more than 4 characters",
        //   },
        // })}
        name="firstName"
        placeholder="First Name"
        label="First Name"
      />
      <br></br>
      <label>Last Name :</label>
      <input
        name="lastName"
        // {...register("lastName", {
        //   required: "This is Required",
        // })}
        placeholder="Last Name"
        label="Last Name"
      />
      <br></br>
      <br></br>

      <Controller {...{
        name: "lastName",
        control,
        register,
        rules
      }}/>
      <input type="submit" Submit />
    </form>
  );
};
