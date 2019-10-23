import uuidv1 from 'uuid/v1';
import { Comment } from 'app/App.interfaces';

export const newComment = (color: string, text: string): Comment => ({
  id: uuidv1(),
  text,
  color
});