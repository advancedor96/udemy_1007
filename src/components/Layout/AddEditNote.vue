<template>
  <div class="card p-4 mb-5"
    :class="`has-background-${bgColor}-dark`"
  >
    <div class="field">
      <div class="control">
        <textarea :value="modelValue" 
        @input="$emit('update:modelValue', $event.target.value)"
          ref="textareaRef" class="textarea" placeholder="Add a new note" />
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons" />

      </div>
    </div>
  </div> 
</template>
<script setup>
import {ref} from 'vue'
const props = defineProps({
  modelValue:{
    type: String,
    required: true
  },
  bgColor: {
    type: String,
    default: 'success'
  }
})
const emit = defineEmits(['update:modelValue'])
const textareaRef = ref(null);

const focusTextarea = ()=>{
  textareaRef.value.focus();

}
defineExpose({ focusTextarea})

</script>