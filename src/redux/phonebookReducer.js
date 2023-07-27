// import { statusFilters } from "./constants";



const initialState = {
  contacts: [],
  filter: ''
}

export const phonebookReducer = ( state = initialState, action ) => {

  switch(action.type) {

    case "phonebook/addNewContact": return {
        ...state,
        // contacts: ((prevContacts=>[...prevContacts, action.payLoad]))
        // contacts: [...state.contacts, action.payLoad]
        contacts: state.contacts.push(action.payload)
    }
    case "phonebook/delContact": return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload)
    } 

    case 'phonebook/findContacts':return {
        ...state,
        filter: action.payload
    }
     default: return state;
  }
}

export const addNewContact = payload => {
  return {
    type: 'phonebook/addNewContact',
    payload,
  }
}

export const delContact = payload => {
  return {
    type: 'phonebook/delContact',
    payload,
  }
}

export const findContacts = payload => {
  return {
    type: 'phonebook/findContacts',
    payload
  }
}

//////////action -> {type: "phonebook/addNewContact", payload: contact}
//////////action -> {type: "phonebook/delContact", payload: contact}
