<template>
    <div class="container">
      <h1 class="title">Ovqatlar</h1>
      <div class="grid">
        <div class="item" v-for="(ovqat, index) in ovqatlar" :key="index">
          <img :src="ovqat.rasm" :alt="ovqat.nomi" class="img" />
          <h2 class="name">{{ ovqat.nomi }}</h2>
          <p class="price">Narxi: {{ ovqat.narx }} so'm</p>
          <button class="btn">Buyurtma berish</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const ovqatlar = [
    {
      nomi: "Lavash Standart",
      narx: 30000,
      rasm: "/src/assets/ovqat1.jfif"
    },
    {
      nomi: "Lavash Sirli",
      narx: 32000,
      rasm: "/src/assets/ovqat2.jpg"
    },
    {
      nomi: "Lavash Tandir",
      narx: 32000,
      rasm: "/src/assets/blob.png"
    },
    {
      nomi: "Shaverma tovuqli",
      narx: 25000,
      rasm: "/src/assets/shavertovuq.jpg"
    },
    {
      nomi: "Shaverma tandir",
      narx: 18000,
      rasm: "/src/assets/shaver.jpg"
    },
    {
      nomi: "Doner",
      narx: 25000,
      rasm: "/src/assets/shavertandir.jpg"
    },
    {
      nomi: "Big Doner",
      narx: 28000,
      rasm: "/src/assets/donar_svin.jpg"
    },
    
    // Xohlasangiz yana qo‘shaverasiz
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
    background-color: #22c55e;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  .btn:hover {
    background-color: #16a34a;
  }
  </style>
  