import { component$, Resource, useResource$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { IProject } from "~/entities/project";
import Main from "~/widgets/Main";
import Projects from "~/widgets/Projects";

export default component$(() => {
  const projects = useResource$<IProject[]>(async () => {
    const response = await fetch('https://keenguydev.github.io/json/projects.json')
    const data = await response.json()
    return data
  })

  return (
    <>
      <Main />
      <Resource
        value={projects}
        onPending={() => <>...loading</>}
        onResolved={(_projects) => <Projects projects={_projects} />}
      />
    </>
  );
});

export const head: DocumentHead = {
  title: "KEENGUY | ROOM",
  meta: [
    {
      name: "description",
      content: "Qwik site Good Info",
    },
  ],
};
