import { saveCourseData, loadCourseData } from './storage.js';

function addCourse(args) {
  const arrCourse = loadCourseData() || [];
  const newCourse = {
    id: arrCourse.length ? arrCourse[arrCourse.length - 1].id + 1 : 1,
    name: args[0],
    startDate: args[1],
    participants: [],
  };
  saveCourseData([...arrCourse, newCourse]);
}

function updateCourse(args) {
  const arrCourse = loadCourseData() || [];
  const newCourse = arrCourse.map((course) =>
    course.id === +args[0] ? { name: args[1], startDate: args[2] } : course
  );
  saveCourseData(newCourse);
}

function deleteCourse(args) {
  const arrCourse = loadCourseData() || [];
  const newCourse = arrCourse.filter((course) => course.id !== +args[0]);
  saveCourseData(newCourse);
}

function joinCourse(args) {
  const arrCourse = loadCourseData() || [];
  const arrParticipants = arrCourse.map((course) =>
    course.id === +args[0]
      ? {
          ...course,
          participants: course.participants.includes(+args[1])
            ? course.participants
            : [...course.participants, +args[1]],
        }
      : course
  );
  saveCourseData(arrParticipants);
}

function leaveCourse(args) {
  const arrCourse = loadCourseData() || [];
  const arrLeaveParticipants = arrCourse.map((course) =>
    course.id === +args[0]
      ? {
          ...course,
          participants: course.participants.filter((id) => id !== +args[1]),
        }
      : course
  );
  saveCourseData(arrLeaveParticipants);
}

function getCourse(args) {
  const arrCourse = loadCourseData() || [];
  return arrCourse.find((course) => course.id === +args[0])
}

function getAllCourses() {
  return loadCourseData() || [];
}

export function handleCourseCommand(subcommand, args) {
  switch (subcommand) {
    case 'add':
      addCourse(args);
      break;
    case 'update':
      updateCourse(args);
      break;
    case 'delete':
      deleteCourse(args);
      break;
    case 'join':
      joinCourse(args);
      break;
    case 'leave':
      leaveCourse(args);
      break;
    case 'get':
      getCourse(args);
      break;
    case 'list':
      getAllCourses(args);
      break;

    default:
      console.log('Unknowing command');
  }
}
