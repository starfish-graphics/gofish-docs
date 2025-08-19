import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function loadExampleCode(filename) {
  const filePath = join(__dirname, "..", "examples", filename);
  return readFileSync(filePath, "utf-8");
}

export default {
  load() {
    const examples = [
      {
        id: "bar-chart",
        title: "Bar Chart",
        // description: "A simple bar chart",
      },
      {
        id: "horizontal-bar-chart",
        title: "Horizontal Bar Chart",
        // description: "A simple horizontal bar chart",
      },
      {
        id: "stacked-bar-chart",
        title: "Stacked Bar Chart",
        // description: "A simple stacked bar chart",
      },
      {
        id: "grouped-bar-chart",
        title: "Grouped Bar Chart",
        description: "Horizontally stacked vertical bars",
      },
      {
        id: "streamgraph",
        title: "Streamgraph",
        description: "A center-aligned stacked area chart",
      },
      {
        id: "stacked-area-chart",
        title: "Stacked Area Chart",
        // description: "A stacked area chart",
      },
      {
        id: "ridgeline-chart",
        title: "Ridgeline Chart",
        description: "A faceted area chart",
      },
      {
        id: "area-chart",
        title: "Area Chart",
      },
      {
        id: "line-chart",
        title: "Line Chart",
      },
      {
        id: "scatter-plot",
        title: "Scatter Plot",
      },
      {
        id: "pie-chart",
        title: "Pie Chart",
      },
      {
        id: "donut-chart",
        title: "Donut Chart",
        description: "A pie with a hole in the middle",
      },
      {
        id: "mosaic-plot",
        title: "Mosaic Plot",
      },
      {
        id: "nested-mosaic-plot",
        title: "Nested Mosaic Plot",
      },
      {
        id: "ribbon-chart",
        title: "Ribbon Chart",
        description:
          "A hybrid between a stacked bar chart and a stacked area chart",
      },
      {
        id: "rose-chart",
        title: "Rose Chart",
        description:
          "A pie chart with data-driven radius instead of angle, popularized by Florence Nightingale",
      },
      {
        id: "connected-scatter-plot",
        title: "Connected Scatter Plot",
        description: "A scatter plot with lines connecting the points",
      },
      {
        id: "bump-chart",
        title: "Bump Chart",
        description: "A discrete line chart",
      },
      {
        id: "stringline-chart",
        title: "Stringline Chart",
        description:
          "Also known as a Marey or time-distance chart. Often used to visualize transit data.",
      },
      {
        id: "violin-plot",
        title: "Violin Plot",
        description: "A probability density visualization using areas.",
      },
      {
        id: "box-plot",
        title: "Box Plot",
        description: "A box and whiskers plot",
      },
      {
        id: "sankey-tree",
        title: "Sankey Tree",
        description: "A sankey tree diagram",
      },
      {
        id: "balloon-chart",
        title: "Balloon Chart",
        description: "Festive party balloons!",
      },
      {
        id: "scatterpie",
        title: "Scatterpie",
        description: "A scatterplot where each point is a pie chart",
      },
      {
        id: "flower-chart",
        title: "Flower Chart",
        description:
          "A flower chart inspired by Moritz Stefaner's OECD Better Life Index visualization",
      },
      {
        id: "polar-ribbon-chart",
        title: "Polar Ribbon Chart",
        description: "A polar ribbon chart",
      },
    ].map((example) => ({
      ...example,
      demoUrl: `/examples/${example.id}`,
      code: loadExampleCode(`${example.id}.ts`),
    }));

    return {
      examples: examples.sort((a, b) => a.title.localeCompare(b.title)),
      getCodeById(id) {
        const example = examples.find((ex) => ex.id === id);
        return example ? example.code : null;
      },
    };
  },
};
