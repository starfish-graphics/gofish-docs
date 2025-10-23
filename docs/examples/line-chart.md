# Line Chart

<!-- ```ts
gf.data(seafood).layer([
  /* elem instead of layer? */
  ["points", flow(scatter({ x: "lakeLocX", y: "lakeLocY" }), scaffold())],
  flow(connect(), select("points")),
]);
``` -->

::: starfish example:line-chart hidden

```ts
chart(seafood, { w: 500, h: 300 })
  .flow(scatter({ x: "lakeLocX" }), connect())
  .mark(line())
  .render(root);
```

```ts
layer([
  chart(seafood)
    .flow(scatter({ x: "lakeLocX" }))
    .mark(scaffold())
    .as("points"),
  chart(select("points")).mark(line()),
]);
```
