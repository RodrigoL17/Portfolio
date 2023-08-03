import {
  CSSIcon,
  JSIcon,
  NextJSIcon,
  ReactIcon,
  HTMLIcon,
  ScssIcon,
  NodeIcon,
  MongoDBIcon,
  ExpressIcon,
  HandleBarsIcon,
} from "./icons";

export default function TechContainer({ technologies }) {
  return (
    <div className="flex gap-4 pb-3">
      {technologies.map((tec) => {
        if (tec === "html")
          return <HTMLIcon key={tec} height={"1.75em"} fill={"#a7b3c5"} />;
        if (tec === "css")
          return <CSSIcon key={tec} height={"1.75em"} fill={"#a7b3c5"} />;
        if (tec === "js")
          return <JSIcon key={tec} height={"1.75em"} fill={"#a7b3c5"} />;
        if (tec === "react")
          return <ReactIcon key={tec} height={"1.75em"} fill={"#a7b3c5"} />;
        if (tec === "nextJs")
          return <NextJSIcon key={tec} height={"1.75em"} fill={"#a7b3c5"} />;
        if (tec === "scss")
          return <ScssIcon key={tec} height={"1.75em"} fill={"#a7b3c5"} />;
        if (tec === "node")
          return <NodeIcon key={tec} height={"1.75em"} fill={"#a7b3c5"} />;
        if (tec === "mongodb")
          return <MongoDBIcon key={tec} height={"1.75em"} fill={"#a7b3c5"} />;
        if (tec === "express")
          return <ExpressIcon key={tec} height={"1.75em"} fill={"#a7b3c5"} />;
        if (tec === "handlebars")
          return (
            <HandleBarsIcon key={tec} height={"1.75em"} fill={"#a7b3c5"} />
          );
      })}
    </div>
  );
}
