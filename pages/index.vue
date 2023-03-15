<script setup lang="ts">
import { Weapon } from '~/@types/Weapon';
import weapons from '~/weapon.json';

const categories = ref<string[]>([
  'シューター',
  'ローラー',
  'チャージャー',
  'スロッシャー',
  'スピナー',
  'マニューバー',
  'シェルター',
  'ブラスター',
  'フデ',
  'ストリンガー',
  'ワイパー',
]);

const weaponList = ref<Weapon[]>(weapons);

const selectedCategories = ref<string[]>(categories.value);

const selectedWeapon = ref<Weapon>({
  Category: '',
  Name: '',
  FileName: '',
});

const onbuttonClick = () => {
  const landomNumber = Math.floor(Math.random() * weaponList.value.length);
  selectedWeapon.value = weaponList.value[landomNumber];
  console.log(selectedWeapon.value);
};

const onCategoryClick = () => {
  weaponList.value = weapons.filter((w) =>
    selectedCategories.value.includes(w.Category)
  );
};
</script>

<template>
  <div>
    <h1>ブキセレクター（仮仮）</h1>
    <button @click="onbuttonClick">ランダム生成</button>
    <div v-if="selectedWeapon.Name !== ''" style="border: 1px solid red">
      <p>カテゴリ：{{ selectedWeapon.Category }}</p>
      <p>ブキ名：{{ selectedWeapon.Name }}</p>
      <p>画像名：{{ selectedWeapon.FileName }}</p>
      <p><img :src="`images/${selectedWeapon.FileName}`" alt="" /></p>
    </div>
    <div v-for="category in categories" :key="category">
      <input
        v-model="selectedCategories"
        type="checkbox"
        :id="category"
        :value="category"
        @change="onCategoryClick"
      />
      <label :for="category">{{ category }}</label>
    </div>
  </div>
</template>
