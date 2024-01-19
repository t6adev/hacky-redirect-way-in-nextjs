import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <p className="mt-12">You are logged in.</p>
      <div className="mt-12 flex flex-col gap-2">
        <Link href="/foo">Go to Protected Page</Link>
      </div>
    </main>
  );
}
