import { useState, useEffect } from 'react'
import PersonForm from '../components/PersonForm'
import Persons from '../components/Persons'
import Filter from '../components/Filter'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
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
      alert(`${newName} is already added to phonebook`)
      return
    }
    axios
      .post('http://localhost:3001/persons', nameObject)
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
    setPersons(persons.filter(person => person.name.includes(searchTerm)))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchTerm={searchTerm} handleSearchTermChange={handleSearchTermChange} />
      <PersonForm addPerson={addFormData} newName={newName} handleNameChange={(event) => setNewName(event.target.value)} newNumber={newNumber} handleNumberChange={(event) => setNewNumber(event.target.value)} />
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  )
}

export default App