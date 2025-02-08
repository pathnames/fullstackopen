import { useState, useEffect } from 'react'
import PersonForm from '../components/PersonForm'
import Persons from '../components/Persons'
import Filter from '../components/Filter'
import axios from 'axios'
import phoneService from './services/phone'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    phoneService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const addFormData = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
    }
    if (persons.find(person => person.name === newName)) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const person = persons.find(person => person.name === newName)
        const changedPerson = { ...person, number: newNumber }
        phoneService
          .update(person.id, changedPerson)
          .then(response => {
            setPersons(persons.map(person => person.id !== changedPerson.id ? person : changedPerson))
          })
      }
      return
    }
    phoneService
      .create(nameObject)
      .then(response => {
        setPersons(persons.concat(response.data))
        setNewName('')
        setNewNumber('')
      })
      .catch(error => {
        console.log(error)
      })
  }


  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const personsToShow = searchTerm === ''
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const handleDelete = (id) => {
    if (window.confirm('Do you really want to delete this person?')) {
      axios
        .delete(`http://localhost:3001/persons/${id}`)
        .then(response => {
          setPersons(persons.filter(person => person.id !== id))
        })
    }
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchTerm={searchTerm} handleSearchTermChange={handleSearchTermChange} />
      <h2>add a new</h2>
      <Persons persons={personsToShow} handleDelete={handleDelete}/>
      <PersonForm addPerson={addFormData} newName={newName} handleNameChange={(event) => setNewName(event.target.value)} newNumber={newNumber} handleNumberChange={(event) => setNewNumber(event.target.value)} />
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  )
}

export default App