import uuidv1 from 'uuid/v1';
import { Note } from 'app/App.interfaces';

export const newNote = (text: string): Note => ({
  id: uuidv1(),
  selected: false,
  text,
  comments: []
});