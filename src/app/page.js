import Filter from "@/components/Filter";

export default function Home() {
  return (
    <div className="select-none flex flex-col items-center justify-items-center min-h-screen p-10 sm:p-20 gap-10 font-[family-name:var(--font-geist-sans)]">
      <h2 className="font-extrabold text-5xl text-center">
        Profanity Filter 🤬
      </h2>
      <p className="text-lg text-center">
        An advanced profanity filter designed to ensure clean and respectful
        content by detecting and removing inappropriate language in real-time.{" "}
        <br />
        Perfect for applications requiring content moderation and user-generated
        content filtering.
      </p>
      <Filter />
    </div>
  );
}
