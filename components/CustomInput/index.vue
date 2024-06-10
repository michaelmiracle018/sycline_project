<template>
  <div class="form-control w-full">
    <div>
      <label
        :for="id"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        <span class="label-text"
          >{{ label }}
          <span v-if="required" class="text-red-500">*</span>
        </span>
      </label>
      <input
        :id="id"
        :type="type"
        :name="name"
        :placeholder="placeholder"
        v-model="inputValue"
        @input="validate"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        :class="[
          {
            'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500':
              errorMessage,
          },
        ]"
      />
    </div>

    <span v-if="errorMessage" class="text-red-500 text-xs mt-1">{{
      errorMessage
    }}</span>
  </div>
</template>

<script>
export default {
  name: "ReusableInput",
  props: {
    id: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "text",
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
    errorMessages: {
      type: Object,
      default: () => ({}),
    },
    modelValue: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      inputValue: this.modelValue,
      errorMessage: "",
    };
  },
  watch: {
    modelValue(val) {
      this.inputValue = val;
    },
    inputValue(val) {
      this.$emit("update:modelValue", val);
    },
  },
  methods: {
    validate() {
      this.errorMessage = "";

      if (this.required && !this.inputValue) {
        this.errorMessage =
          this.errorMessages.required || "This field is required.";
      }

      // Add more validation logic as needed
    },
  },
};
</script>

<style scoped>
/* Additional styles if needed */
</style>
