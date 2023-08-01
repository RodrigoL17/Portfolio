import JSIcon from "./icons/JavaScriptIcon";
import NextJSIcon from "./icons/NextJSIcon";
import CSSIcon from "./icons/CSSIcon";
import ReactIcon from "./icons/ReactIcon";
import HTMLIcon from "./icons/HTMLIcon";
import ScssIcon from "./icons/ScssIcon";
import NodeIcon from "./icons/NodeIcon";
import MongoDBIcon from "./icons/MongoDBIcon";
import ExpressIcon from "./icons/ExpressIcon";
import HandleBarsIcon from "./icons/HandleBarsIcon";

export default function TechContainer({ technologies }) {
  return (
    <div className="flex gap-4 pb-3">
      {technologies.map((tec) => {
        if (tec === "html") return <HTMLIcon key={tec} height={"1.75em"} fill={"#a7b3c5"} />
        if (tec === "css") return <CSSIcon key={tec} height={"1.75em"} fill={"#a7b3c5"} />;
        if (tec === "js") return <JSIcon key={tec} height={"1.75em"} fill={"#a7b3c5"} />;
        if (tec === "react") return <ReactIcon key={tec} height={"1.75em"} fill={"#a7b3c5"} />;
        if (tec === "nextJs") return <NextJSIcon key={tec} height={"1.75em"} fill={"#a7b3c5"} />;
        if (tec === "scss") return <ScssIcon key={tec} height={"1.75em"} fill={"#a7b3c5"} />;
        if (tec === "node") return <NodeIcon key={tec} height={"1.75em"} fill={"#a7b3c5"} />;
        if (tec === "mongodb") return <MongoDBIcon key={tec} height={"1.75em"} fill={"#a7b3c5"} />
        if (tec === "express") return <ExpressIcon key={tec} height={"1.75em"} fill={"#a7b3c5"} />;
        if (tec === "handlebars") return <HandleBarsIcon key={tec} height={"1.75em"} fill={"#a7b3c5"} />;
      })}
    </div>
  );
}
