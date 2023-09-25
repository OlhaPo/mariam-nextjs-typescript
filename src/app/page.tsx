import { Fredoka } from "next/font/google";

const fredoka = Fredoka({ subsets: ["latin"], weight: ["300"] });

export default function Home() {
  return (
    <div className="main">
      <h1 className={fredoka.className}>
        <span className="text-center block md:inline mb-1 md:mb-0">mariam</span>{" "}
        crochet jewelry
      </h1>
    </div>
  );
}
