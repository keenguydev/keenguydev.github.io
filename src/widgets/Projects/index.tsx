import style from "./Projects.module.css";
import { $, component$, useStore } from "@builder.io/qwik";
import { IProject } from "~/entities/project";
import ProjectPopup from "~/features/project-popup";

export interface IFCProjects {
  projects: IProject[];
}

const Projects = component$<IFCProjects>(({ projects = [] }) => {
  const popup = useStore<{ isShown: boolean, data: IProject }>({
    isShown: false,
    data: {
      uid: "1",
      description: "",
      media: [],
      url: "",
      source_url: "",
      title: "",
      released_date: "",
      readme_url: "",
    }
  });
  const onOpen = $((_project: IProject) => { popup.data = _project; popup.isShown = true })
  const onClose = $(() => { popup.isShown = false })
  return (
    <>
      <ProjectPopup
        isShow={popup.isShown}
        onClose$={onClose}
        project={popup.data}
      />
      <section class={style.projects}>
        <div class={`container ${style.projects__container}`}>
          <div class={style.projects__items}>
            {projects.length > 0 &&
              projects.map((project) => (
                <div
                  key={project.uid}
                  class={style.projects__item}
                  onClick$={() => onOpen(project)}
                >
                  <h3 class={style.projects__item_title}>
                    {project.title}
                  </h3>
                  <img
                    class={style.projects__item_img}
                    src={project.media[0].url}
                    alt={`media 0 picture`}
                  ></img>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
});

export default Projects;
