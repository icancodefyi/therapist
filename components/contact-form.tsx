"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required").min(2, "Name must be at least 2 characters"),
  phone: z.string().min(1, "Phone number is required").regex(/^[\+]?[1-9][\d]{0,15}$/, "Please enter a valid phone number"),
  email: z.string().min(1, "Email is required").email("Please enter a valid email address"),
  message: z.string().min(1, "Please tell us what brings you here").min(10, "Please provide more detail (at least 10 characters)"),
  preferredTime: z.string().min(1, "Preferred contact time is required"),
  agreeToContact: z.boolean().refine(val => val === true, "You must agree to be contacted"),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
      preferredTime: "",
      agreeToContact: false,
    },
  })

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true)
    
    // Simulate form submission - replace with your actual submission logic
    try {
      console.log("Form submitted:", data)
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
      setIsSubmitted(true)
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <h3 className="text-2xl font-serif font-medium text-gray-800 mb-4">
          Thank you for reaching out
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Your message has been received. I will get back to you within 24-48 hours.
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-800 font-medium">Name *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your full name"
                    className="bg-white border-gray-300 focus:border-gray-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-800 font-medium">Phone *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your phone number"
                    type="tel"
                    className="bg-white border-gray-300 focus:border-gray-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-800 font-medium">Email *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="your.email@example.com"
                    type="email"
                    className="bg-white border-gray-300 focus:border-gray-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-800 font-medium">What brings you here? *</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Please share what you're looking for help with or any questions you have..."
                    className="bg-white border-gray-300 focus:border-gray-500 min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="preferredTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-800 font-medium">Preferred time to reach you *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g., Weekday mornings, Tuesday-Thursday evenings, etc."
                    className="bg-white border-gray-300 focus:border-gray-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="agreeToContact"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-gray-800 font-normal cursor-pointer">
                    I agree to be contacted via phone or email to discuss my inquiry *
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 h-auto text-base"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </Form>
    </div>
  )
}
