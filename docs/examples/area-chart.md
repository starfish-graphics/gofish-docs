# Area Chart

<!-- ```ts
gf.data(seafood).layer([
  /* elem instead of layer? */
  ["segments", flow(scatter({ x: "lakeLocX" }), scaffold({ h: "count" }))],
  flow(connect(), select("segments")),
]);
``` -->

::: starfish example:area-chart hidden

```ts
gf.chart(seafood)
  .flow(scatter({ x: "lakeLocX" }), connect())
  .mark(area({ h: "count" }));
```

```ts
layer([
  data(seafood)
    .flow(scatter({ x: "lakeLocX" }))
    .mark(scaffold({ h: "count" }))
    .as("points"),
  data(select("points")).mark(connect()),
]);
```
