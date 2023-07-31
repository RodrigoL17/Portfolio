import JSIcon from "./JavaScriptIcon";
import NextJSIcon from "./NextJSIcon";
import CSSIcon from "./CSSIcon";
import ReactIcon from "./ReactIcon";

export default function TechContainer({ technologies }) {
  return (
    <div className="flex gap-4 pb-3">
      {technologies.map((tec) => {
        if (tec === "js") {
          return <JSIcon key={tec} height={"2em"} fill={"#a7b3c5"}/>;
        }
        if (tec === "css") {
          return <CSSIcon key={tec} height={"2em"} fill={"#a7b3c5"}/>;
        }
        if (tec === "react") {
          return <ReactIcon key={tec} height={"2em"} fill={"#a7b3c5"}/>;
        }
        if (tec === "nextJs") {
          return <NextJSIcon key={tec} height={"2em"} fill={"#a7b3c5"}/>;
        }
      })}
    </div>
  );
}
