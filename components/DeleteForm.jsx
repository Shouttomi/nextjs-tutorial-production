'use client'
import { deleteTask } from "@/utils/actions";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button className="btn btn-xs btn-error" disabled={pending}>
      {pending ? "pending..." : "delete..."}
    </button>
  );
};

const DeleteForm = ({ id }) => {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={id} />
     <SubmitButton/>
    </form>
  );
};
export default DeleteForm;

/* 
useFormStatus blueprint probable

import { useFormStatus } from "react-dom";
import action from './actions';

function Submit() {
  const status = useFormStatus();
  return <button disabled={status.pending}>Submit</button>
}

export default function App() {
  return (
    <form action={action}>
      <Submit />
    </form>
  );
} 

To get status information, the Submit component must be 
rendered within a <form>. The Hook returns information
 like the pending property which tells you if the form
  is actively submitting.*/