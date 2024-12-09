import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
export const findModulesForCourse = async (courseId: string) => {
  const response = await axios
    .get(`${COURSES_API}/${courseId}/modules`);
  return response.data;
};

export function deleteCourse(courseId: string) {
    throw new Error("Function not implemented.");
}
export function updateCourse(course: any) {
    throw new Error("Function not implemented.");
}

