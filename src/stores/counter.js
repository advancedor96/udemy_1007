import { defineStore } from 'pinia'

export const useNoteStore = defineStore('noteStore', {
  state: ()=>({
    notes: [
      {
        id: 'id1',
        content: 'Lorem111'
      },
      {
        id: 'id2',
        content: 'Lorem2222'
      },
    ]
  }),
  getters: {
    // doubleCount: (state)=>state.count*2
  },
  actions:{
    addNote(newNote){
      let currentDate = new Date().getTime(), 
          id = currentDate.toString();
      let note = {
        id: id,
        content: newNote.value
      }
      this.notes.unshift(note);
    },
    deleteNote( idToDel ){
      console.log('in store, delete note', );
      
      this.notes = this.notes.filter((note)=>note.id !== idToDel)
    }

  }

})
