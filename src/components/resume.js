import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="http://www.mediafire.com/convkey/9daf/3jzhn0e2irx2om0zg.jpg"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Cristian Reynoso-Betancourt</h2>
            <h4 style={{color: 'grey'}}>Entry-Level Software / Web Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Bellevue University graduate Class 2019, offering a strong academic background in IT and Software Development combined with excellent internship experience as an IT Intern. Junior Web Developer with 1+ years of experience in the IT domain. Strong experience in development of web applications using HTML5, CSS3, Bootstrap, JavaScript, React, Angular, AJAX, JSON. Well-versed in numerous programming languages including Python, Java, JavaScript, and SQL. Quickly learn and master new technologies; equally successful in both team and self-directed settings; and proficient in a range of computer systems, languages, tools, and testing methodologies.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>1624 Beekman Place Apt A NW Washington D.C. 20009</p>
            <h5>Phone</h5>
            <p>(646) 249-1945</p>
            <h5>Email</h5>
            <p>crb3305@gmail.com</p>
            <h5>Web</h5>
            <p>crb.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2016}
              endYear={2019}
              schoolName="Bellevue University"
              schoolDescription="Bachelor of Science in Computer Information Systems"
               />

               <Education
                 startYear={2013}
                 endYear={2016}
                 schoolName="Montgomery College"
                 schoolDescription="Associate of Science in Computer Science"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2018}
              endYear={2018}
              jobName="Intern at ISS"
              jobDescription="Handle technical troubleshooting within an enterprise environment, system crashes, slow-downs and data recoveries. Engage and track priority 1 issues, with responsibility for the timely documentation, resolution and closure of trouble tickets"
              />

              <Experience
                startYear={2016}
                endYear={2016}
                jobName="IT Associate at Payroll Network"
                jobDescription="Responsible for responding to telephone calls, email and personnel request for technical support"
                />

              <Experience
                startYear={2015}
                endYear={2015}
                jobName="Intern at NASDAQ"
                jobDescription="Participated in the “design and implementation” of a new software called Remote Desktop Manager (RDM) in the Application Management department at NASDAQ (Rockville office) in 2015"
                />

              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="HTML5/CSS3"
                progress={100}
                />
              <Skills
                skill="JavaScript"
                progress={85}
                />
              <Skills
                skill="React"
                progress={75}
                />
              <Skills
                skill="Python"
                progress={75}
                />

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
