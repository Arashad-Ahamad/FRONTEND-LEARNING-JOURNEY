"use client";

import { useActionState, useState } from "react";
import { submitForm } from "./action";
import { formSchema } from "./schema";

export default function Home() {
  const [state, formAction, isPending] = useActionState(submitForm, {});
  const [errors, setErrors] = useState({});

  function handleSubmit(e) {
    const data = {
      fullName: e.target.fullName.value,
      email: e.target.email.value,
      password: e.target.password.value,
      mobile: e.target.mobile.value,
    };

    const result = formSchema.safeParse(data);

    if (!result.success) {
      e.preventDefault();

    
      const fieldErrors = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0];
        if (!fieldErrors[field]) {
          fieldErrors[field] = issue.message;
        }
      });

      setErrors(fieldErrors);
      return;
    }

    setErrors({});
  }

  return (
    <form action={formAction} onSubmit={handleSubmit}>
      {/* Name */}
      <input type="text" name="fullName" placeholder="Name" autoComplete="name" /><br />
      {errors.fullName && <p style={{ color: "red" }}>{errors.fullName}</p>}

      {/* Email */}
      <input type="email" name="email" placeholder="Email" autoComplete="email" /><br />
      {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

      {/* Password */}
      <input
        type="password"
        name="password"
        placeholder="Password"
        autoComplete="new-password"
      /> <br />
      {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

      {/* Mobile */}
      <input type="tel" name="mobile" placeholder="Mobile Number" autoComplete="tel" /><br /> <br />
      {errors.mobile && <p style={{ color: "red" }}>{errors.mobile}</p>}

      <button disabled={isPending}>
        {isPending ? "Saving..." : "Submit"}
      </button>

      {state.error && <p style={{ color: "red" }}>{state.error}</p>}
      {state.success && <p style={{ color: "green" }}>{state.success}</p>}
    </form>
  );
}