import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { IProject } from "~/entities/project";
import Main from "~/widgets/Main";
import Projects from "~/widgets/Projects";
import projectsData from '../../public/json/projects.json'

export default component$(() => {
  const projects = projectsData as IProject[];
  return (
    <>
      <Main  />
      <Projects projects={projects} />
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
