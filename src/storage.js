import fs from 'node:fs';

const TRAINEE_DATA_FILE_PATH = './data/trainees.json';
const COURSE_DATA_FILE_PATH = './data/courses.json';

export function loadTraineeData() {
  const data = fs.readFileSync(TRAINEE_DATA_FILE_PATH, 'utf-8');
  return JSON.parse(data);
}

export function saveTraineeData(data) {
  const dataSave = JSON.stringify(data, null, 2);
  fs.writeFileSync(TRAINEE_DATA_FILE_PATH, dataSave, 'utf-8');
}

export function loadCourseData() {
  const data = fs.readFileSync(COURSE_DATA_FILE_PATH, 'utf-8');
  return JSON.parse(data);
}

export function saveCourseData(data) {
  const dataSave = JSON.stringify(data, null, 2);
  fs.writeFileSync(COURSE_DATA_FILE_PATH, dataSave, 'utf-8');
}
