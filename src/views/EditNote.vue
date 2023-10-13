<template>
<div class="edit_note">
  <AddEditNote v-model="noteContent" ref="addEditNoteRef" bgColor="link">
    <template #buttons>
      <button @click="$router.back()" class="button is-link is-light" >
        Cancel
      </button>
      <button class="button is-link has-background-success" :disabled="!noteContent">
        Save Note
      </button>
    </template>
  </AddEditNote>
</div>
</template>
<script setup>
import {ref} from 'vue'
import AddEditNote from '@/components/Layout/AddEditNote.vue'

const noteContent = ref('')

</script>