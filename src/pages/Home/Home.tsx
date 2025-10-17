import Button from "../../components/Button";

export default function Home() {


  return (
    <section className="py-6 xs:py-8">
      <h1 className="mt-2 xs:mt-4 text-3xl xs:text-4xl font-extrabold tracking-tight">
        We build modern web applications. <span className="underline decoration-4">BetterShip</span>
      </h1>

      <div className="mt-5 xs:mt-6 flex flex-col xs:flex-row gap-2 xs:gap-4">
        <Button className="w-full xs:w-auto">Get in touch</Button>
        <Button className="w-full xs:w-auto">View portfolio</Button>
      </div>

      <div className="mt-5 xs:mt-6 grid grid-cols-1 xs:grid-cols-3 gap-2 xs:gap-4">
        <Button className="w-full">Custom Development</Button>
        <Button className="w-full">API Integration</Button>
        <Button className="w-full">Ongoing Maintenance</Button>
      </div>
    </section>
  );
}

