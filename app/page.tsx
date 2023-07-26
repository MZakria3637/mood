import Link from "next/link";

export default function Home() {
  return <div className="w-screen h-screen flex justify-center items-center"
  >
    <div className="w-full max-w-[600px] mx-auto">
      <h1 className="text-6xl mb-4">The best Journal app, period. </h1>
      <p className="text-2xl mb-4">
        This is the best app for tracking your mood through out your life. All
        you have to do is be honest.
      </p>
      <div>
        <Link className="btn btn-primary" href='/journal'>get started</Link>
      </div>
    </div>
  </div>;
}
