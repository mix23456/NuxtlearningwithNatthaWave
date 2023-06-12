
<script setup>
import Drawer from '../components/drawer.vue'
</script>

<template>
    <div class="thebox row">
        <div class="img-container col">
            <Drawer></Drawer>
            <img class="logo" alt="..." src="../assets/logo/codashop-logo.png" />
            <i class="textlogo">วิธีที่เร็วที่สุดและง่ายที่สุดในการซื้อเครดิตเกม</i>
        </div>
    </div>
</template>

<style>
.textlogo {
    font-size: 16px;
    font-weight: 300;
    color: white;
    text-align: center;
}

.logo {
    width: 110px;
    margin-right: 8px;
}

.thebox {
    background-color: #3c1f42;
    border-color: #472f4c;
    border-style: solid;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    border-width: 1px;
    overflow: hidden;
    height: 60px;
    justify-content: center;
    align-items: center;

}

.textinthebox {
    color: white;
    text-align: center;

}
</style>