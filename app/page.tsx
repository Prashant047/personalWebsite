import MagText from "@/components/ui/magtext";

export default function Home() {
  return (
    <section>
      <h3 className="text-lg">Hi There,</h3>
      <h1 className="text-3xl">
        I'm &nbsp;
        <MagText text="Prashant Kumar" />
      </h1>
      <p className="mt-10 text-neutral-300">
        I'm a Software Engineer building full-stack web applications with React, Node.js, 
        TypeScript, and PostgreSQL. I like to hang out in Discord communities to help 
        other developers, you will probably find me in Reactiflux or the Next.js Discord
      </p>
    </section>
  );
}

