import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CourseService {
  constructor(private prisma: PrismaService) {}

  getCourses() {
    return this.prisma.course.findMany({
      include: {
        students: true,
      }
    })
  }

  createCourse(body: any) {
    return this.prisma.course.create({
      data: body,
    })
  }
}
