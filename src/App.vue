<script setup lang="ts">
</script>

<template>
  <div>
    <div class="search">
      <p class="search__title">Прогноз погоды в</p>
      <p>{{  }}</p>
      <form class="search__form">
        <input class="search__input" type="text" placeholder="Искать город" />
        <button class="search__button">Искать</button>
      </form>
    </div>
    <div class="main">
      <div class="main__window">
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
.search {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  &__title {
    font-size: 1.5rem;
    font-weight: bold;
  }

  &__form {
    display: flex;
    gap: 10px;
  }

  &__input {
    flex: 1;
    padding: 10px 15px;
    font-size: 1rem;
    border: 2px solid #ccc;
    border-radius: 8px;
    transition: border-color 0.3s, box-shadow 0.3s;
    outline: none;

    &:focus {
      border-color: #409eff;
      box-shadow: 0 0 0 2px rgba(64, 158, 255, 0.2);
    }

    &::placeholder {
      color: #aaa;
    }
  }

  &__button {
    padding: 10px 20px;
    background-color: #409eff;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s;

    &:hover {
      background-color: #307fd9;
    }
  }
}

.main {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  &__window {
    width: 800px;
    height: 340px;
    background: rgb(48, 114, 255);
    border-radius: 12px;
  }
}
</style>
