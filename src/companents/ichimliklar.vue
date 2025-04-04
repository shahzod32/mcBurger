<template>
  <div class="container">
    <h1 class="title">Ichimliklar</h1>
    <div class="grid">
      <div class="item" v-for="(drink, index) in ichimliklar" :key="index">
        <img :src="drink.rasm" :alt="drink.nomi" class="img" />
        <h2 class="name">{{ drink.nomi }}</h2>
        <p class="price">Narxi: {{ drink.narx }} so'm</p>
        <button class="btn">Buyurtma berish</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const ichimliklar = [
  { nomi: 'Coca-Cola', narx: 8000, rasm: '/src/assets/coca.jpg' },
  { nomi: 'Fanta', narx: 7500, rasm: '/src/assets/fanta.jpg' },
  { nomi: 'Sprite', narx: 7500, rasm: '/src/assets/sprite.png' },
  { nomi: 'Sharbat', narx: 10000, rasm: '/src/assets/sharbat.jpg' },
  { nomi: 'Choy', narx: 5000, rasm: '/src/assets/choy.jpg' },
  { nomi: 'Qora choy', narx: 4500, rasm: '/src/assets/qora.jpg' },
  { nomi: 'Suv (0.5L)', narx: 3000, rasm: '/src/assets/0,5l.jpeg' },
  { nomi: 'Suv (1.5L)', narx: 6000, rasm: '/src/assets/1l.jpg' },
  { nomi: 'Kofe', narx: 9000, rasm: '/src/assets/cofe.jpg' },
 
]
</script>

<style scoped>
.container {
  padding: 20px;
  text-align: center;
}
.title {
  font-size: 2rem;
  margin-bottom: 20px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
}
.item {
  background: #fff;
  padding: 15px;
  border-radius: 16px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}
.img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 12px;
}
.name {
  margin: 10px 0 5px;
  font-size: 1.2rem;
  font-weight: bold;
}
.price {
  color: #666;
  margin-bottom: 10px;
}
.btn {
  background-color: #0ea5e9;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.btn:hover {
  background-color: #0284c7;
}
</style>
