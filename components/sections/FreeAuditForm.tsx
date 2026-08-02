"use client";

import { useState } from "react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function FreeAuditForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    website: "",
    industry: "",
    country: "",
    visitors: "",
    challenge: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log(formData);

    alert("Thank you! Your audit request has been received.");
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
              onChange={handleChange}
              required
            />

            <Field
              label="Business Name"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              required
            />

            <Field
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <Field
              label="Website URL"
              name="website"
              type="url"
              placeholder="https://example.com"
              value={formData.website}
              onChange={handleChange}
              required
            />

            <Field
              label="Industry"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
            />

            <Field
              label="Target Country"
              name="country"
              value={formData.country}
              onChange={handleChange}
            />

            <Field
              label="Monthly Visitors"
              name="visitors"
              value={formData.visitors}
              onChange={handleChange}
              placeholder="Optional"
            />

            <Field
              label="Biggest Challenge"
              name="challenge"
              value={formData.challenge}
              onChange={handleChange}
              placeholder="SEO, Speed, Leads..."
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Additional Message
            </label>

            <textarea
              rows={6}
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
              placeholder="Tell us anything that will help us understand your project..."
            />
          </div>

          <Button
            size="lg"
            type="submit"
          >
            Request Free Website Audit
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
  onChange: (
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
  onChange,
  type = "text",
  placeholder,
  required = false,
}: FieldProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-gray-700">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
      />
    </div>
  );
}