import React from "react";
import Page from "@components/abstract/page";
import data from "@configs/dos_2.json";

type Data = {
  [key: string]: {
    title: string
    items: { title: string, description?: string, components: string[] }[]
  }
}

class DOS_2 extends Page {
  render() {
    const recipes: Data = data;

    return super._render(
      <div className="container text-cgreytextlight">
        <div className="flex justify-between">
          {Object.keys(recipes).map((item, index) => (
            <h2 key={index}>
              <a href={`#${item}`}>{recipes[item].title}</a>
            </h2>
          ))}
        </div>
        {Object.keys(recipes).map((item, index) => (
          <div id={item} key={index}>
            <h3>{recipes[item].title}</h3>
            {recipes[item].items.map((it, index) => (
              <div className="flex flex-row justify-between whitespace-pre-line" key={index}>
                <div>{it.title}</div>
                <div>{it.description}</div>
                <div>{it.components.map((comp, index) => <span>{comp}</span>)}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default DOS_2;