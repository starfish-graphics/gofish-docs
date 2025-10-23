# Scatter Plot

::: starfish example:scatter-plot hidden

```ts
gf.chart(seafood, { w: 500, h: 300 })
  .flow(scatter({ x: "lakeLocX", y: "lakeLocY" }))
  .mark(circle())
  .render(root);
```
