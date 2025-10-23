# Sankey Tree

```ts
/* observation: the use of the elem keyword does make it easier to figure out where to split these into separate definitions */
const survived = spread({ dir: "x" }, [
  flow(stack_by("survived", { dir: "y" })).elem(
    rect({ w: 40, h: "count", fill: "sex" })
  ),
  flow(spread_by("survived", { dir: "y" })).elem(
    rect({
      w: 40,
      h: "count",
      fill: col("survived") === "Yes" ? "sex" : color.gray,
    })
  ),
]);

const sex = spread({ dir: "x" }, [
  flow(stack_by("sex", { dir: "y" }))
    .elem(rect({ w: 40, h: "count", fill: "class" }))
    .name("cls-tgt"),
  flow(spread_by("sex", { dir: "y" })).elem(survived),
]);

const cls = spread({ dir: "x" }, [
  flow(stack_by("class", { dir: "y" })).elem(
    rect({ w: 40, h: "count", fill: color.neutral }).name("cls-src")
  ),
  flow(spread_by("class", { dir: "y" })).elem(sex),
]);

data(titanic).elem(cls);

data(titanic).elem(
  spread({ dir: "x" }, [
    flow(stack_by("class", { dir: "y" })).elem(
      rect({ w: 40, h: "count", fill: color.neutral }).name("cls-src")
    ),
    flow(spread_by("class", { dir: "y" })).elem(
      spread({ dir: "x" }, [
        flow(stack_by("sex", { dir: "y" }))
          .elem(rect({ w: 40, h: "count", fill: "class" }))
          .name("cls-tgt"),
        flow(spread_by("sex", { dir: "y" })).elem(
          spread({ dir: "x" }, [
            flow(stack_by("survived", { dir: "y" })).elem(
              rect({ w: 40, h: "count", fill: "sex" })
            ),
            flow(spread_by("survived", { dir: "y" })).elem(
              rect({
                w: 40,
                h: "count",
                fill: col("survived") === "Yes" ? "sex" : color.gray,
              })
            ),
          ])
        ),
      ])
    ),
  ])
);
```

::: starfish example:sankey-tree
