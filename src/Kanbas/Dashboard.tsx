import { Link } from "react-router-dom";



const  Dashboard=() =>{
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        {/* Course 1 */}
        <div id="wd-dashboard-course" className="row">
          <div className="row row-cols-1 row-cols-md-5 g-4">
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card rounded-3 overflow-hidden">

                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home">
                  <img src="/images/reactjs.jpg" width="100%" height={160} />
                  <div className="card-body">

                    <h5 className="wd-dashboard-course-title card-title">
                      CS1234 React JS
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                      Full Stack software developer
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>
            </div>

            {/* Course 2 */}
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/5678/Home">
                <img src="/images/python.jpg" width={200} />
                <div>
                  <h5>
                    CS5678 Python Programming
                  </h5>
                  <p className="wd-dashboard-course-title">
                    Backend development with Python
                  </p>
                  <button> Go </button>
                </div>
              </Link>
            </div>

            {/* Course 3 */}
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/9101/Home">
                <img src="/images/angular.jpg" width={200} />
                <div>
                  <h5>
                    CS9101 Angular
                  </h5>
                  <p className="wd-dashboard-course-title">
                    Frontend development with Angular
                  </p>
                  <button> Go </button>
                </div>
              </Link>
            </div>

            {/* Course 4 */}
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/3456/Home">
                <img src="/images/java.jpg" width={200} />
                <div>
                  <h5>
                    CS3456 Java Programming
                  </h5>
                  <p className="wd-dashboard-course-title">
                    Object-Oriented Programming with Java
                  </p>
                  <button> Go </button>
                </div>
              </Link>
            </div>

            {/* Course 5 */}
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/7890/Home">
                <img src="/images/docker.jpg" width={200} />
                <div>
                  <h5>
                    CS7890 Docker & Kubernetes
                  </h5>
                  <p className="wd-dashboard-course-title">
                    Container Orchestration with Docker & Kubernetes
                  </p>
                  <button> Go </button>
                </div>
              </Link>
            </div>

            {/* Course 6 */}
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1122/Home">
                <img src="/images/aws.jpg" width={200} />
                <div>
                  <h5>
                    CS1122 AWS Cloud
                  </h5>
                  <p className="wd-dashboard-course-title">
                    Cloud Computing with AWS
                  </p>
                  <button> Go </button>
                </div>
              </Link>
            </div>

            {/* Course 7 */}
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/3344/Home">
                <img src="/images/databases.jpg" width={200} />
                <div>
                  <h5>
                    CS3344 Databases
                  </h5>
                  <p className="wd-dashboard-course-title">
                    Relational Databases and SQL
                  </p>
                  <button> Go </button>
                </div>
              </Link>
            </div>

          </div>
        </div>
        </div>
        </div>

        );
    }
    export default Dashboard;
