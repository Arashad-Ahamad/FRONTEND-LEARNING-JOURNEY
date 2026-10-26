'use client'
import submitForm from "./action";
import { useActionState } from "react";

export default function Home() {
  const [state, formAction, isPending] = useActionState(submitForm, {})

  return (
    <form action={formAction}>
      <input type="text" name="name" placeholder="enter name" />
      <button disabled={isPending}> 
        {isPending ? 'Saving..' : "Submit"}
      </button>

      {state.error && <p style={{color:'red'}}>{state.error}</p>}
      {state.success && <p style={{color:'green'}}>{state.success}</p>}

    </form>
  );
}
