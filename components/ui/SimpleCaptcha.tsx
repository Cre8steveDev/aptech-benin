"use client";

import { useState, useEffect } from "react";

interface SimpleCaptchaProps {
  onVerify: (isValid: boolean) => void;
  resetTrigger?: number;
}

const SimpleCaptcha = ({ onVerify, resetTrigger }: SimpleCaptchaProps) => {
  const [captchaText, setCaptchaText] = useState("");
  const [userInput, setUserInput] = useState("");
  const [isValid, setIsValid] = useState(false);

  // Generate random CAPTCHA
  const generateCaptcha = () => {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    for (let i = 0; i < 5; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaText(result);
    setUserInput("");
    setIsValid(false);
    onVerify(false);
  };

  useEffect(() => {
    generateCaptcha();
  }, [resetTrigger]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    setUserInput(value);

    const valid = value === captchaText;
    setIsValid(valid);
    onVerify(valid);
  };

  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        Security Check
      </label>

      <div className="flex items-center space-x-3">
        {/* CAPTCHA Display */}
        <div
          className="bg-gray-100 dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 px-4 py-2 rounded-md font-mono text-lg font-bold text-gray-800 dark:text-gray-200 tracking-wider select-none"
          style={{
            background: `linear-gradient(45deg, #f3f4f6, #e5e7eb)`,
            textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
          }}
        >
          {captchaText}
        </div>

        {/* Refresh Button */}
        <button
          type="button"
          onClick={generateCaptcha}
          className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          title="Generate new code"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </button>
      </div>

      {/* Input Field */}
      <input
        type="text"
        value={userInput}
        onChange={handleInputChange}
        placeholder="Enter the code above"
        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 dark:bg-gray-700 dark:text-white transition-colors ${
          userInput
            ? isValid
              ? "border-green-300 focus:ring-green-500 bg-green-50 dark:bg-green-900/20"
              : "border-red-300 focus:ring-red-500 bg-red-50 dark:bg-red-900/20"
            : "border-gray-300 dark:border-gray-600 focus:ring-blue-500"
        }`}
        maxLength={5}
      />

      {userInput && (
        <p
          className={`text-sm ${
            isValid
              ? "text-green-600 dark:text-green-400"
              : "text-red-600 dark:text-red-400"
          }`}
        >
          {isValid ? "✓ Code verified" : "✗ Code does not match"}
        </p>
      )}
    </div>
  );
};

export default SimpleCaptcha;
