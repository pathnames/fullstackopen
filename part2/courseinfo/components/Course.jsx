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

export default Course 