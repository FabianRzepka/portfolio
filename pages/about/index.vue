<script setup>
import { gql } from "graphql-request";

const { data, pending } = await useLazyAsyncData(({ $hygraph }) =>
  $hygraph.request(
    gql`
      {
        projects {
          color {
            hex
          }
          name
          slug
          tags
        }
      }
    `
  )
);
</script>
<template>
  <div class="box-wrap">
    {{ pending }}
    <div v-if="!pending">
      <div v-for="project in data.projects" :key="project.slug">
        <NuxtLink :to="'/projects/' + project.slug" class="font-bold">
          {{ project.name }} {{ project.color.hex }}
          <div v-for="tag in project.tags" :key="tag">
            {{ tag }}
          </div>
        </NuxtLink>
      </div>
    </div>
    <div v-else>..loading</div>
  </div>
</template>

<style scoped>
.box-wrap {
  width: 70vw;
  height: 60vh;
  display: grid;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
}

.box {
  position: relative;

  outline: none;
  overflow: hidden;
}

.box span {
  position: relative;
}

.box::before {
  --size: 0;
  content: "";
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: var(--size);
  height: var(--size);
  background: radial-gradient(
    circle closest-side,
    rgb(5, 77, 172),
    transparent
  );
  opacity: 0.3;
  transform: translate(-50%, -50%);
  transition: width 0.2s ease, height 0.2s ease, opacity 0.2s ease;
}

.box:hover::before {
  opacity: 1;
  --size: 200px;
}
</style>
