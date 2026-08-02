"use client";

import { useState } from "react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    website: "",
    service: "",
    budget: "",
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

    alert(
      "Thank you for contacting LeadFlowProTeam. We'll get back to you shortly.",
    );
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
              placeholder="https://example.com"
              value={formData.website}
              onChange={handleChange}
            />
      <div>
  <label className="mb-2 block text-sm font-semibold text-gray-700">
    Service Interested In
  </label>

  <select
    name="service"
    value={formData.service}
    onChange={handleChange}
    required
    className="w-full appearance-none rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 transition focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
  >
    <option value="" disabled>
      Select a Service
    </option>

    <option value="web-development">
      Web Development
    </option>

    <option value="technical-seo">
      Technical SEO
    </option>

    <option value="ai-search-visibility">
      AI Search Visibility
    </option>

    <option value="website-audit">
      Website Audit
    </option>

    <option value="landing-page-development">
      Landing Page Development
    </option>
  </select>
</div>
            
            <div>
  <label className="mb-2 block text-sm font-semibold text-gray-700">
    Project Budget
  </label>

  <select
    name="budget"
    value={formData.budget}
    onChange={handleChange}
    required
    className="w-full appearance-none rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 transition focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
  >
    <option value="" disabled>
      Select Budget
    </option>

    <option value="under-500">
      Under $500
    </option>

    <option value="500-1000">
      $500 – $1,000
    </option>

    <option value="1000-3000">
      $1,000 – $3,000
    </option>

    <option value="3000-plus">
      $3,000+
    </option>
  </select>
</div>

          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Project Details
            </label>

            <textarea
              rows={6}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell us about your goals, challenges, or project requirements..."
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
            />
          </div>

          <Button
            type="submit"
            size="lg"
          >
            Send Message
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