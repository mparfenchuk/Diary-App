import { State, AddNewNote, SelectNote, DeleteNote, AddComment } from './App.interfaces';
import * as constants from './App.constants';

import { getDiaryNotes, saveDiaryNotes } from 'utils/storage';

export type Actions = AddNewNote | SelectNote | DeleteNote | AddComment

export const initialState: State = {
  notes: getDiaryNotes()
}

export const reducer = (state = initialState, action: Actions): State => {
  switch(action.type){
    case constants.ADD_NEW_NOTE: {
      const { note } = action.payload;
      const notes = [note, ...state.notes];
      saveDiaryNotes(notes);
      return {
        notes
      }
    }
    case constants.SELECT_NOTE: {
      const { id } = action.payload;
      const notes = state.notes.map(note => note.id === id 
        ? { ...note, selected: true }
        : note.id !== id && note.selected 
          ? { ...note, selected: false }
          : note);
      saveDiaryNotes(notes);
      return { 
        notes
      }
    }
    case constants.DELETE_NOTE: {
      const { id } = action.payload;
      const notes = state.notes.filter(note => note.id !== id);
      saveDiaryNotes(notes);
      return { 
        notes
      }
    }
    case constants.ADD_COMMENT: {
      const { comment } = action.payload;
      const notes = state.notes.map(note => note.selected
        ? { ...note, comments: [comment, ...note.comments] }
        : note);
      saveDiaryNotes(notes);
      return { 
        notes
      }
    }
    default:
      return state
  }
}