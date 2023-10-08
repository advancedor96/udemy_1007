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

    <Note v-for="note in notes" :key="note.id" :note="note" />

</div>
</template>
<script setup>
import Note from '@/components/Notes/Note.vue'
import {ref} from 'vue'
const newNote = ref('')
const newNoteRef = ref(null)

const addNote = ()=>{
  console.log('yoo');

  let currentDate = new Date().getTime(), 
      id = currentDate.toString();
  let note = {
    id: id,
    content: newNote.value
  }
  notes.value.unshift(note);
  newNote.value = ""
  newNoteRef.value.focus();
  

  
}
const notes = ref([
  {
    id: 'id1',
    content: 'Lorem'
  },
  {
    id: 'id2',
    content: 'Lorem2'
  },
])

</script>