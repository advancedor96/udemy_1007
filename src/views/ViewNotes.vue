<template>
<div class="note">

  <AddEditNote v-model="newNote" ref="addEditNoteRef" >
    <template #buttons>
      <button class="button is-link has-background-success" @click="addNote" :disabled="!newNote">
        Add New Note
      </button>
    </template>
  </AddEditNote>

  <Note v-for="note in store.notes" :key="note.id"  :note="note" />

</div>
</template>
<script setup>
import Note from '@/components/Notes/Note.vue'
import AddEditNote from '@/components/Layout/AddEditNote.vue'
import {ref} from 'vue'
import {useNoteStore} from '@/stores/counter.js'
const store = useNoteStore();

const newNote = ref('ddd')
const addEditNoteRef = ref(null)

const addNote = ()=>{
  store.addNote(newNote)

  newNote.value = ""
  addEditNoteRef.value.focusTextarea();
  
}

</script>