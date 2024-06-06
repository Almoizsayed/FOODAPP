import { useEffect, useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("");
  useEffect(() => {
    function demo() {
      console.log("Demo Function Executed");
    }
    demo();
  }, [query]);
  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="Text"
      />
    </div>
  );
}
