import {Component} from 'angular2/core';
import {Video} from "./video";

@Component({
    selector: "playlist",
    templateUrl: "app/templates/playlist.component.html",
    inputs: ['videos']
})

export class PlaylistComponent{
    onSelect(vid:Video) {
        console.log(vid);
    }
}