"use client";
import { createTaskCustom } from "@/utils/actions";
import { useEffect } from "react";
import { useFormStatus, useFormState } from "react-dom";
import toast from "react-hot-toast";

/* useFormState is essentially a hook that allows us to update
 state based on the result of the form action */

const SubmitBtn = () => {
  const { pending } = useFormStatus();

  /* useformstatus is a hook that provides the status information 
  of the last form submittion*/
  return (
    <button
      type="submit"
      className="btn btn-primary join-item"
      disabled={pending}
    >
      {pending ? "please wait..." : "create task"}
    </button>
  );
};

const initialState = {
  message: null,
};

const TaskForm = () => {
  /* useFormState returns the latest state and also the function
   to control that state which in our case is {formAction} */
  const [state, formAction] = useFormState(createTaskCustom, initialState);

  useEffect(() => {
    if (state.message === "error") {
      toast.error("there was an error");
      return;
    }

    console.log(state.message)

    if (state.message) {
      toast.success("task created");
    }
    return;
  }, [state]);

  return (
    /* now we'll not directly invoke createTaskCustom */
    /*  <form action={createTaskCustom}> */

    <form action={formAction}>
      {/*  {state.message ? <p className="mb-2">{state.message}</p>:null} */}

      <div className="join w-full">
        <input
          type="text"
          className="input input-bordered join-item w-full"
          placeholder="type here"
          name="content"
          required
        />
        <SubmitBtn />
      </div>
    </form>
  );
};
export default TaskForm;
