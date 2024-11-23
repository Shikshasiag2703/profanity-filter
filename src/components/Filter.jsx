"use client";
import React, { useState } from "react";

const Filter = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const values = Object.fromEntries(new FormData(e.currentTarget));
    const text = values.text;
    if (!text) return;
    const apiUrl = `https://api.api-ninjas.com/v1/profanityfilter?text=${encodeURIComponent(
      text
    )}`;
    setLoading(true);
    setResult(null);
    fetch(apiUrl, {
      method: "GET",
      headers: {
        "X-Api-Key": "UMt73wRLqlyUZMTyNQMvyg==tDOTn7PsymMtxJ3e",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
      })
      .then((data) => {
        setResult(data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="w-full">
      <form onSubmit={onSubmit} className="w-full">
        <div className="relative">
          <input
            disabled={loading}
            name="text"
            className="select-all bg-white h-12 px-2 py-1.5 w-full border border-gray-300 outline-none rounded-md"
            placeholder="Enter text to check for inappropriate language..."
          />
          {loading ? (
            <div className="absolute top-1/2 -translate-y-1/2 right-2 loader" />
          ) : (
            <div className="absolute top-1/2 -translate-y-1/2 right-2">
              <button
                type="submit"
                className="flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:opacity-70 focus-visible:outline-none focus-visible:outline-black disabled:text-[#f4f4f4] disabled:hover:opacity-100 dark:focus-visible:outline-white disabled:dark:bg-token-text-quaternary dark:disabled:text-token-main-surface-secondary bg-black text-white disabled:bg-[#D7D7D7]"
              >
                <img
                  width={32}
                  height={32}
                  src="/arrow-submit.svg"
                  alt="arrow-submit"
                />
              </button>
            </div>
          )}
        </div>
      </form>
      {result && (
        <div className="w-full flex flex-col items-start justify-start mt-2 py-8 animated-text">
          <p className="text-2xl font-bold text-center">Text Analysis</p>
          <div className="space-y-4 mt-4">
            <p className="text-lg">
              <strong>Original Given Word / Sentence</strong>
              <span className="block">{result.original}</span>
            </p>
            <p className="text-lg">
              <strong>Censored Content</strong>
              <span className="block">{result.censored}</span>
            </p>
            <p className="text-lg">
              <strong>Contains Profanity</strong>
              <span className="block">
                {result.has_profanity ? "Yes" : "No"}
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
