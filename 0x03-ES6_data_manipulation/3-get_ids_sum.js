export default function getStudentIdsSum(students) {
  if (Array.isArray(students)) {
    return students.reduce((sum, obj) => sum + obj.id, 0);
  }
  return 0;
}
