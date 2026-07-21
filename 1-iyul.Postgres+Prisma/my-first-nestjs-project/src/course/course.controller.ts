import { Body, Controller, Get, Post } from '@nestjs/common';
import { CourseService } from './course.service';

@Controller('course')
export class CourseController {
  constructor(private courseService: CourseService) {}

  @Get()
  getCourses() {
    return this.courseService.getCourses();
  }

  @Post()
  createCourse(@Body() body: any) {
    return this.courseService.createCourse(body);
  }
}
