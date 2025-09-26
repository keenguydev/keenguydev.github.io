import { QRL } from "@builder.io/qwik";
import dayjs from "dayjs";
import Popup, { IPopup } from "~/shared/ui/popup";
import { Carousel } from "flowbite-qwik"
import { IProject } from "~/entities/project";

 
// import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
// import "react-image-gallery/styles/css/image-gallery.css";

export interface IProjectPopup extends IPopup {
  project: IProject;
  onClose$: QRL<() => void>;
}

const ProjectPopup = ({ project, isShow, onClose$, }: IProjectPopup) => {
  // const mdData = useSignal<string>("");

  // const [isIframeShow, setIsIframeShow] = useSignal<boolean>(false);
  // console.log(project);

  // const mdData = useResource$(async () => {
  //   await axios.get(project.readme_url).then((res) => {
  //     return res.data
  //   });
  // })

  // useEffect(() => {
  //   if (project.readme_url.length > 0) {
  //     fetchMd();
  //   }
  // }, [project]);

  return (
    <Popup
      bg="linear-gradient(180deg, #030503 0%, rgba(0, 0, 0, 0.75) 100%)"
      isShow={isShow}
    >
      <div
        style={{
          maxWidth: "101dvh",
          marginTop: "5dvh",
        }}
      >
        <div
          style={{
            width: "fit-content",
            marginLeft: "auto",
            marginBottom: "1.2dvh",
            cursor: "pointer",
          }}
          onClick$={onClose$}
        >
          <img src="/assets/icons/close.svg"/>
        </div>
        <h2
          style={{
            fontSize: "3.6dvh",
            marginBottom: "2.4dvh",
          }}
        >
          {project.title}
        </h2>

        <Carousel class="h-[50dvh]! aspect-video" noIndicators pauseOnHover noControls>
          {project.media.map((_media) =>
            <Carousel.Slide>
              <img class="object-fill flex h-full w-full rounded-[8px] border-1 border-[#a7f481] border-dashed" src={_media.url} alt="..." />
            </Carousel.Slide>
          )}
        </Carousel>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div
            style={{
              width: "fit-content",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p
              style={{
                color: "#8BCE6D",
                fontSize: "1.6dvh",
                marginRight: "0.6dvh",
                marginBottom: "0.6dvh",
              }}
            >
              вышел:
            </p>

            <p>{dayjs(project.released_date).format("DD/MM/YYYY")}</p>
          </div>
          {project.url && project.url.length > 0 && <div
            style={{
              width: "fit-content",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p
              style={{
                color: "#8BCE6D",
                fontSize: "1.6dvh",
                marginRight: "0.6dvh",
                marginBottom: "0.6dvh",
              }}
            >
              ссылка на сайт проекта:
            </p>
            <a href={project.url} target="_blank">
              <svg
                class="hvr --svg --stroke"
                style={{
                  cursor: "pointer",
                }}
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="3.2dvh"
                width="3.2dvh"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                <path d="M3.6 9h16.8"></path>
                <path d="M3.6 15h16.8"></path>
                <path d="M11.5 3a17 17 0 0 0 0 18"></path>
                <path d="M12.5 3a17 17 0 0 1 0 18"></path>
              </svg>
            </a>
          </div>}
          {project.source_url && project.source_url.length > 0 && (
            <div
              style={{
                width: "fit-content",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  color: "#8BCE6D",
                  fontSize: "1.6dvh",
                  marginRight: "0.6dvh",
                  marginBottom: "0.6dvh",
                }}
              >
                ссылка на исходник проекта:
              </p>
              <a href={project.source_url} target="_blank">
                <svg
                  class="hvr --svg --stroke"
                  style={{
                    cursor: "pointer",
                  }}
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="3.2dvh"
                  width="3.2dvh"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                  <path d="M3.6 9h16.8"></path>
                  <path d="M3.6 15h16.8"></path>
                  <path d="M11.5 3a17 17 0 0 0 0 18"></path>
                  <path d="M12.5 3a17 17 0 0 1 0 18"></path>
                </svg>
              </a>
            </div>
          )}
        </div>

        <div>
          <p
            style={{
              color: "#8BCE6D",
              fontSize: "1.6dvh",
              margin: "1.2dvh 0 0.6dvh",
            }}
          >
            описание
          </p>
          <p
            style={{
              fontSize: "2.4dvh",
            }}
          >
            {/* <Markdown>{mdData}</Markdown> */}
            {/* {project.description} */}
          </p>
        </div>
      </div>
    </Popup>
  );
};

export default ProjectPopup;
