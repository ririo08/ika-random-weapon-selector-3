<script setup lang="ts">
import { Weapon } from '~/@types/Weapon';
import weapons from '~/weapon.json';

interface Props {
  isStream: boolean;
}

const props = withDefaults(defineProps<Props>(), { isStream: false });

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
  Name: 'オススメ武器をピックアップ！',
  FileName: 'default.png',
});

const onbuttonClick = () => {
  if (weaponList.value.length === 0) return;
  const landomNumber = Math.floor(Math.random() * weaponList.value.length);
  selectedWeapon.value = weaponList.value[landomNumber];
};

const onCategoryClick = () => {
  weaponList.value = weapons.filter((w) =>
    selectedCategories.value.includes(w.Category)
  );
};

const addAllCategory = () => {
  selectedCategories.value = categories.value;
  onCategoryClick();
};

const removeAllCategory = () => {
  selectedCategories.value = [];
  onCategoryClick();
};
</script>

<template>
  <div>
    <div class="weapon-box" :class="{ 'is-stream': props.isStream === true }">
      <img
        class="weapon-image"
        :src="`images/${selectedWeapon.FileName}`"
        :alt="selectedWeapon.Name"
      />
      <div class="title-box">
        <p class="title">{{ selectedWeapon.Name }}</p>
      </div>
    </div>
    <div class="select-box">
      <button @click="onbuttonClick">ランダム生成</button>
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
      <div class="buttons">
        <button @click="addAllCategory">全てチェック</button>
        <button @click="removeAllCategory">全て外す</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.weapon-box {
  display: flex;
  justify-content: center;
  align-items: center;
}
.weapon-image {
  width: 150px;
  height: 150px;
  border-radius: 15px;
  border: 2px solid gray;
  background-color: white;
}
.title-box {
  width: 600px;
  margin-left: 10px;
}
.title {
  font-family: 'Dela Gothic One', cursive;
  color: white;
  font-size: 40px;
  margin: 0;
  text-shadow: black 2px 0px, black -2px 0px, black 0px -2px, black 0px 2px,
    black 2px 2px, black -2px 2px, black 2px -2px, black -2px -2px,
    black 1px 2px, black -1px 2px, black 1px -2px, black -1px -2px,
    black 2px 1px, black -2px 1px, black 2px -1px, black -2px -1px,
    #6b6b6b 4px 4px 6px;
}

.select-box {
  margin-top: 2rem;
}

.is-stream {
  justify-content: left;
}
</style>
