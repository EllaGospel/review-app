import Card from "../Card"
import {Link} from 'react-router-dom'

function About() {
  return (
    <>
      <Card>
        <h3 className="head1">About the Review App</h3>
        <p>This is an application for a customer to give a review for a product usage or for a service</p>
        <br/>
        <p>version 1.0.0</p>
        <br/>
        <p>
          <Link to="/review-app">Go Back Home</Link>
          </p>
      </Card>
    </>
  )
}

export default About
