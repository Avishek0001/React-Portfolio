import React from 'react'
import { Link, useNavigate } from 'react-router-dom';



const Projects = () => {
  const linkStyle = {
    color: 'var(--title-color)',
    backgroundColor: 'var(--bg-color)',
    textDecoration: 'none',
    padding: '5px',
    width: 'auto',
    border: '3px solid  var(--title-color)',
    cursor: 'pointer',
  };
  const navigate = useNavigate()
  function handleChange() {
    navigate("/")
  }

  return (
    <div className="project_container">
      <button style={linkStyle} onClick={handleChange}>
        <span class="material-symbols-outlined">
          home
        </span>
      </button>

      <h1 className="project_title" style={{marginTop:'none'}}>Projects</h1>

      <div className='project container'>

        <div className='about_box project_box'>
          <h1>Full Stack Mern Blog Website</h1>
          <ul style={{ textAlign:'justify' , margin:'10px'}}>
            <li>
              <span style={{ fontWeight: 'bold', }}>Technology Stack :   </span>
              Leveraged MongoDB for the database, Express.js for the backend API, React to enhance frontend performance, and Node.js for server-side scripting.
            </li>
            <li>
              <span style={{ fontWeight: 'bold' }}> User Authentication : </span>
              Implemented user authentication and authorization using JSON Web Tokens (JWT), allowing secure access to personal task lists.
            </li>
            <li>
              <span style={{ fontWeight: 'bold' }}> Task CRUD Operations : </span>
              Designed and implemented Create, Read, Update, and Delete (CRUD) operations for tasks, allowing users to add, view, edit, and delete tasks.
            </li>
            <li>
              <span style={{ fontWeight: 'bold' }}> Responsive UI : </span>
              Developed a responsive and user-friendly UI/UX using React and CSS, ensuring a seamless experience on both desktop and mobile devices.
            </li>
          </ul>
          <a href="https://github.com/Avishek0001/Full-Stack-Mern-Blog-App" target="_blank">
            <button className="project_button button button--flex">GitHub Link For Source Code </button>
          </a>
        </div>


        <div className='about_box project_box'>
          <h1>To Do List Using Node Js</h1>
          <ul style={{ textAlign:'justify', margin:'10px' }}>
            <li>
              <span style={{ fontWeight: 'bold', }}>Technology Stack :   </span>
              Specifically used MongoDB for the database, Express.js for the backend and used EJS (Embedded Javascript) for the front-end interface, and Node.js for server-side scripting.
              </li>
            <li>
              <span style={{ fontWeight: 'bold' }}> Task CRUD Operations : </span>
              Designed and implemented Create, Read, Update, and Delete (CRUD) operations for tasks, allowing users to add, view, edit, and delete tasks.
              </li>
                          
          </ul>
          <a href="https://github.com/Avishek0001/TO-DO-LIST" target="_blank">
            <button className="project_button button button--flex">GitHub Link For Source Code </button>
          </a>
        </div>


        <div className='about_box project_box'>
          <h1>E-Commerce Website</h1>
          <ul style={{ textAlign:'justify', margin:'10px' }}>
            <li>
              <span style={{ fontWeight: 'bold', }}>Technology Stack :   </span>
              Mainly used HTML , CSS and Javascript. It is a front end static single page site 
              </li>
            <li>
              <span style={{ fontWeight: 'bold' }}> Mainly Focused On : </span>
             This website is a labor of love, built using HTML, CSS, and JavaScript to provide you a brief representation of a site build without any javascript Frameworks.
              </li>
                          
          </ul>
          <a href="https://github.com/Avishek0001/E-Commerce-Website-" target="_blank">
            <button className="project_button button button--flex">GitHub Link For Source Code </button>
          </a>
        </div>


        <div className='about_box project_box'>
          <h1>Myntra Home Page Clone</h1>
          <ul style={{ textAlign:'justify', margin:'10px' }}>
            <li>
              <span style={{ fontWeight: 'bold', }}>Technology Stack :   </span>
              Mainly used HTML , CSS and Javascript. It is a basic beginner friendly front end single page site 
              </li>
            <li>
              <span style={{ fontWeight: 'bold' }}>Breifly Described : </span>
             I had built this website on first year of my college. I started learning HTML CSS and Javascript and tried to make a clone of the home page of a shopping site
              </li>
                          
          </ul>
          <a href="https://github.com/Avishek0001/MYNTRA-CLONE-" target="_blank">
            <button className="project_button button button--flex">GitHub Link For Source Code </button>
          </a>
        </div>
      </div>

    </div>
  )
}

export default Projects