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
  cityState: string;
  country: string;
  services: string;
  visibilityConcern: string;
  message: string;
};

const initialFormData: FormData = {
  fullName: "",
  businessName: "",
  email: "",
  website: "",
  cityState: "",
  country: "United States",
  services: "",
  visibilityConcern: "",
  message: "",
};

export default function FreeAuditForm() {
  const [formData, setFormData] =
    useState<FormData>(initialFormData);

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

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

    if (error) {
      setError("");
    }

    if (submitted) {
      setSubmitted(false);
    }
  }

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>,
  ) {
    e.preventDefault();

    if (submitting) {
      return;
    }

    setSubmitting(true);
    setSubmitted(false);
    setError("");

    try {
      const response = await fetch("/api/audit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        throw new Error(
          result.message ??
            "Unable to submit your audit request.",
        );
      }

      setSubmitted(true);
      setFormData(initialFormData);
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Unable to submit your audit request. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      id="audit-form"
      className="bg-white py-20 lg:py-28"
    >
      <Container>
        <SectionHeading
          badge="Request Your Audit"
          title="Tell Us About Your Business"
          description="Share a few details so we can understand your business, location, services, and the visibility questions that matter most."
          align="center"
        />

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-14 max-w-5xl space-y-8 rounded-3xl border border-gray-200 bg-white p-7 shadow-sm sm:p-8 lg:p-10"
        >
          <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-5">
            <p className="text-sm font-semibold text-blue-700">
              What happens after you submit?
            </p>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Your request is securely sent to our audit intake
              system for review. We use the information to understand
              the appropriate audit scope and next steps.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Field
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              handleChange={handleChange}
              placeholder="Your full name"
              required
            />

            <Field
              label="Business Name"
              name="businessName"
              value={formData.businessName}
              handleChange={handleChange}
              placeholder="Your business name"
              required
            />

            <Field
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              handleChange={handleChange}
              placeholder="you@example.com"
              required
            />

            <Field
              label="Website URL"
              name="website"
              type="url"
              value={formData.website}
              handleChange={handleChange}
              placeholder="https://yourwebsite.com"
              required
            />

            <Field
              label="City / State"
              name="cityState"
              value={formData.cityState}
              handleChange={handleChange}
              placeholder="e.g. Austin, Texas"
              required
            />

            <Field
              label="Country"
              name="country"
              value={formData.country}
              handleChange={handleChange}
              placeholder="e.g. United States"
              required
            />

            <Field
              label="Primary Services"
              name="services"
              value={formData.services}
              handleChange={handleChange}
              placeholder="e.g. Hotel accommodation, spa, events"
              required
            />

            <div>
              <label
                htmlFor="audit-visibilityConcern"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Main Visibility Concern
              </label>

              <select
                id="audit-visibilityConcern"
                name="visibilityConcern"
                value={formData.visibilityConcern}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              >
                <option value="">
                  Select a concern
                </option>

                <option value="AI Search Visibility">
                  AI Search Visibility
                </option>

                <option value="Local Search Visibility">
                  Local Search Visibility
                </option>

                <option value="Business Information">
                  Business Information
                </option>

                <option value="Technical SEO">
                  Technical SEO
                </option>

                <option value="Website Performance">
                  Website Performance
                </option>

                <option value="Customer Discovery">
                  Customer Discovery
                </option>

                <option value="Not Sure">
                  I&apos;m not sure
                </option>
              </select>
            </div>
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
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your business, target customers, or anything you would like us to understand before the audit..."
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {submitted && (
            <div
              role="status"
              className="rounded-xl border border-green-200 bg-green-50 px-4 py-4 text-sm leading-6 font-medium text-green-700"
            >
              Your AI Search Visibility Audit request has been
              submitted successfully. We&apos;ll review the
              information and determine the appropriate next step.
            </div>
          )}

          {error && (
            <div
              role="alert"
              className="rounded-xl border border-red-200 bg-red-50 px-4 py-4 text-sm leading-6 font-medium text-red-700"
            >
              {error}
            </div>
          )}

          <div className="flex flex-col gap-5 border-t border-gray-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-xs leading-5 text-gray-500">
              We do not guarantee AI rankings, recommendations, or
              mentions. The audit focuses on observable information,
              visibility findings, gaps, and practical opportunities
              for improvement.
            </p>

            <Button
              size="lg"
              type="submit"
              disabled={submitting}
              className="shrink-0"
            >
              {submitting
                ? "Submitting..."
                : submitted
                  ? "Audit Request Submitted"
                  : "Request My AI Visibility Audit"}
            </Button>
          </div>
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
        htmlFor={`audit-${name}`}
        className="mb-2 block text-sm font-semibold text-gray-700"
      >
        {label}
      </label>

      <input
        id={`audit-${name}`}
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
        autoComplete={getAutoComplete(name)}
        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      />
    </div>
  );
}

function getAutoComplete(name: string) {
  const autocompleteMap: Record<string, string> = {
    fullName: "name",
    businessName: "organization",
    email: "email",
    website: "url",
    cityState: "address-level2",
    country: "country-name",
  };

  return autocompleteMap[name] ?? "off";
}