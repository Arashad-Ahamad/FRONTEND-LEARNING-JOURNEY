"use server"

import { formSchema } from "./schema"

export async function submitForm(prevState, formData) {
    const data = {
        fullName: formData.get("fullName"),
        email: formData.get("email"),
        password: formData.get("password"),
        mobile: formData.get("mobile")
    }
    
    // Validate the data on the server using the zod schema
    const result = formSchema.safeParse(data)
    
    // If validation fails, return the first error message
    if (!result.success) {
        return { error: result.error.issues[0]?.message || "Invalid data" }
    }

    // Log the received data (password hidden for security)
    console.log("Received on server:", { ...data, password: "***" })

    // If everything is valid, return a success message
    return { success: `Hello ${data.fullName} Account created successfully` }
}