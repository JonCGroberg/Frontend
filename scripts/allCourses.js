const courseContainer = document.getElementById("course-list-container");

window.onload = async () => {
  const url = "http://localhost:8081/api/courses/";
  const response = await fetch(url);
  const courseData = await response.json();

  populateCourseList(await courseData);
};

function populateCourseList(courseData) {
  courseData.forEach((course) => {
    courseContainer.innerHTML += generateCourseCard(course);
  });
}

function generateCourseCard(course) {
  return `<div class = "card">
						<div class="card-header">
							<p class="card-text">${course.courseName}</p>
						</div>
						<div class = "card-body">
							<p></p>
						</div>
					</div>`;
}
