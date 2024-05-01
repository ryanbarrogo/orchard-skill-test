<template>
    <div class="container mx-auto mt-20 mb-40">
        <div class="w-full text-center mb-20">
            <h2 class="title font-family-light">{{ title.toLocaleUpperCase() }}</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xs:gap-10 sm:gap-10 gap-5">
            <!-- Gallery Item -->
            <div v-for="(item, index) in galleryItems" :key="index" class="flex flex-col items-center">
                <div class="w-full image-container mb-4 border-b-4 border-red-600">
                    <img
                        :src="item.imageUrl"
                        :alt="'Image ' + (index + 1)"
                        class="card-image w-full h-auto md:h-80 object-cover"
                    />
                </div>
                <div>
                    <h2 class="item-title mt-4 w-full text-left font-family-regular font-semibold">{{ item.title }}</h2>
                    <p class="item-description mt-2 mb-5 w-full text-left font-family-light">{{ item.description }}</p>
                    <a class="pb-2 text-white border-b-2 font-semibold border-red-600">READ MORE</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const title = "All The Latest From AEG";
const galleryItems = [
    {
        imageUrl: "/assets/component-two/Image-01.jpg",
        title: "Summer Lunch Menu By Mark Best",
        description:
            "AEG ambassador Mark Best's summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home."
    },
    {
        imageUrl: "/assets/component-two/Image-02.jpg",
        title: "A Traditional Christmas Eve, Mark Best Style",
        description:
            "One of Australia's best chefs and AEG ambassador, Mark Best, shares his favourite Christmas Eve menu which is sure to impress your guests."
    },
    {
        imageUrl: "/assets/component-two/Image-03.jpg",
        title: "Taking Taste Further",
        description:
            "This exclusive cookbook gives you all the know-how you need. We've designed it to make sure you get the most out of our products - and the best out of your food."
    }
];
</script>

<style lang="scss" scoped>
.title {
    font-size: 45px;
}

.item-title {
    font-size: 20px;
}

.item-description {
    font-size: 18px;
}
</style>
