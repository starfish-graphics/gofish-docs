# Ribbon Chart

```ts
gf.data(seafood)
  .elem([
    [
      "bars",
      flow(
        spread_by("lake", { dir: "x" }),
        stack_by("species", { dir: "y" }),
        rect({ h: "count", fill: "species" })
      ),
    ],
    // I keep wanting to write lake here b/c it's basically connecting over lakes which is kinda dual to group bys that separate...
    // moreover, if I'm honest, connect has *always* wanted to have refs as its children. It can never be reasonably used a different way as much as I would like eg Arrow and Background to mirror each other in Bluefish :(
    flow(connect_over("lake"), ref("bars")),
  ])
  .render(root, { w: 500, h: 300 });

gf.data(seafood)
  .elem([
    flow(
      spread_by("lake", { dir: "x" }),
      stack_by("species", { dir: "y" }),
      rect({ h: "count", fill: "species" }).name("rects")
    ),
    flow(connect_over("lake"), ref("rects")),
  ])
  .render(root, { w: 500, h: 300 });

const bars = gf
  .data(seafood)
  .flow(
    spread_by("lake", { dir: "x" }),
    stack_by("species", { dir: "y" }),
    rect({ h: "count", fill: "species" })
  );

gf.data(bars).flow(derive(group_by("species")), connect_over("lake"));

gf.data(seafood)
  .flow(spread({ by: "lake", dir: "x" }), stack({ by: "species", dir: "y" }))
  .shape(rect({ h: "count", fill: "species" }))
  .render(root, { w: 500, h: 300 });

gf.data(seafood)
  .flow(spread({ by: "lake", dir: "x" }), stack({ by: "species", dir: "y" }))
  .elem(rect({ h: "count", fill: "species" }))
  .render(root, { w: 500, h: 300 });
```

::: starfish example:ribbon-chart hidden

```ts
gf.layer({ w: 500, h: 300 }, [
  gf
    .chart(seafood)
    .flow(
      spread("lake", { dir: "x", spacing: 64 }),
      derive(sortBy("count")),
      stack("species", { dir: "y" })
    )
    .mark(rect({ w: 16, h: "count", fill: "species" }))
    .as("bars"),
  // an array of data with key and mark ref
  data(select("bars")) // pair up data values?
    // array is now grouped by species with one mark produced for each one
    .flow(foreach("species"), connect("lake"))
    // species array is passed as children(?) to connect
    .mark(ribbon({ dir: "x", opacity: 0.8 })),
]);
```
