import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);

  return Promise.allSettled([user, photo]).then((data) => {
    const array = [];
    data.forEach((element) => {
      if (element.status === 'fulfilled') {
        array.push({ status: element.status, value: element.value });
      } else {
        array.push({
          status: element.status,
          value: `Error: ${element.reason.message}`,
        });
      }
    });
    return array;
  });
}
