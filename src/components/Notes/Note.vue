<template>
  <div class="card mb-4" >
    <div class="card-content">
      <div class="content">
        {{  props.note.content }} 
      </div>
      <div class="has-text-right has-text-grey-light">
        <small>{{ contentLength }} </small>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink :to="{name: 'edit_notes', params: {eid: note.id}}" class="card-footer-item">Edit</RouterLink>
      <a href="#" @click.prevent="store.deleteNote(note.id)" class="card-footer-item">Delete</a>
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue';

import {useNoteStore} from '@/stores/counter.js'
const store = useNoteStore();
const props = defineProps({
  note: {
    type: Object
  } 
})
const contentLength = computed(()=>{
  if(props.note.content.length ===1) return '1 char'
  else return `${props.note.content.length} chars`  
})
// const emit = defineEmits(['deleteClicked'])
// const handleDeleteClick = ()=>{
//   emit('deleteClicked', props.note.id)

// }

</script>