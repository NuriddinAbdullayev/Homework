import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StudentsService {
  constructor(private prisma:PrismaService){}

  getStudents() {
    return this.prisma.student.findMany({
      include: {
        courses: true,
      }
    })
  }

  createStudent(body: any) {
    return this.prisma.student.create({
      data: body,
    });
  }

  async addCourse(studentId: number, courseId: number) {
    return this.prisma.student.update({
      where: {
        id: studentId,
      },
      data: {
        courses: {
          connect: {
            id: courseId,
          },
        },
      },
    });
  }

  async removeCourse(studentId: number, courseId: number) {
  return this.prisma.student.update({
    where: {
      id: studentId,
    },
    data: {
      courses: {
        disconnect: {
          id: courseId,
        },
      },
    },
    });
  }
}
