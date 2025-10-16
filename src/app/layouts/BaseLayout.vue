<script>
export default {
    props: {
        name: String,
    },
};
</script>

<template>
    <div :class="['layout', name]">
        <slot />
    </div>
</template>