<template>
    <div class="uploader"
         @dragenter.prevent="OnDragEnter"
         @dragleave.prevent="OnDragLeave"
         @dragover.prevent
         @drop="onDrop"
         :class="{ dragging: isDragging }">

        <div class="upload-control" v-show="images.length">
            <label for="file">Select a file</label>
            <!--<button @click="upload">Upload</button>-->
        </div>

        <div v-show="!images.length">
            <i class="fa fa-cloud-upload"></i>
            <p>Drag your images here</p>
            <div>OR</div>
            <div class="file-input">
                <label for="file">Select a file</label>
                <input type="file" id="file" @change="onInputChange" multiple>
            </div>
        </div>

        <div class="images-preview" v-show="images.length">
            <transition-group name="image" tag="div">
                <div class="img-wrapper" v-for="(image, index) in images" :key="item + '_' + index">
                    <img :src="image" :alt="`Image Uploader ${index}`">
                    <div class="details">
                        <button class="delete-image" @click.prevent="deleteImage(index)">X</button>
                        <span class="name" v-text="files[index].name"></span>
                        <span class="size" v-text="getFileSize(files[index].size)"></span>
                    </div>
                </div>
            </transition-group>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({
            isDragging: false,
            // esse contador é para corrigir a bugada que dá no estilo da div
            draggingCount: 0,
        }),
        name: "ImageUploader",
        computed: {
            images() {
                return this.$store.getters.images;
            },
            files() {
                return this.$store.getters.files;
            },
        },
        methods: {
            OnDragEnter() {
                this.draggingCount++;

                this.isDragging = true;
            },
            OnDragLeave(){
                this.draggingCount--;

                if (this.draggingCount <= 0)
                    this.isDragging = false;
            },
            onDrop(e){
                e.preventDefault();
                // parar a propagação nos elementos filhos
                e.stopPropagation();

                this.isDragging = false;
                // recuperar todos os arquivos soltados
                const files = e.dataTransfer.files;

                Array.from(files).forEach(file => this.addImage(file));
            },
            onInputChange(e) {
                const files = e.target.files;

                Array.from(files).forEach(file => this.addImage(file));
            },
            addImage(file) {
                if (!file.type.match('image.*')){
                    alert(`${file.name} não é uma imagem`);
                    return false;
                }

                this.$store.dispatch('storeFile', file);

                const reader = new FileReader();
                reader.onload = (e) => this.$store.dispatch('storeImage', e.target.result);
                reader.readAsDataURL(file);

            },
            getFileSize(size){
                const fSExt = ['Bytes', 'KB', 'MB', 'GB'];
                let i = 0;

                while(size > 900) {
                    size /= 1024;
                    i++;
                }
                return `${(Math.round(size * 100) / 100)} ${fSExt[i]}`;
            },
            // upload(){
            //     const formData = new FormData();

            //     this.files.forEach(file => {
            //         formData.append('images[]', file, file.name);
            //     });

            //     axios.post('/images-upload', formData)
            //         .then(response => {
            //             this.images = [];
            //             this.files = [];
            //         })

            // },
            deleteImage(index){
                this.files.splice(index, 1);
                this.images.splice(index, 1);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .uploader {
        width: 100%;
        background: #2196F3;
        color: #fff;
        padding: 40px 15px;
        text-align: center;
        border-radius: 10px;
        border: 3px dashed #fff;
        font-size: 20px;
        position: relative;

        &.dragging {
            background: #fff;
            color: #2196F3;
            border: 3px dashed #2196F3;
            .file-input label {
                background: #2196F3;
                color: #fff;
            }
        }

        i {
            font-size: 85px;
        }

        .file-input {
            width: 200px;
            margin: auto;
            height: 68px;
            position: relative;

            label,
            input {
                background: #fff;
                color: #2196F3;
                width: 100%;
                position: absolute;
                left: 0;
                top: 0;
                padding: 10px;
                border-radius: 4px;
                margin-top: 7px;
                cursor: pointer;
            }

            input {
                opacity: 0;
                z-index: -2;
            }
        }

        .image-enter-active, .image-leave-active {
            transition: all 1s;
        }
        .image-enter, .image-leave-to /* .list-leave-active below version 2.1.8 */ {
            opacity: 0;
            transform: translateY(30px);
        }

        .image-move {
            transition: transform 1s;
        }

        .images-preview {
            /* estilo na div q é adicionada pleo transaction group */
            & > div {
                display: flex;
                flex-wrap: wrap;
                margin-top: 20px;
            }

            .img-wrapper {
                width: 160px;
                display: flex;
                flex-direction: column;
                margin: 10px;
                height: 150px;
                justify-content: space-between;
                background: #fff;
                box-shadow: 5px 5px 20px #3e3737;

                img {
                    max-height: 105px;
                }
            }

            .details {
                font-size: 12px;
                background: #fff;
                color: #000;
                display: flex;
                flex-direction: column;
                align-items: self-start;
                padding: 3px 6px;

                .name {
                    overflow: hidden;
                    height: 18px;
                }
            }
        }

        .upload-control {
            position: absolute;
            width: 100%;
            background: #fff;
            top: 0;
            left: 0;
            border-top-left-radius: 7px;
            border-top-right-radius: 7px;
            padding: 10px;
            padding-bottom: 4px;
            text-align: right;

            button, label {
                background: #2196F3;
                border: 2px solid #03A9F4;
                border-radius: 3px;
                color: #fff;
                font-size: 15px;
                cursor: pointer;
            }

            label {
                padding: 2px 5px;
                margin-right: 10px;
            }
        }

        .delete-image {
            position: relative;
            bottom: 100px;
            border-radius: 24px;
            background-color: #d28989;
            border: 1px solid white;
        }
    }
</style>
