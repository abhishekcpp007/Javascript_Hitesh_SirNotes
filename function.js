const course={
    name:"Python",
    price:1000,
    duration:30,
    courseInstructor:"Hitesh Sir"
}
console.log(course.courseInstructor)

const {courseInstructor:b}=course
console.log(b)