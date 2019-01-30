import Icon1 from './icons/noun_321339_cc.svg';
import Icon2 from './icons/noun_321315_cc.svg';
import Icon3 from './icons/noun_321363_cc.svg';
import Icon4 from './icons/noun_321399_cc.svg';
import Icon5 from './icons/noun_321395_cc.svg';

const serviceTypes = [{
  id: 1,
  logo: Icon1,
  title: 'Electrician',
}, {
  id: 2,
  logo: Icon2,
  title: 'Plumber',
}, {
  id: 3,
  logo: Icon3,
  title: 'Gardener',
}, {
  id: 4,
  logo: Icon4,
  title: 'Housekeeper',
}, {
  id: 5,
  logo: Icon5,
  title: 'Cook',
}];

const electricianTasks = [
  'Repair a cable damage',
  'Replace a light switch',
  'Fix a socket',
  'Install a lamp',
  'Install a fuse box',
  'Repair a wiring failure',
];

const plumberTasks = [
  'Unblock a toilet',
  'Unblock a sink',
  'Fix a water leak',
  'Install a sink',
  'Install a shower',
  'Install a toilet',
];

const gardenerTasks = [
  'Plant the tree',
  'Water the plants',
  'Harvest vegetables',
  'Mow the lawn',
  'Plant flowers',
  'Buy seeds',
];

const housekeeperTasks = [
  'Wash the dishes',
  'Do the laundry',
  'Vacuum the carpet',
  'Iron clothes',
  'Dust the furniture',
  'Do the washing',
];

const cookTasks = [
  'Cook the casserole',
  'Cook the pizza',
  'Cook sushi',
  'Cook the stew',
  'Boil eggs',
  'Slice the salmon',
];

export {
  serviceTypes,
  electricianTasks,
  plumberTasks,
  gardenerTasks,
  housekeeperTasks,
  cookTasks,
};
