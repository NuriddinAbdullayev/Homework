import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private studentService: StudentsService) {}

  @Get()
  getstudents() {
    return this.studentService.getStudents();
  }

  @Post()
  createStudent(@Body() body:any) {
    return this.studentService.createStudent(body)
  }

  @Patch(':studentId/course/:courseId')
  addCourse(
    @Param('studentId') studentId: string,
    @Param('courseId') courseId: string,
  ){
    return this.studentService.addCourse(
    Number(studentId),
    Number(courseId),
  );
  }

  @Patch(':studentId/remove-course/:courseId')
  removeCourse(
    @Param('studentId') studentId: string,
    @Param('courseId') courseId: string,
  ){
    return this.studentService.removeCourse(
    Number(studentId),
    Number(courseId),
    );
  }
}
