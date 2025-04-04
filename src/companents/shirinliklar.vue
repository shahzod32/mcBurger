<template>
    <div class="container">
      <h1 class="title">Shirinliklar</h1>
      <div class="grid">
        <div class="item" v-for="(dessert, index) in shirinliklar" :key="index">
          <img :src="dessert.rasm" :alt="dessert.nomi" class="img" />
          <h2 class="name">{{ dessert.nomi }}</h2>
          <p class="price">Narxi: {{ dessert.narx }} so'm</p>
          <button class="btn">Buyurtma berish</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const shirinliklar = [
    { nomi: 'Napoleon', narx: 15000, rasm: '/src/assets/dessert1.jpg' },
    { nomi: 'Medovik', narx: 16000, rasm: '/src/assets/dessert2.jpg' },
    { nomi: 'Chizkeyk', narx: 20000, rasm: '/src/assets/dessert3.jpg' },
    { nomi: 'Shokolad tort', narx: 18000, rasm: '/src/assets/dessert4.jpg' },
    { nomi: 'Pahlava', narx: 12000, rasm: '/src/assets/dessert5.jpg' },
    { nomi: 'Tiramisu', narx: 22000, rasm: '/src/assets/dessert6.jpg' },
    { nomi: 'Ekler', narx: 10000, rasm: '/src/assets/dessert7.jpg' },
    { nomi: 'Makaron', narx: 9000, rasm: '/src/assets/dessert8.jpg' },
    { nomi: 'Shokolad muzqaymoq', narx: 7000, rasm: '/src/assets/dessert9.jpg' },
    { nomi: 'Vanil muzqaymoq', narx: 7000, rasm: '/src/assets/dessert10.jpg' }
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
    background-color: #f59e0b;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  .btn:hover {
    background-color: #d97706;
  }
  </style>
  