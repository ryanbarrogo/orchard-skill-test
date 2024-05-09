<template>
    <transition name="modal">
        <div
            v-if="visible"
            class="modal-parent fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50"
        >
            <div class="modal-container">
                <div class="modal-content">
                    <slot></slot>
                </div>
                <button @click="close" class="modal-close-btn">
                    <CloseButtonIcon></CloseButtonIcon>
                </button>
            </div>
        </div>
    </transition>
</template>

<script setup>
import CloseButtonIcon from "~/components/icons/CloseButtonIcon.vue";

const props = defineProps({
    visible: {
        type: Boolean,
        required: true
    }
});

const emit = defineEmits(["update:visible"]);
const close = () => {
    emit("update:visible", false);
};
</script>

<style lang="scss" scoped>
.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
    transform: scale(1);
}

.modal-parent {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(2px);
    z-index: 1;

    .modal-container {
        width: 80vw;
        max-width: 500px;
        transition: transform 0.3s ease;
        transform: scale(0.95);

        .modal-content {
            border-radius: 0.5rem;
            box-shadow:
                0 10px 15px -3px rgba(0, 0, 0, 0.1),
                0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
    }
}

.modal-close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: transparent;
    border: none;
    cursor: pointer;
}
</style>
