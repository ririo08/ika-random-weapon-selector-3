<script setup lang="ts">
import { Weapon } from '~/@types/Weapon';
import weapons from '~/src/weapon.json';

const selectedWeapon = useState<Weapon>('selectedWeapon', () => ({
  category: '',
  name: '',
  filename: '',
}));

const onbuttonClick = () => {
  const landomNumber = Math.floor(Math.random() * weapons.length);
  selectedWeapon.value = weapons[landomNumber];
  console.log(selectedWeapon);
};
</script>

<template>
  <div>
    <h1>ブキセレクター（仮仮）</h1>
    <button @click="onbuttonClick">ランダム生成</button>
    <div v-if="selectedWeapon.name !== ''" style="border: 1px solid red">
      <p>カテゴリ：{{ selectedWeapon.category }}</p>
      <p>ブキ名：{{ selectedWeapon.name }}</p>
      <p>画像名：{{ selectedWeapon.filename }}</p>
      <p><img :src="`images/${selectedWeapon.filename}`" alt="" /></p>
    </div>
    <table>
      <tr>
        <th>カテゴリ</th>
        <th>ブキ名</th>
        <th>ファイル名</th>
        <th>画像</th>
      </tr>
      <tr v-for="weapon in weapons">
        <td>{{ weapon.category }}</td>
        <td>{{ weapon.name }}</td>
        <td>{{ weapon.filename }}</td>
        <td><img :src="`images/${weapon.filename}`" alt="" /></td>
      </tr>
    </table>
  </div>
</template>
