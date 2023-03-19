<script setup lang="ts"></script>

<template>
  <div>
    <h1>Splatoon3 ランダムブキセレクター（仮）</h1>
    <div class="mt-3">
      <Selecter :is-stream="false" />
    </div>
    <NuxtLink to="stream">配信用のページはこちら</NuxtLink>
  </div>
</template>

<style scoped>
.mt-3 {
  margin-top: 3rem;
}
</style>
