import { Component } from '@angular/core';
import { SportEvent } from "./../interfaces/sport-event";
import { SportService} from './../sport/sport.service';
import { Sport } from './../interfaces/sport';
import { GoogleMapService } from  './../google-maps/google-map.service';
import { AccountService} from './../account/account.service';
import { SportEventService } from './sport-event.service';
import { ImageResult, ResizeOptions } from 'ng2-imageupload';


interface marker {
    lat: number;
    lng: number;
    label?: string;
    draggable: boolean;
    icon?: string;
}

@Component({
  templateUrl: "app/sport-event/sport-event.create.component.html",
  providers : [GoogleMapService,SportService,AccountService,SportEventService]
})


export class CreateSportEventComponent  {

    constructor(private sportService : SportService,private googleMapService : GoogleMapService,
                private acccountService : AccountService , private sportEventService : SportEventService) {}


    sportEvent : SportEvent;
    sports : Sport[];
    m: marker = {
        lat: 0,
        lng: 0,
        label:"L",
        draggable: false
    };
    image: any;



    mapClicked($event) {
        console.log($event.coords);
        this.m.lat = $event.coords.lat;
        this.m.lng = $event.coords.lng;
        this.setAddress( this.m.lat, this.m.lng);
    }

    setAddress(lat,lng): void {
      console.log(lat);
      console.log(lng);
        this.googleMapService.getAdress(lat,lng).then(adress =>{
            this.sportEvent.Adress.address = adress.results[0].formatted_address;
            this.sportEvent.Adress.latitude = this.m.lat;
            this.sportEvent.Adress.longitude = this.m.lng;
        }).catch(error =>{
            console.log("An error");
        })
    }


    setOwner() {
      this.acccountService.getAccount(localStorage.getItem('id_token')).then(
        ac => this.sportEvent.Owner = ac
      ).catch (
        er => console.log(er)
      );
    }

    getSports() {
      this.sportService.getSports().then(
        sp => {
          this.sports = sp;
          console.log(this.sports);
        }
      ).catch(er => console.log(er));
    }

    CreateEvent() { 
     var name = this.sportEvent.Category.Name + this.sportEvent.Adress.address +  this.sportEvent.Owner.UserName;
     console.log(this.image);
     console.log(name);
     if(this.image != null) {
        this.sportEventService.postImage(this.image,name).then(im => console.log("SUccess")).catch(er => console.log(er));
        var extension = this.image.name.split('.')[1];
        this.sportEvent.ImagePath = name + '.' + extension;

     } else {
       this.sportEvent.ImagePath = "noimage.jpg";
     }
      
      this.sportEventService.postSportEvent(this.sportEvent).then(
        sp => console.log(sp)
      ). catch (
        er => console.log(er)
      )
    }


    src: string = "";
    resizeOptions: ResizeOptions = {
        resizeMaxHeight: 128,
        resizeMaxWidth: 128
    };
 
    selected(imageResult: ImageResult) {
        this.src = imageResult.resized
            && imageResult.resized.dataURL
            || imageResult.dataURL;

           this.image = imageResult.file;

            
  }

    ngOnInit() {


      this.sportEvent = {
    Id : null,
    Title : null,
    Date : null,
    Description : null,
    Category: {
        Id : null,
        Name: null,
    },
    Owner : {
        Id :null,
        FullName: null,
        UserName:null,
        Email : null,
        Adress : {
            Id : null,
            address: null,
            latitude :null,
            longitude: null,
        }
    },
    Adress : {
        Id : null,
        address: null,
        latitude: null,
        longitude: null,     
    },
    ImagePath:null,
    ImageBase64:null
  }
  this.setOwner();
  this.getSports();
    }  
}


