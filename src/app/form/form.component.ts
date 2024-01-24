import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent {
  titulo = 'MusicFinder'
  response = ''
  responseReceived = false;

  requestData(){
    console.log("Data requested to Spotify. Source: "+this.titulo)

  }
}
