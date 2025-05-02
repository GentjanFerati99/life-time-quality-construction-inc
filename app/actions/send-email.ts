"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export type ContactFormData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  service: string
  message: string
}

export async function sendContactEmail(formData: ContactFormData) {
  try {
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      return {
        success: false,
        error: "Please fill in all required fields",
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return {
        success: false,
        error: "Please enter a valid email address",
      }
    }

    // Phone validation (basic)
    const phoneRegex = /^[0-9()\-\s+]+$/
    if (!phoneRegex.test(formData.phone)) {
      return {
        success: false,
        error: "Please enter a valid phone number",
      }
    }

    // Format the message
    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.phone}</p>
      <p><strong>Service Interested In:</strong> ${formData.service || "Not specified"}</p>
      <p><strong>Message:</strong></p>
      <p>${formData.message || "No message provided"}</p>
    `

    // Send the email
    const { data, error } = await resend.emails.send({
      from: "LIFETIME QUALITY CONSTRUCTION <onboarding@resend.dev>",
      to: "gentjan.ferati99@gmail.com",
      subject: `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`,
      html: emailContent,
      reply_to: formData.email,
    })

    if (error) {
      console.error("Error sending email:", error)
      return {
        success: false,
        error: "Failed to send email. Please try again later.",
      }
    }

    return {
      success: true,
      data,
    }
  } catch (error) {
    console.error("Error in sendContactEmail:", error)
    return {
      success: false,
      error: "An unexpected error occurred. Please try again later.",
    }
  }
}
