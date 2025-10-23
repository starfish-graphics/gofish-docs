---
layout: home

hero:
  name: GoFish Graphics
  text: "Charts w/o headaches"
  tagline: More simple. More beautiful. More expressive. More.
  image:
    src: /gofish-logo.png
    alt: GoFish
  # actions:
  #   - theme: brand
  #     text: Get Started!
  #     link: /get-started
  #   - theme: alt
  #     text: Tutorial
  #     link: /tutorial
  #   - theme: alt
  #     text: Examples
  #     link: /examples
---

<script setup>
  import { VPButton } from 'vitepress/theme';
  import StackV from '../components/StackV.vue';
  import StackH from '../components/StackH.vue';
</script>

<StackH width="fit-content" gap="1rem" style="margin: 0 auto;">
<div style="font-family: 'Fira Code', monospace; background-color: var(--vp-c-brand-soft); color: var(--vp-c-brand-1); font-weight: 700; padding: 0.5rem 1rem; border-radius: 8px; display: inline-block; margin: 2rem 0;">
  npm install gofish-graphics
</div>
<div style="display: flex; gap: 0.5rem; justify-content: center;">
<VPButton
    tag="a"
    size="medium"
    text="Get Started!"
    theme="brand"
    href="/get-started"
    style="text-decoration: none;"
  />
<VPButton
    tag="a"
    size="medium"
    text="Tutorial"
    theme="alt"
    href="/tutorial"
    style="text-decoration: none;"
  />
<VPButton
    tag="a"
    size="medium"
    text="Examples"
    theme="alt"
    href="/examples"
    style="text-decoration: none;"
  />
<!-- <VPButton
    tag="a"
    size="medium"
    text="API Reference"
    theme="alt"
    href="/api"
  /> -->
</div>
</StackH>

<HomeGallery />

<CursorFish />
