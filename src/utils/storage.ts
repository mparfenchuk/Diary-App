import { Note } from 'app/App.interfaces';

export const getDiaryNotes = (): Array<Note> => {
  let state = []
  try {
    state = JSON.parse(localStorage.getItem('diary_notes') || '[]');
  } catch {}
  return state;
} 

export const saveDiaryNotes = (state: Array<Note>) => {
  try {
    localStorage.setItem('diary_notes', JSON.stringify(state))
  } catch {}
}