<script setup>
definePageMeta({
  layout: "withoutFooter",
});
import { QuillEditor } from "@vueup/vue-quill";
import BlotFormatter from "quill-blot-formatter";
import ImageUploader from "quill-image-uploader";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import "quill-image-uploader/dist/quill.imageUploader.min.css";

const toolbar = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],
  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }],
  [{ script: "sub" }, { script: "super" }], // superscript/subscript
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ direction: "rtl" }], // text direction
  [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],
  ["clean"], // remove formatting button
  //["link", "image"], // link and image, video
];
const title = ref('')

const modules = [
  {
    name: "blotFormatter",
    module: BlotFormatter,
    options: {
      /* options */
    },
  },
  {
    name: "imageUploader",
    module: ImageUploader,
    options: {
      upload: (file) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(
              "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/480px-JavaScript-logo.png"
            );
          }, 3500);
        });
      },
    },
  },
];

const editorContent = ref("");
const contentHTML = ref("");
function showContent() {
  contentHTML.value = editorContent.value;
}
// console.log('dkkk', contentHTML.value);
</script>

<template>
  <div class="bg-[#F1F2F4] dark:bg-slate-950 pt-10 h-full">
    <div class="w-full max-w-2xl m-auto space-y-8">    
<div >
  <CustomInput
  type="text"
  id="title"
  name="title"
  label="Title"
  placeholder="Enter your title"
  :required="true"
  v-model="title"
  :errorMessages="{ required: 'Title is required.' }"
  />
</div>
<div >
  <CustomInput
  type="file"
  id="img"
  name="img"
  label="Image"
  placeholder="select an image"
  :required="true"
  v-model="title"
  :errorMessages="{ required: 'Image is required.' }"
  />
</div>

<div>
  <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
  <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>Choose a category</option>
    <option value="Travel">Travel</option>
    <option value="Technology">Technology</option>
    <option value="LifeStyle">LifeStyle</option>
    <option value="Visit">Visit</option>
  </select>
</div>

    <QuillEditor
    theme="snow"
    :toolbar="toolbar"
    :modules="modules"
    v-model:content="editorContent"
    content-type="html"
    />
    <br />
    <button @click="showContent">Show Content</button>
    <br />
    <div id="content_container" class="ql-container ql-snow">
      <div id="content" class="ql-editor" v-html="contentHTML"></div>
    </div>
    <h1>{{contentHTML}}</h1>
  </div>
</div>

  </template>

<style>
#content_container {
  border: none;
}
</style>
