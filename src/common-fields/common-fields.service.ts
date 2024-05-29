import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonFieldsService {
  studentAttributes: string[] = [
    'id',
    'name',
    'age',
    'email',
    'address',
    'department',
  ];
  facultyAttributes: string[] = [
    'id',
    'name',
    'age',
    'salary',
    'email',
    'department',,
  ];
  identifyCommonFields(): string[] {
    const commonFields = this.studentAttributes.filter((field) =>
      this.facultyAttributes.includes(field),
    );
    return commonFields;
  }
}
