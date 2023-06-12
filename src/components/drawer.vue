<template>
    <button class="drawer" @click="isOpened = true">
        <img style="filter: invert(1); width: 24px;" src="../assets/icon/menu.svg" />
    </button>
    <VueSidePanel panel-color="#3c1f42" hide-close-btn="true" side="left" v-model="isOpened" lock-scroll="true"
        width="300px">
        <div class="drawercontent">
            <h2 v-for="item in 2" :key="item" :style="{ fontSize: '28px', fontWeight: 700, lineHeight: '43px' }">
                This is scrolled body!
            </h2>
        </div>
    </VueSidePanel>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({

    setup() {
        return {
            isOpened: ref(false)
        }
    }
})
</script>

<style>
.drawer {
    border: none;
    box-shadow: none;
    border-radius: 16px;
    background-color: transparent;
}

.drawercontent {
    padding-top: 40px;
    margin-inline: 16px;
    color: aqua;
}
</style>