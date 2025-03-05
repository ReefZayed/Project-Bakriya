import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'; 
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-news',
  imports: [],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {

  newsForm: FormGroup;

  constructor (private fb: FormBuilder, private http: HttpClient){
    this.newsForm= this.fb.group({
      title:[''],
      date :[''],
      location :[''],
      description:[''],
      content :[''],
      image :[null],

    });
  }

  onFileChange(event:any){
    const file= event.target.file[0];
    this.newsForm.patchValue({image:file});

  }
  //submit form 
  submitNews(){
    const formData =new FormData();
    formData.append('title',this.newsForm.get('title')?.value);
    formData.append('date',this.newsForm.get('date')?.value);
    formData.append('location',this.newsForm.get('location')?.value);
    formData.append('description',this.newsForm.get('description')?.value);
    formData.append('content',this.newsForm.get('content')?.value);

    // before send image check there is image?
    if(this.newsForm.get('image')?.value){
      formData.append('image',this.newsForm.get('image')?.value);
    }

    // To send formData to API by use HttpClient
    this.http.post('http://127.0.0.1:8000/api/news/', formData).subscribe(response => {
      console.log('News added successfully!', response);  
    });

  }
  
}
