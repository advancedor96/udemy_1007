<template>
<div class="note">

  <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea v-model="newNote" ref="newNoteRef" class="textarea" placeholder="Add a new note" />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button class="button is-link has-background-success" @click="addNote" :disabled="!newNote">
            Add New Note
          </button>
        </div>
      </div>
    </div>

    <Note v-for="note in store.notes" :key="note.id"  :note="note" />

</div>
</template>
<script setup>
import Note from '@/components/Notes/Note.vue'
import {ref} from 'vue'
import {useNoteStore} from '@/stores/counter.js'
const store = useNoteStore();

const newNote = ref('')
const newNoteRef = ref(null)

const addNote = ()=>{
  store.addNote(newNote)

  newNote.value = ""
  newNoteRef.value.focus();
  

  
}
// const notes = ref()

// const deleteNote = ( idToDel )=>{
  
// }

</script>