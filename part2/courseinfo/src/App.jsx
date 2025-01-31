const Header = (props) => {
  return (<h1> {props.course.name} </h1>)
}

const Content = ({ course }) => {
  return (
    <>
      {course.parts.map(({ id, name, exercises }) => (
        <Part key={id} name={name} exercises={exercises} />
      ))}
    </>
  );
};

const Part = ({id, name, exercises}) => {
return (
  <>
  <p>{name} {exercises}</p>
  </>
)
} 

const Total = ({ parts }) => {
  return (
    <>
      <p>Number of exercises {parts.reduce((acc, part) => acc + part.exercises, 0)}</p>
    </>
  )
}
const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total parts={course.parts} />
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return <Course course={course} />
}

export default App