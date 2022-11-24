import { useState } from "preact/hooks";

interface LogProps {
  slug: string;
}

export default function Counter(props: LogProps) {
  const [slug] = useState(props.slug);
  return (
    <div class="flex gap-2 w-full">
      <p class="flex-grow-1 font-bold text-xl">Log ID: {slug}</p>
    </div>
  );
} // Add LogDisplay tag and island
