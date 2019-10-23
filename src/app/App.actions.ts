import { AddNewNote, SelectNote, DeleteNote, AddComment,
  Note, Comment } from './App.interfaces';
import * as constants from './App.constants';

export const addNewNote = (note: Note): AddNewNote => ({
  type: constants.ADD_NEW_NOTE,
  payload: {
    note
  }
})

export const selectNote = (id: string): SelectNote => ({
  type: constants.SELECT_NOTE,
  payload: {
    id
  }
})

export const deleteNote = (id: string): DeleteNote => ({
  type: constants.DELETE_NOTE,
  payload: {
    id
  }
})

export const addComment = (comment: Comment): AddComment => ({
  type: constants.ADD_COMMENT,
  payload: {
    comment
  }
})