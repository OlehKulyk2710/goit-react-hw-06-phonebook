import { createAction } from '@reduxjs/toolkit';
import {
  UPDATECONTACTS,
  DELETECONTACT,
  FILTERCONTACTS,
} from 'service/constants';

export const updateContacts = createAction(UPDATECONTACTS);
export const deleteContact = createAction(DELETECONTACT);
export const filterContacts = createAction(FILTERCONTACTS);
