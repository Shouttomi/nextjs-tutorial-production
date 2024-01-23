import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  console.log("this is homepage");
  return (
    <div>
      <h1 className="text-5xl mb-8 font-bold">Next.js Tutorial</h1>

      <Link href="/client" className="btn btn-accent">
        get started
      </Link>
    </div>
  );
};
export default HomePage;
