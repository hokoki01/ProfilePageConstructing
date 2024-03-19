// profile-page.component.ts
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  standalone:true,
  imports: [
    ReactiveFormsModule
  ]
})
export class ProfilePageComponent implements OnInit {
  profileForm: FormGroup;
  profileData: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('assets/profilePage.json')
      .toPromise()
      .then(data => {
        this.profileData = data;
        this.initializeForm();
      })
      .catch(error => {
        console.error('Error fetching profile data:', error);
      });
  }

  initializeForm(): void {
    this.profileForm = new FormGroup({
      name: new FormControl(this.profileData.student_information.name),
      age: new FormControl(this.profileData.student_information.age),
      gender: new FormControl(this.profileData.student_information.gender),
      email: new FormControl(this.profileData.student_information.email),
      phone_number: new FormControl(this.profileData.student_information.phone_number),
      major: new FormControl(this.profileData.student_information.major),
      year_of_study: new FormControl(this.profileData.student_information.year_of_study)
    });
  }

  onSubmit() {
    if (this.profileForm.valid) {
      // Assuming you want to submit the form data to a backend server
      // You can make an HTTP request here to save/update the profile information
      console.log('Form submitted:', this.profileForm.value);
      // Example HTTP request (uncomment and customize as needed)
      this.http.post<any>('YOUR_BACKEND_ENDPOINT', this.profileForm.value)
        .toPromise()
        .then(response => {
          console.log('Server response:', response);
          // Optionally, you can handle the response or navigate to another page
        })
        .catch(error => {
          console.error('Error submitting form:', error);
          // Optionally, you can display an error message to the user
        });
    } else {
      // Handle form validation errors if any
      console.log('Form is invalid. Please fill in all required fields.');
    }
  }
}
