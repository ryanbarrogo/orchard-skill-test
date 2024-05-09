<template>
    <div class="container mx-auto mt-5">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div class="w-full cursor-pointer animate__animated animate__fadeInLeft">
                <img
                    src="/assets/component-one/Image-01.jpg"
                    alt="Image 1"
                    class="w-full h-full object-cover"
                    @click="openModal('/assets/component-one/Image-01@2x.jpg')"
                />
            </div>
            <div class="w-full md:col-span-1 flex flex-col">
                <div class="flex-1 mb-4 cursor-pointer animate__animated animate__fadeInDown">
                    <img
                        src="/assets/component-one/Image-02.jpg"
                        alt="Image 2"
                        class="w-full h-full object-cover"
                        @click="openModal('/assets/component-one/Image-02@2x.jpg')"
                    />
                </div>
                <div class="flex-1 cursor-pointer animate__animated animate__fadeInUp">
                    <img
                        src="/assets/component-one/Image-03.jpg"
                        alt="Image 3"
                        class="w-full h-full object-cover"
                        @click="openModal('/assets/component-one/Image-03@2x.jpg')"
                    />
                </div>
            </div>
            <div class="w-full lg:col-span-1 md:col-span-2">
                <div class="main-content flex flex-col justify-center animate__animated animate__zoomIn">
                    <h2 class="title font-family-light">{{ dynamicContent.main_content.title.toLocaleUpperCase() }}</h2>
                    <p class="content font-family-light">{{ dynamicContent.main_content.content }}</p>
                </div>
                <div class="sub-content flex flex-col justify-center animate__animated animate__zoomIn">
                    <h2 class="title">{{ dynamicContent.sub_content.title.toLocaleUpperCase() }}</h2>
                    <p class="content">{{ dynamicContent.sub_content.content }}</p>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <ImageViewModal v-model:visible="isModalVisible">
            <img :src="selectedImage" alt="Selected Image" class="w-full" />
        </ImageViewModal>
    </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import ImageViewModal from "~/components/modal/ImageViewModal.vue";

const isModalVisible = ref(false);
const selectedImage = ref("");
const dynamicContent = reactive({
    main_content: {
        title: "Answer Your Body's Needs",
        content:
            "The way ingredients are sourced affect the way we nourish our bodies. Author Mark Schatzer believes our body naturally develops an appetite for the foods and nutrients it needs to be healthy, but that artificial flavourings are getting in the way. This can be reversed by focusing on high-quality ingredients and being mindful as your appetite guides you to consume according to your body needs."
    },
    sub_content: {
        title: "Be Mindful",
        content:
            "Sourcing local or organic food is a good way to start being more mindful about what you're cooking and eating."
    }
});

const openModal = (image) => {
    selectedImage.value = image;
    isModalVisible.value = true;
};
</script>

<style lang="scss" scoped>
.main-content {
    .title {
        position: relative;
        display: inline-block;
        padding: 0 0 10px 0;
        font-size: 27px;
        margin-bottom: 35px;
        font-weight: 100;

        &::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 1px;
            background-color: var(--PRIMARY_TEXT_COLOR);
        }
    }

    .content {
        font-size: 18px;
    }
}

.sub-content {
    .title {
        position: relative;
        display: inline-block;
        padding: 50px 0 20px 0;
        font-size: 16px;
        font-weight: 600;
        color: var(--TERTIARY_TEXT_COLOR);
    }

    .content {
        font-weight: 600;
        font-size: 18px;
    }
}
</style>
