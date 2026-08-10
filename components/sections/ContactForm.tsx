"use client";

import { useState } from "react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

type FormData = {
  fullName: string;
  company: string;
  email: string;
  website: string;
  service: string;
  budget: string;
  message: string;
};

const initialFormData: FormData = {
  fullName: "",
  company: "",
  email: "",
  website: "",
  service: "",
  budget: "",
  message: "",
};

export default function ContactForm() {
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
      id="contact-form"
      className="bg-white py-24 lg:py-28"
    >
      <Container>
        <SectionHeading
          badge="Send a Message"
          title="Tell Us About Your Project"
          description="Complete the form below and our team will review your requirements before responding."
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
              label="Company Name"
              name="company"
              value={formData.company}
              onChange={handleChange}
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
              placeholder="https://yourwebsite.com"
              value={formData.website}
              onChange={handleChange}
            />

            <SelectField
              label="Service Interested In"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              options={[
                ["web-development", "Web Development"],
                ["technical-seo", "Technical SEO"],
                ["ai-search-visibility", "AI Search Visibility"],
                ["website-audit", "Website Audit"],
                [
                  "landing-page-development",
                  "Landing Page Development",
                ],
              ]}
            />

            <SelectField
              label="Project Budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
              options={[
                ["under-500", "Under $500"],
                ["500-1000", "$500 – $1,000"],
                ["1000-3000", "$1,000 – $3,000"],
                ["3000-plus", "$3,000+"],
              ]}
            />
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Project Details
            </label>

            <textarea
              id="contact-message"
              rows={6}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell us about your goals, challenges, or project requirements..."
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {submitted && (
            <div
              role="status"
              className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700"
            >
              Thank you for contacting LeadFlowProTeam. Your message has been
              received.
            </div>
          )}

          <Button
            type="submit"
            size="lg"
          >
            {submitted ? "Message Received" : "Send Message"}
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
      <label
        htmlFor={"contact-" + name}
        className="mb-2 block text-sm font-semibold text-gray-700"
      >
        {label}
      </label>

      <input
        id={"contact-" + name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
      />
    </div>
  );
}

type SelectFieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => void;
  options: [string, string][];
  required?: boolean;
};

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
}: SelectFieldProps) {
  return (
    <div>
      <label
        htmlFor={"contact-" + name}
        className="mb-2 block text-sm font-semibold text-gray-700"
      >
        {label}
      </label>

      <select
        id={`contact-${name}`}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full appearance-none rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
      >
        <option value="" disabled>
          Select an option
        </option>

        {options.map(([optionValue, optionLabel]) => (
          <option key={optionValue} value={optionValue}>
            {optionLabel}
          </option>
        ))}
      </select>
    </div>
  );
}
