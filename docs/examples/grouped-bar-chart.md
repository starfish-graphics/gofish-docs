# Grouped Bar Chart

::: starfish example:grouped-bar-chart hidden

```ts
gf.chart(seafood, { w: 500, h: 300 })
  .flow(spread("lake", { dir: "x" }), stack("species", { dir: "x" }))
  .mark(rect({ h: "count", fill: "species" }))
  .render(root);
```
