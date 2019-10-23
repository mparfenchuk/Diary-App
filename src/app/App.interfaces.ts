import * as constants from './App.constants';

export interface Comment {
  id: string;
  color: string;
  text: string;
}

export interface Note {
  id: string;
  selected: boolean;
  text: string;
  comments: Array<Comment>;
}

export interface State {
  notes: Array<Note>;
}

export interface AddNewNote {
  type: constants.ADD_NEW_NOTE;
  payload: {
    note: Note;
  }
}

export interface SelectNote {
  type: constants.SELECT_NOTE;
  payload: {
    id: string;
  }
}

export interface DeleteNote {
  type: constants.DELETE_NOTE;
  payload: {
    id: string;
  }
}

export interface AddComment {
  type: constants.ADD_COMMENT;
  payload: {
    comment: Comment;
  }
}