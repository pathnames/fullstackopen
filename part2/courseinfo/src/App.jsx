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

const Course = (props) => {
  return (
    <div>
      <Header course={props.course} />
      <Content course={props.course} />
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
        name: 'Panama',
        exercises: 69,
        id: 4
      }

    ]
  }

  return <Course course={course} />
}

export default App