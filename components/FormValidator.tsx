'use client';
import { useState } from 'react';

interface ValidationResult {
  isValid: boolean;
  error?: string;
}

interface FormValidatorProps {
  children: React.ReactNode;
  onValidate?: (data: Record<string, any>) => Promise<boolean>;
}

export function useFormValidation() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [validating, setValidating] = useState<Record<string, boolean>>({});
  const [validated, setValidated] = useState<Record<string, boolean>>({});

  const validateEmail = (email: string): ValidationResult => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      return { isValid: false, error: 'Please enter a valid email address' };
    }
    return { isValid: true };
  };

  const validateRequired = (value: string, fieldName: string): ValidationResult => {
    if (!value.trim()) {
      return { isValid: false, error: `${fieldName} is required` };
    }
    return { isValid: true };
  };

  const validateMinLength = (value: string, minLength: number, fieldName: string): ValidationResult => {
    if (value.length < minLength) {
      return { isValid: false, error: `${fieldName} must be at least ${minLength} characters` };
    }
    return { isValid: true };
  };

  const validatePhone = (phone: string): ValidationResult => {
    const regex = /^[\d\s\-\+\(\)]{10,}$/;
    if (!regex.test(phone)) {
      return { isValid: false, error: 'Please enter a valid phone number' };
    }
    return { isValid: true };
  };

  const setFieldValidating = (fieldName: string, isValidating: boolean) => {
    setValidating((prev) => ({
      ...prev,
      [fieldName]: isValidating,
    }));
  };

  const setFieldValidated = (fieldName: string, isValid: boolean) => {
    setValidated((prev) => ({
      ...prev,
      [fieldName]: isValid,
    }));
  };

  const setFieldError = (fieldName: string, error?: string) => {
    setErrors((prev) => {
      const updated = { ...prev };
      if (error === undefined) {
        delete updated[fieldName];
      } else {
        updated[fieldName] = error;
      }
      return updated;
    });
  };

  const clearErrors = () => {
    setErrors({});
    setValidated({});
    setValidating({});
  };

  return {
    errors,
    validating,
    validated,
    validateEmail,
    validateRequired,
    validateMinLength,
    validatePhone,
    setFieldValidating,
    setFieldValidated,
    setFieldError,
    clearErrors,
  };
}

export default function FormValidator({ children, onValidate }: FormValidatorProps) {
  return <>{children}</>;
}
