<template>
    <div class="car_brands">
        <h3>Car brands</h3>
        <slot name="brands"></slot>
        <slot name="other"></slot>
        <!-- All default slots will be merged -->
        <slot></slot>


    </div>
</template>
<style scoped>
    .car_brands {
        border: 1px solid #2186f3;
        padding: 10px 20px;
    }

</style>