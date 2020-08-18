import { ApiserviceService } from './../../services/apiservice.service';
import { Component, OnInit } from '@angular/core';

import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { ToastrService } from 'ngx-toastr';

import { ChangeDetectorRef, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {


  img1: any = '/assets/img/logo.jpg';
  editFile: boolean = true;
  removeUpload: boolean = false;

  constructor(private api: ApiserviceService,  private toast: ToastrService,
    public fb: FormBuilder,
    private cd: ChangeDetectorRef
    ) { }
  files: NgxFileDropEntry[] = [];

  registrationForm = this.fb.group({
    file: [null]
  });
  ngOnInit(): void {
  }

  uploadFile(event) {
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);

      // When file uploads set it to file formcontrol
      reader.onload = () => {
        this.img1 = reader.result;
        this.registrationForm.patchValue({
          file: reader.result
        });
        this.editFile = false;
        this.removeUpload = true;
      }
      // ChangeDetectorRef since file is loading outside the zone
      this.cd.markForCheck();
    }
  }



  // public dropped(files: NgxFileDropEntry[]) {
  //   this.files = files;
  //   for (const droppedFile of files) {

  //     // Is it a file?
  //     if (droppedFile.fileEntry.isFile) {
  //       const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
  //       fileEntry.file((file: File) => {

  //         if(file.type ===  'application/pdf' ||
  //         file.type === 'application/x-zip-compressed' ||
  //         file.type === 'audio/mpeg'  ||
  //         file.type === 'video/mp4' ||
  //         file.type === 'application/x-msdownload')
  //         {
  //           this.toast.warning ('No puedes subir este tipo de archivo','Alerta');
  //         }else{

  //           console.log(droppedFile.relativePath, 'soy el acceso ----> archivo', file);

  //         }
  //         // Here you can access the real file

  //         /**
  //         // You could upload it like this:
  //         const formData = new FormData()
  //         formData.append('logo', file, relativePath)

  //         // Headers
  //         const headers = new HttpHeaders({
  //           'security-token': 'mytoken'
  //         })

  //         this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
  //         .subscribe(data => {
  //           // Sanitized logo returned from backend
  //         })
  //         **/
  //       });
  //     } else {
  //       // It was a directory (empty directories are added, otherwise only files)
  //       const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
  //       console.log('datoos ->',droppedFile.relativePath, fileEntry);
  //     }
  //   }
  // }

  // public fileOver(event){
  //   console.log(event);
  // }

  // public fileLeave(event){
  //   console.log(event);
  // }
}

