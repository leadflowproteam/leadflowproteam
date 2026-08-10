"use client";

import { useState } from "react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

type FormData = {
  fullName: string;
  businessName: string;
  email: string;
  website: string;
  industry: string;
  country: string;
  visitors: string;
  challenge: string;
  message: string;
};

const initialFormData: FormData = {
  fullName: "",
  businessName: "",
  email: "",
  website: "",
  industry: "",
  country: "",
  visitors: "",
  challenge: "",
  message: "",
};

export default function FreeAuditForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    const { name, value } = e.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Temporary client-side submission state.
    // API / CRM integration will be added later.
    setSubmitted(true);
  }

  return (
    <section
      id="audit-form"
      className="bg-white py-24 lg:py-28"
    >
      <Container>
        <SectionHeading
          badge="Request Your Audit"
          title="Tell Us About Your Business"
          description="Complete the form below and we'll review your website and send you a professional audit report."
        />

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-16 max-w-5xl space-y-8 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm lg:p-10"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <Field
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              handleChange={handleChange}
              required
            />

            <Field
              label="Business Name"
              name="businessName"
              value={formData.businessName}
              handleChange={handleChange}
              required
            />

            <Field
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              handleChange={handleChange}
              required
            />

            <Field
              label="Website URL"
              name="website"
              type="url"
              placeholder="https://yourwebsite.com"
              value={formData.website}
              handleChange={handleChange}
              required
            />

            <Field
              label="Industry"
              name="industry"
              value={formData.industry}
              handleChange={handleChange}
              placeholder="e.g. Plumbing, Legal, Healthcare"
            />

            <Field
              label="Target Country"
              name="country"
              value={formData.country}
              handleChange={handleChange}
              placeholder="e.g. United States"
            />

            <Field
              label="Monthly Visitors"
              name="visitors"
              value={formData.visitors}
              handleChange={handleChange}
              placeholder="Optional"
            />

            <Field
              label="Biggest Challenge"
              name="challenge"
              value={formData.challenge}
              handleChange={handleChange}
              placeholder="SEO, Speed, Leads..."
            />
          </div>

          <div>
            <label
              htmlFor="audit-message"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Additional Message
            </label>

            <textarea
              id="audit-message"
              rows={6}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us anything that will help us understand your website or business..."
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {submitted && (
            <div
              role="status"
              className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700"
            >
              Thank you! Your audit request has been received.
            </div>
          )}

          <Button
            size="lg"
            type="submit"
          >
            {submitted
              ? "Audit Request Received"
              : "Request Free Website Audit"}
          </Button>
        </form>
      </Container>
    </section>
  );
}

type FieldProps = {
  label: string;
  name: string;
  value: string;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
};

function Field({
  label,
  name,
  value,
  handleChange,
  type = "text",
  placeholder,
  required = false,
}: FieldProps) {
  return (
    <div>
      <label
        htmlFor={"audit-" + name}
        className="mb-2 block text-sm font-semibold text-gray-700"
      >
        {label}
      </label>

      <input
        id={"audit-" + name}
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      />
    </div>
  );
}

