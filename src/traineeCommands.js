import { saveTraineeData, loadTraineeData } from './storage.js';

function addTrainee(args) {
  const arrTrainee = loadTraineeData() || [];
  const objTrainee = {
    id: arrTrainee.length ? arrTrainee?.[arrTrainee.length - 1].id + 1 : 1,
    firstName: args?.[0],
    lastName: args?.[1],
  };
  saveTraineeData([...arrTrainee, objTrainee]);
}

function updateTrainee(args) {
  const arrTrainee = loadTraineeData() || [];
  const newArr = arrTrainee.map((trainee) =>
    trainee.id === +args[0]
      ? { id: +args[0], firstName: args[1], lastName: args[2] }
      : trainee
  );
  saveTraineeData(newArr);
}

function deleteTrainee(args) {
  const arrTrainee = loadTraineeData() || [];
  const newArr = arrTrainee.filter((trainee) => trainee.id !== +args[0]);
  saveTraineeData(newArr);
}

function fetchTrainee(args) {
  const arrTrainee = loadTraineeData()
  return arrTrainee.find((trainee) => trainee.id === +args[0]);
}

function fetchAllTrainees() {
  return loadTraineeData();
}

export function handleTraineeCommand(subcommand, args) {
  switch (subcommand) {
    case 'add':
      addTrainee(args);
      break;
    case 'update':
      updateTrainee(args);
      break;
    case 'delete':
      deleteTrainee(args);
      break;
    case 'fetch':
      const trainee = fetchTrainee(args);
      trainee ? console.log(trainee) : console.log('Trainee not found');
      break;
    case 'list':
      const trainees = fetchAllTrainees(args);
      console.log(trainees);
      break;
    default:
      console.log('Unknowing command');
  }
}
