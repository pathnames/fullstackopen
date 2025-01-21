  const Header = (props) => {
    return (<h1> {props.course} </h1>)
  }

  const Content = (props) => {
    return (
      <>
        <Part p={props.part1} e={props.exercises1} />
        <Part p={props.part2} e={props.exercises2} />
        <Part p={props.part3} e={props.exercises3} />
      </>
    );
  };
  

const Total = (props) => {
  return (
    <>
    <p>
      Number of exercises {props.e1 + props.e2 + props.e3}
    </p>
    </>
  )
}

const Part = (props) => {
  return (
    <>
    <p>{props.p} {props.e}</p>
    </>
  )
} 
  const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    return (
      <div>
        <Header course={course}/>
        <Content part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
        <Total e1={exercises1} e2={exercises2} e3={exercises3}/>
      </div>                           
    )
  }

  export default App