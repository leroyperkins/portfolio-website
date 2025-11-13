import { Injectable } from '@angular/core';
import { RESUME_DATA, ResumeData } from '../../data/resume.data';

@Injectable({ providedIn: 'root' })
export class ResumeService {
  readonly data: ResumeData = RESUME_DATA;
}