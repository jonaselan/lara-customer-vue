<template>
    <div class="uploader">
        <i class="fa fa-clound-upload"></i>
        <p>Drag your images heree</p>
        <div>OR</div>
        <div class="file-input">
            <label for="file"> Select a file</label>
            <input type="file" id="file" @change="onInputChange" multiple>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ImageUploader",
        methods: {
            onInputChange(e) {
                console.log(e);
            }
        }
    }
</script>

<style scoped>

</style>
