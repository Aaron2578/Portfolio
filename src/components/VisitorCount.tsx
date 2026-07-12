import { useEffect, useState } from "react";

function VisitorCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch(
      "https://api.countapi.xyz/hit/aaron-portfolio/visits"
    )
      .then((res) => res.json())
      .then((data) => setCount(data.value))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="text-white text-center">
      👀 Visitors: {count ?? "Loading..."}
    </div>
  );
}

export default VisitorCount;