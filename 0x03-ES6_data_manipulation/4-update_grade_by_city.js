export default function updateStudentGradeByCity(students, city, newGrades) {
  if (Array.isArray(students)) {
    const studentsByCity = students.filter((obj) => obj.location === city);
    const studentsIds = studentsByCity.map((obj) => obj.id);
    const newStudents = students.map((obj) => {
      if (studentsIds.includes(obj.id)) {
        const newGrade = newGrades.filter((gradeObj) => gradeObj.studentId === obj.id);
        return { ...obj, grade: newGrade[0].grade };
      }
      return obj;
    });
    return newStudents;
  }
  return [];
}
